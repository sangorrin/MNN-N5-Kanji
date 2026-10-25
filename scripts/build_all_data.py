# scripts/build_all_data.py
import json
import re
from kanji_dict_data import EXTRA_KANJI_INFO

# 1. Read existing kanji files
kanji_files = [
    'src/data/kanji_pre_04.ts',
    'src/data/kanji_05_10.ts',
    'src/data/kanji_11_16.ts',
    'src/data/kanji_17_20.ts',
    'src/data/kanji_21_25.ts',
]

all_original_kanji = []
for kf in kanji_files:
    with open(kf, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Extract kanji objects by parsing JSON-like blocks or regex
    # Each kanji has: id, kanji, onyomi, kunyomi, meaning, strokes, examples
    blocks = re.findall(r'\{\s*id:\s*(\d+),\s*kanji:\s*[\x27"]([^\x27"]+)[\x27"],\s*lessonId:\s*[\x27"]([^\x27"]+)[\x27"],\s*onyomi:\s*\[([^\]]*)\],\s*kunyomi:\s*\[([^\]]*)\],\s*meaning:\s*[\x27"]([^\x27"]+)[\x27"],\s*strokes:\s*(\d+),', content)
    
    # Also find examples for each kanji
    for b in blocks:
        k_id = int(b[0])
        k_char = b[1]
        k_old_lesson = b[2]
        k_onyomi = [x.strip().strip("'\"") for x in b[3].split(',') if x.strip()]
        k_kunyomi = [x.strip().strip("'\"") for x in b[4].split(',') if x.strip()]
        k_meaning = b[5]
        k_strokes = int(b[6])
        all_original_kanji.append({
            "id": k_id,
            "kanji": k_char,
            "oldLessonId": k_old_lesson,
            "onyomi": k_onyomi,
            "kunyomi": k_kunyomi,
            "meaning": k_meaning,
            "strokes": k_strokes,
            "examples": []
        })

print(f"Loaded {len(all_original_kanji)} original kanji.")

# 2. Read vocabulary
with open('src/data/vocabulary.ts', 'r', encoding='utf-8') as f:
    v_text = f.read()

marker = "export const MNN_VOCABULARY: VocabularyItem[] = "
v_start = v_text.find(marker) + len(marker)
v_end = v_text.rfind('];') + 1
vocab_items = json.loads(v_text[v_start:v_end])
print(f"Loaded {len(vocab_items)} vocabulary items.")

# 3. Find first lesson for every kanji in vocabulary
lesson_order = ["pre"] + [f"l{i:02d}" for i in range(1, 26)]
lesson_priority = {l: i for i, l in enumerate(lesson_order)}

kanji_first_lesson = {}
kanji_examples_from_vocab = {}

for v in vocab_items:
    l_id = v["lessonId"]
    for k in v["targetKanji"]:
        if k not in kanji_first_lesson:
            kanji_first_lesson[k] = l_id
        if k not in kanji_examples_from_vocab:
            kanji_examples_from_vocab[k] = []
        # Add word as example if not already present
        if not any(ex["kanji"] == v["kanji"] for ex in kanji_examples_from_vocab[k]):
            kanji_examples_from_vocab[k].append({
                "kanji": v["kanji"],
                "reading": v["reading"],
                "romaji": v["romaji"],
                "meaning": v["spanish"]
            })

# 4. Map original kanji to new individual lessonId
unmatched_fallback = {
    "民": "l21",
    "林": "l23",
    "森": "l23",
    "験": "l25",
    "文": "l25",
}

for k in all_original_kanji:
    char = k["kanji"]
    if k["id"] <= 10:
        k["lessonId"] = "pre"
    elif char in kanji_first_lesson:
        k["lessonId"] = kanji_first_lesson[char]
    elif char in unmatched_fallback:
        k["lessonId"] = unmatched_fallback[char]
    else:
        # fallback based on old lesson
        old_l = k["oldLessonId"]
        if '-' in old_l:
            k["lessonId"] = old_l.split('-')[0]
        else:
            k["lessonId"] = old_l

    # Examples from vocab, or keep original if empty
    vocab_exs = kanji_examples_from_vocab.get(char, [])
    if vocab_exs:
        k["examples"] = vocab_exs[:6]
    else:
        k["examples"] = [
            {"kanji": char, "reading": k["onyomi"][0] if k["onyomi"] else "", "romaji": "", "meaning": k["meaning"]}
        ]

# 5. Add extra kanji from vocabulary
existing_kanji_chars = set(k["kanji"] for k in all_original_kanji)
next_id = 219

extra_kanji_list = []
for char, info in EXTRA_KANJI_INFO.items():
    if char not in existing_kanji_chars:
        l_id = kanji_first_lesson.get(char, "l01")
        exs = kanji_examples_from_vocab.get(char, [])
        extra_kanji_list.append({
            "id": next_id,
            "kanji": char,
            "lessonId": l_id,
            "onyomi": info["onyomi"],
            "kunyomi": info["kunyomi"],
            "meaning": info["meaning"],
            "strokes": info["strokes"],
            "examples": exs[:6] if exs else [
                {"kanji": char, "reading": info["onyomi"][0] if info["onyomi"] else "", "romaji": "", "meaning": info["meaning"]}
            ]
        })
        next_id += 1

all_kanji_final = all_original_kanji + extra_kanji_list
# Sort by lesson order, then by id
all_kanji_final.sort(key=lambda x: (lesson_priority.get(x["lessonId"], 99), x["id"]))

print(f"Total kanji in final list: {len(all_kanji_final)} (Original: {len(all_original_kanji)}, Extra: {len(extra_kanji_list)})")

# Count kanji per lesson
kanji_per_lesson = {}
for k in all_kanji_final:
    kanji_per_lesson[k["lessonId"]] = kanji_per_lesson.get(k["lessonId"], 0) + 1

print("Kanji per lesson count:", kanji_per_lesson)

# 6. Generate lessons.ts
lesson_metadata = [
    ("pre", "Pre-lección (数)", "数 Números", "Los números básicos del 1 al 10 y cifras", "rose"),
    ("l01", "Lección 1", "Lección 1", "Presentaciones, personas, nacionalidades y profesiones", "orange"),
    ("l02", "Lección 2", "Lección 2", "Objetos cotidianos, pertenencias y demostrativos", "amber"),
    ("l03", "Lección 3", "Lección 3", "Lugares, instalaciones, pisos y precios", "yellow"),
    ("l04", "Lección 4", "Lección 4", "Horas, días de la semana y rutinas diarias", "emerald"),
    ("l05", "Lección 5", "Lección 5", "Desplazamientos, medios de transporte y fechas", "teal"),
    ("l06", "Lección 6", "Lección 6", "Comidas, bebidas, acciones y hábitos cotidianos", "cyan"),
    ("l07", "Lección 7", "Lección 7", "Herramientas, regalos, familia y dar/recibir", "sky"),
    ("l08", "Lección 8", "Lección 8", "Adjetivos, descripciones de cosas y lugares", "blue"),
    ("l09", "Lección 9", "Lección 9", "Gustos, habilidades, razones y posesiones", "indigo"),
    ("l10", "Lección 10", "Lección 10", "Ubicación espacial, existencia y posiciones", "violet"),
    ("l11", "Lección 11", "Lección 11", "Contadores, cantidades, períodos y precios", "purple"),
    ("l12", "Lección 12", "Lección 12", "Comparaciones, estaciones del año y clima", "fuchsia"),
    ("l13", "Lección 13", "Lección 13", "Deseos, propósitos de movimiento y ocio", "pink"),
    ("l14", "Lección 14", "Lección 14", "Peticiones e instrucciones (forma ～てください)", "rose"),
    ("l15", "Lección 15", "Lección 15", "Permisos y prohibiciones (forma ～てもいいです)", "orange"),
    ("l16", "Lección 16", "Lección 16", "Secuencia de acciones y descripción con adjetivos (forma ～て)", "amber"),
    ("l17", "Lección 17", "Lección 17", "Obligaciones y prohibiciones (forma ～なければなりません)", "emerald"),
    ("l18", "Lección 18", "Lección 18", "Capacidades, aficiones y hobbies (forma Diccionario)", "teal"),
    ("l19", "Lección 19", "Lección 19", "Experiencias pasadas y sugerencias (forma ～たことがある)", "cyan"),
    ("l20", "Lección 20", "Lección 20", "Conversación informal y estilo coloquial (普通形)", "sky"),
    ("l21", "Lección 21", "Lección 21", "Opiniones, conjeturas y citas (～と思います / ～と言いました)", "indigo"),
    ("l22", "Lección 22", "Lección 22", "Modificación del sustantivo con oraciones y ropa", "violet"),
    ("l23", "Lección 23", "Lección 23", "Direcciones en la ciudad y condiciones (～とき / ～と)", "purple"),
    ("l24", "Lección 24", "Lección 24", "Acciones de dar y recibir favores (～てくれます / ～てもらいます)", "fuchsia"),
    ("l25", "Lección 25", "Lección 25", "Condiciones hipotéticas y concesivas (～たら / ～ても)", "pink"),
]

color_palettes = {
    "rose": {"bg": "bg-rose-50", "border": "border-rose-200", "text": "text-rose-700", "active": "bg-rose-100 border-rose-300 text-rose-800"},
    "orange": {"bg": "bg-orange-50", "border": "border-orange-200", "text": "text-orange-700", "active": "bg-orange-100 border-orange-300 text-orange-800"},
    "amber": {"bg": "bg-amber-50", "border": "border-amber-200", "text": "text-amber-700", "active": "bg-amber-100 border-amber-300 text-amber-800"},
    "yellow": {"bg": "bg-amber-50", "border": "border-amber-300", "text": "text-amber-800", "active": "bg-amber-100 border-amber-400 text-amber-900"},
    "emerald": {"bg": "bg-emerald-50", "border": "border-emerald-200", "text": "text-emerald-700", "active": "bg-emerald-100 border-emerald-300 text-emerald-800"},
    "teal": {"bg": "bg-teal-50", "border": "border-teal-200", "text": "text-teal-700", "active": "bg-teal-100 border-teal-300 text-teal-800"},
    "cyan": {"bg": "bg-cyan-50", "border": "border-cyan-200", "text": "text-cyan-700", "active": "bg-cyan-100 border-cyan-300 text-cyan-800"},
    "sky": {"bg": "bg-sky-50", "border": "border-sky-200", "text": "text-sky-700", "active": "bg-sky-100 border-sky-300 text-sky-800"},
    "blue": {"bg": "bg-blue-50", "border": "border-blue-200", "text": "text-blue-700", "active": "bg-blue-100 border-blue-300 text-blue-800"},
    "indigo": {"bg": "bg-indigo-50", "border": "border-indigo-200", "text": "text-indigo-700", "active": "bg-indigo-100 border-indigo-300 text-indigo-800"},
    "violet": {"bg": "bg-violet-50", "border": "border-violet-200", "text": "text-violet-700", "active": "bg-violet-100 border-violet-300 text-violet-800"},
    "purple": {"bg": "bg-purple-50", "border": "border-purple-200", "text": "text-purple-700", "active": "bg-purple-100 border-purple-300 text-purple-800"},
    "fuchsia": {"bg": "bg-fuchsia-50", "border": "border-fuchsia-200", "text": "text-fuchsia-700", "active": "bg-fuchsia-100 border-fuchsia-300 text-fuchsia-800"},
    "pink": {"bg": "bg-pink-50", "border": "border-pink-200", "text": "text-pink-700", "active": "bg-pink-100 border-pink-300 text-pink-800"},
}

lesson_groups = []
for lid, title, short_title, desc, color_name in lesson_metadata:
    k_cnt = kanji_per_lesson.get(lid, 0)
    colors = color_palettes[color_name]
    lesson_groups.append({
        "id": lid,
        "title": title,
        "shortTitle": short_title,
        "description": desc,
        "kanjiCount": k_cnt,
        "pastelColor": colors,
    })

lessons_code = """import { LessonGroup } from './types';

export const LESSON_GROUPS: LessonGroup[] = """ + json.dumps(lesson_groups, ensure_ascii=False, indent=2) + """;
"""

with open("src/data/lessons.ts", "w", encoding="utf-8") as f:
    f.write(lessons_code)
print("Updated src/data/lessons.ts")

# 7. Write src/data/kanji_all.ts
kanji_code = """import { KanjiItem } from './types';

export const ALL_KANJI: KanjiItem[] = """ + json.dumps(all_kanji_final, ensure_ascii=False, indent=2) + """;
"""

with open("src/data/kanji_all.ts", "w", encoding="utf-8") as f:
    f.write(kanji_code)
print("Generated src/data/kanji_all.ts")

print("Build complete!")

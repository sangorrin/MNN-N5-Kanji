export interface SentenceSegment {
  text: string;
  furigana?: string;
}

export interface SentenceItem {
  id: string;
  lessonId: string;
  lessonNumber: string;
  section: '文型 (Patrón)' | '例文 (Ejemplo)';
  segments: SentenceSegment[];
  japaneseText: string;
  romaji: string;
  spanish: string;
  targetKanji: string[];
}

export const MNN_SENTENCES: SentenceItem[] = [
  // --- Pre-lección (数: 一〜十) ---
  {
    id: 's-pre-1',
    lessonId: 'pre',
    lessonNumber: 'Pre-lección',
    section: '文型 (Patrón)',
    segments: [
      { text: '一', furigana: 'いち' },
      { text: '、' },
      { text: '二', furigana: 'に' },
      { text: '、' },
      { text: '三', furigana: 'さん' },
      { text: '、' },
      { text: '四', furigana: 'よん' },
      { text: '、' },
      { text: '五', furigana: 'ご' },
      { text: '、' },
      { text: '六', furigana: 'ろく' },
      { text: '、' },
      { text: '七', furigana: 'なな' },
      { text: '、' },
      { text: '八', furigana: 'はち' },
      { text: '、' },
      { text: '九', furigana: 'きゅう' },
      { text: '、' },
      { text: '十', furigana: 'じゅう' },
      { text: '。' },
    ],
    japaneseText: '一、二、三、四、五、六、七、八、九、十。',
    romaji: 'Ichi, ni, san, yon, go, roku, nana, hachi, kyuu, juu.',
    spanish: 'Uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez.',
    targetKanji: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十'],
  },
  {
    id: 's-pre-2',
    lessonId: 'pre',
    lessonNumber: 'Pre-lección',
    section: '例文 (Ejemplo)',
    segments: [
      { text: 'りんごを' },
      { text: '一つ', furigana: 'ひとつ' },
      { text: 'ください。' },
    ],
    japaneseText: 'りんごを一つください。',
    romaji: 'Ringo o hitotsu kudasai.',
    spanish: 'Por favor, deme una manzana.',
    targetKanji: ['一'],
  },
  {
    id: 's-pre-3',
    lessonId: 'pre',
    lessonNumber: 'Pre-lección',
    section: '例文 (Ejemplo)',
    segments: [
      { text: 'みかんが' },
      { text: '三つ', furigana: 'みっつ' },
      { text: 'あります。' },
    ],
    japaneseText: 'みかんが三つあります。',
    romaji: 'Mikan ga mittsu arimasu.',
    spanish: 'Hay tres mandarinas.',
    targetKanji: ['三'],
  },
  {
    id: 's-pre-4',
    lessonId: 'pre',
    lessonNumber: 'Pre-lección',
    section: '例文 (Ejemplo)',
    segments: [
      { text: '二人', furigana: 'ふたり' },
      { text: 'で' },
      { text: '行きます', furigana: 'いきます' },
      { text: '。' },
    ],
    japaneseText: '二人で行きます。',
    romaji: 'Futari de ikimasu.',
    spanish: 'Iremos dos personas.',
    targetKanji: ['二', '人', '行'],
  },
  {
    id: 's-pre-5',
    lessonId: 'pre',
    lessonNumber: 'Pre-lección',
    section: '例文 (Ejemplo)',
    segments: [
      { text: '四人', furigana: 'よにん' },
      { text: 'の' },
      { text: '家族', furigana: 'かぞく' },
      { text: 'です。' },
    ],
    japaneseText: '四人の家族です。',
    romaji: 'Yonin no kazoku desu.',
    spanish: 'Somos una familia de cuatro personas.',
    targetKanji: ['四', '人', '家', '族'],
  },


  // --- Lección 1 (文型 & 例文) ---
  {
    id: "s-l01-1",
    lessonId: "l01",
    lessonNumber: "Lección 1",
    section: "文型 (Patrón)",
    segments: [
      { text: "わたしはマイク・ミラーです。" },
    ],
    japaneseText: "わたしはマイク・ミラーです。",
    romaji: "Watashi wa Maiku Miraa desu.",
    spanish: "Yo soy Mike Miller.",
    targetKanji: [],
  },
  {
    id: "s-l01-2",
    lessonId: "l01",
    lessonNumber: "Lección 1",
    section: "文型 (Patrón)",
    segments: [
      { text: "サントスさんは" },
      { text: "学生", furigana: "がくせい" },
      { text: "じゃありません。" },
    ],
    japaneseText: "サントスさんは学生じゃありません。",
    romaji: "Santosu-san wa gakusei ja arimasen.",
    spanish: "El Sr. Santos no es estudiante.",
    targetKanji: ["学","学生","生"],
  },
  {
    id: "s-l01-3",
    lessonId: "l01",
    lessonNumber: "Lección 1",
    section: "文型 (Patrón)",
    segments: [
      { text: "ミラーさんは" },
      { text: "会社員", furigana: "かいしゃいん" },
      { text: "ですか。" },
    ],
    japaneseText: "ミラーさんは会社員ですか。",
    romaji: "Miraa-san wa kaishain desu ka.",
    spanish: "¿Es el Sr. Miller empleado de empresa?",
    targetKanji: ["社","会社","社員","会社員","員","会"],
  },
  {
    id: "s-l01-b4",
    lessonId: "l01",
    lessonNumber: "Lección 1",
    section: "文型 (Patrón)",
    segments: [
      { text: "サントスさんも" },
      { text: "会社員", furigana: "かいしゃいん" },
      { text: "です。" },
    ],
    japaneseText: "サントスさんも会社員です。",
    romaji: "Santosu-san mo kaishain desu.",
    spanish: "El Sr. Santos también es empleado de empresa.",
    targetKanji: ["社","会社","社員","会社員","員","会"],
  },
  {
    id: "s-l01-e1",
    lessonId: "l01",
    lessonNumber: "Lección 1",
    section: "例文 (Ejemplo)",
    segments: [
      { text: "[あなたは]マイク・ミラーさんですか。……はい、[わたしは]マイク・ミラーです。" },
    ],
    japaneseText: "[あなたは]マイク・ミラーさんですか。……はい、[わたしは]マイク・ミラーです。",
    romaji: "[Anata wa] Maiku Miraa-san desu ka. ...Hai, [watashi wa] Maiku Miraa desu.",
    spanish: "¿Es usted el Sr. Mike Miller? ...Sí, [yo] soy Mike Miller.",
    targetKanji: [],
  },
  {
    id: "s-l01-e2",
    lessonId: "l01",
    lessonNumber: "Lección 1",
    section: "例文 (Ejemplo)",
    segments: [
      { text: "ミラーさんは" },
      { text: "学生", furigana: "がくせい" },
      { text: "ですか。……いいえ、[わたしは]" },
      { text: "学生", furigana: "がくせい" },
      { text: "じゃありません。" },
    ],
    japaneseText: "ミラーさんは学生ですか。……いいえ、[わたしは]学生じゃありません。",
    romaji: "Miraa-san wa gakusei desu ka. ...Iie, [watashi wa] gakusei ja arimasen.",
    spanish: "¿Es el Sr. Miller estudiante? ...No, [yo] no soy estudiante.",
    targetKanji: ["学","学生","生"],
  },
  {
    id: "s-l01-e3",
    lessonId: "l01",
    lessonNumber: "Lección 1",
    section: "例文 (Ejemplo)",
    segments: [
      { text: "ワンさんは" },
      { text: "銀行員", furigana: "ぎんこういん" },
      { text: "ですか。……いいえ、[ワンさんは]" },
      { text: "銀行員", furigana: "ぎんこういん" },
      { text: "じゃありません。" },
      { text: "医者", furigana: "いしゃ" },
      { text: "です。" },
    ],
    japaneseText: "ワンさんは銀行員ですか。……いいえ、[ワンさんは]銀行員じゃありません。医者です。",
    romaji: "Wan-san wa ginkouin desu ka. ...Iie, [Wan-san wa] ginkouin ja arimasen. Isha desu.",
    spanish: "¿Es el Sr. Wang empleado de banco? ...No, [el Sr. Wang] no es empleado de banco. Es médico.",
    targetKanji: ["員","銀行員","行","銀行","医","医者","者","銀"],
  },
  {
    id: "s-l01-4",
    lessonId: "l01",
    lessonNumber: "Lección 1",
    section: "例文 (Ejemplo)",
    segments: [
      { text: "あの方", furigana: "あのかた" },
      { text: "はどなたですか。……ワットさんです。さくら" },
      { text: "大学", furigana: "だいがく" },
      { text: "の" },
      { text: "先生", furigana: "せんせい" },
      { text: "です。" },
    ],
    japaneseText: "あの方はどなたですか。……ワットさんです。さくら大学の先生です。",
    romaji: "Ano kata wa donata desu ka. ...Watto-san desu. Sakura daigaku no sensei desu.",
    spanish: "¿Quién es aquella persona? ...Es el Sr. Watt. Es profesor en la Universidad Sakura.",
    targetKanji: ["方","あの方","大","大学","学","先","先生","生"],
  },
  {
    id: "s-l01-e5",
    lessonId: "l01",
    lessonNumber: "Lección 1",
    section: "例文 (Ejemplo)",
    segments: [
      { text: "グプタさんは" },
      { text: "会社員", furigana: "かいしゃいん" },
      { text: "ですか。……はい、" },
      { text: "会社員", furigana: "かいしゃいん" },
      { text: "です。カリナさんも" },
      { text: "会社員", furigana: "かいしゃいん" },
      { text: "ですか。……いいえ。[カリナさんは]" },
      { text: "学生", furigana: "がくせい" },
      { text: "です。" },
    ],
    japaneseText: "グプタさんは会社員ですか。……はい、会社員です。カリナさんも会社員ですか。……いいえ。[カリナさんは]学生です。",
    romaji: "Guputa-san wa kaishain desu ka. ...Hai, kaishain desu. Karina-san mo kaishain desu ka. ...Iie. [Karina-san wa] gakusei desu.",
    spanish: "¿Es el Sr. Gupta empleado de empresa? ...Sí, es empleado. ¿Karina también es empleada de empresa? ...No, [Karina] es estudiante.",
    targetKanji: ["学","学生","社","会社","社員","会社員","員","会","生"],
  },
  {
    id: "s-l01-e6",
    lessonId: "l01",
    lessonNumber: "Lección 1",
    section: "例文 (Ejemplo)",
    segments: [
      { text: "テレーザちゃんは" },
      { text: "何歳", furigana: "なんさい" },
      { text: "ですか。……9" },
      { text: "歳", furigana: "さい" },
      { text: "です。" },
    ],
    japaneseText: "テレーザちゃんは何歳ですか。……9歳です。",
    romaji: "Tereeza-chan wa nansai desu ka. ...Kyuusai desu.",
    spanish: "¿Cuántos años tiene Teresa? ...Tiene 9 años.",
    targetKanji: ["何","何歳","歳"],
  },

  // --- Lección 2 (文型 & 例文) ---
  {
    id: "s-l02-b1",
    lessonId: "l02",
    lessonNumber: "Lección 2",
    section: "文型 (Patrón)",
    segments: [
      { text: "これは" },
      { text: "辞書", furigana: "じしょ" },
      { text: "です。" },
    ],
    japaneseText: "これは辞書です。",
    romaji: "Kore wa jisho desu.",
    spanish: "Esto es un diccionario.",
    targetKanji: ["書","辞書"],
  },
  {
    id: "s-l02-b2",
    lessonId: "l02",
    lessonNumber: "Lección 2",
    section: "文型 (Patrón)",
    segments: [
      { text: "それはわたしの" },
      { text: "傘", furigana: "かさ" },
      { text: "です。" },
    ],
    japaneseText: "それはわたしの傘です。",
    romaji: "Sore wa watashi no kasa desu.",
    spanish: "Esa es mi sombrilla.",
    targetKanji: [],
  },
  {
    id: "s-l02-b3",
    lessonId: "l02",
    lessonNumber: "Lección 2",
    section: "文型 (Patrón)",
    segments: [
      { text: "この" },
      { text: "本", furigana: "ほん" },
      { text: "はわたしのです。" },
    ],
    japaneseText: "この本はわたしのです。",
    romaji: "Kono hon wa watashi no desu.",
    spanish: "Este libro es mío.",
    targetKanji: ["本"],
  },
  {
    id: "s-l02-1",
    lessonId: "l02",
    lessonNumber: "Lección 2",
    section: "文型 (Patrón)",
    segments: [
      { text: "これは" },
      { text: "本", furigana: "ほん" },
      { text: "です。" },
    ],
    japaneseText: "これは本です。",
    romaji: "Kore wa hon desu.",
    spanish: "Esto es un libro.",
    targetKanji: ["本"],
  },
  {
    id: "s-l02-2",
    lessonId: "l02",
    lessonNumber: "Lección 2",
    section: "文型 (Patrón)",
    segments: [
      { text: "それは" },
      { text: "日本語", furigana: "にほんご" },
      { text: "の" },
      { text: "本", furigana: "ほん" },
      { text: "です。" },
    ],
    japaneseText: "それは日本語の本です。",
    romaji: "Sore wa Nihongo no hon desu.",
    spanish: "Ese es un libro de japonés.",
    targetKanji: ["本","日本","日本語","日","語"],
  },
  {
    id: "s-l02-e1",
    lessonId: "l02",
    lessonNumber: "Lección 2",
    section: "例文 (Ejemplo)",
    segments: [
      { text: "これはボールペンですか。……はい、そうです。" },
    ],
    japaneseText: "これはボールペンですか。……はい、そうです。",
    romaji: "Kore wa boorupen desu ka. ...Hai, sou desu.",
    spanish: "¿Es esto un bolígrafo? ...Sí, así es.",
    targetKanji: [],
  },
  {
    id: "s-l02-e2",
    lessonId: "l02",
    lessonNumber: "Lección 2",
    section: "例文 (Ejemplo)",
    segments: [
      { text: "それはノートですか。……いいえ、[これは]" },
      { text: "手帳", furigana: "てちょう" },
      { text: "です。" },
    ],
    japaneseText: "それはノートですか。……いいえ、[これは]手帳です。",
    romaji: "Sore wa nooto desu ka. ...Iie, [kore wa] techou desu.",
    spanish: "¿Es eso un cuaderno? ...No, [esto] es una agenda.",
    targetKanji: ["手","手帳"],
  },
  {
    id: "s-l02-e3",
    lessonId: "l02",
    lessonNumber: "Lección 2",
    section: "例文 (Ejemplo)",
    segments: [
      { text: "それは" },
      { text: "何", furigana: "なん" },
      { text: "ですか。……" },
      { text: "名刺", furigana: "めいし" },
      { text: "です。" },
    ],
    japaneseText: "それは何ですか。……名刺です。",
    romaji: "Sore wa nan desu ka. ...Meishi desu.",
    spanish: "¿Qué es eso? ...Es una tarjeta de presentación.",
    targetKanji: ["名","何"],
  },
  {
    id: "s-l02-e4",
    lessonId: "l02",
    lessonNumber: "Lección 2",
    section: "例文 (Ejemplo)",
    segments: [
      { text: "これは「9」ですか、「7」ですか。……「9」です。" },
    ],
    japaneseText: "これは「9」ですか、「7」ですか。……「9」です。",
    romaji: "Kore wa \"9\" desu ka, \"7\" desu ka. ...\"9\" desu.",
    spanish: "¿Esto es un «9» o un «7»? ...Es un «9».",
    targetKanji: [],
  },
  {
    id: "s-l02-e5",
    lessonId: "l02",
    lessonNumber: "Lección 2",
    section: "例文 (Ejemplo)",
    segments: [
      { text: "それは" },
      { text: "何", furigana: "なん" },
      { text: "の" },
      { text: "雑誌", furigana: "ざっし" },
      { text: "ですか。……コンピューターの" },
      { text: "雑誌", furigana: "ざっし" },
      { text: "です。" },
    ],
    japaneseText: "それは何の雑誌ですか。……コンピューターの雑誌です。",
    romaji: "Sore wa nan no zasshi desu ka. ...Konpyuutaa no zasshi desu.",
    spanish: "¿De qué es esa revista? ...Es una revista de informática.",
    targetKanji: ["何"],
  },
  {
    id: "s-l02-e6",
    lessonId: "l02",
    lessonNumber: "Lección 2",
    section: "例文 (Ejemplo)",
    segments: [
      { text: "あれはだれのかばんですか。……" },
      { text: "佐藤", furigana: "さとう" },
      { text: "さんのかばんです。" },
    ],
    japaneseText: "あれはだれのかばんですか。……佐藤さんのかばんです。",
    romaji: "Are wa dare no kaban desu ka. ...Satou-san no kaban desu.",
    spanish: "¿De quién es aquel bolso? ...Es el bolso de la Sra. Sato.",
    targetKanji: [],
  },
  {
    id: "s-l02-e7",
    lessonId: "l02",
    lessonNumber: "Lección 2",
    section: "例文 (Ejemplo)",
    segments: [
      { text: "これはミラーさんのですか。……いいえ、わたしのじゃありません。" },
    ],
    japaneseText: "これはミラーさんのですか。……いいえ、わたしのじゃありません。",
    romaji: "Kore wa Miraa-san no desu ka. ...Iie, watashi no ja arimasen.",
    spanish: "¿Esto es del Sr. Miller? ...No, no es mío.",
    targetKanji: [],
  },
  {
    id: "s-l02-e8",
    lessonId: "l02",
    lessonNumber: "Lección 2",
    section: "例文 (Ejemplo)",
    segments: [
      { text: "このかぎはだれのですか。……わたしのです。" },
    ],
    japaneseText: "このかぎはだれのですか。……わたしのです。",
    romaji: "Kono kagi wa dare no desu ka. ...Watashi no desu.",
    spanish: "¿De quién es esta llave? ...Es mía.",
    targetKanji: [],
  },
  {
    id: "s-l02-3",
    lessonId: "l02",
    lessonNumber: "Lección 2",
    section: "例文 (Ejemplo)",
    segments: [
      { text: "これは" },
      { text: "何", furigana: "なん" },
      { text: "ですか。" },
      { text: "車", furigana: "くるま" },
      { text: "の" },
      { text: "かぎです。" },
    ],
    japaneseText: "これは何ですか。車のかぎです。",
    romaji: "Kore wa nan desu ka. Kuruma no kagi desu.",
    spanish: "¿Qué es esto? Es la llave del coche.",
    targetKanji: ["何","車"],
  },
  {
    id: "s-l02-4",
    lessonId: "l02",
    lessonNumber: "Lección 2",
    section: "例文 (Ejemplo)",
    segments: [
      { text: "お名前", furigana: "おなまえ" },
      { text: "は" },
      { text: "何", furigana: "なん" },
      { text: "ですか。" },
    ],
    japaneseText: "お名前は何ですか。",
    romaji: "Onamae wa nan desu ka.",
    spanish: "¿Cuál es su nombre?",
    targetKanji: ["名","名前","お名前","何","前"],
  },

  // --- Lección 3 (文型 & 例文) ---
  {
    id: "s-l03-1",
    lessonId: "l03",
    lessonNumber: "Lección 3",
    section: "文型 (Patrón)",
    segments: [
      { text: "ここは" },
      { text: "食堂", furigana: "しょくどう" },
      { text: "です。" },
    ],
    japaneseText: "ここは食堂です。",
    romaji: "Koko wa shokudou desu.",
    spanish: "Aquí está el comedor.",
    targetKanji: ["食","食堂","堂"],
  },
  {
    id: "s-l03-b2",
    lessonId: "l03",
    lessonNumber: "Lección 3",
    section: "文型 (Patrón)",
    segments: [
      { text: "エレベーターはあそこです。" },
    ],
    japaneseText: "エレベーターはあそこです。",
    romaji: "Erebeetaa wa asoko desu.",
    spanish: "El ascensor está allí.",
    targetKanji: [],
  },
  {
    id: "s-l03-e1",
    lessonId: "l03",
    lessonNumber: "Lección 3",
    section: "例文 (Ejemplo)",
    segments: [
      { text: "ここは" },
      { text: "新大阪", furigana: "しんおおさか" },
      { text: "ですか。……はい、そうです。" },
    ],
    japaneseText: "ここは新大阪ですか。……はい、そうです。",
    romaji: "Koko wa Shin-Oosaka desu ka. ...Hai, sou desu.",
    spanish: "¿Es aquí Shin-Osaka? ...Sí, así es.",
    targetKanji: ["大","新"],
  },
  {
    id: "s-l03-e2",
    lessonId: "l03",
    lessonNumber: "Lección 3",
    section: "例文 (Ejemplo)",
    segments: [
      { text: "トイレはどこですか。……あそこです。" },
    ],
    japaneseText: "トイレはどこですか。……あそこです。",
    romaji: "Toire wa doko desu ka. ...Asoko desu.",
    spanish: "¿Dónde está el baño? ...Está allí.",
    targetKanji: [],
  },
  {
    id: "s-l03-e3",
    lessonId: "l03",
    lessonNumber: "Lección 3",
    section: "例文 (Ejemplo)",
    segments: [
      { text: "山田", furigana: "やまだ" },
      { text: "さんはどこですか。……" },
      { text: "会議室", furigana: "かいぎしつ" },
      { text: "です。" },
    ],
    japaneseText: "山田さんはどこですか。……会議室です。",
    romaji: "Yamada-san wa doko desu ka. ...Kaigishitsu desu.",
    spanish: "¿Dónde está el Sr. Yamada? ...Está en la sala de reuniones.",
    targetKanji: ["会","会議","山","山田さん","室","会議室","田","議"],
  },
  {
    id: "s-l03-e4",
    lessonId: "l03",
    lessonNumber: "Lección 3",
    section: "例文 (Ejemplo)",
    segments: [
      { text: "事務所", furigana: "じむしょ" },
      { text: "はどちらですか。……あちらです。" },
    ],
    japaneseText: "事務所はどちらですか。……あちらです。",
    romaji: "Jimusho wa dochira desu ka. ...Achira desu.",
    spanish: "¿Hacia dónde está la oficina? ...Es por allá.",
    targetKanji: ["事"],
  },
  {
    id: "s-l03-e5",
    lessonId: "l03",
    lessonNumber: "Lección 3",
    section: "例文 (Ejemplo)",
    segments: [
      { text: "[お]" },
      { text: "国", furigana: "くに" },
      { text: "はどちらですか。……アメリカです。" },
    ],
    japaneseText: "[お]国はどちらですか。……アメリカです。",
    romaji: "[O]kuni wa dochira desu ka. ...Amerika desu.",
    spanish: "¿De qué país es usted? ...De Estados Unidos.",
    targetKanji: ["国"],
  },
  {
    id: "s-l03-2",
    lessonId: "l03",
    lessonNumber: "Lección 3",
    section: "例文 (Ejemplo)",
    segments: [
      { text: "お国", furigana: "おくに" },
      { text: "はどちらですか。スペインです。" },
    ],
    japaneseText: "お国はどちらですか。スペインです。",
    romaji: "Okuni wa dochira desu ka. Supein desu.",
    spanish: "¿De qué país es usted? Soy de España.",
    targetKanji: ["国","お国"],
  },
  {
    id: "s-l03-e6",
    lessonId: "l03",
    lessonNumber: "Lección 3",
    section: "例文 (Ejemplo)",
    segments: [
      { text: "それはどこの" },
      { text: "靴", furigana: "くつ" },
      { text: "ですか。……イタリアの" },
      { text: "靴", furigana: "くつ" },
      { text: "です。" },
    ],
    japaneseText: "それはどこの靴ですか。……イタリアの靴です。",
    romaji: "Sore wa doko no kutsu desu ka. ...Itaria no kutsu desu.",
    spanish: "¿De dónde son esos zapatos? ...Son zapatos de Italia.",
    targetKanji: [],
  },
  {
    id: "s-l03-e7",
    lessonId: "l03",
    lessonNumber: "Lección 3",
    section: "例文 (Ejemplo)",
    segments: [
      { text: "この" },
      { text: "時計", furigana: "とけい" },
      { text: "はいくらですか。……18,600" },
      { text: "円", furigana: "えん" },
      { text: "です。" },
    ],
    japaneseText: "この時計はいくらですか。……18,600円です。",
    romaji: "Kono tokei wa ikura desu ka. ...Ichiman hassen roppyaku-en desu.",
    spanish: "¿Cuánto cuesta este reloj? ...Cuesta 18.600 yenes.",
    targetKanji: ["円","時","時計","計"],
  },
  {
    id: "s-l03-3",
    lessonId: "l03",
    lessonNumber: "Lección 3",
    section: "例文 (Ejemplo)",
    segments: [
      { text: "このワインは" },
      { text: "二千八百円", furigana: "にせんはっぴゃくえん" },
      { text: "です。" },
    ],
    japaneseText: "このワインは二千八百円です。",
    romaji: "Kono wain wa nisen happyaku-en desu.",
    spanish: "Este vino cuesta 2800 yenes.",
    targetKanji: ["二","八","八百","百","千","円","百円"],
  },

  // --- Lección 4 (文型 & 例文) ---
  {
    id: "s-l04-b1",
    lessonId: "l04",
    lessonNumber: "Lección 4",
    section: "文型 (Patrón)",
    segments: [
      { text: "今", furigana: "いま" },
      { text: "4" },
      { text: "時", furigana: "じ" },
      { text: "5" },
      { text: "分", furigana: "ふん" },
      { text: "です。" },
    ],
    japaneseText: "今4時5分です。",
    romaji: "Ima yoji gofun desu.",
    spanish: "Ahora son las 4:05.",
    targetKanji: ["時","分","今"],
  },
  {
    id: "s-l04-1",
    lessonId: "l04",
    lessonNumber: "Lección 4",
    section: "文型 (Patrón)",
    segments: [
      { text: "今", furigana: "いま" },
      { text: "四時半", furigana: "よじはん" },
      { text: "です。" },
    ],
    japaneseText: "今四時半です。",
    romaji: "Ima yoji-han desu.",
    spanish: "Ahora son las cuatro y media.",
    targetKanji: ["四","四時","時","半","四時半","今"],
  },
  {
    id: "s-l04-2",
    lessonId: "l04",
    lessonNumber: "Lección 4",
    section: "文型 (Patrón)",
    segments: [
      { text: "わたしは" },
      { text: "毎朝", furigana: "まいあさ" },
      { text: "六時", furigana: "ろくじ" },
      { text: "に" },
      { text: "起きます", furigana: "おきます" },
      { text: "。" },
    ],
    japaneseText: "わたしは毎朝六時に起きます。",
    romaji: "Watashi wa maiasa rokuji ni okimasu.",
    spanish: "Yo me levanto todas las mañanas a las seis.",
    targetKanji: ["六","毎","毎朝","時","朝"],
  },
  {
    id: "s-l04-b3",
    lessonId: "l04",
    lessonNumber: "Lección 4",
    section: "文型 (Patrón)",
    segments: [
      { text: "わたしはきのう" },
      { text: "勉強", furigana: "べんきょう" },
      { text: "しました。" },
    ],
    japaneseText: "わたしはきのう勉強しました。",
    romaji: "Watashi wa kinou benkyou shimashita.",
    spanish: "Yo estudié ayer.",
    targetKanji: ["強","勉強","勉"],
  },
  {
    id: "s-l04-e1",
    lessonId: "l04",
    lessonNumber: "Lección 4",
    section: "例文 (Ejemplo)",
    segments: [
      { text: "今何時", furigana: "いまなんじ" },
      { text: "ですか。……2" },
      { text: "時", furigana: "じ" },
      { text: "10" },
      { text: "分", furigana: "ぷん" },
      { text: "です。" },
    ],
    japaneseText: "今何時ですか。……2時10分です。",
    romaji: "Ima nanji desu ka. ...Niji jippun desu.",
    spanish: "¿Qué hora es ahora? ...Son las 2:10.",
    targetKanji: ["何","何時","時","分","今"],
  },
  {
    id: "s-l04-e2",
    lessonId: "l04",
    lessonNumber: "Lección 4",
    section: "例文 (Ejemplo)",
    segments: [
      { text: "ニューヨークは" },
      { text: "今何時", furigana: "いまなんじ" },
      { text: "ですか。……" },
      { text: "午前", furigana: "ごぜん" },
      { text: "0" },
      { text: "時", furigana: "じ" },
      { text: "10" },
      { text: "分", furigana: "ぷん" },
      { text: "です。" },
    ],
    japaneseText: "ニューヨークは今何時ですか。……午前0時10分です。",
    romaji: "Nyuuyooku wa ima nanji desu ka. ...Gozen reiji jippun desu.",
    spanish: "¿Qué hora es ahora en Nueva York? ...Son las 0:10 de la madrugada.",
    targetKanji: ["何","何時","時","分","今","前","午前","午"],
  },
  {
    id: "s-l04-e3",
    lessonId: "l04",
    lessonNumber: "Lección 4",
    section: "例文 (Ejemplo)",
    segments: [
      { text: "休み", furigana: "やすみ" },
      { text: "は" },
      { text: "何曜日", furigana: "なんようび" },
      { text: "ですか。……" },
      { text: "土曜日", furigana: "どようび" },
      { text: "と" },
      { text: "日曜日", furigana: "にちようび" },
      { text: "です。" },
    ],
    japaneseText: "休みは何曜日ですか。……土曜日と日曜日です。",
    romaji: "Yasumi wa nan-youbi desu ka. ...Doyoubi to nichiyoubi desu.",
    spanish: "¿Qué días son las vacaciones/descanso? ...Sábado y domingo.",
    targetKanji: ["日","日曜日","何","土","土曜日","休","休み"],
  },
  {
    id: "s-l04-e4",
    lessonId: "l04",
    lessonNumber: "Lección 4",
    section: "例文 (Ejemplo)",
    segments: [
      { text: "アップル" },
      { text: "銀行", furigana: "ぎんこう" },
      { text: "は" },
      { text: "何時", furigana: "なんじ" },
      { text: "から" },
      { text: "何時", furigana: "なんじ" },
      { text: "までですか。……9" },
      { text: "時", furigana: "じ" },
      { text: "から3" },
      { text: "時", furigana: "じ" },
      { text: "までです。" },
    ],
    japaneseText: "アップル銀行は何時から何時までですか。……9時から3時までです。",
    romaji: "Appuru ginkou wa nanji kara nanji made desu ka. ...Kuji kara sanji made desu.",
    spanish: "¿De qué hora a qué hora abre el Banco Apple? ...De 9:00 a 3:00.",
    targetKanji: ["何","何時","行","銀行","時","銀"],
  },
  {
    id: "s-l04-e5",
    lessonId: "l04",
    lessonNumber: "Lección 4",
    section: "例文 (Ejemplo)",
    segments: [
      { text: "毎晩", furigana: "まいばん" },
      { text: "何時", furigana: "なんじ" },
      { text: "に" },
      { text: "寝ます", furigana: "ねます" },
      { text: "か。……11" },
      { text: "時", furigana: "じ" },
      { text: "に" },
      { text: "寝ます", furigana: "ねます" },
      { text: "。" },
      { text: "毎日", furigana: "まいにち" },
      { text: "何時", furigana: "なんじ" },
      { text: "から" },
      { text: "何時", furigana: "なんじ" },
      { text: "まで" },
      { text: "勉強", furigana: "べんきょう" },
      { text: "しますか。……" },
      { text: "朝", furigana: "あさ" },
      { text: "9" },
      { text: "時", furigana: "じ" },
      { text: "から" },
      { text: "午後", furigana: "ごご" },
      { text: "3" },
      { text: "時", furigana: "じ" },
      { text: "まで" },
      { text: "勉強", furigana: "べんきょう" },
      { text: "します。" },
    ],
    japaneseText: "毎晩何時に寝ますか。……11時に寝ます。毎日何時から何時まで勉強しますか。……朝9時から午後3時まで勉強します。",
    romaji: "Maiban nanji ni nemasu ka. ...Juuichiji ni nemasu. Mainichi nanji kara nanji made benkyou shimasu ka. ...Asa kuji kara gogo sanji made benkyou shimasu.",
    spanish: "¿A qué hora te duermes cada noche? ...Me duermo a las 11. ¿De qué hora a qué hora estudias todos los días? ...Estudio desde las 9 de la mañana hasta las 3 de la tarde.",
    targetKanji: ["日","毎日","何","何時","毎","毎晩","時","午","午後","後","朝","晩","強","勉強","勉","勉強します"],
  },
  {
    id: "s-l04-e6",
    lessonId: "l04",
    lessonNumber: "Lección 4",
    section: "例文 (Ejemplo)",
    segments: [
      { text: "土曜日", furigana: "どようび" },
      { text: "働きます", furigana: "はたらきます" },
      { text: "か。……いいえ、" },
      { text: "働きません", furigana: "はたらきません" },
      { text: "。" },
    ],
    japaneseText: "土曜日働きますか。……いいえ、働きません。",
    romaji: "Doyoubi hatarakimasu ka. ...Iie, hatarakimasen.",
    spanish: "¿Trabajas el sábado? ...No, no trabajo.",
    targetKanji: ["日","土","土曜日"],
  },
  {
    id: "s-l04-e7",
    lessonId: "l04",
    lessonNumber: "Lección 4",
    section: "例文 (Ejemplo)",
    segments: [
      { text: "きのう" },
      { text: "勉強", furigana: "べんきょう" },
      { text: "しましたか。……いいえ、" },
      { text: "勉強", furigana: "べんきょう" },
      { text: "しませんでした。" },
    ],
    japaneseText: "きのう勉強しましたか。……いいえ、勉強しませんでした。",
    romaji: "Kinou benkyou shimashita ka. ...Iie, benkyou shimasen deshita.",
    spanish: "¿Estudiaste ayer? ...No, no estudié.",
    targetKanji: ["強","勉強","勉"],
  },
  {
    id: "s-l04-3",
    lessonId: "l04",
    lessonNumber: "Lección 4",
    section: "例文 (Ejemplo)",
    segments: [
      { text: "月曜日", furigana: "げつようび" },
      { text: "から" },
      { text: "金曜日", furigana: "きんようび" },
      { text: "まで" },
      { text: "働きます", furigana: "はたらきます" },
      { text: "。" },
      { text: "土曜日", furigana: "どようび" },
      { text: "は" },
      { text: "休み", furigana: "やすみ" },
      { text: "です。" },
    ],
    japaneseText: "月曜日から金曜日まで働きます。土曜日は休みです。",
    romaji: "Getsuyoubi kara kinyoubi made hatarakimasu. Doyoubi wa yasumi desu.",
    spanish: "Trabajo de lunes a viernes. Los sábados descanso.",
    targetKanji: ["日","月","月曜日","金","金曜日","土","土曜日","休","休み"],
  },
  {
    id: "s-l04-4",
    lessonId: "l04",
    lessonNumber: "Lección 4",
    section: "例文 (Ejemplo)",
    segments: [
      { text: "手紙", furigana: "てがみ" },
      { text: "を" },
      { text: "書きます", furigana: "かきます" },
      { text: "。" },
    ],
    japaneseText: "手紙を書きます。",
    romaji: "Tegami o kakimasu.",
    spanish: "Escribo una carta.",
    targetKanji: ["書","書きます","手","手紙"],
  },

  // --- Lección 5 (文型 & 例文) ---
  {
    id: "s-l05-1",
    lessonId: "l05",
    lessonNumber: "Lección 5",
    section: "文型 (Patrón)",
    segments: [
      { text: "わたしは" },
      { text: "京都", furigana: "きょうと" },
      { text: "へ" },
      { text: "行きます", furigana: "いきます" },
      { text: "。" },
    ],
    japaneseText: "わたしは京都へ行きます。",
    romaji: "Watashi wa Kyouto e ikimasu.",
    spanish: "Yo voy a Kioto.",
    targetKanji: ["行","行きます"],
  },
  {
    id: "s-l05-b2",
    lessonId: "l05",
    lessonNumber: "Lección 5",
    section: "文型 (Patrón)",
    segments: [
      { text: "わたしはタクシーでうちへ" },
      { text: "帰ります", furigana: "かえります" },
      { text: "。" },
    ],
    japaneseText: "わたしはタクシーでうちへ帰ります。",
    romaji: "Watashi wa takushii de uchi e kaerimasu.",
    spanish: "Yo regreso a casa en taxi.",
    targetKanji: ["帰","帰ります"],
  },
  {
    id: "s-l05-b3",
    lessonId: "l05",
    lessonNumber: "Lección 5",
    section: "文型 (Patrón)",
    segments: [
      { text: "わたしは" },
      { text: "家族", furigana: "かぞく" },
      { text: "と" },
      { text: "日本", furigana: "にほん" },
      { text: "へ" },
      { text: "来ました", furigana: "きました" },
      { text: "。" },
    ],
    japaneseText: "わたしは家族と日本へ来ました。",
    romaji: "Watashi wa kazoku to Nihon e kimashita.",
    spanish: "Vine a Japón con mi familia.",
    targetKanji: ["本","日本","日","来","家","家族","族"],
  },
  {
    id: "s-l05-2",
    lessonId: "l05",
    lessonNumber: "Lección 5",
    section: "文型 (Patrón)",
    segments: [
      { text: "わたしは" },
      { text: "友だち", furigana: "ともだち" },
      { text: "と" },
      { text: "日本", furigana: "にほん" },
      { text: "へ" },
      { text: "来ました", furigana: "きました" },
      { text: "。" },
    ],
    japaneseText: "わたしは友だちと日本へ来ました。",
    romaji: "Watashi wa tomodachi to Nihon e kimashita.",
    spanish: "Vine a Japón con un amigo.",
    targetKanji: ["本","日本","日","来","友"],
  },
  {
    id: "s-l05-3",
    lessonId: "l05",
    lessonNumber: "Lección 5",
    section: "文型 (Patrón)",
    segments: [
      { text: "電車", furigana: "でんしゃ" },
      { text: "で" },
      { text: "うちへ" },
      { text: "帰ります", furigana: "かえります" },
      { text: "。" },
    ],
    japaneseText: "電車でうちへ帰ります。",
    romaji: "Densha de uchi e kaerimasu.",
    spanish: "Vuelvo a casa en tren.",
    targetKanji: ["車","電車","帰","帰ります","電"],
  },
  {
    id: "s-l05-e1",
    lessonId: "l05",
    lessonNumber: "Lección 5",
    section: "例文 (Ejemplo)",
    segments: [
      { text: "あしたどこへ" },
      { text: "行きます", furigana: "いきます" },
      { text: "か。……" },
      { text: "奈良", furigana: "なら" },
      { text: "へ" },
      { text: "行きます", furigana: "いきます" },
      { text: "。" },
    ],
    japaneseText: "あしたどこへ行きますか。……奈良へ行きます。",
    romaji: "Ashita doko e ikimasu ka. ...Nara e ikimasu.",
    spanish: "¿A dónde vas mañana? ...Voy a Nara.",
    targetKanji: ["行","行きます"],
  },
  {
    id: "s-l05-e2",
    lessonId: "l05",
    lessonNumber: "Lección 5",
    section: "例文 (Ejemplo)",
    segments: [
      { text: "日曜日", furigana: "にちようび" },
      { text: "どこへ" },
      { text: "行きました", furigana: "いきました" },
      { text: "か。……どこ[へ]も" },
      { text: "行きませんでした", furigana: "いきませんでした" },
      { text: "。" },
    ],
    japaneseText: "日曜日どこへ行きましたか。……どこ[へ]も行きませんでした。",
    romaji: "Nichiyoubi doko e ikimashita ka. ...Doko [e] mo ikimasen deshita.",
    spanish: "¿A dónde fuiste el domingo? ...No fui a ningún sitio.",
    targetKanji: ["日","日曜日","行"],
  },
  {
    id: "s-l05-e3",
    lessonId: "l05",
    lessonNumber: "Lección 5",
    section: "例文 (Ejemplo)",
    segments: [
      { text: "何", furigana: "なん" },
      { text: "で" },
      { text: "東京", furigana: "とうきょう" },
      { text: "へ" },
      { text: "行きます", furigana: "いきます" },
      { text: "か。……" },
      { text: "新幹線", furigana: "しんかんせん" },
      { text: "で" },
      { text: "行きます", furigana: "いきます" },
      { text: "。" },
    ],
    japaneseText: "何で東京へ行きますか。……新幹線で行きます。",
    romaji: "Nan de Toukyou e ikimasu ka. ...Shinkansen de ikimasu.",
    spanish: "¿En qué vas a Tokio? ...Voy en Shinkansen.",
    targetKanji: ["何","行","行きます","新","新幹線"],
  },
  {
    id: "s-l05-e4",
    lessonId: "l05",
    lessonNumber: "Lección 5",
    section: "例文 (Ejemplo)",
    segments: [
      { text: "だれと" },
      { text: "東京", furigana: "とうきょう" },
      { text: "へ" },
      { text: "行きます", furigana: "いきます" },
      { text: "か。……" },
      { text: "山田", furigana: "やまだ" },
      { text: "さんと" },
      { text: "行きます", furigana: "いきます" },
      { text: "。" },
    ],
    japaneseText: "だれと東京へ行きますか。……山田さんと行きます。",
    romaji: "Dare to Toukyou e ikimasu ka. ...Yamada-san to ikimasu.",
    spanish: "¿Con quién vas a Tokio? ...Voy con el Sr. Yamada.",
    targetKanji: ["行","行きます","山","山田さん","田"],
  },
  {
    id: "s-l05-e5",
    lessonId: "l05",
    lessonNumber: "Lección 5",
    section: "例文 (Ejemplo)",
    segments: [
      { text: "いつ" },
      { text: "日本", furigana: "にほん" },
      { text: "へ" },
      { text: "来ました", furigana: "きました" },
      { text: "か。……3" },
      { text: "月", furigana: "がつ" },
      { text: "25" },
      { text: "日", furigana: "にち" },
      { text: "に" },
      { text: "来ました", furigana: "きました" },
      { text: "。" },
    ],
    japaneseText: "いつ日本へ来ましたか。……3月25日に来ました。",
    romaji: "Itsu Nihon e kimashita ka. ...Sangatsu nijuugonichi ni kimashita.",
    spanish: "¿Cuándo viniste a Japón? ...Vine el 25 de marzo.",
    targetKanji: ["本","日本","日","来","月"],
  },
  {
    id: "s-l05-e6",
    lessonId: "l05",
    lessonNumber: "Lección 5",
    section: "例文 (Ejemplo)",
    segments: [
      { text: "誕生日", furigana: "たんじょうび" },
      { text: "はいつですか。……6" },
      { text: "月", furigana: "がつ" },
      { text: "13" },
      { text: "日", furigana: "にち" },
      { text: "です。" },
    ],
    japaneseText: "誕生日はいつですか。……6月13日です。",
    romaji: "Tanjoubi wa itsu desu ka. ...Rokugatsu juusannichi desu.",
    spanish: "¿Cuándo es tu cumpleaños? ...Es el 13 de junio.",
    targetKanji: ["日","誕生日","生","月"],
  },

  // --- Lección 6 (文型 & 例文) ---
  {
    id: "s-l06-b1",
    lessonId: "l06",
    lessonNumber: "Lección 6",
    section: "文型 (Patrón)",
    segments: [
      { text: "わたしは" },
      { text: "本", furigana: "ほん" },
      { text: "を" },
      { text: "読みます", furigana: "よみます" },
      { text: "。" },
    ],
    japaneseText: "わたしは本を読みます。",
    romaji: "Watashi wa hon o yomimasu.",
    spanish: "Yo leo un libro.",
    targetKanji: ["本","読","読みます"],
  },
  {
    id: "s-l06-b2",
    lessonId: "l06",
    lessonNumber: "Lección 6",
    section: "文型 (Patrón)",
    segments: [
      { text: "わたしは" },
      { text: "駅", furigana: "えき" },
      { text: "で" },
      { text: "新聞", furigana: "しんぶん" },
      { text: "を" },
      { text: "買います", furigana: "かいます" },
      { text: "。" },
    ],
    japaneseText: "わたしは駅で新聞を買います。",
    romaji: "Watashi wa eki de shinbun o kaimasu.",
    spanish: "Yo compro el periódico en la estación.",
    targetKanji: ["聞","新聞","買","買います","新","駅"],
  },
  {
    id: "s-l06-b3",
    lessonId: "l06",
    lessonNumber: "Lección 6",
    section: "文型 (Patrón)",
    segments: [
      { text: "いっしょに" },
      { text: "神戸", furigana: "こうべ" },
      { text: "へ" },
      { text: "行きませんか", furigana: "いきませんか" },
      { text: "。" },
    ],
    japaneseText: "いっしょに神戸へ行きませんか。",
    romaji: "Issho ni Koube e ikimasen ka.",
    spanish: "¿Vamos juntos a Kobe?",
    targetKanji: ["行"],
  },
  {
    id: "s-l06-b4",
    lessonId: "l06",
    lessonNumber: "Lección 6",
    section: "文型 (Patrón)",
    segments: [
      { text: "ちょっと" },
      { text: "休みましょう", furigana: "やすみましょう" },
      { text: "。" },
    ],
    japaneseText: "ちょっと休みましょう。",
    romaji: "Chotto yasumimashou.",
    spanish: "Descansemos un momento.",
    targetKanji: ["休","休み"],
  },
  {
    id: "s-l06-1",
    lessonId: "l06",
    lessonNumber: "Lección 6",
    section: "文型 (Patrón)",
    segments: [
      { text: "わたしは" },
      { text: "お茶", furigana: "おちゃ" },
      { text: "を" },
      { text: "飲みます", furigana: "のみます" },
      { text: "。" },
    ],
    japaneseText: "わたしはお茶を飲みます。",
    romaji: "Watashi wa ocha o nomimasu.",
    spanish: "Yo bebo té.",
    targetKanji: ["飲","飲みます","茶","お茶"],
  },
  {
    id: "s-l06-2",
    lessonId: "l06",
    lessonNumber: "Lección 6",
    section: "文型 (Patrón)",
    segments: [
      { text: "パンを" },
      { text: "食べます", furigana: "たべます" },
      { text: "。" },
      { text: "本", furigana: "ほん" },
      { text: "を" },
      { text: "読みます", furigana: "よみます" },
      { text: "。" },
    ],
    japaneseText: "パンを食べます。本を読みます。",
    romaji: "Pan o tabemasu. Hon o yomimasu.",
    spanish: "Como pan. Leo un libro.",
    targetKanji: ["本","読","読みます","食","食べます"],
  },
  {
    id: "s-l06-3",
    lessonId: "l06",
    lessonNumber: "Lección 6",
    section: "例文 (Ejemplo)",
    segments: [
      { text: "駅", furigana: "えき" },
      { text: "で" },
      { text: "新聞", furigana: "しんぶん" },
      { text: "を" },
      { text: "買いました", furigana: "かいました" },
      { text: "。" },
    ],
    japaneseText: "駅で新聞を買いました。",
    romaji: "Eki de shinbun o kaimashita.",
    spanish: "Compré el periódico en la estación.",
    targetKanji: ["聞","新聞","買","新","駅"],
  },
  {
    id: "s-l06-e1",
    lessonId: "l06",
    lessonNumber: "Lección 6",
    section: "例文 (Ejemplo)",
    segments: [
      { text: "お" },
      { text: "酒", furigana: "さけ" },
      { text: "を" },
      { text: "飲みます", furigana: "のみます" },
      { text: "か。……いいえ、" },
      { text: "飲みません", furigana: "のみません" },
      { text: "。" },
    ],
    japaneseText: "お酒を飲みますか。……いいえ、飲みません。",
    romaji: "Osake o nomimasu ka. ...Iie, nomimasen.",
    spanish: "¿Tomas alcohol/sake? ...No, no tomo.",
    targetKanji: ["飲","飲みます"],
  },
  {
    id: "s-l06-e2",
    lessonId: "l06",
    lessonNumber: "Lección 6",
    section: "例文 (Ejemplo)",
    segments: [
      { text: "毎朝", furigana: "まいあさ" },
      { text: "何", furigana: "なに" },
      { text: "を" },
      { text: "食べます", furigana: "たべます" },
      { text: "か。……パンと" },
      { text: "卵", furigana: "たまご" },
      { text: "を" },
      { text: "食べます", furigana: "たべます" },
      { text: "。" },
    ],
    japaneseText: "毎朝何を食べますか。……パンと卵を食べます。",
    romaji: "Maiasa nani o tabemasu ka. ...Pan to tamago o tabemasu.",
    spanish: "¿Qué comes todas las mañanas? ...Como pan y huevos.",
    targetKanji: ["何","毎","毎朝","食","食べます","朝"],
  },
  {
    id: "s-l06-e3",
    lessonId: "l06",
    lessonNumber: "Lección 6",
    section: "例文 (Ejemplo)",
    segments: [
      { text: "けさ" },
      { text: "何", furigana: "なに" },
      { text: "を" },
      { text: "食べました", furigana: "たべました" },
      { text: "か。……" },
      { text: "何", furigana: "なに" },
      { text: "も" },
      { text: "食べませんでした", furigana: "たべませんでした" },
      { text: "。" },
    ],
    japaneseText: "けさ何を食べましたか。……何も食べませんでした。",
    romaji: "Kesa nani o tabemashita ka. ...Nani mo tabemasen deshita.",
    spanish: "¿Qué comiste esta mañana? ...No comí nada.",
    targetKanji: ["何","食"],
  },
  {
    id: "s-l06-e4",
    lessonId: "l06",
    lessonNumber: "Lección 6",
    section: "例文 (Ejemplo)",
    segments: [
      { text: "土曜日", furigana: "どようび" },
      { text: "何", furigana: "なに" },
      { text: "をしましたか。……" },
      { text: "勉強", furigana: "べんきょう" },
      { text: "しました。それから" },
      { text: "友達", furigana: "ともだち" },
      { text: "と" },
      { text: "映画", furigana: "えいが" },
      { text: "を" },
      { text: "見ました", furigana: "みました" },
      { text: "。" },
    ],
    japaneseText: "土曜日何をしましたか。……勉強しました。それから友達と映画を見ました。",
    romaji: "Doyoubi nani o shimashita ka. ...Benkyou shimashita. Sore kara tomodachi to eiga o mimashita.",
    spanish: "¿Qué hiciste el sábado? ...Estudié. Luego vi una película con un amigo.",
    targetKanji: ["日","何","土","土曜日","友","友達","見","画","映画","映","強","勉強","勉"],
  },
  {
    id: "s-l06-e5",
    lessonId: "l06",
    lessonNumber: "Lección 6",
    section: "例文 (Ejemplo)",
    segments: [
      { text: "どこでそのかばんを" },
      { text: "買いました", furigana: "かいました" },
      { text: "か。……メキシコで" },
      { text: "買いました", furigana: "かいました" },
      { text: "。" },
    ],
    japaneseText: "どこでそのかばんを買いましたか。……メキシコで買いました。",
    romaji: "Doko de sono kaban o kaimashita ka. ...Mekishiko de kaimashita.",
    spanish: "¿Dónde compraste ese bolso? ...Lo compré en México.",
    targetKanji: ["買"],
  },
  {
    id: "s-l06-e6",
    lessonId: "l06",
    lessonNumber: "Lección 6",
    section: "例文 (Ejemplo)",
    segments: [
      { text: "あしたテニスをしませんか。……ええ、いいですね。" },
    ],
    japaneseText: "あしたテニスをしませんか。……ええ、いいですね。",
    romaji: "Ashita tenisu o shimasen ka. ...Ee, ii desu ne.",
    spanish: "¿Jugamos al tenis mañana? ...Sí, ¡qué buena idea!",
    targetKanji: [],
  },
  {
    id: "s-l06-e7",
    lessonId: "l06",
    lessonNumber: "Lección 6",
    section: "例文 (Ejemplo)",
    segments: [
      { text: "あした10" },
      { text: "時", furigana: "じ" },
      { text: "に" },
      { text: "駅", furigana: "えき" },
      { text: "で" },
      { text: "会いましょう", furigana: "あいましょう" },
      { text: "。……わかりました。" },
    ],
    japaneseText: "あした10時に駅で会いましょう。……わかりました。",
    romaji: "Ashita juuji ni eki de aimashou. ...Wakarimashita.",
    spanish: "Quedemos mañana a las 10 en la estación. ...Entendido.",
    targetKanji: ["会","時","駅"],
  },

  // --- Lección 7 (文型 & 例文) ---
  {
    id: "s-l07-b1",
    lessonId: "l07",
    lessonNumber: "Lección 7",
    section: "文型 (Patrón)",
    segments: [
      { text: "わたしはパソコンで" },
      { text: "映画", furigana: "えいが" },
      { text: "を" },
      { text: "見ます", furigana: "みます" },
      { text: "。" },
    ],
    japaneseText: "わたしはパソコンで映画を見ます。",
    romaji: "Watashi wa pasokon de eiga o mimasu.",
    spanish: "Yo veo películas en el ordenador.",
    targetKanji: ["見","見ます","画","映画","映"],
  },
  {
    id: "s-l07-b2",
    lessonId: "l07",
    lessonNumber: "Lección 7",
    section: "文型 (Patrón)",
    segments: [
      { text: "わたしは" },
      { text: "木村", furigana: "きむら" },
      { text: "さんに" },
      { text: "花", furigana: "はな" },
      { text: "をあげます。" },
    ],
    japaneseText: "わたしは木村さんに花をあげます。",
    romaji: "Watashi wa Kimura-san ni hana o agemasu.",
    spanish: "Yo le regalo flores a la Sra. Kimura.",
    targetKanji: ["木","花"],
  },
  {
    id: "s-l07-b3",
    lessonId: "l07",
    lessonNumber: "Lección 7",
    section: "文型 (Patrón)",
    segments: [
      { text: "わたしはカリナさんにチョコレートをもらいました。" },
    ],
    japaneseText: "わたしはカリナさんにチョコレートをもらいました。",
    romaji: "Watashi wa Karina-san ni chokoreeto o moraimashita.",
    spanish: "Yo recibí chocolates de Karina.",
    targetKanji: [],
  },
  {
    id: "s-l07-b4",
    lessonId: "l07",
    lessonNumber: "Lección 7",
    section: "文型 (Patrón)",
    segments: [
      { text: "わたしはもうメールを" },
      { text: "送りました", furigana: "おくりました" },
      { text: "。" },
    ],
    japaneseText: "わたしはもうメールを送りました。",
    romaji: "Watashi wa mou meeru o okurimashita.",
    spanish: "Yo ya envié el correo.",
    targetKanji: ["送"],
  },
  {
    id: "s-l07-1",
    lessonId: "l07",
    lessonNumber: "Lección 7",
    section: "文型 (Patrón)",
    segments: [
      { text: "わたしは" },
      { text: "母", furigana: "はは" },
      { text: "に" },
      { text: "花", furigana: "はな" },
      { text: "をあげました。" },
    ],
    japaneseText: "わたしは母に花をあげました。",
    romaji: "Watashi wa haha ni hana o agemashita.",
    spanish: "Le regalé flores a mi madre.",
    targetKanji: ["母","花"],
  },
  {
    id: "s-l07-2",
    lessonId: "l07",
    lessonNumber: "Lección 7",
    section: "文型 (Patrón)",
    segments: [
      { text: "父", furigana: "ちち" },
      { text: "からプレゼントをもらいました。" },
    ],
    japaneseText: "父からプレゼントをもらいました。",
    romaji: "Chichi kara purezento o moraimashita.",
    spanish: "Recibí un regalo de mi padre.",
    targetKanji: ["父"],
  },
  {
    id: "s-l07-e1",
    lessonId: "l07",
    lessonNumber: "Lección 7",
    section: "例文 (Ejemplo)",
    segments: [
      { text: "テレビで" },
      { text: "日本語", furigana: "にほんご" },
      { text: "を" },
      { text: "勉強", furigana: "べんきょう" },
      { text: "しましたか。……いいえ、ラジオで" },
      { text: "勉強", furigana: "べんきょう" },
      { text: "しました。" },
    ],
    japaneseText: "テレビで日本語を勉強しましたか。……いいえ、ラジオで勉強しました。",
    romaji: "Terebi de Nihongo o benkyou shimashita ka. ...Iie, rajio de benkyou shimashita.",
    spanish: "¿Estudiaste japonés por televisión? ...No, estudié por radio.",
    targetKanji: ["本","日本","日本語","日","語","強","勉強","勉"],
  },
  {
    id: "s-l07-e2",
    lessonId: "l07",
    lessonNumber: "Lección 7",
    section: "例文 (Ejemplo)",
    segments: [
      { text: "日本語", furigana: "にほんご" },
      { text: "でレポートを" },
      { text: "書きます", furigana: "かきます" },
      { text: "か。……いいえ、" },
      { text: "英語", furigana: "えいご" },
      { text: "で" },
      { text: "書きます", furigana: "かきます" },
      { text: "。" },
    ],
    japaneseText: "日本語でレポートを書きますか。……いいえ、英語で書きます。",
    romaji: "Nihongo de repooto o kakimasu ka. ...Iie, Eigo de kakimasu.",
    spanish: "¿Escribes el informe en japonés? ...No, lo escribo en inglés.",
    targetKanji: ["本","日本","日本語","日","書","書きます","語","英語","英"],
  },
  {
    id: "s-l07-e3",
    lessonId: "l07",
    lessonNumber: "Lección 7",
    section: "例文 (Ejemplo)",
    segments: [
      { text: "“Goodbye”は" },
      { text: "日本語", furigana: "にほんご" },
      { text: "で" },
      { text: "何", furigana: "なん" },
      { text: "ですか。……「さようなら」です。" },
    ],
    japaneseText: "“Goodbye”は日本語で何ですか。……「さようなら」です。",
    romaji: "\"Goodbye\" wa Nihongo de nan desu ka. ...\"Sayounara\" desu.",
    spanish: "¿Cómo se dice «Goodbye» en japonés? ...Se dice «Sayounara».",
    targetKanji: ["本","日本","日本語","日","何","語"],
  },
  {
    id: "s-l07-e4",
    lessonId: "l07",
    lessonNumber: "Lección 7",
    section: "例文 (Ejemplo)",
    segments: [
      { text: "だれに" },
      { text: "年賀状", furigana: "ねんがじょう" },
      { text: "を" },
      { text: "書きます", furigana: "かきます" },
      { text: "か。……" },
      { text: "先生", furigana: "せんせい" },
      { text: "と" },
      { text: "友達", furigana: "ともだち" },
      { text: "に" },
      { text: "書きます", furigana: "かきます" },
      { text: "。" },
    ],
    japaneseText: "だれに年賀状を書きますか。……先生と友達に書きます。",
    romaji: "Dare ni nengajou o kakimasu ka. ...Sensei to tomodachi ni kakimasu.",
    spanish: "¿A quién le escribes tarjetas de Año Nuevo? ...Al profesor y a mis amigos.",
    targetKanji: ["先","先生","生","書","書きます","友","友達","年"],
  },
  {
    id: "s-l07-e5",
    lessonId: "l07",
    lessonNumber: "Lección 7",
    section: "例文 (Ejemplo)",
    segments: [
      { text: "それは" },
      { text: "何", furigana: "なん" },
      { text: "ですか。……" },
      { text: "手帳", furigana: "てちょう" },
      { text: "です。" },
      { text: "山田", furigana: "やまだ" },
      { text: "さんにもらいました。" },
    ],
    japaneseText: "それは何ですか。……手帳です。山田さんにもらいました。",
    romaji: "Sore wa nan desu ka. ...Techou desu. Yamada-san ni moraimashita.",
    spanish: "¿Qué es eso? ...Es una agenda. Me la dio el Sr. Yamada.",
    targetKanji: ["何","山","山田さん","手","手帳","田"],
  },
  {
    id: "s-l07-e6",
    lessonId: "l07",
    lessonNumber: "Lección 7",
    section: "例文 (Ejemplo)",
    segments: [
      { text: "もう" },
      { text: "新幹線", furigana: "しんかんせん" },
      { text: "の" },
      { text: "切符", furigana: "きっぷ" },
      { text: "を" },
      { text: "買いました", furigana: "かいました" },
      { text: "か。……はい、もう" },
      { text: "買いました", furigana: "かいました" },
      { text: "。" },
    ],
    japaneseText: "もう新幹線の切符を買いましたか。……はい、もう買いました。",
    romaji: "Mou shinkansen no kippu o kaimashita ka. ...Hai, mou kaimashita.",
    spanish: "¿Ya compraste los billetes para el Shinkansen? ...Sí, ya los compré.",
    targetKanji: ["買","新","新幹線","切","切符"],
  },
  {
    id: "s-l07-e7",
    lessonId: "l07",
    lessonNumber: "Lección 7",
    section: "例文 (Ejemplo)",
    segments: [
      { text: "もう" },
      { text: "昼", furigana: "ひる" },
      { text: "ごはんを" },
      { text: "食べました", furigana: "たべました" },
      { text: "か。……いいえ、まだです。これから" },
      { text: "食べます", furigana: "たべます" },
      { text: "。" },
    ],
    japaneseText: "もう昼ごはんを食べましたか。……いいえ、まだです。これから食べます。",
    romaji: "Mou hirugohan o tabemashita ka. ...Iie, mada desu. Kore kara tabemasu.",
    spanish: "¿Ya almorzaste? ...No, todavía no. Voy a almorzar ahora.",
    targetKanji: ["食","食べます","昼","昼ごはん"],
  },

  // --- Lección 8 (文型 & 例文) ---
  {
    id: "s-l08-b1",
    lessonId: "l08",
    lessonNumber: "Lección 8",
    section: "文型 (Patrón)",
    segments: [
      { text: "桜", furigana: "さくら" },
      { text: "はきれいです。" },
    ],
    japaneseText: "桜はきれいです。",
    romaji: "Sakura wa kirei desu.",
    spanish: "El cerezo es hermoso.",
    targetKanji: [],
  },
  {
    id: "s-l08-b2",
    lessonId: "l08",
    lessonNumber: "Lección 8",
    section: "文型 (Patrón)",
    segments: [
      { text: "富士山", furigana: "ふじさん" },
      { text: "は" },
      { text: "高い", furigana: "たかい" },
      { text: "です。" },
    ],
    japaneseText: "富士山は高いです。",
    romaji: "Fujisan wa takai desu.",
    spanish: "El monte Fuji es alto.",
    targetKanji: ["山","富士山","高","高い"],
  },
  {
    id: "s-l08-2",
    lessonId: "l08",
    lessonNumber: "Lección 8",
    section: "文型 (Patrón)",
    segments: [
      { text: "桜", furigana: "さくら" },
      { text: "はきれいな" },
      { text: "花", furigana: "はな" },
      { text: "です。" },
    ],
    japaneseText: "桜はきれいな花です。",
    romaji: "Sakura wa kireina hana desu.",
    spanish: "El cerezo es una flor hermosa.",
    targetKanji: ["花"],
  },
  {
    id: "s-l08-1",
    lessonId: "l08",
    lessonNumber: "Lección 8",
    section: "文型 (Patrón)",
    segments: [
      { text: "富士山", furigana: "ふじさん" },
      { text: "は" },
      { text: "高い", furigana: "たかい" },
      { text: "山", furigana: "やま" },
      { text: "です。" },
    ],
    japaneseText: "富士山は高い山です。",
    romaji: "Fujisan wa takai yama desu.",
    spanish: "El monte Fuji es una montaña alta.",
    targetKanji: ["山","富士山","高","高い"],
  },
  {
    id: "s-l08-3",
    lessonId: "l08",
    lessonNumber: "Lección 8",
    section: "例文 (Ejemplo)",
    segments: [
      { text: "あの" },
      { text: "白い", furigana: "しろい" },
      { text: "車", furigana: "くるま" },
      { text: "は" },
      { text: "安いです", furigana: "やすいです" },
      { text: "。" },
    ],
    japaneseText: "あの白い車は安いです。",
    romaji: "Ano shiroi kuruma wa yasui desu.",
    spanish: "Aquel coche blanco es barato.",
    targetKanji: ["車","白","白い","安","安い"],
  },
  {
    id: "s-l08-e1",
    lessonId: "l08",
    lessonNumber: "Lección 8",
    section: "例文 (Ejemplo)",
    segments: [
      { text: "大阪", furigana: "おおさか" },
      { text: "はにぎやかですか。……はい、にぎやかです。" },
    ],
    japaneseText: "大阪はにぎやかですか。……はい、にぎやかです。",
    romaji: "Oosaka wa nigiyaka desu ka. ...Hai, nigiyaka desu.",
    spanish: "¿Es animada Osaka? ...Sí, es muy animada.",
    targetKanji: ["大"],
  },
  {
    id: "s-l08-e2",
    lessonId: "l08",
    lessonNumber: "Lección 8",
    section: "例文 (Ejemplo)",
    segments: [
      { text: "さくら" },
      { text: "大学", furigana: "だいがく" },
      { text: "は" },
      { text: "有名", furigana: "ゆうめい" },
      { text: "ですか。……いいえ、" },
      { text: "有名", furigana: "ゆうめい" },
      { text: "じゃありません。" },
    ],
    japaneseText: "さくら大学は有名ですか。……いいえ、有名じゃありません。",
    romaji: "Sakura daigaku wa yuumei desu ka. ...Iie, yuumei ja arimasen.",
    spanish: "¿Es famosa la Universidad Sakura? ...No, no es famosa.",
    targetKanji: ["名","有名","大","大学","学","有"],
  },
  {
    id: "s-l08-e3",
    lessonId: "l08",
    lessonNumber: "Lección 8",
    section: "例文 (Ejemplo)",
    segments: [
      { text: "ペキンは" },
      { text: "今", furigana: "いま" },
      { text: "寒い", furigana: "さむい" },
      { text: "ですか。……はい、とても" },
      { text: "寒い", furigana: "さむい" },
      { text: "です。シャンハイも" },
      { text: "寒い", furigana: "さむい" },
      { text: "ですか。……いいえ、あまり" },
      { text: "寒くない", furigana: "さむくない" },
      { text: "です。" },
    ],
    japaneseText: "ペキンは今寒いですか。……はい、とても寒いです。シャンハイも寒いですか。……いいえ、あまり寒くないです。",
    romaji: "Pekin wa ima samui desu ka. ...Hai, totemo samui desu. Shanhai mo samui desu ka. ...Iie, amari samukunai desu.",
    spanish: "¿Hace frío en Pekín ahora? ...Sí, mucho frío. ¿En Shanghái también? ...No, no tanto.",
    targetKanji: ["今"],
  },
  {
    id: "s-l08-e4",
    lessonId: "l08",
    lessonNumber: "Lección 8",
    section: "例文 (Ejemplo)",
    segments: [
      { text: "大学", furigana: "だいがく" },
      { text: "の" },
      { text: "寮", furigana: "りょう" },
      { text: "はどうですか。……" },
      { text: "古い", furigana: "ふるい" },
      { text: "ですが、" },
      { text: "便利", furigana: "べんり" },
      { text: "です。" },
    ],
    japaneseText: "大学の寮はどうですか。……古いですが、便利です。",
    romaji: "Daigaku no ryou wa dou desu ka. ...Furui desu ga, benri desu.",
    spanish: "¿Cómo es la residencia de la universidad? ...Es antigua, pero conveniente.",
    targetKanji: ["大","大学","学","古","古い"],
  },
  {
    id: "s-l08-e5",
    lessonId: "l08",
    lessonNumber: "Lección 8",
    section: "例文 (Ejemplo)",
    segments: [
      { text: "きのう" },
      { text: "松本", furigana: "まつもと" },
      { text: "さんのうちへ" },
      { text: "行きました", furigana: "いきました" },
      { text: "。……どんなうちですか。……きれいなうちです。そして、" },
      { text: "大きい", furigana: "おおきい" },
      { text: "うちです。" },
    ],
    japaneseText: "きのう松本さんのうちへ行きました。……どんなうちですか。……きれいなうちです。そして、大きいうちです。",
    romaji: "Kinou Matsumoto-san no uchi e ikimashita. ...Donna uchi desu ka. ...Kireina uchi desu. Soshite, ookii uchi desu.",
    spanish: "Ayer fui a casa del Sr. Matsumoto. ...¿Qué tal es la casa? ...Es bonita, y además muy grande.",
    targetKanji: ["本","大","大きい","行"],
  },
  {
    id: "s-l08-e6",
    lessonId: "l08",
    lessonNumber: "Lección 8",
    section: "例文 (Ejemplo)",
    segments: [
      { text: "きのうおもしろい" },
      { text: "映画", furigana: "えいが" },
      { text: "を" },
      { text: "見ました", furigana: "みました" },
      { text: "。……" },
      { text: "何", furigana: "なに" },
      { text: "を" },
      { text: "見ました", furigana: "みました" },
      { text: "か。……「" },
      { text: "七人", furigana: "しちにん" },
      { text: "の" },
      { text: "侍", furigana: "さむらい" },
      { text: "」です。" },
    ],
    japaneseText: "きのうおもしろい映画を見ました。……何を見ましたか。……「七人の侍」です。",
    romaji: "Kinou omoshiroi eiga o mimashita. ...Nani o mimashita ka. ...\"Shichinin no Samurai\" desu.",
    spanish: "Ayer vi una película interesante. ...¿Qué viste? ...«Los siete samuráis».",
    targetKanji: ["七","七人","人","何","見","画","映画","映"],
  },

  // --- Lección 9 (文型 & 例文) ---
  {
    id: "s-l09-b1",
    lessonId: "l09",
    lessonNumber: "Lección 9",
    section: "文型 (Patrón)",
    segments: [
      { text: "わたしはイタリア" },
      { text: "料理", furigana: "りょうり" },
      { text: "が" },
      { text: "好きです", furigana: "すきです" },
      { text: "。" },
    ],
    japaneseText: "わたしはイタリア料理が好きです。",
    romaji: "Watashi wa Itaria-ryouri ga suki desu.",
    spanish: "A mí me gusta la comida italiana.",
    targetKanji: ["料","料理","理"],
  },
  {
    id: "s-l09-b2",
    lessonId: "l09",
    lessonNumber: "Lección 9",
    section: "文型 (Patrón)",
    segments: [
      { text: "わたしは" },
      { text: "日本語", furigana: "にほんご" },
      { text: "が" },
      { text: "少し", furigana: "すこし" },
      { text: "わかります。" },
    ],
    japaneseText: "わたしは日本語が少しわかります。",
    romaji: "Watashi wa Nihongo ga sukoshi wakarimasu.",
    spanish: "Entiendo un poco de japonés.",
    targetKanji: ["本","日本","日本語","日","少","少し","語"],
  },
  {
    id: "s-l09-b3",
    lessonId: "l09",
    lessonNumber: "Lección 9",
    section: "文型 (Patrón)",
    segments: [
      { text: "きょうは" },
      { text: "子ども", furigana: "こども" },
      { text: "の" },
      { text: "誕生日", furigana: "たんじょうび" },
      { text: "ですから、" },
      { text: "早く", furigana: "はやく" },
      { text: "帰ります", furigana: "かえります" },
      { text: "。" },
    ],
    japaneseText: "きょうは子どもの誕生日ですから、早く帰ります。",
    romaji: "Kyou wa kodomo no tanjoubi desu kara, hayaku kaerimasu.",
    spanish: "Hoy es el cumpleaños de mi hijo, así que volveré temprano.",
    targetKanji: ["日","誕生日","生","帰","帰ります","早","早く","子","子ども"],
  },
  {
    id: "s-l09-1",
    lessonId: "l09",
    lessonNumber: "Lección 9",
    section: "文型 (Patrón)",
    segments: [
      { text: "わたしは" },
      { text: "日本料理", furigana: "にほんりょうり" },
      { text: "が" },
      { text: "好きです", furigana: "すきです" },
      { text: "。" },
      { text: "魚", furigana: "さかな" },
      { text: "が" },
      { text: "好きです", furigana: "すきです" },
      { text: "。" },
    ],
    japaneseText: "わたしは日本料理が好きです。魚が好きです。",
    romaji: "Watashi wa Nihon-ryouri ga suki desu. Sakana ga suki desu.",
    spanish: "Me gusta la comida japonesa. Me gusta el pescado.",
    targetKanji: ["本","日本","日","魚","料","料理","理"],
  },
  {
    id: "s-l09-2",
    lessonId: "l09",
    lessonNumber: "Lección 9",
    section: "例文 (Ejemplo)",
    segments: [
      { text: "時間", furigana: "じかん" },
      { text: "がありませんから、" },
      { text: "早く", furigana: "はやく" },
      { text: "行きましょう", furigana: "いきましょう" },
      { text: "。" },
    ],
    japaneseText: "時間がありませんから、早く行きましょう。",
    romaji: "Jikan ga arimasen kara, hayaku ikimashou.",
    spanish: "Como no tenemos tiempo, démonos prisa.",
    targetKanji: ["行","時","時間","間","早","早く"],
  },
  {
    id: "s-l09-e1",
    lessonId: "l09",
    lessonNumber: "Lección 9",
    section: "例文 (Ejemplo)",
    segments: [
      { text: "お" },
      { text: "酒", furigana: "さけ" },
      { text: "が" },
      { text: "好きです", furigana: "すきです" },
      { text: "か。……いいえ、" },
      { text: "好き", furigana: "すき" },
      { text: "じゃありません。" },
    ],
    japaneseText: "お酒が好きですか。……いいえ、好きじゃありません。",
    romaji: "Osake ga suki desu ka. ...Iie, suki ja arimasen.",
    spanish: "¿Te gusta el sake/alcohol? ...No, no me gusta.",
    targetKanji: [],
  },
  {
    id: "s-l09-e2",
    lessonId: "l09",
    lessonNumber: "Lección 9",
    section: "例文 (Ejemplo)",
    segments: [
      { text: "どんなスポーツが" },
      { text: "好きです", furigana: "すきです" },
      { text: "か。……サッカーが" },
      { text: "好きです", furigana: "すきです" },
      { text: "。" },
    ],
    japaneseText: "どんなスポーツが好きですか。……サッカーが好きです。",
    romaji: "Donna supootsu ga suki desu ka. ...Sakkaa ga suki desu.",
    spanish: "¿Qué deportes te gustan? ...Me gusta el fútbol.",
    targetKanji: [],
  },
  {
    id: "s-l09-e3",
    lessonId: "l09",
    lessonNumber: "Lección 9",
    section: "例文 (Ejemplo)",
    segments: [
      { text: "カリナさんは" },
      { text: "絵", furigana: "え" },
      { text: "が" },
      { text: "上手", furigana: "じょうず" },
      { text: "ですか。……はい、[カリナさんは]とても" },
      { text: "上手", furigana: "じょうず" },
      { text: "です。" },
    ],
    japaneseText: "カリナさんは絵が上手ですか。……はい、[カリナさんは]とても上手です。",
    romaji: "Karina-san wa e ga jouzu desu ka. ...Hai, [Karina-san wa] totemo jouzu desu.",
    spanish: "¿Karina dibuja bien? ...Sí, [Karina] dibuja muy bien.",
    targetKanji: ["上","上手","手"],
  },
  {
    id: "s-l09-e4",
    lessonId: "l09",
    lessonNumber: "Lección 9",
    section: "例文 (Ejemplo)",
    segments: [
      { text: "田中", furigana: "たなか" },
      { text: "さんはインドネシア" },
      { text: "語", furigana: "ご" },
      { text: "がわかりますか。……いいえ、" },
      { text: "全然", furigana: "ぜんぜん" },
      { text: "わかりません。" },
    ],
    japaneseText: "田中さんはインドネシア語がわかりますか。……いいえ、全然わかりません。",
    romaji: "Tanaka-san wa Indoneshia-go ga wakarimasu ka. ...Iie, zenzen wakarimasen.",
    spanish: "¿Entiende el Sr. Tanaka el indonesio? ...No, no entiende nada.",
    targetKanji: ["中","語","田","田中さん"],
  },
  {
    id: "s-l09-e5",
    lessonId: "l09",
    lessonNumber: "Lección 9",
    section: "例文 (Ejemplo)",
    segments: [
      { text: "細かい", furigana: "こまかい" },
      { text: "お" },
      { text: "金", furigana: "かね" },
      { text: "がありますか。……いいえ、ありません。" },
    ],
    japaneseText: "細かいお金がありますか。……いいえ、ありません。",
    romaji: "Komakai okane ga arimasu ka. ...Iie, arimasen.",
    spanish: "¿Tiene dinero suelto? ...No, no tengo.",
    targetKanji: ["金","お金"],
  },
  {
    id: "s-l09-e6",
    lessonId: "l09",
    lessonNumber: "Lección 9",
    section: "例文 (Ejemplo)",
    segments: [
      { text: "毎朝", furigana: "まいあさ" },
      { text: "新聞", furigana: "しんぶん" },
      { text: "を" },
      { text: "読みます", furigana: "よみます" },
      { text: "か。……いいえ、" },
      { text: "時間", furigana: "じかん" },
      { text: "がありませんから、" },
      { text: "読みません", furigana: "よみません" },
      { text: "。" },
    ],
    japaneseText: "毎朝新聞を読みますか。……いいえ、時間がありませんから、読みません。",
    romaji: "Maiasa shinbun o yomimasu ka. ...Iie, jikan ga arimasen kara, yomimasen.",
    spanish: "¿Lees el periódico todas las mañanas? ...No, como no tengo tiempo, no lo leo.",
    targetKanji: ["毎","毎朝","時","時間","聞","新聞","読","読みます","朝","間","新"],
  },
  {
    id: "s-l09-e7",
    lessonId: "l09",
    lessonNumber: "Lección 9",
    section: "例文 (Ejemplo)",
    segments: [
      { text: "どうしてきのう" },
      { text: "早く", furigana: "はやく" },
      { text: "帰りました", furigana: "かえりました" },
      { text: "か。……" },
      { text: "用事", furigana: "ようじ" },
      { text: "がありましたから。" },
    ],
    japaneseText: "どうしてきのう早く帰りましたか。……用事がありましたから。",
    romaji: "Doushite kinou hayaku kaerimashita ka. ...Youji ga arimashita kara.",
    spanish: "¿Por qué volviste temprano ayer? ...Porque tenía asuntos que atender.",
    targetKanji: ["帰","早","早く","事","用事","用"],
  },

  // --- Lección 10 (文型 & 例文) ---
  {
    id: "s-l10-b1",
    lessonId: "l10",
    lessonNumber: "Lección 10",
    section: "文型 (Patrón)",
    segments: [
      { text: "あそこにコンビニがあります。" },
    ],
    japaneseText: "あそこにコンビニがあります。",
    romaji: "Asoko ni konbini ga arimasu.",
    spanish: "Allí hay una tienda de conveniencia.",
    targetKanji: [],
  },
  {
    id: "s-l10-b2",
    lessonId: "l10",
    lessonNumber: "Lección 10",
    section: "文型 (Patrón)",
    segments: [
      { text: "ロビーに" },
      { text: "佐藤", furigana: "さとう" },
      { text: "さんがいます。" },
    ],
    japaneseText: "ロビーに佐藤さんがいます。",
    romaji: "Robii ni Satou-san ga imasu.",
    spanish: "En el vestíbulo está la Sra. Sato.",
    targetKanji: [],
  },
  {
    id: "s-l10-b3",
    lessonId: "l10",
    lessonNumber: "Lección 10",
    section: "文型 (Patrón)",
    segments: [
      { text: "東京", furigana: "とうきょう" },
      { text: "ディズニーランドは" },
      { text: "千葉県", furigana: "ちばけん" },
      { text: "にあります。" },
    ],
    japaneseText: "東京ディズニーランドは千葉県にあります。",
    romaji: "Toukyou Dizuniirando wa Chiba-ken ni arimasu.",
    spanish: "Tokyo Disneyland está en la prefectura de Chiba.",
    targetKanji: ["千"],
  },
  {
    id: "s-l10-b4",
    lessonId: "l10",
    lessonNumber: "Lección 10",
    section: "文型 (Patrón)",
    segments: [
      { text: "家族", furigana: "かぞく" },
      { text: "はニューヨークにいます。" },
    ],
    japaneseText: "家族はニューヨークにいます。",
    romaji: "Kazoku wa Nyuuyooku ni imasu.",
    spanish: "Mi familia está en Nueva York.",
    targetKanji: ["家","家族","族"],
  },
  {
    id: "s-l10-1",
    lessonId: "l10",
    lessonNumber: "Lección 10",
    section: "文型 (Patrón)",
    segments: [
      { text: "机の" },
      { text: "上", furigana: "うえ" },
      { text: "に" },
      { text: "写真", furigana: "しゃしん" },
      { text: "が" },
      { text: "あります。" },
    ],
    japaneseText: "机の上に写真があります。",
    romaji: "Tsukue no ue ni shashin ga arimasu.",
    spanish: "Sobre el escritorio hay una fotografía.",
    targetKanji: ["上","写","写真","真"],
  },
  {
    id: "s-l10-2",
    lessonId: "l10",
    lessonNumber: "Lección 10",
    section: "文型 (Patrón)",
    segments: [
      { text: "庭に" },
      { text: "男", furigana: "おとこ" },
      { text: "の" },
      { text: "子", furigana: "こ" },
      { text: "と" },
      { text: "犬", furigana: "いぬ" },
      { text: "が" },
      { text: "います。" },
    ],
    japaneseText: "庭に男の子と犬がいます。",
    romaji: "Niwa ni otoko no ko to inu ga imasu.",
    spanish: "En el jardín hay un niño y un perro.",
    targetKanji: ["男","男の子","犬","子"],
  },
  {
    id: "s-l10-3",
    lessonId: "l10",
    lessonNumber: "Lección 10",
    section: "例文 (Ejemplo)",
    segments: [
      { text: "駅の" },
      { text: "近く", furigana: "ちかく" },
      { text: "に" },
      { text: "大きな", furigana: "おおきな" },
      { text: "門", furigana: "もん" },
      { text: "が" },
      { text: "あります。" },
    ],
    japaneseText: "駅の近くに大きな門があります。",
    romaji: "Eki no chikaku ni ookina mon ga arimasu.",
    spanish: "Cerca de la estación hay un gran portalón.",
    targetKanji: ["大","門","近","近く","駅"],
  },
  {
    id: "s-l10-e1",
    lessonId: "l10",
    lessonNumber: "Lección 10",
    section: "例文 (Ejemplo)",
    segments: [
      { text: "このビルに ATMがありますか。……はい、2" },
      { text: "階", furigana: "かい" },
      { text: "にあります。" },
    ],
    japaneseText: "このビルに ATMがありますか。……はい、2階にあります。",
    romaji: "Kono biru ni ATM ga arimasu ka. ...Hai, nikai ni arimasu.",
    spanish: "¿Hay un cajero automático en este edificio? ...Sí, está en el segundo piso.",
    targetKanji: [],
  },
  {
    id: "s-l10-e2",
    lessonId: "l10",
    lessonNumber: "Lección 10",
    section: "例文 (Ejemplo)",
    segments: [
      { text: "あそこに" },
      { text: "男の人", furigana: "おとこのひと" },
      { text: "がいますね。あの" },
      { text: "人", furigana: "ひと" },
      { text: "はだれですか。……IMCの" },
      { text: "松本", furigana: "まつもと" },
      { text: "さんです。" },
    ],
    japaneseText: "あそこに男の人がいますね。あの人はだれですか。……IMCの松本さんです。",
    romaji: "Asoko ni otoko no hito ga imasu ne. Ano hito wa dare desu ka. ...IMC no Matsumoto-san desu.",
    spanish: "Hay un hombre allí, ¿verdad? ¿Quién es aquella persona? ...Es el Sr. Matsumoto de IMC.",
    targetKanji: ["人","あの人","本","男","男の人"],
  },
  {
    id: "s-l10-e3",
    lessonId: "l10",
    lessonNumber: "Lección 10",
    section: "例文 (Ejemplo)",
    segments: [
      { text: "庭", furigana: "にわ" },
      { text: "にだれがいますか。……だれもいません。" },
      { text: "猫", furigana: "ねこ" },
      { text: "がいます。" },
    ],
    japaneseText: "庭にだれがいますか。……だれもいません。猫がいます。",
    romaji: "Niwa ni dare ga imasu ka. ...Dare mo imasen. Neko ga imasu.",
    spanish: "¿Quién hay en el jardín? ...No hay nadie. Hay un gato.",
    targetKanji: [],
  },
  {
    id: "s-l10-e4",
    lessonId: "l10",
    lessonNumber: "Lección 10",
    section: "例文 (Ejemplo)",
    segments: [
      { text: "箱", furigana: "はこ" },
      { text: "の" },
      { text: "中", furigana: "なか" },
      { text: "に" },
      { text: "何", furigana: "なに" },
      { text: "がありますか。……" },
      { text: "古い", furigana: "ふるい" },
      { text: "手紙", furigana: "てがみ" },
      { text: "や" },
      { text: "写真", furigana: "しゃしん" },
      { text: "[など]があります。" },
    ],
    japaneseText: "箱の中に何がありますか。……古い手紙や写真[など]があります。",
    romaji: "Hako no naka ni nani ga arimasu ka. ...Furui tegami ya shashin [nado] ga arimasu.",
    spanish: "¿Qué hay dentro de la caja? ...Hay cartas antiguas y fotografías, entre otras cosas.",
    targetKanji: ["何","中","手","手紙","古","古い","写","写真","真"],
  },
  {
    id: "s-l10-e5",
    lessonId: "l10",
    lessonNumber: "Lección 10",
    section: "例文 (Ejemplo)",
    segments: [
      { text: "郵便局", furigana: "ゆうびんきょく" },
      { text: "はどこにありますか。……" },
      { text: "駅", furigana: "えき" },
      { text: "の" },
      { text: "近く", furigana: "ちかく" },
      { text: "です。" },
      { text: "銀行", furigana: "ぎんこう" },
      { text: "の" },
      { text: "前", furigana: "まえ" },
      { text: "にあります。" },
    ],
    japaneseText: "郵便局はどこにありますか。……駅の近くです。銀行の前にあります。",
    romaji: "Yuubinkyoku wa doko ni arimasu ka. ...Eki no chikaku desu. Ginkou no mae ni arimasu.",
    spanish: "¿Dónde está la oficina de correos? ...Cerca de la estación, frente al banco.",
    targetKanji: ["行","銀行","前","近","近く","銀","駅"],
  },
  {
    id: "s-l10-e6",
    lessonId: "l10",
    lessonNumber: "Lección 10",
    section: "例文 (Ejemplo)",
    segments: [
      { text: "ミラーさんはどこにいますか。……" },
      { text: "会議室", furigana: "かいぎしつ" },
      { text: "にいます。" },
    ],
    japaneseText: "ミラーさんはどこにいますか。……会議室にいます。",
    romaji: "Miraa-san wa doko ni imasu ka. ...Kaigishitsu ni imasu.",
    spanish: "¿Dónde está el Sr. Miller? ...Está en la sala de reuniones.",
    targetKanji: ["会","会議","室","会議室","議"],
  },

  // --- Lección 11 (文型 & 例文) ---
  {
    id: "s-l11-b1",
    lessonId: "l11",
    lessonNumber: "Lección 11",
    section: "文型 (Patrón)",
    segments: [
      { text: "会議室", furigana: "かいぎしつ" },
      { text: "にテーブルが" },
      { text: "7つ", furigana: "ななつ" },
      { text: "あります。" },
    ],
    japaneseText: "会議室にテーブルが7つあります。",
    romaji: "Kaigishitsu ni teeburu ga nanatsu arimasu.",
    spanish: "En la sala de reuniones hay 7 mesas.",
    targetKanji: ["会","会議","室","会議室","議"],
  },
  {
    id: "s-l11-b2",
    lessonId: "l11",
    lessonNumber: "Lección 11",
    section: "文型 (Patrón)",
    segments: [
      { text: "わたしは" },
      { text: "日本", furigana: "にほん" },
      { text: "に" },
      { text: "1年", furigana: "いちねん" },
      { text: "います。" },
    ],
    japaneseText: "わたしは日本に1年います。",
    romaji: "Watashi wa Nihon ni ichinen imasu.",
    spanish: "Estaré (o resido) un año en Japón.",
    targetKanji: ["本","日本","日","年"],
  },
  {
    id: "s-l11-1",
    lessonId: "l11",
    lessonNumber: "Lección 11",
    section: "文型 (Patrón)",
    segments: [
      { text: "家族", furigana: "かぞく" },
      { text: "は" },
      { text: "兄", furigana: "あに" },
      { text: "と" },
      { text: "妹", furigana: "いもうと" },
      { text: "がいます。" },
    ],
    japaneseText: "家族は兄と妹がいます。",
    romaji: "Kazoku wa ani to imouto ga imasu.",
    spanish: "En mi familia tengo un hermano mayor y una hermana menor.",
    targetKanji: ["兄","妹","家","家族","族"],
  },
  {
    id: "s-l11-2",
    lessonId: "l11",
    lessonNumber: "Lección 11",
    section: "例文 (Ejemplo)",
    segments: [
      { text: "弟", furigana: "おとうと" },
      { text: "と" },
      { text: "駅まで" },
      { text: "歩いて", furigana: "あるいて" },
      { text: "行きました。" },
    ],
    japaneseText: "弟と駅まで歩いて行きました。",
    romaji: "Otouto to eki made aruite ikimashita.",
    spanish: "Fui caminando con mi hermano menor hasta la estación.",
    targetKanji: ["行","弟","歩","歩いて","駅"],
  },
  {
    id: "s-l11-e1",
    lessonId: "l11",
    lessonNumber: "Lección 11",
    section: "例文 (Ejemplo)",
    segments: [
      { text: "りんごをいくつ" },
      { text: "買いました", furigana: "かいました" },
      { text: "か。……" },
      { text: "4つ", furigana: "よっつ" },
      { text: "買いました", furigana: "かいました" },
      { text: "。" },
    ],
    japaneseText: "りんごをいくつ買いましたか。……4つ買いました。",
    romaji: "Ringo o ikutsu kaimashita ka. ...Yottsu kaimashita.",
    spanish: "¿Cuántas manzanas compraste? ...Compré 4.",
    targetKanji: ["買"],
  },
  {
    id: "s-l11-e2",
    lessonId: "l11",
    lessonNumber: "Lección 11",
    section: "例文 (Ejemplo)",
    segments: [
      { text: "80" },
      { text: "円", furigana: "えん" },
      { text: "の" },
      { text: "切手", furigana: "きって" },
      { text: "を" },
      { text: "5枚", furigana: "ごまい" },
      { text: "とはがきを" },
      { text: "2枚", furigana: "にまい" },
      { text: "ください。……はい。" },
      { text: "全部", furigana: "ぜんぶ" },
      { text: "で" },
      { text: "500円", furigana: "ごひゃくえん" },
      { text: "です。" },
    ],
    japaneseText: "80円の切手を5枚とはがきを2枚ください。……はい。全部で500円です。",
    romaji: "Hachijuu-en no kitte o gomai to hagaki o nimai kudasai. ...Hai. Zenbu de gohyaku-en desu.",
    spanish: "Deme 5 sellos de 80 yenes y 2 postales, por favor. ...Sí. En total son 500 yenes.",
    targetKanji: ["円","手","切","切手","部","全部"],
  },
  {
    id: "s-l11-e3",
    lessonId: "l11",
    lessonNumber: "Lección 11",
    section: "例文 (Ejemplo)",
    segments: [
      { text: "富士大学", furigana: "ふじだいがく" },
      { text: "に" },
      { text: "外国人", furigana: "がいこくじん" },
      { text: "の" },
      { text: "先生", furigana: "せんせい" },
      { text: "がいますか。……はい、" },
      { text: "3人", furigana: "さんにん" },
      { text: "います。みんな アメリカ" },
      { text: "人", furigana: "じん" },
      { text: "です。" },
    ],
    japaneseText: "富士大学に外国人の先生がいますか。……はい、3人います。みんな アメリカ人です。",
    romaji: "Fuji daigaku ni gaikokujin no sensei ga imasu ka. ...Hai, sannin imasu. Minna Amerikajin desu.",
    spanish: "¿Hay profesores extranjeros en la Universidad Fuji? ...Sí, hay 3. Todos son estadounidenses.",
    targetKanji: ["人","大","大学","学","先","先生","生","国","外国","外","外国人"],
  },
  {
    id: "s-l11-e4",
    lessonId: "l11",
    lessonNumber: "Lección 11",
    section: "例文 (Ejemplo)",
    segments: [
      { text: "兄弟", furigana: "きょうだい" },
      { text: "は" },
      { text: "何人", furigana: "なんにん" },
      { text: "ですか。……" },
      { text: "4人", furigana: "よにん" },
      { text: "です。" },
      { text: "姉", furigana: "あね" },
      { text: "が" },
      { text: "2人", furigana: "ふたり" },
      { text: "と" },
      { text: "兄", furigana: "あに" },
      { text: "が" },
      { text: "1人", furigana: "ひとり" },
      { text: "います。" },
    ],
    japaneseText: "兄弟は何人ですか。……4人です。姉が2人と兄が1人います。",
    romaji: "Kyoudai wa nannin desu ka. ...Yonin desu. Ane ga futari to ani ga hitori imasu.",
    spanish: "¿Cuántos hermanos son? ...Somos 4. Tengo dos hermanas mayores y un hermano mayor.",
    targetKanji: ["人","何","何人","兄","兄弟","弟","姉"],
  },
  {
    id: "s-l11-e5",
    lessonId: "l11",
    lessonNumber: "Lección 11",
    section: "例文 (Ejemplo)",
    segments: [
      { text: "1" },
      { text: "週間", furigana: "しゅうかん" },
      { text: "に" },
      { text: "何回", furigana: "なんかい" },
      { text: "テニスをしますか。……" },
      { text: "2回", furigana: "にかい" },
      { text: "ぐらいします。" },
    ],
    japaneseText: "1週間に何回テニスをしますか。……2回ぐらいします。",
    romaji: "Isshuukan ni nankai tenisu o shimasu ka. ...Nikai gurai shimasu.",
    spanish: "¿Cuántas veces a la semana juegas al tenis? ...Alrededor de 2 veces.",
    targetKanji: ["何","週","間"],
  },
  {
    id: "s-l11-e6",
    lessonId: "l11",
    lessonNumber: "Lección 11",
    section: "例文 (Ejemplo)",
    segments: [
      { text: "田中", furigana: "たなか" },
      { text: "さんはどのくらいスペイン" },
      { text: "語", furigana: "ご" },
      { text: "を" },
      { text: "勉強", furigana: "べんきょう" },
      { text: "しましたか。……" },
      { text: "3か月", furigana: "さんかげつ" },
      { text: "勉強", furigana: "べんきょう" },
      { text: "しました。……" },
      { text: "3か月", furigana: "さんかげつ" },
      { text: "だけですか。" },
      { text: "上手", furigana: "じょうず" },
      { text: "ですね。" },
    ],
    japaneseText: "田中さんはどのくらいスペイン語を勉強しましたか。……3か月勉強しました。……3か月だけですか。上手ですね。",
    romaji: "Tanaka-san wa dono kurai Supein-go o benkyou shimashita ka. ...Sankagetsu benkyou shimashita. ...Sankagetsu dake desu ka. Jouzu desu ne.",
    spanish: "¿Cuánto tiempo estudió español el Sr. Tanaka? ...Estudié 3 meses. ...¿Solo 3 meses? ¡Qué bien habla!",
    targetKanji: ["月","上","上手","中","手","語","強","勉強","勉","田","田中さん"],
  },
  {
    id: "s-l11-e7",
    lessonId: "l11",
    lessonNumber: "Lección 11",
    section: "例文 (Ejemplo)",
    segments: [
      { text: "大阪", furigana: "おおさか" },
      { text: "から" },
      { text: "東京", furigana: "とうきょう" },
      { text: "まで" },
      { text: "新幹線", furigana: "しんかんせん" },
      { text: "でどのくらいかかりますか。……" },
      { text: "2時間半", furigana: "にじかんはん" },
      { text: "かかります。" },
    ],
    japaneseText: "大阪から東京まで新幹線でどのくらいかかりますか。……2時間半かかります。",
    romaji: "Oosaka kara Toukyou made shinkansen de dono kurai kakarimasu ka. ...Nijikanhan kakarimasu.",
    spanish: "¿Cuánto tiempo se tarda de Osaka a Tokio en tren bala? ...Se tardan dos horas y media.",
    targetKanji: ["大","時","時間","半","間","新","新幹線"],
  },

  // --- Lección 12 (文型 & 例文) ---
  {
    id: "s-l12-b1",
    lessonId: "l12",
    lessonNumber: "Lección 12",
    section: "文型 (Patrón)",
    segments: [
      { text: "きのうは" },
      { text: "雨", furigana: "あめ" },
      { text: "でした。" },
    ],
    japaneseText: "きのうは雨でした。",
    romaji: "Kinou wa ame deshita.",
    spanish: "Ayer llovió (fue un día lluvioso).",
    targetKanji: ["雨"],
  },
  {
    id: "s-l12-b2",
    lessonId: "l12",
    lessonNumber: "Lección 12",
    section: "文型 (Patrón)",
    segments: [
      { text: "きのうは" },
      { text: "寒かったです", furigana: "さむかったです" },
      { text: "。" },
    ],
    japaneseText: "きのうは寒かったです。",
    romaji: "Kinou wa samukatta desu.",
    spanish: "Ayer hizo frío.",
    targetKanji: [],
  },
  {
    id: "s-l12-b3",
    lessonId: "l12",
    lessonNumber: "Lección 12",
    section: "文型 (Patrón)",
    segments: [
      { text: "北海道", furigana: "ほっかいどう" },
      { text: "は" },
      { text: "九州", furigana: "きゅうしゅう" },
      { text: "より" },
      { text: "大きい", furigana: "おおきい" },
      { text: "です。" },
    ],
    japaneseText: "北海道は九州より大きいです。",
    romaji: "Hokkaidou wa Kyuushuu yori ookii desu.",
    spanish: "Hokkaido es más grande que Kyushu.",
    targetKanji: ["九","大","大きい","海","道","北海道"],
  },
  {
    id: "s-l12-b4",
    lessonId: "l12",
    lessonNumber: "Lección 12",
    section: "文型 (Patrón)",
    segments: [
      { text: "わたしは" },
      { text: "1年", furigana: "いちねん" },
      { text: "で" },
      { text: "夏", furigana: "なつ" },
      { text: "がいちばん" },
      { text: "好きです", furigana: "すきです" },
      { text: "。" },
    ],
    japaneseText: "わたしは1年で夏がいちばん好きです。",
    romaji: "Watashi wa ichinen de natsu ga ichiban suki desu.",
    spanish: "De todo el año, la época que más me gusta es el verano.",
    targetKanji: ["年","夏"],
  },
  {
    id: "s-l12-1",
    lessonId: "l12",
    lessonNumber: "Lección 12",
    section: "文型 (Patrón)",
    segments: [
      { text: "春", furigana: "はる" },
      { text: "は" },
      { text: "秋", furigana: "あき" },
      { text: "より" },
      { text: "天気", furigana: "てんき" },
      { text: "が" },
      { text: "いいです。" },
    ],
    japaneseText: "春は秋より天気がいいです。",
    romaji: "Haru wa aki yori tenki ga ii desu.",
    spanish: "En primavera hace mejor tiempo que en otoño.",
    targetKanji: ["春","秋","気","天気","天"],
  },
  {
    id: "s-l12-2",
    lessonId: "l12",
    lessonNumber: "Lección 12",
    section: "例文 (Ejemplo)",
    segments: [
      { text: "一年で" },
      { text: "夏", furigana: "なつ" },
      { text: "が" },
      { text: "いちばん" },
      { text: "暑いです。" },
      { text: "冬", furigana: "ふゆ" },
      { text: "は" },
      { text: "寒いです。" },
    ],
    japaneseText: "一年で夏がいちばん暑いです。冬は寒いです。",
    romaji: "Ichinen de natsu ga ichiban atsui desu. Fuyu wa samui desu.",
    spanish: "El verano es la época más calurosa del año. El invierno es frío.",
    targetKanji: ["一","一年","年","夏","冬"],
  },
  {
    id: "s-l12-e1",
    lessonId: "l12",
    lessonNumber: "Lección 12",
    section: "例文 (Ejemplo)",
    segments: [
      { text: "京都", furigana: "きょうと" },
      { text: "は" },
      { text: "静か", furigana: "しずか" },
      { text: "でしたか。……いいえ、" },
      { text: "静か", furigana: "しずか" },
      { text: "じゃありませんでした。" },
    ],
    japaneseText: "京都は静かでしたか。……いいえ、静かじゃありませんでした。",
    romaji: "Kyouto wa shizuka deshita ka. ...Iie, shizuka ja arimasen deshita.",
    spanish: "¿Estaba tranquilo Kioto? ...No, no estaba nada tranquilo.",
    targetKanji: [],
  },
  {
    id: "s-l12-e2",
    lessonId: "l12",
    lessonNumber: "Lección 12",
    section: "例文 (Ejemplo)",
    segments: [
      { text: "旅行", furigana: "りょこう" },
      { text: "は" },
      { text: "楽しかった", furigana: "たのしかった" },
      { text: "ですか。……はい、" },
      { text: "楽しかった", furigana: "たのしかった" },
      { text: "です。" },
      { text: "天気", furigana: "てんき" },
      { text: "はよかったですか。……いいえ、あまりよくなかったです。" },
    ],
    japaneseText: "旅行は楽しかったですか。……はい、楽しかったです。天気はよかったですか。……いいえ、あまりよくなかったです。",
    romaji: "Ryokou wa tanoshikatta desu ka. ...Hai, tanoshikatta desu. Tenki wa yokatta desu ka. ...Iie, amari yokunakatta desu.",
    spanish: "¿Estuvo divertido el viaje? ...Sí, fue divertido. ¿Hizo buen tiempo? ...No, no hizo muy buen tiempo.",
    targetKanji: ["行","旅行","気","天気","天","楽","旅"],
  },
  {
    id: "s-l12-e3",
    lessonId: "l12",
    lessonNumber: "Lección 12",
    section: "例文 (Ejemplo)",
    segments: [
      { text: "きのうのパーティーはどうでしたか。……とてもにぎやかでした。いろいろな" },
      { text: "人", furigana: "ひと" },
      { text: "に" },
      { text: "会いました", furigana: "あいました" },
      { text: "。" },
    ],
    japaneseText: "きのうのパーティーはどうでしたか。……とてもにぎやかでした。いろいろな人に会いました。",
    romaji: "Kinou no paatii wa dou deshita ka. ...Totemo nigiyaka deshita. Iroirona hito ni aimashita.",
    spanish: "¿Cómo estuvo la fiesta de ayer? ...Estuvo muy animada. Conocí a muchas personas.",
    targetKanji: ["人","会"],
  },
  {
    id: "s-l12-e4",
    lessonId: "l12",
    lessonNumber: "Lección 12",
    section: "例文 (Ejemplo)",
    segments: [
      { text: "ニューヨークは" },
      { text: "大阪", furigana: "おおさか" },
      { text: "より" },
      { text: "寒い", furigana: "さむい" },
      { text: "ですか。……ええ、ずっと" },
      { text: "寒い", furigana: "さむい" },
      { text: "です。" },
    ],
    japaneseText: "ニューヨークは大阪より寒いですか。……ええ、ずっと寒いです。",
    romaji: "Nyuuyooku wa Oosaka yori samui desu ka. ...Ee, zutto samui desu.",
    spanish: "¿Hace más frío en Nueva York que en Osaka? ...Sí, hace mucho más frío.",
    targetKanji: ["大"],
  },
  {
    id: "s-l12-e5",
    lessonId: "l12",
    lessonNumber: "Lección 12",
    section: "例文 (Ejemplo)",
    segments: [
      { text: "空港", furigana: "くうこう" },
      { text: "までバスと" },
      { text: "電車", furigana: "でんしゃ" },
      { text: "とどちらが" },
      { text: "速い", furigana: "はやい" },
      { text: "ですか。……" },
      { text: "電車", furigana: "でんしゃ" },
      { text: "のほうが" },
      { text: "速い", furigana: "はやい" },
      { text: "です。" },
    ],
    japaneseText: "空港までバスと電車とどちらが速いですか。……電車のほうが速いです。",
    romaji: "Kuukou made basu to densha to dochira ga hayai desu ka. ...Densha no hou ga hayai desu.",
    spanish: "¿Para ir al aeropuerto, qué es más rápido, el autobús o el tren? ...El tren es más rápido.",
    targetKanji: ["車","電車","電"],
  },
  {
    id: "s-l12-e6",
    lessonId: "l12",
    lessonNumber: "Lección 12",
    section: "例文 (Ejemplo)",
    segments: [
      { text: "海", furigana: "うみ" },
      { text: "と" },
      { text: "山", furigana: "やま" },
      { text: "とどちらが" },
      { text: "好き", furigana: "すき" },
      { text: "ですか。……どちらも" },
      { text: "好き", furigana: "すき" },
      { text: "です。" },
    ],
    japaneseText: "海と山とどちらが好きですか。……どちらも好きです。",
    romaji: "Umi to yama to dochira ga suki desu ka. ...Dochira mo suki desu.",
    spanish: "¿Qué te gusta más, el mar o la montaña? ...Me gustan los dos.",
    targetKanji: ["山","海"],
  },
  {
    id: "s-l12-e7",
    lessonId: "l12",
    lessonNumber: "Lección 12",
    section: "例文 (Ejemplo)",
    segments: [
      { text: "日本料理", furigana: "にほんりょうり" },
      { text: "[の" },
      { text: "中", furigana: "なか" },
      { text: "]で" },
      { text: "何", furigana: "なに" },
      { text: "がいちばん" },
      { text: "好き", furigana: "すき" },
      { text: "ですか。……てんぷらがいちばん" },
      { text: "好き", furigana: "すき" },
      { text: "です。" },
    ],
    japaneseText: "日本料理[の中]で何がいちばん好きですか。……てんぷらがいちばん好きです。",
    romaji: "Nihon-ryouri [no naka] de nani ga ichiban suki desu ka. ...Tenpura ga ichiban suki desu.",
    spanish: "¿De la gastronomía japonesa, qué es lo que más te gusta? ...La tempura es lo que más me gusta.",
    targetKanji: ["本","日本","日","何","中","料","料理","理"],
  },

  // --- Lección 13 (文型 & 例文) ---
  {
    id: "s-l13-b1",
    lessonId: "l13",
    lessonNumber: "Lección 13",
    section: "文型 (Patrón)",
    segments: [
      { text: "わたしは" },
      { text: "車", furigana: "くるま" },
      { text: "が" },
      { text: "欲しい", furigana: "ほしい" },
      { text: "です。" },
    ],
    japaneseText: "わたしは車が欲しいです。",
    romaji: "Watashi wa kuruma ga hoshii desu.",
    spanish: "Quiero un coche.",
    targetKanji: ["車","欲","欲しい","車が欲しい"],
  },
  {
    id: "s-l13-b2",
    lessonId: "l13",
    lessonNumber: "Lección 13",
    section: "文型 (Patrón)",
    segments: [
      { text: "わたしはすしを" },
      { text: "食べたい", furigana: "たべたい" },
      { text: "です。" },
    ],
    japaneseText: "わたしはすしを食べたいです。",
    romaji: "Watashi wa sushi o tabetai desu.",
    spanish: "Quiero comer sushi.",
    targetKanji: ["食"],
  },
  {
    id: "s-l13-b3",
    lessonId: "l13",
    lessonNumber: "Lección 13",
    section: "文型 (Patrón)",
    segments: [
      { text: "わたしはフランスへ" },
      { text: "料理", furigana: "りょうり" },
      { text: "を" },
      { text: "習いに", furigana: "ならいに" },
      { text: "行きます", furigana: "いきます" },
      { text: "。" },
    ],
    japaneseText: "わたしはフランスへ料理を習いに行きます。",
    romaji: "Watashi wa Furansu e ryouri o narai ni ikimasu.",
    spanish: "Voy a Francia a aprender gastronomía.",
    targetKanji: ["行","行きます","料","料理","理","習"],
  },
  {
    id: "s-l13-1",
    lessonId: "l13",
    lessonNumber: "Lección 13",
    section: "文型 (Patrón)",
    segments: [
      { text: "わたしは" },
      { text: "映画", furigana: "えいが" },
      { text: "を" },
      { text: "見に", furigana: "みに" },
      { text: "行きたいです。" },
    ],
    japaneseText: "わたしは映画を見に行きたいです。",
    romaji: "Watashi wa eiga o mi ni ikitai desu.",
    spanish: "Quiero ir a ver una película.",
    targetKanji: ["行","見","画","映画","映"],
  },
  {
    id: "s-l13-2",
    lessonId: "l13",
    lessonNumber: "Lección 13",
    section: "例文 (Ejemplo)",
    segments: [
      { text: "世界", furigana: "せかい" },
      { text: "の" },
      { text: "海", furigana: "うみ" },
      { text: "や" },
      { text: "川", furigana: "かわ" },
      { text: "を" },
      { text: "旅行したいです。" },
    ],
    japaneseText: "世界の海や川を旅行したいです。",
    romaji: "Sekai no umi ya kawa o ryokou shitai desu.",
    spanish: "Quiero viajar por los mares y ríos del mundo.",
    targetKanji: ["行","旅行","海","川","世","世界","界","旅"],
  },
  {
    id: "s-l13-e1",
    lessonId: "l13",
    lessonNumber: "Lección 13",
    section: "例文 (Ejemplo)",
    segments: [
      { text: "今", furigana: "いま" },
      { text: "何", furigana: "なに" },
      { text: "がいちばん" },
      { text: "欲しい", furigana: "ほしい" },
      { text: "ですか。……" },
      { text: "新しい", furigana: "あたらしい" },
      { text: "ケータイが" },
      { text: "欲しい", furigana: "ほしい" },
      { text: "です。" },
    ],
    japaneseText: "今何がいちばん欲しいですか。……新しいケータイが欲しいです。",
    romaji: "Ima nani ga ichiban hoshii desu ka. ...Atarashii keetai ga hoshii desu.",
    spanish: "¿Qué es lo que más deseas ahora? ...Quiero un teléfono móvil nuevo.",
    targetKanji: ["何","今","新","新しい","欲","欲しい"],
  },
  {
    id: "s-l13-e2",
    lessonId: "l13",
    lessonNumber: "Lección 13",
    section: "例文 (Ejemplo)",
    segments: [
      { text: "夏休み", furigana: "なつやすみ" },
      { text: "はどこへ" },
      { text: "行きたい", furigana: "いきたい" },
      { text: "ですか。……" },
      { text: "沖縄", furigana: "おきなわ" },
      { text: "へ" },
      { text: "行きたい", furigana: "いきたい" },
      { text: "です。" },
    ],
    japaneseText: "夏休みはどこへ行きたいですか。……沖縄へ行きたいです。",
    romaji: "Natsuyasumi wa doko e ikitai desu ka. ...Okinawa e ikitai desu.",
    spanish: "¿A dónde quieres ir en vacaciones de verano? ...Quiero ir a Okinawa.",
    targetKanji: ["行","休","休み","夏休み","夏"],
  },
  {
    id: "s-l13-e3",
    lessonId: "l13",
    lessonNumber: "Lección 13",
    section: "例文 (Ejemplo)",
    segments: [
      { text: "きょうは" },
      { text: "疲れました", furigana: "つかれました" },
      { text: "から、" },
      { text: "何", furigana: "なに" },
      { text: "もしなくないです。……そうですね。きょうの" },
      { text: "会議", furigana: "かいぎ" },
      { text: "は" },
      { text: "大変", furigana: "たいへん" },
      { text: "でしたね。" },
    ],
    japaneseText: "きょうは疲れましたから、何もしなくないです。……そうですね。きょうの会議は大変でしたね。",
    romaji: "Kyou wa tsukaremashita kara, nani mo shitakunai desu. ...Sou desu ne. Kyou no kaigi wa taihen deshita ne.",
    spanish: "Hoy estoy cansado, así que no quiero hacer nada. ...Es verdad. La reunión de hoy fue muy pesada.",
    targetKanji: ["何","大","大変","会","会議","議"],
  },
  {
    id: "s-l13-e4",
    lessonId: "l13",
    lessonNumber: "Lección 13",
    section: "例文 (Ejemplo)",
    segments: [
      { text: "週末", furigana: "しゅうまつ" },
      { text: "は" },
      { text: "何", furigana: "なに" },
      { text: "をしますか。……" },
      { text: "子ども", furigana: "こども" },
      { text: "と" },
      { text: "神戸", furigana: "こうべ" },
      { text: "へ" },
      { text: "船", furigana: "ふね" },
      { text: "を" },
      { text: "見に", furigana: "みに" },
      { text: "行きます", furigana: "いきます" },
      { text: "。" },
    ],
    japaneseText: "週末は何をしますか。……子どもと神戸へ船を見に行きます。",
    romaji: "Shuumatsu wa nani o shimasu ka. ...Kodomo to Koube e fune o mi ni ikimasu.",
    spanish: "¿Qué harás el fin de semana? ...Iré con mi hijo a Kobe a ver barcos.",
    targetKanji: ["何","行","行きます","週","見","子","子ども"],
  },
  {
    id: "s-l13-e5",
    lessonId: "l13",
    lessonNumber: "Lección 13",
    section: "例文 (Ejemplo)",
    segments: [
      { text: "日本", furigana: "にほん" },
      { text: "へ" },
      { text: "何", furigana: "なん" },
      { text: "の" },
      { text: "勉強", furigana: "べんきょう" },
      { text: "に" },
      { text: "来ました", furigana: "きました" },
      { text: "か。……" },
      { text: "美術", furigana: "びじゅつ" },
      { text: "の" },
      { text: "勉強", furigana: "べんきょう" },
      { text: "に" },
      { text: "来ました", furigana: "きました" },
      { text: "。" },
    ],
    japaneseText: "日本へ何の勉強に来ましたか。……美術の勉強に来ました。",
    romaji: "Nihon e nan no benkyou ni kimashita ka. ...Bijutsu no benkyou ni kimashita.",
    spanish: "¿A estudiar qué viniste a Japón? ...Vine a estudiar bellas artes.",
    targetKanji: ["本","日本","日","何","来","強","勉強","勉"],
  },
  {
    id: "s-l13-e6",
    lessonId: "l13",
    lessonNumber: "Lección 13",
    section: "例文 (Ejemplo)",
    segments: [
      { text: "冬休み", furigana: "ふゆやすみ" },
      { text: "はどこか" },
      { text: "行きました", furigana: "いきました" },
      { text: "か。……ええ。" },
      { text: "北海道", furigana: "ほっかいどう" },
      { text: "へスキーに" },
      { text: "行きました", furigana: "いきました" },
      { text: "。" },
    ],
    japaneseText: "冬休みはどこか行きましたか。……ええ。北海道へスキーに行きました。",
    romaji: "Fuyuyasumi wa dokoka ikimashita ka. ...Ee. Hokkaidou e sukii ni ikimashita.",
    spanish: "¿Fuiste a algún sitio en las vacaciones de invierno? ...Sí. Fui a Hokkaido a esquiar.",
    targetKanji: ["行","休","休み","冬","冬休み","海","道","北海道"],
  },

  // --- Lecciones 14 a 25 ---

  // --- Lección 14 (文型 & 例文) ---
  {
    id: "s-l14-b1",
    lessonId: "l14",
    lessonNumber: "Lección 14",
    section: "文型 (Patrón)",
    segments: [
          {
                "text": "ちょっと"
          },
          {
                "text": "待って",
                "furigana": "まって"
          },
          {
                "text": "ください。"
          }
    ],
    japaneseText: "ちょっと待ってください。",
    romaji: "Chotto matte kudasai.",
    spanish: "Por favor, espere un momento.",
    targetKanji: ["待"],
  },
  {
    id: "s-l14-b2",
    lessonId: "l14",
    lessonNumber: "Lección 14",
    section: "文型 (Patrón)",
    segments: [
          {
                "text": "荷物",
                "furigana": "にもつ"
          },
          {
                "text": "を"
          },
          {
                "text": "持ちましょうか",
                "furigana": "もちましょうか"
          },
          {
                "text": "。"
          }
    ],
    japaneseText: "荷物を持ちましょうか。",
    romaji: "Nimotsu o mochimashou ka.",
    spanish: "¿Le llevo el equipaje / las cosas?",
    targetKanji: ["荷","物","持"],
  },
  {
    id: "s-l14-b3",
    lessonId: "l14",
    lessonNumber: "Lección 14",
    section: "文型 (Patrón)",
    segments: [
          {
                "text": "ミラーさんは"
          },
          {
                "text": "今",
                "furigana": "いま"
          },
          {
                "text": "電話",
                "furigana": "でんわ"
          },
          {
                "text": "をかけています。"
          }
    ],
    japaneseText: "ミラーさんは今電話をかけています。",
    romaji: "Miraa-san wa ima denwa o kakete imasu.",
    spanish: "El Sr. Miller está hablando por teléfono en este momento.",
    targetKanji: ["今","電","話"],
  },
  {
    id: "s-l14-b4",
    lessonId: "l14",
    lessonNumber: "Lección 14",
    section: "文型 (Patrón)",
    segments: [
          {
                "text": "雨",
                "furigana": "あめ"
          },
          {
                "text": "が"
          },
          {
                "text": "降っています",
                "furigana": "ふっています"
          },
          {
                "text": "から、タクシーを"
          },
          {
                "text": "呼びましょう",
                "furigana": "よびましょう"
          },
          {
                "text": "。"
          }
    ],
    japaneseText: "雨が降っていますから、タクシーを呼びましょう。",
    romaji: "Ame ga futte imasu kara, takushii o yobimashou.",
    spanish: "Como está lloviendo, llamemos a un taxi.",
    targetKanji: ["雨","降"],
  },
  {
    id: "s-l14-e1",
    lessonId: "l14",
    lessonNumber: "Lección 14",
    section: "例文 (Ejemplo)",
    segments: [
          {
                "text": "ボールペンで"
          },
          {
                "text": "名前",
                "furigana": "なまえ"
          },
          {
                "text": "を"
          },
          {
                "text": "書いて",
                "furigana": "かいて"
          },
          {
                "text": "ください。……はい、わかりました。"
          }
    ],
    japaneseText: "ボールペンで名前を書いてください。……はい、わかりました。",
    romaji: "Boorupen de namae o kaite kudasai. ...Hai, wakarimashita.",
    spanish: "Escriba su nombre con bolígrafo, por favor. ...Sí, de acuerdo.",
    targetKanji: ["名","前","書"],
  },
  {
    id: "s-l14-e2",
    lessonId: "l14",
    lessonNumber: "Lección 14",
    section: "例文 (Ejemplo)",
    segments: [
          {
                "text": "すみませんが、この"
          },
          {
                "text": "漢字",
                "furigana": "かんじ"
          },
          {
                "text": "の"
          },
          {
                "text": "読み方",
                "furigana": "よみかた"
          },
          {
                "text": "を"
          },
          {
                "text": "教えて",
                "furigana": "おしえて"
          },
          {
                "text": "ください。……「じゅうしょ」ですよ。"
          }
    ],
    japaneseText: "すみませんが、この漢字の読み方を教えてください。……「じゅうしょ」ですよ。",
    romaji: "Sumimasen ga, kono kanji no yomikata o oshiete kudasai. ...\"Juusho\" desu yo.",
    spanish: "Disculpe, ¿podría enseñarme la lectura de este kanji? ...Es \"juusho\" (dirección).",
    targetKanji: ["漢","字","読","方","教"],
  },
  {
    id: "s-l14-e3",
    lessonId: "l14",
    lessonNumber: "Lección 14",
    section: "例文 (Ejemplo)",
    segments: [
          {
                "text": "暑い",
                "furigana": "あつい"
          },
          {
                "text": "ですね。"
          },
          {
                "text": "窓",
                "furigana": "まど"
          },
          {
                "text": "を"
          },
          {
                "text": "開けましょうか",
                "furigana": "あけましょうか"
          },
          {
                "text": "。……ええ、お"
          },
          {
                "text": "願いします",
                "furigana": "ねがいします"
          },
          {
                "text": "。"
          }
    ],
    japaneseText: "暑いですね。窓を開けましょうか。……ええ、お願いします。",
    romaji: "Atsui desu ne. Mado o akemashou ka. ...Ee, onegai shimasu.",
    spanish: "Hace calor, ¿verdad? ¿Abro la ventana? ...Sí, por favor.",
    targetKanji: ["開"],
  },
  {
    id: "s-l14-e4",
    lessonId: "l14",
    lessonNumber: "Lección 14",
    section: "例文 (Ejemplo)",
    segments: [
          {
                "text": "駅",
                "furigana": "えき"
          },
          {
                "text": "まで"
          },
          {
                "text": "迎え",
                "furigana": "むかえ"
          },
          {
                "text": "に"
          },
          {
                "text": "行きましょうか",
                "furigana": "いきましょうか"
          },
          {
                "text": "。……いいえ、けっこうです。タクシーで"
          },
          {
                "text": "行きます",
                "furigana": "いきます"
          },
          {
                "text": "から。"
          }
    ],
    japaneseText: "駅まで迎えに行きましょうか。……いいえ、けっこうです。タクシーで行きますから。",
    romaji: "Eki made mukae ni ikimashou ka. ...Iie, kekkou desu. Takushii de ikimasu kara.",
    spanish: "¿Voy a la estación a recogerle? ...No, gracias, está bien; iré en taxi.",
    targetKanji: ["駅","行"],
  },
  {
    id: "s-l14-e5",
    lessonId: "l14",
    lessonNumber: "Lección 14",
    section: "例文 (Ejemplo)",
    segments: [
          {
                "text": "ミラーさんはどこですか。……"
          },
          {
                "text": "今",
                "furigana": "いま"
          },
          {
                "text": "会議室",
                "furigana": "かいぎしつ"
          },
          {
                "text": "で"
          },
          {
                "text": "松本",
                "furigana": "まつもと"
          },
          {
                "text": "さんと"
          },
          {
                "text": "話して",
                "furigana": "はなして"
          },
          {
                "text": "います。"
          }
    ],
    japaneseText: "ミラーさんはどこですか。……今会議室で松本さんと話しています。",
    romaji: "Miraa-san wa doko desu ka. ...Ima kaigishitsu de Matsumoto-san to hanashite imasu.",
    spanish: "¿Dónde está el Sr. Miller? ...Está hablando con el Sr. Matsumoto en la sala de reuniones.",
    targetKanji: ["今","会","議","室","話","本"],
  },
  {
    id: "s-l14-e6",
    lessonId: "l14",
    lessonNumber: "Lección 14",
    section: "例文 (Ejemplo)",
    segments: [
          {
                "text": "今",
                "furigana": "いま"
          },
          {
                "text": "雨",
                "furigana": "あめ"
          },
          {
                "text": "が"
          },
          {
                "text": "降って",
                "furigana": "ふって"
          },
          {
                "text": "いますか。……いいえ、"
          },
          {
                "text": "降って",
                "furigana": "ふって"
          },
          {
                "text": "いません。"
          }
    ],
    japaneseText: "今雨が降っていますか。……いいえ、降っていません。",
    romaji: "Ima ame ga futte imasu ka. ...Iie, futte imasen.",
    spanish: "¿Está lloviendo ahora? ...No, no está lloviendo.",
    targetKanji: ["今","雨","降"],
  },
  // --- Lección 15 (文型 & 例文) ---
  {
    id: "s-l15-b1",
    lessonId: "l15",
    lessonNumber: "Lección 15",
    section: "文型 (Patrón)",
    segments: [
          {
                "text": "写真",
                "furigana": "しゃしん"
          },
          {
                "text": "を"
          },
          {
                "text": "撮っても",
                "furigana": "とっても"
          },
          {
                "text": "いいですか。"
          }
    ],
    japaneseText: "写真を撮ってもいいですか。",
    romaji: "Shashin o tottemo ii desu ka.",
    spanish: "¿Se pueden tomar fotos? / ¿Puedo sacar una fotografía?",
    targetKanji: ["写","真"],
  },
  {
    id: "s-l15-b2",
    lessonId: "l15",
    lessonNumber: "Lección 15",
    section: "文型 (Patrón)",
    segments: [
          {
                "text": "サントスさんは"
          },
          {
                "text": "電子辞書",
                "furigana": "でんしじしょ"
          },
          {
                "text": "を"
          },
          {
                "text": "持って",
                "furigana": "もって"
          },
          {
                "text": "います。"
          }
    ],
    japaneseText: "サントスさんは電子辞書を持っています。",
    romaji: "Santosu-san wa denshi jisho o motte imasu.",
    spanish: "El Sr. Santos tiene un diccionario electrónico.",
    targetKanji: ["電","子","辞","書","持"],
  },
  {
    id: "s-l15-e1",
    lessonId: "l15",
    lessonNumber: "Lección 15",
    section: "例文 (Ejemplo)",
    segments: [
          {
                "text": "このカタログをもらってもいいですか。……ええ、いいですよ。どうぞ。"
          }
    ],
    japaneseText: "このカタログをもらってもいいですか。……ええ、いいですよ。どうぞ。",
    romaji: "Kono katarogu o morattemo ii desu ka. ...Ee, ii desu yo. Douzo.",
    spanish: "¿Puedo llevarme este catálogo? ...Sí, claro. Adelante.",
    targetKanji: [],
  },
  {
    id: "s-l15-e2",
    lessonId: "l15",
    lessonNumber: "Lección 15",
    section: "例文 (Ejemplo)",
    segments: [
          {
                "text": "この"
          },
          {
                "text": "辞書",
                "furigana": "じしょ"
          },
          {
                "text": "を"
          },
          {
                "text": "借りても",
                "furigana": "かりても"
          },
          {
                "text": "いいですか。……すみません、ちょっと……。"
          },
          {
                "text": "今",
                "furigana": "いま"
          },
          {
                "text": "使って",
                "furigana": "つかって"
          },
          {
                "text": "います。"
          }
    ],
    japaneseText: "この辞書を借りてもいいですか。……すみません、ちょっと……。今使っています。",
    romaji: "Kono jisho o karitemo ii desu ka. ...Sumimasen, chotto... Ima tsukatte imasu.",
    spanish: "¿Puedo tomar prestado este diccionario? ...Disculpe, es que... ahora mismo lo estoy usando.",
    targetKanji: ["辞","書","借","今","使"],
  },
  {
    id: "s-l15-e3",
    lessonId: "l15",
    lessonNumber: "Lección 15",
    section: "例文 (Ejemplo)",
    segments: [
          {
                "text": "ここでたばこを"
          },
          {
                "text": "吸って",
                "furigana": "すって"
          },
          {
                "text": "はいけません。"
          },
          {
                "text": "禁煙",
                "furigana": "きんえん"
          },
          {
                "text": "ですから。……そうですか。すみません。"
          }
    ],
    japaneseText: "ここでたばこを吸ってはいけません。禁煙ですから。……そうですか。すみません。",
    romaji: "Koko de tabako o sutte wa ikemasen. Kin'en desu kara. ...Sou desu ka. Sumimasen.",
    spanish: "No se debe fumar aquí. Es zona de no fumadores. ...Ah, ya veo. Disculpe.",
    targetKanji: [],
  },
  {
    id: "s-l15-e4",
    lessonId: "l15",
    lessonNumber: "Lección 15",
    section: "例文 (Ejemplo)",
    segments: [
          {
                "text": "カリナさんはどこで"
          },
          {
                "text": "勉強して",
                "furigana": "べんきょうして"
          },
          {
                "text": "いますか。……"
          },
          {
                "text": "富士大学",
                "furigana": "ふじだいがく"
          },
          {
                "text": "で"
          },
          {
                "text": "勉強して",
                "furigana": "べんきょうして"
          },
          {
                "text": "います。"
          }
    ],
    japaneseText: "カリナさんはどこで勉強していますか。……富士大学で勉強しています。",
    romaji: "Karina-san wa doko de benkyou shite imasu ka. ...Fuji daigaku de benkyou shite imasu.",
    spanish: "¿Dónde está estudiando Karina? ...Está estudiando en la Universidad Fuji.",
    targetKanji: ["勉","強","富","士","大","学"],
  },
  {
    id: "s-l15-e5",
    lessonId: "l15",
    lessonNumber: "Lección 15",
    section: "例文 (Ejemplo)",
    segments: [
          {
                "text": "マリアさんは"
          },
          {
                "text": "結婚して",
                "furigana": "けっこんして"
          },
          {
                "text": "いますか。……いいえ、"
          },
          {
                "text": "独身",
                "furigana": "どくしん"
          },
          {
                "text": "です。"
          }
    ],
    japaneseText: "マリアさんは結婚していますか。……いいえ、独身です。",
    romaji: "Maria-san wa kekkon shite imasu ka. ...Iie, dokushin desu.",
    spanish: "¿Está casada María? ...No, es soltera.",
    targetKanji: ["身"],
  },
  {
    id: "s-l15-e6",
    lessonId: "l15",
    lessonNumber: "Lección 15",
    section: "例文 (Ejemplo)",
    segments: [
          {
                "text": "市役所",
                "furigana": "しやくしょ"
          },
          {
                "text": "の"
          },
          {
                "text": "電話番号",
                "furigana": "でんわばんごう"
          },
          {
                "text": "を"
          },
          {
                "text": "知って",
                "furigana": "しって"
          },
          {
                "text": "いますか。……いいえ、"
          },
          {
                "text": "知りません",
                "furigana": "しりません"
          },
          {
                "text": "。"
          }
    ],
    japaneseText: "市役所の電話番号を知っていますか。……いいえ、知りません。",
    romaji: "Shiyakusho no denwa bangou o shitte imasu ka. ...Iie, shirimasen.",
    spanish: "¿Conoce el número de teléfono del ayuntamiento? ...No, no lo sé.",
    targetKanji: ["電","話","知"],
  },
  {
    id: "s-l15-e7",
    lessonId: "l15",
    lessonNumber: "Lección 15",
    section: "例文 (Ejemplo)",
    segments: [
          {
                "text": "田中さんは"
          },
          {
                "text": "東京に"
          },
          {
                "text": "住んでいます",
                "furigana": "すんでいます"
          },
          {
                "text": "。"
          }
    ],
    japaneseText: "田中さんは東京に住んでいます。",
    romaji: "Tanaka-san wa Toukyou ni sunde imasu.",
    spanish: "El Sr. Tanaka reside en Tokio.",
    targetKanji: ["田","中","住"],
  },
  // --- Lección 16 (文型 & 例文) ---
  {
    id: "s-l16-b1",
    lessonId: "l16",
    lessonNumber: "Lección 16",
    section: "文型 (Patrón)",
    segments: [
          {
                "text": "朝",
                "furigana": "あさ"
          },
          {
                "text": "ジョギングをして、シャワーを"
          },
          {
                "text": "浴びて",
                "furigana": "あびて"
          },
          {
                "text": "、"
          },
          {
                "text": "会社",
                "furigana": "かいしゃ"
          },
          {
                "text": "へ"
          },
          {
                "text": "行きます",
                "furigana": "いきます"
          },
          {
                "text": "。"
          }
    ],
    japaneseText: "朝ジョギングをして、シャワーを浴びて、会社へ行きます。",
    romaji: "Asa jogingu o shite, shawaa o abite, kaisha e ikimasu.",
    spanish: "Por la mañana hago footing, me ducho y voy al trabajo / empresa.",
    targetKanji: ["朝","浴","会","社","行"],
  },
  {
    id: "s-l16-b2",
    lessonId: "l16",
    lessonNumber: "Lección 16",
    section: "文型 (Patrón)",
    segments: [
          {
                "text": "コンサートが"
          },
          {
                "text": "終わって",
                "furigana": "おわって"
          },
          {
                "text": "から、レストランで"
          },
          {
                "text": "食事",
                "furigana": "しょくじ"
          },
          {
                "text": "しました。"
          }
    ],
    japaneseText: "コンサートが終わってから、レストランで食事しました。",
    romaji: "Konsaato ga owatte kara, resutoran de shokuji shimashita.",
    spanish: "Después de terminar el concierto, cené / comí en un restaurante.",
    targetKanji: ["終","食","事"],
  },
  {
    id: "s-l16-b3",
    lessonId: "l16",
    lessonNumber: "Lección 16",
    section: "文型 (Patrón)",
    segments: [
          {
                "text": "大阪",
                "furigana": "おおさか"
          },
          {
                "text": "は"
          },
          {
                "text": "食べ物",
                "furigana": "たべもの"
          },
          {
                "text": "がおいしいです。"
          }
    ],
    japaneseText: "大阪は食べ物がおいしいです。",
    romaji: "Oosaka wa tabemono ga oishii desu.",
    spanish: "En Osaka la comida es deliciosa.",
    targetKanji: ["大","阪","食","物"],
  },
  {
    id: "s-l16-b4",
    lessonId: "l16",
    lessonNumber: "Lección 16",
    section: "文型 (Patrón)",
    segments: [
          {
                "text": "この"
          },
          {
                "text": "部屋",
                "furigana": "へや"
          },
          {
                "text": "は"
          },
          {
                "text": "広くて",
                "furigana": "ひろくて"
          },
          {
                "text": "、"
          },
          {
                "text": "明るい",
                "furigana": "あかるい"
          },
          {
                "text": "です。"
          }
    ],
    japaneseText: "この部屋は広くて、明るいです。",
    romaji: "Kono heya wa hirokute, akarui desu.",
    spanish: "Esta habitación es amplia y luminosa.",
    targetKanji: ["部","屋","広","明"],
  },
  {
    id: "s-l16-e1",
    lessonId: "l16",
    lessonNumber: "Lección 16",
    section: "例文 (Ejemplo)",
    segments: [
          {
                "text": "きのう"
          },
          {
                "text": "何",
                "furigana": "なに"
          },
          {
                "text": "をしましたか。……"
          },
          {
                "text": "図書館",
                "furigana": "としょかん"
          },
          {
                "text": "へ"
          },
          {
                "text": "行って",
                "furigana": "いって"
          },
          {
                "text": "、"
          },
          {
                "text": "本",
                "furigana": "ほん"
          },
          {
                "text": "を"
          },
          {
                "text": "返して",
                "furigana": "かえして"
          },
          {
                "text": "、それから"
          },
          {
                "text": "映画",
                "furigana": "えいが"
          },
          {
                "text": "を"
          },
          {
                "text": "見ました",
                "furigana": "みました"
          },
          {
                "text": "。"
          }
    ],
    japaneseText: "きのう何をしましたか。……図書館へ行って、本を返して、それから映画を見ました。",
    romaji: "Kinou nani o shimashita ka. ...Toshokan e itte, hon o kaeshite, sorekara eiga o mimashita.",
    spanish: "¿Qué hiciste ayer? ...Fui a la biblioteca, devolví un libro y luego vi una película.",
    targetKanji: ["何","図","書","館","行","本","映","画","見"],
  },
  {
    id: "s-l16-e2",
    lessonId: "l16",
    lessonNumber: "Lección 16",
    section: "例文 (Ejemplo)",
    segments: [
          {
                "text": "大学",
                "furigana": "だいがく"
          },
          {
                "text": "までどうやって"
          },
          {
                "text": "行きます",
                "furigana": "いきます"
          },
          {
                "text": "か。……"
          },
          {
                "text": "京都駅",
                "furigana": "きょうとえき"
          },
          {
                "text": "から16"
          },
          {
                "text": "番",
                "furigana": "ばん"
          },
          {
                "text": "のバスに"
          },
          {
                "text": "乗って",
                "furigana": "のって"
          },
          {
                "text": "、"
          },
          {
                "text": "大学前",
                "furigana": "だいがくまえ"
          },
          {
                "text": "で"
          },
          {
                "text": "降ります",
                "furigana": "おります"
          },
          {
                "text": "。"
          }
    ],
    japaneseText: "大学までどうやって行きますか。……京都駅から16番のバスに乗って、大学前で降ります。",
    romaji: "Daigaku made dou yatte ikimasu ka. ...Kyouto-eki kara juuroku-ban no basu ni notte, daigaku-mae de orimasu.",
    spanish: "¿Cómo vas hasta la universidad? ...Tomo el autobús número 16 desde la estación de Kioto y me bajo frente a la universidad.",
    targetKanji: ["大","学","行","京","都","駅","前","降"],
  },
  {
    id: "s-l16-e3",
    lessonId: "l16",
    lessonNumber: "Lección 16",
    section: "例文 (Ejemplo)",
    segments: [
          {
                "text": "国",
                "furigana": "くに"
          },
          {
                "text": "へ"
          },
          {
                "text": "帰って",
                "furigana": "かえって"
          },
          {
                "text": "から、"
          },
          {
                "text": "何",
                "furigana": "なに"
          },
          {
                "text": "をしますか。……"
          },
          {
                "text": "父",
                "furigana": "ちち"
          },
          {
                "text": "の"
          },
          {
                "text": "会社",
                "furigana": "かいしゃ"
          },
          {
                "text": "で"
          },
          {
                "text": "働きます",
                "furigana": "はたらきます"
          },
          {
                "text": "。"
          }
    ],
    japaneseText: "国へ帰ってから、何をしますか。……父の会社で働きます。",
    romaji: "Kuni e kaette kara, nani o shimasu ka. ...Chichi no kaisha de hatarakimasu.",
    spanish: "¿Qué harás después de regresar a tu país? ...Trabajaré en la empresa de mi padre.",
    targetKanji: ["国","帰","何","父","会","社"],
  },
  {
    id: "s-l16-e4",
    lessonId: "l16",
    lessonNumber: "Lección 16",
    section: "例文 (Ejemplo)",
    segments: [
          {
                "text": "サントスさんはどの"
          },
          {
                "text": "人",
                "furigana": "ひと"
          },
          {
                "text": "ですか。……あの"
          },
          {
                "text": "背",
                "furigana": "せ"
          },
          {
                "text": "が"
          },
          {
                "text": "高くて",
                "furigana": "たかくて"
          },
          {
                "text": "、"
          },
          {
                "text": "髪",
                "furigana": "かみ"
          },
          {
                "text": "が"
          },
          {
                "text": "黒い",
                "furigana": "くろい"
          },
          {
                "text": "人",
                "furigana": "ひと"
          },
          {
                "text": "です。"
          }
    ],
    japaneseText: "サントスさんはどの人ですか。……あの背が高くて、髪が黒い人です。",
    romaji: "Santosu-san wa dono hito desu ka. ...Ano se ga takakute, kami ga kuroi hito desu.",
    spanish: "¿Cuál persona es el Sr. Santos? ...Es aquella persona alta de cabello negro.",
    targetKanji: ["人","高","黒"],
  },
  {
    id: "s-l16-e5",
    lessonId: "l16",
    lessonNumber: "Lección 16",
    section: "例文 (Ejemplo)",
    segments: [
          {
                "text": "奈良",
                "furigana": "なら"
          },
          {
                "text": "はどんな"
          },
          {
                "text": "町",
                "furigana": "まち"
          },
          {
                "text": "ですか。……"
          },
          {
                "text": "静か",
                "furigana": "しずか"
          },
          {
                "text": "で、きれいな"
          },
          {
                "text": "町",
                "furigana": "まち"
          },
          {
                "text": "です。"
          }
    ],
    japaneseText: "奈良はどんな町ですか。……静かで、きれいな町です。",
    romaji: "Nara wa donna machi desu ka. ...Shizuka de, kirei na machi desu.",
    spanish: "¿Qué clase de ciudad es Nara? ...Es una ciudad tranquila y bonita.",
    targetKanji: ["町"],
  },
  {
    id: "s-l16-e6",
    lessonId: "l16",
    lessonNumber: "Lección 16",
    section: "例文 (Ejemplo)",
    segments: [
          {
                "text": "マリアさんは"
          },
          {
                "text": "目",
                "furigana": "め"
          },
          {
                "text": "が"
          },
          {
                "text": "大きくて、"
          },
          {
                "text": "髪が"
          },
          {
                "text": "長いです",
                "furigana": "ながいです"
          },
          {
                "text": "。"
          }
    ],
    japaneseText: "マリアさんは目が大きくて、髪が長いです。",
    romaji: "Maria-san wa me ga ookikute, kami ga nagai desu.",
    spanish: "María tiene los ojos grandes y el pelo largo.",
    targetKanji: ["目","大","長"],
  },
  // --- Lección 17 (文型 & 例文) ---
  {
    id: "s-l17-b1",
    lessonId: "l17",
    lessonNumber: "Lección 17",
    section: "文型 (Patrón)",
    segments: [
          {
                "text": "写真",
                "furigana": "しゃしん"
          },
          {
                "text": "を"
          },
          {
                "text": "撮らないで",
                "furigana": "とらないで"
          },
          {
                "text": "ください。"
          }
    ],
    japaneseText: "写真を撮らないでください。",
    romaji: "Shashin o toranaide kudasai.",
    spanish: "Por favor, no tome fotografías.",
    targetKanji: ["写","真"],
  },
  {
    id: "s-l17-b2",
    lessonId: "l17",
    lessonNumber: "Lección 17",
    section: "文型 (Patrón)",
    segments: [
          {
                "text": "パスポートを"
          },
          {
                "text": "見せなければ",
                "furigana": "みせなければ"
          },
          {
                "text": "なりません。"
          }
    ],
    japaneseText: "パスポートを見せなければなりません。",
    romaji: "Pasupooto o misenakereba narimasen.",
    spanish: "Debe mostrar el pasaporte (es obligatorio).",
    targetKanji: ["見"],
  },
  {
    id: "s-l17-b3",
    lessonId: "l17",
    lessonNumber: "Lección 17",
    section: "文型 (Patrón)",
    segments: [
          {
                "text": "日曜日",
                "furigana": "にちようび"
          },
          {
                "text": "は"
          },
          {
                "text": "早く",
                "furigana": "はやく"
          },
          {
                "text": "起きなくても",
                "furigana": "おきなくても"
          },
          {
                "text": "いいです。"
          }
    ],
    japaneseText: "日曜日は早く起きなくてもいいです。",
    romaji: "Nichiyoubi wa hayaku okinakutemo ii desu.",
    spanish: "Los domingos no hace falta levantarse temprano.",
    targetKanji: ["日","曜","早","起"],
  },
  {
    id: "s-l17-e1",
    lessonId: "l17",
    lessonNumber: "Lección 17",
    section: "例文 (Ejemplo)",
    segments: [
          {
                "text": "そこに"
          },
          {
                "text": "車",
                "furigana": "くるま"
          },
          {
                "text": "を"
          },
          {
                "text": "止めないで",
                "furigana": "とめないで"
          },
          {
                "text": "ください。……すみません。"
          }
    ],
    japaneseText: "そこに車を止めないでください。……すみません。",
    romaji: "Soko ni kuruma o tomenaide kudasai. ...Sumimasen.",
    spanish: "No aparque el coche ahí, por favor. ...Disculpe.",
    targetKanji: ["車","止"],
  },
  {
    id: "s-l17-e2",
    lessonId: "l17",
    lessonNumber: "Lección 17",
    section: "例文 (Ejemplo)",
    segments: [
          {
                "text": "もう12"
          },
          {
                "text": "時",
                "furigana": "じ"
          },
          {
                "text": "ですよ。"
          },
          {
                "text": "寝ましょう",
                "furigana": "ねましょう"
          },
          {
                "text": "。……はい、おやすみなさい。"
          }
    ],
    japaneseText: "もう12時ですよ。寝ましょう。……はい、おやすみなさい。",
    romaji: "Mou juuni-ji desu yo. Nemashou. ...Hai, oyasuminasai.",
    spanish: "Ya son las doce. Vamos a dormir. ...Sí, buenas noches.",
    targetKanji: ["時"],
  },
  {
    id: "s-l17-e3",
    lessonId: "l17",
    lessonNumber: "Lección 17",
    section: "例文 (Ejemplo)",
    segments: [
          {
                "text": "薬",
                "furigana": "くすり"
          },
          {
                "text": "を"
          },
          {
                "text": "飲まなければ",
                "furigana": "のまなければ"
          },
          {
                "text": "なりませんか。……はい、"
          },
          {
                "text": "熱",
                "furigana": "ねつ"
          },
          {
                "text": "がありますから、"
          },
          {
                "text": "薬",
                "furigana": "くすり"
          },
          {
                "text": "を"
          },
          {
                "text": "飲んで",
                "furigana": "のんで"
          },
          {
                "text": "ください。"
          }
    ],
    japaneseText: "薬を飲まなければなりませんか。……はい、熱がありますから、薬を飲んでください。",
    romaji: "Kusuri o nomanakereba narimasen ka. ...Hai, netsu ga arimasu kara, kusuri o nonde kudasai.",
    spanish: "¿Tengo que tomar la medicina? ...Sí, como tiene fiebre, tome la medicina, por favor.",
    targetKanji: ["飲"],
  },
  {
    id: "s-l17-e4",
    lessonId: "l17",
    lessonNumber: "Lección 17",
    section: "例文 (Ejemplo)",
    segments: [
          {
                "text": "明日",
                "furigana": "あした"
          },
          {
                "text": "も"
          },
          {
                "text": "来なければ",
                "furigana": "こなければ"
          },
          {
                "text": "なりませんか。……いいえ、"
          },
          {
                "text": "来なくても",
                "furigana": "こなくても"
          },
          {
                "text": "いいですよ。"
          }
    ],
    japaneseText: "明日も来なければなりませんか。……いいえ、来なくてもいいですよ。",
    romaji: "Ashita mo konakereba narimasen ka. ...Iie, konakutemo ii desu yo.",
    spanish: "¿Tengo que venir mañana también? ...No, no es necesario que venga.",
    targetKanji: ["明","日","来"],
  },
  {
    id: "s-l17-e5",
    lessonId: "l17",
    lessonNumber: "Lección 17",
    section: "例文 (Ejemplo)",
    segments: [
          {
                "text": "レポートはいつまでに"
          },
          {
                "text": "送らなければ",
                "furigana": "おくらなければ"
          },
          {
                "text": "なりませんか。……"
          },
          {
                "text": "金曜日",
                "furigana": "きんようび"
          },
          {
                "text": "までに"
          },
          {
                "text": "送って",
                "furigana": "おくって"
          },
          {
                "text": "ください。"
          }
    ],
    japaneseText: "レポートはいつまでに送らなければなりませんか。……金曜日までに送ってください。",
    romaji: "Repooto wa itsu made ni okuranakereba narimasen ka. ...Kin'youbi made ni okutte kudasai.",
    spanish: "¿Para cuándo tengo que enviar el informe? ...Envíelo antes del viernes, por favor.",
    targetKanji: ["送","金","曜","日"],
  },
  {
    id: "s-l17-e6",
    lessonId: "l17",
    lessonNumber: "Lección 17",
    section: "例文 (Ejemplo)",
    segments: [
          {
                "text": "心配",
                "furigana": "しんぱい"
          },
          {
                "text": "しないでください。"
          },
          {
                "text": "問題",
                "furigana": "もんだい"
          },
          {
                "text": "の"
          },
          {
                "text": "答え",
                "furigana": "こたえ"
          },
          {
                "text": "は簡単です。"
          }
    ],
    japaneseText: "心配しないでください。問題の答えは簡単です。",
    romaji: "Shinpai shinaide kudasai. Mondai no kotae wa kantan desu.",
    spanish: "No se preocupe, por favor. La respuesta al problema es sencilla.",
    targetKanji: ["心","配","問","答"],
  },
  // --- Lección 18 (文型 & 例文) ---
  {
    id: "s-l18-b1",
    lessonId: "l18",
    lessonNumber: "Lección 18",
    section: "文型 (Patrón)",
    segments: [
          {
                "text": "ミラーさんは"
          },
          {
                "text": "漢字",
                "furigana": "かんじ"
          },
          {
                "text": "を"
          },
          {
                "text": "読む",
                "furigana": "よむ"
          },
          {
                "text": "ことが"
          },
          {
                "text": "できます。"
          }
    ],
    japaneseText: "ミラーさんは漢字を読むことができます。",
    romaji: "Miraa-san wa kanji o yomu koto ga dekimasu.",
    spanish: "El Sr. Miller sabe / puede leer kanji.",
    targetKanji: ["漢","字","読"],
  },
  {
    id: "s-l18-b2",
    lessonId: "l18",
    lessonNumber: "Lección 18",
    section: "文型 (Patrón)",
    segments: [
          {
                "text": "わたしの"
          },
          {
                "text": "趣味",
                "furigana": "しゅみ"
          },
          {
                "text": "は"
          },
          {
                "text": "映画",
                "furigana": "えいが"
          },
          {
                "text": "を"
          },
          {
                "text": "見る",
                "furigana": "みる"
          },
          {
                "text": "ことです。"
          }
    ],
    japaneseText: "わたしの趣味は映画を見ることです。",
    romaji: "Watashi no shumi wa eiga o miru koto desu.",
    spanish: "Mi afición es ver películas.",
    targetKanji: ["映","画","見"],
  },
  {
    id: "s-l18-b3",
    lessonId: "l18",
    lessonNumber: "Lección 18",
    section: "文型 (Patrón)",
    segments: [
          {
                "text": "寝る",
                "furigana": "ねる"
          },
          {
                "text": "まえに、"
          },
          {
                "text": "日記",
                "furigana": "にっき"
          },
          {
                "text": "を"
          },
          {
                "text": "書きます",
                "furigana": "かきます"
          },
          {
                "text": "。"
          }
    ],
    japaneseText: "寝るまえに、日記を書きます。",
    romaji: "Neru mae ni, nikki o kakimasu.",
    spanish: "Antes de dormir, escribo mi diario.",
    targetKanji: ["日","記","書"],
  },
  {
    id: "s-l18-e1",
    lessonId: "l18",
    lessonNumber: "Lección 18",
    section: "例文 (Ejemplo)",
    segments: [
          {
                "text": "カードでお"
          },
          {
                "text": "金",
                "furigana": "かね"
          },
          {
                "text": "を"
          },
          {
                "text": "払う",
                "furigana": "はらう"
          },
          {
                "text": "ことができますか。……はい、できますよ。"
          }
    ],
    japaneseText: "カードでお金を払うことができますか。……はい、できますよ。",
    romaji: "Kaado de okane o harau koto ga dekimasu ka. ...Hai, dekimasu yo.",
    spanish: "¿Se puede pagar con tarjeta? ...Sí, por supuesto.",
    targetKanji: ["金"],
  },
  {
    id: "s-l18-e2",
    lessonId: "l18",
    lessonNumber: "Lección 18",
    section: "例文 (Ejemplo)",
    segments: [
          {
                "text": "何",
                "furigana": "なん"
          },
          {
                "text": "メートルぐらい"
          },
          {
                "text": "泳ぐ",
                "furigana": "およぐ"
          },
          {
                "text": "ことができますか。……100メートルぐらい"
          },
          {
                "text": "泳ぐ",
                "furigana": "およぐ"
          },
          {
                "text": "ことができます。"
          }
    ],
    japaneseText: "何メートルぐらい泳ぐことができますか。……100メートルぐらい泳ぐことができます。",
    romaji: "Nan meetoru gurai oyogu koto ga dekimasu ka. ...Hyaku meetoru gurai oyogu koto ga dekimasu.",
    spanish: "¿Cuántos metros aproximadamente puedes nadar? ...Puedo nadar unos 100 metros.",
    targetKanji: ["何"],
  },
  {
    id: "s-l18-e3",
    lessonId: "l18",
    lessonNumber: "Lección 18",
    section: "例文 (Ejemplo)",
    segments: [
          {
                "text": "ミラーさんの"
          },
          {
                "text": "趣味",
                "furigana": "しゅみ"
          },
          {
                "text": "は"
          },
          {
                "text": "何",
                "furigana": "なん"
          },
          {
                "text": "ですか。……"
          },
          {
                "text": "古い",
                "furigana": "ふるい"
          },
          {
                "text": "レコードを"
          },
          {
                "text": "集める",
                "furigana": "あつめる"
          },
          {
                "text": "ことです。"
          }
    ],
    japaneseText: "ミラーさんの趣味は何ですか。……古いレコードを集めることです。",
    romaji: "Miraa-san no shumi wa nan desu ka. ...Furui rekoodo o atsumeru koto desu.",
    spanish: "¿Cuál es la afición del Sr. Miller? ...Coleccionar discos antiguos.",
    targetKanji: ["何","古"],
  },
  {
    id: "s-l18-e4",
    lessonId: "l18",
    lessonNumber: "Lección 18",
    section: "例文 (Ejemplo)",
    segments: [
          {
                "text": "日本",
                "furigana": "にほん"
          },
          {
                "text": "の"
          },
          {
                "text": "子供",
                "furigana": "こども"
          },
          {
                "text": "は"
          },
          {
                "text": "学校",
                "furigana": "がっこう"
          },
          {
                "text": "に"
          },
          {
                "text": "入る",
                "furigana": "はいる"
          },
          {
                "text": "まえに、ひらがなを"
          },
          {
                "text": "習わなければ",
                "furigana": "ならわなければ"
          },
          {
                "text": "なりませんか。……いいえ、"
          },
          {
                "text": "習わなくても",
                "furigana": "ならわなくても"
          },
          {
                "text": "いいです。"
          }
    ],
    japaneseText: "日本の子供は学校に入るまえに、ひらがなを習わなければなりませんか。……いいえ、習わなくてもいいです。",
    romaji: "Nihon no kodomo wa gakkou ni hairu mae ni, hiragana o narawanakereba narimasen ka. ...Iie, narawanakutemo ii desu.",
    spanish: "¿Tienen los niños japoneses que aprender hiragana antes de entrar en la escuela? ...No, no es obligatorio.",
    targetKanji: ["日","本","子","供","学","校","入","習"],
  },
  {
    id: "s-l18-e5",
    lessonId: "l18",
    lessonNumber: "Lección 18",
    section: "例文 (Ejemplo)",
    segments: [
          {
                "text": "いつ"
          },
          {
                "text": "薬",
                "furigana": "くすり"
          },
          {
                "text": "を"
          },
          {
                "text": "飲みます",
                "furigana": "のみます"
          },
          {
                "text": "か。……ご"
          },
          {
                "text": "飯",
                "furigana": "はん"
          },
          {
                "text": "を"
          },
          {
                "text": "食べる",
                "furigana": "たべる"
          },
          {
                "text": "まえに、"
          },
          {
                "text": "飲みます",
                "furigana": "のみます"
          },
          {
                "text": "。"
          }
    ],
    japaneseText: "いつ薬を飲みますか。……ご飯を食べるまえに、飲みます。",
    romaji: "Itsu kusuri o nomimasu ka. ...Gohan o taberu mae ni, nomimasu.",
    spanish: "¿Cuándo se toma la medicina? ...Se toma antes de comer.",
    targetKanji: ["飲","飯","食"],
  },
  {
    id: "s-l18-e6",
    lessonId: "l18",
    lessonNumber: "Lección 18",
    section: "例文 (Ejemplo)",
    segments: [
          {
                "text": "料理",
                "furigana": "りょうり"
          },
          {
                "text": "を"
          },
          {
                "text": "作る",
                "furigana": "つくる"
          },
          {
                "text": "ことが"
          },
          {
                "text": "できますか。"
          }
    ],
    japaneseText: "料理を作ることができますか。",
    romaji: "Ryouri o tsukuru koto ga dekimasu ka.",
    spanish: "¿Sabes cocinar / preparar platos?",
    targetKanji: ["料","理","作"],
  },
  // --- Lección 19 (文型 & 例文) ---
  {
    id: "s-l19-b1",
    lessonId: "l19",
    lessonNumber: "Lección 19",
    section: "文型 (Patrón)",
    segments: [
          {
                "text": "相撲",
                "furigana": "すもう"
          },
          {
                "text": "を"
          },
          {
                "text": "見た",
                "furigana": "みた"
          },
          {
                "text": "ことが"
          },
          {
                "text": "あります。"
          }
    ],
    japaneseText: "相撲を見たことがあります。",
    romaji: "Sumou o mita koto ga arimasu.",
    spanish: "He visto sumo en alguna ocasión.",
    targetKanji: ["見"],
  },
  {
    id: "s-l19-b2",
    lessonId: "l19",
    lessonNumber: "Lección 19",
    section: "文型 (Patrón)",
    segments: [
          {
                "text": "休み",
                "furigana": "やすみ"
          },
          {
                "text": "の"
          },
          {
                "text": "日",
                "furigana": "ひ"
          },
          {
                "text": "はテニスをしたり、"
          },
          {
                "text": "散歩",
                "furigana": "さんぽ"
          },
          {
                "text": "に"
          },
          {
                "text": "行ったり",
                "furigana": "いったり"
          },
          {
                "text": "します。"
          }
    ],
    japaneseText: "休みの日はテニスをしたり、散歩に行ったりします。",
    romaji: "Yasumi no hi wa tenisu o shitari, sanpo ni ittari shimasu.",
    spanish: "Los días libres juego al tenis, voy a pasear, etc.",
    targetKanji: ["休","日","散","歩","行"],
  },
  {
    id: "s-l19-b3",
    lessonId: "l19",
    lessonNumber: "Lección 19",
    section: "文型 (Patrón)",
    segments: [
          {
                "text": "これからだんだん"
          },
          {
                "text": "暑く",
                "furigana": "あつく"
          },
          {
                "text": "なります。"
          }
    ],
    japaneseText: "これからだんだん暑くなります。",
    romaji: "Korekara dandan atsuku narimasu.",
    spanish: "A partir de ahora irá haciendo calor poco a poco.",
    targetKanji: [],
  },
  {
    id: "s-l19-b4",
    lessonId: "l19",
    lessonNumber: "Lección 19",
    section: "文型 (Patrón)",
    segments: [
          {
                "text": "富士山",
                "furigana": "ふじさん"
          },
          {
                "text": "に"
          },
          {
                "text": "登った",
                "furigana": "のぼった"
          },
          {
                "text": "ことが"
          },
          {
                "text": "あります。"
          }
    ],
    japaneseText: "富士山に登ったことがあります。",
    romaji: "Fujisan ni nobotta koto ga arimasu.",
    spanish: "He subido al monte Fuji.",
    targetKanji: ["富","士","山","登"],
  },
  {
    id: "s-l19-e1",
    lessonId: "l19",
    lessonNumber: "Lección 19",
    section: "例文 (Ejemplo)",
    segments: [
          {
                "text": "日本",
                "furigana": "にほん"
          },
          {
                "text": "でお"
          },
          {
                "text": "寺",
                "furigana": "てら"
          },
          {
                "text": "を"
          },
          {
                "text": "見た",
                "furigana": "みた"
          },
          {
                "text": "ことがありますか。……ええ、"
          },
          {
                "text": "京都",
                "furigana": "きょうと"
          },
          {
                "text": "でたくさん"
          },
          {
                "text": "見ました",
                "furigana": "みました"
          },
          {
                "text": "。"
          }
    ],
    japaneseText: "日本でお寺を見たことがありますか。……ええ、京都でたくさん見ました。",
    romaji: "Nihon de otera o mita koto ga arimasu ka. ...Ee, Kyouto de takusan mimashita.",
    spanish: "¿Has visto templos en Japón? ...Sí, vi muchos en Kioto.",
    targetKanji: ["日","本","寺","見","京","都"],
  },
  {
    id: "s-l19-e2",
    lessonId: "l19",
    lessonNumber: "Lección 19",
    section: "例文 (Ejemplo)",
    segments: [
          {
                "text": "馬",
                "furigana": "うま"
          },
          {
                "text": "に"
          },
          {
                "text": "乗った",
                "furigana": "のった"
          },
          {
                "text": "ことがありますか。……いいえ、"
          },
          {
                "text": "一度",
                "furigana": "いちど"
          },
          {
                "text": "もありません。ぜひ"
          },
          {
                "text": "乗りたい",
                "furigana": "のりたい"
          },
          {
                "text": "です。"
          }
    ],
    japaneseText: "馬に乗ったことがありますか。……いいえ、一度もありません。ぜひ乗りたいです。",
    romaji: "Uma ni notta koto ga arimasu ka. ...Iie, ichido mo arimasen. Zehi noritai desu.",
    spanish: "¿Has montado a caballo alguna vez? ...No, ni una sola vez. Me encantaría montar.",
    targetKanji: ["一","度"],
  },
  {
    id: "s-l19-e3",
    lessonId: "l19",
    lessonNumber: "Lección 19",
    section: "例文 (Ejemplo)",
    segments: [
          {
                "text": "休み",
                "furigana": "やすみ"
          },
          {
                "text": "の"
          },
          {
                "text": "日",
                "furigana": "ひ"
          },
          {
                "text": "は"
          },
          {
                "text": "何",
                "furigana": "なに"
          },
          {
                "text": "をしますか。……"
          },
          {
                "text": "掃除",
                "furigana": "そうじ"
          },
          {
                "text": "をしたり、"
          },
          {
                "text": "洗濯",
                "furigana": "せんたく"
          },
          {
                "text": "をしたりします。"
          }
    ],
    japaneseText: "休みの日は何をしますか。……掃除をしたり、洗濯をしたりします。",
    romaji: "Yasumi no hi wa nani o shimasu ka. ...Souji o shitari, sentaku o shitari shimasu.",
    spanish: "¿Qué haces los días libres? ...Limpio la casa, lavo la ropa, etc.",
    targetKanji: ["休","日","何"],
  },
  {
    id: "s-l19-e4",
    lessonId: "l19",
    lessonNumber: "Lección 19",
    section: "例文 (Ejemplo)",
    segments: [
          {
                "text": "これから"
          },
          {
                "text": "何",
                "furigana": "なに"
          },
          {
                "text": "をしたいですか。……"
          },
          {
                "text": "日本語",
                "furigana": "にほんご"
          },
          {
                "text": "が"
          },
          {
                "text": "上手",
                "furigana": "じょうず"
          },
          {
                "text": "になりたいです。"
          }
    ],
    japaneseText: "これから何をしたいですか。……日本語が上手になりたいです。",
    romaji: "Korekara nani o shitai desu ka. ...Nihongo ga jouzu ni naritai desu.",
    spanish: "¿Qué te gustaría hacer a partir de ahora? ...Me gustaría ser bueno / dominar el japonés.",
    targetKanji: ["何","日","本","語","上","手"],
  },
  {
    id: "s-l19-e5",
    lessonId: "l19",
    lessonNumber: "Lección 19",
    section: "例文 (Ejemplo)",
    segments: [
          {
                "text": "からだの"
          },
          {
                "text": "調子",
                "furigana": "ちょうし"
          },
          {
                "text": "はどうですか。……おかげさまで、よくなりました。"
          }
    ],
    japaneseText: "からだの調子はどうですか。……おかげさまで、よくなりました。",
    romaji: "Karada no choushi wa dou desu ka. ...Okagesama de, yoku narimashita.",
    spanish: "¿Cómo te encuentras de salud / físico? ...Gracias a Dios / Por suerte, ya me he recuperado.",
    targetKanji: ["調","子"],
  },
  {
    id: "s-l19-e6",
    lessonId: "l19",
    lessonNumber: "Lección 19",
    section: "例文 (Ejemplo)",
    segments: [
          {
                "text": "休みの日は"
          },
          {
                "text": "音楽",
                "furigana": "おんがく"
          },
          {
                "text": "を"
          },
          {
                "text": "聞いたり、",
                "furigana": "きいたり、"
          },
          {
                "text": "歌",
                "furigana": "うた"
          },
          {
                "text": "を"
          },
          {
                "text": "歌ったり",
                "furigana": "うたったり"
          },
          {
                "text": "します。"
          }
    ],
    japaneseText: "休みの日は音楽を聞いたり、歌を歌ったりします。",
    romaji: "Yasumi no hi wa ongaku o kiitari, uta o utattari shimasu.",
    spanish: "Los días festivos escucho música, canto canciones, etc.",
    targetKanji: ["休","日","音","楽","聞","歌"],
  },
  // --- Lección 20 (文型 & 例文) ---
  {
    id: "s-l20-b1",
    lessonId: "l20",
    lessonNumber: "Lección 20",
    section: "文型 (Patrón)",
    segments: [
          {
                "text": "サントスさんはパーティーに"
          },
          {
                "text": "来なかった",
                "furigana": "こなかった"
          },
          {
                "text": "。"
          }
    ],
    japaneseText: "サントスさんはパーティーに来なかった。",
    romaji: "Santosu-san wa paatii ni konakatta.",
    spanish: "Santos no vino a la fiesta.",
    targetKanji: ["来"],
  },
  {
    id: "s-l20-b2",
    lessonId: "l20",
    lessonNumber: "Lección 20",
    section: "文型 (Patrón)",
    segments: [
          {
                "text": "東京",
                "furigana": "とうきょう"
          },
          {
                "text": "は"
          },
          {
                "text": "人",
                "furigana": "ひと"
          },
          {
                "text": "が"
          },
          {
                "text": "多い",
                "furigana": "おおい"
          },
          {
                "text": "。"
          }
    ],
    japaneseText: "東京は人が多い。",
    romaji: "Toukyou wa hito ga ooi.",
    spanish: "En Tokio hay mucha gente.",
    targetKanji: ["東","京","人","多"],
  },
  {
    id: "s-l20-b3",
    lessonId: "l20",
    lessonNumber: "Lección 20",
    section: "文型 (Patrón)",
    segments: [
          {
                "text": "沖縄",
                "furigana": "おきなわ"
          },
          {
                "text": "の"
          },
          {
                "text": "海",
                "furigana": "うみ"
          },
          {
                "text": "はきれいだった。"
          }
    ],
    japaneseText: "沖縄の海はきれいだった。",
    romaji: "Okinawa no umi wa kirei datta.",
    spanish: "El mar de Okinawa era hermoso / cristalino.",
    targetKanji: ["海"],
  },
  {
    id: "s-l20-b4",
    lessonId: "l20",
    lessonNumber: "Lección 20",
    section: "文型 (Patrón)",
    segments: [
          {
                "text": "きょうは"
          },
          {
                "text": "僕",
                "furigana": "ぼく"
          },
          {
                "text": "の"
          },
          {
                "text": "誕生日",
                "furigana": "たんじょうび"
          },
          {
                "text": "だ。"
          }
    ],
    japaneseText: "きょうは僕の誕生日だ。",
    romaji: "Kyou wa boku no tanjoubi da.",
    spanish: "Hoy es mi cumpleaños.",
    targetKanji: ["誕","生","日"],
  },
  {
    id: "s-l20-e1",
    lessonId: "l20",
    lessonNumber: "Lección 20",
    section: "例文 (Ejemplo)",
    segments: [
          {
                "text": "サウナへ"
          },
          {
                "text": "行った",
                "furigana": "いった"
          },
          {
                "text": "ことある？……ううん、ない。"
          }
    ],
    japaneseText: "サウナへ行ったことある？……ううん、ない。",
    romaji: "Sauna e itta koto aru? ...Uun, nai.",
    spanish: "¿Has ido alguna vez a la sauna? ...No, nunca.",
    targetKanji: ["行"],
  },
  {
    id: "s-l20-e2",
    lessonId: "l20",
    lessonNumber: "Lección 20",
    section: "例文 (Ejemplo)",
    segments: [
          {
                "text": "その"
          },
          {
                "text": "辞書",
                "furigana": "じしょ"
          },
          {
                "text": "、いい？……うん、すごく"
          },
          {
                "text": "便利",
                "furigana": "べんり"
          },
          {
                "text": "だよ。"
          }
    ],
    japaneseText: "その辞書、いい？……うん、すごく便利だよ。",
    romaji: "Sono jisho, ii? ...Un, sugoku benri da yo.",
    spanish: "Ese diccionario, ¿está bien? ...Sí, es súper práctico.",
    targetKanji: ["辞","書","便","利"],
  },
  {
    id: "s-l20-e3",
    lessonId: "l20",
    lessonNumber: "Lección 20",
    section: "例文 (Ejemplo)",
    segments: [
          {
                "text": "今",
                "furigana": "いま"
          },
          {
                "text": "暇",
                "furigana": "ひま"
          },
          {
                "text": "？……うん、"
          },
          {
                "text": "暇",
                "furigana": "ひま"
          },
          {
                "text": "だよ。"
          },
          {
                "text": "何",
                "furigana": "なに"
          },
          {
                "text": "か"
          },
          {
                "text": "用事",
                "furigana": "ようじ"
          },
          {
                "text": "？"
          }
    ],
    japaneseText: "今暇？……うん、暇だよ。何か用事？",
    romaji: "Ima hima? ...Un, hima da yo. Nanika youji?",
    spanish: "¿Estás libre ahora? ...Sí, estoy libre. ¿Pasa algo / necesitas algo?",
    targetKanji: ["今","何","用","事"],
  },
  {
    id: "s-l20-e4",
    lessonId: "l20",
    lessonNumber: "Lección 20",
    section: "例文 (Ejemplo)",
    segments: [
          {
                "text": "明日",
                "furigana": "あした"
          },
          {
                "text": "みんなで"
          },
          {
                "text": "京都",
                "furigana": "きょうと"
          },
          {
                "text": "へ"
          },
          {
                "text": "行かない",
                "furigana": "いかない"
          },
          {
                "text": "？……いいね。"
          },
          {
                "text": "何",
                "furigana": "なに"
          },
          {
                "text": "で"
          },
          {
                "text": "行く",
                "furigana": "いく"
          },
          {
                "text": "？"
          }
    ],
    japaneseText: "明日みんなで京都へ行かない？……いいね。何で行く？",
    romaji: "Ashita minna de Kyouto e ikanai? ...Ii ne. Nande iku?",
    spanish: "¿Vamos todos a Kioto mañana? ...¡Buena idea! ¿En qué vamos?",
    targetKanji: ["明","日","京","都","行","何"],
  },
  {
    id: "s-l20-e5",
    lessonId: "l20",
    lessonNumber: "Lección 20",
    section: "例文 (Ejemplo)",
    segments: [
          {
                "text": "教室で",
                "furigana": "きょうしつで"
          },
          {
                "text": "日本語を",
                "furigana": "にほんごを"
          },
          {
                "text": "勉強する？",
                "furigana": "べんきょうする？"
          },
          {
                "text": "うん、"
          },
          {
                "text": "勉強する。",
                "furigana": "べんきょうする。"
          }
    ],
    japaneseText: "教室で日本語を勉強する？ うん、勉強する。",
    romaji: "Kyoushitsu de Nihongo o benkyou suru? Un, benkyou suru.",
    spanish: "¿Estudias japonés en el aula? Sí, estudio.",
    targetKanji: ["教","室","日","本","語","勉","強"],
  },
  // --- Lección 21 (文型 & 例文) ---
  {
    id: "s-l21-b1",
    lessonId: "l21",
    lessonNumber: "Lección 21",
    section: "文型 (Patrón)",
    segments: [
          {
                "text": "わたしはあした"
          },
          {
                "text": "雨",
                "furigana": "あめ"
          },
          {
                "text": "が"
          },
          {
                "text": "降る",
                "furigana": "ふる"
          },
          {
                "text": "と"
          },
          {
                "text": "思います",
                "furigana": "おもいます"
          },
          {
                "text": "。"
          }
    ],
    japaneseText: "わたしはあした雨が降ると思います。",
    romaji: "Watashi wa ashita ame ga furu to omoimasu.",
    spanish: "Yo creo que mañana lloverá.",
    targetKanji: ["雨","降","思"],
  },
  {
    id: "s-l21-b2",
    lessonId: "l21",
    lessonNumber: "Lección 21",
    section: "文型 (Patrón)",
    segments: [
          {
                "text": "わたしは"
          },
          {
                "text": "父",
                "furigana": "ちち"
          },
          {
                "text": "に"
          },
          {
                "text": "留学したい",
                "furigana": "りゅうがくしたい"
          },
          {
                "text": "と"
          },
          {
                "text": "言いました",
                "furigana": "いいました"
          },
          {
                "text": "。"
          }
    ],
    japaneseText: "わたしは父に留学したいと言いました。",
    romaji: "Watashi wa chichi ni ryuugaku shitai to iimashita.",
    spanish: "Le dije a mi padre que quiero estudiar en el extranjero.",
    targetKanji: ["父","留","学","言"],
  },
  {
    id: "s-l21-b3",
    lessonId: "l21",
    lessonNumber: "Lección 21",
    section: "文型 (Patrón)",
    segments: [
          {
                "text": "疲れた",
                "furigana": "つかれた"
          },
          {
                "text": "でしょう？"
          }
    ],
    japaneseText: "疲れたでしょう？",
    romaji: "Tsukareta deshou?",
    spanish: "¿Estarás cansado, verdad?",
    targetKanji: [],
  },
  {
    id: "s-l21-b4",
    lessonId: "l21",
    lessonNumber: "Lección 21",
    section: "文型 (Patrón)",
    segments: [
          {
                "text": "首相は"
          },
          {
                "text": "来月",
                "furigana": "らいげつ"
          },
          {
                "text": "アメリカへ"
          },
          {
                "text": "行く",
                "furigana": "いく"
          },
          {
                "text": "と"
          },
          {
                "text": "言いました。",
                "furigana": "いいました。"
          }
    ],
    japaneseText: "首相は来月アメリカへ行くと言いました。",
    romaji: "Shushou wa raigetsu Amerika e iku to iimashita.",
    spanish: "El primer ministro dijo que irá a Estados Unidos el próximo mes.",
    targetKanji: ["来","月","行","言"],
  },
  {
    id: "s-l21-e1",
    lessonId: "l21",
    lessonNumber: "Lección 21",
    section: "例文 (Ejemplo)",
    segments: [
          {
                "text": "日本",
                "furigana": "にほん"
          },
          {
                "text": "は"
          },
          {
                "text": "物価",
                "furigana": "ぶっか"
          },
          {
                "text": "が"
          },
          {
                "text": "高い",
                "furigana": "たかい"
          },
          {
                "text": "と"
          },
          {
                "text": "思います",
                "furigana": "おもいます"
          },
          {
                "text": "か。……はい、"
          },
          {
                "text": "高い",
                "furigana": "たかい"
          },
          {
                "text": "と"
          },
          {
                "text": "思います",
                "furigana": "おもいます"
          },
          {
                "text": "。"
          }
    ],
    japaneseText: "日本は物価が高いと思いますか。……はい、高いと思います。",
    romaji: "Nihon wa bukka ga takai to omoimasu ka. ...Hai, takai to omoimasu.",
    spanish: "¿Crees que los precios son caros en Japón? ...Sí, creo que son caros.",
    targetKanji: ["日","本","物","高","思"],
  },
  {
    id: "s-l21-e2",
    lessonId: "l21",
    lessonNumber: "Lección 21",
    section: "例文 (Ejemplo)",
    segments: [
          {
                "text": "新しい",
                "furigana": "あたらしい"
          },
          {
                "text": "空港",
                "furigana": "くうこう"
          },
          {
                "text": "についてどう"
          },
          {
                "text": "思います",
                "furigana": "おもいます"
          },
          {
                "text": "か。……きれいですが、ちょっと"
          },
          {
                "text": "交通",
                "furigana": "こうつう"
          },
          {
                "text": "が"
          },
          {
                "text": "不便",
                "furigana": "ふべん"
          },
          {
                "text": "だと"
          },
          {
                "text": "思います",
                "furigana": "おもいます"
          },
          {
                "text": "。"
          }
    ],
    japaneseText: "新しい空港についてどう思いますか。……きれいですが、ちょっと交通が不便だと思います。",
    romaji: "Atarashii kuukou ni tsuite dou omoimasu ka. ...Kirei desu ga, chotto koutsuu ga fuben da to omoimasu.",
    spanish: "¿Qué opinas del nuevo aeropuerto? ...Es bonito, pero me parece que el transporte es un poco incómodo.",
    targetKanji: ["新","空","港","思","交","通","不","便"],
  },
  {
    id: "s-l21-e3",
    lessonId: "l21",
    lessonNumber: "Lección 21",
    section: "例文 (Ejemplo)",
    segments: [
          {
                "text": "寝る",
                "furigana": "ねる"
          },
          {
                "text": "まえに、「おやすみなさい」と"
          },
          {
                "text": "言います",
                "furigana": "いいま​す"
          },
          {
                "text": "。"
          }
    ],
    japaneseText: "寝るまえに、「おやすみなさい」と言います。",
    romaji: "Neru mae ni, \"Oyasuminasai\" to iimasu.",
    spanish: "Antes de dormir, se dice \"buenas noches\".",
    targetKanji: ["言"],
  },
  {
    id: "s-l21-e4",
    lessonId: "l21",
    lessonNumber: "Lección 21",
    section: "例文 (Ejemplo)",
    segments: [
          {
                "text": "ミラーさんはどこですか。……もううちへ"
          },
          {
                "text": "帰る",
                "furigana": "かえる"
          },
          {
                "text": "と"
          },
          {
                "text": "言いました",
                "furigana": "いいました"
          },
          {
                "text": "。"
          }
    ],
    japaneseText: "ミラーさんはどこですか。……もううちへ帰ると言いました。",
    romaji: "Miraa-san wa doko desu ka. ...Mou uchi e kaeru to iimashita.",
    spanish: "¿Dónde está el Sr. Miller? ...Dijo que ya se marchaba a casa.",
    targetKanji: ["帰","言"],
  },
  {
    id: "s-l21-e5",
    lessonId: "l21",
    lessonNumber: "Lección 21",
    section: "例文 (Ejemplo)",
    segments: [
          {
                "text": "明日",
                "furigana": "あした"
          },
          {
                "text": "パーティーに"
          },
          {
                "text": "行く",
                "furigana": "いく"
          },
          {
                "text": "でしょう？……ええ、"
          },
          {
                "text": "行きます",
                "furigana": "いきます"
          },
          {
                "text": "よ。"
          }
    ],
    japaneseText: "明日パーティーに行くでしょう？……ええ、行きますよ。",
    romaji: "Ashita paatii ni iku deshou? ...Ee, ikimasu yo.",
    spanish: "Irás a la fiesta de mañana, ¿a que sí? ...Sí, iré por supuesto.",
    targetKanji: ["明","日","行"],
  },
  // --- Lección 22 (文型 & 例文) ---
  {
    id: "s-l22-b1",
    lessonId: "l22",
    lessonNumber: "Lección 22",
    section: "文型 (Patrón)",
    segments: [
          {
                "text": "これはミラーさんが"
          },
          {
                "text": "作った",
                "furigana": "つくった"
          },
          {
                "text": "ケーキです。"
          }
    ],
    japaneseText: "これはミラーさんが作ったケーキです。",
    romaji: "Kore wa Miraa-san ga tsukutta keeki desu.",
    spanish: "Este es el pastel que hizo el Sr. Miller.",
    targetKanji: ["作"],
  },
  {
    id: "s-l22-b2",
    lessonId: "l22",
    lessonNumber: "Lección 22",
    section: "文型 (Patrón)",
    segments: [
          {
                "text": "あそこにいる"
          },
          {
                "text": "人",
                "furigana": "ひと"
          },
          {
                "text": "はミラーさんです。"
          }
    ],
    japaneseText: "あそこにいる人はミラーさんです。",
    romaji: "Asoko ni iru hito wa Miraa-san desu.",
    spanish: "La persona que está allí es el Sr. Miller.",
    targetKanji: ["人"],
  },
  {
    id: "s-l22-b3",
    lessonId: "l22",
    lessonNumber: "Lección 22",
    section: "文型 (Patrón)",
    segments: [
          {
                "text": "きのう"
          },
          {
                "text": "習った",
                "furigana": "ならった"
          },
          {
                "text": "ことばを"
          },
          {
                "text": "忘れました",
                "furigana": "わすれました"
          },
          {
                "text": "。"
          }
    ],
    japaneseText: "きのう習ったことばを忘れました。",
    romaji: "Kinou naratta kotoba o wasuremashita.",
    spanish: "Olvidé las palabras que aprendí ayer.",
    targetKanji: ["習"],
  },
  {
    id: "s-l22-b4",
    lessonId: "l22",
    lessonNumber: "Lección 22",
    section: "文型 (Patrón)",
    segments: [
          {
                "text": "買い物",
                "furigana": "かいもの"
          },
          {
                "text": "に"
          },
          {
                "text": "行く",
                "furigana": "いく"
          },
          {
                "text": "時間",
                "furigana": "じかん"
          },
          {
                "text": "がありません。"
          }
    ],
    japaneseText: "買い物に行く時間がありません。",
    romaji: "Kaimono ni iku jikan ga arimasen.",
    spanish: "No tengo tiempo para ir de compras.",
    targetKanji: ["買","物","行","時","間"],
  },
  {
    id: "s-l22-e1",
    lessonId: "l22",
    lessonNumber: "Lección 22",
    section: "例文 (Ejemplo)",
    segments: [
          {
                "text": "これはどこで"
          },
          {
                "text": "撮った",
                "furigana": "とった"
          },
          {
                "text": "写真",
                "furigana": "しゃしん"
          },
          {
                "text": "ですか。……"
          },
          {
                "text": "京都",
                "furigana": "きょうと"
          },
          {
                "text": "で"
          },
          {
                "text": "撮った",
                "furigana": "とった"
          },
          {
                "text": "写真",
                "furigana": "しゃしん"
          },
          {
                "text": "です。"
          }
    ],
    japaneseText: "これはどこで撮った写真ですか。……京都で撮った写真です。",
    romaji: "Kore wa doko de totta shashin desu ka. ...Kyouto de totta shashin desu.",
    spanish: "¿Dónde se tomó esta foto? ...Es una foto tomada en Kioto.",
    targetKanji: ["写","真","京","都"],
  },
  {
    id: "s-l22-e2",
    lessonId: "l22",
    lessonNumber: "Lección 22",
    section: "例文 (Ejemplo)",
    segments: [
          {
                "text": "あそこにいる"
          },
          {
                "text": "眼鏡",
                "furigana": "めがね"
          },
          {
                "text": "をかけた"
          },
          {
                "text": "人",
                "furigana": "ひと"
          },
          {
                "text": "はだれですか。……ワンさんです。"
          }
    ],
    japaneseText: "あそこにいる眼鏡をかけた人はだれですか。……ワンさんです。",
    romaji: "Asoko ni iru megane o kaketa hito wa dare desu ka. ...Wan-san desu.",
    spanish: "¿Quién es aquella persona que lleva gafas? ...Es el Sr. Wang.",
    targetKanji: ["人"],
  },
  {
    id: "s-l22-e3",
    lessonId: "l22",
    lessonNumber: "Lección 22",
    section: "例文 (Ejemplo)",
    segments: [
          {
                "text": "どんな"
          },
          {
                "text": "部屋",
                "furigana": "へや"
          },
          {
                "text": "を"
          },
          {
                "text": "探して",
                "furigana": "さがして"
          },
          {
                "text": "いますか。……"
          },
          {
                "text": "家賃",
                "furigana": "やちん"
          },
          {
                "text": "が"
          },
          {
                "text": "安くて",
                "furigana": "やすくて"
          },
          {
                "text": "、"
          },
          {
                "text": "駅",
                "furigana": "えき"
          },
          {
                "text": "から"
          },
          {
                "text": "近い",
                "furigana": "ちかい"
          },
          {
                "text": "部屋",
                "furigana": "へや"
          },
          {
                "text": "を"
          },
          {
                "text": "探して",
                "furigana": "さがして"
          },
          {
                "text": "います。"
          }
    ],
    japaneseText: "どんな部屋を探していますか。……家賃が安くて、駅から近い部屋を探しています。",
    romaji: "Donna heya o sagashite imasu ka. ...Yachin ga yasukute, eki kara chikai heya o sagashite imasu.",
    spanish: "¿Qué clase de piso/habitación buscas? ...Busco un piso con alquiler barato y cerca de la estación.",
    targetKanji: ["部","屋","家","賃","安","駅","近"],
  },
  {
    id: "s-l22-e4",
    lessonId: "l22",
    lessonNumber: "Lección 22",
    section: "例文 (Ejemplo)",
    segments: [
          {
                "text": "今日",
                "furigana": "きょう"
          },
          {
                "text": "約束",
                "furigana": "やくそく"
          },
          {
                "text": "がありますか。……いいえ、"
          },
          {
                "text": "友達",
                "furigana": "ともだち"
          },
          {
                "text": "とご"
          },
          {
                "text": "飯",
                "furigana": "はん"
          },
          {
                "text": "を"
          },
          {
                "text": "食べる",
                "furigana": "たべる"
          },
          {
                "text": "約束",
                "furigana": "やくそく"
          },
          {
                "text": "がありましたが、なくなりました。"
          }
    ],
    japaneseText: "今日約束がありますか。……いいえ、友達とご飯を食べる約束がありましたが、なくなりました。",
    romaji: "Kyou yakusoku ga arimasu ka. ...Iie, tomodachi to gohan o taberu yakusoku ga arimashita ga, nakunarimashita.",
    spanish: "¿Tienes algún compromiso/cita hoy? ...No, tenía el plan de comer con un amigo, pero se canceló.",
    targetKanji: ["今","日","約","束","友","達","飯","食"],
  },
  {
    id: "s-l22-e5",
    lessonId: "l22",
    lessonNumber: "Lección 22",
    section: "例文 (Ejemplo)",
    segments: [
          {
                "text": "病気",
                "furigana": "びょうき"
          },
          {
                "text": "ですから、"
          },
          {
                "text": "病院",
                "furigana": "びょういん"
          },
          {
                "text": "の"
          },
          {
                "text": "医者",
                "furigana": "いしゃ"
          },
          {
                "text": "に"
          },
          {
                "text": "診てもらいます。"
          }
    ],
    japaneseText: "病気ですから、病院の医者に診てもらいます。",
    romaji: "Byouki desu kara, byouin no isha ni mite moraimasu.",
    spanish: "Como estoy enfermo, me examinará un médico del hospital.",
    targetKanji: ["病","気","院","医","者"],
  },
  // --- Lección 23 (文型 & 例文) ---
  {
    id: "s-l23-b1",
    lessonId: "l23",
    lessonNumber: "Lección 23",
    section: "文型 (Patrón)",
    segments: [
          {
                "text": "図書館",
                "furigana": "としょかん"
          },
          {
                "text": "で"
          },
          {
                "text": "本",
                "furigana": "ほん"
          },
          {
                "text": "を"
          },
          {
                "text": "借りる",
                "furigana": "かりる"
          },
          {
                "text": "とき、カードが"
          },
          {
                "text": "要ります",
                "furigana": "いります"
          },
          {
                "text": "。"
          }
    ],
    japaneseText: "図書館で本を借りるとき、カードが要ります。",
    romaji: "Toshokan de hon o kariru toki, kaado ga irimasu.",
    spanish: "Para tomar prestados libros en la biblioteca, se necesita carné.",
    targetKanji: ["図","書","館","本","借"],
  },
  {
    id: "s-l23-b2",
    lessonId: "l23",
    lessonNumber: "Lección 23",
    section: "文型 (Patrón)",
    segments: [
          {
                "text": "このボタンを"
          },
          {
                "text": "押すと",
                "furigana": "おすと"
          },
          {
                "text": "、お"
          },
          {
                "text": "釣り",
                "furigana": "つり"
          },
          {
                "text": "が"
          },
          {
                "text": "出ます",
                "furigana": "でます"
          },
          {
                "text": "。"
          }
    ],
    japaneseText: "このボタンを押すと、お釣りが出ます。",
    romaji: "Kono botan o osu to, otsuri ga demasu.",
    spanish: "Si pulsas este botón, sale el cambio.",
    targetKanji: ["出"],
  },
  {
    id: "s-l23-e1",
    lessonId: "l23",
    lessonNumber: "Lección 23",
    section: "例文 (Ejemplo)",
    segments: [
          {
                "text": "細かい",
                "furigana": "こまかい"
          },
          {
                "text": "お"
          },
          {
                "text": "金",
                "furigana": "かね"
          },
          {
                "text": "がないとき、どうしますか。……1000"
          },
          {
                "text": "円札",
                "furigana": "えんさつ"
          },
          {
                "text": "を"
          },
          {
                "text": "出します",
                "furigana": "だします"
          },
          {
                "text": "。"
          }
    ],
    japaneseText: "細かいお金がないとき、どうしますか。……1000円札を出します。",
    romaji: "Komakai okane ga nai toki, dou shimasu ka. ...Sen'en-satsu o dashimasu.",
    spanish: "Cuando no tienes monedas/suelto, ¿qué haces? ...Saco un billete de 1000 yenes.",
    targetKanji: ["細","金","円","出"],
  },
  {
    id: "s-l23-e2",
    lessonId: "l23",
    lessonNumber: "Lección 23",
    section: "例文 (Ejemplo)",
    segments: [
          {
                "text": "道",
                "furigana": "みち"
          },
          {
                "text": "がわからないとき、だれに"
          },
          {
                "text": "聞きます",
                "furigana": "ききます"
          },
          {
                "text": "か。……"
          },
          {
                "text": "交番",
                "furigana": "こうばん"
          },
          {
                "text": "の"
          },
          {
                "text": "警官",
                "furigana": "けいかん"
          },
          {
                "text": "に"
          },
          {
                "text": "聞きます",
                "furigana": "ききます"
          },
          {
                "text": "。"
          }
    ],
    japaneseText: "道がわからないとき、だれに聞きますか。……交番の警官に聞きます。",
    romaji: "Michi ga wakaranai toki, dare ni kikimasu ka. ...Kouban no keikan ni kikimasu.",
    spanish: "Cuando no sabes el camino, ¿a quién le preguntas? ...Pregunto al policía del puesto de policía (kouban).",
    targetKanji: ["道","聞","交","番"],
  },
  {
    id: "s-l23-e3",
    lessonId: "l23",
    lessonNumber: "Lección 23",
    section: "例文 (Ejemplo)",
    segments: [
          {
                "text": "これを"
          },
          {
                "text": "引っ張ると",
                "furigana": "ひっぱると"
          },
          {
                "text": "、どうなりますか。……"
          },
          {
                "text": "音",
                "furigana": "おと"
          },
          {
                "text": "が"
          },
          {
                "text": "大きく",
                "furigana": "おおきく"
          },
          {
                "text": "なります。"
          }
    ],
    japaneseText: "これを引っ張ると、どうなりますか。……音が大きくなります。",
    romaji: "Kore o hipparu to, dou narimasu ka. ...Oto ga ookiku narimasu.",
    spanish: "Si tiras de esto, ¿qué pasa? ...El sonido se hace más fuerte.",
    targetKanji: ["引","音","大"],
  },
  {
    id: "s-l23-e4",
    lessonId: "l23",
    lessonNumber: "Lección 23",
    section: "例文 (Ejemplo)",
    segments: [
          {
                "text": "この"
          },
          {
                "text": "交差点",
                "furigana": "こうさてん"
          },
          {
                "text": "を"
          },
          {
                "text": "右",
                "furigana": "みぎ"
          },
          {
                "text": "へ"
          },
          {
                "text": "曲がる",
                "furigana": "まがる"
          },
          {
                "text": "と、"
          },
          {
                "text": "銀行",
                "furigana": "ぎんこう"
          },
          {
                "text": "があります。"
          }
    ],
    japaneseText: "この交差点を右へ曲がると、銀行があります。",
    romaji: "Kono kousaten o migi e magaru to, ginkou ga arimasu.",
    spanish: "Al girar a la derecha en este cruce, hay un banco.",
    targetKanji: ["交","点","右","銀","行"],
  },
  {
    id: "s-l23-e5",
    lessonId: "l23",
    lessonNumber: "Lección 23",
    section: "例文 (Ejemplo)",
    segments: [
          {
                "text": "駅",
                "furigana": "えき"
          },
          {
                "text": "へ"
          },
          {
                "text": "行く",
                "furigana": "いく"
          },
          {
                "text": "道",
                "furigana": "みち"
          },
          {
                "text": "を"
          },
          {
                "text": "教えて",
                "furigana": "おしえて"
          },
          {
                "text": "ください。"
          }
    ],
    japaneseText: "駅へ行く道を教えてください。",
    romaji: "Eki e iku michi o oshiete kudasai.",
    spanish: "Por favor, enséñeme el camino para ir a la estación.",
    targetKanji: ["駅","行","道","教"],
  },
  // --- Lección 24 (文型 & 例文) ---
  {
    id: "s-l24-b1",
    lessonId: "l24",
    lessonNumber: "Lección 24",
    section: "文型 (Patrón)",
    segments: [
          {
                "text": "佐藤",
                "furigana": "さとう"
          },
          {
                "text": "さんはわたしにチョコレートをくれました。"
          }
    ],
    japaneseText: "佐藤さんはわたしにチョコレートをくれました。",
    romaji: "Satou-san wa watashi ni chokoreeto o kuremashita.",
    spanish: "La Sra. Sato me regaló chocolate.",
    targetKanji: ["佐","藤"],
  },
  {
    id: "s-l24-b2",
    lessonId: "l24",
    lessonNumber: "Lección 24",
    section: "文型 (Patrón)",
    segments: [
          {
                "text": "わたしは"
          },
          {
                "text": "山田",
                "furigana": "やまだ"
          },
          {
                "text": "さんにレポートを"
          },
          {
                "text": "直して",
                "furigana": "なおして"
          },
          {
                "text": "もらいました。"
          }
    ],
    japaneseText: "わたしは山田さんにレポートを直してもらいました。",
    romaji: "Watashi wa Yamada-san ni repooto o naoshite moraimashita.",
    spanish: "Hice que el Sr. Yamada me corrigiera el informe (el Sr. Yamada amablemente me lo corrigió).",
    targetKanji: ["山","田","直"],
  },
  {
    id: "s-l24-b3",
    lessonId: "l24",
    lessonNumber: "Lección 24",
    section: "文型 (Patrón)",
    segments: [
          {
                "text": "母",
                "furigana": "はは"
          },
          {
                "text": "はわたしにセーターを"
          },
          {
                "text": "送って",
                "furigana": "おくって"
          },
          {
                "text": "くれました。"
          }
    ],
    japaneseText: "母はわたしにセーターを送ってくれました。",
    romaji: "Haha wa watashi ni seetaa o okutte kuremashita.",
    spanish: "Mi madre me envió un jersey/suéter.",
    targetKanji: ["母","送"],
  },
  {
    id: "s-l24-b4",
    lessonId: "l24",
    lessonNumber: "Lección 24",
    section: "文型 (Patrón)",
    segments: [
          {
                "text": "わたしは"
          },
          {
                "text": "木村",
                "furigana": "きむら"
          },
          {
                "text": "さんに"
          },
          {
                "text": "本",
                "furigana": "ほん"
          },
          {
                "text": "を"
          },
          {
                "text": "貸して",
                "furigana": "かして"
          },
          {
                "text": "あげました。"
          }
    ],
    japaneseText: "わたしは木村さんに本を貸してあげました。",
    romaji: "Watashi wa Kimura-san ni hon o kashite agemashita.",
    spanish: "Le presté un libro a la Sra. Kimura.",
    targetKanji: ["木","村","本","貸"],
  },
  {
    id: "s-l24-e1",
    lessonId: "l24",
    lessonNumber: "Lección 24",
    section: "例文 (Ejemplo)",
    segments: [
          {
                "text": "すてきな"
          },
          {
                "text": "時計",
                "furigana": "とけい"
          },
          {
                "text": "ですね。……ええ、"
          },
          {
                "text": "誕生日",
                "furigana": "たんじょうび"
          },
          {
                "text": "に"
          },
          {
                "text": "父",
                "furigana": "ちち"
          },
          {
                "text": "がくれました。"
          }
    ],
    japaneseText: "すてきな時計ですね。……ええ、誕生日に父がくれました。",
    romaji: "Suteki na tokei desu ne. ...Ee, tanjoubi ni chichi ga kuremashita.",
    spanish: "Qué reloj tan bonito, ¿verdad? ...Sí, me lo regaló mi padre por mi cumpleaños.",
    targetKanji: ["時","計","誕","生","日","父"],
  },
  {
    id: "s-l24-e2",
    lessonId: "l24",
    lessonNumber: "Lección 24",
    section: "例文 (Ejemplo)",
    segments: [
          {
                "text": "引っ越し",
                "furigana": "ひっこし"
          },
          {
                "text": "のとき、だれに"
          },
          {
                "text": "手伝って",
                "furigana": "てつだって"
          },
          {
                "text": "もらいましたか。……"
          },
          {
                "text": "会社",
                "furigana": "かいしゃ"
          },
          {
                "text": "の"
          },
          {
                "text": "人",
                "furigana": "ひと"
          },
          {
                "text": "に"
          },
          {
                "text": "手伝って",
                "furigana": "てつだって"
          },
          {
                "text": "もらいました。"
          }
    ],
    japaneseText: "引っ越しのとき、だれに手伝ってもらいましたか。……会社の人に手伝ってもらいました。",
    romaji: "Hikkoshi no toki, dare ni tetsudatte moraimashita ka. ...Kaisha no hito ni tetsudatte moraimashita.",
    spanish: "Cuando te mudaste, ¿quién te ayudó? ...Me ayudó gente de mi empresa.",
    targetKanji: ["引","越","手","伝","会","社","人"],
  },
  {
    id: "s-l24-e3",
    lessonId: "l24",
    lessonNumber: "Lección 24",
    section: "例文 (Ejemplo)",
    segments: [
          {
                "text": "電車",
                "furigana": "でんしゃ"
          },
          {
                "text": "の"
          },
          {
                "text": "中",
                "furigana": "なか"
          },
          {
                "text": "で、おばあさんに"
          },
          {
                "text": "席",
                "furigana": "せき"
          },
          {
                "text": "を"
          },
          {
                "text": "譲って",
                "furigana": "ゆずって"
          },
          {
                "text": "あげました。"
          }
    ],
    japaneseText: "電車の中で、おばあさんに席を譲ってあげました。",
    romaji: "Densha no naka de, obaasan ni seki o yuzutte agemashita.",
    spanish: "En el tren, le cedí el asiento a una anciana.",
    targetKanji: ["電","車","中","席"],
  },
  {
    id: "s-l24-e4",
    lessonId: "l24",
    lessonNumber: "Lección 24",
    section: "例文 (Ejemplo)",
    segments: [
          {
                "text": "駅",
                "furigana": "えき"
          },
          {
                "text": "まで"
          },
          {
                "text": "送って",
                "furigana": "おくって"
          },
          {
                "text": "あげましょうか。……いいえ、けっこうです。タクシーで"
          },
          {
                "text": "行きます",
                "furigana": "いきます"
          },
          {
                "text": "から。"
          }
    ],
    japaneseText: "駅まで送ってあげましょうか。……いいえ、けっこうです。タクシーで行きますから。",
    romaji: "Eki made okutte agemashou ka. ...Iie, kekkou desu. Takushii de ikimasu kara.",
    spanish: "¿Le llevo en coche hasta la estación? ...No, gracias, está bien; iré en taxi.",
    targetKanji: ["駅","送","行"],
  },
  // --- Lección 25 (文型 & 例文) ---
  {
    id: "s-l25-b1",
    lessonId: "l25",
    lessonNumber: "Lección 25",
    section: "文型 (Patrón)",
    segments: [
          {
                "text": "雨",
                "furigana": "あめ"
          },
          {
                "text": "が"
          },
          {
                "text": "降ったら",
                "furigana": "ふったら"
          },
          {
                "text": "、"
          },
          {
                "text": "出かけません",
                "furigana": "でかけません"
          },
          {
                "text": "。"
          }
    ],
    japaneseText: "雨が降ったら、出かけません。",
    romaji: "Ame ga futtara, dekakemasen.",
    spanish: "Si llueve, no saldré.",
    targetKanji: ["雨","降","出"],
  },
  {
    id: "s-l25-b2",
    lessonId: "l25",
    lessonNumber: "Lección 25",
    section: "文型 (Patrón)",
    segments: [
          {
                "text": "雨",
                "furigana": "あめ"
          },
          {
                "text": "が"
          },
          {
                "text": "降っても",
                "furigana": "ふっても"
          },
          {
                "text": "、"
          },
          {
                "text": "出かけます",
                "furigana": "でかけます"
          },
          {
                "text": "。"
          }
    ],
    japaneseText: "雨が降っても、出かけます。",
    romaji: "Ame ga futtemo, dekakemasen.",
    spanish: "Aunque llueva, saldré.",
    targetKanji: ["雨","降","出"],
  },
  {
    id: "s-l25-e1",
    lessonId: "l25",
    lessonNumber: "Lección 25",
    section: "例文 (Ejemplo)",
    segments: [
          {
                "text": "仕事",
                "furigana": "しごと"
          },
          {
                "text": "が"
          },
          {
                "text": "終わったら",
                "furigana": "おわったら"
          },
          {
                "text": "、すぐに"
          },
          {
                "text": "帰りましょう",
                "furigana": "かえりましょう"
          },
          {
                "text": "。……ええ、そうしましょう。"
          }
    ],
    japaneseText: "仕事が終わったら、すぐに帰りましょう。……ええ、そうしましょう。",
    romaji: "Shigoto ga owattara, sugu ni kaerimashou. ...Ee, sou shimashou.",
    spanish: "En cuanto termine el trabajo, volvamos enseguida a casa. ...Sí, hagamos eso.",
    targetKanji: ["仕","事","終","帰"],
  },
  {
    id: "s-l25-e2",
    lessonId: "l25",
    lessonNumber: "Lección 25",
    section: "例文 (Ejemplo)",
    segments: [
          {
                "text": "安かったら",
                "furigana": "やすかったら"
          },
          {
                "text": "、パソコンを"
          },
          {
                "text": "買いたいです",
                "furigana": "かいたいです"
          },
          {
                "text": "。"
          }
    ],
    japaneseText: "安かったら、パソコンを買いたいです。",
    romaji: "Yasukattara, pasokon o kaitai desu.",
    spanish: "Si es barato, quiero comprarme un ordenador.",
    targetKanji: ["安","買"],
  },
  {
    id: "s-l25-e3",
    lessonId: "l25",
    lessonNumber: "Lección 25",
    section: "例文 (Ejemplo)",
    segments: [
          {
                "text": "部屋",
                "furigana": "へや"
          },
          {
                "text": "が"
          },
          {
                "text": "狭くても",
                "furigana": "せまくても"
          },
          {
                "text": "、"
          },
          {
                "text": "家賃",
                "furigana": "やちん"
          },
          {
                "text": "が"
          },
          {
                "text": "高かったら",
                "furigana": "たかかったら"
          },
          {
                "text": "、"
          },
          {
                "text": "借りません",
                "furigana": "かりません"
          },
          {
                "text": "。"
          }
    ],
    japaneseText: "部屋が狭くても、家賃が高かったら、借りません。",
    romaji: "Heya ga semakutemo, yachin ga takakattara, karimasen.",
    spanish: "Incluso si la habitación es pequeña, si el alquiler es caro, no la alquilo.",
    targetKanji: ["部","屋","家","賃","高","借"],
  },
  {
    id: "s-l25-e4",
    lessonId: "l25",
    lessonNumber: "Lección 25",
    section: "例文 (Ejemplo)",
    segments: [
          {
                "text": "いくら"
          },
          {
                "text": "考えても",
                "furigana": "かんがえても"
          },
          {
                "text": "、わかりません。"
          }
    ],
    japaneseText: "いくら考えても、わかりません。",
    romaji: "Ikura kangaetemo, wakarimasen.",
    spanish: "Por mucho que lo piense, no lo comprendo / no lo entiendo.",
    targetKanji: ["考"],
  },
  {
    id: "s-l25-e5",
    lessonId: "l25",
    lessonNumber: "Lección 25",
    section: "例文 (Ejemplo)",
    segments: [
          {
                "text": "もし"
          },
          {
                "text": "一億円",
                "furigana": "いちおくえん"
          },
          {
                "text": "あったら、"
          },
          {
                "text": "何を",
                "furigana": "なにを"
          },
          {
                "text": "したいですか。"
          },
          {
                "text": "世界中を",
                "furigana": "せかいじゅうを"
          },
          {
                "text": "旅行したいです。",
                "furigana": "りょこうしたいです。"
          }
    ],
    japaneseText: "もし一億円あったら、何をしたいですか。世界中を旅行したいです。",
    romaji: "Moshi ichioku-en attara, nani o shitai desu ka. Sekaijuu o ryokou shitai desu.",
    spanish: "Si tuviera cien millones de yenes, ¿qué querría hacer? Querría viajar por todo el mundo.",
    targetKanji: ["一","億","円","何","世","界","中","旅","行"],
  },
  {
    id: "s-l25-e6",
    lessonId: "l25",
    lessonNumber: "Lección 25",
    section: "例文 (Ejemplo)",
    segments: [
          {
                "text": "試験",
                "furigana": "しけん"
          },
          {
                "text": "の"
          },
          {
                "text": "前",
                "furigana": "まえ"
          },
          {
                "text": "に"
          },
          {
                "text": "よく"
          },
          {
                "text": "考えました",
                "furigana": "かんがえました"
          },
          {
                "text": "。"
          }
    ],
    japaneseText: "試験の前によく考えました。",
    romaji: "Shiken no mae ni yoku kangaemashita.",
    spanish: "Pensé y reflexioné detenidamente antes del examen.",
    targetKanji: ["試","験","前","考"],
  },
  {
    id: "s-l25-e7",
    lessonId: "l25",
    lessonNumber: "Lección 25",
    section: "例文 (Ejemplo)",
    segments: [
          {
                "text": "親切な",
                "furigana": "しんせつな"
          },
          {
                "text": "先生",
                "furigana": "せんせい"
          },
          {
                "text": "に"
          },
          {
                "text": "作文",
                "furigana": "さくぶん"
          },
          {
                "text": "を"
          },
          {
                "text": "見てもらいました。"
          }
    ],
    japaneseText: "親切な先生に作文を見てもらいました。",
    romaji: "Shinsetsu na sensei ni sakubun o mite moraimashita.",
    spanish: "Un amable profesor me revisó la redacción.",
    targetKanji: ["親","切","先","生","作","文","見"],
  },
];

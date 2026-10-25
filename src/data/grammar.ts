import { GrammarPoint } from './types';

export const MNN_GRAMMAR: GrammarPoint[] = [
  // ==========================================
  // LECCIÓN 1
  // ==========================================
  {
    id: 'gp-l01-1',
    lessonId: 'l01',
    lessonNumber: 'Lección 1',
    order: 1,
    title: '1. S₁ は S₂ です',
    explanation:
      'Estructura básica de la oración afirmativa nominal. S₁ (sustantivo 1) es el tema de la oración presentado por la partícula は, y S₂ です expresa lo que se afirma acerca de S₁ con cortesía.',
    subPoints: [
      {
        title: 'Partícula は',
        explanation:
          'Indica que el sustantivo (S₁) que la precede es el tema o elemento principal del que se va a hablar. Aunque se escribe con el carácter は (ha), como partícula temática siempre se pronuncia «wa».',
        examples: [
          {
            japanese: 'わたしはマイク・ミラーです。',
            segments: [
              { text: 'わたしはマイク・ミラーです。' },
            ],
            romaji: 'Watashi wa Maiku Miraa desu.',
            spanish: 'Yo soy Mike Miller.',
          },
        ],
      },
      {
        title: 'です',
        explanation:
          'Funciona como predicado junto con sustantivos, expresando afirmación, juicio y cortesía hacia el interlocutor.',
        examples: [
          {
            japanese: 'わたしは会社員です。',
            segments: [
              { text: 'わたしは' },
              { text: '会社員', furigana: 'かいしゃいん' },
              { text: 'です。' },
            ],
            romaji: 'Watashi wa kaishain desu.',
            spanish: 'Yo soy empleado de una compañía.',
          },
        ],
      },
    ],
  },
  {
    id: 'gp-l01-2',
    lessonId: 'l01',
    lessonNumber: 'Lección 1',
    order: 2,
    title: '2. S₁ は S₂ じゃ（では）ありません',
    explanation:
      'Es la forma negativa de です. じゃありません se utiliza predominantemente en la conversación cotidiana informal y cortés, mientras que ではありません se prefiere en discursos formales o en el lenguaje escrito.',
    examples: [
      {
        japanese: 'サントスさんは学生じゃありません。',
        segments: [
          { text: 'サントスさんは' },
          { text: '学生', furigana: 'がくせい' },
          { text: 'じゃありません。' },
        ],
        romaji: 'Santosu-san wa gakusei ja arimasen.',
        spanish: 'Santos no es estudiante.',
      },
      {
        japanese: 'ミラーさんは先生ではありません。',
        segments: [
          { text: 'ミラーさんは' },
          { text: '先生', furigana: 'せんせい' },
          { text: 'ではありません。' },
        ],
        romaji: 'Miraa-san wa sensei dewa arimasen.',
        spanish: 'El Sr. Miller no es profesor.',
      },
    ],
  },
  {
    id: 'gp-l01-3',
    lessonId: 'l01',
    lessonNumber: 'Lección 1',
    order: 3,
    title: '3. S₁ は S₂ ですか（Oración interrogativa）',
    explanation:
      'La partícula か al final de la oración transforma la frase en una pregunta sin necesidad de cambiar el orden de las palabras ni de añadir signos de interrogación (？). La entonación de la frase suele elevarse al final.',
    subPoints: [
      {
        title: 'Pregunta de confirmación',
        explanation:
          'Se pregunta para confirmar si la afirmación es cierta o no. Se responde afirmativamente con はい (sí) o negativamente con いいえ (no).',
        examples: [
          {
            japanese: 'ミラーさんはアメリカ人ですか。…はい、アメリカ人です。',
            segments: [
              { text: 'ミラーさんはアメリカ' },
              { text: '人', furigana: 'じん' },
              { text: 'ですか。…はい、アメリカ' },
              { text: '人', furigana: 'じん' },
              { text: 'です。' },
            ],
            romaji: 'Miraa-san wa amerikajin desu ka. ...Hai, amerikajin desu.',
            spanish: '¿Es el Sr. Miller estadounidense? ...Sí, es estadounidense.',
          },
        ],
      },
      {
        title: 'Pregunta con interrogativo',
        explanation:
          'La parte sobre la que se pregunta se sustituye por la palabra interrogativa correspondiente (どなた, だれ, 何歳, etc.). Nunca se responde con はい ni いいえ.',
        examples: [
          {
            japanese: 'あの方はどなたですか。…ミラーさんです。',
            segments: [
              { text: 'あの方', furigana: 'あのかた' },
              { text: 'はどなたですか。…ミラーさんです。' },
            ],
            romaji: 'Ano kata wa donata desu ka. ...Miraa-san desu.',
            spanish: '¿Quién es aquella persona? ...Es el Sr. Miller.',
          },
        ],
      },
    ],
  },
  {
    id: 'gp-l01-4',
    lessonId: 'l01',
    lessonNumber: 'Lección 1',
    order: 4,
    title: '4. S も',
    explanation:
      'La partícula も significa «también». Sustituye a la partícula は cuando se realiza una afirmación sobre un elemento que comparte el mismo predicado o cualidad que otro previamente mencionado.',
    examples: [
      {
        japanese: 'ミラーさんは会社員です。グプタさんも会社員です。',
        segments: [
          { text: 'ミラーさんは' },
          { text: '会社員', furigana: 'かいしゃいん' },
          { text: 'です。グプタさんも' },
          { text: '会社員', furigana: 'かいしゃいん' },
          { text: 'です。' },
        ],
        romaji: 'Miraa-san wa kaishain desu. Guputa-san mo kaishain desu.',
        spanish: 'El Sr. Miller es empleado. El Sr. Gupta también es empleado.',
      },
    ],
  },
  {
    id: 'gp-l01-5',
    lessonId: 'l01',
    lessonNumber: 'Lección 1',
    order: 5,
    title: '5. S₁ の S₂',
    explanation:
      'La partícula の conecta dos sustantivos, donde S₁ modifica a S₂. En esta lección, S₁ indica la organización, empresa o entidad a la que pertenece S₂.',
    examples: [
      {
        japanese: 'ミラーさんはIMCの社員です。',
        segments: [
          { text: 'ミラーさんはIMCの' },
          { text: '社員', furigana: 'しゃいん' },
          { text: 'です。' },
        ],
        romaji: 'Miraa-san wa IMC no shain desu.',
        spanish: 'El Sr. Miller es empleado de IMC.',
      },
      {
        japanese: 'ワットさんはさくら大学の先生です。',
        segments: [
          { text: 'ワットさんはさくら' },
          { text: '大学', furigana: 'だいがく' },
          { text: 'の' },
          { text: '先生', furigana: 'せんせい' },
          { text: 'です。' },
        ],
        romaji: 'Watto-san wa Sakura daigaku no sensei desu.',
        spanish: 'El Sr. Watt es profesor de la Universidad Sakura.',
      },
    ],
  },
  {
    id: 'gp-l01-6',
    lessonId: 'l01',
    lessonNumber: 'Lección 1',
    order: 6,
    title: '6. 〜さん',
    explanation:
      'Sufijo de cortesía que se añade al apellido o nombre de pila del oyente o de una tercera persona. Se usa tanto para hombres como para mujeres. Nunca debe añadirse al propio nombre, ya que se consideraría arrogante.',
    examples: [
      {
        japanese: 'あの方はミラーさんです。',
        segments: [
          { text: 'あの方', furigana: 'あのかた' },
          { text: 'はミラーさんです。' },
        ],
        romaji: 'Ano kata wa Miraa-san desu.',
        spanish: 'Aquella persona es el Sr. Miller.',
      },
    ],
  },

  // ==========================================
  // LECCIÓN 2
  // ==========================================
  {
    id: 'gp-l02-1',
    lessonId: 'l02',
    lessonNumber: 'Lección 2',
    order: 1,
    title: '1. これ / それ / あれ',
    explanation:
      'Pronombres demostrativos de objeto (sustantivos demostrativos). Funcionan de forma independiente como sujeto o tema sin necesidad de acompañar a un sustantivo. これ indica algo próximo al hablante, それ indica algo próximo al oyente, y あれ indica algo alejado de ambos.',
    examples: [
      {
        japanese: 'それは辞書ですか。',
        segments: [
          { text: 'それは' },
          { text: '辞書', furigana: 'じしょ' },
          { text: 'ですか。' },
        ],
        romaji: 'Sore wa jisho desu ka.',
        spanish: '¿Es eso un diccionario?',
      },
      {
        japanese: 'これは本です。',
        segments: [
          { text: 'これは' },
          { text: '本', furigana: 'ほん' },
          { text: 'です。' },
        ],
        romaji: 'Kore wa hon desu.',
        spanish: 'Esto es un libro.',
      },
      {
        japanese: 'あれは車です。',
        segments: [
          { text: 'あれは' },
          { text: '車', furigana: 'くるま' },
          { text: 'です。' },
        ],
        romaji: 'Are wa kuruma desu.',
        spanish: 'Aquello es un coche.',
      },
    ],
  },
  {
    id: 'gp-l02-2',
    lessonId: 'l02',
    lessonNumber: 'Lección 2',
    order: 2,
    title: '2. この S / その S / あの S',
    explanation:
      'Determinantes demostrativos que preceden y modifican obligatoriamente a un sustantivo (S). No pueden aparecer solos. Siguiendo la regla de distancia: この S (cerca del hablante), その S (cerca del oyente), あの S (lejos de ambos).',
    examples: [
      {
        japanese: 'この本はわたしのです。',
        segments: [
          { text: 'この' },
          { text: '本', furigana: 'ほん' },
          { text: 'はわたしのです。' },
        ],
        romaji: 'Kono hon wa watashi no desu.',
        spanish: 'Este libro es mío.',
      },
      {
        japanese: 'その傘はだれのですか。',
        segments: [
          { text: 'その' },
          { text: '傘', furigana: 'かさ' },
          { text: 'はだれのですか。' },
        ],
        romaji: 'Sono kasa wa dare no desu ka.',
        spanish: '¿De quién es ese paraguas?',
      },
    ],
  },
  {
    id: 'gp-l02-3',
    lessonId: 'l02',
    lessonNumber: 'Lección 2',
    order: 3,
    title: '3. そうです',
    explanation:
      'Fórmula afirmativa corta que se emplea para responder «Así es» a preguntas que tienen un predicado nominal, evitando repetir todo el predicado. En caso de respuesta negativa, habitualmente se responde con 違います (No es así / No es correcto) o se aclara cuál es el elemento verdadero.',
    examples: [
      {
        japanese: 'それは辞書ですか。…はい、そうです。',
        segments: [
          { text: 'それは' },
          { text: '辞書', furigana: 'じしょ' },
          { text: 'ですか。…はい、そうです。' },
        ],
        romaji: 'Sore wa jisho desu ka. ...Hai, sou desu.',
        spanish: '¿Es eso un diccionario? ...Sí, así es.',
      },
      {
        japanese: 'それは手帳ですか。…いいえ、違います。',
        segments: [
          { text: 'それは' },
          { text: '手帳', furigana: 'てちょう' },
          { text: 'ですか。…いいえ、' },
          { text: '違います', furigana: 'ちがいます' },
          { text: '。' },
        ],
        romaji: 'Sore wa techou desu ka. ...Iie, chigaimasu.',
        spanish: '¿Es eso una agenda? ...No, no lo es (es diferente).',
      },
    ],
  },
  {
    id: 'gp-l02-4',
    lessonId: 'l02',
    lessonNumber: 'Lección 2',
    order: 4,
    title: '4. 〜か、〜か',
    explanation:
      'Estructura de pregunta alternativa donde se plantean dos o más opciones para que el oyente elija una de ellas. Al no ser una pregunta de confirmación, la respuesta nunca empieza por はい ni por いいえ, sino que directamente se indica la opción elegida.',
    examples: [
      {
        japanese: 'これは「9」ですか、「7」ですか。…「9」です。',
        segments: [
          { text: 'これは「9」ですか、「7」ですか。…「9」です。' },
        ],
        romaji: 'Kore wa "kyuu" desu ka, "nana" desu ka. ..."Kyuu" desu.',
        spanish: '¿Esto es un "9" o un "7"? ...Es un "9".',
      },
    ],
  },
  {
    id: 'gp-l02-5',
    lessonId: 'l02',
    lessonNumber: 'Lección 2',
    order: 5,
    title: '5. S₁ の S₂',
    explanation:
      'En esta lección, la partícula の expresa dos funciones esenciales: 1) de qué trata el objeto S₂ (su temática o contenido), y 2) a quién pertenece S₂ (propiedad o posesión).',
    examples: [
      {
        japanese: 'これはコンピューターの本です。',
        segments: [
          { text: 'これはコンピューターの' },
          { text: '本', furigana: 'ほん' },
          { text: 'です。' },
        ],
        romaji: 'Kore wa konpyuutaa no hon desu.',
        spanish: 'Este es un libro sobre computadoras (temática).',
      },
      {
        japanese: 'これはわたしの本です。',
        segments: [
          { text: 'これはわたしの' },
          { text: '本', furigana: 'ほん' },
          { text: 'です。' },
        ],
        romaji: 'Kore wa watashi no hon desu.',
        spanish: 'Este es mi libro (posesión).',
      },
    ],
  },
  {
    id: 'gp-l02-6',
    lessonId: 'l02',
    lessonNumber: 'Lección 2',
    order: 6,
    title: '6. の como sustituto del sustantivo',
    explanation:
      'La partícula の puede sustituir al sustantivo S₂ cuando este ya ha sido mencionado en el contexto, evitando la repetición innecesaria. Se traduce como «el de / la de / el mío...». Nota importante: solo se puede sustituir si S₂ es un objeto o cosa, nunca una persona (por ejemplo, para «el profesor Miller» no se puede omitir).',
    examples: [
      {
        japanese: 'あれはだれのかばんですか。…佐藤さんのです。',
        segments: [
          { text: 'あれはだれの' },
          { text: '鞄', furigana: 'かばん' },
          { text: 'ですか。…' },
          { text: '佐藤', furigana: 'さとう' },
          { text: 'さんのです。' },
        ],
        romaji: 'Are wa dare no kaban desu ka. ...Satou-san no desu.',
        spanish: '¿De quién es aquel bolso? ...Es el de la Srta. Sato.',
      },
    ],
  },
  {
    id: 'gp-l02-7',
    lessonId: 'l02',
    lessonNumber: 'Lección 2',
    order: 7,
    title: '7. Prefijo お〜',
    explanation:
      'Prefijo honorífico/cortés (bikago) que se antepone a ciertos sustantivos para embellecer el lenguaje o mostrar respeto hacia el oyente (p. ej., お土産 recuerdo/regalo, お酒 sake/alcohol, お茶 té, お金 dinero).',
    examples: [
      {
        japanese: 'お茶をどうぞ。',
        segments: [
          { text: 'お' },
          { text: '茶', furigana: 'ちゃ' },
          { text: 'をどうぞ。' },
        ],
        romaji: 'Ocha o douzo.',
        spanish: 'Tome té, por favor.',
      },
    ],
  },
  {
    id: 'gp-l02-8',
    lessonId: 'l02',
    lessonNumber: 'Lección 2',
    order: 8,
    title: '8. そうですか',
    explanation:
      'Interjección que indica que se ha recibido y asimilado una nueva información dada por el interlocutor («Ah, ya veo», «Ah, sí», «Entendido»). Se pronuncia con entonación descendente.',
    examples: [
      {
        japanese: 'この傘はあなたのですか。…いいえ、違います。…そうですか。',
        segments: [
          { text: 'この' },
          { text: '傘', furigana: 'かさ' },
          { text: 'はあなたのですか。…いいえ、' },
          { text: '違います', furigana: 'ちがいます' },
          { text: '。…そうですか。' },
        ],
        romaji: 'Kono kasa wa anata no desu ka. ...Iie, chigaimasu. ...Sou desu ka.',
        spanish: '¿Este paraguas es suyo? ...No, no lo es. ...Ah, ya veo.',
      },
    ],
  },

  // ==========================================
  // LECCIÓN 3
  // ==========================================
  {
    id: 'gp-l03-1',
    lessonId: 'l03',
    lessonNumber: 'Lección 3',
    order: 1,
    title: '1. ここ / そこ / あそこ / こちら / そちら / あちら',
    explanation:
      'Pronombres demostrativos de lugar. ここ (aquí, cerca del hablante), そこ (ahí, cerca del oyente), あそこ (allí, lejos de ambos). Por su parte, こちら, そちら y あちら señalan dirección («por aquí/hacia acá»), pero se emplean también como variantes mucho más formales y educadas para referirse al lugar («este lugar / este departamento»).',
    examples: [
      {
        japanese: '受付はあそこです。',
        segments: [
          { text: '受付', furigana: 'うけつけ' },
          { text: 'はあそこです。' },
        ],
        romaji: 'Uketsuke wa asoko desu.',
        spanish: 'La recepción está allí.',
      },
      {
        japanese: '事務所はこちらです。',
        segments: [
          { text: '事務所', furigana: 'じむしょ' },
          { text: 'はこちらです。' },
        ],
        romaji: 'Jimusho wa kochira desu.',
        spanish: 'La oficina está por aquí (forma cortés).',
      },
    ],
  },
  {
    id: 'gp-l03-2',
    lessonId: 'l03',
    lessonNumber: 'Lección 3',
    order: 2,
    title: '2. S は lugar です',
    explanation:
      'Estructura para indicar la ubicación de un objeto, persona o instalación. S (el tema) se coloca al inicio con は y el lugar funciona como predicado seguido de です.',
    examples: [
      {
        japanese: 'お手洗いはあそこです。',
        segments: [
          { text: 'お' },
          { text: '手洗い', furigana: 'てあらい' },
          { text: 'はあそこです。' },
        ],
        romaji: 'Otearai wa asoko desu.',
        spanish: 'El servicio / lavabo está allí.',
      },
      {
        japanese: '電話は2階です。',
        segments: [
          { text: '電話', furigana: 'でんわ' },
          { text: 'は2' },
          { text: '階', furigana: 'かい' },
          { text: 'です。' },
        ],
        romaji: 'Denwa wa nikai desu.',
        spanish: 'El teléfono está en la segunda planta.',
      },
    ],
  },
  {
    id: 'gp-l03-3',
    lessonId: 'l03',
    lessonNumber: 'Lección 3',
    order: 3,
    title: '3. どこ / どちら',
    explanation:
      'どこ significa «dónde» e interroga por la localización espacial. どちら significa «hacia dónde / en qué dirección», pero se utiliza también como forma de cortesía de どこ. Además, どちら se emplea de manera muy común y educada para preguntar por el nombre del país, empresa, universidad u organización de pertenencia de alguien.',
    examples: [
      {
        japanese: '会社はどちらですか。',
        segments: [
          { text: '会社', furigana: 'かいしゃ' },
          { text: 'はどちらですか。' },
        ],
        romaji: 'Kaisha wa dochira desu ka.',
        spanish: '¿En qué empresa trabaja Ud.? / ¿Cuál es su compañía?',
      },
      {
        japanese: 'お手洗いはどこですか。',
        segments: [
          { text: 'お' },
          { text: '手洗い', furigana: 'てあらい' },
          { text: 'はどこですか。' },
        ],
        romaji: 'Otearai wa doko desu ka.',
        spanish: '¿Dónde está el baño?',
      },
    ],
  },
  {
    id: 'gp-l03-4',
    lessonId: 'l03',
    lessonNumber: 'Lección 3',
    order: 4,
    title: '4. S₁ の S₂',
    explanation:
      'En el contexto de la Lección 3, S₁ indica el país o la empresa de procedencia o fabricación de un producto o artículo S₂ (p. ej., «ordenador japonés», «vino italiano»).',
    examples: [
      {
        japanese: 'これはどこのコンピューターですか。…日本のコンピューターです。',
        segments: [
          { text: 'これはどこのコンピューターですか。…' },
          { text: '日本', furigana: 'にほん' },
          { text: 'のコンピューターです。' },
        ],
        romaji: 'Kore wa doko no konpyuutaa desu ka. ...Nihon no konpyuutaa desu.',
        spanish: '¿De dónde es esta computadora? ...Es una computadora de Japón.',
      },
      {
        japanese: 'これはイタリアのワインです。',
        segments: [
          { text: 'これはイタリアのワインです。' },
        ],
        romaji: 'Kore wa Itaria no wain desu.',
        spanish: 'Este es vino de Italia.',
      },
    ],
  },
  {
    id: 'gp-l03-5',
    lessonId: 'l03',
    lessonNumber: 'Lección 3',
    order: 5,
    title: '5. Tabla de términos demostrativos こ/そ/あ/ど',
    explanation:
      'Sistema integrado de la serie Ko-So-A-Do:\n• Cosa: これ / それ / あれ / どれ (¿cuál?)\n• Persona/Objeto: この S / その S / あの S / どの S (¿cuál S?)\n• Lugar: ここ / そこ / あそこ / どこ (¿dónde?)\n• Dirección / Cortesía: こちら / そちら / あちら / どちら (¿por dónde? / ¿cuál?).',
    examples: [
      {
        japanese: 'エレベーターはどちらですか。…あちらです。',
        segments: [
          { text: 'エレベーターはどちらですか。…あちらです。' },
        ],
        romaji: 'Erebeetaa wa dochira desu ka. ...Achira desu.',
        spanish: '¿Hacia dónde está el ascensor? ...Por allí.',
      },
    ],
  },
  {
    id: 'gp-l03-6',
    lessonId: 'l03',
    lessonNumber: 'Lección 3',
    order: 6,
    title: '6. Prefijo お〜',
    explanation:
      'Expresa respeto y cortesía hacia el interlocutor cuando se aplica a conceptos o pertenencias vinculadas a él: [お]国 (su país), [お]名前 (su nombre), [お]仕事 (su trabajo), [お]手洗い (el aseo).',
    examples: [
      {
        japanese: 'お国はどちらですか。…アメリカです。',
        segments: [
          { text: 'お' },
          { text: '国', furigana: 'くに' },
          { text: 'はどちらですか。…アメリカです。' },
        ],
        romaji: 'Okuni wa dochira desu ka. ...Amerika desu.',
        spanish: '¿De qué país es usted? ...De Estados Unidos.',
      },
    ],
  },

  // ==========================================
  // LECCIÓN 4
  // ==========================================
  {
    id: 'gp-l04-1',
    lessonId: 'l04',
    lessonNumber: 'Lección 4',
    order: 1,
    title: '1. 今 -時 -分 です',
    explanation:
      'Para expresar la hora en japonés se añade el sufijo 時 (ji) a las horas y 分 (fun / pun, con alternancias fonéticas) a los minutos. La pregunta de la hora se formula con 何時 (nanji) y 何分 (nanpun). Para la media hora se puede utilizar 半 (han).',
    examples: [
      {
        japanese: '今何時ですか。…7時10分です。',
        segments: [
          { text: '今', furigana: 'いま' },
          { text: '何時', furigana: 'なんじ' },
          { text: 'ですか。…7' },
          { text: '時', furigana: 'じ' },
          { text: '10' },
          { text: '分', furigana: 'ぷん' },
          { text: 'です。' },
        ],
        romaji: 'Ima nanji desu ka. ...Shichiji juppun desu.',
        spanish: '¿Qué hora es ahora? ...Son las 7 y 10.',
      },
    ],
  },
  {
    id: 'gp-l04-2',
    lessonId: 'l04',
    lessonNumber: 'Lección 4',
    order: 2,
    title: '2. Vます / Vません / Vました / Vませんでした',
    explanation:
      'Conjugación del estilo cortés (desu/masu) para verbos:\n• Presente / Futuro afirmativo: 〜ます\n• Presente / Futuro negativo: 〜ません\n• Pasado afirmativo: 〜ました\n• Pasado negativo: 〜ませんでした.',
    examples: [
      {
        japanese: 'きのう勉強しましたか。…はい、勉強しました。',
        segments: [
          { text: 'きのう' },
          { text: '勉強', furigana: 'べんきょう' },
          { text: 'しましたか。…はい、' },
          { text: '勉強', furigana: 'べんきょう' },
          { text: 'しました。' },
        ],
        romaji: 'Kinou benkyou shimashita ka. ...Hai, benkyou shimashita.',
        spanish: '¿Estudió ayer? ...Sí, estudié.',
      },
      {
        japanese: '毎朝6時に起きます。',
        segments: [
          { text: '毎朝', furigana: 'まいあさ' },
          { text: '6' },
          { text: '時', furigana: 'じ' },
          { text: 'に' },
          { text: '起きます', furigana: 'おきます' },
          { text: '。' },
        ],
        romaji: 'Maiasa rokuji ni okimasu.',
        spanish: 'Me levanto todas las mañanas a las 6.',
      },
    ],
  },
  {
    id: 'gp-l04-3',
    lessonId: 'l04',
    lessonNumber: 'Lección 4',
    order: 3,
    title: '3. S (tiempo) に V',
    explanation:
      'La partícula に se pospone a un sustantivo temporal que indica un momento numérico o puntual exacto (horas, días de la semana, fechas). No se usa con sustantivos de tiempo relativo como 今日 (hoy), あした (mañana), きのう (ayer), 毎日 (todos los días).',
    examples: [
      {
        japanese: '6時半に起きます。',
        segments: [
          { text: '6' },
          { text: '時', furigana: 'じ' },
          { text: '半', furigana: 'はん' },
          { text: 'に' },
          { text: '起きます', furigana: 'おきます' },
          { text: '。' },
        ],
        romaji: 'Rokujihan ni okimasu.',
        spanish: 'Me levanto a las seis y media.',
      },
      {
        japanese: '日曜日にお祈りをします。',
        segments: [
          { text: '日曜日', furigana: 'にちようび' },
          { text: 'にお' },
          { text: '祈', furigana: 'いの' },
          { text: 'りをします。' },
        ],
        romaji: 'Nichiyoubi ni oinori o shimasu.',
        spanish: 'Rezo los domingos.',
      },
    ],
  },
  {
    id: 'gp-l04-4',
    lessonId: 'l04',
    lessonNumber: 'Lección 4',
    order: 4,
    title: '4. S₁ から S₂ まで',
    explanation:
      'から señala el punto de partida o inicio temporal/espacial («desde»), y まで señala el punto de finalización («hasta»). Pueden usarse juntos (de... a...) o de forma independiente.',
    examples: [
      {
        japanese: '9時から5時まで勉強します。',
        segments: [
          { text: '9' },
          { text: '時', furigana: 'じ' },
          { text: 'から5' },
          { text: '時', furigana: 'じ' },
          { text: 'まで' },
          { text: '勉強', furigana: 'べんきょう' },
          { text: 'します。' },
        ],
        romaji: 'Kuji kara goji made benkyou shimasu.',
        spanish: 'Estudio de las nueve a las cinco.',
      },
      {
        japanese: '昼休みは12時からです。',
        segments: [
          { text: '昼休', furigana: 'ひるやす' },
          { text: 'みは12' },
          { text: '時', furigana: 'じ' },
          { text: 'からです。' },
        ],
        romaji: 'Hiruyasumi wa juuniji kara desu.',
        spanish: 'El descanso del almuerzo es desde las 12.',
      },
    ],
  },
  {
    id: 'gp-l04-5',
    lessonId: 'l04',
    lessonNumber: 'Lección 4',
    order: 5,
    title: '5. S₁ と S₂',
    explanation:
      'La partícula と conecta sustantivos de forma coordinada y exhaustiva, equivalente a la conjunción copulativa «y». Solo une sustantivos, no oraciones completas.',
    examples: [
      {
        japanese: '銀行の休みは土曜日と日曜日です。',
        segments: [
          { text: '銀行', furigana: 'ぎんこう' },
          { text: 'の' },
          { text: '休', furigana: 'やす' },
          { text: 'みは' },
          { text: '土曜日', furigana: 'どようび' },
          { text: 'と' },
          { text: '日曜日', furigana: 'にちようび' },
          { text: 'です。' },
        ],
        romaji: 'Ginkou no yasumi wa doyoubi to nichiyoubi desu.',
        spanish: 'Los días festivos del banco son los sábados y domingos.',
      },
    ],
  },
  {
    id: 'gp-l04-6',
    lessonId: 'l04',
    lessonNumber: 'Lección 4',
    order: 6,
    title: '6. Partícula 〜ね',
    explanation:
      'Partícula final de oración que se añade para buscar la complicidad o confirmación del interlocutor, expresar acuerdo mutuo o suavizar la aseveración («¿verdad?», «¿no es así?»).',
    examples: [
      {
        japanese: '毎日10時まで勉強します。…大変ですね。',
        segments: [
          { text: '毎日', furigana: 'まいにち' },
          { text: '10' },
          { text: '時', furigana: 'じ' },
          { text: 'まで' },
          { text: '勉強', furigana: 'べんきょう' },
          { text: 'します。…' },
          { text: '大変', furigana: 'たいへん' },
          { text: 'ですね。' },
        ],
        romaji: 'Mainichi juuji made benkyou shimasu. ...Taihen desu ne.',
        spanish: 'Estudio todos los días hasta las 10. ...Es duro, ¿eh?',
      },
    ],
  },

  // ==========================================
  // LECCIÓN 5
  // ==========================================
  {
    id: 'gp-l05-1',
    lessonId: 'l05',
    lessonNumber: 'Lección 5',
    order: 1,
    title: '1. S (lugar) へ 行きます / 来ます / 帰ります',
    explanation:
      'Con los verbos de desplazamiento como 行きます (ir), 来ます (venir) y 帰ります (regresar a casa/país), la partícula へ (se pronuncia «e») señala el destino o dirección hacia el que se dirige el movimiento.',
    examples: [
      {
        japanese: '京都へ行きます。',
        segments: [
          { text: '京都', furigana: 'きょうと' },
          { text: 'へ' },
          { text: '行きます', furigana: 'いきます' },
          { text: '。' },
        ],
        romaji: 'Kyouto e ikimasu.',
        spanish: 'Voy a Kioto.',
      },
      {
        japanese: '日本へ来ました。',
        segments: [
          { text: '日本', furigana: 'にほん' },
          { text: 'へ' },
          { text: '来ました', furigana: 'きました' },
          { text: '。' },
        ],
        romaji: 'Nihon e kimashita.',
        spanish: 'Vine a Japón.',
      },
      {
        japanese: 'うちへ帰ります。',
        segments: [
          { text: 'うちへ' },
          { text: '帰ります', furigana: 'かえります' },
          { text: '。' },
        ],
        romaji: 'Uchi e kaerimasu.',
        spanish: 'Vuelvo a casa.',
      },
    ],
  },
  {
    id: 'gp-l05-2',
    lessonId: 'l05',
    lessonNumber: 'Lección 5',
    order: 2,
    title: '2. どこ［へ］も 行きません / 行きませんでした',
    explanation:
      'Cuando a un interrogativo le sigue la partícula も y un verbo en forma negativa, se niega de manera categórica y absoluta toda posibilidad («a ningún sitio», «nada», «nadie»). La partícula de dirección へ puede conservarse o elidirse.',
    examples: [
      {
        japanese: 'どこへも行きません。',
        segments: [
          { text: 'どこへも' },
          { text: '行きません', furigana: 'いきません' },
          { text: '。' },
        ],
        romaji: 'Doko e mo ikimasen.',
        spanish: 'No voy a ningún sitio.',
      },
      {
        japanese: '日曜日はどこも行きませんでした。',
        segments: [
          { text: '日曜日', furigana: 'にちようび' },
          { text: 'はどこも' },
          { text: '行きませんでした', furigana: 'いきませんでした' },
          { text: '。' },
        ],
        romaji: 'Nichiyoubi wa doko mo ikimasen deshita.',
        spanish: 'El domingo no fui a ningún lugar.',
      },
    ],
  },
  {
    id: 'gp-l05-3',
    lessonId: 'l05',
    lessonNumber: 'Lección 5',
    order: 3,
    title: '3. S (vehículo) で 行きます / 来ます / 帰ります',
    explanation:
      'La partícula で indica el medio, instrumento o vehículo con el que se realiza el desplazamiento (電車で en tren, バスで en autobús, タクシーで en taxi). Excepción importante: cuando el desplazamiento es a pie se utiliza 歩いて (aruite) sin partícula で.',
    examples: [
      {
        japanese: '電車で行きます。',
        segments: [
          { text: '電車', furigana: 'でんしゃ' },
          { text: 'で' },
          { text: '行きます', furigana: 'いきます' },
          { text: '。' },
        ],
        romaji: 'Densha de ikimasu.',
        spanish: 'Voy en tren.',
      },
      {
        japanese: '駅から歩いて帰りました。',
        segments: [
          { text: '駅', furigana: 'えき' },
          { text: 'から' },
          { text: '歩いて', furigana: 'あるいて' },
          { text: '帰りました', furigana: 'かえりました' },
          { text: '。' },
        ],
        romaji: 'Eki kara aruite kaerimashita.',
        spanish: 'Regresé a pie desde la estación.',
      },
    ],
  },
  {
    id: 'gp-l05-4',
    lessonId: 'l05',
    lessonNumber: 'Lección 5',
    order: 4,
    title: '4. S (persona/animal) と V',
    explanation:
      'La partícula と indica la compañía con la que se realiza la acción («con alguien»). Si la acción se realiza de forma individual sin compañía, se emplea 一人で (hitori de) sin la partícula と.',
    examples: [
      {
        japanese: '家族と日本へ来ました。',
        segments: [
          { text: '家族', furigana: 'かぞく' },
          { text: 'と' },
          { text: '日本', furigana: 'にほん' },
          { text: 'へ' },
          { text: '来ました', furigana: 'きました' },
          { text: '。' },
        ],
        romaji: 'Kazoku to Nihon e kimashita.',
        spanish: 'Vine a Japón con mi familia.',
      },
      {
        japanese: '一人で東京へ行きます。',
        segments: [
          { text: '一人で', furigana: 'ひとりで' },
          { text: '東京', furigana: 'とうきょう' },
          { text: 'へ' },
          { text: '行きます', furigana: 'いきます' },
          { text: '。' },
        ],
        romaji: 'Hitori de Toukyou e ikimasu.',
        spanish: 'Voy a Tokio solo.',
      },
    ],
  },
  {
    id: 'gp-l05-5',
    lessonId: 'l05',
    lessonNumber: 'Lección 5',
    order: 5,
    title: '5. いつ',
    explanation:
      'Palabra interrogativa para preguntar «cuándo». A diferencia de las horas o días concretos, いつ nunca va acompañado de la partícula に.',
    examples: [
      {
        japanese: 'いつ日本へ来ましたか。…3月25日に来ました。',
        segments: [
          { text: 'いつ' },
          { text: '日本', furigana: 'にほん' },
          { text: 'へ' },
          { text: '来ました', furigana: 'きました' },
          { text: 'か。…3' },
          { text: '月', furigana: 'がつ' },
          { text: '25' },
          { text: '日', furigana: 'にち' },
          { text: 'に' },
          { text: '来ました', furigana: 'きました' },
          { text: '。' },
        ],
        romaji: 'Itsu Nihon e kimashita ka. ...Sangatsu nijuugonichi ni kimashita.',
        spanish: '¿Cuándo viniste a Japón? ...Vine el 25 de marzo.',
      },
    ],
  },
  {
    id: 'gp-l05-6',
    lessonId: 'l05',
    lessonNumber: 'Lección 5',
    order: 6,
    title: '6. Partícula 〜よ',
    explanation:
      'Partícula final que enfatiza una afirmación o transmite información que el hablante considera que el oyente desconoce o debe tener presente («te aseguro que...», «fíjate que...»).',
    examples: [
      {
        japanese: 'この電車は甲子園へ行きますか。…いいえ、行きません。次の「普通」ですよ。',
        segments: [
          { text: 'この' },
          { text: '電車', furigana: 'でんしゃ' },
          { text: 'は' },
          { text: '甲子園', furigana: 'こうしえん' },
          { text: 'へ' },
          { text: '行きます', furigana: 'いきます' },
          { text: 'か。…いいえ、' },
          { text: '行きません', furigana: 'いきません' },
          { text: '。' },
          { text: '次', furigana: 'つぎ' },
          { text: 'の「' },
          { text: '普通', furigana: 'ふつう' },
          { text: '」ですよ。' },
        ],
        romaji: 'Kono densha wa Koushien e ikimasu ka. ...Iie, ikimasen. Tsugi no "futsuu" desu yo.',
        spanish: '¿Este tren va a Koshien? ...No, no va. El siguiente es el "Local" (tome ese).',
      },
    ],
  },
  {
    id: 'gp-l05-7',
    lessonId: 'l05',
    lessonNumber: 'Lección 5',
    order: 7,
    title: '7. そうですね',
    explanation:
      'Expresión muy común para manifestar consentimiento, empatía o acuerdo con lo dicho por la otra persona («Es verdad», «Cierto», «Así es»).',
    examples: [
      {
        japanese: 'あしたは日曜日ですね。…そうですね。',
        segments: [
          { text: 'あしたは' },
          { text: '日曜日', furigana: 'にちようび' },
          { text: 'ですね。…そうですね。' },
        ],
        romaji: 'Ashita wa nichiyoubi desu ne. ...Sou desu ne.',
        spanish: 'Mañana es domingo, ¿verdad? ...Es verdad.',
      },
    ],
  },
  // ==========================================
  // LECCIÓN 6
  // ==========================================
  {
    id: 'gp-l06-1',
    lessonId: 'l06',
    lessonNumber: 'Lección 6',
    order: 1,
    title: '1. S を V (transitivo)',
    explanation:
      'La partícula を señala el objeto directo sobre el que recae la acción expresada por el verbo transitivo. Aunque se escribe con el carácter を, se pronuncia exactamente igual que お (o).',
    examples: [
      {
        japanese: 'ジュースを飲みます。',
        segments: [
          { text: 'ジュースを' },
          { text: '飲', furigana: 'の' },
          { text: 'みます。' },
        ],
        romaji: 'Juusu o nomimasu.',
        spanish: 'Bebo jugo / zumo.',
      },
      {
        japanese: 'パンを食べます。',
        segments: [
          { text: 'パンを' },
          { text: '食', furigana: 'た' },
          { text: 'べます。' },
        ],
        romaji: 'Pan o tabemasu.',
        spanish: 'Como pan.',
      },
    ],
  },
  {
    id: 'gp-l06-2',
    lessonId: 'l06',
    lessonNumber: 'Lección 6',
    order: 2,
    title: '2. S を します',
    explanation:
      'Se utiliza el verbo します con un amplio espectro de sustantivos para expresar la realización de actividades: deportes, juegos, eventos, reuniones o trabajos (サッカーをします, パーティーをします, 宿題をします).',
    examples: [
      {
        japanese: 'サッカーをします。',
        segments: [
          { text: 'サッカーをします。' },
        ],
        romaji: 'Sakkaa o shimasu.',
        spanish: 'Juego al fútbol.',
      },
      {
        japanese: '友達とテニスをします。',
        segments: [
          { text: '友達', furigana: 'ともだち' },
          { text: 'とテニスをします。' },
        ],
        romaji: 'Tomodachi to tenisu o shimasu.',
        spanish: 'Juego al tenis con un amigo.',
      },
    ],
  },
  {
    id: 'gp-l06-3',
    lessonId: 'l06',
    lessonNumber: 'Lección 6',
    order: 3,
    title: '3. 何をしますか',
    explanation:
      'Expresión utilizada para preguntar "¿Qué hace / hará?". Para preguntar por un día o momento específico, se antepone el elemento temporal (p. ej., 月曜日 何をしますか).',
    examples: [
      {
        japanese: '月曜日何をしますか。',
        segments: [
          { text: '月曜日', furigana: 'げつようび' },
          { text: '何', furigana: 'なに' },
          { text: 'をしますか。' },
        ],
        romaji: 'Getsuyoubi nani o shimasu ka.',
        spanish: '¿Qué va a hacer el lunes?',
      },
      {
        japanese: 'きのう何をしましたか。',
        segments: [
          { text: 'きのう' },
          { text: '何', furigana: 'なに' },
          { text: 'をしましたか。' },
        ],
        romaji: 'Kinou nani o shimashita ka.',
        spanish: '¿Qué hizo ayer?',
      },
    ],
  },
  {
    id: 'gp-l06-4',
    lessonId: 'l06',
    lessonNumber: 'Lección 6',
    order: 4,
    title: '4. なん y なに',
    explanation:
      'Ambas formas se escriben con el kanji 何.\n• なん: se usa delante de consonantes dentales (t, d, n) como です, と, で, o delante de sufijos de conteo (何歳, 何時, 何番).\n• なに: se usa cuando precede a partículas como を o cuando va aislado.',
    examples: [
      {
        japanese: '何を買いに行きますか。',
        segments: [
          { text: '何', furigana: 'なに' },
          { text: 'を' },
          { text: '買', furigana: 'か' },
          { text: 'いに行きますか。' },
        ],
        romaji: 'Nani o kai ni ikimasu ka.',
        spanish: '¿Qué vas a comprar?',
      },
      {
        japanese: 'それは何ですか。',
        segments: [
          { text: 'それは' },
          { text: '何', furigana: 'なん' },
          { text: 'ですか。' },
        ],
        romaji: 'Sore wa nan desu ka.',
        spanish: '¿Qué es eso?',
      },
    ],
  },
  {
    id: 'gp-l06-5',
    lessonId: 'l06',
    lessonNumber: 'Lección 6',
    order: 5,
    title: '5. S (lugar) で V',
    explanation:
      'La partícula で indica el lugar donde ocurre o se desarrolla la acción verbal (a diferencia de に, que indica ubicación estática o destino con verbos de movimiento).',
    examples: [
      {
        japanese: '駅で新聞を買います。',
        segments: [
          { text: '駅', furigana: 'えき' },
          { text: 'で' },
          { text: '新聞', furigana: 'しんぶん' },
          { text: 'を' },
          { text: '買', furigana: 'か' },
          { text: 'います。' },
        ],
        romaji: 'Eki de shinbun o kaimasu.',
        spanish: 'Compro el periódico en la estación.',
      },
      {
        japanese: 'レストランでご飯を食べました。',
        segments: [
          { text: 'レストランでご' },
          { text: '飯', furigana: 'はん' },
          { text: 'を' },
          { text: '食', furigana: 'た' },
          { text: 'べました。' },
        ],
        romaji: 'Resutoran de gohan o tabemashita.',
        spanish: 'Comí en un restaurante.',
      },
    ],
  },
  {
    id: 'gp-l06-6',
    lessonId: 'l06',
    lessonNumber: 'Lección 6',
    order: 6,
    title: '6. V ませんか',
    explanation:
      'Forma de invitar o sugerir de manera cortés al oyente a realizar una acción conjunta ("¿Por qué no...? / ¿Le gustaría...?"), respetando su decisión.',
    examples: [
      {
        japanese: 'いっしょにお茶を飲みませんか。',
        segments: [
          { text: 'いっしょにお' },
          { text: '茶', furigana: 'ちゃ' },
          { text: 'を' },
          { text: '飲', furigana: 'の' },
          { text: 'みませんか。' },
        ],
        romaji: 'Issho ni ocha o nomimasen ka.',
        spanish: '¿Por qué no tomamos un té juntos?',
      },
      {
        japanese: 'あしたテニスをしませんか。',
        segments: [
          { text: 'あしたテニスをしませんか。' },
        ],
        romaji: 'Ashita tenisu o shimasen ka.',
        spanish: '¿Jugamos al tenis mañana?',
      },
    ],
  },
  {
    id: 'gp-l06-7',
    lessonId: 'l06',
    lessonNumber: 'Lección 6',
    order: 7,
    title: '7. V ましょう',
    explanation:
      'Expresión entusiasta para proponer realizar algo juntos de forma decidida o para responder afirmativamente a una invitación previa ("¡Vamos a...!", "¡Hagámoslo!").',
    examples: [
      {
        japanese: 'ちょっと休みましょう。',
        segments: [
          { text: 'ちょっと' },
          { text: '休', furigana: 'やす' },
          { text: 'みましょう。' },
        ],
        romaji: 'Chotto yasumimashou.',
        spanish: 'Vamos a descansar un poco.',
      },
      {
        japanese: '駅で会いましょう。',
        segments: [
          { text: '駅', furigana: 'えき' },
          { text: 'で' },
          { text: '会', furigana: 'あ' },
          { text: 'いましょう。' },
        ],
        romaji: 'Eki de aimashou.',
        spanish: 'Quedemos / encontrémonos en la estación.',
      },
    ],
  },
  {
    id: 'gp-l06-8',
    lessonId: 'l06',
    lessonNumber: 'Lección 6',
    order: 8,
    title: '8. 〜か',
    explanation:
      'Partícula final que solicita la confirmación o el asentimiento del oyente ante una sugerencia (p. ej., «¿Lo hacemos así entonces?»).',
    examples: [
      {
        japanese: 'いいですね。行きましょうか。',
        segments: [
          { text: 'いいですね。' },
          { text: '行', furigana: 'い' },
          { text: 'きましょうか。' },
        ],
        romaji: 'Ii desu ne. Ikimashou ka.',
        spanish: 'Me parece bien. ¿Vamos entonces?',
      },
    ],
  },

  // ==========================================
  // LECCIÓN 7
  // ==========================================
  {
    id: 'gp-l07-1',
    lessonId: 'l07',
    lessonNumber: 'Lección 7',
    order: 1,
    title: '1. S (instrumento / medio) で V',
    explanation:
      'La partícula で indica el medio, herramienta, instrumento o utensilio utilizado para llevar a cabo una acción.',
    examples: [
      {
        japanese: 'はしで食べます。',
        segments: [
          { text: 'はしで' },
          { text: '食', furigana: 'た' },
          { text: 'べます。' },
        ],
        romaji: 'Hashi de tabemasu.',
        spanish: 'Como con palillos.',
      },
      {
        japanese: '日本語でレポートを書きます。',
        segments: [
          { text: '日本語', furigana: 'にほんご' },
          { text: 'でレポートを' },
          { text: '書', furigana: 'か' },
          { text: 'きます。' },
        ],
        romaji: 'Nihongo de repooto o kakimasu.',
        spanish: 'Escribo el informe en japonés.',
      },
      {
        japanese: 'ハサミで紙を切ります。',
        segments: [
          { text: 'ハサミで' },
          { text: '紙', furigana: 'かみ' },
          { text: 'を' },
          { text: '切', furigana: 'き' },
          { text: 'ります。' },
        ],
        romaji: 'Hasami de kami o kirimasu.',
        spanish: 'Corto papel con tijeras.',
      },
    ],
  },
  {
    id: 'gp-l07-2',
    lessonId: 'l07',
    lessonNumber: 'Lección 7',
    order: 2,
    title: '2. 「Palabra / Oración」は 〜語で 何ですか',
    explanation:
      'Pregunta utilizada para averiguar cómo se expresa una frase, palabra o término en un determinado idioma.',
    examples: [
      {
        japanese: '「Arigato」はスペイン語で何ですか。…「Gracias」です。',
        segments: [
          { text: '「Arigato」はスペイン' },
          { text: '語', furigana: 'ご' },
          { text: 'で' },
          { text: '何', furigana: 'なん' },
          { text: 'ですか。…「Gracias」です。' },
        ],
        romaji: '"Arigato" wa Supeingo de nan desu ka. ..."Gracias" desu.',
        spanish: '¿Qué es "Arigato" en español? ...Es "Gracias".',
      },
      {
        japanese: '「Thank you」は日本語で何ですか。…「ありがとう」です。',
        segments: [
          { text: '「Thank you」は' },
          { text: '日本語', furigana: 'にほんご' },
          { text: 'で' },
          { text: '何', furigana: 'なん' },
          { text: 'ですか。…「ありがとう」です。' },
        ],
        romaji: '"Thank you" wa Nihongo de nan desu ka. ..."Arigatou" desu.',
        spanish: '¿Cómo se dice "Thank you" en japonés? ...Es "Arigatou".',
      },
    ],
  },
  {
    id: 'gp-l07-3',
    lessonId: 'l07',
    lessonNumber: 'Lección 7',
    order: 3,
    title: '3. S₁ (persona) に S₂ を あげます, etc.',
    explanation:
      'Indica la entrega, préstamo o regalo de un objeto (S₂) a un destinatario (S₁), el cual va marcado con la partícula に. Se usa con verbos como あげます (dar/regalar), 貸します (prestar), 教えます (enseñar).',
    examples: [
      {
        japanese: '山田さんに花をあげました。',
        segments: [
          { text: '山田', furigana: 'やまだ' },
          { text: 'さんに' },
          { text: '花', furigana: 'はな' },
          { text: 'をあげました。' },
        ],
        romaji: 'Yamada-san ni hana o agemashita.',
        spanish: 'Le regalé flores al Sr. Yamada.',
      },
      {
        japanese: '木村さんに本を貸しました。',
        segments: [
          { text: '木村', furigana: 'きむら' },
          { text: 'さんに' },
          { text: '本', furigana: 'ほん' },
          { text: 'を' },
          { text: '貸', furigana: 'か' },
          { text: 'しました。' },
        ],
        romaji: 'Kimura-san ni hon o kashimashita.',
        spanish: 'Le presté un libro a la Srta. Kimura.',
      },
    ],
  },
  {
    id: 'gp-l07-4',
    lessonId: 'l07',
    lessonNumber: 'Lección 7',
    order: 4,
    title: '4. S₁ (persona) に S₂ を もらいます, etc.',
    explanation:
      'Indica la recepción de un objeto o favor (S₂) proveniente de una persona (S₁), marcado con la partícula に (o から). Se usa con verbos como もらいます (recibir), 借ります (tomar prestado), 習います (aprender de alguien). Si el origen es una institución o empresa, habitualmente se usa から en lugar de に.',
    examples: [
      {
        japanese: '木村さんに本をもらいました。',
        segments: [
          { text: '木村', furigana: 'きむら' },
          { text: 'さんに' },
          { text: '本', furigana: 'ほん' },
          { text: 'をもらいました。' },
        ],
        romaji: 'Kimura-san ni hon o moraimashita.',
        spanish: 'Recibí un libro de la Srta. Kimura.',
      },
      {
        japanese: '銀行からお金を借りました。',
        segments: [
          { text: '銀行', furigana: 'ぎんこう' },
          { text: 'からお' },
          { text: '金', furigana: 'かね' },
          { text: 'を' },
          { text: '借', furigana: 'か' },
          { text: 'りました。' },
        ],
        romaji: 'Ginkou kara okane o karimashita.',
        spanish: 'Pedí dinero prestado al banco.',
      },
    ],
  },
  {
    id: 'gp-l07-5',
    lessonId: 'l07',
    lessonNumber: 'Lección 7',
    order: 5,
    title: '5. もう V ました',
    explanation:
      'Significa "Ya he [hecho la acción]" en el momento de hablar. Si la respuesta es negativa se utiliza siempre まだです ("Todavía no"), pues responder con V ませんでした indicaría que no se realizó en el pasado.',
    examples: [
      {
        japanese: 'もう昼ごはんを食べましたか。…いいえ、まだです。',
        segments: [
          { text: 'もう' },
          { text: '昼', furigana: 'ひる' },
          { text: 'ごはんを' },
          { text: '食', furigana: 'た' },
          { text: 'べましたか。…いいえ、まだです。' },
        ],
        romaji: 'Mou hirugohan o tabemashita ka. ...Iie, mada desu.',
        spanish: '¿Ya comiste el almuerzo? ...No, todavía no.',
      },
      {
        japanese: 'もう荷物を送りましたか。…はい、もう送りました。',
        segments: [
          { text: 'もう' },
          { text: '荷物', furigana: 'にもつ' },
          { text: 'を' },
          { text: '送', furigana: 'おく' },
          { text: 'りましたか。…はい、もう' },
          { text: '送', furigana: 'おく' },
          { text: 'りました。' },
        ],
        romaji: 'Mou nimotsu o okurimashita ka. ...Hai, mou okurimashita.',
        spanish: '¿Ya enviaste el paquete? ...Sí, ya lo envié.',
      },
    ],
  },
  {
    id: 'gp-l07-6',
    lessonId: 'l07',
    lessonNumber: 'Lección 7',
    order: 6,
    title: '6. Omisión de partículas',
    explanation:
      'En conversaciones informales cotidianas, a menudo se suprimen ciertas partículas (como は o を) si el sentido se sobrentiende con claridad.',
    examples: [
      {
        japanese: 'このスプーン、すてきですね。',
        segments: [
          { text: 'このスプーン、すてきですね。' },
        ],
        romaji: 'Kono supuun, suteki desu ne.',
        spanish: 'Esta cuchara es preciosa, ¿verdad? [omisión de は]',
      },
    ],
  },

  // ==========================================
  // LECCIÓN 8
  // ==========================================
  {
    id: 'gp-l08-1',
    lessonId: 'l08',
    lessonNumber: 'Lección 8',
    order: 1,
    title: '1. Adjetivos (い-形容詞 y な-形容詞)',
    explanation:
      'En japonés los adjetivos se clasifican en dos grupos según su morfología y comportamiento sintáctico:\n• Adjetivos-い (i-keiyoushi): terminan en い (como 高い, 大きい, 白い, おいしい).\n• Adjetivos-な (na-keiyoushi): se unen con な al modificar sustantivos (como 親切, 静か, 有名, 元気). ¡Atención!: きれい (hermoso/limpio) y 嫌い (desagradable) son adjetivos-な a pesar de terminar en vocal い.',
    examples: [
      {
        japanese: 'この町は静かです。',
        segments: [
          { text: 'この' },
          { text: '町', furigana: 'まち' },
          { text: 'は' },
          { text: '静', furigana: 'しず' },
          { text: 'かです。' },
        ],
        romaji: 'Kono machi wa shizuka desu.',
        spanish: 'Esta ciudad es tranquila [adjetivo-な].',
      },
      {
        japanese: 'この山は高いです。',
        segments: [
          { text: 'この' },
          { text: '山', furigana: 'やま' },
          { text: 'は' },
          { text: '高', furigana: 'たか' },
          { text: 'いです。' },
        ],
        romaji: 'Kono yama wa takai desu.',
        spanish: 'Esta montaña es alta [adjetivo-い].',
      },
    ],
  },
  {
    id: 'gp-l08-2',
    lessonId: 'l08',
    lessonNumber: 'Lección 8',
    order: 2,
    title: '2. S は A-な です / S は A-い です',
    explanation:
      'Expresa el atributo o cualidad del sujeto en estilo cortés.\n• A-な: se une a です sin な (親切です). En negativo: 親切じゃありません.\n• A-い: se une directamente a です conservando la terminación い (高いです). En negativo: 高くないです (se cambia い por くない).',
    examples: [
      {
        japanese: 'ワット先生は親切です。',
        segments: [
          { text: 'ワット' },
          { text: '先生', furigana: 'せんせい' },
          { text: 'は' },
          { text: '親切', furigana: 'しんせつ' },
          { text: 'です。' },
        ],
        romaji: 'Watto-sensei wa shinsetsu desu.',
        spanish: 'El profesor Watt es amable.',
      },
      {
        japanese: '富士山は高いです。',
        segments: [
          { text: '富士山', furigana: 'ふじさん' },
          { text: 'は' },
          { text: '高', furigana: 'たか' },
          { text: 'いです。' },
        ],
        romaji: 'Fujisan wa takai desu.',
        spanish: 'El Monte Fuji es alto.',
      },
      {
        japanese: '今日は寒くないです。',
        segments: [
          { text: '今日', furigana: 'きょう' },
          { text: 'は' },
          { text: '寒', furigana: 'さむ' },
          { text: 'くないです。' },
        ],
        romaji: 'Kyou wa samukunai desu.',
        spanish: 'Hoy no hace frío.',
      },
    ],
  },
  {
    id: 'gp-l08-3',
    lessonId: 'l08',
    lessonNumber: 'Lección 8',
    order: 3,
    title: '3. A-な な S / A-い S',
    explanation:
      'Para modificar directamente a un sustantivo anteponiéndose a él:\n• Los adjetivos-な conservan la partícula な (親切な人, 静かな所).\n• Los adjetivos-い se anteponen directamente conservando la terminación い (高い山, おいしい料理).',
    examples: [
      {
        japanese: '親切な人。',
        segments: [
          { text: '親切', furigana: 'しんせつ' },
          { text: 'な' },
          { text: '人', furigana: 'ひと' },
          { text: '。' },
        ],
        romaji: 'Shinsetsu na hito.',
        spanish: 'Una persona amable.',
      },
      {
        japanese: '高い山。',
        segments: [
          { text: '高', furigana: 'たか' },
          { text: 'い' },
          { text: '山', furigana: 'やま' },
          { text: '。' },
        ],
        romaji: 'Takai yama.',
        spanish: 'Una montaña alta.',
      },
    ],
  },
  {
    id: 'gp-l08-4',
    lessonId: 'l08',
    lessonNumber: 'Lección 8',
    order: 4,
    title: '4. 〜が、〜',
    explanation:
      'Conjunción que une dos oraciones de forma adversativa o contrastiva ("pero", "sin embargo").',
    examples: [
      {
        japanese: '日本の食べ物はおいしいですが、高いです。',
        segments: [
          { text: '日本', furigana: 'にほん' },
          { text: 'の' },
          { text: '食', furigana: 'た' },
          { text: 'べ' },
          { text: '物', furigana: 'もの' },
          { text: 'はおいしいですが、' },
          { text: '高', furigana: 'たか' },
          { text: 'いです。' },
        ],
        romaji: 'Nihon no tabemono wa oishii desu ga, takai desu.',
        spanish: 'La comida japonesa es deliciosa, pero cara.',
      },
      {
        japanese: 'この寮は古いですが、静かです。',
        segments: [
          { text: 'この' },
          { text: '寮', furigana: 'りょう' },
          { text: 'は' },
          { text: '古', furigana: 'ふる' },
          { text: 'いですが、' },
          { text: '静', furigana: 'しず' },
          { text: 'かです。' },
        ],
        romaji: 'Kono ryou wa furui desu ga, shizuka desu.',
        spanish: 'Esta residencia es antigua, pero es tranquila.',
      },
    ],
  },
  {
    id: 'gp-l08-5',
    lessonId: 'l08',
    lessonNumber: 'Lección 8',
    order: 5,
    title: '5. とても / あまり',
    explanation:
      'Adverbios de grado:\n• とても (muy): acompaña exclusivamente a formas afirmativas.\n• あまり (no mucho): exige obligatoriamente formas negativas.',
    examples: [
      {
        japanese: 'あまり寒くないです。',
        segments: [
          { text: 'あまり' },
          { text: '寒', furigana: 'さむ' },
          { text: 'くないです。' },
        ],
        romaji: 'Amari samukunai desu.',
        spanish: 'No hace mucho frío.',
      },
      {
        japanese: 'とても忙しいです。',
        segments: [
          { text: 'とても' },
          { text: '忙', furigana: 'いそが' },
          { text: 'しいです。' },
        ],
        romaji: 'Totemo isogashii desu.',
        spanish: 'Estoy muy ocupado.',
      },
    ],
  },
  {
    id: 'gp-l08-6',
    lessonId: 'l08',
    lessonNumber: 'Lección 8',
    order: 6,
    title: '6. S は どうですか',
    explanation:
      'Pregunta empleada para pedir la opinión o impresión del interlocutor sobre un lugar, experiencia o estado ("¿Qué tal...?", "¿Cómo es...?").',
    examples: [
      {
        japanese: '日本の生活はどうですか。…楽しいです。',
        segments: [
          { text: '日本', furigana: 'にほん' },
          { text: 'の' },
          { text: '生活', furigana: 'せいかつ' },
          { text: 'はどうですか。…' },
          { text: '楽', furigana: 'たの' },
          { text: 'しいです。' },
        ],
        romaji: 'Nihon no seikatsu wa dou desu ka. ...Tanoshii desu.',
        spanish: '¿Qué tal la vida en Japón? ...Es divertida.',
      },
    ],
  },
  {
    id: 'gp-l08-7',
    lessonId: 'l08',
    lessonNumber: 'Lección 8',
    order: 7,
    title: '7. S₁ は どんな S₂ ですか',
    explanation:
      'Pregunta por las cualidades, tipo o características de un sustantivo dentro de una categoría general ("¿Qué clase de S₂ es S₁?"). Se responde con un adjetivo modificando a S₂.',
    examples: [
      {
        japanese: '奈良はどんな町ですか。…古い町です。',
        segments: [
          { text: '奈良', furigana: 'なら' },
          { text: 'はどんな' },
          { text: '町', furigana: 'まち' },
          { text: 'ですか。…' },
          { text: '古', furigana: 'ふる' },
          { text: 'い' },
          { text: '町', furigana: 'まち' },
          { text: 'です。' },
        ],
        romaji: 'Nara wa donna machi desu ka. ...Furui machi desu.',
        spanish: '¿Qué clase de ciudad es Nara? ...Es una ciudad antigua.',
      },
      {
        japanese: 'サントスさんはどんな人ですか。…親切な人です。',
        segments: [
          { text: 'サントスさんはどんな' },
          { text: '人', furigana: 'ひと' },
          { text: 'ですか。…' },
          { text: '親切', furigana: 'しんせつ' },
          { text: 'な' },
          { text: '人', furigana: 'ひと' },
          { text: 'です。' },
        ],
        romaji: 'Santosu-san wa donna hito desu ka. ...Shinsetsu na hito desu.',
        spanish: '¿Qué clase de persona es Santos? ...Es una persona amable.',
      },
    ],
  },
  {
    id: 'gp-l08-8',
    lessonId: 'l08',
    lessonNumber: 'Lección 8',
    order: 8,
    title: '8. そうですね',
    explanation:
      'Frase o muletilla de pausa reflexiva mientras el hablante medita o piensa la respuesta ("A ver...", "Déjame ver...", "Bueno...").',
    examples: [
      {
        japanese: 'お仕事はどうですか。…そうですね、忙しいですが、おもしろいです。',
        segments: [
          { text: 'お' },
          { text: '仕事', furigana: 'しごと' },
          { text: 'はどうですか。…そうですね、' },
          { text: '忙', furigana: 'いそが' },
          { text: 'しいですが、おもしろいです。' },
        ],
        romaji: 'Oshigoto wa dou desu ka. ...Sou desu ne, isogashii desu ga, omoshiroi desu.',
        spanish: '¿Qué tal el trabajo? ...A ver, es ajetreado, pero interesante.',
      },
    ],
  },

  // ==========================================
  // LECCIÓN 9
  // ==========================================
  {
    id: 'gp-l09-1',
    lessonId: 'l09',
    lessonNumber: 'Lección 9',
    order: 1,
    title: '1. S が あります / わかります / 好きです / 上手です...',
    explanation:
      'Los verbos que indican posesión (あります) o comprensión/capacidad (わかります), así como los adjetivos de preferencia (好き, 嫌い) o habilidad (上手, 下手), marcan su objeto con la partícula が en lugar de を.',
    examples: [
      {
        japanese: 'わたしはイタリア料理が好きです。',
        segments: [
          { text: 'わたしはイタリア' },
          { text: '料理', furigana: 'りょうり' },
          { text: 'が' },
          { text: '好', furigana: 'す' },
          { text: 'きです。' },
        ],
        romaji: 'Watashi wa Itaria ryouri ga suki desu.',
        spanish: 'Me gusta la comida italiana.',
      },
      {
        japanese: '日本語がわかります。',
        segments: [
          { text: '日本語', furigana: 'にほんご' },
          { text: 'がわかります。' },
        ],
        romaji: 'Nihongo ga wakarimasu.',
        spanish: 'Entiendo japonés.',
      },
      {
        japanese: '車があります。',
        segments: [
          { text: '車', furigana: 'くるま' },
          { text: 'があります。' },
        ],
        romaji: 'Kuruma ga arimasu.',
        spanish: 'Tengo un coche.',
      },
    ],
  },
  {
    id: 'gp-l09-2',
    lessonId: 'l09',
    lessonNumber: 'Lección 9',
    order: 2,
    title: '2. どんな S',
    explanation:
      'Pregunta para pedir especificación sobre preferencias o tipos concretos dentro de una categoría general ("¿Qué tipo de S te gusta?").',
    examples: [
      {
        japanese: 'どんなスポーツが好きですか。…野球が好きです。',
        segments: [
          { text: 'どんなスポーツが' },
          { text: '好', furigana: 'す' },
          { text: 'きですか。…' },
          { text: '野球', furigana: 'やきゅう' },
          { text: 'が' },
          { text: '好', furigana: 'す' },
          { text: 'きです。' },
        ],
        romaji: 'Donna supootsu ga suki desu ka. ...Yakyuu ga suki desu.',
        spanish: '¿Qué tipo de deportes te gustan? ...Me gusta el béisbol.',
      },
    ],
  },
  {
    id: 'gp-l09-3',
    lessonId: 'l09',
    lessonNumber: 'Lección 9',
    order: 3,
    title: '3. よく / だいたい / たくさん / あまり / 全然',
    explanation:
      'Adverbios de grado y cantidad:\n• Con afirmativo: よく (bien / a menudo), だいたい (más o menos / casi todo), たくさん (mucho), 少し (un poco).\n• Con negativo: あまり (no mucho + neg.), 全然 (nada en absoluto + neg.).',
    examples: [
      {
        japanese: '英語がよくわかります。',
        segments: [
          { text: '英語', furigana: 'えいご' },
          { text: 'がよくわかります。' },
        ],
        romaji: 'Eigo ga yoku wakarimasu.',
        spanish: 'Entiendo muy bien el inglés.',
      },
      {
        japanese: '漢字が全然わかりません。',
        segments: [
          { text: '漢字', furigana: 'かんじ' },
          { text: 'が' },
          { text: '全然', furigana: 'ぜんぜん' },
          { text: 'わかりません。' },
        ],
        romaji: 'Kanji ga zenzen wakarimasen.',
        spanish: 'No entiendo nada de kanji.',
      },
    ],
  },
  {
    id: 'gp-l09-4',
    lessonId: 'l09',
    lessonNumber: 'Lección 9',
    order: 4,
    title: '4. 〜から、〜',
    explanation:
      'Expresa causa o razón ("porque...", "puesto que..."). Puede colocarse uniendo dos cláusulas o bien al final de una respuesta justificativa.',
    examples: [
      {
        japanese: '時間がありませんから、新聞を読みません。',
        segments: [
          { text: '時間', furigana: 'じかん' },
          { text: 'がありませんから、' },
          { text: '新聞', furigana: 'しんぶん' },
          { text: 'を' },
          { text: '読', furigana: 'よ' },
          { text: 'みません。' },
        ],
        romaji: 'Jikan ga arimasen kara, shinbun o yomimasen.',
        spanish: 'Como no tengo tiempo, no leo el periódico.',
      },
    ],
  },
  {
    id: 'gp-l09-5',
    lessonId: 'l09',
    lessonNumber: 'Lección 9',
    order: 5,
    title: '5. どうして',
    explanation:
      'Interrogativo para preguntar el motivo o razón de algo ("¿Por qué?"). La respuesta siempre concluye con 〜から.',
    examples: [
      {
        japanese: 'どうして朝新聞を読みませんか。…時間がありませんから。',
        segments: [
          { text: 'どうして' },
          { text: '朝', furigana: 'あさ' },
          { text: '新聞', furigana: 'しんぶん' },
          { text: 'を' },
          { text: '読', furigana: 'よ' },
          { text: 'みませんか。…' },
          { text: '時間', furigana: 'じかん' },
          { text: 'がありませんから。' },
        ],
        romaji: 'Doushite asa shinbun o yomimasen ka. ...Jikan ga arimasen kara.',
        spanish: '¿Por qué no lees el periódico por la mañana? ...Porque no tengo tiempo.',
      },
    ],
  },

  // ==========================================
  // LECCIÓN 10
  // ==========================================
  {
    id: 'gp-l10-1',
    lessonId: 'l10',
    lessonNumber: 'Lección 10',
    order: 1,
    title: '1. S が あります / います',
    explanation:
      'Indican la existencia o posesión en el espacio:\n• あります: para seres inanimados, cosas, plantas u objetos.\n• います: para seres animados con movimiento propio: personas y animales.',
    examples: [
      {
        japanese: 'コンピューターがあります。',
        segments: [
          { text: 'コンピューターがあります。' },
        ],
        romaji: 'Konpyuutaa ga arimasu.',
        spanish: 'Hay una computadora.',
      },
      {
        japanese: '男の人がいます。',
        segments: [
          { text: '男', furigana: 'おとこ' },
          { text: 'の' },
          { text: '人', furigana: 'ひと' },
          { text: 'がいます。' },
        ],
        romaji: 'Otoko no hito ga imasu.',
        spanish: 'Hay un hombre.',
      },
      {
        japanese: '犬がいます。',
        segments: [
          { text: '犬', furigana: 'いぬ' },
          { text: 'がいます。' },
        ],
        romaji: 'Inu ga imasu.',
        spanish: 'Hay un perro.',
      },
    ],
  },
  {
    id: 'gp-l10-2',
    lessonId: 'l10',
    lessonNumber: 'Lección 10',
    order: 2,
    title: '2. Lugar に S が あります / います',
    explanation:
      'Expresa qué elemento o ser se encuentra en un lugar determinado. El lugar se marca con la partícula に (lugar de existencia) y el sujeto que existe se marca con が.',
    examples: [
      {
        japanese: '部屋にテレビがあります。',
        segments: [
          { text: '部屋', furigana: 'へや' },
          { text: 'にテレビがあります。' },
        ],
        romaji: 'Heya ni terebi ga arimasu.',
        spanish: 'En la habitación hay una televisión.',
      },
      {
        japanese: '庭に犬がいます。',
        segments: [
          { text: '庭', furigana: 'にわ' },
          { text: 'に' },
          { text: '犬', furigana: 'いぬ' },
          { text: 'がいます。' },
        ],
        romaji: 'Niwa ni inu ga imasu.',
        spanish: 'En el jardín hay un perro.',
      },
    ],
  },
  {
    id: 'gp-l10-3',
    lessonId: 'l10',
    lessonNumber: 'Lección 10',
    order: 3,
    title: '3. S は Lugar に あります / います',
    explanation:
      'Se usa cuando el tema es el objeto o persona (marcado con は) y deseamos especificar dónde se ubica o localiza.',
    examples: [
      {
        japanese: '東京ディズニードームは千葉県にあります。',
        segments: [
          { text: '東京ディズニードームは' },
          { text: '千葉県', furigana: 'ちばけん' },
          { text: 'にあります。' },
        ],
        romaji: 'Toukyou Dizuniidoomu wa Chiba-ken ni arimasu.',
        spanish: 'Tokyo DisneyDome está en la prefectura de Chiba.',
      },
      {
        japanese: 'ミラーさんは事務所にいます。',
        segments: [
          { text: 'ミラーさんは' },
          { text: '事務所', furigana: 'じむしょ' },
          { text: 'にいます。' },
        ],
        romaji: 'Miraa-san wa jimusho ni imasu.',
        spanish: 'El Sr. Miller está en la oficina.',
      },
    ],
  },
  {
    id: 'gp-l10-4',
    lessonId: 'l10',
    lessonNumber: 'Lección 10',
    order: 4,
    title: '4. S₁ (objeto / persona / lugar) の S₂ (localización)',
    explanation:
      'Combina sustantivos posicionales (上 encima, 下 debajo, 前 delante, 後ろ detrás, 中 dentro, 隣 al lado, 近く cerca, 間 entre) mediante の para precisar la ubicación relativa.',
    examples: [
      {
        japanese: '机の上に本があります。',
        segments: [
          { text: '机', furigana: 'つくえ' },
          { text: 'の' },
          { text: '上', furigana: 'うえ' },
          { text: 'に' },
          { text: '本', furigana: 'ほん' },
          { text: 'があります。' },
        ],
        romaji: 'Tsukue no ue ni hon ga arimasu.',
        spanish: 'Hay un libro encima de la mesa.',
      },
      {
        japanese: '箱の中に手紙や写真があります。',
        segments: [
          { text: '箱', furigana: 'はこ' },
          { text: 'の' },
          { text: '中', furigana: 'なか' },
          { text: 'に' },
          { text: '手紙', furigana: 'てがみ' },
          { text: 'や' },
          { text: '写真', furigana: 'しゃしん' },
          { text: 'があります。' },
        ],
        romaji: 'Hako no naka ni tegami ya shashin ga arimasu.',
        spanish: 'Dentro de la caja hay cartas y fotos.',
      },
    ],
  },
  {
    id: 'gp-l10-5',
    lessonId: 'l10',
    lessonNumber: 'Lección 10',
    order: 5,
    title: '5. S₁ や S₂',
    explanation:
      'La partícula や se utiliza para enumerar sustantivos de forma representativa o no exhaustiva ("y cosas como..."), a menudo acompañada de など.',
    examples: [
      {
        japanese: '箱の中に手紙や写真があります。',
        segments: [
          { text: '箱', furigana: 'はこ' },
          { text: 'の' },
          { text: '中', furigana: 'なか' },
          { text: 'に' },
          { text: '手紙', furigana: 'てがみ' },
          { text: 'や' },
          { text: '写真', furigana: 'しゃしん' },
          { text: 'があります。' },
        ],
        romaji: 'Hako no naka ni tegami ya shashin ga arimasu.',
        spanish: 'Dentro de la caja hay cartas, fotos, etc.',
      },
    ],
  },
  {
    id: 'gp-l10-6',
    lessonId: 'l10',
    lessonNumber: 'Lección 10',
    order: 6,
    title: '6. アジアストアですか',
    explanation:
      'Uso de la interrogante al final para confirmar si un lugar específico o tienda es el que busca o pregunta el interlocutor.',
    examples: [
      {
        japanese: 'アジアストアですか。あそこですよ。',
        segments: [
          { text: 'アジアストアですか。あそこですよ。' },
        ],
        romaji: 'Ajia Sutoa desu ka. Asoko desu yo.',
        spanish: '¿Asia Store? Está allí, fíjese.',
      },
    ],
  },

  // ==========================================
  // LECCIÓN 11
  // ==========================================
  {
    id: 'gp-l11-1',
    lessonId: 'l11',
    lessonNumber: 'Lección 11',
    order: 1,
    title: '1. Numerales y sufijos de conteo (助数詞)',
    explanation:
      'Para contar objetos generales de 1 a 10 se usan los números nativos japoneses (ひとつ, ふたつ, ..., とお). A partir de 11 se utilizan los números cardinales ordinarios. Para elementos específicos se añaden sufijos de conteo (clasificadores) según la forma o naturaleza del objeto.',
    subPoints: [
      {
        title: 'Contadores nativos (1 a 10)',
        explanation:
          'ひとつ (1), ふたつ (2), みっつ (3), よっつ (4), いつつ (5), むっつ (6), ななつ (7), やっつ (8), ここのつ (9), とお (10). Se usan con objetos en general que no tienen un clasificador específico.',
        examples: [
          {
            japanese: 'りんごを4つ買いました。',
            segments: [
              { text: 'りんごを' },
              { text: '4つ', furigana: 'よっつ' },
              { text: '買いました', furigana: 'かいま' },
              { text: 'した。' },
            ],
            romaji: 'Ringo o yottsu kaimashita.',
            spanish: 'Compré 4 manzanas.',
          },
        ],
      },
      {
        title: 'Sufijos de conteo principales',
        explanation:
          '〜人 (にん): Personas (excepciones: ひとり [1 persona], ふたり [2 personas], 4 personas es よにん).\n〜台 (だい): Vehículos, maquinaria y aparatos eléctricos.\n〜枚 (まい): Objetos planos y finos (papel, fotos, camisetas, sellos, platos).\n〜回 (かい): Frecuencia o número de veces.\n〜時間 (じかん): Duración en horas.',
        examples: [
          {
            japanese: '外国人の学生が2人います。',
            segments: [
              { text: '外国人', furigana: 'がいこくじん' },
              { text: 'の' },
              { text: '学生', furigana: 'がくせい' },
              { text: 'が' },
              { text: '2人', furigana: 'ふたり' },
              { text: 'います。' },
            ],
            romaji: 'Gaikokujin no gakusei ga futari imasu.',
            spanish: 'Hay 2 estudiantes extranjeros.',
          },
          {
            japanese: '切手を8枚買いました。',
            segments: [
              { text: '切手', furigana: 'きって' },
              { text: 'を' },
              { text: '8枚', furigana: 'はちまい' },
              { text: '買いました', furigana: 'かいま' },
              { text: 'した。' },
            ],
            romaji: 'Kitte o hachimai kaimashita.',
            spanish: 'Compré 8 sellos.',
          },
        ],
      },
    ],
  },
  {
    id: 'gp-l11-2',
    lessonId: 'l11',
    lessonNumber: 'Lección 11',
    order: 2,
    title: '2. Posición y uso de los cuantificadores',
    explanation:
      'El cuantificador (número + sufijo clasificador) suele colocarse inmediatamente después del sustantivo y de la partícula que lo acompaña (S + partícula + cuantificador + V).',
    subPoints: [
      {
        title: 'Orden en la oración',
        explanation:
          'A diferencia del español, donde el número va delante del sustantivo, en japonés la posición estándar es tras la partícula: 「りんご を 4つ 買いました」.',
        examples: [
          {
            japanese: '富士大学に外国人の先生が3人います。',
            segments: [
              { text: '富士大学', furigana: 'ふじだいがく' },
              { text: 'に' },
              { text: '外国人', furigana: 'がいこくじん' },
              { text: 'の' },
              { text: '先生', furigana: 'せんせい' },
              { text: 'が' },
              { text: '3人', furigana: 'さんにん' },
              { text: 'います。' },
            ],
            romaji: 'Fuji daigaku ni gaikokujin no sensei ga sannin imasu.',
            spanish: 'En la Universidad Fuji hay 3 profesores extranjeros.',
          },
        ],
      },
      {
        title: 'Preguntas por cantidad',
        explanation:
          'Para preguntar por cantidades contadas con ひとつ〜とお se usa いくつ. Para sufijos específicos se utiliza 何 (なん) + sufijo: 何人 (なんにん), 何枚 (なんまい), 何台 (なんだい), 何時間 (なんじかん), 何回 (なんかい).',
        examples: [
          {
            japanese: '兄弟は何人ですか。……4人です。',
            segments: [
              { text: '兄弟', furigana: 'きょうだい' },
              { text: 'は' },
              { text: '何人', furigana: 'なんにん' },
              { text: 'ですか。……' },
              { text: '4人', furigana: 'よにん' },
              { text: 'です。' },
            ],
            romaji: 'Kyoudai wa nannin desu ka. ...Yonin desu.',
            spanish: '¿Cuántos hermanos son? ...Somos 4.',
          },
          {
            japanese: 'みかんをいくつ買いましたか。……8つ買いました。',
            segments: [
              { text: 'みかんをいくつ' },
              { text: '買いました', furigana: 'かいま' },
              { text: 'したか。……' },
              { text: '8つ', furigana: 'やっつ' },
              { text: '買いました', furigana: 'かいま' },
              { text: 'した。' },
            ],
            romaji: 'Mikan o ikutsu kaimashita ka. ...Yattsu kaimashita.',
            spanish: '¿Cuántas mandarinas compraste? ...Compré 8.',
          },
        ],
      },
    ],
  },
  {
    id: 'gp-l11-3',
    lessonId: 'l11',
    lessonNumber: 'Lección 11',
    order: 3,
    title: '3. Cuantificador (período) に V',
    explanation:
      'Expresa la frecuencia con la que se lleva a cabo una acción en un determinado intervalo de tiempo (período temporal + に + cuantificador de veces + verbo).',
    examples: [
      {
        japanese: '1週間に2回テニスをします。',
        segments: [
          { text: '1週間', furigana: 'いっしゅうかん' },
          { text: 'に' },
          { text: '2回', furigana: 'にかい' },
          { text: 'テニスをします。' },
        ],
        romaji: 'Isshuukan ni nikai tenisu o shimasu.',
        spanish: 'Juego al tenis 2 veces a la semana.',
      },
      {
        japanese: '1か月に2回映画を見ます。',
        segments: [
          { text: '1か月', furigana: 'いっかげつ' },
          { text: 'に' },
          { text: '2回', furigana: 'にかい' },
          { text: '映画', furigana: 'えいが' },
          { text: 'を' },
          { text: '見ます', furigana: 'みます' },
          { text: '。' },
        ],
        romaji: 'Ikkagetsu ni nikai eiga o mimasu.',
        spanish: 'Veo películas 2 veces al mes.',
      },
    ],
  },
  {
    id: 'gp-l11-4',
    lessonId: 'l11',
    lessonNumber: 'Lección 11',
    order: 4,
    title: '4. Cuantificador だけ / S だけ',
    explanation:
      'La partícula だけ se añade tras un cuantificador o un sustantivo para significar "solamente", "únicamente" o "tan solo", expresando que no hay más que eso.',
    examples: [
      {
        japanese: '休みは日曜日だけです。',
        segments: [
          { text: '休み', furigana: 'やすみ' },
          { text: 'は' },
          { text: '日曜日', furigana: 'にちようび' },
          { text: 'だけです。' },
        ],
        romaji: 'Yasumi wa nichiyoubi dake desu.',
        spanish: 'El único día de descanso es el domingo.',
      },
      {
        japanese: '3か月だけ勉強しました。',
        segments: [
          { text: '3か月', furigana: 'さんかげつ' },
          { text: 'だけ' },
          { text: '勉強', furigana: 'べんきょう' },
          { text: 'しました。' },
        ],
        romaji: 'Sankagetsu dake benkyou shimashita.',
        spanish: 'Estudié tan solo 3 meses.',
      },
    ],
  },

  // ==========================================
  // LECCIÓN 12
  // ==========================================
  {
    id: 'gp-l12-1',
    lessonId: 'l12',
    lessonNumber: 'Lección 12',
    order: 1,
    title: '1. Tiempos verbales de oraciones nominales y adjetivas-な',
    explanation:
      'Las oraciones con predicado nominal (sustantivo + です) y las de adjetivos de tipo な siguen idénticas pautas de conjugación en presente/futuro y en tiempo pasado.',
    subPoints: [
      {
        title: 'Presente / Futuro',
        explanation:
          'Afirmativo: 〜です (雨です / 静かです)\nNegativo: 〜じゃ（では）ありません (雨じゃありません / 静かじゃありません)',
      },
      {
        title: 'Pasado',
        explanation:
          'Afirmativo: 〜でした (雨でした / 静かでした)\nNegativo: 〜じゃ（では）ありませんでした (雨じゃありませんでした / 静かじゃありませんでした)',
        examples: [
          {
            japanese: 'きのうは雨でした。',
            segments: [
              { text: 'きのうは' },
              { text: '雨', furigana: 'あめ' },
              { text: 'でした。' },
            ],
            romaji: 'Kinou wa ame deshita.',
            spanish: 'Ayer llovió (fue un día lluvioso).',
          },
          {
            japanese: '京都は静かじゃありませんでした。',
            segments: [
              { text: '京都', furigana: 'きょうと' },
              { text: 'は' },
              { text: '静か', furigana: 'しずか' },
              { text: 'じゃありませんでした。' },
            ],
            romaji: 'Kyouto wa shizuka ja arimasen deshita.',
            spanish: 'Kioto no estaba nada tranquilo.',
          },
        ],
      },
    ],
  },
  {
    id: 'gp-l12-2',
    lessonId: 'l12',
    lessonNumber: 'Lección 12',
    order: 2,
    title: '2. Tiempos verbales de adjetivos-い',
    explanation:
      'Los adjetivos de tipo い conjugan modificando la vocal final 〜い para expresar tiempo y polaridad.',
    subPoints: [
      {
        title: 'Presente / Futuro',
        explanation:
          'Afirmativo: 〜いです (暑いです)\nNegativo: 〜くないです (暑くないです)',
      },
      {
        title: 'Pasado',
        explanation:
          'Afirmativo: Se sustituye la 〜い final por 〜かったです (暑かったです)\nNegativo: Se sustituye la 〜い final por 〜くなかったです (暑くなかったです)',
        examples: [
          {
            japanese: 'きのうは暑かったです。',
            segments: [
              { text: 'きのうは' },
              { text: '暑かった', furigana: 'あつかった' },
              { text: 'です。' },
            ],
            romaji: 'Kinou wa atsukatta desu.',
            spanish: 'Ayer hizo calor.',
          },
          {
            japanese: '旅行はおもしろくなかったです。',
            segments: [
              { text: '旅行', furigana: 'りょこう' },
              { text: 'はおもしろくなかったです。' },
            ],
            romaji: 'Ryokou wa omoshirokunakatta desu.',
            spanish: 'El viaje no fue divertido / interesante.',
          },
        ],
      },
      {
        title: 'Excepción: いい (bueno)',
        explanation:
          'El adjetivo いい toma como base histórica よい: en pasado afirmativo es よかったです, y en pasado negativo es よくなかったです.',
        examples: [
          {
            japanese: 'きのうは天気がよかったです。',
            segments: [
              { text: 'きのうは' },
              { text: '天気', furigana: 'てんき' },
              { text: 'がよかったです。' },
            ],
            romaji: 'Kinou wa tenki ga yokatta desu.',
            spanish: 'Ayer hizo buen tiempo.',
          },
        ],
      },
    ],
  },
  {
    id: 'gp-l12-3',
    lessonId: 'l12',
    lessonNumber: 'Lección 12',
    order: 3,
    title: '3. S₁ は S₂ より A です',
    explanation:
      'Estructura comparativa de superioridad. Expresa que S₁ tiene en mayor grado la cualidad denotada por el adjetivo A en comparación con el punto de referencia S₂ ("S₁ es más A que S₂").',
    examples: [
      {
        japanese: '北海道は九州より大きいです。',
        segments: [
          { text: '北海道', furigana: 'ほっかいどう' },
          { text: 'は' },
          { text: '九州', furigana: 'きゅうしゅう' },
          { text: 'より' },
          { text: '大きい', furigana: 'おおきい' },
          { text: 'です。' },
        ],
        romaji: 'Hokkaidou wa Kyuushuu yori ookii desu.',
        spanish: 'Hokkaido es más grande que Kyushu.',
      },
      {
        japanese: '京都は大阪より静かです。',
        segments: [
          { text: '京都', furigana: 'きょうと' },
          { text: 'は' },
          { text: '大阪', furigana: 'おおさか' },
          { text: 'より' },
          { text: '静か', furigana: 'しずか' },
          { text: 'です。' },
        ],
        romaji: 'Kyouto wa Oosaka yori shizuka desu.',
        spanish: 'Kioto es más tranquilo que Osaka.',
      },
    ],
  },
  {
    id: 'gp-l12-4',
    lessonId: 'l12',
    lessonNumber: 'Lección 12',
    order: 4,
    title: '4. S₁ と S₂ と どちらが A ですか',
    explanation:
      'Pregunta comparativa para contrastar dos opciones (S₁ y S₂). La respuesta modelo utiliza «S₁（S₂）の ほうが A です» ("S₁ es más A"). Si ambas opciones son equivalentes, se responde «どちらも A です» ("ambos son A").',
    examples: [
      {
        japanese: 'サッカーと野球とどちらがおもしろいですか。……サッカーのほうがおもしろいです。',
        segments: [
          { text: 'サッカーと' },
          { text: '野球', furigana: 'やきゅう' },
          { text: 'とどちらがおもしろいですか。……サッカーのほうが' },
          { text: 'おもしろいです。' },
        ],
        romaji: 'Sakkaa to yakyuu to dochira ga omoshiroi desu ka. ...Sakkaa no hou ga omoshiroi desu.',
        spanish: 'Entre el fútbol y el béisbol, ¿cuál es más interesante? ...El fútbol es más interesante.',
      },
      {
        japanese: '肉と魚とどちらが好きですか。……どちらも好きです。',
        segments: [
          { text: '肉', furigana: 'にく' },
          { text: 'と' },
          { text: '魚', furigana: 'さかな' },
          { text: 'とどちらが' },
          { text: '好き', furigana: 'すき' },
          { text: 'ですか。……どちらも' },
          { text: '好き', furigana: 'すき' },
          { text: 'です。' },
        ],
        romaji: 'Niku to sakana to dochira ga suki desu ka. ...Dochira mo suki desu.',
        spanish: 'Entre la carne y el pescado, ¿cuál le gusta más? ...Me gustan los dos.',
      },
    ],
  },
  {
    id: 'gp-l12-5',
    lessonId: 'l12',
    lessonNumber: 'Lección 12',
    order: 5,
    title: '5. S₁［の中］で 何 / どこ / だれ / いつ が いちばん A ですか',
    explanation:
      'Estructura superlativa. Interroga por el elemento que destaca en mayor grado (いちばん) dentro de una categoría o colectivo designado por S₁. Se responde con «S₂ が いちばん A です».',
    subPoints: [
      {
        title: 'Elección de palabra interrogativa',
        explanation:
          'Se selecciona la palabra interrogativa adecuada a la naturaleza del elemento:\n• 何 (なに): cosas o actividades\n• どこ: lugares\n• だれ: personas\n• いつ: fechas o estaciones temporales',
        examples: [
          {
            japanese: '日本料理［の中］で何がいちばん好きですか。……てんぷらがいちばん好きです。',
            segments: [
              { text: '日本料理', furigana: 'にほんりょうり' },
              { text: '［の' },
              { text: '中', furigana: 'なか' },
              { text: '］で' },
              { text: '何', furigana: 'なに' },
              { text: 'がいちばん' },
              { text: '好き', furigana: 'すき' },
              { text: 'ですか。……てんぷらがいちばん' },
              { text: '好き', furigana: 'すき' },
              { text: 'です。' },
            ],
            romaji: 'Nihon-ryouri [no naka] de nani ga ichiban suki desu ka. ...Tenpura ga ichiban suki desu.',
            spanish: 'De la cocina japonesa, ¿qué es lo que más le gusta? ...La tempura es lo que más me gusta.',
          },
          {
            japanese: '1年でいつがいちばん寒いですか。……2月がいちばん寒いです。',
            segments: [
              { text: '1年', furigana: 'いちねん' },
              { text: 'でいつがいちばん' },
              { text: '寒い', furigana: 'さむい' },
              { text: 'ですか。……' },
              { text: '2月', furigana: 'にがつ' },
              { text: 'がいちばん' },
              { text: '寒い', furigana: 'さむい' },
              { text: 'です。' },
            ],
            romaji: 'Ichinen de itsu ga ichiban samui desu ka. ...Nigatsu ga ichiban samui desu.',
            spanish: 'En todo el año, ¿cuándo hace más frío? ...Febrero es el mes más frío.',
          },
        ],
      },
    ],
  },
  {
    id: 'gp-l12-6',
    lessonId: 'l12',
    lessonNumber: 'Lección 12',
    order: 6,
    title: '6. A の (Sustitución nominal)',
    explanation:
      'La partícula の se emplea como sustituto de un sustantivo mencionado con anterioridad para evitar su repetición ("el de...", "el [adjetivo]").',
    examples: [
      {
        japanese: '赤い鞄と黒い鞄とどちらがいいですか。……黒いの一をください。',
        segments: [
          { text: '赤い', furigana: 'あかい' },
          { text: '鞄', furigana: 'かばん' },
          { text: 'と' },
          { text: '黒い', furigana: 'くろい' },
          { text: '鞄', furigana: 'かばん' },
          { text: 'とどちらがいいですか。……' },
          { text: '黒い', furigana: 'くろい' },
          { text: 'の［を］ください。' },
        ],
        romaji: 'Akai kaban to kuroi kaban to dochira ga ii desu ka. ...Kuroi no [o] kudasai.',
        spanish: 'Entre el bolso rojo y el negro, ¿cuál prefiere? ...Deme el negro, por favor.',
      },
    ],
  },

  // ==========================================
  // LECCIÓN 13
  // ==========================================
  {
    id: 'gp-l13-1',
    lessonId: 'l13',
    lessonNumber: 'Lección 13',
    order: 1,
    title: '1. S が 欲しいです',
    explanation:
      'Expresa el deseo personal del hablante de poseer o adquirir una cosa u objeto (S). El elemento deseado se marca con la partícula が (y no を). Forma negativa: 欲しくないです. Solo se utiliza para deseos en primera persona o preguntas directas en segunda persona.',
    examples: [
      {
        japanese: 'わたしは車が欲しいです。',
        segments: [
          { text: 'わたしは' },
          { text: '車', furigana: 'くるま' },
          { text: 'が' },
          { text: '欲しい', furigana: 'ほしい' },
          { text: 'です。' },
        ],
        romaji: 'Watashi wa kuruma ga hoshii desu.',
        spanish: 'Quiero un coche.',
      },
      {
        japanese: '今何がいちばん欲しいですか。……広い家が欲しいです。',
        segments: [
          { text: '今', furigana: 'いま' },
          { text: '何', furigana: 'なに' },
          { text: 'がいちばん' },
          { text: '欲しい', furigana: 'ほしい' },
          { text: 'ですか。……' },
          { text: '広い', furigana: 'ひろい' },
          { text: '家', furigana: 'いえ' },
          { text: 'が' },
          { text: '欲しい', furigana: 'ほしい' },
          { text: 'です。' },
        ],
        romaji: 'Ima nani ga ichiban hoshii desu ka. ...Hiroi ie ga hoshii desu.',
        spanish: '¿Qué es lo que más deseas ahora? ...Quiero una casa espaciosa.',
      },
    ],
  },
  {
    id: 'gp-l13-2',
    lessonId: 'l13',
    lessonNumber: 'Lección 13',
    order: 2,
    title: '2. V（forma-ます）たいです',
    explanation:
      'Expresa el deseo del hablante de realizar una acción. Se forma eliminando ます de la forma cortés y añadiendo たいです. El complemento directo de los verbos transitivos puede marcarse indistintamente con を o con が (que enfatiza el objeto deseado). Se conjuga exactamente como un adjetivo い.',
    examples: [
      {
        japanese: 'わたしはすしを食べたいです。',
        segments: [
          { text: 'わたしはすしを' },
          { text: '食べたい', furigana: 'たべたい' },
          { text: 'です。' },
        ],
        romaji: 'Watashi wa sushi o tabetai desu.',
        spanish: 'Quiero comer sushi.',
      },
      {
        japanese: 'のどが渇きましたから、何か飲みたいです。',
        segments: [
          { text: 'のどが' },
          { text: '渇きました', furigana: 'かわきました' },
          { text: 'から、' },
          { text: '何か', furigana: 'なにか' },
          { text: '飲みたい', furigana: 'のみたい' },
          { text: 'です。' },
        ],
        romaji: 'Nodo ga kawakimashita kara, nanika nomitai desu.',
        spanish: 'Tengo sed, así que quiero beber algo.',
      },
      {
        japanese: '今日はおもしろい映画を見に行きたいです。',
        segments: [
          { text: '今日', furigana: 'きょう' },
          { text: 'はおもしろい' },
          { text: '映画', furigana: 'えいが' },
          { text: 'を' },
          { text: '見に', furigana: 'みに' },
          { text: '行きたい', furigana: 'いきたい' },
          { text: 'です。' },
        ],
        romaji: 'Kyou wa omoshiroi eiga o mi ni ikitai desu.',
        spanish: 'Hoy quiero ir a ver una película entretenida.',
      },
    ],
  },
  {
    id: 'gp-l13-3',
    lessonId: 'l13',
    lessonNumber: 'Lección 13',
    order: 3,
    title: '3. S (lugar) へ V-ます / S に 行きます / 来ます / 帰ります',
    explanation:
      'Indica el propósito u objetivo de un desplazamiento espacial con verbos de movimiento (行きます, 来ます, 帰ります). El objetivo se expresa con la raíz verbal (forma ます sin ます) o con un sustantivo de acción (買い物, 散歩), seguido de la partícula に.',
    examples: [
      {
        japanese: 'わたしはフランスへ料理を習いに行きます。',
        segments: [
          { text: 'わたしはフランスへ' },
          { text: '料理', furigana: 'りょうり' },
          { text: 'を' },
          { text: '習いに', furigana: 'ならいに' },
          { text: '行きます', furigana: 'いきます' },
          { text: '。' },
        ],
        romaji: 'Watashi wa Furansu e ryouri o narai ni ikimasu.',
        spanish: 'Voy a Francia a aprender gastronomía.',
      },
      {
        japanese: '日本へ美術の勉強に来ました。',
        segments: [
          { text: '日本', furigana: 'にほん' },
          { text: 'へ' },
          { text: '美術', furigana: 'びじゅつ' },
          { text: 'の' },
          { text: '勉強', furigana: 'べんきょう' },
          { text: 'に' },
          { text: '来ました', furigana: 'きました' },
          { text: '。' },
        ],
        romaji: 'Nihon e bijutsu no benkyou ni kimashita.',
        spanish: 'Vine a Japón a estudiar bellas artes.',
      },
      {
        japanese: 'デパートへ買い物に行きます。',
        segments: [
          { text: 'デパートへ' },
          { text: '買い物', furigana: 'かいもの' },
          { text: 'に' },
          { text: '行きます', furigana: 'いきます' },
          { text: '。' },
        ],
        romaji: 'Depaato e kaimono ni ikimasu.',
        spanish: 'Voy a los grandes almacenes de compras.',
      },
    ],
  },
  {
    id: 'gp-l13-4',
    lessonId: 'l13',
    lessonNumber: 'Lección 13',
    order: 4,
    title: '4. どこか / 何か (Indefinidos)',
    explanation:
      'La adición de la partícula か a las palabras interrogativas forma pronombres indefinidos: どこか ("algún lugar / a alguna parte"), 何か ("algo"), だれか ("alguien"), いつか ("alguna vez"). Con verbos de movimiento, la partícula へ que sigue a どこか se omite con frecuencia; de igual modo, を tras 何か suele omitirse.',
    examples: [
      {
        japanese: '冬休みはどこか行きましたか。……ええ、北海道へ行きました。',
        segments: [
          { text: '冬休み', furigana: 'ふゆやすみ' },
          { text: 'はどこか' },
          { text: '行きました', furigana: 'いきました' },
          { text: 'か。……ええ、' },
          { text: '北海道', furigana: 'ほっかいどう' },
          { text: 'へ' },
          { text: '行きました', furigana: 'いきました' },
          { text: '。' },
        ],
        romaji: 'Fuyuyasumi wa dokoka ikimashita ka. ...Ee, Hokkaidou e ikimashita.',
        spanish: '¿Fuiste a algún sitio en vacaciones de invierno? ...Sí, fui a Hokkaido.',
      },
      {
        japanese: '何か飲みませんか。',
        segments: [
          { text: '何か', furigana: 'なにか' },
          { text: '飲みませんか', furigana: 'のみません' },
          { text: 'か。' },
        ],
        romaji: 'Nanika nomimasen ka.',
        spanish: '¿Tomamos algo?',
      },
    ],
  },
  {
    id: 'gp-l13-5',
    lessonId: 'l13',
    lessonNumber: 'Lección 13',
    order: 5,
    title: '5. Prefijo ご〜',
    explanation:
      'Prefijo honorífico de cortesía que se antepone a sustantivos de origen sino-japonés (kango) para manifestar deferencia y respeto hacia el oyente o sus allegados.',
    examples: [
      {
        japanese: 'ご注文は？……定食をお願いします。',
        segments: [
          { text: 'ご' },
          { text: '注文', furigana: 'ちゅうもん' },
          { text: 'は？……' },
          { text: '定食', furigana: 'ていしょく' },
          { text: 'をお' },
          { text: '願', furigana: 'ねが' },
          { text: 'いします。' },
        ],
        romaji: 'Gochuumon wa? ...Teishoku o onegaishimasu.',
        spanish: '¿Qué va a pedir? ...El menú del día, por favor.',
      },
      {
        japanese: 'ご家族はお元気ですか。',
        segments: [
          { text: 'ご' },
          { text: '家族', furigana: 'かぞく' },
          { text: 'はお' },
          { text: '元気', furigana: 'げんき' },
          { text: 'ですか。' },
        ],
        romaji: 'Gokazoku wa ogenki desu ka.',
        spanish: '¿Cómo está su familia?',
      },
    ],
  },

  // ==========================================
  // LECCIÓN 14
  // ==========================================
  {
    id: 'gp-l14-1',
    lessonId: 'l14',
    lessonNumber: 'Lección 14',
    order: 1,
    title: '1. Grupos de verbos (動詞のグループ)',
    explanation:
      'Los verbos japoneses se clasifican en tres grupos según su patrón fonético y de flexión en la forma ます:',
    subPoints: [
      {
        title: 'Grupo I (Verbos Godan / de cinco grados)',
        explanation:
          'La sílaba que precede a ます pertenece a la fila «-i» del silabario hiragana (ej.: かき・ます, のみ・ます, いき・ます, はなし・ます, まち・ます, よび・ます).',
      },
      {
        title: 'Grupo II (Verbos Ichidan / de un grado)',
        explanation:
          'La sílaba que precede a ます pertenece predominantemente a la fila «-e» (たべ・ます, みせ・ます, あけ・ます). También incluye algunos verbos clave cuya última sílaba es de la fila «-i» (み・ます [ver], おき・ます [levantarse], かり・ます [tomar prestado], い・ます [estar]).',
      },
      {
        title: 'Grupo III (Verbos irregulares)',
        explanation:
          'Solo dos verbos forman este grupo: します (hacer) y todos sus compuestos (勉強します, 買い物します, 連れてきます), y きます (venir).',
      },
    ],
  },
  {
    id: 'gp-l14-2',
    lessonId: 'l14',
    lessonNumber: 'Lección 14',
    order: 2,
    title: '2. V forma-て (Conjugación)',
    explanation:
      'La «forma て» (forma conjuntiva) es la base estructural para unir oraciones y crear múltiples construcciones auxiliares (pedir favores, estado progresivo, permiso, prohibición, etc.).',
    subPoints: [
      {
        title: 'Reglas de formación por grupos',
        explanation:
          '• Grupo I:\n  - 〜い / 〜ち / 〜り + ます → 〜って (買います→買って, 待ちます→待って, 帰ります→帰って)\n  - 〜み / 〜に / 〜び + ます → 〜んで (飲みます→飲んで, 死にます→死んで, 呼びます→呼んで)\n  - 〜き + ます → 〜いて (書きます→書いて; Excepción: 行きます → 行って)\n  - 〜ぎ + ます → 〜いで (急ぎます→急いで)\n  - 〜し + ます → 〜して (話します→話して)\n• Grupo II: Se retira ます y se añade て (食べます→食べて, 見ます→見て)\n• Grupo III: します → して, きます → きて',
      },
    ],
  },
  {
    id: 'gp-l14-3',
    lessonId: 'l14',
    lessonNumber: 'Lección 14',
    order: 3,
    title: '3. V forma-て ください',
    explanation:
      'Se utiliza para solicitar, pedir u ordenar cortésmente al interlocutor que realice una determinada acción ("por favor, haga...").',
    examples: [
      {
        japanese: 'ちょっと待ってください。',
        segments: [
          { text: 'ちょっと' },
          { text: '待って', furigana: 'まって' },
          { text: 'ください。' },
        ],
        romaji: 'Chotto matte kudasai.',
        spanish: 'Por favor, espere un momento.',
      },
      {
        japanese: 'ボールペンで名前を書いてください。',
        segments: [
          { text: 'ボールペンで' },
          { text: '名前', furigana: 'なまえ' },
          { text: 'を' },
          { text: '書いて', furigana: 'かいて' },
          { text: 'ください。' },
        ],
        romaji: 'Boorupen de namae o kaite kudasai.',
        spanish: 'Escriba su nombre con bolígrafo, por favor.',
      },
    ],
  },
  {
    id: 'gp-l14-4',
    lessonId: 'l14',
    lessonNumber: 'Lección 14',
    order: 4,
    title: '4. V forma-て います (Acción en curso)',
    explanation:
      'Indica que una determinada acción verbal se encuentra en pleno desarrollo y progreso en el momento presente en que se habla (equivalente al gerundio "estar haciendo...").',
    examples: [
      {
        japanese: 'ミラーさんは今電話をかけています。',
        segments: [
          { text: 'ミラーさんは' },
          { text: '今', furigana: 'いま' },
          { text: '電話', furigana: 'でんわ' },
          { text: 'をかけています。' },
        ],
        romaji: 'Miraa-san wa ima denwa o kakete imasu.',
        spanish: 'El Sr. Miller está haciendo una llamada de teléfono ahora mismo.',
      },
      {
        japanese: '会議室で松本さんと話しています。',
        segments: [
          { text: '会議室', furigana: 'かいぎしつ' },
          { text: 'で' },
          { text: '松本', furigana: 'まつもと' },
          { text: 'さんと' },
          { text: '話して', furigana: 'はなして' },
          { text: 'います。' },
        ],
        romaji: 'Kaigishitsu de Matsumoto-san to hanashite imasu.',
        spanish: 'Está hablando con el Sr. Matsumoto en la sala de reuniones.',
      },
    ],
  },
  {
    id: 'gp-l14-5',
    lessonId: 'l14',
    lessonNumber: 'Lección 14',
    order: 5,
    title: '5. V（forma-ます）ましょうか',
    explanation:
      'Fórmula con la que el hablante se ofrece activamente a hacer algo en beneficio o ayuda del oyente ("¿Le ayudo a...?", "¿Quiere que haga...?").',
    examples: [
      {
        japanese: '荷物を持ちましょうか。……ありがとうございます。',
        segments: [
          { text: '荷物', furigana: 'にもつ' },
          { text: 'を' },
          { text: '持ちましょうか', furigana: 'もちましょうか' },
          { text: '。……ありがとうございます。' },
        ],
        romaji: 'Nimotsu o mochimashou ka. ...Arigatou gozaimasu.',
        spanish: '¿Le llevo el equipaje? ...Muchas gracias.',
      },
      {
        japanese: '雨が降っていますから、タクシーを呼びましょうか。',
        segments: [
          { text: '雨', furigana: 'あめ' },
          { text: 'が' },
          { text: '降って', furigana: 'ふって' },
          { text: 'いますから、タクシーを' },
          { text: '呼びましょうか', furigana: 'よびましょうか' },
          { text: '。' },
        ],
        romaji: 'Ame ga futte imasu kara, takushii o yobimashou ka.',
        spanish: 'Como está lloviendo, ¿quiere que llame a un taxi?',
      },
    ],
  },
  {
    id: 'gp-l14-6',
    lessonId: 'l14',
    lessonNumber: 'Lección 14',
    order: 6,
    title: '6. S が V (Fenómeno percibido directamente)',
    explanation:
      'Al describir un hecho objetivo o fenómeno meteorológico que se percibe directamente con los sentidos (como lluvia, nieve, viento), el sujeto ejecutor o elemento desencadenante se marca obligatoriamente con la partícula が (en vez de は).',
    examples: [
      {
        japanese: '今雨が降っていますか。……いいえ、降っていません。',
        segments: [
          { text: '今', furigana: 'いま' },
          { text: '雨', furigana: 'あめ' },
          { text: 'が' },
          { text: '降って', furigana: 'ふって' },
          { text: 'いますか。……いいえ、' },
          { text: '降って', furigana: 'ふって' },
          { text: 'いません。' },
        ],
        romaji: 'Ima ame ga futte imasu ka. ...Iie, futte imasen.',
        spanish: '¿Está lloviendo ahora? ...No, no está lloviendo.',
      },
    ],
  },
  {
    id: 'gp-l14-7',
    lessonId: 'l14',
    lessonNumber: 'Lección 14',
    order: 7,
    title: '7. すみませんが',
    explanation:
      'Fórmula preliminar de disculpa y cortesía ("Disculpe, pero...") que se formula antes de pedir un favor, hacer una pregunta o requerir asistencia a otra persona.',
    examples: [
      {
        japanese: 'すみませんが、この漢字の読み方を教えてください。',
        segments: [
          { text: 'すみませんが、この' },
          { text: '漢字', furigana: 'かんじ' },
          { text: 'の' },
          { text: '読み方', furigana: 'よみかた' },
          { text: 'を' },
          { text: '教えて', furigana: 'おしえて' },
          { text: 'ください。' },
        ],
        romaji: 'Sumimasen ga, kono kanji no yomikata o oshiete kudasai.',
        spanish: 'Disculpe, ¿podría enseñarme la lectura de este kanji?',
      },
    ],
  },

  // ==========================================
  // LECCIÓN 15
  // ==========================================
  {
    id: 'gp-l15-1',
    lessonId: 'l15',
    lessonNumber: 'Lección 15',
    order: 1,
    title: '1. V forma-て も いいですか',
    explanation:
      'Expresión empleada para solicitar permiso para realizar una acción determinada ("¿Puedo...?", "¿Está bien si hago...?"). Para conceder permiso se dice «はい、いいですよ» o «どうぞ»; para negarlo, «いいえ、いけません».',
    examples: [
      {
        japanese: '写真を撮ってもいいですか。……はい、いいですよ。',
        segments: [
          { text: '写真', furigana: 'しゃしん' },
          { text: 'を' },
          { text: '撮っても', furigana: 'とっても' },
          { text: 'いいですか。……はい、いいですよ。' },
        ],
        romaji: 'Shashin o tottemo ii desu ka. ...Hai, ii desu yo.',
        spanish: '¿Puedo tomar una foto? ...Sí, claro / adelante.',
      },
      {
        japanese: 'ここでたばこを吸ってもいいですか。……いいえ、吸ってはいけません。',
        segments: [
          { text: 'ここでたばこを' },
          { text: '吸っても', furigana: 'すっても' },
          { text: 'いいですか。……いいえ、' },
          { text: '吸って', furigana: 'すって' },
          { text: 'はいけません。' },
        ],
        romaji: 'Koko de tabako o suttemo ii desu ka. ...Iie, sutte wa ikemasen.',
        spanish: '¿Puedo fumar aquí? ...No, está prohibido fumar.',
      },
    ],
  },
  {
    id: 'gp-l15-2',
    lessonId: 'l15',
    lessonNumber: 'Lección 15',
    order: 2,
    title: '2. V forma-て は いけません',
    explanation:
      'Expresa una prohibición estricta o imperativa de realizar una acción impuesta por normas, reglamentos o advertencias ("No se debe / no se puede / está prohibido hacer...").',
    examples: [
      {
        japanese: 'ここに車を止めてはいけません。',
        segments: [
          { text: 'ここに' },
          { text: '車', furigana: 'くるま' },
          { text: 'を' },
          { text: '止めて', furigana: 'とめて' },
          { text: 'はいけません。' },
        ],
        romaji: 'Koko ni kuruma o tomete wa ikemasen.',
        spanish: 'No se puede estacionar el coche aquí.',
      },
      {
        japanese: 'ここに入ってはいけません。',
        segments: [
          { text: 'ここに' },
          { text: '入って', furigana: 'はいって' },
          { text: 'はいけません。' },
        ],
        romaji: 'Koko ni haitte wa ikemasen.',
        spanish: 'Está prohibido entrar aquí.',
      },
    ],
  },
  {
    id: 'gp-l15-3',
    lessonId: 'l15',
    lessonNumber: 'Lección 15',
    order: 3,
    title: '3. V forma-て います (Estado resultante y habitual)',
    explanation:
      'Además de la acción en curso (Lección 14), la construcción «V forma-て います» denota un estado continuo resultante de una acción consumada en el pasado o una actividad/ocupación habitual prolongada en el tiempo.',
    subPoints: [
      {
        title: 'Verbos de estado resultante frecuentes',
        explanation:
          '• 結婚しています (estar casado)\n• 知っています (conocer/saber; nota: su forma negativa es 知りません, nunca 知っていません)\n• 住んでいます (vivir/residir en un lugar)\n• 持っています (poseer/tener)\n• 売っています (vender habitualmente en una tienda)\n• 作っています (fabricar)',
        examples: [
          {
            japanese: 'わたしは大阪に住んでいます。',
            segments: [
              { text: 'わたしは' },
              { text: '大阪', furigana: 'おおさか' },
              { text: 'に' },
              { text: '住んで', furigana: 'すんで' },
              { text: 'います。' },
            ],
            romaji: 'Watashi wa Oosaka ni sunde imasu.',
            spanish: 'Vivo en Osaka.',
          },
          {
            japanese: '田中さんの電話番号を知っていますか。……いいえ、知りません。',
            segments: [
              { text: '田中', furigana: 'たなか' },
              { text: 'さんの' },
              { text: '電話番号', furigana: 'でんわばんごう' },
              { text: 'を' },
              { text: '知って', furigana: 'しって' },
              { text: 'いますか。……いいえ、' },
              { text: '知りません', furigana: 'しりません' },
              { text: '。' },
            ],
            romaji: 'Tanaka-san no denwabangou o shitte imasu ka. ...Iie, shirimasen.',
            spanish: '¿Conoce el número de teléfono del Sr. Tanaka? ...No, no lo sé.',
          },
          {
            japanese: 'サントスさんは電子辞書を持っています。',
            segments: [
              { text: 'サントスさんは' },
              { text: '電子辞書', furigana: 'でんしじしょ' },
              { text: 'を' },
              { text: '持って', furigana: 'もって' },
              { text: 'います。' },
            ],
            romaji: 'Santosu-san wa denshi-jisho o motte imasu.',
            spanish: 'El Sr. Santos tiene un diccionario electrónico.',
          },
        ],
      },
    ],
  },
  {
    id: 'gp-l15-4',
    lessonId: 'l15',
    lessonNumber: 'Lección 15',
    order: 4,
    title: '4. S に V (Punto de asentamiento o contacto)',
    explanation:
      'La partícula に señala el lugar o punto específico donde una persona o cosa se coloca, entra o queda asentada de manera duradera tras la acción verbal (con verbos como 座ります [sentarse], 入ります [entrar], 乗ります [subir]).',
    examples: [
      {
        japanese: 'ここに座ってください。',
        segments: [
          { text: 'ここに' },
          { text: '座って', furigana: 'すわって' },
          { text: 'ください。' },
        ],
        romaji: 'Koko ni suwatte kudasai.',
        spanish: 'Siéntese aquí, por favor.',
      },
      {
        japanese: '電車に乗ります。',
        segments: [
          { text: '電車', furigana: 'でんしゃ' },
          { text: 'に' },
          { text: '乗ります', furigana: 'のります' },
          { text: '。' },
        ],
        romaji: 'Densha ni norimasu.',
        spanish: 'Subiré al tren.',
      },
    ],
  },
  {
    id: 'gp-l15-5',
    lessonId: 'l15',
    lessonNumber: 'Lección 15',
    order: 5,
    title: '5. S₁ に S₂ を V (Lugar donde se deposita algo)',
    explanation:
      'La partícula に indica la superficie o lugar concreto donde se deposita, coloca o fija un objeto S₂ mediante verbos de posicionamiento como 置きます (colocar), 書きます (anotar en papel), 貼ります (pegar).',
    examples: [
      {
        japanese: 'ここに荷物を置いてください。',
        segments: [
          { text: 'ここに' },
          { text: '荷物', furigana: 'にもつ' },
          { text: 'を' },
          { text: '置いて', furigana: 'おいて' },
          { text: 'ください。' },
        ],
        romaji: 'Koko ni nimotsu o oite kudasai.',
        spanish: 'Ponga el equipaje aquí, por favor.',
      },
      {
        japanese: 'この紙に名前を書いてください。',
        segments: [
          { text: 'この' },
          { text: '紙', furigana: 'かみ' },
          { text: 'に' },
          { text: '名前', furigana: 'なまえ' },
          { text: 'を' },
          { text: '書いて', furigana: 'かいて' },
          { text: 'ください。' },
        ],
        romaji: 'Kono kami ni namae o kaite kudasai.',
        spanish: 'Escriba su nombre en este papel, por favor.',
      },
    ],
  },

  // ==========================================
  // LECCIÓN 16
  // ==========================================
  {
    id: 'gp-l16-1',
    lessonId: 'l16',
    lessonNumber: 'Lección 16',
    order: 1,
    title: '1. Modo de conectar dos o más oraciones',
    explanation:
      'Para unir y concatenar varias proposiciones en una sola oración se utilizan formas conjuntivas según el tipo de palabra (verbos, adjetivos o sustantivos):',
    subPoints: [
      {
        title: 'Secuencia cronológica de verbos (V forma-て)',
        explanation:
          'Se suceden las acciones usando la forma-て. El tiempo gramatical de toda la frase (presente o pasado) lo determina exclusivamente el último verbo de la oración.',
        examples: [
          {
            japanese: '朝起きて、顔を洗って、朝ごはんを食べます。',
            segments: [
              { text: '朝', furigana: 'あさ' },
              { text: '起きて', furigana: 'おきて' },
              { text: '、' },
              { text: '顔', furigana: 'かお' },
              { text: 'を' },
              { text: '洗って', furigana: 'あらって' },
              { text: '、' },
              { text: '朝', furigana: 'あさ' },
              { text: 'ごはんを' },
              { text: '食べます', furigana: 'たべます' },
              { text: '。' },
            ],
            romaji: 'Asa okite, kao o aratte, asagohan o tabemasu.',
            spanish: 'Por la mañana me levanto, me lavo la cara y desayuno.',
          },
          {
            japanese: '朝ジョギングをして、シャワーを浴びて、会社へ行きます。',
            segments: [
              { text: '朝', furigana: 'あさ' },
              { text: 'ジョギングをして、シャワーを' },
              { text: '浴びて', furigana: 'あびて' },
              { text: '、' },
              { text: '会社', furigana: 'かいしゃ' },
              { text: 'へ' },
              { text: '行きます', furigana: 'いきます' },
              { text: '。' },
            ],
            romaji: 'Asa jogingu o shite, shawaa o abite, kaisha e ikimasu.',
            spanish: 'Por la mañana corro, me ducho y voy al trabajo.',
          },
        ],
      },
      {
        title: 'Conexión de adjetivos-い (〜くて)',
        explanation:
          'Para coordinar adjetivos de tipo い, se sustituye la 〜い final por 〜くて.',
        examples: [
          {
            japanese: 'この部屋は広くて、明るいです。',
            segments: [
              { text: 'この' },
              { text: '部屋', furigana: 'へや' },
              { text: 'は' },
              { text: '広くて', furigana: 'ひろくて' },
              { text: '、' },
              { text: '明るい', furigana: 'あかるい' },
              { text: 'です。' },
            ],
            romaji: 'Kono heya wa hirokute, akarui desu.',
            spanish: 'Esta habitación es espaciosa y luminosa.',
          },
        ],
      },
      {
        title: 'Conexión de adjetivos-な y sustantivos (〜で)',
        explanation:
          'Para enlazar adjetivos de tipo な y sustantivos se añade 〜で tras ellos.',
        examples: [
          {
            japanese: 'ワット先生は熱心で、親切です。',
            segments: [
              { text: 'ワット' },
              { text: '先生', furigana: 'せんせい' },
              { text: 'は' },
              { text: '熱心', furigana: 'ねっしん' },
              { text: 'で、' },
              { text: '親切', furigana: 'しんせつ' },
              { text: 'です。' },
            ],
            romaji: 'Watto-sensei wa nesshin de, shinsetsu desu.',
            spanish: 'El profesor Watt es entusiasta y amable.',
          },
          {
            japanese: '奈良は静かで、きれいな町です。',
            segments: [
              { text: '奈良', furigana: 'なら' },
              { text: 'は' },
              { text: '静か', furigana: 'しずか' },
              { text: 'で、きれいな' },
              { text: '町', furigana: 'まち' },
              { text: 'です。' },
            ],
            romaji: 'Nara wa shizuka de, kirei na machi desu.',
            spanish: 'Nara es una ciudad tranquila y bonita.',
          },
        ],
      },
    ],
  },
  {
    id: 'gp-l16-2',
    lessonId: 'l16',
    lessonNumber: 'Lección 16',
    order: 2,
    title: '2. V₁ forma-てから、V₂',
    explanation:
      'Indica que la acción V₂ se realiza de inmediato cronológicamente después de completarse la acción V₁ ("después de hacer V₁...").',
    examples: [
      {
        japanese: '仕事が終わってから、泳ぎに行きます。',
        segments: [
          { text: '仕事', furigana: 'しごと' },
          { text: 'が' },
          { text: '終わって', furigana: 'おわって' },
          { text: 'から、' },
          { text: '泳ぎに', furigana: 'およぎに' },
          { text: '行きます', furigana: 'いきます' },
          { text: '。' },
        ],
        romaji: 'Shigoto ga owatte kara, oyogi ni ikimasu.',
        spanish: 'Después de terminar el trabajo, iré a nadar.',
      },
      {
        japanese: 'コンサートが終わってから、レストランで食事しました。',
        segments: [
          { text: 'コンサートが' },
          { text: '終わって', furigana: 'おわって' },
          { text: 'から、レストランで' },
          { text: '食事', furigana: 'しょくじ' },
          { text: 'しました。' },
        ],
        romaji: 'Konsaato ga owatte kara, resutoran de shokuji shimashita.',
        spanish: 'Después de terminar el concierto, cené en un restaurante.',
      },
      {
        japanese: '国へ帰ってから、何をしますか。……父の会社で働きます。',
        segments: [
          { text: '国', furigana: 'くに' },
          { text: 'へ' },
          { text: '帰って', furigana: 'かえって' },
          { text: 'から、' },
          { text: '何', furigana: 'なに' },
          { text: 'をしますか。……' },
          { text: '父', furigana: 'ちち' },
          { text: 'の' },
          { text: '会社', furigana: 'かいしゃ' },
          { text: 'で' },
          { text: '働きます', furigana: 'はたらきます' },
          { text: '。' },
        ],
        romaji: 'Kuni e kaette kara, nani o shimasu ka. ...Chichi no kaisha de hatarakimasu.',
        spanish: '¿Qué harás después de volver a tu país? ...Trabajaré en la empresa de mi padre.',
      },
    ],
  },
  {
    id: 'gp-l16-3',
    lessonId: 'l16',
    lessonNumber: 'Lección 16',
    order: 3,
    title: '3. S₁ は S₂ が A',
    explanation:
      'Se utiliza para detallar o describir una cualidad, parte del cuerpo o atributo específico (S₂) que pertenece al sujeto o tema general presentado con は (S₁).',
    examples: [
      {
        japanese: 'マリアさんは髪が長いです。',
        segments: [
          { text: 'マリアさんは' },
          { text: '髪', furigana: 'かみ' },
          { text: 'が' },
          { text: '長い', furigana: 'ながい' },
          { text: 'です。' },
        ],
        romaji: 'Maria-san wa kami ga nagai desu.',
        spanish: 'María tiene el pelo largo.',
      },
      {
        japanese: '大阪は食べ物がおいしいです。',
        segments: [
          { text: '大阪', furigana: 'おおさか' },
          { text: 'は' },
          { text: '食べ物', furigana: 'たべもの' },
          { text: 'がおいしいです。' },
        ],
        romaji: 'Oosaka wa tabemono ga oishii desu.',
        spanish: 'En Osaka la comida es deliciosa.',
      },
      {
        japanese: 'サントスさんは背が高くて、髪が黒いです。',
        segments: [
          { text: 'サントスさんは' },
          { text: '背', furigana: 'せ' },
          { text: 'が' },
          { text: '高くて', furigana: 'たかくて' },
          { text: '、' },
          { text: '髪', furigana: 'かみ' },
          { text: 'が' },
          { text: '黒い', furigana: 'くろい' },
          { text: 'です。' },
        ],
        romaji: 'Santosu-san wa se ga takakute, kami ga kuroi desu.',
        spanish: 'El Sr. Santos es alto y tiene el pelo negro.',
      },
    ],
  },
  {
    id: 'gp-l16-4',
    lessonId: 'l16',
    lessonNumber: 'Lección 16',
    order: 4,
    title: '4. S を V (Punto de origen o separación)',
    explanation:
      'La partícula を marca el punto físico o vehículo del que se sale, desciende o se parte con verbos de movimiento centrífugo (como 降ります [bajar], 出ます [salir]).',
    examples: [
      {
        japanese: '電車を降ります。',
        segments: [
          { text: '電車', furigana: 'でんしゃ' },
          { text: 'を' },
          { text: '降ります', furigana: 'おります' },
          { text: '。' },
        ],
        romaji: 'Densha o orimasu.',
        spanish: 'Bajo del tren.',
      },
      {
        japanese: '毎朝7時に家を出ます。',
        segments: [
          { text: '毎朝', furigana: 'まいあさ' },
          { text: '7' },
          { text: '時', furigana: 'じ' },
          { text: 'に' },
          { text: '家', furigana: 'いえ' },
          { text: 'を' },
          { text: '出ます', furigana: 'でます' },
          { text: '。' },
        ],
        romaji: 'Maiasa shichi-ji ni ie o demasu.',
        spanish: 'Salgo de casa a las 7 cada mañana.',
      },
    ],
  },
  {
    id: 'gp-l16-5',
    lessonId: 'l16',
    lessonNumber: 'Lección 16',
    order: 5,
    title: '5. どうやって',
    explanation:
      'Interrogativo utilizado para averiguar el modo, itinerario o secuencia de pasos necesarios para llegar a un destino o efectuar un procedimiento ("¿Cómo...?", "¿De qué forma...?").',
    examples: [
      {
        japanese: '大学までどうやって行きますか。',
        segments: [
          { text: '大学', furigana: 'だいがく' },
          { text: 'までどうやって' },
          { text: '行きます', furigana: 'いきます' },
          { text: 'か。' },
        ],
        romaji: 'Daigaku made dou yatte ikimasu ka.',
        spanish: '¿Cómo se va hasta la universidad?',
      },
      {
        japanese: '京都駅からどうやって行きますか。',
        segments: [
          { text: '京都駅', furigana: 'きょうとえき' },
          { text: 'からどうやって' },
          { text: '行きます', furigana: 'いきます' },
          { text: 'か。' },
        ],
        romaji: 'Kyouto-eki kara dou yatte ikimasu ka.',
        spanish: '¿Cómo se va desde la estación de Kioto?',
      },
    ],
  },

  // ==========================================
  // LECCIÓN 17
  // ==========================================
  {
    id: 'gp-l17-1',
    lessonId: 'l17',
    lessonNumber: 'Lección 17',
    order: 1,
    title: '1. V forma-ない (Conjugación llana negativa)',
    explanation:
      'La «forma-ない» es la forma informal/llana negativa de los verbos japoneses y sirve de cimiento para expresar prohibiciones suaves, deberes y dispensas.',
    subPoints: [
      {
        title: 'Reglas de flexión por grupos',
        explanation:
          '• Grupo I: Se cambia la vocal de la fila «-i» previa a ます por la fila «-a» + ない (書きます→書かない, 読みます→読まない, 行きます→行かない).\n  * Excepción fonética: si antes de ます hay una vocal «-i», pasa a «-wa» (買います→買わない, 吸います→吸わない).\n  * Excepción especial: あります pasa a ない.\n• Grupo II: Se quita ます y se añade ない (食べます→食べない, 見ます→見ない).\n• Grupo III: します→しない / きます→こない (pronunciación konai).',
      },
    ],
  },
  {
    id: 'gp-l17-2',
    lessonId: 'l17',
    lessonNumber: 'Lección 17',
    order: 2,
    title: '2. V（forma-ない）ないでください',
    explanation:
      'Petición o solicitud cortés para requerir al oyente que se abstenga de realizar una acción determinada ("Por favor, no haga...").',
    examples: [
      {
        japanese: 'ここで写真を撮らないでください。',
        segments: [
          { text: 'ここで' },
          { text: '写真', furigana: 'しゃしん' },
          { text: 'を' },
          { text: '撮らないで', furigana: 'とらないで' },
          { text: 'ください。' },
        ],
        romaji: 'Koko de shashin o toranaide kudasai.',
        spanish: 'Por favor, no tome fotos aquí.',
      },
      {
        japanese: '心配しないでください。',
        segments: [
          { text: '心配', furigana: 'しんぱい' },
          { text: 'しないでください。' },
        ],
        romaji: 'Shinpai shinaide kudasai.',
        spanish: 'Por favor, no se preocupe.',
      },
    ],
  },
  {
    id: 'gp-l17-3',
    lessonId: 'l17',
    lessonNumber: 'Lección 17',
    order: 3,
    title: '3. V（forma-ない）なければなりません',
    explanation:
      'Expresa una obligación ineludible, necesidad o deber impuesto por las circunstancias ("Tener que...", "Deber hacer..."). Se forma sustituyendo la い final de la forma-ない por ければなりません.',
    examples: [
      {
        japanese: '薬を飲まなければなりません。',
        segments: [
          { text: '薬', furigana: 'くすり' },
          { text: 'を' },
          { text: '飲まなければ', furigana: 'のまなければ' },
          { text: 'なりません。' },
        ],
        romaji: 'Kusuri o nomanakereba narimasen.',
        spanish: 'Tengo que tomar la medicina.',
      },
      {
        japanese: '5時までに帰らなければなりません。',
        segments: [
          { text: '5' },
          { text: '時', furigana: 'じ' },
          { text: 'までに' },
          { text: '帰らなければ', furigana: 'かえらなければ' },
          { text: 'なりません。' },
        ],
        romaji: 'Go-ji made ni kaeranakereba narimasen.',
        spanish: 'Tengo que regresar antes de las 5.',
      },
    ],
  },
  {
    id: 'gp-l17-4',
    lessonId: 'l17',
    lessonNumber: 'Lección 17',
    order: 4,
    title: '4. V（forma-ない）なくてもいいです',
    explanation:
      'Expresa la ausencia de necesidad, obligación o exigencia de realizar una acción ("No es necesario que...", "No hace falta que..."). Se sustituye la い final de la forma-ない por くてもいいです.',
    examples: [
      {
        japanese: '明日来なくてもいいです。',
        segments: [
          { text: '明日', furigana: 'あした' },
          { text: '来なくても', furigana: 'こなくても' },
          { text: 'いいです。' },
        ],
        romaji: 'Ashita konakutemo ii desu.',
        spanish: 'No hace falta que venga mañana.',
      },
      {
        japanese: '急がなくてもいいですよ。',
        segments: [
          { text: '急がなくても', furigana: 'いそがなくても' },
          { text: 'いいですよ。' },
        ],
        romaji: 'Isoganakutemo ii desu yo.',
        spanish: 'No hace falta que te des prisa.',
      },
    ],
  },
  {
    id: 'gp-l17-5',
    lessonId: 'l17',
    lessonNumber: 'Lección 17',
    order: 5,
    title: '5. Transformación del objeto en elemento principal',
    explanation:
      'El objeto directo (S を) se tematiza cambiándolo por la partícula temática は para situarlo en el foco de atención u oración de contraste ("En cuanto a S...").',
    examples: [
      {
        japanese: '荷物はここに置かないでください。',
        segments: [
          { text: '荷物', furigana: 'にもつ' },
          { text: 'はここに' },
          { text: '置かないで', furigana: 'おかないで' },
          { text: 'ください。' },
        ],
        romaji: 'Nimotsu wa koko ni okanaide kudasai.',
        spanish: 'En cuanto al equipaje, no lo ponga aquí.',
      },
      {
        japanese: 'パスポートは見せなければなりません。',
        segments: [
          { text: 'パスポートは' },
          { text: '見せなければ', furigana: 'みせなければ' },
          { text: 'なりません。' },
        ],
        romaji: 'Pasupooto wa misenakereba narimasen.',
        spanish: 'El pasaporte, tiene que mostrarlo.',
      },
    ],
  },
  {
    id: 'gp-l17-6',
    lessonId: 'l17',
    lessonNumber: 'Lección 17',
    order: 6,
    title: '6. S (tiempo) までに V',
    explanation:
      'La partícula までに marca el plazo máximo, fecha límite o momento antes del cual debe haber concluido obligatoriamente una acción puntual (a diferencia de まで, que indica una acción continua que se prolonga hasta ese instante).',
    examples: [
      {
        japanese: '5時までに帰らなければなりません。',
        segments: [
          { text: '5' },
          { text: '時', furigana: 'じ' },
          { text: 'までに' },
          { text: '帰らなければ', furigana: 'かえらなければ' },
          { text: 'なりません。' },
        ],
        romaji: 'Go-ji made ni kaeranakereba narimasen.',
        spanish: 'Tengo que regresar antes de las 5.',
      },
      {
        japanese: '金曜日までにレポートを送ってください。',
        segments: [
          { text: '金曜日', furigana: 'きんようび' },
          { text: 'までにレポートを' },
          { text: '送って', furigana: 'おくって' },
          { text: 'ください。' },
        ],
        romaji: 'Kin\'youbi made ni repooto o okutte kudasai.',
        spanish: 'Envíe el informe antes del viernes, por favor.',
      },
    ],
  },

  // ==========================================
  // LECCIÓN 18
  // ==========================================
  {
    id: 'gp-l18-1',
    lessonId: 'l18',
    lessonNumber: 'Lección 18',
    order: 1,
    title: '1. V forma de diccionario (辞書形)',
    explanation:
      'Es la forma canónica o neutra con la que los verbos aparecen en los diccionarios. Sirve como forma llana no pasada y como elemento para sustantivar con こと.',
    subPoints: [
      {
        title: 'Reglas de derivación por grupo',
        explanation:
          '• Grupo I: La vocal de la fila «-i» previa a ます pasa a la fila «-u» (書きます→書く, 読みます→読む, 泳ぎます→泳ぐ, 買います→買う, 話します→話す).\n• Grupo II: Se retira ます y se añade る (食べます→食べる, 見ます→見る, 起きます→起きる).\n• Grupo III: します→する / きます→くる.',
      },
    ],
  },
  {
    id: 'gp-l18-2',
    lessonId: 'l18',
    lessonNumber: 'Lección 18',
    order: 2,
    title: '2. S / V forma de diccionario ことができます',
    explanation:
      'Expresa la capacidad física o técnica de alguien para realizar algo, o la posibilidad situacional de llevar a cabo una acción ("Poder...", "Ser capaz de..."). Al usar un verbo, se sustantiva con こと ("el hecho de").',
    examples: [
      {
        japanese: 'ミラーさんは日本語ができます。',
        segments: [
          { text: 'ミラーさんは' },
          { text: '日本語', furigana: 'にほんご' },
          { text: 'ができます。' },
        ],
        romaji: 'Miraa-san wa Nihongo ga dekimasu.',
        spanish: 'El Sr. Miller sabe hablar japonés.',
      },
      {
        japanese: '漢字を読むことができます。',
        segments: [
          { text: '漢字', furigana: 'かんじ' },
          { text: 'を' },
          { text: '読む', furigana: 'よむ' },
          { text: 'ことができます。' },
        ],
        romaji: 'Kanji o yomu koto ga dekimasu.',
        spanish: 'Puedo leer kanji.',
      },
      {
        japanese: '100メートルぐらい泳ぐことができます。',
        segments: [
          { text: '100メートルぐらい' },
          { text: '泳ぐ', furigana: 'およぐ' },
          { text: 'ことができます。' },
        ],
        romaji: 'Hyaku meetoru gurai oyogu koto ga dekimasu.',
        spanish: 'Puedo nadar unos 100 metros.',
      },
    ],
  },
  {
    id: 'gp-l18-3',
    lessonId: 'l18',
    lessonNumber: 'Lección 18',
    order: 3,
    title: '3. わたしの趣味は S / V forma de diccionario ことです',
    explanation:
      'Expresión utilizada para comunicar pasatiempos o aficiones ("Mi afición es..."). Al colocar こと tras la forma de diccionario se convierte la acción verbal en una entidad nominal.',
    examples: [
      {
        japanese: 'わたしの趣味は写真を撮ることです。',
        segments: [
          { text: 'わたしの' },
          { text: '趣味', furigana: 'しゅみ' },
          { text: 'は' },
          { text: '写真', furigana: 'しゃしん' },
          { text: 'を' },
          { text: '撮る', furigana: 'とる' },
          { text: 'ことです。' },
        ],
        romaji: 'Watashi no shumi wa shashin o toru koto desu.',
        spanish: 'Mi afición es tomar fotos.',
      },
      {
        japanese: 'ミラーさんの趣味は古いレコードを集めることです。',
        segments: [
          { text: 'ミラーさんの' },
          { text: '趣味', furigana: 'しゅみ' },
          { text: 'は' },
          { text: '古い', furigana: 'ふるい' },
          { text: 'レコードを' },
          { text: '集める', furigana: 'あつめる' },
          { text: 'ことです。' },
        ],
        romaji: 'Miraa-san no shumi wa furui rekoodo o atsumeru koto desu.',
        spanish: 'La afición del Sr. Miller es coleccionar discos antiguos.',
      },
    ],
  },
  {
    id: 'gp-l18-4',
    lessonId: 'l18',
    lessonNumber: 'Lección 18',
    order: 4,
    title: '4. V₁ forma de diccionario / S の / Cuantificador まえに、V₂',
    explanation:
      'Indica que la acción o situación expresada con V₁ o con el sustantivo S ocurre con anterioridad temporal respecto a la acción principal V₂ ("Antes de...").',
    examples: [
      {
        japanese: '寝る前に、本を読みます。',
        segments: [
          { text: '寝る', furigana: 'ねる' },
          { text: '前', furigana: 'まえ' },
          { text: 'に、' },
          { text: '本', furigana: 'ほん' },
          { text: 'を' },
          { text: '読みます', furigana: 'よみます' },
          { text: '。' },
        ],
        romaji: 'Neru mae ni, hon o yomimasu.',
        spanish: 'Antes de acostarme, leo un libro.',
      },
      {
        japanese: '食事の前に、手を洗います。',
        segments: [
          { text: '食事', furigana: 'しょくじ' },
          { text: 'の' },
          { text: '前', furigana: 'まえ' },
          { text: 'に、' },
          { text: '手', furigana: 'て' },
          { text: 'を' },
          { text: '洗います', furigana: 'あらいます' },
          { text: '。' },
        ],
        romaji: 'Shokuji no mae ni, te o araimasu.',
        spanish: 'Antes de comer, me lavo las manos.',
      },
      {
        japanese: '日本の子供は学校に入るまえに、ひらがなを習います。',
        segments: [
          { text: '日本', furigana: 'にほん' },
          { text: 'の' },
          { text: '子供', furigana: 'こども' },
          { text: 'は' },
          { text: '学校', furigana: 'がっこう' },
          { text: 'に' },
          { text: '入る', furigana: 'はいる' },
          { text: 'まえに、ひらがなを' },
          { text: '習います', furigana: 'ならいます' },
          { text: '。' },
        ],
        romaji: 'Nihon no kodomo wa gakkou ni hairu mae ni, hiragana o naraimasu.',
        spanish: 'Los niños japoneses aprenden hiragana antes de ingresar en la escuela.',
      },
    ],
  },
  {
    id: 'gp-l18-5',
    lessonId: 'l18',
    lessonNumber: 'Lección 18',
    order: 5,
    title: '5. なかなか',
    explanation:
      'Adverbio utilizado junto con predicados en negativo para indicar que un hecho no se produce con facilidad o que cuesta lograrlo ("No fácilmente...", "Cuesta mucho...", "Difícilmente...").',
    examples: [
      {
        japanese: '日本ではなかなか馬を見ることができません。',
        segments: [
          { text: '日本', furigana: 'にほん' },
          { text: 'ではなかなか' },
          { text: '馬', furigana: 'うま' },
          { text: 'を' },
          { text: '見る', furigana: 'みる' },
          { text: 'ことができません。' },
        ],
        romaji: 'Nihon de wa nakanaka uma o miru koto ga dekimasen.',
        spanish: 'En Japón difícilmente se pueden ver caballos.',
      },
      {
        japanese: 'バスがなかなか来ません。',
        segments: [
          { text: 'バスがなかなか' },
          { text: '来ません', furigana: 'きません' },
          { text: '。' },
        ],
        romaji: 'Basu ga nakanaka kimasen.',
        spanish: 'El autobús no llega fácilmente / tarda mucho.',
      },
    ],
  },
  {
    id: 'gp-l18-6',
    lessonId: 'l18',
    lessonNumber: 'Lección 18',
    order: 6,
    title: '6. ぜひ',
    explanation:
      'Adverbio de insistencia y entusiasmo empleado ante oraciones de deseo (〜たいです) o de invitación (〜てください) para enfatizar ("¡Sin falta!", "Definitivamente", "Por favor").',
    examples: [
      {
        japanese: 'ぜひ京都へ行きたいです。',
        segments: [
          { text: 'ぜひ' },
          { text: '京都', furigana: 'きょうと' },
          { text: 'へ' },
          { text: '行きたい', furigana: 'いきたい' },
          { text: 'です。' },
        ],
        romaji: 'Zehi Kyouto e ikitai desu.',
        spanish: 'Quiero ir a Kioto sin falta.',
      },
      {
        japanese: 'ぜひうちに遊びに来てください。',
        segments: [
          { text: 'ぜひうちに' },
          { text: '遊びに', furigana: 'あそびに' },
          { text: '来て', furigana: 'きて' },
          { text: 'ください。' },
        ],
        romaji: 'Zehi uchi ni asobi ni kite kudasai.',
        spanish: '¡Venga a visitarnos a casa sin falta!',
      },
    ],
  },

  // ==========================================
  // LECCIÓN 19
  // ==========================================
  {
    id: 'gp-l19-1',
    lessonId: 'l19',
    lessonNumber: 'Lección 19',
    order: 1,
    title: '1. V forma-た (Conjugación pasada llana)',
    explanation:
      'Es la forma informal/llana del pasado afirmativo de los verbos. Se conjuga exactamente con las mismas reglas fonéticas que la forma-て, sustituyendo て por た y で por だ.',
    subPoints: [
      {
        title: 'Correspondencias con forma-て',
        explanation:
          '• 書いて → 書いた\n• 飲んで → 飲んだ\n• 買って → 買った\n• 行って → 行った\n• 食べて → 食べた\n• して → した / きて → きた',
      },
    ],
  },
  {
    id: 'gp-l19-2',
    lessonId: 'l19',
    lessonNumber: 'Lección 19',
    order: 2,
    title: '2. V forma-た ことがあります',
    explanation:
      'Expresa la posesión de una experiencia personal previa en el pasado ("Haber [hecho algo] alguna vez"). Su negación suele enfatizarse con «一度もありません» ("ni una sola vez").',
    examples: [
      {
        japanese: '富士山に登ったことがあります。',
        segments: [
          { text: '富士山', furigana: 'ふじさん' },
          { text: 'に' },
          { text: '登った', furigana: 'のぼった' },
          { text: 'ことがあります。' },
        ],
        romaji: 'Fujisan ni nobotta koto ga arimasu.',
        spanish: 'He subido al monte Fuji alguna vez.',
      },
      {
        japanese: '馬に乗ったことがありますか。……いいえ、一度もありません。',
        segments: [
          { text: '馬', furigana: 'うま' },
          { text: 'に' },
          { text: '乗った', furigana: 'のった' },
          { text: 'ことがありますか。……いいえ、' },
          { text: '一度', furigana: 'いちど' },
          { text: 'もありません。' },
        ],
        romaji: 'Uma ni notta koto ga arimasu ka. ...Iie, ichido mo arimasen.',
        spanish: '¿Has montado a caballo alguna vez? ...No, ni una sola vez.',
      },
      {
        japanese: '日本でお寺を見たことがありますか。……ええ、京都でたくさん見ました。',
        segments: [
          { text: '日本', furigana: 'にほん' },
          { text: 'でお' },
          { text: '寺', furigana: 'てら' },
          { text: 'を' },
          { text: '見た', furigana: 'みた' },
          { text: 'ことがありますか。……ええ、' },
          { text: '京都', furigana: 'きょうと' },
          { text: 'でたくさん' },
          { text: '見ました', furigana: 'みました' },
          { text: '。' },
        ],
        romaji: 'Nihon de otera o mita koto ga arimasu ka. ...Ee, Kyouto de takusan mimashita.',
        spanish: '¿Has visto templos en Japón? ...Sí, vi muchos en Kioto.',
      },
    ],
  },
  {
    id: 'gp-l19-3',
    lessonId: 'l19',
    lessonNumber: 'Lección 19',
    order: 3,
    title: '3. V₁ forma-たり、V₂ forma-たりします',
    explanation:
      'Permite enumerar varias acciones de manera representativa y no exhaustiva ("hacer cosas como V₁ y V₂"). El tiempo verbal de la oración se expresa exclusivamente en el verbo します final (します / しました).',
    examples: [
      {
        japanese: '日曜日はテニスをしたり、散歩したりします。',
        segments: [
          { text: '日曜日', furigana: 'にちようび' },
          { text: 'はテニスをしたり、' },
          { text: '散歩', furigana: 'さんぽ' },
          { text: 'したりします。' },
        ],
        romaji: 'Nichiyoubi wa tenisu o shitari, sanpo shitari shimasu.',
        spanish: 'Los domingos juego al tenis, paseo, etc.',
      },
      {
        japanese: '休みの日は掃除をしたり、洗濯をしたりします。',
        segments: [
          { text: '休み', furigana: 'やすみ' },
          { text: 'の' },
          { text: '日', furigana: 'ひ' },
          { text: 'は' },
          { text: '掃除', furigana: 'そうじ' },
          { text: 'をしたり、' },
          { text: '洗濯', furigana: 'せんたく' },
          { text: 'をしたりします。' },
        ],
        romaji: 'Yasumi no hi wa souji o shitari, sentaku o shitari shimasu.',
        spanish: 'En los días libres limpio, lavo la ropa y hago otras tareas.',
      },
    ],
  },
  {
    id: 'gp-l19-4',
    lessonId: 'l19',
    lessonNumber: 'Lección 19',
    order: 4,
    title: '4. A-い (〜く) / A-な (〜に) / S に なります',
    explanation:
      'Indica una transformación o cambio de estado de una persona, cualidad o situación ("Volverse...", "Ponerse...", "Llegar a ser...").',
    subPoints: [
      {
        title: 'Reglas de enlace',
        explanation:
          '• Adjetivos-い: Se sustituye 〜い por 〜く なります (寒くなります [hace frío], 高くなります [se encarece]).\n• Adjetivos-な: Se añade 〜に なります (元気になります [recupera la salud], 上手になります [mejora]).\n• Sustantivos: Se añade 〜に なります (25歳になります [cumple 25 años], 医者になります [se hace médico]).',
        examples: [
          {
            japanese: 'だんだん寒くなります。',
            segments: [
              { text: 'だんだん' },
              { text: '寒く', furigana: 'さむく' },
              { text: 'なります。' },
            ],
            romaji: 'Dandan samuku narimasu.',
            spanish: 'Poco a poco se va haciendo más frío.',
          },
          {
            japanese: 'テレサちゃんは背が高くなりました。',
            segments: [
              { text: 'テレサちゃんは' },
              { text: '背', furigana: 'せ' },
              { text: 'が' },
              { text: '高く', furigana: 'たかく' },
              { text: 'なりました。' },
            ],
            romaji: 'Teresa-chan wa se ga takaku narimashita.',
            spanish: 'Teresa ha crecido / se ha hecho más alta.',
          },
          {
            japanese: 'もうすぐ25歳になります。',
            segments: [
              { text: 'もうすぐ25' },
              { text: '歳', furigana: 'さい' },
              { text: 'になります。' },
            ],
            romaji: 'Mousugu nijuugo-sai ni narimasu.',
            spanish: 'Pronto cumpliré 25 años.',
          },
        ],
      },
    ],
  },

  // ==========================================
  // LECCIÓN 20
  // ==========================================
  {
    id: 'gp-l20-1',
    lessonId: 'l20',
    lessonNumber: 'Lección 20',
    order: 1,
    title: '1. Estilo cortés y estilo informal (丁寧体 と 普通体)',
    explanation:
      'El japonés distingue dos registros fundamentales de habla según el grado de jerarquía y confianza social:',
    subPoints: [
      {
        title: 'Estilo cortés (丁寧体 - Teineitai)',
        explanation:
          'Se apoya en las terminaciones 〜です y 〜ます. Se utiliza con personas a las que no se conoce con confianza, personas mayores, superiores laborales y en entornos públicos.',
      },
      {
        title: 'Estilo informal / llano (普通体 - Futsūtai)',
        explanation:
          'Utiliza las formas verbales llanas (forma de diccionario, forma-ない, forma-た) y la cópula だ / だった. Se utiliza entre amigos íntimos, familia, parejas o con subordinados.',
      },
      {
        title: 'Tabla de equivalencias básicas',
        explanation:
          '• Verbos: 行きます → 行く / 行きません → 行かない / 行きました → 行った / 行きませんでした → 行かなかった\n• Adjetivo-い: 寒いです → 寒い / 寒くないです → 寒くない / 寒かったです → 寒かった\n• Adjetivo-な / Sustantivo: きれいです → きれいだ / 雨です → 雨だ / 雨でした → 雨だった',
        examples: [
          {
            japanese: '東京は人が多い。',
            segments: [
              { text: '東京', furigana: 'とうきょう' },
              { text: 'は' },
              { text: '人', furigana: 'ひと' },
              { text: 'が' },
              { text: '多い', furigana: 'おおい' },
              { text: '。' },
            ],
            romaji: 'Toukyou wa hito ga ooi.',
            spanish: 'En Tokio hay mucha gente.',
          },
          {
            japanese: '沖縄の海はきれいだった。',
            segments: [
              { text: '沖縄', furigana: 'おきなわ' },
              { text: 'の' },
              { text: '海', furigana: 'うみ' },
              { text: 'はきれいだった。' },
            ],
            romaji: 'Okinawa no umi wa kirei datta.',
            spanish: 'El mar de Okinawa era hermoso.',
          },
        ],
      },
    ],
  },
  {
    id: 'gp-l20-2',
    lessonId: 'l20',
    lessonNumber: 'Lección 20',
    order: 2,
    title: '2. Uso de los estilos cortés e informal',
    explanation:
      'Elegir el registro correcto es esencial para una interacción natural y respetuosa en Japón. Emplear el estilo informal fuera del ámbito íntimo o de amistad resulta grosero o impropio.',
  },
  {
    id: 'gp-l20-3',
    lessonId: 'l20',
    lessonNumber: 'Lección 20',
    order: 3,
    title: '3. Conversación de estilo informal',
    explanation:
      'En la conversación oral informal se aplican simplificaciones comunicativas muy concretas:',
    subPoints: [
      {
        title: 'Omisión de la partícula か',
        explanation:
          'En las preguntas informales se omite la partícula か y se aplica una entonación marcadamente ascendente.',
        examples: [
          {
            japanese: 'ごはん食べた？……うん、食べた。',
            segments: [
              { text: 'ごはん' },
              { text: '食べた', furigana: 'たべた' },
              { text: '？……うん、' },
              { text: '食べた', furigana: 'たべた' },
              { text: '。' },
            ],
            romaji: 'Gohan tabeta? ...Un, tabeta.',
            spanish: '¿Has comido? ...Sí, comí.',
          },
        ],
      },
      {
        title: 'Omisión de partículas gramaticales',
        explanation:
          'Partículas como は, を, へ se omiten frecuentemente si el sentido se deduce por el contexto (ej. 「辞書、いい？」 en lugar de 「辞書はいいですか」).',
        examples: [
          {
            japanese: 'その辞書、いい？……うん、すごく便利だよ。',
            segments: [
              { text: 'その' },
              { text: '辞書', furigana: 'じしょ' },
              { text: '、いい？……うん、すごく' },
              { text: '便利', furigana: 'べんり' },
              { text: 'だよ。' },
            ],
            romaji: 'Sono jisho, ii? ...Un, sugoku benri da yo.',
            spanish: 'Ese diccionario, ¿está bien? ...Sí, es súper práctico.',
          },
          {
            japanese: 'サウナへ行ったことある？……ううん、ない。',
            segments: [
              { text: 'サウナへ' },
              { text: '行った', furigana: 'いった' },
              { text: 'ことある？……ううん、ない。' },
            ],
            romaji: 'Sauna e itta koto aru? ...Uun, nai.',
            spanish: '¿Has ido alguna vez a la sauna? ...No, nunca.',
          },
        ],
      },
      {
        title: 'Respuestas cotidianas: うん y ううん',
        explanation:
          'En estilo informal, はい se convierte en うん (sí) y いいえ se convierte en ううん (no).',
      },
    ],
  },

  // ==========================================
  // LECCIÓN 21
  // ==========================================
  {
    id: 'gp-l21-1',
    lessonId: 'l21',
    lessonNumber: 'Lección 21',
    order: 1,
    title: '1. Forma informal + と 思います',
    explanation:
      'Expresa una opinión personal, estimación subjetiva o conjetura del hablante ("Pienso que...", "Creo que..."). La proposición que precede a と va en forma informal/llana.',
    examples: [
      {
        japanese: '明日雨が降ると思います。',
        segments: [
          { text: '明日', furigana: 'あした' },
          { text: '雨', furigana: 'あめ' },
          { text: 'が' },
          { text: '降る', furigana: 'ふる' },
          { text: 'と' },
          { text: '思います', furigana: 'おもいます' },
          { text: '。' },
        ],
        romaji: 'Ashita ame ga furu to omoimasu.',
        spanish: 'Creo que mañana lloverá.',
      },
      {
        japanese: '日本は物価が高いと思います。',
        segments: [
          { text: '日本', furigana: 'にほん' },
          { text: 'は' },
          { text: '物価', furigana: 'ぶっか' },
          { text: 'が' },
          { text: '高い', furigana: 'たかい' },
          { text: 'と' },
          { text: '思います', furigana: 'おもいます' },
          { text: '。' },
        ],
        romaji: 'Nihon wa bukka ga takai to omoimasu.',
        spanish: 'Pienso que el costo de vida en Japón es caro.',
      },
      {
        japanese: '新しい空港についてどう思いますか。……きれいですが、不便だと思います。',
        segments: [
          { text: '新しい', furigana: 'あたらしい' },
          { text: '空港', furigana: 'くうこう' },
          { text: 'についてどう' },
          { text: '思います', furigana: 'おもいます' },
          { text: 'か。……きれいですが、' },
          { text: '不便', furigana: 'ふべん' },
          { text: 'だと' },
          { text: '思います', furigana: 'おもいます' },
          { text: '。' },
        ],
        romaji: 'Atarashii kuukou ni tsuite dou omoimasu ka. ...Kirei desu ga, fuben da to omoimasu.',
        spanish: '¿Qué opina sobre el nuevo aeropuerto? ...Es bonito, pero creo que resulta incómodo.',
      },
    ],
  },
  {
    id: 'gp-l21-2',
    lessonId: 'l21',
    lessonNumber: 'Lección 21',
    order: 2,
    title: '2. "Oración" / Forma informal + と 言いました',
    explanation:
      'Se utiliza para reproducir palabras dichas por otra persona, ya sea como cita directa (entre comillas 「」 con el texto exacto) o indirecta (enunciado en forma llana).',
    examples: [
      {
        japanese: '寝る前に、「おやすみなさい」と言います。',
        segments: [
          { text: '寝る', furigana: 'ねる' },
          { text: '前', furigana: 'まえ' },
          { text: 'に、「おやすみなさい」と' },
          { text: '言います', furigana: 'いいます' },
          { text: '。' },
        ],
        romaji: 'Neru mae ni, "oyasuminasai" to iimasu.',
        spanish: 'Antes de acostarse, se dice «Buenas noches».',
      },
      {
        japanese: 'ミラーさんは来週東京へ行くと言いました。',
        segments: [
          { text: 'ミラーさんは' },
          { text: '来週', furigana: 'らいしゅう' },
          { text: '東京', furigana: 'とうきょう' },
          { text: 'へ' },
          { text: '行く', furigana: 'いく' },
          { text: 'と' },
          { text: '言いました', furigana: 'いいました' },
          { text: '。' },
        ],
        romaji: 'Miraa-san wa raishuu Toukyou e iku to iimashita.',
        spanish: 'El Sr. Miller dijo que la próxima semana iría a Tokio.',
      },
      {
        japanese: 'わたしは父に留学したいと言いました。',
        segments: [
          { text: 'わたしは' },
          { text: '父', furigana: 'ちち' },
          { text: 'に' },
          { text: '留学したい', furigana: 'りゅうがくしたい' },
          { text: 'と' },
          { text: '言いました', furigana: 'いいました' },
          { text: '。' },
        ],
        romaji: 'Watashi wa chichi ni ryuugaku shitai to iimashita.',
        spanish: 'Le dije a mi padre que quiero estudiar en el extranjero.',
      },
    ],
  },
  {
    id: 'gp-l21-3',
    lessonId: 'l21',
    lessonNumber: 'Lección 21',
    order: 3,
    title: '3. Forma informal + でしょう？',
    explanation:
      'Se usa con entonación ascendente para buscar el acuerdo o confirmar una presunción que se supone que el interlocutor comparte ("¿Verdad?", "¿A que sí?").',
    examples: [
      {
        japanese: '明日は休みでしょう？',
        segments: [
          { text: '明日', furigana: 'あした' },
          { text: 'は' },
          { text: '休み', furigana: 'やすみ' },
          { text: 'でしょう？' },
        ],
        romaji: 'Ashita wa yasumi deshou?',
        spanish: 'Mañana es fiesta/día libre, ¿verdad?',
      },
      {
        japanese: '疲れたでしょう？',
        segments: [
          { text: '疲れた', furigana: 'つかれた' },
          { text: 'でしょう？' },
        ],
        romaji: 'Tsukareta deshou?',
        spanish: 'Estarás cansado, ¿verdad?',
      },
      {
        japanese: '北海道は寒かったでしょう？',
        segments: [
          { text: '北海道', furigana: 'ほっかいどう' },
          { text: 'は' },
          { text: '寒かった', furigana: 'さむかった' },
          { text: 'でしょう？' },
        ],
        romaji: 'Hokkaidou wa samukatta deshou?',
        spanish: 'En Hokkaido hizo frío, ¿a que sí?',
      },
    ],
  },
  {
    id: 'gp-l21-4',
    lessonId: 'l21',
    lessonNumber: 'Lección 21',
    order: 4,
    title: '4. S₁ (lugar) で S₂ が あります',
    explanation:
      'Cuando el sustantivo S₂ es un evento social, deportivo, festivo o circunstancial (partido, concierto, fiesta, examen, accidente), la partícula で marca el lugar donde se celebra u ocurre.',
    examples: [
      {
        japanese: '東京でサッカーの試合があります。',
        segments: [
          { text: '東京', furigana: 'とうきょう' },
          { text: 'でサッカーの' },
          { text: '試合', furigana: 'しあい' },
          { text: 'があります。' },
        ],
        romaji: 'Toukyou de sakkaa no shiai ga arimasu.',
        spanish: 'Hay un partido de fútbol en Tokio.',
      },
      {
        japanese: '神戸でコンサートがあります。',
        segments: [
          { text: '神戸', furigana: 'こうべ' },
          { text: 'でコンサートがあります。' },
        ],
        romaji: 'Koube de konsaato ga arimasu.',
        spanish: 'Hay un concierto en Kobe.',
      },
    ],
  },
  {
    id: 'gp-l21-5',
    lessonId: 'l21',
    lessonNumber: 'Lección 21',
    order: 5,
    title: '5. S (situación) で',
    explanation:
      'Indica el marco coyuntural, circunstancia, ámbito o situación bajo la cual se desenvuelve una acción.',
    examples: [
      {
        japanese: '会議で何か意見を言いましたか。',
        segments: [
          { text: '会議', furigana: 'かいぎ' },
          { text: 'で' },
          { text: '何', furigana: 'なに' },
          { text: 'か' },
          { text: '意見', furigana: 'いけん' },
          { text: 'を' },
          { text: '言いました', furigana: 'いいました' },
          { text: 'か。' },
        ],
        romaji: 'Kaigi de nanika iken o iimashita ka.',
        spanish: '¿Expresó alguna opinión en la reunión?',
      },
    ],
  },
  {
    id: 'gp-l21-6',
    lessonId: 'l21',
    lessonNumber: 'Lección 21',
    order: 6,
    title: '6. S でも V',
    explanation:
      'Propone un ejemplo sugerente dentro de una categoría sin carácter excluyente ("por ejemplo...", "o algo por el estilo"), comúnmente empleado en invitaciones cordiales.',
    examples: [
      {
        japanese: 'ちょっとお茶でも飲みませんか。',
        segments: [
          { text: 'ちょっとお' },
          { text: '茶', furigana: 'ちゃ' },
          { text: 'でも' },
          { text: '飲みませんか', furigana: 'のみませんか' },
          { text: '。' },
        ],
        romaji: 'Chotto ocha demo nomimasen ka.',
        spanish: '¿Tomamos un té o algo parecido?',
      },
      {
        japanese: 'ビールでも飲みましょう。',
        segments: [
          { text: 'ビールでも' },
          { text: '飲みましょう', furigana: 'のみましょう' },
          { text: '。' },
        ],
        romaji: 'Biiru demo nomimashou.',
        spanish: 'Tomemos una cerveza o algo.',
      },
    ],
  },
  {
    id: 'gp-l21-7',
    lessonId: 'l21',
    lessonNumber: 'Lección 21',
    order: 7,
    title: '7. V（forma-ない）ないと……',
    explanation:
      'Construcción informal elíptica en la que se omite いけません al final de 〜ないといけません para expresar que se debe o tiene que realizar una acción ("Tengo que...", "Debo...").',
    examples: [
      {
        japanese: 'もう帰らないと……。',
        segments: [
          { text: 'もう' },
          { text: '帰らないと', furigana: 'かえらないと' },
          { text: '……。' },
        ],
        romaji: 'Mou kaeranai to...',
        spanish: 'Ya tengo que volverme...',
      },
    ],
  },

  // ==========================================
  // LECCIÓN 22
  // ==========================================
  {
    id: 'gp-l22-1',
    lessonId: 'l22',
    lessonNumber: 'Lección 22',
    order: 1,
    title: '1. Oración modificadora del sustantivo (Cláusula relativa)',
    explanation:
      'En japonés, cualquier oración completa en forma informal/llana se coloca inmediatamente delante de un sustantivo para calificarlo sin necesidad de pronombres relativos ("que", "donde"). El sujeto interno de la cláusula subordinada se marca siempre con が en vez de は.',
    examples: [
      {
        japanese: 'これはわたしが撮った写真です。',
        segments: [
          { text: 'これはわたしが' },
          { text: '撮った', furigana: 'とった' },
          { text: '写真', furigana: 'しゃしん' },
          { text: 'です。' },
        ],
        romaji: 'Kore wa watashi ga totta shashin desu.',
        spanish: 'Esta es la foto que yo tomé.',
      },
      {
        japanese: 'あそこにいる人はミラーさんです。',
        segments: [
          { text: 'あそこにいる' },
          { text: '人', furigana: 'ひと' },
          { text: 'はミラーさんです。' },
        ],
        romaji: 'Asoko ni iru hito wa Miraa-san desu.',
        spanish: 'La persona que está allí es el Sr. Miller.',
      },
      {
        japanese: 'きのう習ったことばを忘れました。',
        segments: [
          { text: 'きのう' },
          { text: '習った', furigana: 'ならった' },
          { text: 'ことばを' },
          { text: '忘れました', furigana: 'わすれました' },
          { text: '。' },
        ],
        romaji: 'Kinou naratta kotoba o wasuremashita.',
        spanish: 'Olvidé las palabras que aprendí ayer.',
      },
      {
        japanese: '彼が住んでいる家は大きいです。',
        segments: [
          { text: '彼', furigana: 'かれ' },
          { text: 'が' },
          { text: '住んで', furigana: 'すんで' },
          { text: 'いる' },
          { text: '家', furigana: 'いえ' },
          { text: 'は' },
          { text: '大きい', furigana: 'おおきい' },
          { text: 'です。' },
        ],
        romaji: 'Kare ga sunde iru ie wa ookii desu.',
        spanish: 'La casa donde él vive es grande.',
      },
    ],
  },
  {
    id: 'gp-l22-2',
    lessonId: 'l22',
    lessonNumber: 'Lección 22',
    order: 2,
    title: '2. V forma de diccionario + 時間 / 約束 / 用事',
    explanation:
      'Una oración en forma de diccionario modifica directamente a sustantivos que designan tiempo o compromisos como 時間 (tiempo para...), 約束 (cita/compromiso para...) o 用事 (asunto que hacer).',
    examples: [
      {
        japanese: '朝ごはんを食べる時間がありません。',
        segments: [
          { text: '朝', furigana: 'あさ' },
          { text: 'ごはんを' },
          { text: '食べる', furigana: 'たべる' },
          { text: '時間', furigana: 'じかん' },
          { text: 'がありません。' },
        ],
        romaji: 'Asagohan o taberu jikan ga arimasen.',
        spanish: 'No tengo tiempo para desayunar.',
      },
      {
        japanese: '友達と会う約束があります。',
        segments: [
          { text: '友達', furigana: 'ともだち' },
          { text: 'と' },
          { text: '会う', furigana: 'あう' },
          { text: '約束', furigana: 'やくそく' },
          { text: 'があります。' },
        ],
        romaji: 'Tomodachi to au yakusoku ga arimasu.',
        spanish: 'Tengo el compromiso de reunirme con un amigo.',
      },
      {
        japanese: '買い物に行く時間がありません。',
        segments: [
          { text: '買い物', furigana: 'かいもの' },
          { text: 'に' },
          { text: '行く', furigana: 'いく' },
          { text: '時間', furigana: 'じかん' },
          { text: 'がありません。' },
        ],
        romaji: 'Kaimono ni iku jikan ga arimasen.',
        spanish: 'No tengo tiempo para ir de compras.',
      },
    ],
  },

  // ==========================================
  // LECCIÓN 23
  // ==========================================
  {
    id: 'gp-l23-1',
    lessonId: 'l23',
    lessonNumber: 'Lección 23',
    order: 1,
    title: '1. Forma informal / A-な［な］/ S の + とき、〜',
    explanation:
      'Expresa el momento temporal o circunstancia en que se verifica una acción o situación ("Cuando...", "En el momento en que..."). Se une a adjetivos-な con な y a sustantivos con の.',
    examples: [
      {
        japanese: '図書館で本を借りるとき、カードが要ります。',
        segments: [
          { text: '図書館', furigana: 'としょかん' },
          { text: 'で' },
          { text: '本', furigana: 'ほん' },
          { text: 'を' },
          { text: '借りる', furigana: 'かりる' },
          { text: 'とき、カードが' },
          { text: '要ります', furigana: 'いります' },
          { text: '。' },
        ],
        romaji: 'Toshokan de hon o kariru toki, kaado ga irimasu.',
        spanish: 'Cuando se toman prestados libros en la biblioteca, se necesita carnet.',
      },
      {
        japanese: 'ひまなとき、本を読みます。',
        segments: [
          { text: 'ひまなとき、' },
          { text: '本', furigana: 'ほん' },
          { text: 'を' },
          { text: '読みます', furigana: 'よみます' },
          { text: '。' },
        ],
        romaji: 'Hima na toki, hon o yomimasu.',
        spanish: 'Cuando estoy libre, leo libros.',
      },
      {
        japanese: '学生のとき、よく勉強しました。',
        segments: [
          { text: '学生', furigana: 'がくせい' },
          { text: 'のとき、よく' },
          { text: '勉強', furigana: 'べんきょう' },
          { text: 'しました。' },
        ],
        romaji: 'Gakusei no toki, yoku benkyou shimashita.',
        spanish: 'Cuando era estudiante, estudiaba mucho.',
      },
    ],
  },
  {
    id: 'gp-l23-2',
    lessonId: 'l23',
    lessonNumber: 'Lección 23',
    order: 2,
    title: '2. V₁（forma de diccionario / forma-た）とき、V₂',
    explanation:
      'La elección de tiempo verbal en V₁ determina si la acción ya había culminado o no al realizar V₂:\n• V₁ (diccionario) + とき: V₁ todavía no se ha completado al realizarse V₂.\n• V₁ (forma-た) + とき: V₁ ya ha finalizado completamente antes de realizarse V₂.',
    examples: [
      {
        japanese: '国へ帰るとき、かばんを買いました。',
        segments: [
          { text: '国', furigana: 'くに' },
          { text: 'へ' },
          { text: '帰る', furigana: 'かえる' },
          { text: 'とき、かばんを' },
          { text: '買いました', furigana: 'かいま' },
          { text: 'した。' },
        ],
        romaji: 'Kuni e kaeru toki, kaban o kaimashita.',
        spanish: 'Compré una maleta cuando iba a regresar a mi país (antes de volver).',
      },
      {
        japanese: '国へ帰ったとき、かばんを買いました。',
        segments: [
          { text: '国', furigana: 'くに' },
          { text: 'へ' },
          { text: '帰った', furigana: 'かえった' },
          { text: 'とき、かばんを' },
          { text: '買いました', furigana: 'かいま' },
          { text: 'した。' },
        ],
        romaji: 'Kuni e kaetta toki, kaban o kaimashita.',
        spanish: 'Compré una maleta cuando regresé a mi país (ya estando en él).',
      },
    ],
  },
  {
    id: 'gp-l23-3',
    lessonId: 'l23',
    lessonNumber: 'Lección 23',
    order: 3,
    title: '3. V forma de diccionario + と、〜',
    explanation:
      'Condicional natural, inevitable o mecánico: expresa que siempre que se produce V₁, necesariamente e indefectiblemente sobreviene el resultado siguiente ("Al hacer...", "Si se gira/pulsa..."). Típico en instrucciones de aparatos y direcciones de calle.',
    examples: [
      {
        japanese: 'このボタンを押すと、お釣りが出ます。',
        segments: [
          { text: 'このボタンを' },
          { text: '押す', furigana: 'おす' },
          { text: 'と、お' },
          { text: '釣り', furigana: 'つり' },
          { text: 'が' },
          { text: '出ます', furigana: 'でます' },
          { text: '。' },
        ],
        romaji: 'Kono botan o osu to, otsuri ga demasu.',
        spanish: 'Al pulsar este botón, sale el cambio.',
      },
      {
        japanese: '右へ曲がると、郵便局があります。',
        segments: [
          { text: '右', furigana: 'みぎ' },
          { text: 'へ' },
          { text: '曲がる', furigana: 'まがる' },
          { text: 'と、' },
          { text: '郵便局', furigana: 'ゆうびんきょく' },
          { text: 'があります。' },
        ],
        romaji: 'Migi e magaru to, yuubinkyoku ga arimasu.',
        spanish: 'Al girar a la derecha, está la oficina de correos.',
      },
    ],
  },
  {
    id: 'gp-l23-4',
    lessonId: 'l23',
    lessonNumber: 'Lección 23',
    order: 4,
    title: '4. S が A',
    explanation:
      'La partícula が marca el sujeto o elemento específico que exhibe un atributo o fenómeno percibido en descripciones directas.',
    examples: [
      {
        japanese: '音が小さいです。',
        segments: [
          { text: '音', furigana: 'おと' },
          { text: 'が' },
          { text: '小さい', furigana: 'ちいさい' },
          { text: 'です。' },
        ],
        romaji: 'Oto ga chiisai desu.',
        spanish: 'El volumen está bajo.',
      },
    ],
  },
  {
    id: 'gp-l23-5',
    lessonId: 'l23',
    lessonNumber: 'Lección 23',
    order: 5,
    title: '5. S を V (Movimiento a través de un espacio)',
    explanation:
      'La partícula を designa el espacio físico o trayecto a lo largo del cual se produce una acción de desplazamiento (como 散歩します [pasear], 渡ります [cruzar], 曲がります [girar]).',
    examples: [
      {
        japanese: '公園を散歩します。',
        segments: [
          { text: '公園', furigana: 'こうえん' },
          { text: 'を' },
          { text: '散歩', furigana: 'さんぽ' },
          { text: 'します。' },
        ],
        romaji: 'Kouen o sanpo shimasu.',
        spanish: 'Paseo por el parque.',
      },
      {
        japanese: '道を渡ります。',
        segments: [
          { text: '道', furigana: 'みち' },
          { text: 'を' },
          { text: '渡ります', furigana: 'わたります' },
          { text: '。' },
        ],
        romaji: 'Michi o watarimasu.',
        spanish: 'Cruzo la calle.',
      },
    ],
  },

  // ==========================================
  // LECCIÓN 24
  // ==========================================
  {
    id: 'gp-l24-1',
    lessonId: 'l24',
    lessonNumber: 'Lección 24',
    order: 1,
    title: '1. くれます',
    explanation:
      'Significa "dar" o "regalar", pero se utiliza exclusivamente cuando un tercero le da algo al propio hablante (わたし) o a un miembro cercano de su familia.',
    examples: [
      {
        japanese: '佐藤さんはわたしに花をくれました。',
        segments: [
          { text: '佐藤', furigana: 'さとう' },
          { text: 'さんはわたしに' },
          { text: '花', furigana: 'はな' },
          { text: 'をくれました。' },
        ],
        romaji: 'Satou-san wa watashi ni hana o kuremashita.',
        spanish: 'La Srta. Sato me dio flores a mí.',
      },
      {
        japanese: '誕生日に父が時計をくれました。',
        segments: [
          { text: '誕生日', furigana: 'たんじょうび' },
          { text: 'に' },
          { text: '父', furigana: 'ちち' },
          { text: 'が' },
          { text: '時計', furigana: 'とけい' },
          { text: 'をくれました。' },
        ],
        romaji: 'Tanjoubi ni chichi ga tokei o kuremashita.',
        spanish: 'Mi padre me regaló un reloj por mi cumpleaños.',
      },
    ],
  },
  {
    id: 'gp-l24-2',
    lessonId: 'l24',
    lessonNumber: 'Lección 24',
    order: 2,
    title: '2. V forma-て + あげます / もらいます / くれます',
    explanation:
      'Estructuras de favor y reciprocidad benevolente en japonés:',
    subPoints: [
      {
        title: 'V forma-て あげます',
        explanation:
          'Realizar un favor o acción solidaria en beneficio de otra persona.',
        examples: [
          {
            japanese: 'わたしは木村さんに本を貸してあげました。',
            segments: [
              { text: 'わたしは' },
              { text: '木村', furigana: 'きむら' },
              { text: 'さんに' },
              { text: '本', furigana: 'ほん' },
              { text: 'を' },
              { text: '貸して', furigana: 'かして' },
              { text: 'あげました。' },
            ],
            romaji: 'Watashi wa Kimura-san ni hon o kashite agemashita.',
            spanish: 'Le presté un libro a la Srta. Kimura.',
          },
        ],
      },
      {
        title: 'V forma-て もらいます',
        explanation:
          'Recibir una acción o favor llevado a cabo por otra persona con agradecimiento (quien realiza la acción se señala con に).',
        examples: [
          {
            japanese: 'わたしは山田さんにレポートを直してもらいました。',
            segments: [
              { text: 'わたしは' },
              { text: '山田', furigana: 'やまだ' },
              { text: 'さんにレポートを' },
              { text: '直して', furigana: 'なおして' },
              { text: 'もらいました。' },
            ],
            romaji: 'Watashi wa Yamada-san ni repooto o naoshite moraimashita.',
            spanish: 'El Sr. Yamada me corrigió amablemente el informe.',
          },
        ],
      },
      {
        title: 'V forma-て くれます',
        explanation:
          'Cuando otra persona realiza un favor o servicio en beneficio del hablante o de su familia.',
        examples: [
          {
            japanese: '母はわたしにセーターを送ってくれました。',
            segments: [
              { text: '母', furigana: 'はは' },
              { text: 'はわたしにセーターを' },
              { text: '送って', furigana: 'おくって' },
              { text: 'くれました。' },
            ],
            romaji: 'Haha wa watashi ni seetaa o okutte kuremashita.',
            spanish: 'Mi madre me envió un suéter.',
          },
        ],
      },
    ],
  },

  // ==========================================
  // LECCIÓN 25
  // ==========================================
  {
    id: 'gp-l25-1',
    lessonId: 'l25',
    lessonNumber: 'Lección 25',
    order: 1,
    title: '1. V forma-たら、〜 (Condicional hipotético)',
    explanation:
      'Estructura condicional ("Si...", "En caso de que..."). Se forma añadiendo ら a la forma del pasado llano del verbo (forma-た + ら), adjetivos (〜かったら / だったら) o sustantivos (だったら).',
    examples: [
      {
        japanese: 'お金があったら、旅行します。',
        segments: [
          { text: 'お' },
          { text: '金', furigana: 'かね' },
          { text: 'が' },
          { text: 'あったら、' },
          { text: '旅行', furigana: 'りょこう' },
          { text: 'します。' },
        ],
        romaji: 'Okane ga attara, ryokou shimasu.',
        spanish: 'Si tuviera dinero, viajaría.',
      },
      {
        japanese: '雨が降ったら、出かけません。',
        segments: [
          { text: '雨', furigana: 'あめ' },
          { text: 'が' },
          { text: '降ったら', furigana: 'ふったら' },
          { text: '、' },
          { text: '出かけません', furigana: 'でかけません' },
          { text: '。' },
        ],
        romaji: 'Ame ga futtara, dekakemasen.',
        spanish: 'Si llueve, no saldré.',
      },
      {
        japanese: '安かったら、パソコンを買いたいです。',
        segments: [
          { text: '安かったら', furigana: 'やすかったら' },
          { text: '、パソコンを' },
          { text: '買いたいです', furigana: 'かいたいです' },
          { text: '。' },
        ],
        romaji: 'Yasukattara, pasokon o kaitai desu.',
        spanish: 'Si es barato, quiero comprarme un ordenador.',
      },
    ],
  },
  {
    id: 'gp-l25-2',
    lessonId: 'l25',
    lessonNumber: 'Lección 25',
    order: 2,
    title: '2. V forma-たら、〜 (Secuencia temporal condicionada)',
    explanation:
      'Indica que la acción de la oración principal se realizará obligatoriamente una vez que haya concluido de forma definitiva la condición previa ("Una vez que...", "Cuando...").',
    examples: [
      {
        japanese: '7時になったら、出かけましょう。',
        segments: [
          { text: '7' },
          { text: '時', furigana: 'じ' },
          { text: 'になったら、' },
          { text: '出かけましょう', furigana: 'でかけましょう' },
          { text: '。' },
        ],
        romaji: 'Shichi-ji ni nattara, dekakemashou.',
        spanish: 'Cuando sean las 7, salgamos.',
      },
      {
        japanese: '仕事が終わったら、すぐに帰りましょう。',
        segments: [
          { text: '仕事', furigana: 'しごと' },
          { text: 'が' },
          { text: '終わったら', furigana: 'おわったら' },
          { text: '、すぐに' },
          { text: '帰りましょう', furigana: 'かえりましょう' },
          { text: '。' },
        ],
        romaji: 'Shigoto ga owattara, sugu ni kaerimashou.',
        spanish: 'En cuanto termine el trabajo, volvamos enseguida.',
      },
    ],
  },
  {
    id: 'gp-l25-3',
    lessonId: 'l25',
    lessonNumber: 'Lección 25',
    order: 3,
    title: '3. V forma-て / A-い (〜くて) / A-な (〜で) / S で + も、〜',
    explanation:
      'Condicional concesivo ("Aunque...", "Aun cuando..."). Expresa que se realiza la acción principal independientemente de la condición o circunstancia.',
    examples: [
      {
        japanese: '雨が降っても、出かけます。',
        segments: [
          { text: '雨', furigana: 'あめ' },
          { text: 'が' },
          { text: '降っても', furigana: 'ふっても' },
          { text: '、' },
          { text: '出かけます', furigana: 'でかけます' },
          { text: '。' },
        ],
        romaji: 'Ame ga futtemo, dekakemasu.',
        spanish: 'Aunque llueva, saldré.',
      },
      {
        japanese: '安くても、買いません。',
        segments: [
          { text: '安くても', furigana: 'やすくても' },
          { text: '、' },
          { text: '買いません', furigana: 'かいません' },
          { text: '。' },
        ],
        romaji: 'Yasukutemo, kaimasen.',
        spanish: 'Aunque sea barato, no lo compraré.',
      },
      {
        japanese: '部屋が狭くても、家賃が高かったら、借りません。',
        segments: [
          { text: '部屋', furigana: 'へや' },
          { text: 'が' },
          { text: '狭くても', furigana: 'せまくても' },
          { text: '、' },
          { text: '家賃', furigana: 'やちん' },
          { text: 'が' },
          { text: '高かったら', furigana: 'たかかったら' },
          { text: '、' },
          { text: '借りません', furigana: 'かりません' },
          { text: '。' },
        ],
        romaji: 'Heya ga semakutemo, yachin ga takakattara, karimasen.',
        spanish: 'Aunque la habitación sea pequeña, si el alquiler es caro, no la alquilo.',
      },
    ],
  },
  {
    id: 'gp-l25-4',
    lessonId: 'l25',
    lessonNumber: 'Lección 25',
    order: 4,
    title: '4. もし',
    explanation:
      'Adverbio que se antepone al inicio de cláusulas condicionales (〜たら o 〜ても) para anticipar explícitamente que se plantea una hipótesis ("Si por casualidad...", "En el supuesto de que...").',
    examples: [
      {
        japanese: 'もし1億円あったら、いろいろな国を旅行したいです。',
        segments: [
          { text: 'もし1' },
          { text: '億', furigana: 'おく' },
          { text: '円', furigana: 'えん' },
          { text: 'あったら、いろいろな' },
          { text: '国', furigana: 'くに' },
          { text: 'を' },
          { text: '旅行したい', furigana: 'りょこうしたい' },
          { text: 'です。' },
        ],
        romaji: 'Moshi ichioku-en attara, iroiro na kuni o ryokou shitai desu.',
        spanish: 'Si tuviera 100 millones de yenes, querría viajar por muchos países.',
      },
    ],
  },
  {
    id: 'gp-l25-5',
    lessonId: 'l25',
    lessonNumber: 'Lección 25',
    order: 5,
    title: '5. Sujeto de la sentencia subordinada',
    explanation:
      'En las oraciones subordinadas condicionales (たら, ても) y temporales (とき, まえに, てから), el sujeto de la cláusula subordinada se marca siempre con la partícula が (y nunca con は).',
    examples: [
      {
        japanese: '友達が来るまえに、部屋を掃除します。',
        segments: [
          { text: '友達', furigana: 'ともだち' },
          { text: 'が' },
          { text: '来る', furigana: 'くる' },
          { text: 'まえに、' },
          { text: '部屋', furigana: 'へや' },
          { text: 'を' },
          { text: '掃除', furigana: 'そうじ' },
          { text: 'します。' },
        ],
        romaji: 'Tomodachi ga kuru mae ni, heya o souji shimasu.',
        spanish: 'Antes de que venga mi amigo, limpio la habitación.',
      },
    ],
  },
];

export const GRAMMAR_BY_ID = new Map<string, GrammarPoint>(
  MNN_GRAMMAR.map((gp) => [gp.id, gp])
);

export function getGrammarByLesson(lessonId: string): GrammarPoint[] {
  if (lessonId === 'all') return MNN_GRAMMAR;
  return MNN_GRAMMAR.filter((gp) => gp.lessonId === lessonId);
}

export function getGrammarForSentence(s: {
  id: string;
  lessonId: string;
  japaneseText: string;
  grammarIds?: string[];
}): GrammarPoint[] {
  if (s.grammarIds && s.grammarIds.length > 0) {
    return s.grammarIds
      .map((id) => GRAMMAR_BY_ID.get(id))
      .filter((gp): gp is GrammarPoint => Boolean(gp));
  }

  const results: GrammarPoint[] = [];
  const text = s.japaneseText;
  const lId = s.lessonId;

  if (lId === 'l01') {
    if (text.includes('じゃありません') || text.includes('ではありません')) {
      const gp = GRAMMAR_BY_ID.get('gp-l01-2');
      if (gp) results.push(gp);
    }
    if (text.includes('ですか')) {
      const gp = GRAMMAR_BY_ID.get('gp-l01-3');
      if (gp) results.push(gp);
    }
    if (text.includes('も') && (text.includes('です') || text.includes('学生') || text.includes('会社員'))) {
      const gp = GRAMMAR_BY_ID.get('gp-l01-4');
      if (gp) results.push(gp);
    }
    if (text.includes('の') && (text.includes('社員') || text.includes('先生') || text.includes('大学'))) {
      const gp = GRAMMAR_BY_ID.get('gp-l01-5');
      if (gp) results.push(gp);
    }
    if (text.includes('さん')) {
      const gp = GRAMMAR_BY_ID.get('gp-l01-6');
      if (gp) results.push(gp);
    }
    if (results.length === 0 || (text.includes('は') && text.includes('です'))) {
      const gp = GRAMMAR_BY_ID.get('gp-l01-1');
      if (gp && !results.includes(gp)) results.unshift(gp);
    }
  } else if (lId === 'l02') {
    if (text.includes('これ') || text.includes('それ') || text.includes('あれ')) {
      const gp = GRAMMAR_BY_ID.get('gp-l02-1');
      if (gp) results.push(gp);
    }
    if (text.includes('この') || text.includes('その') || text.includes('あの')) {
      const gp = GRAMMAR_BY_ID.get('gp-l02-2');
      if (gp) results.push(gp);
    }
    if (text.includes('そうです') || text.includes('違います')) {
      const gp = GRAMMAR_BY_ID.get('gp-l02-3');
      if (gp) results.push(gp);
    }
    if (text.includes('ですか、') || text.includes('ですか。…「')) {
      const gp = GRAMMAR_BY_ID.get('gp-l02-4');
      if (gp) results.push(gp);
    }
    if (text.includes('のです') || text.includes('のですか') || text.includes('さんのです')) {
      const gp = GRAMMAR_BY_ID.get('gp-l02-6');
      if (gp) results.push(gp);
    }
    if (text.includes('の') && !results.some((r) => r.id === 'gp-l02-6')) {
      const gp = GRAMMAR_BY_ID.get('gp-l02-5');
      if (gp) results.push(gp);
    }
    if (text.includes('お茶') || text.includes('お土産')) {
      const gp = GRAMMAR_BY_ID.get('gp-l02-7');
      if (gp) results.push(gp);
    }
    if (text.includes('そうですか')) {
      const gp = GRAMMAR_BY_ID.get('gp-l02-8');
      if (gp) results.push(gp);
    }
  } else if (lId === 'l03') {
    if (
      text.includes('ここ') ||
      text.includes('そこ') ||
      text.includes('あそこ') ||
      text.includes('こちら') ||
      text.includes('そちら') ||
      text.includes('あちら')
    ) {
      const gp = GRAMMAR_BY_ID.get('gp-l03-1');
      if (gp) results.push(gp);
    }
    if (text.includes('は') && (text.includes('階') || text.includes('あそこ') || text.includes('こちら'))) {
      const gp = GRAMMAR_BY_ID.get('gp-l03-2');
      if (gp) results.push(gp);
    }
    if (text.includes('どこ') || text.includes('どちら')) {
      const gp = GRAMMAR_BY_ID.get('gp-l03-3');
      if (gp) results.push(gp);
    }
    if (text.includes('どこの') || (text.includes('の') && (text.includes('コンピューター') || text.includes('ワイン')))) {
      const gp = GRAMMAR_BY_ID.get('gp-l03-4');
      if (gp) results.push(gp);
    }
    if (text.includes('お国') || text.includes('お手洗い') || text.includes('お名前')) {
      const gp = GRAMMAR_BY_ID.get('gp-l03-6');
      if (gp) results.push(gp);
    }
  } else if (lId === 'l04') {
    if (text.includes('時') || text.includes('分')) {
      const gp = GRAMMAR_BY_ID.get('gp-l04-1');
      if (gp) results.push(gp);
    }
    if (text.includes('に起きます') || text.includes('に寝ます') || text.includes('に終わります') || text.includes('時に')) {
      const gp = GRAMMAR_BY_ID.get('gp-l04-3');
      if (gp) results.push(gp);
    }
    if (text.includes('から') || text.includes('まで')) {
      const gp = GRAMMAR_BY_ID.get('gp-l04-4');
      if (gp) results.push(gp);
    }
    if (text.includes('と') && (text.includes('土曜日') || text.includes('日曜日'))) {
      const gp = GRAMMAR_BY_ID.get('gp-l04-5');
      if (gp) results.push(gp);
    }
    if (text.includes('ね。') || text.includes('ですね')) {
      const gp = GRAMMAR_BY_ID.get('gp-l04-6');
      if (gp) results.push(gp);
    }
    if (
      text.includes('ます') ||
      text.includes('ません') ||
      text.includes('ました')
    ) {
      const gp = GRAMMAR_BY_ID.get('gp-l04-2');
      if (gp && !results.some((r) => r.id === 'gp-l04-2')) results.push(gp);
    }
  } else if (lId === 'l05') {
    if (text.includes('へ') && (text.includes('行き') || text.includes('来') || text.includes('帰り'))) {
      const gp = GRAMMAR_BY_ID.get('gp-l05-1');
      if (gp) results.push(gp);
    }
    if (text.includes('どこへも') || text.includes('どこも')) {
      const gp = GRAMMAR_BY_ID.get('gp-l05-2');
      if (gp) results.push(gp);
    }
    if (
      (text.includes('で') && (text.includes('電車') || text.includes('新幹線') || text.includes('バス') || text.includes('タクシー') || text.includes('飛行機'))) ||
      text.includes('歩いて')
    ) {
      const gp = GRAMMAR_BY_ID.get('gp-l05-3');
      if (gp) results.push(gp);
    }
    if (text.includes('と') && (text.includes('家族') || text.includes('友達') || text.includes('彼') || text.includes('彼女') || text.includes('一人で'))) {
      const gp = GRAMMAR_BY_ID.get('gp-l05-4');
      if (gp) results.push(gp);
    }
    if (text.includes('いつ')) {
      const gp = GRAMMAR_BY_ID.get('gp-l05-5');
      if (gp) results.push(gp);
    }
    if (text.includes('よ。') || text.includes('ですよ')) {
      const gp = GRAMMAR_BY_ID.get('gp-l05-6');
      if (gp) results.push(gp);
    }
    if (text.includes('そうですね')) {
      const gp = GRAMMAR_BY_ID.get('gp-l05-7');
      if (gp) results.push(gp);
    }
  } else if (lId === 'l06') {
    if (text.includes('ませんか')) {
      const gp = GRAMMAR_BY_ID.get('gp-l06-6');
      if (gp) results.push(gp);
    }
    if (text.includes('ましょう')) {
      const gp = GRAMMAR_BY_ID.get('gp-l06-7');
      if (gp) results.push(gp);
    }
    if (text.includes('何をしますか') || text.includes('何をしましたか')) {
      const gp = GRAMMAR_BY_ID.get('gp-l06-3');
      if (gp) results.push(gp);
    }
    if (text.includes('サッカー') || text.includes('テニスをします') || text.includes('宿題') || text.includes('仕事をします')) {
      const gp = GRAMMAR_BY_ID.get('gp-l06-2');
      if (gp) results.push(gp);
    }
    if (text.includes('で') && (text.includes('買') || text.includes('食') || text.includes('飲') || text.includes('見') || text.includes('会'))) {
      const gp = GRAMMAR_BY_ID.get('gp-l06-5');
      if (gp) results.push(gp);
    }
    if (text.includes('何')) {
      const gp = GRAMMAR_BY_ID.get('gp-l06-4');
      if (gp) results.push(gp);
    }
    if (text.includes('を') && !results.some((r) => r.id === 'gp-l06-1')) {
      const gp = GRAMMAR_BY_ID.get('gp-l06-1');
      if (gp) results.unshift(gp);
    }
  } else if (lId === 'l07') {
    if (text.includes('あげます') || text.includes('あげました')) {
      const gp = GRAMMAR_BY_ID.get('gp-l07-3');
      if (gp) results.push(gp);
    }
    if (text.includes('もらいます') || text.includes('もらいました') || text.includes('借ります') || text.includes('借りました') || text.includes('習います')) {
      const gp = GRAMMAR_BY_ID.get('gp-l07-4');
      if (gp) results.push(gp);
    }
    if (text.includes('もう') || text.includes('まだです')) {
      const gp = GRAMMAR_BY_ID.get('gp-l07-5');
      if (gp) results.push(gp);
    }
    if (text.includes('語で何ですか') || text.includes('語で')) {
      const gp = GRAMMAR_BY_ID.get('gp-l07-2');
      if (gp) results.push(gp);
    }
    if (text.includes('で') && (text.includes('食') || text.includes('切') || text.includes('書') || text.includes('見') || text.includes('はし') || text.includes('ハサミ') || text.includes('パソコン'))) {
      const gp = GRAMMAR_BY_ID.get('gp-l07-1');
      if (gp) results.push(gp);
    }
    if (text.includes('すてきですね')) {
      const gp = GRAMMAR_BY_ID.get('gp-l07-6');
      if (gp) results.push(gp);
    }
  } else if (lId === 'l08') {
    if (text.includes('ですが') || text.includes('が、')) {
      const gp = GRAMMAR_BY_ID.get('gp-l08-4');
      if (gp) results.push(gp);
    }
    if (text.includes('どうですか')) {
      const gp = GRAMMAR_BY_ID.get('gp-l08-6');
      if (gp) results.push(gp);
    }
    if (text.includes('どんな')) {
      const gp = GRAMMAR_BY_ID.get('gp-l08-7');
      if (gp) results.push(gp);
    }
    if (text.includes('とても') || text.includes('あまり')) {
      const gp = GRAMMAR_BY_ID.get('gp-l08-5');
      if (gp) results.push(gp);
    }
    if (text.includes('そうですね')) {
      const gp = GRAMMAR_BY_ID.get('gp-l08-8');
      if (gp) results.push(gp);
    }
    if (text.includes('親切な') || text.includes('静かな') || text.includes('きれいな') || text.includes('有名な') || text.includes('高い山') || text.includes('おいしい')) {
      const gp = GRAMMAR_BY_ID.get('gp-l08-3');
      if (gp) results.push(gp);
    }
    if (results.length === 0 || text.includes('です')) {
      const gp = GRAMMAR_BY_ID.get('gp-l08-2');
      if (gp && !results.includes(gp)) results.push(gp);
    }
  } else if (lId === 'l09') {
    if (text.includes('どうして')) {
      const gp = GRAMMAR_BY_ID.get('gp-l09-5');
      if (gp) results.push(gp);
    }
    if (text.includes('から、') || text.includes('から。') || text.includes('ですから')) {
      const gp = GRAMMAR_BY_ID.get('gp-l09-4');
      if (gp) results.push(gp);
    }
    if (text.includes('どんな')) {
      const gp = GRAMMAR_BY_ID.get('gp-l09-2');
      if (gp) results.push(gp);
    }
    if (text.includes('よく') || text.includes('だいたい') || text.includes('たくさん') || text.includes('少し') || text.includes('全然') || text.includes('あまり')) {
      const gp = GRAMMAR_BY_ID.get('gp-l09-3');
      if (gp) results.push(gp);
    }
    if (text.includes('好き') || text.includes('嫌い') || text.includes('上手') || text.includes('下手') || text.includes('わかります') || text.includes('あります')) {
      const gp = GRAMMAR_BY_ID.get('gp-l09-1');
      if (gp) results.push(gp);
    }
  } else if (lId === 'l10') {
    if (text.includes('の上') || text.includes('の下') || text.includes('の前') || text.includes('の後ろ') || text.includes('の中') || text.includes('の間') || text.includes('の隣') || text.includes('の近く') || text.includes('の右') || text.includes('の左')) {
      const gp = GRAMMAR_BY_ID.get('gp-l10-4');
      if (gp) results.push(gp);
    }
    if (text.includes('や') && (text.includes('写真') || text.includes('手紙') || text.includes('など') || text.includes('パンや'))) {
      const gp = GRAMMAR_BY_ID.get('gp-l10-5');
      if (gp) results.push(gp);
    }
    if (text.includes('は') && (text.includes('にあります') || text.includes('にいます'))) {
      const gp = GRAMMAR_BY_ID.get('gp-l10-3');
      if (gp) results.push(gp);
    }
    if (text.includes('に') && (text.includes('があります') || text.includes('がいます'))) {
      const gp = GRAMMAR_BY_ID.get('gp-l10-2');
      if (gp) results.push(gp);
    }
    if (text.includes('あります') || text.includes('います')) {
      const gp = GRAMMAR_BY_ID.get('gp-l10-1');
      if (gp && !results.some((r) => r.id === 'gp-l10-2' || r.id === 'gp-l10-3')) results.push(gp);
    }
    if (text.includes('ですか。あそこ')) {
      const gp = GRAMMAR_BY_ID.get('gp-l10-6');
      if (gp) results.push(gp);
    }
  } else if (lId === 'l11') {
    if (text.includes('だけ')) {
      const gp = GRAMMAR_BY_ID.get('gp-l11-4');
      if (gp) results.push(gp);
    }
    if (text.includes('に何回') || text.includes('に2回') || text.includes('に1回') || text.includes('週間に') || text.includes('か月に') || text.includes('日に') || text.includes('年に')) {
      const gp = GRAMMAR_BY_ID.get('gp-l11-3');
      if (gp) results.push(gp);
    }
    if (text.includes('いくつ') || text.includes('何人') || text.includes('何枚') || text.includes('何台') || text.includes('何本') || text.includes('どのくらい') || text.includes('つ買い') || text.includes('人います') || text.includes('人です') || text.includes('枚買い')) {
      const gp = GRAMMAR_BY_ID.get('gp-l11-2');
      if (gp) results.push(gp);
    }
    if (text.includes('つ') || text.includes('人') || text.includes('枚') || text.includes('台') || text.includes('回') || text.includes('時間') || text.includes('兄弟') || text.includes('切手')) {
      const gp = GRAMMAR_BY_ID.get('gp-l11-1');
      if (gp && !results.some((r) => r.id === 'gp-l11-2' || r.id === 'gp-l11-3' || r.id === 'gp-l11-4')) results.push(gp);
    }
  } else if (lId === 'l12') {
    if (text.includes('いちばん') || text.includes('一番')) {
      const gp = GRAMMAR_BY_ID.get('gp-l12-5');
      if (gp) results.push(gp);
    }
    if (text.includes('どちら') || text.includes('のほうが') || text.includes('のほう')) {
      const gp = GRAMMAR_BY_ID.get('gp-l12-4');
      if (gp) results.push(gp);
    }
    if (text.includes('より')) {
      const gp = GRAMMAR_BY_ID.get('gp-l12-3');
      if (gp) results.push(gp);
    }
    if (text.includes('の［を］') || text.includes('のをください') || text.includes('いの一') || text.includes('いのを')) {
      const gp = GRAMMAR_BY_ID.get('gp-l12-6');
      if (gp) results.push(gp);
    }
    if (text.includes('かったです') || text.includes('くなかったです') || text.includes('よかったです') || text.includes('よくなかったです')) {
      const gp = GRAMMAR_BY_ID.get('gp-l12-2');
      if (gp) results.push(gp);
    }
    if (text.includes('でした') || text.includes('じゃありませんでした')) {
      const gp = GRAMMAR_BY_ID.get('gp-l12-1');
      if (gp) results.push(gp);
    }
  } else if (lId === 'l13') {
    if (text.includes('欲しい') || text.includes('欲しくない') || text.includes('ほしい')) {
      const gp = GRAMMAR_BY_ID.get('gp-l13-1');
      if (gp) results.push(gp);
    }
    if (text.includes('たいです') || text.includes('たくない') || text.includes('たかった') || text.includes('たいですか') || text.includes('食べたい') || text.includes('行きたい') || text.includes('旅行したい')) {
      const gp = GRAMMAR_BY_ID.get('gp-l13-2');
      if (gp) results.push(gp);
    }
    if (text.includes('に行き') || text.includes('に来') || text.includes('に帰り') || text.includes('にいきます') || text.includes('にきました') || text.includes('習いに') || text.includes('見に') || text.includes('スキーに') || text.includes('買い物に') || text.includes('勉強に来')) {
      const gp = GRAMMAR_BY_ID.get('gp-l13-3');
      if (gp) results.push(gp);
    }
    if (text.includes('どこか') || text.includes('何か') || text.includes('だれか') || text.includes('いつか')) {
      const gp = GRAMMAR_BY_ID.get('gp-l13-4');
      if (gp) results.push(gp);
    }
    if (text.includes('ご注文') || text.includes('ご家族') || text.includes('定食')) {
      const gp = GRAMMAR_BY_ID.get('gp-l13-5');
      if (gp) results.push(gp);
    }
  } else if (lId === 'l14') {
    if (text.includes('すみませんが')) {
      const gp = GRAMMAR_BY_ID.get('gp-l14-7');
      if (gp) results.push(gp);
    }
    if (text.includes('雨が') || text.includes('雪が') || text.includes('風が')) {
      const gp = GRAMMAR_BY_ID.get('gp-l14-6');
      if (gp) results.push(gp);
    }
    if (text.includes('ましょうか')) {
      const gp = GRAMMAR_BY_ID.get('gp-l14-5');
      if (gp) results.push(gp);
    }
    if (text.includes('てください') || text.includes('でください')) {
      const gp = GRAMMAR_BY_ID.get('gp-l14-3');
      if (gp) results.push(gp);
    }
    if (text.includes('ています') || text.includes('ていません') || text.includes('でいます')) {
      const gp = GRAMMAR_BY_ID.get('gp-l14-4');
      if (gp) results.push(gp);
    }
    if (!results.some((r) => r.lessonId === 'l14')) {
      const gp = GRAMMAR_BY_ID.get('gp-l14-2');
      if (gp) results.push(gp);
    }
  } else if (lId === 'l15') {
    if (text.includes('てもいい') || text.includes('でもいい')) {
      const gp = GRAMMAR_BY_ID.get('gp-l15-1');
      if (gp) results.push(gp);
    }
    if (text.includes('てはいけません') || text.includes('ではいけません')) {
      const gp = GRAMMAR_BY_ID.get('gp-l15-2');
      if (gp) results.push(gp);
    }
    if (text.includes('知っています') || text.includes('住んでいます') || text.includes('持っています') || text.includes('結婚しています') || text.includes('作っています') || text.includes('売っています') || text.includes('知りません') || text.includes('研究しています')) {
      const gp = GRAMMAR_BY_ID.get('gp-l15-3');
      if (gp) results.push(gp);
    }
    if (text.includes('に座') || text.includes('に入り') || text.includes('に乗') || text.includes('に泊')) {
      const gp = GRAMMAR_BY_ID.get('gp-l15-4');
      if (gp) results.push(gp);
    }
    if (text.includes('に荷物を') || text.includes('に名前を') || text.includes('に置いて') || text.includes('に置')) {
      const gp = GRAMMAR_BY_ID.get('gp-l15-5');
      if (gp) results.push(gp);
    }
  } else if (lId === 'l16') {
    if (text.includes('てから') || text.includes('でから')) {
      const gp = GRAMMAR_BY_ID.get('gp-l16-2');
      if (gp) results.push(gp);
    }
    if (text.includes('どうやって')) {
      const gp = GRAMMAR_BY_ID.get('gp-l16-5');
      if (gp) results.push(gp);
    }
    if (text.includes('を降り') || text.includes('を出') || text.includes('をおり') || text.includes('をで') || text.includes('電車を') || text.includes('バスを')) {
      const gp = GRAMMAR_BY_ID.get('gp-l16-4');
      if (gp) results.push(gp);
    }
    if ((text.includes('は') && text.includes('が')) && (text.includes('おいしい') || text.includes('きれい') || text.includes('長い') || text.includes('短い') || text.includes('高い') || text.includes('黒い') || text.includes('多い') || text.includes('青い') || text.includes('親切'))) {
      const gp = GRAMMAR_BY_ID.get('gp-l16-3');
      if (gp) results.push(gp);
    }
    if (text.includes('くて') || text.includes('で、') || text.includes('て、') || text.includes('浴びて') || text.includes('起きて')) {
      const gp = GRAMMAR_BY_ID.get('gp-l16-1');
      if (gp) results.push(gp);
    }
  } else if (lId === 'l17') {
    if (text.includes('ないでください') || text.includes('ないで')) {
      const gp = GRAMMAR_BY_ID.get('gp-l17-2');
      if (gp) results.push(gp);
    }
    if (text.includes('なければなりません') || text.includes('なければ')) {
      const gp = GRAMMAR_BY_ID.get('gp-l17-3');
      if (gp) results.push(gp);
    }
    if (text.includes('なくてもいい')) {
      const gp = GRAMMAR_BY_ID.get('gp-l17-4');
      if (gp) results.push(gp);
    }
    if (text.includes('までに')) {
      const gp = GRAMMAR_BY_ID.get('gp-l17-6');
      if (gp) results.push(gp);
    }
    if (text.includes('荷物は') || text.includes('パスポートは') || text.includes('レポートは')) {
      const gp = GRAMMAR_BY_ID.get('gp-l17-5');
      if (gp) results.push(gp);
    }
    if (text.includes('ない') && !results.some((r) => r.lessonId === 'l17')) {
      const gp = GRAMMAR_BY_ID.get('gp-l17-1');
      if (gp) results.push(gp);
    }
  } else if (lId === 'l18') {
    if (text.includes('ことができます') || text.includes('ができます') || text.includes('ができません') || text.includes('ができる')) {
      const gp = GRAMMAR_BY_ID.get('gp-l18-2');
      if (gp) results.push(gp);
    }
    if (text.includes('趣味') || text.includes('集めることです') || text.includes('撮ることです') || text.includes('聞くことです') || text.includes('ことです')) {
      const gp = GRAMMAR_BY_ID.get('gp-l18-3');
      if (gp) results.push(gp);
    }
    if (text.includes('まえに') || text.includes('前に')) {
      const gp = GRAMMAR_BY_ID.get('gp-l18-4');
      if (gp) results.push(gp);
    }
    if (text.includes('なかなか')) {
      const gp = GRAMMAR_BY_ID.get('gp-l18-5');
      if (gp) results.push(gp);
    }
    if (text.includes('ぜひ')) {
      const gp = GRAMMAR_BY_ID.get('gp-l18-6');
      if (gp) results.push(gp);
    }
    if (!results.some((r) => r.lessonId === 'l18')) {
      const gp = GRAMMAR_BY_ID.get('gp-l18-1');
      if (gp) results.push(gp);
    }
  } else if (lId === 'l19') {
    if (text.includes('たことがあります') || text.includes('たことがある') || text.includes('たことある') || text.includes('だことがあります')) {
      const gp = GRAMMAR_BY_ID.get('gp-l19-2');
      if (gp) results.push(gp);
    }
    if (text.includes('たり')) {
      const gp = GRAMMAR_BY_ID.get('gp-l19-3');
      if (gp) results.push(gp);
    }
    if (text.includes('なります') || text.includes('なりました') || text.includes('くなら') || text.includes('になっ')) {
      const gp = GRAMMAR_BY_ID.get('gp-l19-4');
      if (gp) results.push(gp);
    }
    if (!results.some((r) => r.lessonId === 'l19')) {
      const gp = GRAMMAR_BY_ID.get('gp-l19-1');
      if (gp) results.push(gp);
    }
  } else if (lId === 'l20') {
    if (text.includes('？') || text.includes('うん') || text.includes('ううん') || text.includes('だよ') || text.includes('だね') || text.includes('食べた？') || text.includes('行く？')) {
      const gp = GRAMMAR_BY_ID.get('gp-l20-3');
      if (gp) results.push(gp);
    }
    if (text.endsWith('だ。') || text.endsWith('だった。') || text.endsWith('ない。') || text.endsWith('多い。') || text.endsWith('きれいだ。') || text.endsWith('ある。')) {
      const gp = GRAMMAR_BY_ID.get('gp-l20-1');
      if (gp) results.push(gp);
    }
    if (!results.some((r) => r.lessonId === 'l20')) {
      const gp = GRAMMAR_BY_ID.get('gp-l20-2');
      if (gp) results.push(gp);
    }
  } else if (lId === 'l21') {
    if (text.includes('と思います') || text.includes('と思う')) {
      const gp = GRAMMAR_BY_ID.get('gp-l21-1');
      if (gp) results.push(gp);
    }
    if (text.includes('と言いました') || text.includes('と言います') || text.includes('と言った')) {
      const gp = GRAMMAR_BY_ID.get('gp-l21-2');
      if (gp) results.push(gp);
    }
    if (text.includes('でしょう') || text.includes('だろう')) {
      const gp = GRAMMAR_BY_ID.get('gp-l21-3');
      if (gp) results.push(gp);
    }
    if (text.includes('で') && (text.includes('試合') || text.includes('コンサート') || text.includes('パーティー') || text.includes('祭り')) && text.includes('あります')) {
      const gp = GRAMMAR_BY_ID.get('gp-l21-4');
      if (gp) results.push(gp);
    }
    if (text.includes('でも')) {
      const gp = GRAMMAR_BY_ID.get('gp-l21-6');
      if (gp) results.push(gp);
    }
    if (text.includes('ないと')) {
      const gp = GRAMMAR_BY_ID.get('gp-l21-7');
      if (gp) results.push(gp);
    }
    if (text.includes('会議で') || (text.includes('で') && text.includes('意見'))) {
      const gp = GRAMMAR_BY_ID.get('gp-l21-5');
      if (gp) results.push(gp);
    }
  } else if (lId === 'l22') {
    if (text.includes('時間') || text.includes('約束') || text.includes('用事')) {
      const gp = GRAMMAR_BY_ID.get('gp-l22-2');
      if (gp) results.push(gp);
    }
    if (text.includes('写真') || text.includes('人') || text.includes('ことば') || text.includes('家') || text.includes('部屋') || text.includes('本') || !results.some((r) => r.lessonId === 'l22')) {
      const gp = GRAMMAR_BY_ID.get('gp-l22-1');
      if (gp) results.push(gp);
    }
  } else if (lId === 'l23') {
    if (text.includes('押すと') || text.includes('曲がると') || text.includes('回すと') || text.includes('行くと、') || text.includes('と、お釣り') || text.includes('と、郵便局')) {
      const gp = GRAMMAR_BY_ID.get('gp-l23-3');
      if (gp) results.push(gp);
    }
    if (text.includes('を散歩') || text.includes('を渡り') || text.includes('を曲がり') || text.includes('をわたり') || text.includes('道を') || text.includes('橋を') || text.includes('交差点を')) {
      const gp = GRAMMAR_BY_ID.get('gp-l23-5');
      if (gp) results.push(gp);
    }
    if (text.includes('帰るとき') || text.includes('帰ったとき') || text.includes('行くとき') || text.includes('行ったとき') || text.includes('出るとき') || text.includes('出たとき')) {
      const gp = GRAMMAR_BY_ID.get('gp-l23-2');
      if (gp) results.push(gp);
    }
    if (text.includes('とき') && !results.some((r) => r.id === 'gp-l23-2')) {
      const gp = GRAMMAR_BY_ID.get('gp-l23-1');
      if (gp) results.push(gp);
    }
    if (text.includes('音が') || text.includes('天気が') || text.includes('ボタンが')) {
      const gp = GRAMMAR_BY_ID.get('gp-l23-4');
      if (gp) results.push(gp);
    }
  } else if (lId === 'l24') {
    if (text.includes('てあげ') || text.includes('てもらい') || text.includes('てもらいました') || text.includes('てくれ') || text.includes('てくれました') || text.includes('でくれ') || text.includes('直してもらいました') || text.includes('送ってくれました') || text.includes('貸してあげました') || text.includes('手伝ってもらいました')) {
      const gp = GRAMMAR_BY_ID.get('gp-l24-2');
      if (gp) results.push(gp);
    }
    if (text.includes('くれました') || text.includes('くれます')) {
      const gp = GRAMMAR_BY_ID.get('gp-l24-1');
      if (gp && !results.some((r) => r.id === 'gp-l24-2')) results.push(gp);
    }
  } else if (lId === 'l25') {
    if (text.includes('もし')) {
      const gp = GRAMMAR_BY_ID.get('gp-l25-4');
      if (gp) results.push(gp);
    }
    if (text.includes('ても') || text.includes('でも') || text.includes('狭くても') || text.includes('安くても') || text.includes('降っても')) {
      const gp = GRAMMAR_BY_ID.get('gp-l25-3');
      if (gp) results.push(gp);
    }
    if (text.includes('終わったら') || text.includes('になったら') || text.includes('に着いたら')) {
      const gp = GRAMMAR_BY_ID.get('gp-l25-2');
      if (gp) results.push(gp);
    }
    if (text.includes('たら') || text.includes('だったら')) {
      const gp = GRAMMAR_BY_ID.get('gp-l25-1');
      if (gp && !results.some((r) => r.id === 'gp-l25-2')) results.push(gp);
    }
    if (text.includes('友達が来る') || text.includes('雨が降ったら')) {
      const gp = GRAMMAR_BY_ID.get('gp-l25-5');
      if (gp) results.push(gp);
    }
  }

  return Array.from(new Set(results));
}

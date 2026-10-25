export interface VocabularySegment {
  text: string;
  furigana?: string;
}

export interface VocabularyItem {
  id: string;
  lessonId: string;
  lessonNumber: string;
  kanji: string;
  reading: string;
  romaji: string;
  spanish: string;
  segments: VocabularySegment[];
  targetKanji: string[];
}

export const MNN_VOCABULARY: VocabularyItem[] = [
  {
    "id": "w-pre-001",
    "lessonId": "pre",
    "lessonNumber": "Pre-lección",
    "kanji": "一",
    "reading": "いち",
    "romaji": "ichi",
    "spanish": "uno",
    "segments": [
      {
        "text": "一",
        "furigana": "いち"
      }
    ],
    "targetKanji": [
      "一"
    ]
  },
  {
    "id": "w-pre-002",
    "lessonId": "pre",
    "lessonNumber": "Pre-lección",
    "kanji": "二",
    "reading": "に",
    "romaji": "ni",
    "spanish": "dos",
    "segments": [
      {
        "text": "二",
        "furigana": "に"
      }
    ],
    "targetKanji": [
      "二"
    ]
  },
  {
    "id": "w-pre-003",
    "lessonId": "pre",
    "lessonNumber": "Pre-lección",
    "kanji": "三",
    "reading": "さん",
    "romaji": "san",
    "spanish": "tres",
    "segments": [
      {
        "text": "三",
        "furigana": "さん"
      }
    ],
    "targetKanji": [
      "三"
    ]
  },
  {
    "id": "w-pre-004",
    "lessonId": "pre",
    "lessonNumber": "Pre-lección",
    "kanji": "四",
    "reading": "よん",
    "romaji": "yon",
    "spanish": "cuatro",
    "segments": [
      {
        "text": "四",
        "furigana": "よん"
      }
    ],
    "targetKanji": [
      "四"
    ]
  },
  {
    "id": "w-pre-005",
    "lessonId": "pre",
    "lessonNumber": "Pre-lección",
    "kanji": "五",
    "reading": "ご",
    "romaji": "go",
    "spanish": "cinco",
    "segments": [
      {
        "text": "五",
        "furigana": "ご"
      }
    ],
    "targetKanji": [
      "五"
    ]
  },
  {
    "id": "w-pre-006",
    "lessonId": "pre",
    "lessonNumber": "Pre-lección",
    "kanji": "六",
    "reading": "ろく",
    "romaji": "roku",
    "spanish": "seis",
    "segments": [
      {
        "text": "六",
        "furigana": "ろく"
      }
    ],
    "targetKanji": [
      "六"
    ]
  },
  {
    "id": "w-pre-007",
    "lessonId": "pre",
    "lessonNumber": "Pre-lección",
    "kanji": "七",
    "reading": "なな",
    "romaji": "nana",
    "spanish": "siete",
    "segments": [
      {
        "text": "七",
        "furigana": "なな"
      }
    ],
    "targetKanji": [
      "七"
    ]
  },
  {
    "id": "w-pre-008",
    "lessonId": "pre",
    "lessonNumber": "Pre-lección",
    "kanji": "八",
    "reading": "はち",
    "romaji": "hachi",
    "spanish": "ocho",
    "segments": [
      {
        "text": "八",
        "furigana": "はち"
      }
    ],
    "targetKanji": [
      "八"
    ]
  },
  {
    "id": "w-pre-009",
    "lessonId": "pre",
    "lessonNumber": "Pre-lección",
    "kanji": "九",
    "reading": "きゅう",
    "romaji": "kyuu",
    "spanish": "nueve",
    "segments": [
      {
        "text": "九",
        "furigana": "きゅう"
      }
    ],
    "targetKanji": [
      "九"
    ]
  },
  {
    "id": "w-pre-010",
    "lessonId": "pre",
    "lessonNumber": "Pre-lección",
    "kanji": "十",
    "reading": "じゅう",
    "romaji": "juu",
    "spanish": "diez",
    "segments": [
      {
        "text": "十",
        "furigana": "じゅう"
      }
    ],
    "targetKanji": [
      "十"
    ]
  },
  {
    "id": "w-pre-011",
    "lessonId": "pre",
    "lessonNumber": "Pre-lección",
    "kanji": "百",
    "reading": "ひゃく",
    "romaji": "hyaku",
    "spanish": "cien",
    "segments": [
      {
        "text": "百",
        "furigana": "ひゃく"
      }
    ],
    "targetKanji": [
      "百"
    ]
  },
  {
    "id": "w-pre-012",
    "lessonId": "pre",
    "lessonNumber": "Pre-lección",
    "kanji": "千",
    "reading": "せん",
    "romaji": "sen",
    "spanish": "mil",
    "segments": [
      {
        "text": "千",
        "furigana": "せん"
      }
    ],
    "targetKanji": [
      "千"
    ]
  },
  {
    "id": "w-pre-013",
    "lessonId": "pre",
    "lessonNumber": "Pre-lección",
    "kanji": "万",
    "reading": "まん",
    "romaji": "man",
    "spanish": "diez mil",
    "segments": [
      {
        "text": "万",
        "furigana": "まん"
      }
    ],
    "targetKanji": [
      "万"
    ]
  },
  {
    "id": "w-pre-014",
    "lessonId": "pre",
    "lessonNumber": "Pre-lección",
    "kanji": "円",
    "reading": "えん",
    "romaji": "en",
    "spanish": "yen (moneda de Japón)",
    "segments": [
      {
        "text": "円",
        "furigana": "えん"
      }
    ],
    "targetKanji": [
      "円"
    ]
  },
  {
    "id": "w-l01-015",
    "lessonId": "l01",
    "lessonNumber": "Lección 1",
    "kanji": "わたし",
    "reading": "わたし",
    "romaji": "watashi",
    "spanish": "yo",
    "segments": [
      {
        "text": "わたし"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l01-016",
    "lessonId": "l01",
    "lessonNumber": "Lección 1",
    "kanji": "わたしたち",
    "reading": "わたしたち",
    "romaji": "watashitachi",
    "spanish": "nosotros",
    "segments": [
      {
        "text": "わたしたち"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l01-017",
    "lessonId": "l01",
    "lessonNumber": "Lección 1",
    "kanji": "あなた",
    "reading": "あなた",
    "romaji": "anata",
    "spanish": "tú, usted",
    "segments": [
      {
        "text": "あなた"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l01-018",
    "lessonId": "l01",
    "lessonNumber": "Lección 1",
    "kanji": "あの人",
    "reading": "あのひと",
    "romaji": "ano hito",
    "spanish": "aquella persona",
    "segments": [
      {
        "text": "あの"
      },
      {
        "text": "人",
        "furigana": "ひと"
      }
    ],
    "targetKanji": [
      "人"
    ]
  },
  {
    "id": "w-l01-019",
    "lessonId": "l01",
    "lessonNumber": "Lección 1",
    "kanji": "あの方",
    "reading": "あのかた",
    "romaji": "ano kata",
    "spanish": "aquella persona (formal)",
    "segments": [
      {
        "text": "あの"
      },
      {
        "text": "方",
        "furigana": "かた"
      }
    ],
    "targetKanji": [
      "方"
    ]
  },
  {
    "id": "w-l01-020",
    "lessonId": "l01",
    "lessonNumber": "Lección 1",
    "kanji": "皆さん",
    "reading": "みなさん",
    "romaji": "minasan",
    "spanish": "todos, señoras y señores",
    "segments": [
      {
        "text": "皆",
        "furigana": "みな"
      },
      {
        "text": "さん"
      }
    ],
    "targetKanji": [
      "皆"
    ]
  },
  {
    "id": "w-l01-021",
    "lessonId": "l01",
    "lessonNumber": "Lección 1",
    "kanji": "～さん",
    "reading": "～さん",
    "romaji": "~san",
    "spanish": "Sr., Sra., Srta. (sufijo cortés)",
    "segments": [
      {
        "text": "～さん"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l01-022",
    "lessonId": "l01",
    "lessonNumber": "Lección 1",
    "kanji": "～ちゃん",
    "reading": "～ちゃん",
    "romaji": "~chan",
    "spanish": "sufijo afectivo (niños/niñas)",
    "segments": [
      {
        "text": "～ちゃん"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l01-023",
    "lessonId": "l01",
    "lessonNumber": "Lección 1",
    "kanji": "～くん",
    "reading": "～くん",
    "romaji": "~kun",
    "spanish": "sufijo para jóvenes o muchachos",
    "segments": [
      {
        "text": "～くん"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l01-024",
    "lessonId": "l01",
    "lessonNumber": "Lección 1",
    "kanji": "～人",
    "reading": "～じん",
    "romaji": "~jin",
    "spanish": "sufijo de nacionalidad",
    "segments": [
      {
        "text": "～"
      },
      {
        "text": "人",
        "furigana": "じん"
      }
    ],
    "targetKanji": [
      "人"
    ]
  },
  {
    "id": "w-l01-025",
    "lessonId": "l01",
    "lessonNumber": "Lección 1",
    "kanji": "先生",
    "reading": "せんせい",
    "romaji": "sensei",
    "spanish": "profesor, maestro, doctor",
    "segments": [
      {
        "text": "先",
        "furigana": "せん"
      },
      {
        "text": "生",
        "furigana": "せい"
      }
    ],
    "targetKanji": [
      "先",
      "生"
    ]
  },
  {
    "id": "w-l01-026",
    "lessonId": "l01",
    "lessonNumber": "Lección 1",
    "kanji": "教師",
    "reading": "きょうし",
    "romaji": "kyoushi",
    "spanish": "profesor (como profesión)",
    "segments": [
      {
        "text": "教",
        "furigana": "きょう"
      },
      {
        "text": "師",
        "furigana": "し"
      }
    ],
    "targetKanji": [
      "教",
      "師"
    ]
  },
  {
    "id": "w-l01-027",
    "lessonId": "l01",
    "lessonNumber": "Lección 1",
    "kanji": "学生",
    "reading": "がくせい",
    "romaji": "gakusei",
    "spanish": "estudiante",
    "segments": [
      {
        "text": "学",
        "furigana": "がく"
      },
      {
        "text": "生",
        "furigana": "せい"
      }
    ],
    "targetKanji": [
      "学",
      "生"
    ]
  },
  {
    "id": "w-l01-028",
    "lessonId": "l01",
    "lessonNumber": "Lección 1",
    "kanji": "会社員",
    "reading": "かいしゃいん",
    "romaji": "kaishain",
    "spanish": "empleado de una empresa",
    "segments": [
      {
        "text": "会",
        "furigana": "かい"
      },
      {
        "text": "社",
        "furigana": "しゃ"
      },
      {
        "text": "員",
        "furigana": "いん"
      }
    ],
    "targetKanji": [
      "会",
      "社",
      "員"
    ]
  },
  {
    "id": "w-l01-029",
    "lessonId": "l01",
    "lessonNumber": "Lección 1",
    "kanji": "社員",
    "reading": "しゃいん",
    "romaji": "shain",
    "spanish": "empleado de [empresa]",
    "segments": [
      {
        "text": "社",
        "furigana": "しゃ"
      },
      {
        "text": "員",
        "furigana": "いん"
      }
    ],
    "targetKanji": [
      "社",
      "員"
    ]
  },
  {
    "id": "w-l01-030",
    "lessonId": "l01",
    "lessonNumber": "Lección 1",
    "kanji": "銀行員",
    "reading": "ぎんこういん",
    "romaji": "ginkouin",
    "spanish": "empleado de banco",
    "segments": [
      {
        "text": "銀",
        "furigana": "ぎん"
      },
      {
        "text": "行",
        "furigana": "こう"
      },
      {
        "text": "員",
        "furigana": "いん"
      }
    ],
    "targetKanji": [
      "銀",
      "行",
      "員"
    ]
  },
  {
    "id": "w-l01-031",
    "lessonId": "l01",
    "lessonNumber": "Lección 1",
    "kanji": "医師",
    "reading": "いし",
    "romaji": "ishi",
    "spanish": "médico, médico cirujano",
    "segments": [
      {
        "text": "医",
        "furigana": "い"
      },
      {
        "text": "師",
        "furigana": "し"
      }
    ],
    "targetKanji": [
      "医",
      "師"
    ]
  },
  {
    "id": "w-l01-032",
    "lessonId": "l01",
    "lessonNumber": "Lección 1",
    "kanji": "研究者",
    "reading": "けんきゅうしゃ",
    "romaji": "kenkyuusha",
    "spanish": "investigador",
    "segments": [
      {
        "text": "研",
        "furigana": "けん"
      },
      {
        "text": "究",
        "furigana": "きゅう"
      },
      {
        "text": "者",
        "furigana": "しゃ"
      }
    ],
    "targetKanji": [
      "研",
      "究",
      "者"
    ]
  },
  {
    "id": "w-l01-033",
    "lessonId": "l01",
    "lessonNumber": "Lección 1",
    "kanji": "エンジニア",
    "reading": "エンジニア",
    "romaji": "enjinia",
    "spanish": "ingeniero",
    "segments": [
      {
        "text": "エンジニア"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l01-034",
    "lessonId": "l01",
    "lessonNumber": "Lección 1",
    "kanji": "大学",
    "reading": "だいがく",
    "romaji": "daigaku",
    "spanish": "universidad",
    "segments": [
      {
        "text": "大",
        "furigana": "だい"
      },
      {
        "text": "学",
        "furigana": "がく"
      }
    ],
    "targetKanji": [
      "大",
      "学"
    ]
  },
  {
    "id": "w-l01-035",
    "lessonId": "l01",
    "lessonNumber": "Lección 1",
    "kanji": "病院",
    "reading": "びょういん",
    "romaji": "byouin",
    "spanish": "hospital",
    "segments": [
      {
        "text": "病",
        "furigana": "びょう"
      },
      {
        "text": "院",
        "furigana": "いん"
      }
    ],
    "targetKanji": [
      "病",
      "院"
    ]
  },
  {
    "id": "w-l01-036",
    "lessonId": "l01",
    "lessonNumber": "Lección 1",
    "kanji": "電気",
    "reading": "でんき",
    "romaji": "denki",
    "spanish": "electricidad, luz eléctrica",
    "segments": [
      {
        "text": "電",
        "furigana": "でん"
      },
      {
        "text": "気",
        "furigana": "き"
      }
    ],
    "targetKanji": [
      "電",
      "気"
    ]
  },
  {
    "id": "w-l01-037",
    "lessonId": "l01",
    "lessonNumber": "Lección 1",
    "kanji": "だれ",
    "reading": "だれ",
    "romaji": "dare",
    "spanish": "quién",
    "segments": [
      {
        "text": "だれ"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l01-038",
    "lessonId": "l01",
    "lessonNumber": "Lección 1",
    "kanji": "どなた",
    "reading": "どなた",
    "romaji": "donata",
    "spanish": "quién (formal)",
    "segments": [
      {
        "text": "どなた"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l01-039",
    "lessonId": "l01",
    "lessonNumber": "Lección 1",
    "kanji": "～歳",
    "reading": "～さい",
    "romaji": "~sai",
    "spanish": "años de edad",
    "segments": [
      {
        "text": "～"
      },
      {
        "text": "歳",
        "furigana": "さい"
      }
    ],
    "targetKanji": [
      "歳"
    ]
  },
  {
    "id": "w-l01-040",
    "lessonId": "l01",
    "lessonNumber": "Lección 1",
    "kanji": "何歳",
    "reading": "なんさい",
    "romaji": "nansai",
    "spanish": "cuántos años",
    "segments": [
      {
        "text": "何",
        "furigana": "なん"
      },
      {
        "text": "歳",
        "furigana": "さい"
      }
    ],
    "targetKanji": [
      "何",
      "歳"
    ]
  },
  {
    "id": "w-l01-041",
    "lessonId": "l01",
    "lessonNumber": "Lección 1",
    "kanji": "おいくつ",
    "reading": "おいくつ",
    "romaji": "oikutsu",
    "spanish": "cuántos años (formal)",
    "segments": [
      {
        "text": "おいくつ"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l01-042",
    "lessonId": "l01",
    "lessonNumber": "Lección 1",
    "kanji": "はい",
    "reading": "はい",
    "romaji": "hai",
    "spanish": "sí",
    "segments": [
      {
        "text": "はい"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l01-043",
    "lessonId": "l01",
    "lessonNumber": "Lección 1",
    "kanji": "いいえ",
    "reading": "いいえ",
    "romaji": "iie",
    "spanish": "no",
    "segments": [
      {
        "text": "いいえ"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l01-044",
    "lessonId": "l01",
    "lessonNumber": "Lección 1",
    "kanji": "失礼ですが",
    "reading": "しつれいですが",
    "romaji": "shitsurei desuga",
    "spanish": "disculpe, pero...",
    "segments": [
      {
        "text": "失",
        "furigana": "しつ"
      },
      {
        "text": "礼",
        "furigana": "れい"
      },
      {
        "text": "ですが"
      }
    ],
    "targetKanji": [
      "失",
      "礼"
    ]
  },
  {
    "id": "w-l01-045",
    "lessonId": "l01",
    "lessonNumber": "Lección 1",
    "kanji": "お名前は？",
    "reading": "おなまえは？",
    "romaji": "onamae wa?",
    "spanish": "¿cómo se llama?",
    "segments": [
      {
        "text": "お"
      },
      {
        "text": "名",
        "furigana": "な"
      },
      {
        "text": "前",
        "furigana": "まえ"
      },
      {
        "text": "は？"
      }
    ],
    "targetKanji": [
      "名",
      "前"
    ]
  },
  {
    "id": "w-l01-046",
    "lessonId": "l01",
    "lessonNumber": "Lección 1",
    "kanji": "初めまして",
    "reading": "はじめまして",
    "romaji": "hajimemashite",
    "spanish": "mucho gusto",
    "segments": [
      {
        "text": "初",
        "furigana": "はじ"
      },
      {
        "text": "めまして"
      }
    ],
    "targetKanji": [
      "初"
    ]
  },
  {
    "id": "w-l01-047",
    "lessonId": "l01",
    "lessonNumber": "Lección 1",
    "kanji": "どうぞよろしく［お願いします］",
    "reading": "どうぞよろしく［おねがいします］",
    "romaji": "douzo yoroshiku",
    "spanish": "encantado de conocerle",
    "segments": [
      {
        "text": "どうぞよろしく［"
      },
      {
        "text": "願",
        "furigana": "ねが"
      },
      {
        "text": "いします］"
      }
    ],
    "targetKanji": [
      "願"
    ]
  },
  {
    "id": "w-l01-048",
    "lessonId": "l01",
    "lessonNumber": "Lección 1",
    "kanji": "こちらは～さんです",
    "reading": "こちらは～さんです",
    "romaji": "kochira wa ~san desu",
    "spanish": "le presento a ~",
    "segments": [
      {
        "text": "こちらは～さんです"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l01-049",
    "lessonId": "l01",
    "lessonNumber": "Lección 1",
    "kanji": "～から来ました",
    "reading": "～からきました",
    "romaji": "~kara kimashita",
    "spanish": "vengo de ~",
    "segments": [
      {
        "text": "～から"
      },
      {
        "text": "来",
        "furigana": "き"
      },
      {
        "text": "ました"
      }
    ],
    "targetKanji": [
      "来"
    ]
  },
  {
    "id": "w-l01-050",
    "lessonId": "l01",
    "lessonNumber": "Lección 1",
    "kanji": "日本",
    "reading": "にほん",
    "romaji": "nihon",
    "spanish": "Japón",
    "segments": [
      {
        "text": "日",
        "furigana": "に"
      },
      {
        "text": "本",
        "furigana": "ほん"
      }
    ],
    "targetKanji": [
      "日",
      "本"
    ]
  },
  {
    "id": "w-l01-051",
    "lessonId": "l01",
    "lessonNumber": "Lección 1",
    "kanji": "アメリカ",
    "reading": "アメリカ",
    "romaji": "amerika",
    "spanish": "Estados Unidos",
    "segments": [
      {
        "text": "アメリカ"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l01-052",
    "lessonId": "l01",
    "lessonNumber": "Lección 1",
    "kanji": "イギリス",
    "reading": "イギリス",
    "romaji": "igirisu",
    "spanish": "Reino Unido",
    "segments": [
      {
        "text": "イギリス"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l01-053",
    "lessonId": "l01",
    "lessonNumber": "Lección 1",
    "kanji": "中国",
    "reading": "ちゅうごく",
    "romaji": "chuugoku",
    "spanish": "China",
    "segments": [
      {
        "text": "中",
        "furigana": "ちゅう"
      },
      {
        "text": "国",
        "furigana": "ごく"
      }
    ],
    "targetKanji": [
      "中",
      "国"
    ]
  },
  {
    "id": "w-l01-054",
    "lessonId": "l01",
    "lessonNumber": "Lección 1",
    "kanji": "韓国",
    "reading": "かんこく",
    "romaji": "kankoku",
    "spanish": "Corea del Sur",
    "segments": [
      {
        "text": "韓",
        "furigana": "かん"
      },
      {
        "text": "国",
        "furigana": "こく"
      }
    ],
    "targetKanji": [
      "韓",
      "国"
    ]
  },
  {
    "id": "w-l02-055",
    "lessonId": "l02",
    "lessonNumber": "Lección 2",
    "kanji": "これ",
    "reading": "これ",
    "romaji": "kore",
    "spanish": "esto (cerca del que habla)",
    "segments": [
      {
        "text": "これ"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l02-056",
    "lessonId": "l02",
    "lessonNumber": "Lección 2",
    "kanji": "それ",
    "reading": "それ",
    "romaji": "sore",
    "spanish": "eso (cerca del oyente)",
    "segments": [
      {
        "text": "それ"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l02-057",
    "lessonId": "l02",
    "lessonNumber": "Lección 2",
    "kanji": "あれ",
    "reading": "あれ",
    "romaji": "are",
    "spanish": "aquello (lejos de ambos)",
    "segments": [
      {
        "text": "あれ"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l02-058",
    "lessonId": "l02",
    "lessonNumber": "Lección 2",
    "kanji": "この～",
    "reading": "この～",
    "romaji": "kono~",
    "spanish": "este/esta ~",
    "segments": [
      {
        "text": "この～"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l02-059",
    "lessonId": "l02",
    "lessonNumber": "Lección 2",
    "kanji": "その～",
    "reading": "その～",
    "romaji": "sono~",
    "spanish": "ese/esa ~",
    "segments": [
      {
        "text": "その～"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l02-060",
    "lessonId": "l02",
    "lessonNumber": "Lección 2",
    "kanji": "あの～",
    "reading": "あの～",
    "romaji": "ano~",
    "spanish": "aquel/aquella ~",
    "segments": [
      {
        "text": "あの～"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l02-061",
    "lessonId": "l02",
    "lessonNumber": "Lección 2",
    "kanji": "本",
    "reading": "ほん",
    "romaji": "hon",
    "spanish": "libro",
    "segments": [
      {
        "text": "本",
        "furigana": "ほん"
      }
    ],
    "targetKanji": [
      "本"
    ]
  },
  {
    "id": "w-l02-062",
    "lessonId": "l02",
    "lessonNumber": "Lección 2",
    "kanji": "辞書",
    "reading": "じしょ",
    "romaji": "jisho",
    "spanish": "diccionario",
    "segments": [
      {
        "text": "辞",
        "furigana": "じ"
      },
      {
        "text": "書",
        "furigana": "しょ"
      }
    ],
    "targetKanji": [
      "辞",
      "書"
    ]
  },
  {
    "id": "w-l02-063",
    "lessonId": "l02",
    "lessonNumber": "Lección 2",
    "kanji": "雑誌",
    "reading": "ざっし",
    "romaji": "zasshi",
    "spanish": "revista",
    "segments": [
      {
        "text": "雑",
        "furigana": "ざっ"
      },
      {
        "text": "誌",
        "furigana": "し"
      }
    ],
    "targetKanji": [
      "雑",
      "誌"
    ]
  },
  {
    "id": "w-l02-064",
    "lessonId": "l02",
    "lessonNumber": "Lección 2",
    "kanji": "新聞",
    "reading": "しんぶん",
    "romaji": "shinbun",
    "spanish": "periódico",
    "segments": [
      {
        "text": "新",
        "furigana": "しん"
      },
      {
        "text": "聞",
        "furigana": "ぶん"
      }
    ],
    "targetKanji": [
      "新",
      "聞"
    ]
  },
  {
    "id": "w-l02-065",
    "lessonId": "l02",
    "lessonNumber": "Lección 2",
    "kanji": "ノート",
    "reading": "ノート",
    "romaji": "nooto",
    "spanish": "cuaderno",
    "segments": [
      {
        "text": "ノート"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l02-066",
    "lessonId": "l02",
    "lessonNumber": "Lección 2",
    "kanji": "手帳",
    "reading": "てちょう",
    "romaji": "techou",
    "spanish": "agenda, libreta de notas",
    "segments": [
      {
        "text": "手",
        "furigana": "て"
      },
      {
        "text": "帳",
        "furigana": "ちょう"
      }
    ],
    "targetKanji": [
      "手",
      "帳"
    ]
  },
  {
    "id": "w-l02-067",
    "lessonId": "l02",
    "lessonNumber": "Lección 2",
    "kanji": "名刺",
    "reading": "めいし",
    "romaji": "meishi",
    "spanish": "tarjeta de visita / negocios",
    "segments": [
      {
        "text": "名",
        "furigana": "めい"
      },
      {
        "text": "刺",
        "furigana": "し"
      }
    ],
    "targetKanji": [
      "名",
      "刺"
    ]
  },
  {
    "id": "w-l02-068",
    "lessonId": "l02",
    "lessonNumber": "Lección 2",
    "kanji": "カード",
    "reading": "カード",
    "romaji": "kaado",
    "spanish": "tarjeta",
    "segments": [
      {
        "text": "カード"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l02-069",
    "lessonId": "l02",
    "lessonNumber": "Lección 2",
    "kanji": "テレホンカード",
    "reading": "テレホンカード",
    "romaji": "terehon kaado",
    "spanish": "tarjeta telefónica",
    "segments": [
      {
        "text": "テレホンカード"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l02-070",
    "lessonId": "l02",
    "lessonNumber": "Lección 2",
    "kanji": "鉛筆",
    "reading": "えんぴつ",
    "romaji": "enpitsu",
    "spanish": "lápiz",
    "segments": [
      {
        "text": "鉛",
        "furigana": "えん"
      },
      {
        "text": "筆",
        "furigana": "ぴつ"
      }
    ],
    "targetKanji": [
      "鉛",
      "筆"
    ]
  },
  {
    "id": "w-l02-071",
    "lessonId": "l02",
    "lessonNumber": "Lección 2",
    "kanji": "ボールペン",
    "reading": "ボールペン",
    "romaji": "boorupen",
    "spanish": "bolígrafo",
    "segments": [
      {
        "text": "ボールペン"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l02-072",
    "lessonId": "l02",
    "lessonNumber": "Lección 2",
    "kanji": "シャープペンシル",
    "reading": "シャープペンシル",
    "romaji": "shaapupenshiru",
    "spanish": "portaminas",
    "segments": [
      {
        "text": "シャープペンシル"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l02-073",
    "lessonId": "l02",
    "lessonNumber": "Lección 2",
    "kanji": "かぎ",
    "reading": "かぎ",
    "romaji": "kagi",
    "spanish": "llave",
    "segments": [
      {
        "text": "かぎ"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l02-074",
    "lessonId": "l02",
    "lessonNumber": "Lección 2",
    "kanji": "時計",
    "reading": "とけい",
    "romaji": "tokei",
    "spanish": "reloj",
    "segments": [
      {
        "text": "時",
        "furigana": "と"
      },
      {
        "text": "計",
        "furigana": "けい"
      }
    ],
    "targetKanji": [
      "時",
      "計"
    ]
  },
  {
    "id": "w-l02-075",
    "lessonId": "l02",
    "lessonNumber": "Lección 2",
    "kanji": "傘",
    "reading": "かさ",
    "romaji": "kasa",
    "spanish": "paraguas",
    "segments": [
      {
        "text": "傘",
        "furigana": "かさ"
      }
    ],
    "targetKanji": [
      "傘"
    ]
  },
  {
    "id": "w-l02-076",
    "lessonId": "l02",
    "lessonNumber": "Lección 2",
    "kanji": "かばん",
    "reading": "かばん",
    "romaji": "kaban",
    "spanish": "bolso, cartera",
    "segments": [
      {
        "text": "かばん"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l02-077",
    "lessonId": "l02",
    "lessonNumber": "Lección 2",
    "kanji": "テレビ",
    "reading": "テレビ",
    "romaji": "terebi",
    "spanish": "televisor",
    "segments": [
      {
        "text": "テレビ"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l02-078",
    "lessonId": "l02",
    "lessonNumber": "Lección 2",
    "kanji": "ラジオ",
    "reading": "ラジオ",
    "romaji": "rajio",
    "spanish": "radio",
    "segments": [
      {
        "text": "ラジオ"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l02-079",
    "lessonId": "l02",
    "lessonNumber": "Lección 2",
    "kanji": "カメラ",
    "reading": "カメラ",
    "romaji": "kamera",
    "spanish": "cámara fotográfica",
    "segments": [
      {
        "text": "カメラ"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l02-080",
    "lessonId": "l02",
    "lessonNumber": "Lección 2",
    "kanji": "コンピューター",
    "reading": "コンピューター",
    "romaji": "konpyuutaa",
    "spanish": "computadora, ordenador",
    "segments": [
      {
        "text": "コンピューター"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l02-081",
    "lessonId": "l02",
    "lessonNumber": "Lección 2",
    "kanji": "車",
    "reading": "くるま",
    "romaji": "kuruma",
    "spanish": "automóvil, coche",
    "segments": [
      {
        "text": "車",
        "furigana": "くるま"
      }
    ],
    "targetKanji": [
      "車"
    ]
  },
  {
    "id": "w-l02-082",
    "lessonId": "l02",
    "lessonNumber": "Lección 2",
    "kanji": "自動車",
    "reading": "じどうしゃ",
    "romaji": "jidousha",
    "spanish": "automóvil",
    "segments": [
      {
        "text": "自",
        "furigana": "じ"
      },
      {
        "text": "動",
        "furigana": "どう"
      },
      {
        "text": "車",
        "furigana": "しゃ"
      }
    ],
    "targetKanji": [
      "自",
      "動",
      "車"
    ]
  },
  {
    "id": "w-l02-083",
    "lessonId": "l02",
    "lessonNumber": "Lección 2",
    "kanji": "机",
    "reading": "つくえ",
    "romaji": "tsukue",
    "spanish": "escritorio, mesa",
    "segments": [
      {
        "text": "机",
        "furigana": "つくえ"
      }
    ],
    "targetKanji": [
      "机"
    ]
  },
  {
    "id": "w-l02-084",
    "lessonId": "l02",
    "lessonNumber": "Lección 2",
    "kanji": "いす",
    "reading": "いす",
    "romaji": "isu",
    "spanish": "silla",
    "segments": [
      {
        "text": "いす"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l02-085",
    "lessonId": "l02",
    "lessonNumber": "Lección 2",
    "kanji": "チョコレート",
    "reading": "チョコレート",
    "romaji": "chokoreeto",
    "spanish": "chocolate",
    "segments": [
      {
        "text": "チョコレート"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l02-086",
    "lessonId": "l02",
    "lessonNumber": "Lección 2",
    "kanji": "コーヒー",
    "reading": "コーヒー",
    "romaji": "koohii",
    "spanish": "café",
    "segments": [
      {
        "text": "コーヒー"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l02-087",
    "lessonId": "l02",
    "lessonNumber": "Lección 2",
    "kanji": "お土産",
    "reading": "おみやげ",
    "romaji": "omiyage",
    "spanish": "souvenir, regalo de viaje",
    "segments": [
      {
        "text": "お"
      },
      {
        "text": "土",
        "furigana": "み"
      },
      {
        "text": "産",
        "furigana": "やげ"
      }
    ],
    "targetKanji": [
      "土",
      "産"
    ]
  },
  {
    "id": "w-l02-088",
    "lessonId": "l02",
    "lessonNumber": "Lección 2",
    "kanji": "英語",
    "reading": "えいご",
    "romaji": "eigo",
    "spanish": "idioma inglés",
    "segments": [
      {
        "text": "英",
        "furigana": "えい"
      },
      {
        "text": "語",
        "furigana": "ご"
      }
    ],
    "targetKanji": [
      "英",
      "語"
    ]
  },
  {
    "id": "w-l02-089",
    "lessonId": "l02",
    "lessonNumber": "Lección 2",
    "kanji": "日本語",
    "reading": "にほんご",
    "romaji": "nihongo",
    "spanish": "idioma japonés",
    "segments": [
      {
        "text": "日",
        "furigana": "に"
      },
      {
        "text": "本",
        "furigana": "ほん"
      },
      {
        "text": "語",
        "furigana": "ご"
      }
    ],
    "targetKanji": [
      "日",
      "本",
      "語"
    ]
  },
  {
    "id": "w-l02-090",
    "lessonId": "l02",
    "lessonNumber": "Lección 2",
    "kanji": "～語",
    "reading": "～ご",
    "romaji": "~go",
    "spanish": "idioma ~",
    "segments": [
      {
        "text": "～"
      },
      {
        "text": "語",
        "furigana": "ご"
      }
    ],
    "targetKanji": [
      "語"
    ]
  },
  {
    "id": "w-l02-091",
    "lessonId": "l02",
    "lessonNumber": "Lección 2",
    "kanji": "何",
    "reading": "なん／なに",
    "romaji": "nan / nani",
    "spanish": "qué",
    "segments": [
      {
        "text": "何",
        "furigana": "なん"
      }
    ],
    "targetKanji": [
      "何"
    ]
  },
  {
    "id": "w-l02-092",
    "lessonId": "l02",
    "lessonNumber": "Lección 2",
    "kanji": "そう",
    "reading": "そう",
    "romaji": "sou",
    "spanish": "así",
    "segments": [
      {
        "text": "そう"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l02-093",
    "lessonId": "l02",
    "lessonNumber": "Lección 2",
    "kanji": "違います",
    "reading": "ちがいます",
    "romaji": "chigaimasu",
    "spanish": "no es así / se equivoca",
    "segments": [
      {
        "text": "違",
        "furigana": "ちが"
      },
      {
        "text": "います"
      }
    ],
    "targetKanji": [
      "違"
    ]
  },
  {
    "id": "w-l02-094",
    "lessonId": "l02",
    "lessonNumber": "Lección 2",
    "kanji": "そうですか",
    "reading": "そうですか",
    "romaji": "sou desu ka",
    "spanish": "¿es así? / ya veo",
    "segments": [
      {
        "text": "そうですか"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l02-095",
    "lessonId": "l02",
    "lessonNumber": "Lección 2",
    "kanji": "あのう",
    "reading": "あのう",
    "romaji": "anou",
    "spanish": "eh... / esto...",
    "segments": [
      {
        "text": "あのう"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l02-096",
    "lessonId": "l02",
    "lessonNumber": "Lección 2",
    "kanji": "どうぞ",
    "reading": "どうぞ",
    "romaji": "douzo",
    "spanish": "adelante / por favor",
    "segments": [
      {
        "text": "どうぞ"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l02-097",
    "lessonId": "l02",
    "lessonNumber": "Lección 2",
    "kanji": "どうも",
    "reading": "どうも",
    "romaji": "doumo",
    "spanish": "gracias",
    "segments": [
      {
        "text": "どうも"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l02-098",
    "lessonId": "l02",
    "lessonNumber": "Lección 2",
    "kanji": "ありがとう［ございます］",
    "reading": "ありがとう［ございます］",
    "romaji": "arigatou",
    "spanish": "muchas gracias",
    "segments": [
      {
        "text": "ありがとう［ございます］"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l02-099",
    "lessonId": "l02",
    "lessonNumber": "Lección 2",
    "kanji": "どういたしまして",
    "reading": "どういたしまして",
    "romaji": "douitashimashite",
    "spanish": "de nada",
    "segments": [
      {
        "text": "どういたしまして"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l03-100",
    "lessonId": "l03",
    "lessonNumber": "Lección 3",
    "kanji": "ここ",
    "reading": "ここ",
    "romaji": "koko",
    "spanish": "aquí",
    "segments": [
      {
        "text": "ここ"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l03-101",
    "lessonId": "l03",
    "lessonNumber": "Lección 3",
    "kanji": "そこ",
    "reading": "そこ",
    "romaji": "soko",
    "spanish": "ahí",
    "segments": [
      {
        "text": "そこ"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l03-102",
    "lessonId": "l03",
    "lessonNumber": "Lección 3",
    "kanji": "あそこ",
    "reading": "あそこ",
    "romaji": "asoko",
    "spanish": "allí, allá",
    "segments": [
      {
        "text": "あそこ"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l03-103",
    "lessonId": "l03",
    "lessonNumber": "Lección 3",
    "kanji": "どこ",
    "reading": "どこ",
    "romaji": "doko",
    "spanish": "dónde",
    "segments": [
      {
        "text": "どこ"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l03-104",
    "lessonId": "l03",
    "lessonNumber": "Lección 3",
    "kanji": "こちら",
    "reading": "こちら",
    "romaji": "kochira",
    "spanish": "por aquí (formal)",
    "segments": [
      {
        "text": "こちら"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l03-105",
    "lessonId": "l03",
    "lessonNumber": "Lección 3",
    "kanji": "そちら",
    "reading": "そちら",
    "romaji": "sochira",
    "spanish": "por ahí (formal)",
    "segments": [
      {
        "text": "そちら"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l03-106",
    "lessonId": "l03",
    "lessonNumber": "Lección 3",
    "kanji": "あちら",
    "reading": "あちら",
    "romaji": "achira",
    "spanish": "por allá (formal)",
    "segments": [
      {
        "text": "あちら"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l03-107",
    "lessonId": "l03",
    "lessonNumber": "Lección 3",
    "kanji": "どちら",
    "reading": "どちら",
    "romaji": "dochira",
    "spanish": "por dónde (formal)",
    "segments": [
      {
        "text": "どちら"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l03-108",
    "lessonId": "l03",
    "lessonNumber": "Lección 3",
    "kanji": "教室",
    "reading": "きょうしつ",
    "romaji": "kyoushitsu",
    "spanish": "aula",
    "segments": [
      {
        "text": "教",
        "furigana": "きょう"
      },
      {
        "text": "室",
        "furigana": "しつ"
      }
    ],
    "targetKanji": [
      "教",
      "室"
    ]
  },
  {
    "id": "w-l03-109",
    "lessonId": "l03",
    "lessonNumber": "Lección 3",
    "kanji": "食堂",
    "reading": "しょくどう",
    "romaji": "shokudou",
    "spanish": "comedor, cantina",
    "segments": [
      {
        "text": "食",
        "furigana": "しょく"
      },
      {
        "text": "堂",
        "furigana": "どう"
      }
    ],
    "targetKanji": [
      "食",
      "堂"
    ]
  },
  {
    "id": "w-l03-110",
    "lessonId": "l03",
    "lessonNumber": "Lección 3",
    "kanji": "事務所",
    "reading": "じむしょ",
    "romaji": "jimusho",
    "spanish": "oficina",
    "segments": [
      {
        "text": "事",
        "furigana": "じ"
      },
      {
        "text": "務",
        "furigana": "む"
      },
      {
        "text": "所",
        "furigana": "しょ"
      }
    ],
    "targetKanji": [
      "事",
      "務",
      "所"
    ]
  },
  {
    "id": "w-l03-111",
    "lessonId": "l03",
    "lessonNumber": "Lección 3",
    "kanji": "会議室",
    "reading": "かいぎしつ",
    "romaji": "kaigishitsu",
    "spanish": "sala de conferencias",
    "segments": [
      {
        "text": "会",
        "furigana": "かい"
      },
      {
        "text": "議",
        "furigana": "ぎ"
      },
      {
        "text": "室",
        "furigana": "しつ"
      }
    ],
    "targetKanji": [
      "会",
      "議",
      "室"
    ]
  },
  {
    "id": "w-l03-112",
    "lessonId": "l03",
    "lessonNumber": "Lección 3",
    "kanji": "受付",
    "reading": "うけつけ",
    "romaji": "uketsuke",
    "spanish": "recepción",
    "segments": [
      {
        "text": "受",
        "furigana": "うけ"
      },
      {
        "text": "付",
        "furigana": "つけ"
      }
    ],
    "targetKanji": [
      "受",
      "付"
    ]
  },
  {
    "id": "w-l03-113",
    "lessonId": "l03",
    "lessonNumber": "Lección 3",
    "kanji": "ロビー",
    "reading": "ロビー",
    "romaji": "robii",
    "spanish": "vestíbulo, vestíbulo",
    "segments": [
      {
        "text": "ロビー"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l03-114",
    "lessonId": "l03",
    "lessonNumber": "Lección 3",
    "kanji": "部屋",
    "reading": "へや",
    "romaji": "heya",
    "spanish": "habitación, cuarto",
    "segments": [
      {
        "text": "部",
        "furigana": "へ"
      },
      {
        "text": "屋",
        "furigana": "や"
      }
    ],
    "targetKanji": [
      "部",
      "屋"
    ]
  },
  {
    "id": "w-l03-115",
    "lessonId": "l03",
    "lessonNumber": "Lección 3",
    "kanji": "トイレ",
    "reading": "トイレ",
    "romaji": "toire",
    "spanish": "baño, servicio",
    "segments": [
      {
        "text": "トイレ"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l03-116",
    "lessonId": "l03",
    "lessonNumber": "Lección 3",
    "kanji": "お手洗い",
    "reading": "おてあらい",
    "romaji": "otearai",
    "spanish": "lavabo, baño",
    "segments": [
      {
        "text": "お"
      },
      {
        "text": "手",
        "furigana": "て"
      },
      {
        "text": "洗",
        "furigana": "あら"
      },
      {
        "text": "い"
      }
    ],
    "targetKanji": [
      "手",
      "洗"
    ]
  },
  {
    "id": "w-l03-117",
    "lessonId": "l03",
    "lessonNumber": "Lección 3",
    "kanji": "階段",
    "reading": "かいだん",
    "romaji": "kaidan",
    "spanish": "escalera",
    "segments": [
      {
        "text": "階",
        "furigana": "かい"
      },
      {
        "text": "段",
        "furigana": "だん"
      }
    ],
    "targetKanji": [
      "階",
      "段"
    ]
  },
  {
    "id": "w-l03-118",
    "lessonId": "l03",
    "lessonNumber": "Lección 3",
    "kanji": "エレベーター",
    "reading": "エレベーター",
    "romaji": "erebeetaa",
    "spanish": "ascensor",
    "segments": [
      {
        "text": "エレベーター"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l03-119",
    "lessonId": "l03",
    "lessonNumber": "Lección 3",
    "kanji": "エスカレーター",
    "reading": "エスカレーター",
    "romaji": "esukareetaa",
    "spanish": "escalera mecánica",
    "segments": [
      {
        "text": "エスカレーター"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l03-120",
    "lessonId": "l03",
    "lessonNumber": "Lección 3",
    "kanji": "自動販売機",
    "reading": "じどうはんばいき",
    "romaji": "jidouhanbaiki",
    "spanish": "máquina expendedora",
    "segments": [
      {
        "text": "自",
        "furigana": "じ"
      },
      {
        "text": "動",
        "furigana": "どう"
      },
      {
        "text": "販",
        "furigana": "はん"
      },
      {
        "text": "売",
        "furigana": "ばい"
      },
      {
        "text": "機",
        "furigana": "き"
      }
    ],
    "targetKanji": [
      "自",
      "動",
      "販",
      "売",
      "機"
    ]
  },
  {
    "id": "w-l03-121",
    "lessonId": "l03",
    "lessonNumber": "Lección 3",
    "kanji": "電話",
    "reading": "でんわ",
    "romaji": "denwa",
    "spanish": "teléfono",
    "segments": [
      {
        "text": "電",
        "furigana": "でん"
      },
      {
        "text": "話",
        "furigana": "わ"
      }
    ],
    "targetKanji": [
      "電",
      "話"
    ]
  },
  {
    "id": "w-l03-122",
    "lessonId": "l03",
    "lessonNumber": "Lección 3",
    "kanji": "国",
    "reading": "くに",
    "romaji": "kuni",
    "spanish": "país, patria",
    "segments": [
      {
        "text": "国",
        "furigana": "くに"
      }
    ],
    "targetKanji": [
      "国"
    ]
  },
  {
    "id": "w-l03-123",
    "lessonId": "l03",
    "lessonNumber": "Lección 3",
    "kanji": "会社",
    "reading": "かいしゃ",
    "romaji": "kaisha",
    "spanish": "empresa, compañía",
    "segments": [
      {
        "text": "会",
        "furigana": "かい"
      },
      {
        "text": "社",
        "furigana": "しゃ"
      }
    ],
    "targetKanji": [
      "会",
      "社"
    ]
  },
  {
    "id": "w-l03-124",
    "lessonId": "l03",
    "lessonNumber": "Lección 3",
    "kanji": "うち",
    "reading": "うち",
    "romaji": "uchi",
    "spanish": "casa, hogar",
    "segments": [
      {
        "text": "うち"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l03-125",
    "lessonId": "l03",
    "lessonNumber": "Lección 3",
    "kanji": "靴",
    "reading": "くつ",
    "romaji": "kutsu",
    "spanish": "zapatos",
    "segments": [
      {
        "text": "靴",
        "furigana": "くつ"
      }
    ],
    "targetKanji": [
      "靴"
    ]
  },
  {
    "id": "w-l03-126",
    "lessonId": "l03",
    "lessonNumber": "Lección 3",
    "kanji": "ネクタイ",
    "reading": "ネクタイ",
    "romaji": "nekutai",
    "spanish": "corbata",
    "segments": [
      {
        "text": "ネクタイ"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l03-127",
    "lessonId": "l03",
    "lessonNumber": "Lección 3",
    "kanji": "ワイン",
    "reading": "ワイン",
    "romaji": "wain",
    "spanish": "vino",
    "segments": [
      {
        "text": "ワイン"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l03-128",
    "lessonId": "l03",
    "lessonNumber": "Lección 3",
    "kanji": "たばこ",
    "reading": "たばこ",
    "romaji": "tabako",
    "spanish": "tabaco, cigarrillos",
    "segments": [
      {
        "text": "たばこ"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l03-129",
    "lessonId": "l03",
    "lessonNumber": "Lección 3",
    "kanji": "売り場",
    "reading": "うりば",
    "romaji": "uriba",
    "spanish": "sección de venta, mostrador",
    "segments": [
      {
        "text": "売",
        "furigana": "う"
      },
      {
        "text": "り"
      },
      {
        "text": "場",
        "furigana": "ば"
      }
    ],
    "targetKanji": [
      "売",
      "場"
    ]
  },
  {
    "id": "w-l03-130",
    "lessonId": "l03",
    "lessonNumber": "Lección 3",
    "kanji": "地下",
    "reading": "ちか",
    "romaji": "chika",
    "spanish": "sótano, subterráneo",
    "segments": [
      {
        "text": "地",
        "furigana": "ち"
      },
      {
        "text": "下",
        "furigana": "か"
      }
    ],
    "targetKanji": [
      "地",
      "下"
    ]
  },
  {
    "id": "w-l03-131",
    "lessonId": "l03",
    "lessonNumber": "Lección 3",
    "kanji": "～階",
    "reading": "～かい",
    "romaji": "~kai",
    "spanish": "piso / planta",
    "segments": [
      {
        "text": "～"
      },
      {
        "text": "階",
        "furigana": "かい"
      }
    ],
    "targetKanji": [
      "階"
    ]
  },
  {
    "id": "w-l03-132",
    "lessonId": "l03",
    "lessonNumber": "Lección 3",
    "kanji": "何階",
    "reading": "なんがい",
    "romaji": "nangai",
    "spanish": "qué piso",
    "segments": [
      {
        "text": "何",
        "furigana": "なん"
      },
      {
        "text": "階",
        "furigana": "がい"
      }
    ],
    "targetKanji": [
      "何",
      "階"
    ]
  },
  {
    "id": "w-l03-133",
    "lessonId": "l03",
    "lessonNumber": "Lección 3",
    "kanji": "～円",
    "reading": "～えん",
    "romaji": "~en",
    "spanish": "yenes",
    "segments": [
      {
        "text": "～"
      },
      {
        "text": "円",
        "furigana": "えん"
      }
    ],
    "targetKanji": [
      "円"
    ]
  },
  {
    "id": "w-l03-134",
    "lessonId": "l03",
    "lessonNumber": "Lección 3",
    "kanji": "いくら",
    "reading": "いくら",
    "romaji": "ikura",
    "spanish": "cuánto (precio)",
    "segments": [
      {
        "text": "いくら"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l03-135",
    "lessonId": "l03",
    "lessonNumber": "Lección 3",
    "kanji": "百",
    "reading": "ひゃく",
    "romaji": "hyaku",
    "spanish": "cien",
    "segments": [
      {
        "text": "百",
        "furigana": "ひゃく"
      }
    ],
    "targetKanji": [
      "百"
    ]
  },
  {
    "id": "w-l03-136",
    "lessonId": "l03",
    "lessonNumber": "Lección 3",
    "kanji": "千",
    "reading": "せん",
    "romaji": "sen",
    "spanish": "mil",
    "segments": [
      {
        "text": "千",
        "furigana": "せん"
      }
    ],
    "targetKanji": [
      "千"
    ]
  },
  {
    "id": "w-l03-137",
    "lessonId": "l03",
    "lessonNumber": "Lección 3",
    "kanji": "万",
    "reading": "まん",
    "romaji": "man",
    "spanish": "diez mil",
    "segments": [
      {
        "text": "万",
        "furigana": "まん"
      }
    ],
    "targetKanji": [
      "万"
    ]
  },
  {
    "id": "w-l03-138",
    "lessonId": "l03",
    "lessonNumber": "Lección 3",
    "kanji": "すみません",
    "reading": "すみません",
    "romaji": "sumimasen",
    "spanish": "disculpe",
    "segments": [
      {
        "text": "すみません"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l03-139",
    "lessonId": "l03",
    "lessonNumber": "Lección 3",
    "kanji": "～でございます",
    "reading": "～でございます",
    "romaji": "~de gozaimasu",
    "spanish": "es ~ (muy formal)",
    "segments": [
      {
        "text": "～でございます"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l03-140",
    "lessonId": "l03",
    "lessonNumber": "Lección 3",
    "kanji": "見せてください",
    "reading": "みせてください",
    "romaji": "misete kudasai",
    "spanish": "muéstreme por favor",
    "segments": [
      {
        "text": "見",
        "furigana": "み"
      },
      {
        "text": "せてください"
      }
    ],
    "targetKanji": [
      "見"
    ]
  },
  {
    "id": "w-l03-141",
    "lessonId": "l03",
    "lessonNumber": "Lección 3",
    "kanji": "じゃ",
    "reading": "じゃ",
    "romaji": "ja",
    "spanish": "bien, entonces",
    "segments": [
      {
        "text": "じゃ"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l03-142",
    "lessonId": "l03",
    "lessonNumber": "Lección 3",
    "kanji": "ください",
    "reading": "ください",
    "romaji": "kudasai",
    "spanish": "deme por favor",
    "segments": [
      {
        "text": "ください"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l04-143",
    "lessonId": "l04",
    "lessonNumber": "Lección 4",
    "kanji": "起きます",
    "reading": "おきます",
    "romaji": "okimasu",
    "spanish": "levantarse",
    "segments": [
      {
        "text": "起",
        "furigana": "お"
      },
      {
        "text": "きます"
      }
    ],
    "targetKanji": [
      "起"
    ]
  },
  {
    "id": "w-l04-144",
    "lessonId": "l04",
    "lessonNumber": "Lección 4",
    "kanji": "寝ます",
    "reading": "ねます",
    "romaji": "nemasu",
    "spanish": "acostarse, dormir",
    "segments": [
      {
        "text": "寝",
        "furigana": "ね"
      },
      {
        "text": "ます"
      }
    ],
    "targetKanji": [
      "寝"
    ]
  },
  {
    "id": "w-l04-145",
    "lessonId": "l04",
    "lessonNumber": "Lección 4",
    "kanji": "働きます",
    "reading": "はたらきます",
    "romaji": "hatarakimasu",
    "spanish": "trabajar",
    "segments": [
      {
        "text": "働",
        "furigana": "はたら"
      },
      {
        "text": "きます"
      }
    ],
    "targetKanji": [
      "働"
    ]
  },
  {
    "id": "w-l04-146",
    "lessonId": "l04",
    "lessonNumber": "Lección 4",
    "kanji": "休みます",
    "reading": "やすみます",
    "romaji": "yasumimasu",
    "spanish": "descansar, tomarse libre",
    "segments": [
      {
        "text": "休",
        "furigana": "やす"
      },
      {
        "text": "みます"
      }
    ],
    "targetKanji": [
      "休"
    ]
  },
  {
    "id": "w-l04-147",
    "lessonId": "l04",
    "lessonNumber": "Lección 4",
    "kanji": "勉強します",
    "reading": "べんきょうします",
    "romaji": "benkyoushimasu",
    "spanish": "estudiar",
    "segments": [
      {
        "text": "勉",
        "furigana": "べん"
      },
      {
        "text": "強",
        "furigana": "きょう"
      },
      {
        "text": "します"
      }
    ],
    "targetKanji": [
      "勉",
      "強"
    ]
  },
  {
    "id": "w-l04-148",
    "lessonId": "l04",
    "lessonNumber": "Lección 4",
    "kanji": "終わります",
    "reading": "おわります",
    "romaji": "owarimasu",
    "spanish": "terminar, finalizar",
    "segments": [
      {
        "text": "終",
        "furigana": "お"
      },
      {
        "text": "わります"
      }
    ],
    "targetKanji": [
      "終"
    ]
  },
  {
    "id": "w-l04-149",
    "lessonId": "l04",
    "lessonNumber": "Lección 4",
    "kanji": "デパート",
    "reading": "デパート",
    "romaji": "depaato",
    "spanish": "grandes almacenes",
    "segments": [
      {
        "text": "デパート"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l04-150",
    "lessonId": "l04",
    "lessonNumber": "Lección 4",
    "kanji": "銀行",
    "reading": "ぎんこう",
    "romaji": "ginkou",
    "spanish": "banco",
    "segments": [
      {
        "text": "銀",
        "furigana": "ぎん"
      },
      {
        "text": "行",
        "furigana": "こう"
      }
    ],
    "targetKanji": [
      "銀",
      "行"
    ]
  },
  {
    "id": "w-l04-151",
    "lessonId": "l04",
    "lessonNumber": "Lección 4",
    "kanji": "郵便局",
    "reading": "ゆうびんきょく",
    "romaji": "yuubinkyoku",
    "spanish": "oficina de correos",
    "segments": [
      {
        "text": "郵",
        "furigana": "ゆう"
      },
      {
        "text": "便",
        "furigana": "びん"
      },
      {
        "text": "局",
        "furigana": "きょく"
      }
    ],
    "targetKanji": [
      "郵",
      "便",
      "局"
    ]
  },
  {
    "id": "w-l04-152",
    "lessonId": "l04",
    "lessonNumber": "Lección 4",
    "kanji": "図書館",
    "reading": "としょかん",
    "romaji": "toshokan",
    "spanish": "biblioteca",
    "segments": [
      {
        "text": "図",
        "furigana": "と"
      },
      {
        "text": "書",
        "furigana": "しょ"
      },
      {
        "text": "館",
        "furigana": "かん"
      }
    ],
    "targetKanji": [
      "図",
      "書",
      "館"
    ]
  },
  {
    "id": "w-l04-153",
    "lessonId": "l04",
    "lessonNumber": "Lección 4",
    "kanji": "美術館",
    "reading": "びじゅつかん",
    "romaji": "bijutsukan",
    "spanish": "museo de arte",
    "segments": [
      {
        "text": "美",
        "furigana": "び"
      },
      {
        "text": "術",
        "furigana": "じゅつ"
      },
      {
        "text": "館",
        "furigana": "かん"
      }
    ],
    "targetKanji": [
      "美",
      "術",
      "館"
    ]
  },
  {
    "id": "w-l04-154",
    "lessonId": "l04",
    "lessonNumber": "Lección 4",
    "kanji": "今",
    "reading": "いま",
    "romaji": "ima",
    "spanish": "ahora",
    "segments": [
      {
        "text": "今",
        "furigana": "いま"
      }
    ],
    "targetKanji": [
      "今"
    ]
  },
  {
    "id": "w-l04-155",
    "lessonId": "l04",
    "lessonNumber": "Lección 4",
    "kanji": "～時",
    "reading": "～じ",
    "romaji": "~ji",
    "spanish": "las ~ (horas)",
    "segments": [
      {
        "text": "～"
      },
      {
        "text": "時",
        "furigana": "じ"
      }
    ],
    "targetKanji": [
      "時"
    ]
  },
  {
    "id": "w-l04-156",
    "lessonId": "l04",
    "lessonNumber": "Lección 4",
    "kanji": "～分",
    "reading": "～ふん／～ぷん",
    "romaji": "~fun / ~pun",
    "spanish": "minutos",
    "segments": [
      {
        "text": "～"
      },
      {
        "text": "分",
        "furigana": "ふん"
      }
    ],
    "targetKanji": [
      "分"
    ]
  },
  {
    "id": "w-l04-157",
    "lessonId": "l04",
    "lessonNumber": "Lección 4",
    "kanji": "半",
    "reading": "はん",
    "romaji": "han",
    "spanish": "y media",
    "segments": [
      {
        "text": "半",
        "furigana": "はん"
      }
    ],
    "targetKanji": [
      "半"
    ]
  },
  {
    "id": "w-l04-158",
    "lessonId": "l04",
    "lessonNumber": "Lección 4",
    "kanji": "何時",
    "reading": "なんじ",
    "romaji": "nanji",
    "spanish": "qué hora",
    "segments": [
      {
        "text": "何",
        "furigana": "なん"
      },
      {
        "text": "時",
        "furigana": "じ"
      }
    ],
    "targetKanji": [
      "何",
      "時"
    ]
  },
  {
    "id": "w-l04-159",
    "lessonId": "l04",
    "lessonNumber": "Lección 4",
    "kanji": "何分",
    "reading": "なんぷん",
    "romaji": "nanpun",
    "spanish": "cuántos minutos",
    "segments": [
      {
        "text": "何",
        "furigana": "なん"
      },
      {
        "text": "分",
        "furigana": "ぷん"
      }
    ],
    "targetKanji": [
      "何",
      "分"
    ]
  },
  {
    "id": "w-l04-160",
    "lessonId": "l04",
    "lessonNumber": "Lección 4",
    "kanji": "午前",
    "reading": "ごぜん",
    "romaji": "gozen",
    "spanish": "por la mañana, a.m.",
    "segments": [
      {
        "text": "午",
        "furigana": "ご"
      },
      {
        "text": "前",
        "furigana": "ぜん"
      }
    ],
    "targetKanji": [
      "午",
      "前"
    ]
  },
  {
    "id": "w-l04-161",
    "lessonId": "l04",
    "lessonNumber": "Lección 4",
    "kanji": "午後",
    "reading": "ごご",
    "romaji": "gogo",
    "spanish": "por la tarde, p.m.",
    "segments": [
      {
        "text": "午",
        "furigana": "ご"
      },
      {
        "text": "後",
        "furigana": "ご"
      }
    ],
    "targetKanji": [
      "午",
      "後"
    ]
  },
  {
    "id": "w-l04-162",
    "lessonId": "l04",
    "lessonNumber": "Lección 4",
    "kanji": "朝",
    "reading": "あさ",
    "romaji": "asa",
    "spanish": "mañana (por la mañana)",
    "segments": [
      {
        "text": "朝",
        "furigana": "あさ"
      }
    ],
    "targetKanji": [
      "朝"
    ]
  },
  {
    "id": "w-l04-163",
    "lessonId": "l04",
    "lessonNumber": "Lección 4",
    "kanji": "昼",
    "reading": "ひる",
    "romaji": "hiru",
    "spanish": "mediodía, día",
    "segments": [
      {
        "text": "昼",
        "furigana": "ひる"
      }
    ],
    "targetKanji": [
      "昼"
    ]
  },
  {
    "id": "w-l04-164",
    "lessonId": "l04",
    "lessonNumber": "Lección 4",
    "kanji": "晩",
    "reading": "ばん",
    "romaji": "ban",
    "spanish": "tarde-noche",
    "segments": [
      {
        "text": "晩",
        "furigana": "ばん"
      }
    ],
    "targetKanji": [
      "晩"
    ]
  },
  {
    "id": "w-l04-165",
    "lessonId": "l04",
    "lessonNumber": "Lección 4",
    "kanji": "夜",
    "reading": "よる",
    "romaji": "yoru",
    "spanish": "noche",
    "segments": [
      {
        "text": "夜",
        "furigana": "よる"
      }
    ],
    "targetKanji": [
      "夜"
    ]
  },
  {
    "id": "w-l04-166",
    "lessonId": "l04",
    "lessonNumber": "Lección 4",
    "kanji": "おととい",
    "reading": "おととい",
    "romaji": "ototoi",
    "spanish": "anteayer",
    "segments": [
      {
        "text": "おととい"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l04-167",
    "lessonId": "l04",
    "lessonNumber": "Lección 4",
    "kanji": "きのう",
    "reading": "きのう",
    "romaji": "kinou",
    "spanish": "ayer",
    "segments": [
      {
        "text": "きのう"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l04-168",
    "lessonId": "l04",
    "lessonNumber": "Lección 4",
    "kanji": "今日",
    "reading": "きょう",
    "romaji": "kyou",
    "spanish": "hoy",
    "segments": [
      {
        "text": "今",
        "furigana": "きょう"
      },
      {
        "text": "日"
      }
    ],
    "targetKanji": [
      "今",
      "日"
    ]
  },
  {
    "id": "w-l04-169",
    "lessonId": "l04",
    "lessonNumber": "Lección 4",
    "kanji": "あした",
    "reading": "あした",
    "romaji": "ashita",
    "spanish": "mañana",
    "segments": [
      {
        "text": "あした"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l04-170",
    "lessonId": "l04",
    "lessonNumber": "Lección 4",
    "kanji": "あさって",
    "reading": "あさって",
    "romaji": "asatte",
    "spanish": "pasado mañana",
    "segments": [
      {
        "text": "あさって"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l04-171",
    "lessonId": "l04",
    "lessonNumber": "Lección 4",
    "kanji": "今朝",
    "reading": "けさ",
    "romaji": "kesa",
    "spanish": "esta mañana",
    "segments": [
      {
        "text": "今",
        "furigana": "け"
      },
      {
        "text": "朝",
        "furigana": "さ"
      }
    ],
    "targetKanji": [
      "今",
      "朝"
    ]
  },
  {
    "id": "w-l04-172",
    "lessonId": "l04",
    "lessonNumber": "Lección 4",
    "kanji": "今晩",
    "reading": "こんばん",
    "romaji": "konban",
    "spanish": "esta noche",
    "segments": [
      {
        "text": "今",
        "furigana": "こん"
      },
      {
        "text": "晩",
        "furigana": "ばん"
      }
    ],
    "targetKanji": [
      "今",
      "晩"
    ]
  },
  {
    "id": "w-l04-173",
    "lessonId": "l04",
    "lessonNumber": "Lección 4",
    "kanji": "休み",
    "reading": "やすみ",
    "romaji": "yasumi",
    "spanish": "descanso, día libre",
    "segments": [
      {
        "text": "休",
        "furigana": "やす"
      },
      {
        "text": "み"
      }
    ],
    "targetKanji": [
      "休"
    ]
  },
  {
    "id": "w-l04-174",
    "lessonId": "l04",
    "lessonNumber": "Lección 4",
    "kanji": "昼休み",
    "reading": "ひるやすみ",
    "romaji": "hiruyasumi",
    "spanish": "descanso del mediodía",
    "segments": [
      {
        "text": "昼",
        "furigana": "ひる"
      },
      {
        "text": "休",
        "furigana": "やす"
      },
      {
        "text": "み"
      }
    ],
    "targetKanji": [
      "昼",
      "休"
    ]
  },
  {
    "id": "w-l04-175",
    "lessonId": "l04",
    "lessonNumber": "Lección 4",
    "kanji": "毎朝",
    "reading": "まいあさ",
    "romaji": "maiasa",
    "spanish": "todas las mañanas",
    "segments": [
      {
        "text": "毎",
        "furigana": "まい"
      },
      {
        "text": "朝",
        "furigana": "あさ"
      }
    ],
    "targetKanji": [
      "毎",
      "朝"
    ]
  },
  {
    "id": "w-l04-176",
    "lessonId": "l04",
    "lessonNumber": "Lección 4",
    "kanji": "毎晩",
    "reading": "まいばん",
    "romaji": "maiban",
    "spanish": "todas las noches",
    "segments": [
      {
        "text": "毎",
        "furigana": "まい"
      },
      {
        "text": "晩",
        "furigana": "ばん"
      }
    ],
    "targetKanji": [
      "毎",
      "晩"
    ]
  },
  {
    "id": "w-l04-177",
    "lessonId": "l04",
    "lessonNumber": "Lección 4",
    "kanji": "毎日",
    "reading": "まいにち",
    "romaji": "mainichi",
    "spanish": "todos los días",
    "segments": [
      {
        "text": "毎",
        "furigana": "まい"
      },
      {
        "text": "日",
        "furigana": "にち"
      }
    ],
    "targetKanji": [
      "毎",
      "日"
    ]
  },
  {
    "id": "w-l04-178",
    "lessonId": "l04",
    "lessonNumber": "Lección 4",
    "kanji": "月曜日",
    "reading": "げつようび",
    "romaji": "getsuyoubi",
    "spanish": "lunes",
    "segments": [
      {
        "text": "月",
        "furigana": "げつ"
      },
      {
        "text": "曜",
        "furigana": "よう"
      },
      {
        "text": "日",
        "furigana": "び"
      }
    ],
    "targetKanji": [
      "月",
      "曜",
      "日"
    ]
  },
  {
    "id": "w-l04-179",
    "lessonId": "l04",
    "lessonNumber": "Lección 4",
    "kanji": "火曜日",
    "reading": "かようび",
    "romaji": "kayoubi",
    "spanish": "martes",
    "segments": [
      {
        "text": "火",
        "furigana": "か"
      },
      {
        "text": "曜",
        "furigana": "よう"
      },
      {
        "text": "日",
        "furigana": "び"
      }
    ],
    "targetKanji": [
      "火",
      "曜",
      "日"
    ]
  },
  {
    "id": "w-l04-180",
    "lessonId": "l04",
    "lessonNumber": "Lección 4",
    "kanji": "水曜日",
    "reading": "すいようび",
    "romaji": "suiyoubi",
    "spanish": "miércoles",
    "segments": [
      {
        "text": "水",
        "furigana": "すい"
      },
      {
        "text": "曜",
        "furigana": "よう"
      },
      {
        "text": "日",
        "furigana": "び"
      }
    ],
    "targetKanji": [
      "水",
      "曜",
      "日"
    ]
  },
  {
    "id": "w-l04-181",
    "lessonId": "l04",
    "lessonNumber": "Lección 4",
    "kanji": "木曜日",
    "reading": "もくようび",
    "romaji": "mokuyoubi",
    "spanish": "jueves",
    "segments": [
      {
        "text": "木",
        "furigana": "もく"
      },
      {
        "text": "曜",
        "furigana": "よう"
      },
      {
        "text": "日",
        "furigana": "び"
      }
    ],
    "targetKanji": [
      "木",
      "曜",
      "日"
    ]
  },
  {
    "id": "w-l04-182",
    "lessonId": "l04",
    "lessonNumber": "Lección 4",
    "kanji": "金曜日",
    "reading": "きんようび",
    "romaji": "kinyoubi",
    "spanish": "viernes",
    "segments": [
      {
        "text": "金",
        "furigana": "きん"
      },
      {
        "text": "曜",
        "furigana": "よう"
      },
      {
        "text": "日",
        "furigana": "び"
      }
    ],
    "targetKanji": [
      "金",
      "曜",
      "日"
    ]
  },
  {
    "id": "w-l04-183",
    "lessonId": "l04",
    "lessonNumber": "Lección 4",
    "kanji": "土曜日",
    "reading": "どようび",
    "romaji": "doyoubi",
    "spanish": "sábado",
    "segments": [
      {
        "text": "土",
        "furigana": "ど"
      },
      {
        "text": "曜",
        "furigana": "よう"
      },
      {
        "text": "日",
        "furigana": "び"
      }
    ],
    "targetKanji": [
      "土",
      "曜",
      "日"
    ]
  },
  {
    "id": "w-l04-184",
    "lessonId": "l04",
    "lessonNumber": "Lección 4",
    "kanji": "日曜日",
    "reading": "にちようび",
    "romaji": "nichiyoubi",
    "spanish": "domingo",
    "segments": [
      {
        "text": "日",
        "furigana": "にち"
      },
      {
        "text": "曜",
        "furigana": "よう"
      },
      {
        "text": "日",
        "furigana": "び"
      }
    ],
    "targetKanji": [
      "日",
      "曜"
    ]
  },
  {
    "id": "w-l04-185",
    "lessonId": "l04",
    "lessonNumber": "Lección 4",
    "kanji": "何曜日",
    "reading": "なんようび",
    "romaji": "nanyoubi",
    "spanish": "qué día de la semana",
    "segments": [
      {
        "text": "何",
        "furigana": "なん"
      },
      {
        "text": "曜",
        "furigana": "よう"
      },
      {
        "text": "日",
        "furigana": "び"
      }
    ],
    "targetKanji": [
      "何",
      "曜",
      "日"
    ]
  },
  {
    "id": "w-l04-186",
    "lessonId": "l04",
    "lessonNumber": "Lección 4",
    "kanji": "番号",
    "reading": "ばんごう",
    "romaji": "bangou",
    "spanish": "número",
    "segments": [
      {
        "text": "番",
        "furigana": "ばん"
      },
      {
        "text": "号",
        "furigana": "ごう"
      }
    ],
    "targetKanji": [
      "番",
      "号"
    ]
  },
  {
    "id": "w-l04-187",
    "lessonId": "l04",
    "lessonNumber": "Lección 4",
    "kanji": "何番",
    "reading": "なんばん",
    "romaji": "nanban",
    "spanish": "qué número",
    "segments": [
      {
        "text": "何",
        "furigana": "なん"
      },
      {
        "text": "番",
        "furigana": "ばん"
      }
    ],
    "targetKanji": [
      "何",
      "番"
    ]
  },
  {
    "id": "w-l04-188",
    "lessonId": "l04",
    "lessonNumber": "Lección 4",
    "kanji": "～から",
    "reading": "～から",
    "romaji": "~kara",
    "spanish": "desde ~",
    "segments": [
      {
        "text": "～から"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l04-189",
    "lessonId": "l04",
    "lessonNumber": "Lección 4",
    "kanji": "～まで",
    "reading": "～まで",
    "romaji": "~made",
    "spanish": "hasta ~",
    "segments": [
      {
        "text": "～まで"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l04-190",
    "lessonId": "l04",
    "lessonNumber": "Lección 4",
    "kanji": "～と～",
    "reading": "～と～",
    "romaji": "~to~",
    "spanish": "~ y ~",
    "segments": [
      {
        "text": "～と～"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l04-191",
    "lessonId": "l04",
    "lessonNumber": "Lección 4",
    "kanji": "大変ですね",
    "reading": "たいへんですね",
    "romaji": "taihen desu ne",
    "spanish": "¡qué duro! / ¡vaya trabajo!",
    "segments": [
      {
        "text": "大",
        "furigana": "たい"
      },
      {
        "text": "変",
        "furigana": "へん"
      },
      {
        "text": "ですね"
      }
    ],
    "targetKanji": [
      "大",
      "変"
    ]
  },
  {
    "id": "w-l05-192",
    "lessonId": "l05",
    "lessonNumber": "Lección 5",
    "kanji": "行きます",
    "reading": "いきます",
    "romaji": "ikimasu",
    "spanish": "ir",
    "segments": [
      {
        "text": "行",
        "furigana": "い"
      },
      {
        "text": "きます"
      }
    ],
    "targetKanji": [
      "行"
    ]
  },
  {
    "id": "w-l05-193",
    "lessonId": "l05",
    "lessonNumber": "Lección 5",
    "kanji": "来ます",
    "reading": "きます",
    "romaji": "kimasu",
    "spanish": "venir",
    "segments": [
      {
        "text": "来",
        "furigana": "き"
      },
      {
        "text": "ます"
      }
    ],
    "targetKanji": [
      "来"
    ]
  },
  {
    "id": "w-l05-194",
    "lessonId": "l05",
    "lessonNumber": "Lección 5",
    "kanji": "帰ります",
    "reading": "かえります",
    "romaji": "kaerimasu",
    "spanish": "regresar, volver",
    "segments": [
      {
        "text": "帰",
        "furigana": "かえ"
      },
      {
        "text": "ります"
      }
    ],
    "targetKanji": [
      "帰"
    ]
  },
  {
    "id": "w-l05-195",
    "lessonId": "l05",
    "lessonNumber": "Lección 5",
    "kanji": "学校",
    "reading": "がっこう",
    "romaji": "gakkou",
    "spanish": "escuela, colegio",
    "segments": [
      {
        "text": "学",
        "furigana": "がっ"
      },
      {
        "text": "校",
        "furigana": "こう"
      }
    ],
    "targetKanji": [
      "学",
      "校"
    ]
  },
  {
    "id": "w-l05-196",
    "lessonId": "l05",
    "lessonNumber": "Lección 5",
    "kanji": "スーパー",
    "reading": "スーパー",
    "romaji": "suupaa",
    "spanish": "supermercado",
    "segments": [
      {
        "text": "スーパー"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l05-197",
    "lessonId": "l05",
    "lessonNumber": "Lección 5",
    "kanji": "駅",
    "reading": "えき",
    "romaji": "eki",
    "spanish": "estación de tren",
    "segments": [
      {
        "text": "駅",
        "furigana": "えき"
      }
    ],
    "targetKanji": [
      "駅"
    ]
  },
  {
    "id": "w-l05-198",
    "lessonId": "l05",
    "lessonNumber": "Lección 5",
    "kanji": "飛行機",
    "reading": "ひこうき",
    "romaji": "hikouki",
    "spanish": "avión",
    "segments": [
      {
        "text": "飛",
        "furigana": "ひ"
      },
      {
        "text": "行",
        "furigana": "こう"
      },
      {
        "text": "機",
        "furigana": "き"
      }
    ],
    "targetKanji": [
      "飛",
      "行",
      "機"
    ]
  },
  {
    "id": "w-l05-199",
    "lessonId": "l05",
    "lessonNumber": "Lección 5",
    "kanji": "船",
    "reading": "ふね",
    "romaji": "fune",
    "spanish": "barco",
    "segments": [
      {
        "text": "船",
        "furigana": "ふね"
      }
    ],
    "targetKanji": [
      "船"
    ]
  },
  {
    "id": "w-l05-200",
    "lessonId": "l05",
    "lessonNumber": "Lección 5",
    "kanji": "電車",
    "reading": "でんしゃ",
    "romaji": "densha",
    "spanish": "tren eléctrico",
    "segments": [
      {
        "text": "電",
        "furigana": "でん"
      },
      {
        "text": "車",
        "furigana": "しゃ"
      }
    ],
    "targetKanji": [
      "電",
      "車"
    ]
  },
  {
    "id": "w-l05-201",
    "lessonId": "l05",
    "lessonNumber": "Lección 5",
    "kanji": "地下鉄",
    "reading": "ちかてつ",
    "romaji": "chikatetsu",
    "spanish": "metro, subterráneo",
    "segments": [
      {
        "text": "地",
        "furigana": "ち"
      },
      {
        "text": "下",
        "furigana": "か"
      },
      {
        "text": "鉄",
        "furigana": "てつ"
      }
    ],
    "targetKanji": [
      "地",
      "下",
      "鉄"
    ]
  },
  {
    "id": "w-l05-202",
    "lessonId": "l05",
    "lessonNumber": "Lección 5",
    "kanji": "新幹線",
    "reading": "しんかんせん",
    "romaji": "shinkansen",
    "spanish": "tren bala japonés",
    "segments": [
      {
        "text": "新",
        "furigana": "しん"
      },
      {
        "text": "幹",
        "furigana": "かん"
      },
      {
        "text": "線",
        "furigana": "せん"
      }
    ],
    "targetKanji": [
      "新",
      "幹",
      "線"
    ]
  },
  {
    "id": "w-l05-203",
    "lessonId": "l05",
    "lessonNumber": "Lección 5",
    "kanji": "バス",
    "reading": "バス",
    "romaji": "basu",
    "spanish": "autobús",
    "segments": [
      {
        "text": "バス"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l05-204",
    "lessonId": "l05",
    "lessonNumber": "Lección 5",
    "kanji": "タクシー",
    "reading": "タクシー",
    "romaji": "takushii",
    "spanish": "taxi",
    "segments": [
      {
        "text": "タクシー"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l05-205",
    "lessonId": "l05",
    "lessonNumber": "Lección 5",
    "kanji": "自転車",
    "reading": "じてんしゃ",
    "romaji": "jitensha",
    "spanish": "bicicleta",
    "segments": [
      {
        "text": "自",
        "furigana": "じ"
      },
      {
        "text": "転",
        "furigana": "てん"
      },
      {
        "text": "車",
        "furigana": "しゃ"
      }
    ],
    "targetKanji": [
      "自",
      "転",
      "車"
    ]
  },
  {
    "id": "w-l05-206",
    "lessonId": "l05",
    "lessonNumber": "Lección 5",
    "kanji": "歩いて",
    "reading": "あるいて",
    "romaji": "aruite",
    "spanish": "a pie, caminando",
    "segments": [
      {
        "text": "歩",
        "furigana": "ある"
      },
      {
        "text": "いて"
      }
    ],
    "targetKanji": [
      "歩"
    ]
  },
  {
    "id": "w-l05-207",
    "lessonId": "l05",
    "lessonNumber": "Lección 5",
    "kanji": "人",
    "reading": "ひと",
    "romaji": "hito",
    "spanish": "persona",
    "segments": [
      {
        "text": "人",
        "furigana": "ひと"
      }
    ],
    "targetKanji": [
      "人"
    ]
  },
  {
    "id": "w-l05-208",
    "lessonId": "l05",
    "lessonNumber": "Lección 5",
    "kanji": "友達",
    "reading": "ともだち",
    "romaji": "tomodachi",
    "spanish": "amigo, amiga",
    "segments": [
      {
        "text": "友",
        "furigana": "とも"
      },
      {
        "text": "達",
        "furigana": "だち"
      }
    ],
    "targetKanji": [
      "友",
      "達"
    ]
  },
  {
    "id": "w-l05-209",
    "lessonId": "l05",
    "lessonNumber": "Lección 5",
    "kanji": "彼",
    "reading": "かれ",
    "romaji": "kare",
    "spanish": "él, novio",
    "segments": [
      {
        "text": "彼",
        "furigana": "かれ"
      }
    ],
    "targetKanji": [
      "彼"
    ]
  },
  {
    "id": "w-l05-210",
    "lessonId": "l05",
    "lessonNumber": "Lección 5",
    "kanji": "彼女",
    "reading": "かのじょ",
    "romaji": "kanojo",
    "spanish": "ella, novia",
    "segments": [
      {
        "text": "彼",
        "furigana": "かの"
      },
      {
        "text": "女",
        "furigana": "じょ"
      }
    ],
    "targetKanji": [
      "彼",
      "女"
    ]
  },
  {
    "id": "w-l05-211",
    "lessonId": "l05",
    "lessonNumber": "Lección 5",
    "kanji": "家族",
    "reading": "かぞく",
    "romaji": "kazoku",
    "spanish": "familia",
    "segments": [
      {
        "text": "家",
        "furigana": "か"
      },
      {
        "text": "族",
        "furigana": "ぞく"
      }
    ],
    "targetKanji": [
      "家",
      "族"
    ]
  },
  {
    "id": "w-l05-212",
    "lessonId": "l05",
    "lessonNumber": "Lección 5",
    "kanji": "一人で",
    "reading": "ひとりで",
    "romaji": "hitoride",
    "spanish": "solo, por sí mismo",
    "segments": [
      {
        "text": "一",
        "furigana": "ひと"
      },
      {
        "text": "人",
        "furigana": "り"
      },
      {
        "text": "で"
      }
    ],
    "targetKanji": [
      "一",
      "人"
    ]
  },
  {
    "id": "w-l05-213",
    "lessonId": "l05",
    "lessonNumber": "Lección 5",
    "kanji": "先週",
    "reading": "せんしゅう",
    "romaji": "senshuu",
    "spanish": "la semana pasada",
    "segments": [
      {
        "text": "先",
        "furigana": "せん"
      },
      {
        "text": "週",
        "furigana": "しゅう"
      }
    ],
    "targetKanji": [
      "先",
      "週"
    ]
  },
  {
    "id": "w-l05-214",
    "lessonId": "l05",
    "lessonNumber": "Lección 5",
    "kanji": "今週",
    "reading": "こんしゅう",
    "romaji": "konshuu",
    "spanish": "esta semana",
    "segments": [
      {
        "text": "今",
        "furigana": "こん"
      },
      {
        "text": "週",
        "furigana": "しゅう"
      }
    ],
    "targetKanji": [
      "今",
      "週"
    ]
  },
  {
    "id": "w-l05-215",
    "lessonId": "l05",
    "lessonNumber": "Lección 5",
    "kanji": "来週",
    "reading": "らいしゅう",
    "romaji": "raishuu",
    "spanish": "la próxima semana",
    "segments": [
      {
        "text": "来",
        "furigana": "らい"
      },
      {
        "text": "週",
        "furigana": "しゅう"
      }
    ],
    "targetKanji": [
      "来",
      "週"
    ]
  },
  {
    "id": "w-l05-216",
    "lessonId": "l05",
    "lessonNumber": "Lección 5",
    "kanji": "先月",
    "reading": "せんげつ",
    "romaji": "sengetsu",
    "spanish": "el mes pasado",
    "segments": [
      {
        "text": "先",
        "furigana": "せん"
      },
      {
        "text": "月",
        "furigana": "げつ"
      }
    ],
    "targetKanji": [
      "先",
      "月"
    ]
  },
  {
    "id": "w-l05-217",
    "lessonId": "l05",
    "lessonNumber": "Lección 5",
    "kanji": "今月",
    "reading": "こんげつ",
    "romaji": "kongetsu",
    "spanish": "este mes",
    "segments": [
      {
        "text": "今",
        "furigana": "こん"
      },
      {
        "text": "月",
        "furigana": "げつ"
      }
    ],
    "targetKanji": [
      "今",
      "月"
    ]
  },
  {
    "id": "w-l05-218",
    "lessonId": "l05",
    "lessonNumber": "Lección 5",
    "kanji": "来月",
    "reading": "らいげつ",
    "romaji": "raigetsu",
    "spanish": "el próximo mes",
    "segments": [
      {
        "text": "来",
        "furigana": "らい"
      },
      {
        "text": "月",
        "furigana": "げつ"
      }
    ],
    "targetKanji": [
      "来",
      "月"
    ]
  },
  {
    "id": "w-l05-219",
    "lessonId": "l05",
    "lessonNumber": "Lección 5",
    "kanji": "去年",
    "reading": "きょねん",
    "romaji": "kyonen",
    "spanish": "el año pasado",
    "segments": [
      {
        "text": "去",
        "furigana": "きょ"
      },
      {
        "text": "年",
        "furigana": "ねん"
      }
    ],
    "targetKanji": [
      "去",
      "年"
    ]
  },
  {
    "id": "w-l05-220",
    "lessonId": "l05",
    "lessonNumber": "Lección 5",
    "kanji": "今年",
    "reading": "ことし",
    "romaji": "kotoshi",
    "spanish": "este año",
    "segments": [
      {
        "text": "今",
        "furigana": "こと"
      },
      {
        "text": "年",
        "furigana": "し"
      }
    ],
    "targetKanji": [
      "今",
      "年"
    ]
  },
  {
    "id": "w-l05-221",
    "lessonId": "l05",
    "lessonNumber": "Lección 5",
    "kanji": "来年",
    "reading": "らいねん",
    "romaji": "rainen",
    "spanish": "el año que viene",
    "segments": [
      {
        "text": "来",
        "furigana": "らい"
      },
      {
        "text": "年",
        "furigana": "ねん"
      }
    ],
    "targetKanji": [
      "来",
      "年"
    ]
  },
  {
    "id": "w-l05-222",
    "lessonId": "l05",
    "lessonNumber": "Lección 5",
    "kanji": "～月",
    "reading": "～がつ",
    "romaji": "~gatsu",
    "spanish": "el mes de ~",
    "segments": [
      {
        "text": "～"
      },
      {
        "text": "月",
        "furigana": "がつ"
      }
    ],
    "targetKanji": [
      "月"
    ]
  },
  {
    "id": "w-l05-223",
    "lessonId": "l05",
    "lessonNumber": "Lección 5",
    "kanji": "何月",
    "reading": "なんがつ",
    "romaji": "nangatsu",
    "spanish": "qué mes",
    "segments": [
      {
        "text": "何",
        "furigana": "なん"
      },
      {
        "text": "月",
        "furigana": "がつ"
      }
    ],
    "targetKanji": [
      "何",
      "月"
    ]
  },
  {
    "id": "w-l05-224",
    "lessonId": "l05",
    "lessonNumber": "Lección 5",
    "kanji": "一日",
    "reading": "ついたち",
    "romaji": "tsuitachi",
    "spanish": "día 1 del mes",
    "segments": [
      {
        "text": "一",
        "furigana": "つい"
      },
      {
        "text": "日",
        "furigana": "たち"
      }
    ],
    "targetKanji": [
      "一",
      "日"
    ]
  },
  {
    "id": "w-l05-225",
    "lessonId": "l05",
    "lessonNumber": "Lección 5",
    "kanji": "二日",
    "reading": "ふつか",
    "romaji": "futsuka",
    "spanish": "día 2, dos días",
    "segments": [
      {
        "text": "二",
        "furigana": "ふつ"
      },
      {
        "text": "日",
        "furigana": "か"
      }
    ],
    "targetKanji": [
      "二",
      "日"
    ]
  },
  {
    "id": "w-l05-226",
    "lessonId": "l05",
    "lessonNumber": "Lección 5",
    "kanji": "三日",
    "reading": "みっか",
    "romaji": "mikka",
    "spanish": "día 3, tres días",
    "segments": [
      {
        "text": "三",
        "furigana": "みっ"
      },
      {
        "text": "日",
        "furigana": "か"
      }
    ],
    "targetKanji": [
      "三",
      "日"
    ]
  },
  {
    "id": "w-l05-227",
    "lessonId": "l05",
    "lessonNumber": "Lección 5",
    "kanji": "四日",
    "reading": "よっか",
    "romaji": "yokka",
    "spanish": "día 4, cuatro días",
    "segments": [
      {
        "text": "四",
        "furigana": "よっ"
      },
      {
        "text": "日",
        "furigana": "か"
      }
    ],
    "targetKanji": [
      "四",
      "日"
    ]
  },
  {
    "id": "w-l05-228",
    "lessonId": "l05",
    "lessonNumber": "Lección 5",
    "kanji": "五日",
    "reading": "いつか",
    "romaji": "itsuka",
    "spanish": "día 5, cinco días",
    "segments": [
      {
        "text": "五",
        "furigana": "いつ"
      },
      {
        "text": "日",
        "furigana": "か"
      }
    ],
    "targetKanji": [
      "五",
      "日"
    ]
  },
  {
    "id": "w-l05-229",
    "lessonId": "l05",
    "lessonNumber": "Lección 5",
    "kanji": "六日",
    "reading": "むいか",
    "romaji": "muika",
    "spanish": "día 6, seis días",
    "segments": [
      {
        "text": "六",
        "furigana": "むい"
      },
      {
        "text": "日",
        "furigana": "か"
      }
    ],
    "targetKanji": [
      "六",
      "日"
    ]
  },
  {
    "id": "w-l05-230",
    "lessonId": "l05",
    "lessonNumber": "Lección 5",
    "kanji": "七日",
    "reading": "なのか",
    "romaji": "nanoka",
    "spanish": "día 7, siete días",
    "segments": [
      {
        "text": "七",
        "furigana": "なの"
      },
      {
        "text": "日",
        "furigana": "か"
      }
    ],
    "targetKanji": [
      "七",
      "日"
    ]
  },
  {
    "id": "w-l05-231",
    "lessonId": "l05",
    "lessonNumber": "Lección 5",
    "kanji": "八日",
    "reading": "ようか",
    "romaji": "youka",
    "spanish": "día 8, ocho días",
    "segments": [
      {
        "text": "八",
        "furigana": "よう"
      },
      {
        "text": "日",
        "furigana": "か"
      }
    ],
    "targetKanji": [
      "八",
      "日"
    ]
  },
  {
    "id": "w-l05-232",
    "lessonId": "l05",
    "lessonNumber": "Lección 5",
    "kanji": "九日",
    "reading": "ここのか",
    "romaji": "kokonoka",
    "spanish": "día 9, nueve días",
    "segments": [
      {
        "text": "九",
        "furigana": "ここの"
      },
      {
        "text": "日",
        "furigana": "か"
      }
    ],
    "targetKanji": [
      "九",
      "日"
    ]
  },
  {
    "id": "w-l05-233",
    "lessonId": "l05",
    "lessonNumber": "Lección 5",
    "kanji": "十日",
    "reading": "とおか",
    "romaji": "tooka",
    "spanish": "día 10, diez días",
    "segments": [
      {
        "text": "十",
        "furigana": "とお"
      },
      {
        "text": "日",
        "furigana": "か"
      }
    ],
    "targetKanji": [
      "十",
      "日"
    ]
  },
  {
    "id": "w-l05-234",
    "lessonId": "l05",
    "lessonNumber": "Lección 5",
    "kanji": "十四日",
    "reading": "じゅうよっか",
    "romaji": "juuyokka",
    "spanish": "día 14, catorce días",
    "segments": [
      {
        "text": "十",
        "furigana": "じゅう"
      },
      {
        "text": "四",
        "furigana": "よっ"
      },
      {
        "text": "日",
        "furigana": "か"
      }
    ],
    "targetKanji": [
      "十",
      "四",
      "日"
    ]
  },
  {
    "id": "w-l05-235",
    "lessonId": "l05",
    "lessonNumber": "Lección 5",
    "kanji": "二十日",
    "reading": "はつか",
    "romaji": "hatsuka",
    "spanish": "día 20, veinte días",
    "segments": [
      {
        "text": "二",
        "furigana": "はつ"
      },
      {
        "text": "十"
      },
      {
        "text": "日",
        "furigana": "か"
      }
    ],
    "targetKanji": [
      "二",
      "十",
      "日"
    ]
  },
  {
    "id": "w-l05-236",
    "lessonId": "l05",
    "lessonNumber": "Lección 5",
    "kanji": "二十四日",
    "reading": "にじゅうよっか",
    "romaji": "nijuuyokka",
    "spanish": "día 24, veinticuatro días",
    "segments": [
      {
        "text": "二",
        "furigana": "に"
      },
      {
        "text": "十",
        "furigana": "じゅう"
      },
      {
        "text": "四",
        "furigana": "よっ"
      },
      {
        "text": "日",
        "furigana": "か"
      }
    ],
    "targetKanji": [
      "二",
      "十",
      "四",
      "日"
    ]
  },
  {
    "id": "w-l05-237",
    "lessonId": "l05",
    "lessonNumber": "Lección 5",
    "kanji": "～日",
    "reading": "～にち",
    "romaji": "~nichi",
    "spanish": "el día ~ del mes",
    "segments": [
      {
        "text": "～"
      },
      {
        "text": "日",
        "furigana": "にち"
      }
    ],
    "targetKanji": [
      "日"
    ]
  },
  {
    "id": "w-l05-238",
    "lessonId": "l05",
    "lessonNumber": "Lección 5",
    "kanji": "何日",
    "reading": "なんにち",
    "romaji": "nannichi",
    "spanish": "qué día / cuántos días",
    "segments": [
      {
        "text": "何",
        "furigana": "なん"
      },
      {
        "text": "日",
        "furigana": "にち"
      }
    ],
    "targetKanji": [
      "何",
      "日"
    ]
  },
  {
    "id": "w-l05-239",
    "lessonId": "l05",
    "lessonNumber": "Lección 5",
    "kanji": "いつ",
    "reading": "いつ",
    "romaji": "itsu",
    "spanish": "cuándo",
    "segments": [
      {
        "text": "いつ"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l05-240",
    "lessonId": "l05",
    "lessonNumber": "Lección 5",
    "kanji": "誕生日",
    "reading": "たんじょうび",
    "romaji": "tanjoubi",
    "spanish": "cumpleaños",
    "segments": [
      {
        "text": "誕",
        "furigana": "たん"
      },
      {
        "text": "生",
        "furigana": "じょう"
      },
      {
        "text": "日",
        "furigana": "び"
      }
    ],
    "targetKanji": [
      "誕",
      "生",
      "日"
    ]
  },
  {
    "id": "w-l05-241",
    "lessonId": "l05",
    "lessonNumber": "Lección 5",
    "kanji": "普通",
    "reading": "ふつう",
    "romaji": "futsuu",
    "spanish": "tren local / ordinario",
    "segments": [
      {
        "text": "普",
        "furigana": "ふ"
      },
      {
        "text": "通",
        "furigana": "つう"
      }
    ],
    "targetKanji": [
      "普",
      "通"
    ]
  },
  {
    "id": "w-l05-242",
    "lessonId": "l05",
    "lessonNumber": "Lección 5",
    "kanji": "急行",
    "reading": "きゅうこう",
    "romaji": "kyuukou",
    "spanish": "tren expreso",
    "segments": [
      {
        "text": "急",
        "furigana": "きゅう"
      },
      {
        "text": "行",
        "furigana": "こう"
      }
    ],
    "targetKanji": [
      "急",
      "行"
    ]
  },
  {
    "id": "w-l05-243",
    "lessonId": "l05",
    "lessonNumber": "Lección 5",
    "kanji": "特急",
    "reading": "とっきゅう",
    "romaji": "tokkyuu",
    "spanish": "tren expreso limitado",
    "segments": [
      {
        "text": "特",
        "furigana": "とっ"
      },
      {
        "text": "急",
        "furigana": "きゅう"
      }
    ],
    "targetKanji": [
      "特",
      "急"
    ]
  },
  {
    "id": "w-l05-244",
    "lessonId": "l05",
    "lessonNumber": "Lección 5",
    "kanji": "次の",
    "reading": "つぎの",
    "romaji": "tsugi no",
    "spanish": "el siguiente",
    "segments": [
      {
        "text": "次",
        "furigana": "つぎ"
      },
      {
        "text": "の"
      }
    ],
    "targetKanji": [
      "次"
    ]
  },
  {
    "id": "w-l06-245",
    "lessonId": "l06",
    "lessonNumber": "Lección 6",
    "kanji": "食べます",
    "reading": "たべます",
    "romaji": "tabemasu",
    "spanish": "comer",
    "segments": [
      {
        "text": "食",
        "furigana": "た"
      },
      {
        "text": "べます"
      }
    ],
    "targetKanji": [
      "食"
    ]
  },
  {
    "id": "w-l06-246",
    "lessonId": "l06",
    "lessonNumber": "Lección 6",
    "kanji": "飲みます",
    "reading": "のみます",
    "romaji": "nomimasu",
    "spanish": "beber, tomar",
    "segments": [
      {
        "text": "飲",
        "furigana": "の"
      },
      {
        "text": "みます"
      }
    ],
    "targetKanji": [
      "飲"
    ]
  },
  {
    "id": "w-l06-247",
    "lessonId": "l06",
    "lessonNumber": "Lección 6",
    "kanji": "吸います",
    "reading": "すいます",
    "romaji": "suimasu",
    "spanish": "fumar (tabaco), aspirar",
    "segments": [
      {
        "text": "吸",
        "furigana": "す"
      },
      {
        "text": "います"
      }
    ],
    "targetKanji": [
      "吸"
    ]
  },
  {
    "id": "w-l06-248",
    "lessonId": "l06",
    "lessonNumber": "Lección 6",
    "kanji": "見ます",
    "reading": "みます",
    "romaji": "mimasu",
    "spanish": "ver, mirar",
    "segments": [
      {
        "text": "見",
        "furigana": "み"
      },
      {
        "text": "ます"
      }
    ],
    "targetKanji": [
      "見"
    ]
  },
  {
    "id": "w-l06-249",
    "lessonId": "l06",
    "lessonNumber": "Lección 6",
    "kanji": "聞きます",
    "reading": "ききます",
    "romaji": "kikimasu",
    "spanish": "oír, escuchar",
    "segments": [
      {
        "text": "聞",
        "furigana": "き"
      },
      {
        "text": "きます"
      }
    ],
    "targetKanji": [
      "聞"
    ]
  },
  {
    "id": "w-l06-250",
    "lessonId": "l06",
    "lessonNumber": "Lección 6",
    "kanji": "読みます",
    "reading": "よみます",
    "romaji": "yomimasu",
    "spanish": "leer",
    "segments": [
      {
        "text": "読",
        "furigana": "よ"
      },
      {
        "text": "みます"
      }
    ],
    "targetKanji": [
      "読"
    ]
  },
  {
    "id": "w-l06-251",
    "lessonId": "l06",
    "lessonNumber": "Lección 6",
    "kanji": "書きます",
    "reading": "かきます",
    "romaji": "kakimasu",
    "spanish": "escribir, pintar",
    "segments": [
      {
        "text": "書",
        "furigana": "か"
      },
      {
        "text": "きます"
      }
    ],
    "targetKanji": [
      "書"
    ]
  },
  {
    "id": "w-l06-252",
    "lessonId": "l06",
    "lessonNumber": "Lección 6",
    "kanji": "買います",
    "reading": "かいます",
    "romaji": "kaimasu",
    "spanish": "comprar",
    "segments": [
      {
        "text": "買",
        "furigana": "か"
      },
      {
        "text": "います"
      }
    ],
    "targetKanji": [
      "買"
    ]
  },
  {
    "id": "w-l06-253",
    "lessonId": "l06",
    "lessonNumber": "Lección 6",
    "kanji": "撮ります",
    "reading": "とります",
    "romaji": "torimasu",
    "spanish": "tomar (fotografías)",
    "segments": [
      {
        "text": "撮",
        "furigana": "と"
      },
      {
        "text": "ります"
      }
    ],
    "targetKanji": [
      "撮"
    ]
  },
  {
    "id": "w-l06-254",
    "lessonId": "l06",
    "lessonNumber": "Lección 6",
    "kanji": "します",
    "reading": "します",
    "romaji": "shimasu",
    "spanish": "hacer",
    "segments": [
      {
        "text": "します"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l06-255",
    "lessonId": "l06",
    "lessonNumber": "Lección 6",
    "kanji": "会います",
    "reading": "あいます",
    "romaji": "aimasu",
    "spanish": "encontrarse con, ver a",
    "segments": [
      {
        "text": "会",
        "furigana": "あ"
      },
      {
        "text": "います"
      }
    ],
    "targetKanji": [
      "会"
    ]
  },
  {
    "id": "w-l06-256",
    "lessonId": "l06",
    "lessonNumber": "Lección 6",
    "kanji": "ご飯",
    "reading": "ごはん",
    "romaji": "gohan",
    "spanish": "arroz cocido, comida",
    "segments": [
      {
        "text": "ご"
      },
      {
        "text": "飯",
        "furigana": "はん"
      }
    ],
    "targetKanji": [
      "飯"
    ]
  },
  {
    "id": "w-l06-257",
    "lessonId": "l06",
    "lessonNumber": "Lección 6",
    "kanji": "朝ご飯",
    "reading": "あさごはん",
    "romaji": "asagohan",
    "spanish": "desayuno",
    "segments": [
      {
        "text": "朝",
        "furigana": "あさ"
      },
      {
        "text": "ご"
      },
      {
        "text": "飯",
        "furigana": "はん"
      }
    ],
    "targetKanji": [
      "朝",
      "飯"
    ]
  },
  {
    "id": "w-l06-258",
    "lessonId": "l06",
    "lessonNumber": "Lección 6",
    "kanji": "昼ご飯",
    "reading": "ひるごはん",
    "romaji": "hirugohan",
    "spanish": "almuerzo",
    "segments": [
      {
        "text": "昼",
        "furigana": "ひる"
      },
      {
        "text": "ご"
      },
      {
        "text": "飯",
        "furigana": "はん"
      }
    ],
    "targetKanji": [
      "昼",
      "飯"
    ]
  },
  {
    "id": "w-l06-259",
    "lessonId": "l06",
    "lessonNumber": "Lección 6",
    "kanji": "晩ご飯",
    "reading": "ばんごはん",
    "romaji": "bangohan",
    "spanish": "cena",
    "segments": [
      {
        "text": "晩",
        "furigana": "ばん"
      },
      {
        "text": "ご"
      },
      {
        "text": "飯",
        "furigana": "はん"
      }
    ],
    "targetKanji": [
      "晩",
      "飯"
    ]
  },
  {
    "id": "w-l06-260",
    "lessonId": "l06",
    "lessonNumber": "Lección 6",
    "kanji": "パン",
    "reading": "パン",
    "romaji": "pan",
    "spanish": "pan",
    "segments": [
      {
        "text": "パン"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l06-261",
    "lessonId": "l06",
    "lessonNumber": "Lección 6",
    "kanji": "卵",
    "reading": "たまご",
    "romaji": "tamago",
    "spanish": "huevo",
    "segments": [
      {
        "text": "卵",
        "furigana": "たまご"
      }
    ],
    "targetKanji": [
      "卵"
    ]
  },
  {
    "id": "w-l06-262",
    "lessonId": "l06",
    "lessonNumber": "Lección 6",
    "kanji": "肉",
    "reading": "にく",
    "romaji": "niku",
    "spanish": "carne",
    "segments": [
      {
        "text": "肉",
        "furigana": "にく"
      }
    ],
    "targetKanji": [
      "肉"
    ]
  },
  {
    "id": "w-l06-263",
    "lessonId": "l06",
    "lessonNumber": "Lección 6",
    "kanji": "魚",
    "reading": "さかな",
    "romaji": "sakana",
    "spanish": "pescado",
    "segments": [
      {
        "text": "魚",
        "furigana": "さかな"
      }
    ],
    "targetKanji": [
      "魚"
    ]
  },
  {
    "id": "w-l06-264",
    "lessonId": "l06",
    "lessonNumber": "Lección 6",
    "kanji": "野菜",
    "reading": "やさい",
    "romaji": "yasai",
    "spanish": "verdura, hortaliza",
    "segments": [
      {
        "text": "野",
        "furigana": "や"
      },
      {
        "text": "菜",
        "furigana": "さい"
      }
    ],
    "targetKanji": [
      "野",
      "菜"
    ]
  },
  {
    "id": "w-l06-265",
    "lessonId": "l06",
    "lessonNumber": "Lección 6",
    "kanji": "果物",
    "reading": "くだもの",
    "romaji": "kudamono",
    "spanish": "fruta",
    "segments": [
      {
        "text": "果",
        "furigana": "くだ"
      },
      {
        "text": "物",
        "furigana": "もの"
      }
    ],
    "targetKanji": [
      "果",
      "物"
    ]
  },
  {
    "id": "w-l06-266",
    "lessonId": "l06",
    "lessonNumber": "Lección 6",
    "kanji": "水",
    "reading": "みず",
    "romaji": "mizu",
    "spanish": "agua",
    "segments": [
      {
        "text": "水",
        "furigana": "みず"
      }
    ],
    "targetKanji": [
      "水"
    ]
  },
  {
    "id": "w-l06-267",
    "lessonId": "l06",
    "lessonNumber": "Lección 6",
    "kanji": "お茶",
    "reading": "おちゃ",
    "romaji": "ocha",
    "spanish": "té, té verde",
    "segments": [
      {
        "text": "お"
      },
      {
        "text": "茶",
        "furigana": "ちゃ"
      }
    ],
    "targetKanji": [
      "茶"
    ]
  },
  {
    "id": "w-l06-268",
    "lessonId": "l06",
    "lessonNumber": "Lección 6",
    "kanji": "紅茶",
    "reading": "こうちゃ",
    "romaji": "koucha",
    "spanish": "té negro",
    "segments": [
      {
        "text": "紅",
        "furigana": "こう"
      },
      {
        "text": "茶",
        "furigana": "ちゃ"
      }
    ],
    "targetKanji": [
      "紅",
      "茶"
    ]
  },
  {
    "id": "w-l06-269",
    "lessonId": "l06",
    "lessonNumber": "Lección 6",
    "kanji": "牛乳",
    "reading": "ぎゅうにゅう",
    "romaji": "gyuunyuu",
    "spanish": "leche de vaca",
    "segments": [
      {
        "text": "牛",
        "furigana": "ぎゅう"
      },
      {
        "text": "乳",
        "furigana": "にゅう"
      }
    ],
    "targetKanji": [
      "牛",
      "乳"
    ]
  },
  {
    "id": "w-l06-270",
    "lessonId": "l06",
    "lessonNumber": "Lección 6",
    "kanji": "ミルク",
    "reading": "ミルク",
    "romaji": "miruku",
    "spanish": "leche",
    "segments": [
      {
        "text": "ミルク"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l06-271",
    "lessonId": "l06",
    "lessonNumber": "Lección 6",
    "kanji": "ジュース",
    "reading": "ジュース",
    "romaji": "juusu",
    "spanish": "jugo, zumo",
    "segments": [
      {
        "text": "ジュース"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l06-272",
    "lessonId": "l06",
    "lessonNumber": "Lección 6",
    "kanji": "ビール",
    "reading": "ビール",
    "romaji": "biiru",
    "spanish": "cerveza",
    "segments": [
      {
        "text": "ビール"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l06-273",
    "lessonId": "l06",
    "lessonNumber": "Lección 6",
    "kanji": "お酒",
    "reading": "おさけ",
    "romaji": "osake",
    "spanish": "alcohol, sake japonés",
    "segments": [
      {
        "text": "お"
      },
      {
        "text": "酒",
        "furigana": "さけ"
      }
    ],
    "targetKanji": [
      "酒"
    ]
  },
  {
    "id": "w-l06-274",
    "lessonId": "l06",
    "lessonNumber": "Lección 6",
    "kanji": "ビデオ",
    "reading": "ビデオ",
    "romaji": "bideo",
    "spanish": "video",
    "segments": [
      {
        "text": "ビデオ"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l06-275",
    "lessonId": "l06",
    "lessonNumber": "Lección 6",
    "kanji": "映画",
    "reading": "えいが",
    "romaji": "eiga",
    "spanish": "película, cine",
    "segments": [
      {
        "text": "映",
        "furigana": "えい"
      },
      {
        "text": "画",
        "furigana": "が"
      }
    ],
    "targetKanji": [
      "映",
      "画"
    ]
  },
  {
    "id": "w-l06-276",
    "lessonId": "l06",
    "lessonNumber": "Lección 6",
    "kanji": "手紙",
    "reading": "てがみ",
    "romaji": "tegami",
    "spanish": "carta",
    "segments": [
      {
        "text": "手",
        "furigana": "て"
      },
      {
        "text": "紙",
        "furigana": "がみ"
      }
    ],
    "targetKanji": [
      "手",
      "紙"
    ]
  },
  {
    "id": "w-l06-277",
    "lessonId": "l06",
    "lessonNumber": "Lección 6",
    "kanji": "レポート",
    "reading": "レポート",
    "romaji": "repooto",
    "spanish": "informe, reporte",
    "segments": [
      {
        "text": "レポート"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l06-278",
    "lessonId": "l06",
    "lessonNumber": "Lección 6",
    "kanji": "写真",
    "reading": "しゃしん",
    "romaji": "shashin",
    "spanish": "fotografía",
    "segments": [
      {
        "text": "写",
        "furigana": "しゃ"
      },
      {
        "text": "真",
        "furigana": "しん"
      }
    ],
    "targetKanji": [
      "写",
      "真"
    ]
  },
  {
    "id": "w-l06-279",
    "lessonId": "l06",
    "lessonNumber": "Lección 6",
    "kanji": "店",
    "reading": "みせ",
    "romaji": "mise",
    "spanish": "tienda, negocio",
    "segments": [
      {
        "text": "店",
        "furigana": "みせ"
      }
    ],
    "targetKanji": [
      "店"
    ]
  },
  {
    "id": "w-l06-280",
    "lessonId": "l06",
    "lessonNumber": "Lección 6",
    "kanji": "レストラン",
    "reading": "レストラン",
    "romaji": "resutoran",
    "spanish": "restaurante",
    "segments": [
      {
        "text": "レストラン"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l06-281",
    "lessonId": "l06",
    "lessonNumber": "Lección 6",
    "kanji": "庭",
    "reading": "にわ",
    "romaji": "niwa",
    "spanish": "jardín",
    "segments": [
      {
        "text": "庭",
        "furigana": "にわ"
      }
    ],
    "targetKanji": [
      "庭"
    ]
  },
  {
    "id": "w-l06-282",
    "lessonId": "l06",
    "lessonNumber": "Lección 6",
    "kanji": "宿題",
    "reading": "しゅくだい",
    "romaji": "shukudai",
    "spanish": "deberes, tarea escolar",
    "segments": [
      {
        "text": "宿",
        "furigana": "しゅく"
      },
      {
        "text": "題",
        "furigana": "だい"
      }
    ],
    "targetKanji": [
      "宿",
      "題"
    ]
  },
  {
    "id": "w-l06-283",
    "lessonId": "l06",
    "lessonNumber": "Lección 6",
    "kanji": "テニス",
    "reading": "テニス",
    "romaji": "tenisu",
    "spanish": "tenis",
    "segments": [
      {
        "text": "テニス"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l06-284",
    "lessonId": "l06",
    "lessonNumber": "Lección 6",
    "kanji": "サッカー",
    "reading": "サッカー",
    "romaji": "sakkaa",
    "spanish": "fútbol",
    "segments": [
      {
        "text": "サッカー"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l06-285",
    "lessonId": "l06",
    "lessonNumber": "Lección 6",
    "kanji": "お花見",
    "reading": "おはなみ",
    "romaji": "ohanami",
    "spanish": "observación de flores de cerezo",
    "segments": [
      {
        "text": "お"
      },
      {
        "text": "花",
        "furigana": "はな"
      },
      {
        "text": "見",
        "furigana": "み"
      }
    ],
    "targetKanji": [
      "花",
      "見"
    ]
  },
  {
    "id": "w-l06-286",
    "lessonId": "l06",
    "lessonNumber": "Lección 6",
    "kanji": "いっしょに",
    "reading": "いっしょに",
    "romaji": "isshoni",
    "spanish": "juntos",
    "segments": [
      {
        "text": "いっしょに"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l06-287",
    "lessonId": "l06",
    "lessonNumber": "Lección 6",
    "kanji": "ちょっと",
    "reading": "ちょっと",
    "romaji": "chotto",
    "spanish": "un poco",
    "segments": [
      {
        "text": "ちょっと"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l06-288",
    "lessonId": "l06",
    "lessonNumber": "Lección 6",
    "kanji": "いつも",
    "reading": "いつも",
    "romaji": "itsumo",
    "spanish": "siempre",
    "segments": [
      {
        "text": "いつも"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l06-289",
    "lessonId": "l06",
    "lessonNumber": "Lección 6",
    "kanji": "時々",
    "reading": "ときどき",
    "romaji": "tokidoki",
    "spanish": "a veces",
    "segments": [
      {
        "text": "時",
        "furigana": "とき"
      },
      {
        "text": "々",
        "furigana": "どき"
      }
    ],
    "targetKanji": [
      "時"
    ]
  },
  {
    "id": "w-l06-290",
    "lessonId": "l06",
    "lessonNumber": "Lección 6",
    "kanji": "それから",
    "reading": "それから",
    "romaji": "sorekara",
    "spanish": "después, y luego",
    "segments": [
      {
        "text": "それから"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l07-291",
    "lessonId": "l07",
    "lessonNumber": "Lección 7",
    "kanji": "切ります",
    "reading": "きります",
    "romaji": "kirimasu",
    "spanish": "cortar",
    "segments": [
      {
        "text": "切",
        "furigana": "き"
      },
      {
        "text": "ります"
      }
    ],
    "targetKanji": [
      "切"
    ]
  },
  {
    "id": "w-l07-292",
    "lessonId": "l07",
    "lessonNumber": "Lección 7",
    "kanji": "送ります",
    "reading": "おくります",
    "romaji": "okurimasu",
    "spanish": "enviar",
    "segments": [
      {
        "text": "送",
        "furigana": "おく"
      },
      {
        "text": "ります"
      }
    ],
    "targetKanji": [
      "送"
    ]
  },
  {
    "id": "w-l07-293",
    "lessonId": "l07",
    "lessonNumber": "Lección 7",
    "kanji": "あげます",
    "reading": "あげます",
    "romaji": "agemasu",
    "spanish": "dar, regalar",
    "segments": [
      {
        "text": "あげます"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l07-294",
    "lessonId": "l07",
    "lessonNumber": "Lección 7",
    "kanji": "もらいます",
    "reading": "もらいます",
    "romaji": "moraimasu",
    "spanish": "recibir",
    "segments": [
      {
        "text": "もらいます"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l07-295",
    "lessonId": "l07",
    "lessonNumber": "Lección 7",
    "kanji": "貸します",
    "reading": "かします",
    "romaji": "kashimasu",
    "spanish": "prestar",
    "segments": [
      {
        "text": "貸",
        "furigana": "か"
      },
      {
        "text": "します"
      }
    ],
    "targetKanji": [
      "貸"
    ]
  },
  {
    "id": "w-l07-296",
    "lessonId": "l07",
    "lessonNumber": "Lección 7",
    "kanji": "借ります",
    "reading": "かります",
    "romaji": "karimasu",
    "spanish": "pedir prestado",
    "segments": [
      {
        "text": "借",
        "furigana": "か"
      },
      {
        "text": "ります"
      }
    ],
    "targetKanji": [
      "借"
    ]
  },
  {
    "id": "w-l07-297",
    "lessonId": "l07",
    "lessonNumber": "Lección 7",
    "kanji": "教えます",
    "reading": "おしえます",
    "romaji": "oshiemasu",
    "spanish": "enseñar",
    "segments": [
      {
        "text": "教",
        "furigana": "おし"
      },
      {
        "text": "えます"
      }
    ],
    "targetKanji": [
      "教"
    ]
  },
  {
    "id": "w-l07-298",
    "lessonId": "l07",
    "lessonNumber": "Lección 7",
    "kanji": "習います",
    "reading": "ならいます",
    "romaji": "naraimasu",
    "spanish": "aprender",
    "segments": [
      {
        "text": "習",
        "furigana": "なら"
      },
      {
        "text": "います"
      }
    ],
    "targetKanji": [
      "習"
    ]
  },
  {
    "id": "w-l07-299",
    "lessonId": "l07",
    "lessonNumber": "Lección 7",
    "kanji": "かけます",
    "reading": "かけます",
    "romaji": "kakemasu",
    "spanish": "hacer (una llamada telefónica)",
    "segments": [
      {
        "text": "かけます"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l07-300",
    "lessonId": "l07",
    "lessonNumber": "Lección 7",
    "kanji": "手",
    "reading": "て",
    "romaji": "te",
    "spanish": "mano",
    "segments": [
      {
        "text": "手",
        "furigana": "て"
      }
    ],
    "targetKanji": [
      "手"
    ]
  },
  {
    "id": "w-l07-301",
    "lessonId": "l07",
    "lessonNumber": "Lección 7",
    "kanji": "はし",
    "reading": "はし",
    "romaji": "hashi",
    "spanish": "palillos chinos",
    "segments": [
      {
        "text": "はし"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l07-302",
    "lessonId": "l07",
    "lessonNumber": "Lección 7",
    "kanji": "スプーン",
    "reading": "スプーン",
    "romaji": "supuun",
    "spanish": "cuchara",
    "segments": [
      {
        "text": "スプーン"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l07-303",
    "lessonId": "l07",
    "lessonNumber": "Lección 7",
    "kanji": "ナイフ",
    "reading": "ナイフ",
    "romaji": "naifu",
    "spanish": "cuchillo",
    "segments": [
      {
        "text": "ナイフ"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l07-304",
    "lessonId": "l07",
    "lessonNumber": "Lección 7",
    "kanji": "フォーク",
    "reading": "フォーク",
    "romaji": "fooku",
    "spanish": "tenedor",
    "segments": [
      {
        "text": "フォーク"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l07-305",
    "lessonId": "l07",
    "lessonNumber": "Lección 7",
    "kanji": "はさみ",
    "reading": "はさみ",
    "romaji": "hasami",
    "spanish": "tijeras",
    "segments": [
      {
        "text": "はさみ"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l07-306",
    "lessonId": "l07",
    "lessonNumber": "Lección 7",
    "kanji": "パソコン",
    "reading": "パソコン",
    "romaji": "pasokon",
    "spanish": "computadora personal",
    "segments": [
      {
        "text": "パソコン"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l07-307",
    "lessonId": "l07",
    "lessonNumber": "Lección 7",
    "kanji": "ケータイ",
    "reading": "ケータイ",
    "romaji": "keetai",
    "spanish": "teléfono móvil",
    "segments": [
      {
        "text": "ケータイ"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l07-308",
    "lessonId": "l07",
    "lessonNumber": "Lección 7",
    "kanji": "メール",
    "reading": "メール",
    "romaji": "meeru",
    "spanish": "correo electrónico",
    "segments": [
      {
        "text": "メール"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l07-309",
    "lessonId": "l07",
    "lessonNumber": "Lección 7",
    "kanji": "年賀状",
    "reading": "ねんがじょう",
    "romaji": "nengajou",
    "spanish": "tarjeta postal de año nuevo",
    "segments": [
      {
        "text": "年",
        "furigana": "ねん"
      },
      {
        "text": "賀",
        "furigana": "が"
      },
      {
        "text": "状",
        "furigana": "じょう"
      }
    ],
    "targetKanji": [
      "年",
      "賀",
      "状"
    ]
  },
  {
    "id": "w-l07-310",
    "lessonId": "l07",
    "lessonNumber": "Lección 7",
    "kanji": "消しゴム",
    "reading": "けしゴム",
    "romaji": "keshigomu",
    "spanish": "goma de borrar",
    "segments": [
      {
        "text": "消",
        "furigana": "け"
      },
      {
        "text": "しゴム"
      }
    ],
    "targetKanji": [
      "消"
    ]
  },
  {
    "id": "w-l07-311",
    "lessonId": "l07",
    "lessonNumber": "Lección 7",
    "kanji": "紙",
    "reading": "かみ",
    "romaji": "kami",
    "spanish": "papel",
    "segments": [
      {
        "text": "紙",
        "furigana": "かみ"
      }
    ],
    "targetKanji": [
      "紙"
    ]
  },
  {
    "id": "w-l07-312",
    "lessonId": "l07",
    "lessonNumber": "Lección 7",
    "kanji": "花",
    "reading": "はな",
    "romaji": "hana",
    "spanish": "flor",
    "segments": [
      {
        "text": "花",
        "furigana": "はな"
      }
    ],
    "targetKanji": [
      "花"
    ]
  },
  {
    "id": "w-l07-313",
    "lessonId": "l07",
    "lessonNumber": "Lección 7",
    "kanji": "シャツ",
    "reading": "シャツ",
    "romaji": "shatsu",
    "spanish": "camisa",
    "segments": [
      {
        "text": "シャツ"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l07-314",
    "lessonId": "l07",
    "lessonNumber": "Lección 7",
    "kanji": "プレゼント",
    "reading": "プレゼント",
    "romaji": "purezento",
    "spanish": "regalo",
    "segments": [
      {
        "text": "プレゼント"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l07-315",
    "lessonId": "l07",
    "lessonNumber": "Lección 7",
    "kanji": "荷物",
    "reading": "にもつ",
    "romaji": "nimotsu",
    "spanish": "equipaje, paquete",
    "segments": [
      {
        "text": "荷",
        "furigana": "に"
      },
      {
        "text": "物",
        "furigana": "もつ"
      }
    ],
    "targetKanji": [
      "荷",
      "物"
    ]
  },
  {
    "id": "w-l07-316",
    "lessonId": "l07",
    "lessonNumber": "Lección 7",
    "kanji": "お金",
    "reading": "おかね",
    "romaji": "okane",
    "spanish": "dinero",
    "segments": [
      {
        "text": "お"
      },
      {
        "text": "金",
        "furigana": "かね"
      }
    ],
    "targetKanji": [
      "金"
    ]
  },
  {
    "id": "w-l07-317",
    "lessonId": "l07",
    "lessonNumber": "Lección 7",
    "kanji": "切符",
    "reading": "きっぷ",
    "romaji": "kippu",
    "spanish": "billete, boleto",
    "segments": [
      {
        "text": "切",
        "furigana": "きっ"
      },
      {
        "text": "符",
        "furigana": "ぷ"
      }
    ],
    "targetKanji": [
      "切",
      "符"
    ]
  },
  {
    "id": "w-l07-318",
    "lessonId": "l07",
    "lessonNumber": "Lección 7",
    "kanji": "クリスマス",
    "reading": "クリスマス",
    "romaji": "kurisumasu",
    "spanish": "Navidad",
    "segments": [
      {
        "text": "クリスマス"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l07-319",
    "lessonId": "l07",
    "lessonNumber": "Lección 7",
    "kanji": "父",
    "reading": "ちち",
    "romaji": "chichi",
    "spanish": "mi padre",
    "segments": [
      {
        "text": "父",
        "furigana": "ちち"
      }
    ],
    "targetKanji": [
      "父"
    ]
  },
  {
    "id": "w-l07-320",
    "lessonId": "l07",
    "lessonNumber": "Lección 7",
    "kanji": "母",
    "reading": "はは",
    "romaji": "haha",
    "spanish": "mi madre",
    "segments": [
      {
        "text": "母",
        "furigana": "はは"
      }
    ],
    "targetKanji": [
      "母"
    ]
  },
  {
    "id": "w-l07-321",
    "lessonId": "l07",
    "lessonNumber": "Lección 7",
    "kanji": "お父さん",
    "reading": "おとうさん",
    "romaji": "otousan",
    "spanish": "padre (de otra persona)",
    "segments": [
      {
        "text": "お"
      },
      {
        "text": "父",
        "furigana": "とう"
      },
      {
        "text": "さん"
      }
    ],
    "targetKanji": [
      "父"
    ]
  },
  {
    "id": "w-l07-322",
    "lessonId": "l07",
    "lessonNumber": "Lección 7",
    "kanji": "お母さん",
    "reading": "おかあさん",
    "romaji": "okaasan",
    "spanish": "madre (de otra persona)",
    "segments": [
      {
        "text": "お"
      },
      {
        "text": "母",
        "furigana": "かあ"
      },
      {
        "text": "さん"
      }
    ],
    "targetKanji": [
      "母"
    ]
  },
  {
    "id": "w-l07-323",
    "lessonId": "l07",
    "lessonNumber": "Lección 7",
    "kanji": "もう",
    "reading": "もう",
    "romaji": "mou",
    "spanish": "ya",
    "segments": [
      {
        "text": "もう"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l07-324",
    "lessonId": "l07",
    "lessonNumber": "Lección 7",
    "kanji": "まだ",
    "reading": "まだ",
    "romaji": "mada",
    "spanish": "todavía, aún",
    "segments": [
      {
        "text": "まだ"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l07-325",
    "lessonId": "l07",
    "lessonNumber": "Lección 7",
    "kanji": "これから",
    "reading": "これから",
    "romaji": "korekara",
    "spanish": "a partir de ahora",
    "segments": [
      {
        "text": "これから"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l07-326",
    "lessonId": "l07",
    "lessonNumber": "Lección 7",
    "kanji": "すてきですね",
    "reading": "すてきですね",
    "romaji": "suteki desu ne",
    "spanish": "¡qué bonito / maravilloso!",
    "segments": [
      {
        "text": "すてきですね"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l07-327",
    "lessonId": "l07",
    "lessonNumber": "Lección 7",
    "kanji": "失礼します",
    "reading": "しつれいします",
    "romaji": "shitsureishimasu",
    "spanish": "con permiso (al entrar/salir)",
    "segments": [
      {
        "text": "失",
        "furigana": "しつ"
      },
      {
        "text": "礼",
        "furigana": "れい"
      },
      {
        "text": "します"
      }
    ],
    "targetKanji": [
      "失",
      "礼"
    ]
  },
  {
    "id": "w-l07-328",
    "lessonId": "l07",
    "lessonNumber": "Lección 7",
    "kanji": "いただきます",
    "reading": "いただきます",
    "romaji": "itadakimasu",
    "spanish": "buen provecho (al comer)",
    "segments": [
      {
        "text": "いただきます"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l07-329",
    "lessonId": "l07",
    "lessonNumber": "Lección 7",
    "kanji": "ごちそうさまでした",
    "reading": "ごちそうさまでした",
    "romaji": "gochisousamadeshita",
    "spanish": "gracias por la comida",
    "segments": [
      {
        "text": "ごちそうさまでした"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l08-330",
    "lessonId": "l08",
    "lessonNumber": "Lección 8",
    "kanji": "ハンサム［な］",
    "reading": "ハンサム［な］",
    "romaji": "hansamu [na]",
    "spanish": "guapo",
    "segments": [
      {
        "text": "ハンサム［な］"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l08-331",
    "lessonId": "l08",
    "lessonNumber": "Lección 8",
    "kanji": "きれい［な］",
    "reading": "きれい［な］",
    "romaji": "kirei [na]",
    "spanish": "hermoso, limpio",
    "segments": [
      {
        "text": "きれい［な］"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l08-332",
    "lessonId": "l08",
    "lessonNumber": "Lección 8",
    "kanji": "静か［な］",
    "reading": "しずか［な］",
    "romaji": "shizuka [na]",
    "spanish": "tranquilo, silencioso",
    "segments": [
      {
        "text": "静",
        "furigana": "しず"
      },
      {
        "text": "か［な］"
      }
    ],
    "targetKanji": [
      "静"
    ]
  },
  {
    "id": "w-l08-333",
    "lessonId": "l08",
    "lessonNumber": "Lección 8",
    "kanji": "にぎやか［な］",
    "reading": "にぎやか［な］",
    "romaji": "nigiyaka [na]",
    "spanish": "concurrido, animado",
    "segments": [
      {
        "text": "にぎやか［な］"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l08-334",
    "lessonId": "l08",
    "lessonNumber": "Lección 8",
    "kanji": "有名［な］",
    "reading": "ゆうめい［な］",
    "romaji": "yuumei [na]",
    "spanish": "famoso",
    "segments": [
      {
        "text": "有",
        "furigana": "ゆう"
      },
      {
        "text": "名",
        "furigana": "めい"
      },
      {
        "text": "［な］"
      }
    ],
    "targetKanji": [
      "有",
      "名"
    ]
  },
  {
    "id": "w-l08-335",
    "lessonId": "l08",
    "lessonNumber": "Lección 8",
    "kanji": "親切［な］",
    "reading": "しんせつ［な］",
    "romaji": "shinsetsu [na]",
    "spanish": "amable, servicial",
    "segments": [
      {
        "text": "親",
        "furigana": "しん"
      },
      {
        "text": "切",
        "furigana": "せつ"
      },
      {
        "text": "［な］"
      }
    ],
    "targetKanji": [
      "親",
      "切"
    ]
  },
  {
    "id": "w-l08-336",
    "lessonId": "l08",
    "lessonNumber": "Lección 8",
    "kanji": "元気［な］",
    "reading": "げんき［な］",
    "romaji": "genki [na]",
    "spanish": "sano, animado, lleno de energía",
    "segments": [
      {
        "text": "元",
        "furigana": "げん"
      },
      {
        "text": "気",
        "furigana": "き"
      },
      {
        "text": "［な］"
      }
    ],
    "targetKanji": [
      "元",
      "気"
    ]
  },
  {
    "id": "w-l08-337",
    "lessonId": "l08",
    "lessonNumber": "Lección 8",
    "kanji": "暇［な］",
    "reading": "ひま［な］",
    "romaji": "hima [na]",
    "spanish": "libre (tiempo libre)",
    "segments": [
      {
        "text": "暇",
        "furigana": "ひま"
      },
      {
        "text": "［な］"
      }
    ],
    "targetKanji": [
      "暇"
    ]
  },
  {
    "id": "w-l08-338",
    "lessonId": "l08",
    "lessonNumber": "Lección 8",
    "kanji": "便利［な］",
    "reading": "べんり［な］",
    "romaji": "benri [na]",
    "spanish": "cómodo, práctico",
    "segments": [
      {
        "text": "便",
        "furigana": "べん"
      },
      {
        "text": "利",
        "furigana": "り"
      },
      {
        "text": "［な］"
      }
    ],
    "targetKanji": [
      "便",
      "利"
    ]
  },
  {
    "id": "w-l08-339",
    "lessonId": "l08",
    "lessonNumber": "Lección 8",
    "kanji": "すてき［な］",
    "reading": "すてき［な］",
    "romaji": "suteki [na]",
    "spanish": "estupendo, maravilloso",
    "segments": [
      {
        "text": "すてき［な］"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l08-340",
    "lessonId": "l08",
    "lessonNumber": "Lección 8",
    "kanji": "大きい",
    "reading": "おおきい",
    "romaji": "ookii",
    "spanish": "grande",
    "segments": [
      {
        "text": "大",
        "furigana": "おお"
      },
      {
        "text": "きい"
      }
    ],
    "targetKanji": [
      "大"
    ]
  },
  {
    "id": "w-l08-341",
    "lessonId": "l08",
    "lessonNumber": "Lección 8",
    "kanji": "小さい",
    "reading": "ちいさい",
    "romaji": "chiisai",
    "spanish": "pequeño",
    "segments": [
      {
        "text": "小",
        "furigana": "ちい"
      },
      {
        "text": "さい"
      }
    ],
    "targetKanji": [
      "小"
    ]
  },
  {
    "id": "w-l08-342",
    "lessonId": "l08",
    "lessonNumber": "Lección 8",
    "kanji": "新しい",
    "reading": "あたらしい",
    "romaji": "atarashii",
    "spanish": "nuevo",
    "segments": [
      {
        "text": "新",
        "furigana": "あたら"
      },
      {
        "text": "しい"
      }
    ],
    "targetKanji": [
      "新"
    ]
  },
  {
    "id": "w-l08-343",
    "lessonId": "l08",
    "lessonNumber": "Lección 8",
    "kanji": "古い",
    "reading": "ふるい",
    "romaji": "furui",
    "spanish": "viejo, antiguo",
    "segments": [
      {
        "text": "古",
        "furigana": "ふる"
      },
      {
        "text": "い"
      }
    ],
    "targetKanji": [
      "古"
    ]
  },
  {
    "id": "w-l08-344",
    "lessonId": "l08",
    "lessonNumber": "Lección 8",
    "kanji": "いい（よい）",
    "reading": "いい（よい）",
    "romaji": "ii (yoi)",
    "spanish": "bueno",
    "segments": [
      {
        "text": "いい（よい）"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l08-345",
    "lessonId": "l08",
    "lessonNumber": "Lección 8",
    "kanji": "悪い",
    "reading": "わるい",
    "romaji": "warui",
    "spanish": "malo",
    "segments": [
      {
        "text": "悪",
        "furigana": "わる"
      },
      {
        "text": "い"
      }
    ],
    "targetKanji": [
      "悪"
    ]
  },
  {
    "id": "w-l08-346",
    "lessonId": "l08",
    "lessonNumber": "Lección 8",
    "kanji": "暑い",
    "reading": "あつい",
    "romaji": "atsui",
    "spanish": "caluroso (clima)",
    "segments": [
      {
        "text": "暑",
        "furigana": "あつ"
      },
      {
        "text": "い"
      }
    ],
    "targetKanji": [
      "暑"
    ]
  },
  {
    "id": "w-l08-347",
    "lessonId": "l08",
    "lessonNumber": "Lección 8",
    "kanji": "熱い",
    "reading": "あつい",
    "romaji": "atsui",
    "spanish": "caliente (tacto, bebida)",
    "segments": [
      {
        "text": "熱",
        "furigana": "あつ"
      },
      {
        "text": "い"
      }
    ],
    "targetKanji": [
      "熱"
    ]
  },
  {
    "id": "w-l08-348",
    "lessonId": "l08",
    "lessonNumber": "Lección 8",
    "kanji": "寒い",
    "reading": "さむい",
    "romaji": "samui",
    "spanish": "frío (clima)",
    "segments": [
      {
        "text": "寒",
        "furigana": "さむ"
      },
      {
        "text": "い"
      }
    ],
    "targetKanji": [
      "寒"
    ]
  },
  {
    "id": "w-l08-349",
    "lessonId": "l08",
    "lessonNumber": "Lección 8",
    "kanji": "冷たい",
    "reading": "つめたい",
    "romaji": "tsumetai",
    "spanish": "frío (tacto, bebida)",
    "segments": [
      {
        "text": "冷",
        "furigana": "つめ"
      },
      {
        "text": "たい"
      }
    ],
    "targetKanji": [
      "冷"
    ]
  },
  {
    "id": "w-l08-350",
    "lessonId": "l08",
    "lessonNumber": "Lección 8",
    "kanji": "難しい",
    "reading": "むずかしい",
    "romaji": "muzukashii",
    "spanish": "difícil",
    "segments": [
      {
        "text": "難",
        "furigana": "むずか"
      },
      {
        "text": "しい"
      }
    ],
    "targetKanji": [
      "難"
    ]
  },
  {
    "id": "w-l08-351",
    "lessonId": "l08",
    "lessonNumber": "Lección 8",
    "kanji": "易しい",
    "reading": "やさしい",
    "romaji": "yasashii",
    "spanish": "fácil, sencillo",
    "segments": [
      {
        "text": "易",
        "furigana": "やさ"
      },
      {
        "text": "しい"
      }
    ],
    "targetKanji": [
      "易"
    ]
  },
  {
    "id": "w-l08-352",
    "lessonId": "l08",
    "lessonNumber": "Lección 8",
    "kanji": "高い",
    "reading": "たかい",
    "romaji": "takai",
    "spanish": "alto, caro",
    "segments": [
      {
        "text": "高",
        "furigana": "たか"
      },
      {
        "text": "い"
      }
    ],
    "targetKanji": [
      "高"
    ]
  },
  {
    "id": "w-l08-353",
    "lessonId": "l08",
    "lessonNumber": "Lección 8",
    "kanji": "安い",
    "reading": "やすい",
    "romaji": "yasui",
    "spanish": "barato",
    "segments": [
      {
        "text": "安",
        "furigana": "やす"
      },
      {
        "text": "い"
      }
    ],
    "targetKanji": [
      "安"
    ]
  },
  {
    "id": "w-l08-354",
    "lessonId": "l08",
    "lessonNumber": "Lección 8",
    "kanji": "低い",
    "reading": "ひくい",
    "romaji": "hikui",
    "spanish": "bajo (altura)",
    "segments": [
      {
        "text": "低",
        "furigana": "ひく"
      },
      {
        "text": "い"
      }
    ],
    "targetKanji": [
      "低"
    ]
  },
  {
    "id": "w-l08-355",
    "lessonId": "l08",
    "lessonNumber": "Lección 8",
    "kanji": "おもしろい",
    "reading": "おもしろい",
    "romaji": "omoshiroi",
    "spanish": "interesante, divertido",
    "segments": [
      {
        "text": "おもしろい"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l08-356",
    "lessonId": "l08",
    "lessonNumber": "Lección 8",
    "kanji": "おいしい",
    "reading": "おいしい",
    "romaji": "oishii",
    "spanish": "delicioso, rico",
    "segments": [
      {
        "text": "おいしい"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l08-357",
    "lessonId": "l08",
    "lessonNumber": "Lección 8",
    "kanji": "忙しい",
    "reading": "いそがしい",
    "romaji": "isogashii",
    "spanish": "ocupado",
    "segments": [
      {
        "text": "忙",
        "furigana": "いそが"
      },
      {
        "text": "しい"
      }
    ],
    "targetKanji": [
      "忙"
    ]
  },
  {
    "id": "w-l08-358",
    "lessonId": "l08",
    "lessonNumber": "Lección 8",
    "kanji": "楽しい",
    "reading": "たのしい",
    "romaji": "tanoshii",
    "spanish": "divertido, alegre",
    "segments": [
      {
        "text": "楽",
        "furigana": "たの"
      },
      {
        "text": "しい"
      }
    ],
    "targetKanji": [
      "楽"
    ]
  },
  {
    "id": "w-l08-359",
    "lessonId": "l08",
    "lessonNumber": "Lección 8",
    "kanji": "白い",
    "reading": "しろい",
    "romaji": "shiroi",
    "spanish": "blanco",
    "segments": [
      {
        "text": "白",
        "furigana": "しろ"
      },
      {
        "text": "い"
      }
    ],
    "targetKanji": [
      "白"
    ]
  },
  {
    "id": "w-l08-360",
    "lessonId": "l08",
    "lessonNumber": "Lección 8",
    "kanji": "黒い",
    "reading": "くろい",
    "romaji": "kuroi",
    "spanish": "negro",
    "segments": [
      {
        "text": "黒",
        "furigana": "くろ"
      },
      {
        "text": "い"
      }
    ],
    "targetKanji": [
      "黒"
    ]
  },
  {
    "id": "w-l08-361",
    "lessonId": "l08",
    "lessonNumber": "Lección 8",
    "kanji": "赤い",
    "reading": "あかい",
    "romaji": "akai",
    "spanish": "rojo",
    "segments": [
      {
        "text": "赤",
        "furigana": "あか"
      },
      {
        "text": "い"
      }
    ],
    "targetKanji": [
      "赤"
    ]
  },
  {
    "id": "w-l08-362",
    "lessonId": "l08",
    "lessonNumber": "Lección 8",
    "kanji": "青い",
    "reading": "あおい",
    "romaji": "aoi",
    "spanish": "azul",
    "segments": [
      {
        "text": "青",
        "furigana": "あお"
      },
      {
        "text": "い"
      }
    ],
    "targetKanji": [
      "青"
    ]
  },
  {
    "id": "w-l08-363",
    "lessonId": "l08",
    "lessonNumber": "Lección 8",
    "kanji": "桜",
    "reading": "さくら",
    "romaji": "sakura",
    "spanish": "cerezo, flor de cerezo",
    "segments": [
      {
        "text": "桜",
        "furigana": "さくら"
      }
    ],
    "targetKanji": [
      "桜"
    ]
  },
  {
    "id": "w-l08-364",
    "lessonId": "l08",
    "lessonNumber": "Lección 8",
    "kanji": "山",
    "reading": "やま",
    "romaji": "yama",
    "spanish": "montaña",
    "segments": [
      {
        "text": "山",
        "furigana": "やま"
      }
    ],
    "targetKanji": [
      "山"
    ]
  },
  {
    "id": "w-l08-365",
    "lessonId": "l08",
    "lessonNumber": "Lección 8",
    "kanji": "町",
    "reading": "まち",
    "romaji": "machi",
    "spanish": "ciudad, pueblo",
    "segments": [
      {
        "text": "町",
        "furigana": "まち"
      }
    ],
    "targetKanji": [
      "町"
    ]
  },
  {
    "id": "w-l08-366",
    "lessonId": "l08",
    "lessonNumber": "Lección 8",
    "kanji": "食べ物",
    "reading": "たべもの",
    "romaji": "tabemono",
    "spanish": "comida",
    "segments": [
      {
        "text": "食",
        "furigana": "た"
      },
      {
        "text": "べ"
      },
      {
        "text": "物",
        "furigana": "もの"
      }
    ],
    "targetKanji": [
      "食",
      "物"
    ]
  },
  {
    "id": "w-l08-367",
    "lessonId": "l08",
    "lessonNumber": "Lección 8",
    "kanji": "所",
    "reading": "ところ",
    "romaji": "tokoro",
    "spanish": "lugar",
    "segments": [
      {
        "text": "所",
        "furigana": "ところ"
      }
    ],
    "targetKanji": [
      "所"
    ]
  },
  {
    "id": "w-l08-368",
    "lessonId": "l08",
    "lessonNumber": "Lección 8",
    "kanji": "寮",
    "reading": "りょう",
    "romaji": "ryou",
    "spanish": "residencia estudiantil",
    "segments": [
      {
        "text": "寮",
        "furigana": "りょう"
      }
    ],
    "targetKanji": [
      "寮"
    ]
  },
  {
    "id": "w-l08-369",
    "lessonId": "l08",
    "lessonNumber": "Lección 8",
    "kanji": "生活",
    "reading": "せいかつ",
    "romaji": "seikatsu",
    "spanish": "vida, cotidianidad",
    "segments": [
      {
        "text": "生",
        "furigana": "せい"
      },
      {
        "text": "活",
        "furigana": "かつ"
      }
    ],
    "targetKanji": [
      "生",
      "活"
    ]
  },
  {
    "id": "w-l08-370",
    "lessonId": "l08",
    "lessonNumber": "Lección 8",
    "kanji": "お仕事",
    "reading": "おしごと",
    "romaji": "oshigoto",
    "spanish": "trabajo (cortés)",
    "segments": [
      {
        "text": "お"
      },
      {
        "text": "仕",
        "furigana": "し"
      },
      {
        "text": "事",
        "furigana": "ごと"
      }
    ],
    "targetKanji": [
      "仕",
      "事"
    ]
  },
  {
    "id": "w-l08-371",
    "lessonId": "l08",
    "lessonNumber": "Lección 8",
    "kanji": "どう",
    "reading": "どう",
    "romaji": "dou",
    "spanish": "cómo, qué tal",
    "segments": [
      {
        "text": "どう"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l08-372",
    "lessonId": "l08",
    "lessonNumber": "Lección 8",
    "kanji": "どんな～",
    "reading": "どんな～",
    "romaji": "donna~",
    "spanish": "qué clase de ~, qué tipo de ~",
    "segments": [
      {
        "text": "どんな～"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l08-373",
    "lessonId": "l08",
    "lessonNumber": "Lección 8",
    "kanji": "どれ",
    "reading": "どれ",
    "romaji": "dore",
    "spanish": "cuál (de entre tres o más)",
    "segments": [
      {
        "text": "どれ"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l08-374",
    "lessonId": "l08",
    "lessonNumber": "Lección 8",
    "kanji": "とても",
    "reading": "とても",
    "romaji": "totemo",
    "spanish": "muy, mucho",
    "segments": [
      {
        "text": "とても"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l08-375",
    "lessonId": "l08",
    "lessonNumber": "Lección 8",
    "kanji": "あまり",
    "reading": "あまり",
    "romaji": "amari",
    "spanish": "no mucho (con negativo)",
    "segments": [
      {
        "text": "あまり"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l08-376",
    "lessonId": "l08",
    "lessonNumber": "Lección 8",
    "kanji": "そして",
    "reading": "そして",
    "romaji": "soshite",
    "spanish": "y, además",
    "segments": [
      {
        "text": "そして"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l09-377",
    "lessonId": "l09",
    "lessonNumber": "Lección 9",
    "kanji": "わかります",
    "reading": "わかります",
    "romaji": "wakarimasu",
    "spanish": "entender, comprender",
    "segments": [
      {
        "text": "わかります"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l09-378",
    "lessonId": "l09",
    "lessonNumber": "Lección 9",
    "kanji": "あります",
    "reading": "あります",
    "romaji": "arimasu",
    "spanish": "haber, tener (cosas inanimadas)",
    "segments": [
      {
        "text": "あります"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l09-379",
    "lessonId": "l09",
    "lessonNumber": "Lección 9",
    "kanji": "好き［な］",
    "reading": "すき［な］",
    "romaji": "suki [na]",
    "spanish": "gustar, preferido",
    "segments": [
      {
        "text": "好",
        "furigana": "す"
      },
      {
        "text": "き［な］"
      }
    ],
    "targetKanji": [
      "好"
    ]
  },
  {
    "id": "w-l09-380",
    "lessonId": "l09",
    "lessonNumber": "Lección 9",
    "kanji": "嫌い［な］",
    "reading": "きらい［な］",
    "romaji": "kirai [na]",
    "spanish": "desagradar, que no gusta",
    "segments": [
      {
        "text": "嫌",
        "furigana": "きら"
      },
      {
        "text": "い［な］"
      }
    ],
    "targetKanji": [
      "嫌"
    ]
  },
  {
    "id": "w-l09-381",
    "lessonId": "l09",
    "lessonNumber": "Lección 9",
    "kanji": "上手［な］",
    "reading": "じょうず［な］",
    "romaji": "jouzu [na]",
    "spanish": "habilidoso, bueno en algo",
    "segments": [
      {
        "text": "上",
        "furigana": "じょう"
      },
      {
        "text": "手",
        "furigana": "ず"
      },
      {
        "text": "［な］"
      }
    ],
    "targetKanji": [
      "上",
      "手"
    ]
  },
  {
    "id": "w-l09-382",
    "lessonId": "l09",
    "lessonNumber": "Lección 9",
    "kanji": "下手［な］",
    "reading": "へた［な］",
    "romaji": "heta [na]",
    "spanish": "torpe, malo en algo",
    "segments": [
      {
        "text": "下",
        "furigana": "へ"
      },
      {
        "text": "手",
        "furigana": "た"
      },
      {
        "text": "［な］"
      }
    ],
    "targetKanji": [
      "下",
      "手"
    ]
  },
  {
    "id": "w-l09-383",
    "lessonId": "l09",
    "lessonNumber": "Lección 9",
    "kanji": "飲み物",
    "reading": "のみもの",
    "romaji": "nomimono",
    "spanish": "bebida",
    "segments": [
      {
        "text": "飲",
        "furigana": "の"
      },
      {
        "text": "み"
      },
      {
        "text": "物",
        "furigana": "もの"
      }
    ],
    "targetKanji": [
      "飲",
      "物"
    ]
  },
  {
    "id": "w-l09-384",
    "lessonId": "l09",
    "lessonNumber": "Lección 9",
    "kanji": "料理",
    "reading": "りょうり",
    "romaji": "ryouri",
    "spanish": "cocina, plato cocinado",
    "segments": [
      {
        "text": "料",
        "furigana": "りょう"
      },
      {
        "text": "理",
        "furigana": "り"
      }
    ],
    "targetKanji": [
      "料",
      "理"
    ]
  },
  {
    "id": "w-l09-385",
    "lessonId": "l09",
    "lessonNumber": "Lección 9",
    "kanji": "スポーツ",
    "reading": "スポーツ",
    "romaji": "supootsu",
    "spanish": "deportes",
    "segments": [
      {
        "text": "スポーツ"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l09-386",
    "lessonId": "l09",
    "lessonNumber": "Lección 9",
    "kanji": "野球",
    "reading": "やきゅう",
    "romaji": "yakyuu",
    "spanish": "béisbol",
    "segments": [
      {
        "text": "野",
        "furigana": "や"
      },
      {
        "text": "球",
        "furigana": "きゅう"
      }
    ],
    "targetKanji": [
      "野",
      "球"
    ]
  },
  {
    "id": "w-l09-387",
    "lessonId": "l09",
    "lessonNumber": "Lección 9",
    "kanji": "ダンス",
    "reading": "ダンス",
    "romaji": "dansu",
    "spanish": "baile, danza",
    "segments": [
      {
        "text": "ダンス"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l09-388",
    "lessonId": "l09",
    "lessonNumber": "Lección 9",
    "kanji": "旅行",
    "reading": "りょこう",
    "romaji": "ryokou",
    "spanish": "viaje",
    "segments": [
      {
        "text": "旅",
        "furigana": "りょ"
      },
      {
        "text": "行",
        "furigana": "こう"
      }
    ],
    "targetKanji": [
      "旅",
      "行"
    ]
  },
  {
    "id": "w-l09-389",
    "lessonId": "l09",
    "lessonNumber": "Lección 9",
    "kanji": "音楽",
    "reading": "おんがく",
    "romaji": "ongaku",
    "spanish": "música",
    "segments": [
      {
        "text": "音",
        "furigana": "おん"
      },
      {
        "text": "楽",
        "furigana": "がく"
      }
    ],
    "targetKanji": [
      "音",
      "楽"
    ]
  },
  {
    "id": "w-l09-390",
    "lessonId": "l09",
    "lessonNumber": "Lección 9",
    "kanji": "歌",
    "reading": "うた",
    "romaji": "uta",
    "spanish": "canción",
    "segments": [
      {
        "text": "歌",
        "furigana": "うた"
      }
    ],
    "targetKanji": [
      "歌"
    ]
  },
  {
    "id": "w-l09-391",
    "lessonId": "l09",
    "lessonNumber": "Lección 9",
    "kanji": "クラシック",
    "reading": "クラシック",
    "romaji": "kurashikku",
    "spanish": "música clásica",
    "segments": [
      {
        "text": "クラシック"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l09-392",
    "lessonId": "l09",
    "lessonNumber": "Lección 9",
    "kanji": "ジャズ",
    "reading": "ジャズ",
    "romaji": "jazu",
    "spanish": "jazz",
    "segments": [
      {
        "text": "ジャズ"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l09-393",
    "lessonId": "l09",
    "lessonNumber": "Lección 9",
    "kanji": "コンサート",
    "reading": "コンサート",
    "romaji": "konsaato",
    "spanish": "concierto",
    "segments": [
      {
        "text": "コンサート"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l09-394",
    "lessonId": "l09",
    "lessonNumber": "Lección 9",
    "kanji": "カラオケ",
    "reading": "カラオケ",
    "romaji": "karaoke",
    "spanish": "karaoke",
    "segments": [
      {
        "text": "カラオケ"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l09-395",
    "lessonId": "l09",
    "lessonNumber": "Lección 9",
    "kanji": "歌舞伎",
    "reading": "かぶき",
    "romaji": "kabuki",
    "spanish": "teatro tradicional Kabuki",
    "segments": [
      {
        "text": "歌",
        "furigana": "か"
      },
      {
        "text": "舞",
        "furigana": "ぶ"
      },
      {
        "text": "伎",
        "furigana": "き"
      }
    ],
    "targetKanji": [
      "歌",
      "舞",
      "伎"
    ]
  },
  {
    "id": "w-l09-396",
    "lessonId": "l09",
    "lessonNumber": "Lección 9",
    "kanji": "絵",
    "reading": "え",
    "romaji": "e",
    "spanish": "dibujo, pintura",
    "segments": [
      {
        "text": "絵",
        "furigana": "え"
      }
    ],
    "targetKanji": [
      "絵"
    ]
  },
  {
    "id": "w-l09-397",
    "lessonId": "l09",
    "lessonNumber": "Lección 9",
    "kanji": "字",
    "reading": "じ",
    "romaji": "ji",
    "spanish": "letra, caracter",
    "segments": [
      {
        "text": "字",
        "furigana": "じ"
      }
    ],
    "targetKanji": [
      "字"
    ]
  },
  {
    "id": "w-l09-398",
    "lessonId": "l09",
    "lessonNumber": "Lección 9",
    "kanji": "漢字",
    "reading": "かんじ",
    "romaji": "kanji",
    "spanish": "caracteres chinos (kanji)",
    "segments": [
      {
        "text": "漢",
        "furigana": "かん"
      },
      {
        "text": "字",
        "furigana": "じ"
      }
    ],
    "targetKanji": [
      "漢",
      "字"
    ]
  },
  {
    "id": "w-l09-399",
    "lessonId": "l09",
    "lessonNumber": "Lección 9",
    "kanji": "ひらがな",
    "reading": "ひらがな",
    "romaji": "hiragana",
    "spanish": "silabario hiragana",
    "segments": [
      {
        "text": "ひらがな"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l09-400",
    "lessonId": "l09",
    "lessonNumber": "Lección 9",
    "kanji": "かたかな",
    "reading": "かたかな",
    "romaji": "katakana",
    "spanish": "silabario katakana",
    "segments": [
      {
        "text": "かたかな"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l09-401",
    "lessonId": "l09",
    "lessonNumber": "Lección 9",
    "kanji": "ローマ字",
    "reading": "ローマじ",
    "romaji": "roomaji",
    "spanish": "alfabeto latino",
    "segments": [
      {
        "text": "ローマ"
      },
      {
        "text": "字",
        "furigana": "じ"
      }
    ],
    "targetKanji": [
      "字"
    ]
  },
  {
    "id": "w-l09-402",
    "lessonId": "l09",
    "lessonNumber": "Lección 9",
    "kanji": "細かいお金",
    "reading": "こまかいおかね",
    "romaji": "komakai okane",
    "spanish": "dinero suelto, cambio",
    "segments": [
      {
        "text": "細",
        "furigana": "こま"
      },
      {
        "text": "かいお"
      },
      {
        "text": "金",
        "furigana": "かね"
      }
    ],
    "targetKanji": [
      "細",
      "金"
    ]
  },
  {
    "id": "w-l09-403",
    "lessonId": "l09",
    "lessonNumber": "Lección 9",
    "kanji": "チケット",
    "reading": "チケット",
    "romaji": "chiketto",
    "spanish": "boleto, entrada",
    "segments": [
      {
        "text": "チケット"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l09-404",
    "lessonId": "l09",
    "lessonNumber": "Lección 9",
    "kanji": "時間",
    "reading": "じかん",
    "romaji": "jikan",
    "spanish": "tiempo, hora",
    "segments": [
      {
        "text": "時",
        "furigana": "じ"
      },
      {
        "text": "間",
        "furigana": "かん"
      }
    ],
    "targetKanji": [
      "時",
      "間"
    ]
  },
  {
    "id": "w-l09-405",
    "lessonId": "l09",
    "lessonNumber": "Lección 9",
    "kanji": "用事",
    "reading": "ようじ",
    "romaji": "youji",
    "spanish": "asunto, tarea pendiente",
    "segments": [
      {
        "text": "用",
        "furigana": "よう"
      },
      {
        "text": "事",
        "furigana": "じ"
      }
    ],
    "targetKanji": [
      "用",
      "事"
    ]
  },
  {
    "id": "w-l09-406",
    "lessonId": "l09",
    "lessonNumber": "Lección 9",
    "kanji": "約束",
    "reading": "やくそく",
    "romaji": "yakusoku",
    "spanish": "promesa, cita",
    "segments": [
      {
        "text": "約",
        "furigana": "やく"
      },
      {
        "text": "束",
        "furigana": "そく"
      }
    ],
    "targetKanji": [
      "約",
      "束"
    ]
  },
  {
    "id": "w-l09-407",
    "lessonId": "l09",
    "lessonNumber": "Lección 9",
    "kanji": "ご主人",
    "reading": "ごしゅじん",
    "romaji": "goshujin",
    "spanish": "esposo de otra persona",
    "segments": [
      {
        "text": "ご"
      },
      {
        "text": "主",
        "furigana": "しゅ"
      },
      {
        "text": "人",
        "furigana": "じん"
      }
    ],
    "targetKanji": [
      "主",
      "人"
    ]
  },
  {
    "id": "w-l09-408",
    "lessonId": "l09",
    "lessonNumber": "Lección 9",
    "kanji": "夫",
    "reading": "おっと",
    "romaji": "otto",
    "spanish": "mi esposo",
    "segments": [
      {
        "text": "夫",
        "furigana": "おっと"
      }
    ],
    "targetKanji": [
      "夫"
    ]
  },
  {
    "id": "w-l09-409",
    "lessonId": "l09",
    "lessonNumber": "Lección 9",
    "kanji": "主人",
    "reading": "しゅじん",
    "romaji": "shujin",
    "spanish": "mi esposo",
    "segments": [
      {
        "text": "主",
        "furigana": "しゅ"
      },
      {
        "text": "人",
        "furigana": "じん"
      }
    ],
    "targetKanji": [
      "主",
      "人"
    ]
  },
  {
    "id": "w-l09-410",
    "lessonId": "l09",
    "lessonNumber": "Lección 9",
    "kanji": "奥さん",
    "reading": "おくさん",
    "romaji": "okusan",
    "spanish": "esposa de otra persona",
    "segments": [
      {
        "text": "奥",
        "furigana": "おく"
      },
      {
        "text": "さん"
      }
    ],
    "targetKanji": [
      "奥"
    ]
  },
  {
    "id": "w-l09-411",
    "lessonId": "l09",
    "lessonNumber": "Lección 9",
    "kanji": "妻",
    "reading": "つま",
    "romaji": "tsuma",
    "spanish": "mi esposa",
    "segments": [
      {
        "text": "妻",
        "furigana": "つま"
      }
    ],
    "targetKanji": [
      "妻"
    ]
  },
  {
    "id": "w-l09-412",
    "lessonId": "l09",
    "lessonNumber": "Lección 9",
    "kanji": "家内",
    "reading": "かない",
    "romaji": "kanai",
    "spanish": "mi esposa",
    "segments": [
      {
        "text": "家",
        "furigana": "か"
      },
      {
        "text": "内",
        "furigana": "ない"
      }
    ],
    "targetKanji": [
      "家",
      "内"
    ]
  },
  {
    "id": "w-l09-413",
    "lessonId": "l09",
    "lessonNumber": "Lección 9",
    "kanji": "子ども",
    "reading": "こども",
    "romaji": "kodomo",
    "spanish": "niño, hijo",
    "segments": [
      {
        "text": "子",
        "furigana": "こ"
      },
      {
        "text": "ども"
      }
    ],
    "targetKanji": [
      "子"
    ]
  },
  {
    "id": "w-l09-414",
    "lessonId": "l09",
    "lessonNumber": "Lección 9",
    "kanji": "よく",
    "reading": "よく",
    "romaji": "yoku",
    "spanish": "bien, a menudo",
    "segments": [
      {
        "text": "よく"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l09-415",
    "lessonId": "l09",
    "lessonNumber": "Lección 9",
    "kanji": "だいたい",
    "reading": "だいたい",
    "romaji": "daitai",
    "spanish": "más o menos, casi todo",
    "segments": [
      {
        "text": "だいたい"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l09-416",
    "lessonId": "l09",
    "lessonNumber": "Lección 9",
    "kanji": "たくさん",
    "reading": "たくさん",
    "romaji": "takusan",
    "spanish": "mucho, gran cantidad",
    "segments": [
      {
        "text": "たくさん"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l09-417",
    "lessonId": "l09",
    "lessonNumber": "Lección 9",
    "kanji": "少し",
    "reading": "すこし",
    "romaji": "sukoshi",
    "spanish": "un poco",
    "segments": [
      {
        "text": "少",
        "furigana": "すこ"
      },
      {
        "text": "し"
      }
    ],
    "targetKanji": [
      "少"
    ]
  },
  {
    "id": "w-l09-418",
    "lessonId": "l09",
    "lessonNumber": "Lección 9",
    "kanji": "全然",
    "reading": "ぜんぜん",
    "romaji": "zenzen",
    "spanish": "nada (con negativo)",
    "segments": [
      {
        "text": "全",
        "furigana": "ぜん"
      },
      {
        "text": "然",
        "furigana": "ぜん"
      }
    ],
    "targetKanji": [
      "全",
      "然"
    ]
  },
  {
    "id": "w-l09-419",
    "lessonId": "l09",
    "lessonNumber": "Lección 9",
    "kanji": "早く",
    "reading": "はやく",
    "romaji": "hayaku",
    "spanish": "temprano",
    "segments": [
      {
        "text": "早",
        "furigana": "はや"
      },
      {
        "text": "く"
      }
    ],
    "targetKanji": [
      "早"
    ]
  },
  {
    "id": "w-l09-420",
    "lessonId": "l09",
    "lessonNumber": "Lección 9",
    "kanji": "速く",
    "reading": "はやく",
    "romaji": "hayaku",
    "spanish": "rápido",
    "segments": [
      {
        "text": "速",
        "furigana": "はや"
      },
      {
        "text": "く"
      }
    ],
    "targetKanji": [
      "速"
    ]
  },
  {
    "id": "w-l09-421",
    "lessonId": "l09",
    "lessonNumber": "Lección 9",
    "kanji": "どうして",
    "reading": "どうして",
    "romaji": "doushite",
    "spanish": "por qué",
    "segments": [
      {
        "text": "どうして"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l10-422",
    "lessonId": "l10",
    "lessonNumber": "Lección 10",
    "kanji": "います",
    "reading": "います",
    "romaji": "imasu",
    "spanish": "estar, haber (seres vivos)",
    "segments": [
      {
        "text": "います"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l10-423",
    "lessonId": "l10",
    "lessonNumber": "Lección 10",
    "kanji": "男の人",
    "reading": "おとこのひと",
    "romaji": "otoko no hito",
    "spanish": "hombre",
    "segments": [
      {
        "text": "男",
        "furigana": "おとこ"
      },
      {
        "text": "の"
      },
      {
        "text": "人",
        "furigana": "ひと"
      }
    ],
    "targetKanji": [
      "男",
      "人"
    ]
  },
  {
    "id": "w-l10-424",
    "lessonId": "l10",
    "lessonNumber": "Lección 10",
    "kanji": "女の人",
    "reading": "おんなのひと",
    "romaji": "onna no hito",
    "spanish": "mujer",
    "segments": [
      {
        "text": "女",
        "furigana": "おんな"
      },
      {
        "text": "の"
      },
      {
        "text": "人",
        "furigana": "ひと"
      }
    ],
    "targetKanji": [
      "女",
      "人"
    ]
  },
  {
    "id": "w-l10-425",
    "lessonId": "l10",
    "lessonNumber": "Lección 10",
    "kanji": "男の子",
    "reading": "おとこのこ",
    "romaji": "otoko no ko",
    "spanish": "niño, muchacho",
    "segments": [
      {
        "text": "男",
        "furigana": "おとこ"
      },
      {
        "text": "の"
      },
      {
        "text": "子",
        "furigana": "こ"
      }
    ],
    "targetKanji": [
      "男",
      "子"
    ]
  },
  {
    "id": "w-l10-426",
    "lessonId": "l10",
    "lessonNumber": "Lección 10",
    "kanji": "女の子",
    "reading": "おんなのこ",
    "romaji": "onna no ko",
    "spanish": "niña, muchacha",
    "segments": [
      {
        "text": "女",
        "furigana": "おんな"
      },
      {
        "text": "の"
      },
      {
        "text": "子",
        "furigana": "こ"
      }
    ],
    "targetKanji": [
      "女",
      "子"
    ]
  },
  {
    "id": "w-l10-427",
    "lessonId": "l10",
    "lessonNumber": "Lección 10",
    "kanji": "犬",
    "reading": "いぬ",
    "romaji": "inu",
    "spanish": "perro",
    "segments": [
      {
        "text": "犬",
        "furigana": "いぬ"
      }
    ],
    "targetKanji": [
      "犬"
    ]
  },
  {
    "id": "w-l10-428",
    "lessonId": "l10",
    "lessonNumber": "Lección 10",
    "kanji": "猫",
    "reading": "ねこ",
    "romaji": "neko",
    "spanish": "gato",
    "segments": [
      {
        "text": "猫",
        "furigana": "ねこ"
      }
    ],
    "targetKanji": [
      "猫"
    ]
  },
  {
    "id": "w-l10-429",
    "lessonId": "l10",
    "lessonNumber": "Lección 10",
    "kanji": "パンダ",
    "reading": "パンダ",
    "romaji": "panda",
    "spanish": "panda",
    "segments": [
      {
        "text": "パンダ"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l10-430",
    "lessonId": "l10",
    "lessonNumber": "Lección 10",
    "kanji": "ぞう",
    "reading": "ぞう",
    "romaji": "zou",
    "spanish": "elefante",
    "segments": [
      {
        "text": "ぞう"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l10-431",
    "lessonId": "l10",
    "lessonNumber": "Lección 10",
    "kanji": "木",
    "reading": "き",
    "romaji": "ki",
    "spanish": "árbol, madera",
    "segments": [
      {
        "text": "木",
        "furigana": "き"
      }
    ],
    "targetKanji": [
      "木"
    ]
  },
  {
    "id": "w-l10-432",
    "lessonId": "l10",
    "lessonNumber": "Lección 10",
    "kanji": "物",
    "reading": "もの",
    "romaji": "mono",
    "spanish": "cosa, objeto",
    "segments": [
      {
        "text": "物",
        "furigana": "もの"
      }
    ],
    "targetKanji": [
      "物"
    ]
  },
  {
    "id": "w-l10-433",
    "lessonId": "l10",
    "lessonNumber": "Lección 10",
    "kanji": "電池",
    "reading": "でんち",
    "romaji": "denchi",
    "spanish": "pila, batería",
    "segments": [
      {
        "text": "電",
        "furigana": "でん"
      },
      {
        "text": "池",
        "furigana": "ち"
      }
    ],
    "targetKanji": [
      "電",
      "池"
    ]
  },
  {
    "id": "w-l10-434",
    "lessonId": "l10",
    "lessonNumber": "Lección 10",
    "kanji": "箱",
    "reading": "はこ",
    "romaji": "hako",
    "spanish": "caja",
    "segments": [
      {
        "text": "箱",
        "furigana": "はこ"
      }
    ],
    "targetKanji": [
      "箱"
    ]
  },
  {
    "id": "w-l10-435",
    "lessonId": "l10",
    "lessonNumber": "Lección 10",
    "kanji": "スイッチ",
    "reading": "スイッチ",
    "romaji": "suicchi",
    "spanish": "interruptor",
    "segments": [
      {
        "text": "スイッチ"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l10-436",
    "lessonId": "l10",
    "lessonNumber": "Lección 10",
    "kanji": "冷蔵庫",
    "reading": "れいぞうこ",
    "romaji": "reizouko",
    "spanish": "refrigerador, nevera",
    "segments": [
      {
        "text": "冷",
        "furigana": "れい"
      },
      {
        "text": "蔵",
        "furigana": "ぞう"
      },
      {
        "text": "庫",
        "furigana": "こ"
      }
    ],
    "targetKanji": [
      "冷",
      "蔵",
      "庫"
    ]
  },
  {
    "id": "w-l10-437",
    "lessonId": "l10",
    "lessonNumber": "Lección 10",
    "kanji": "テーブル",
    "reading": "テーブル",
    "romaji": "teeburu",
    "spanish": "mesa",
    "segments": [
      {
        "text": "テーブル"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l10-438",
    "lessonId": "l10",
    "lessonNumber": "Lección 10",
    "kanji": "ベッド",
    "reading": "ベッド",
    "romaji": "beddo",
    "spanish": "cama",
    "segments": [
      {
        "text": "ベッド"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l10-439",
    "lessonId": "l10",
    "lessonNumber": "Lección 10",
    "kanji": "棚",
    "reading": "たな",
    "romaji": "tana",
    "spanish": "estante, balda",
    "segments": [
      {
        "text": "棚",
        "furigana": "たな"
      }
    ],
    "targetKanji": [
      "棚"
    ]
  },
  {
    "id": "w-l10-440",
    "lessonId": "l10",
    "lessonNumber": "Lección 10",
    "kanji": "ドア",
    "reading": "ドア",
    "romaji": "doa",
    "spanish": "puerta",
    "segments": [
      {
        "text": "ドア"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l10-441",
    "lessonId": "l10",
    "lessonNumber": "Lección 10",
    "kanji": "窓",
    "reading": "まど",
    "romaji": "mado",
    "spanish": "ventana",
    "segments": [
      {
        "text": "窓",
        "furigana": "まど"
      }
    ],
    "targetKanji": [
      "窓"
    ]
  },
  {
    "id": "w-l10-442",
    "lessonId": "l10",
    "lessonNumber": "Lección 10",
    "kanji": "ポスト",
    "reading": "ポスト",
    "romaji": "posuto",
    "spanish": "buzón de correos",
    "segments": [
      {
        "text": "ポスト"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l10-443",
    "lessonId": "l10",
    "lessonNumber": "Lección 10",
    "kanji": "ビル",
    "reading": "ビル",
    "romaji": "biru",
    "spanish": "edificio",
    "segments": [
      {
        "text": "ビル"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l10-444",
    "lessonId": "l10",
    "lessonNumber": "Lección 10",
    "kanji": "公園",
    "reading": "こうえん",
    "romaji": "kouen",
    "spanish": "parque",
    "segments": [
      {
        "text": "公",
        "furigana": "こう"
      },
      {
        "text": "園",
        "furigana": "えん"
      }
    ],
    "targetKanji": [
      "公",
      "園"
    ]
  },
  {
    "id": "w-l10-445",
    "lessonId": "l10",
    "lessonNumber": "Lección 10",
    "kanji": "喫茶店",
    "reading": "きっさてん",
    "romaji": "kissaten",
    "spanish": "cafetería",
    "segments": [
      {
        "text": "喫",
        "furigana": "きっ"
      },
      {
        "text": "茶",
        "furigana": "さ"
      },
      {
        "text": "店",
        "furigana": "てん"
      }
    ],
    "targetKanji": [
      "喫",
      "茶",
      "店"
    ]
  },
  {
    "id": "w-l10-446",
    "lessonId": "l10",
    "lessonNumber": "Lección 10",
    "kanji": "本屋",
    "reading": "ほんや",
    "romaji": "honya",
    "spanish": "librería",
    "segments": [
      {
        "text": "本",
        "furigana": "ほん"
      },
      {
        "text": "屋",
        "furigana": "や"
      }
    ],
    "targetKanji": [
      "本",
      "屋"
    ]
  },
  {
    "id": "w-l10-447",
    "lessonId": "l10",
    "lessonNumber": "Lección 10",
    "kanji": "～屋",
    "reading": "～や",
    "romaji": "~ya",
    "spanish": "tienda de ~",
    "segments": [
      {
        "text": "～"
      },
      {
        "text": "屋",
        "furigana": "や"
      }
    ],
    "targetKanji": [
      "屋"
    ]
  },
  {
    "id": "w-l10-448",
    "lessonId": "l10",
    "lessonNumber": "Lección 10",
    "kanji": "乗り場",
    "reading": "のりば",
    "romaji": "noriba",
    "spanish": "parada, andén",
    "segments": [
      {
        "text": "乗",
        "furigana": "の"
      },
      {
        "text": "り"
      },
      {
        "text": "場",
        "furigana": "ば"
      }
    ],
    "targetKanji": [
      "乗",
      "場"
    ]
  },
  {
    "id": "w-l10-449",
    "lessonId": "l10",
    "lessonNumber": "Lección 10",
    "kanji": "県",
    "reading": "けん",
    "romaji": "ken",
    "spanish": "prefectura",
    "segments": [
      {
        "text": "県",
        "furigana": "けん"
      }
    ],
    "targetKanji": [
      "県"
    ]
  },
  {
    "id": "w-l10-450",
    "lessonId": "l10",
    "lessonNumber": "Lección 10",
    "kanji": "上",
    "reading": "うえ",
    "romaji": "ue",
    "spanish": "arriba, encima",
    "segments": [
      {
        "text": "上",
        "furigana": "うえ"
      }
    ],
    "targetKanji": [
      "上"
    ]
  },
  {
    "id": "w-l10-451",
    "lessonId": "l10",
    "lessonNumber": "Lección 10",
    "kanji": "下",
    "reading": "した",
    "romaji": "shita",
    "spanish": "abajo, debajo",
    "segments": [
      {
        "text": "下",
        "furigana": "した"
      }
    ],
    "targetKanji": [
      "下"
    ]
  },
  {
    "id": "w-l10-452",
    "lessonId": "l10",
    "lessonNumber": "Lección 10",
    "kanji": "前",
    "reading": "まえ",
    "romaji": "mae",
    "spanish": "delante, enfrente",
    "segments": [
      {
        "text": "前",
        "furigana": "まえ"
      }
    ],
    "targetKanji": [
      "前"
    ]
  },
  {
    "id": "w-l10-453",
    "lessonId": "l10",
    "lessonNumber": "Lección 10",
    "kanji": "後ろ",
    "reading": "うしろ",
    "romaji": "ushiro",
    "spanish": "detrás, atrás",
    "segments": [
      {
        "text": "後",
        "furigana": "うし"
      },
      {
        "text": "ろ"
      }
    ],
    "targetKanji": [
      "後"
    ]
  },
  {
    "id": "w-l10-454",
    "lessonId": "l10",
    "lessonNumber": "Lección 10",
    "kanji": "右",
    "reading": "みぎ",
    "romaji": "migi",
    "spanish": "derecha",
    "segments": [
      {
        "text": "右",
        "furigana": "みぎ"
      }
    ],
    "targetKanji": [
      "右"
    ]
  },
  {
    "id": "w-l10-455",
    "lessonId": "l10",
    "lessonNumber": "Lección 10",
    "kanji": "左",
    "reading": "ひだり",
    "romaji": "hidari",
    "spanish": "izquierda",
    "segments": [
      {
        "text": "左",
        "furigana": "ひだり"
      }
    ],
    "targetKanji": [
      "左"
    ]
  },
  {
    "id": "w-l10-456",
    "lessonId": "l10",
    "lessonNumber": "Lección 10",
    "kanji": "中",
    "reading": "なか",
    "romaji": "naka",
    "spanish": "dentro, en medio",
    "segments": [
      {
        "text": "中",
        "furigana": "なか"
      }
    ],
    "targetKanji": [
      "中"
    ]
  },
  {
    "id": "w-l10-457",
    "lessonId": "l10",
    "lessonNumber": "Lección 10",
    "kanji": "外",
    "reading": "そと",
    "romaji": "soto",
    "spanish": "fuera, exterior",
    "segments": [
      {
        "text": "外",
        "furigana": "そと"
      }
    ],
    "targetKanji": [
      "外"
    ]
  },
  {
    "id": "w-l10-458",
    "lessonId": "l10",
    "lessonNumber": "Lección 10",
    "kanji": "隣",
    "reading": "となり",
    "romaji": "tonari",
    "spanish": "al lado, junto a",
    "segments": [
      {
        "text": "隣",
        "furigana": "となり"
      }
    ],
    "targetKanji": [
      "隣"
    ]
  },
  {
    "id": "w-l10-459",
    "lessonId": "l10",
    "lessonNumber": "Lección 10",
    "kanji": "近く",
    "reading": "ちかく",
    "romaji": "chikaku",
    "spanish": "cerca de",
    "segments": [
      {
        "text": "近",
        "furigana": "ちか"
      },
      {
        "text": "く"
      }
    ],
    "targetKanji": [
      "近"
    ]
  },
  {
    "id": "w-l10-460",
    "lessonId": "l10",
    "lessonNumber": "Lección 10",
    "kanji": "間",
    "reading": "あいだ",
    "romaji": "aida",
    "spanish": "entre (dos cosas)",
    "segments": [
      {
        "text": "間",
        "furigana": "あいだ"
      }
    ],
    "targetKanji": [
      "間"
    ]
  },
  {
    "id": "w-l10-461",
    "lessonId": "l10",
    "lessonNumber": "Lección 10",
    "kanji": "いちばん",
    "reading": "いちばん",
    "romaji": "ichiban",
    "spanish": "el más, número uno",
    "segments": [
      {
        "text": "いちばん"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l10-462",
    "lessonId": "l10",
    "lessonNumber": "Lección 10",
    "kanji": "奥",
    "reading": "おく",
    "romaji": "oku",
    "spanish": "fondo, parte más interior",
    "segments": [
      {
        "text": "奥",
        "furigana": "おく"
      }
    ],
    "targetKanji": [
      "奥"
    ]
  },
  {
    "id": "w-l11-463",
    "lessonId": "l11",
    "lessonNumber": "Lección 11",
    "kanji": "かかります",
    "reading": "かかります",
    "romaji": "kakarimasu",
    "spanish": "tardar (tiempo), costar (dinero)",
    "segments": [
      {
        "text": "かかります"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l11-464",
    "lessonId": "l11",
    "lessonNumber": "Lección 11",
    "kanji": "ひとつ",
    "reading": "ひとつ",
    "romaji": "hitotsu",
    "spanish": "una cosa",
    "segments": [
      {
        "text": "ひとつ"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l11-465",
    "lessonId": "l11",
    "lessonNumber": "Lección 11",
    "kanji": "ふたつ",
    "reading": "ふたつ",
    "romaji": "futatsu",
    "spanish": "dos cosas",
    "segments": [
      {
        "text": "ふたつ"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l11-466",
    "lessonId": "l11",
    "lessonNumber": "Lección 11",
    "kanji": "みっつ",
    "reading": "みっつ",
    "romaji": "mittsu",
    "spanish": "tres cosas",
    "segments": [
      {
        "text": "みっつ"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l11-467",
    "lessonId": "l11",
    "lessonNumber": "Lección 11",
    "kanji": "よっつ",
    "reading": "よっつ",
    "romaji": "yottsu",
    "spanish": "cuatro cosas",
    "segments": [
      {
        "text": "よっつ"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l11-468",
    "lessonId": "l11",
    "lessonNumber": "Lección 11",
    "kanji": "いつつ",
    "reading": "いつつ",
    "romaji": "itsutsu",
    "spanish": "cinco cosas",
    "segments": [
      {
        "text": "いつつ"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l11-469",
    "lessonId": "l11",
    "lessonNumber": "Lección 11",
    "kanji": "むっつ",
    "reading": "むっつ",
    "romaji": "muttsu",
    "spanish": "seis cosas",
    "segments": [
      {
        "text": "むっつ"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l11-470",
    "lessonId": "l11",
    "lessonNumber": "Lección 11",
    "kanji": "ななつ",
    "reading": "ななつ",
    "romaji": "nanatsu",
    "spanish": "siete cosas",
    "segments": [
      {
        "text": "ななつ"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l11-471",
    "lessonId": "l11",
    "lessonNumber": "Lección 11",
    "kanji": "やっつ",
    "reading": "やっつ",
    "romaji": "yattsu",
    "spanish": "ocho cosas",
    "segments": [
      {
        "text": "やっつ"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l11-472",
    "lessonId": "l11",
    "lessonNumber": "Lección 11",
    "kanji": "ここのつ",
    "reading": "ここのつ",
    "romaji": "kokonotsu",
    "spanish": "nueve cosas",
    "segments": [
      {
        "text": "ここのつ"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l11-473",
    "lessonId": "l11",
    "lessonNumber": "Lección 11",
    "kanji": "とお",
    "reading": "とお",
    "romaji": "too",
    "spanish": "diez cosas",
    "segments": [
      {
        "text": "とお"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l11-474",
    "lessonId": "l11",
    "lessonNumber": "Lección 11",
    "kanji": "いくつ",
    "reading": "いくつ",
    "romaji": "ikutsu",
    "spanish": "cuántos/as",
    "segments": [
      {
        "text": "いくつ"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l11-475",
    "lessonId": "l11",
    "lessonNumber": "Lección 11",
    "kanji": "ひとり",
    "reading": "ひとり",
    "romaji": "hitori",
    "spanish": "una persona",
    "segments": [
      {
        "text": "ひとり"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l11-476",
    "lessonId": "l11",
    "lessonNumber": "Lección 11",
    "kanji": "ふたり",
    "reading": "ふたり",
    "romaji": "futari",
    "spanish": "dos personas",
    "segments": [
      {
        "text": "ふたり"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l11-477",
    "lessonId": "l11",
    "lessonNumber": "Lección 11",
    "kanji": "～人",
    "reading": "～にん",
    "romaji": "~nin",
    "spanish": "contador de personas",
    "segments": [
      {
        "text": "～"
      },
      {
        "text": "人",
        "furigana": "にん"
      }
    ],
    "targetKanji": [
      "人"
    ]
  },
  {
    "id": "w-l11-478",
    "lessonId": "l11",
    "lessonNumber": "Lección 11",
    "kanji": "～台",
    "reading": "～だい",
    "romaji": "~dai",
    "spanish": "contador de máquinas / vehículos",
    "segments": [
      {
        "text": "～"
      },
      {
        "text": "台",
        "furigana": "だい"
      }
    ],
    "targetKanji": [
      "台"
    ]
  },
  {
    "id": "w-l11-479",
    "lessonId": "l11",
    "lessonNumber": "Lección 11",
    "kanji": "～枚",
    "reading": "～まい",
    "romaji": "~mai",
    "spanish": "contador de objetos planos y delgados",
    "segments": [
      {
        "text": "～"
      },
      {
        "text": "枚",
        "furigana": "まい"
      }
    ],
    "targetKanji": [
      "枚"
    ]
  },
  {
    "id": "w-l11-480",
    "lessonId": "l11",
    "lessonNumber": "Lección 11",
    "kanji": "～回",
    "reading": "～かい",
    "romaji": "~kai",
    "spanish": "contador de veces",
    "segments": [
      {
        "text": "～"
      },
      {
        "text": "回",
        "furigana": "かい"
      }
    ],
    "targetKanji": [
      "回"
    ]
  },
  {
    "id": "w-l11-481",
    "lessonId": "l11",
    "lessonNumber": "Lección 11",
    "kanji": "りんご",
    "reading": "りんご",
    "romaji": "ringo",
    "spanish": "manzana",
    "segments": [
      {
        "text": "りんご"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l11-482",
    "lessonId": "l11",
    "lessonNumber": "Lección 11",
    "kanji": "みかん",
    "reading": "みかん",
    "romaji": "mikan",
    "spanish": "mandarina",
    "segments": [
      {
        "text": "みかん"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l11-483",
    "lessonId": "l11",
    "lessonNumber": "Lección 11",
    "kanji": "サンドイッチ",
    "reading": "サンドイッチ",
    "romaji": "sandoicchi",
    "spanish": "sándwich",
    "segments": [
      {
        "text": "サンドイッチ"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l11-484",
    "lessonId": "l11",
    "lessonNumber": "Lección 11",
    "kanji": "カレー",
    "reading": "カレー",
    "romaji": "karee",
    "spanish": "curry",
    "segments": [
      {
        "text": "カレー"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l11-485",
    "lessonId": "l11",
    "lessonNumber": "Lección 11",
    "kanji": "アイスクリーム",
    "reading": "アイスクリーム",
    "romaji": "aisukuriimu",
    "spanish": "helado",
    "segments": [
      {
        "text": "アイスクリーム"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l11-486",
    "lessonId": "l11",
    "lessonNumber": "Lección 11",
    "kanji": "切手",
    "reading": "きって",
    "romaji": "kitte",
    "spanish": "sello postal",
    "segments": [
      {
        "text": "切",
        "furigana": "きっ"
      },
      {
        "text": "手",
        "furigana": "て"
      }
    ],
    "targetKanji": [
      "切",
      "手"
    ]
  },
  {
    "id": "w-l11-487",
    "lessonId": "l11",
    "lessonNumber": "Lección 11",
    "kanji": "はがき",
    "reading": "はがき",
    "romaji": "hagaki",
    "spanish": "tarjeta postal",
    "segments": [
      {
        "text": "はがき"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l11-488",
    "lessonId": "l11",
    "lessonNumber": "Lección 11",
    "kanji": "封筒",
    "reading": "ふうとう",
    "romaji": "fuutou",
    "spanish": "sobre de carta",
    "segments": [
      {
        "text": "封",
        "furigana": "ふう"
      },
      {
        "text": "筒",
        "furigana": "とう"
      }
    ],
    "targetKanji": [
      "封",
      "筒"
    ]
  },
  {
    "id": "w-l11-489",
    "lessonId": "l11",
    "lessonNumber": "Lección 11",
    "kanji": "速達",
    "reading": "そくたつ",
    "romaji": "sokutatsu",
    "spanish": "correo urgente",
    "segments": [
      {
        "text": "速",
        "furigana": "そく"
      },
      {
        "text": "達",
        "furigana": "たつ"
      }
    ],
    "targetKanji": [
      "速",
      "達"
    ]
  },
  {
    "id": "w-l11-490",
    "lessonId": "l11",
    "lessonNumber": "Lección 11",
    "kanji": "書留",
    "reading": "かきとめ",
    "romaji": "kakitome",
    "spanish": "correo certificado",
    "segments": [
      {
        "text": "書",
        "furigana": "かき"
      },
      {
        "text": "留",
        "furigana": "とめ"
      }
    ],
    "targetKanji": [
      "書",
      "留"
    ]
  },
  {
    "id": "w-l11-491",
    "lessonId": "l11",
    "lessonNumber": "Lección 11",
    "kanji": "エアメール",
    "reading": "エアメール",
    "romaji": "eameeru",
    "spanish": "correo aéreo",
    "segments": [
      {
        "text": "エアメール"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l11-492",
    "lessonId": "l11",
    "lessonNumber": "Lección 11",
    "kanji": "船便",
    "reading": "ふなびん",
    "romaji": "funabin",
    "spanish": "correo marítimo",
    "segments": [
      {
        "text": "船",
        "furigana": "ふな"
      },
      {
        "text": "便",
        "furigana": "びん"
      }
    ],
    "targetKanji": [
      "船",
      "便"
    ]
  },
  {
    "id": "w-l11-493",
    "lessonId": "l11",
    "lessonNumber": "Lección 11",
    "kanji": "両親",
    "reading": "りょうしん",
    "romaji": "ryoushin",
    "spanish": "padres (padre y madre)",
    "segments": [
      {
        "text": "両",
        "furigana": "りょう"
      },
      {
        "text": "親",
        "furigana": "しん"
      }
    ],
    "targetKanji": [
      "両",
      "親"
    ]
  },
  {
    "id": "w-l11-494",
    "lessonId": "l11",
    "lessonNumber": "Lección 11",
    "kanji": "兄弟",
    "reading": "きょうだい",
    "romaji": "kyoudai",
    "spanish": "hermanos",
    "segments": [
      {
        "text": "兄",
        "furigana": "きょう"
      },
      {
        "text": "弟",
        "furigana": "だい"
      }
    ],
    "targetKanji": [
      "兄",
      "弟"
    ]
  },
  {
    "id": "w-l11-495",
    "lessonId": "l11",
    "lessonNumber": "Lección 11",
    "kanji": "兄",
    "reading": "あに",
    "romaji": "ani",
    "spanish": "mi hermano mayor",
    "segments": [
      {
        "text": "兄",
        "furigana": "あに"
      }
    ],
    "targetKanji": [
      "兄"
    ]
  },
  {
    "id": "w-l11-496",
    "lessonId": "l11",
    "lessonNumber": "Lección 11",
    "kanji": "お兄さん",
    "reading": "おにいさん",
    "romaji": "oniisan",
    "spanish": "hermano mayor (de otro)",
    "segments": [
      {
        "text": "お"
      },
      {
        "text": "兄",
        "furigana": "にい"
      },
      {
        "text": "さん"
      }
    ],
    "targetKanji": [
      "兄"
    ]
  },
  {
    "id": "w-l11-497",
    "lessonId": "l11",
    "lessonNumber": "Lección 11",
    "kanji": "姉",
    "reading": "あね",
    "romaji": "ane",
    "spanish": "mi hermana mayor",
    "segments": [
      {
        "text": "姉",
        "furigana": "あね"
      }
    ],
    "targetKanji": [
      "姉"
    ]
  },
  {
    "id": "w-l11-498",
    "lessonId": "l11",
    "lessonNumber": "Lección 11",
    "kanji": "お姉さん",
    "reading": "おねえさん",
    "romaji": "oneesan",
    "spanish": "hermana mayor (de otro)",
    "segments": [
      {
        "text": "お"
      },
      {
        "text": "姉",
        "furigana": "ねえ"
      },
      {
        "text": "さん"
      }
    ],
    "targetKanji": [
      "姉"
    ]
  },
  {
    "id": "w-l11-499",
    "lessonId": "l11",
    "lessonNumber": "Lección 11",
    "kanji": "弟",
    "reading": "おとうと",
    "romaji": "otouto",
    "spanish": "mi hermano menor",
    "segments": [
      {
        "text": "弟",
        "furigana": "おとうと"
      }
    ],
    "targetKanji": [
      "弟"
    ]
  },
  {
    "id": "w-l11-500",
    "lessonId": "l11",
    "lessonNumber": "Lección 11",
    "kanji": "弟さん",
    "reading": "おとうとさん",
    "romaji": "otoutosan",
    "spanish": "hermano menor (de otro)",
    "segments": [
      {
        "text": "弟",
        "furigana": "おとうと"
      },
      {
        "text": "さん"
      }
    ],
    "targetKanji": [
      "弟"
    ]
  },
  {
    "id": "w-l11-501",
    "lessonId": "l11",
    "lessonNumber": "Lección 11",
    "kanji": "妹",
    "reading": "いもうと",
    "romaji": "imouto",
    "spanish": "mi hermana menor",
    "segments": [
      {
        "text": "妹",
        "furigana": "いもうと"
      }
    ],
    "targetKanji": [
      "妹"
    ]
  },
  {
    "id": "w-l11-502",
    "lessonId": "l11",
    "lessonNumber": "Lección 11",
    "kanji": "妹さん",
    "reading": "いもうとさん",
    "romaji": "imoutosan",
    "spanish": "hermana menor (de otro)",
    "segments": [
      {
        "text": "妹",
        "furigana": "いもうと"
      },
      {
        "text": "さん"
      }
    ],
    "targetKanji": [
      "妹"
    ]
  },
  {
    "id": "w-l11-503",
    "lessonId": "l11",
    "lessonNumber": "Lección 11",
    "kanji": "外国",
    "reading": "がいこく",
    "romaji": "gaikoku",
    "spanish": "país extranjero",
    "segments": [
      {
        "text": "外",
        "furigana": "がい"
      },
      {
        "text": "国",
        "furigana": "こく"
      }
    ],
    "targetKanji": [
      "外",
      "国"
    ]
  },
  {
    "id": "w-l11-504",
    "lessonId": "l11",
    "lessonNumber": "Lección 11",
    "kanji": "留学生",
    "reading": "りゅうがくせい",
    "romaji": "ryuugakusei",
    "spanish": "estudiante extranjero de intercambio",
    "segments": [
      {
        "text": "留",
        "furigana": "りゅう"
      },
      {
        "text": "学",
        "furigana": "がく"
      },
      {
        "text": "生",
        "furigana": "せい"
      }
    ],
    "targetKanji": [
      "留",
      "学",
      "生"
    ]
  },
  {
    "id": "w-l11-505",
    "lessonId": "l11",
    "lessonNumber": "Lección 11",
    "kanji": "～時間",
    "reading": "～じかん",
    "romaji": "~jikan",
    "spanish": "~ horas (duración)",
    "segments": [
      {
        "text": "～"
      },
      {
        "text": "時",
        "furigana": "じ"
      },
      {
        "text": "間",
        "furigana": "かん"
      }
    ],
    "targetKanji": [
      "時",
      "間"
    ]
  },
  {
    "id": "w-l11-506",
    "lessonId": "l11",
    "lessonNumber": "Lección 11",
    "kanji": "～週間",
    "reading": "～しゅうかん",
    "romaji": "~shuukan",
    "spanish": "~ semanas",
    "segments": [
      {
        "text": "～"
      },
      {
        "text": "週",
        "furigana": "しゅう"
      },
      {
        "text": "間",
        "furigana": "かん"
      }
    ],
    "targetKanji": [
      "週",
      "間"
    ]
  },
  {
    "id": "w-l11-507",
    "lessonId": "l11",
    "lessonNumber": "Lección 11",
    "kanji": "～か月",
    "reading": "～かげつ",
    "romaji": "~kagetsu",
    "spanish": "~ meses (duración)",
    "segments": [
      {
        "text": "～"
      },
      {
        "text": "か"
      },
      {
        "text": "月",
        "furigana": "げつ"
      }
    ],
    "targetKanji": [
      "月"
    ]
  },
  {
    "id": "w-l11-508",
    "lessonId": "l11",
    "lessonNumber": "Lección 11",
    "kanji": "～年",
    "reading": "～ねん",
    "romaji": "~nen",
    "spanish": "~ años",
    "segments": [
      {
        "text": "～"
      },
      {
        "text": "年",
        "furigana": "ねん"
      }
    ],
    "targetKanji": [
      "年"
    ]
  },
  {
    "id": "w-l11-509",
    "lessonId": "l11",
    "lessonNumber": "Lección 11",
    "kanji": "～ぐらい",
    "reading": "～ぐらい",
    "romaji": "~gurai",
    "spanish": "aproximadamente ~",
    "segments": [
      {
        "text": "～ぐらい"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l11-510",
    "lessonId": "l11",
    "lessonNumber": "Lección 11",
    "kanji": "全部で",
    "reading": "ぜんぶで",
    "romaji": "zenbude",
    "spanish": "en total",
    "segments": [
      {
        "text": "全",
        "furigana": "ぜん"
      },
      {
        "text": "部",
        "furigana": "ぶ"
      },
      {
        "text": "で"
      }
    ],
    "targetKanji": [
      "全",
      "部"
    ]
  },
  {
    "id": "w-l11-511",
    "lessonId": "l11",
    "lessonNumber": "Lección 11",
    "kanji": "みんな",
    "reading": "みんな",
    "romaji": "minna",
    "spanish": "todos, todo",
    "segments": [
      {
        "text": "みんな"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l11-512",
    "lessonId": "l11",
    "lessonNumber": "Lección 11",
    "kanji": "だけ",
    "reading": "だけ",
    "romaji": "dake",
    "spanish": "solamente, nada más",
    "segments": [
      {
        "text": "だけ"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l12-513",
    "lessonId": "l12",
    "lessonNumber": "Lección 12",
    "kanji": "簡単［な］",
    "reading": "かんたん［な］",
    "romaji": "kantan [na]",
    "spanish": "sencillo, fácil",
    "segments": [
      {
        "text": "簡",
        "furigana": "かん"
      },
      {
        "text": "単",
        "furigana": "たん"
      },
      {
        "text": "［な］"
      }
    ],
    "targetKanji": [
      "簡",
      "単"
    ]
  },
  {
    "id": "w-l12-514",
    "lessonId": "l12",
    "lessonNumber": "Lección 12",
    "kanji": "近い",
    "reading": "ちかい",
    "romaji": "chikai",
    "spanish": "cercano, cerca",
    "segments": [
      {
        "text": "近",
        "furigana": "ちか"
      },
      {
        "text": "い"
      }
    ],
    "targetKanji": [
      "近"
    ]
  },
  {
    "id": "w-l12-515",
    "lessonId": "l12",
    "lessonNumber": "Lección 12",
    "kanji": "遠い",
    "reading": "とおい",
    "romaji": "tooi",
    "spanish": "lejano, lejos",
    "segments": [
      {
        "text": "遠",
        "furigana": "とお"
      },
      {
        "text": "い"
      }
    ],
    "targetKanji": [
      "遠"
    ]
  },
  {
    "id": "w-l12-516",
    "lessonId": "l12",
    "lessonNumber": "Lección 12",
    "kanji": "速い",
    "reading": "はやい",
    "romaji": "hayai",
    "spanish": "rápido (velocidad)",
    "segments": [
      {
        "text": "速",
        "furigana": "はや"
      },
      {
        "text": "い"
      }
    ],
    "targetKanji": [
      "速"
    ]
  },
  {
    "id": "w-l12-517",
    "lessonId": "l12",
    "lessonNumber": "Lección 12",
    "kanji": "早い",
    "reading": "はやい",
    "romaji": "hayai",
    "spanish": "temprano (hora)",
    "segments": [
      {
        "text": "早",
        "furigana": "はや"
      },
      {
        "text": "い"
      }
    ],
    "targetKanji": [
      "早"
    ]
  },
  {
    "id": "w-l12-518",
    "lessonId": "l12",
    "lessonNumber": "Lección 12",
    "kanji": "遅い",
    "reading": "おそい",
    "romaji": "osoi",
    "spanish": "lento, tarde",
    "segments": [
      {
        "text": "遅",
        "furigana": "おそ"
      },
      {
        "text": "い"
      }
    ],
    "targetKanji": [
      "遅"
    ]
  },
  {
    "id": "w-l12-519",
    "lessonId": "l12",
    "lessonNumber": "Lección 12",
    "kanji": "多い",
    "reading": "おおい",
    "romaji": "ooi",
    "spanish": "mucho, numeroso",
    "segments": [
      {
        "text": "多",
        "furigana": "おお"
      },
      {
        "text": "い"
      }
    ],
    "targetKanji": [
      "多"
    ]
  },
  {
    "id": "w-l12-520",
    "lessonId": "l12",
    "lessonNumber": "Lección 12",
    "kanji": "少ない",
    "reading": "すくない",
    "romaji": "sukunai",
    "spanish": "escaso, poco numeroso",
    "segments": [
      {
        "text": "少",
        "furigana": "すく"
      },
      {
        "text": "ない"
      }
    ],
    "targetKanji": [
      "少"
    ]
  },
  {
    "id": "w-l12-521",
    "lessonId": "l12",
    "lessonNumber": "Lección 12",
    "kanji": "暖かい",
    "reading": "あたたかい",
    "romaji": "atatakai",
    "spanish": "cálido, templado (clima)",
    "segments": [
      {
        "text": "暖",
        "furigana": "あたた"
      },
      {
        "text": "かい"
      }
    ],
    "targetKanji": [
      "暖"
    ]
  },
  {
    "id": "w-l12-522",
    "lessonId": "l12",
    "lessonNumber": "Lección 12",
    "kanji": "温かい",
    "reading": "あたたかい",
    "romaji": "atatakai",
    "spanish": "tibio, caliente (comida)",
    "segments": [
      {
        "text": "温",
        "furigana": "あたた"
      },
      {
        "text": "かい"
      }
    ],
    "targetKanji": [
      "温"
    ]
  },
  {
    "id": "w-l12-523",
    "lessonId": "l12",
    "lessonNumber": "Lección 12",
    "kanji": "涼しい",
    "reading": "すずしい",
    "romaji": "suzushii",
    "spanish": "fresco (clima)",
    "segments": [
      {
        "text": "涼",
        "furigana": "すず"
      },
      {
        "text": "しい"
      }
    ],
    "targetKanji": [
      "涼"
    ]
  },
  {
    "id": "w-l12-524",
    "lessonId": "l12",
    "lessonNumber": "Lección 12",
    "kanji": "甘い",
    "reading": "あまい",
    "romaji": "amai",
    "spanish": "dulce",
    "segments": [
      {
        "text": "甘",
        "furigana": "あま"
      },
      {
        "text": "い"
      }
    ],
    "targetKanji": [
      "甘"
    ]
  },
  {
    "id": "w-l12-525",
    "lessonId": "l12",
    "lessonNumber": "Lección 12",
    "kanji": "辛い",
    "reading": "からい",
    "romaji": "karai",
    "spanish": "picante",
    "segments": [
      {
        "text": "辛",
        "furigana": "から"
      },
      {
        "text": "い"
      }
    ],
    "targetKanji": [
      "辛"
    ]
  },
  {
    "id": "w-l12-526",
    "lessonId": "l12",
    "lessonNumber": "Lección 12",
    "kanji": "重い",
    "reading": "おもい",
    "romaji": "omoi",
    "spanish": "pesado",
    "segments": [
      {
        "text": "重",
        "furigana": "おも"
      },
      {
        "text": "い"
      }
    ],
    "targetKanji": [
      "重"
    ]
  },
  {
    "id": "w-l12-527",
    "lessonId": "l12",
    "lessonNumber": "Lección 12",
    "kanji": "軽い",
    "reading": "かるい",
    "romaji": "karui",
    "spanish": "ligero, liviano",
    "segments": [
      {
        "text": "軽",
        "furigana": "かる"
      },
      {
        "text": "い"
      }
    ],
    "targetKanji": [
      "軽"
    ]
  },
  {
    "id": "w-l12-528",
    "lessonId": "l12",
    "lessonNumber": "Lección 12",
    "kanji": "季節",
    "reading": "きせつ",
    "romaji": "kisetsu",
    "spanish": "estación del año",
    "segments": [
      {
        "text": "季",
        "furigana": "き"
      },
      {
        "text": "節",
        "furigana": "せつ"
      }
    ],
    "targetKanji": [
      "季",
      "節"
    ]
  },
  {
    "id": "w-l12-529",
    "lessonId": "l12",
    "lessonNumber": "Lección 12",
    "kanji": "春",
    "reading": "はる",
    "romaji": "haru",
    "spanish": "primavera",
    "segments": [
      {
        "text": "春",
        "furigana": "はる"
      }
    ],
    "targetKanji": [
      "春"
    ]
  },
  {
    "id": "w-l12-530",
    "lessonId": "l12",
    "lessonNumber": "Lección 12",
    "kanji": "夏",
    "reading": "なつ",
    "romaji": "natsu",
    "spanish": "verano",
    "segments": [
      {
        "text": "夏",
        "furigana": "なつ"
      }
    ],
    "targetKanji": [
      "夏"
    ]
  },
  {
    "id": "w-l12-531",
    "lessonId": "l12",
    "lessonNumber": "Lección 12",
    "kanji": "秋",
    "reading": "あき",
    "romaji": "aki",
    "spanish": "otoño",
    "segments": [
      {
        "text": "秋",
        "furigana": "あき"
      }
    ],
    "targetKanji": [
      "秋"
    ]
  },
  {
    "id": "w-l12-532",
    "lessonId": "l12",
    "lessonNumber": "Lección 12",
    "kanji": "冬",
    "reading": "ふゆ",
    "romaji": "fuyu",
    "spanish": "invierno",
    "segments": [
      {
        "text": "冬",
        "furigana": "ふゆ"
      }
    ],
    "targetKanji": [
      "冬"
    ]
  },
  {
    "id": "w-l12-533",
    "lessonId": "l12",
    "lessonNumber": "Lección 12",
    "kanji": "天気",
    "reading": "てんき",
    "romaji": "tenki",
    "spanish": "tiempo meteorológico",
    "segments": [
      {
        "text": "天",
        "furigana": "てん"
      },
      {
        "text": "気",
        "furigana": "き"
      }
    ],
    "targetKanji": [
      "天",
      "気"
    ]
  },
  {
    "id": "w-l12-534",
    "lessonId": "l12",
    "lessonNumber": "Lección 12",
    "kanji": "雨",
    "reading": "あめ",
    "romaji": "ame",
    "spanish": "lluvia",
    "segments": [
      {
        "text": "雨",
        "furigana": "あめ"
      }
    ],
    "targetKanji": [
      "雨"
    ]
  },
  {
    "id": "w-l12-535",
    "lessonId": "l12",
    "lessonNumber": "Lección 12",
    "kanji": "雪",
    "reading": "ゆき",
    "romaji": "yuki",
    "spanish": "nieve",
    "segments": [
      {
        "text": "雪",
        "furigana": "ゆき"
      }
    ],
    "targetKanji": [
      "雪"
    ]
  },
  {
    "id": "w-l12-536",
    "lessonId": "l12",
    "lessonNumber": "Lección 12",
    "kanji": "曇り",
    "reading": "くもり",
    "romaji": "kumori",
    "spanish": "nublado",
    "segments": [
      {
        "text": "曇",
        "furigana": "くも"
      },
      {
        "text": "り"
      }
    ],
    "targetKanji": [
      "曇"
    ]
  },
  {
    "id": "w-l12-537",
    "lessonId": "l12",
    "lessonNumber": "Lección 12",
    "kanji": "ホテル",
    "reading": "ホテル",
    "romaji": "hoteru",
    "spanish": "hotel",
    "segments": [
      {
        "text": "ホテル"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l12-538",
    "lessonId": "l12",
    "lessonNumber": "Lección 12",
    "kanji": "空港",
    "reading": "くうこう",
    "romaji": "kuukou",
    "spanish": "aeropuerto",
    "segments": [
      {
        "text": "空",
        "furigana": "くう"
      },
      {
        "text": "港",
        "furigana": "こう"
      }
    ],
    "targetKanji": [
      "空",
      "港"
    ]
  },
  {
    "id": "w-l12-539",
    "lessonId": "l12",
    "lessonNumber": "Lección 12",
    "kanji": "海",
    "reading": "うみ",
    "romaji": "umi",
    "spanish": "mar, playa",
    "segments": [
      {
        "text": "海",
        "furigana": "うみ"
      }
    ],
    "targetKanji": [
      "海"
    ]
  },
  {
    "id": "w-l12-540",
    "lessonId": "l12",
    "lessonNumber": "Lección 12",
    "kanji": "世界",
    "reading": "せかい",
    "romaji": "sekai",
    "spanish": "mundo",
    "segments": [
      {
        "text": "世",
        "furigana": "せ"
      },
      {
        "text": "界",
        "furigana": "かい"
      }
    ],
    "targetKanji": [
      "世",
      "界"
    ]
  },
  {
    "id": "w-l12-541",
    "lessonId": "l12",
    "lessonNumber": "Lección 12",
    "kanji": "パーティー",
    "reading": "パーティー",
    "romaji": "paatii",
    "spanish": "fiesta",
    "segments": [
      {
        "text": "パーティー"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l12-542",
    "lessonId": "l12",
    "lessonNumber": "Lección 12",
    "kanji": "お祭り",
    "reading": "おまつり",
    "romaji": "omatsuri",
    "spanish": "festival, fiesta tradicional",
    "segments": [
      {
        "text": "お"
      },
      {
        "text": "祭",
        "furigana": "まつ"
      },
      {
        "text": "り"
      }
    ],
    "targetKanji": [
      "祭"
    ]
  },
  {
    "id": "w-l12-543",
    "lessonId": "l12",
    "lessonNumber": "Lección 12",
    "kanji": "すき焼き",
    "reading": "すきやき",
    "romaji": "sukiyaki",
    "spanish": "sukiyaki (plato japonés)",
    "segments": [
      {
        "text": "すき"
      },
      {
        "text": "焼",
        "furigana": "や"
      },
      {
        "text": "き"
      }
    ],
    "targetKanji": [
      "焼"
    ]
  },
  {
    "id": "w-l12-544",
    "lessonId": "l12",
    "lessonNumber": "Lección 12",
    "kanji": "刺身",
    "reading": "さしみ",
    "romaji": "sashimi",
    "spanish": "sashimi (pescado crudo)",
    "segments": [
      {
        "text": "刺",
        "furigana": "さ"
      },
      {
        "text": "身",
        "furigana": "しみ"
      }
    ],
    "targetKanji": [
      "刺",
      "身"
    ]
  },
  {
    "id": "w-l12-545",
    "lessonId": "l12",
    "lessonNumber": "Lección 12",
    "kanji": "寿司",
    "reading": "すし",
    "romaji": "sushi",
    "spanish": "sushi",
    "segments": [
      {
        "text": "寿",
        "furigana": "す"
      },
      {
        "text": "司",
        "furigana": "し"
      }
    ],
    "targetKanji": [
      "寿",
      "司"
    ]
  },
  {
    "id": "w-l12-546",
    "lessonId": "l12",
    "lessonNumber": "Lección 12",
    "kanji": "天ぷら",
    "reading": "てんぷら",
    "romaji": "tenpura",
    "spanish": "tempura",
    "segments": [
      {
        "text": "天",
        "furigana": "てん"
      },
      {
        "text": "ぷら"
      }
    ],
    "targetKanji": [
      "天"
    ]
  },
  {
    "id": "w-l12-547",
    "lessonId": "l12",
    "lessonNumber": "Lección 12",
    "kanji": "豚肉",
    "reading": "ぶたにく",
    "romaji": "butaniku",
    "spanish": "carne de cerdo",
    "segments": [
      {
        "text": "豚",
        "furigana": "ぶた"
      },
      {
        "text": "肉",
        "furigana": "にく"
      }
    ],
    "targetKanji": [
      "豚",
      "肉"
    ]
  },
  {
    "id": "w-l12-548",
    "lessonId": "l12",
    "lessonNumber": "Lección 12",
    "kanji": "とり肉",
    "reading": "とりにく",
    "romaji": "toriniku",
    "spanish": "carne de pollo / ave",
    "segments": [
      {
        "text": "とり"
      },
      {
        "text": "肉",
        "furigana": "にく"
      }
    ],
    "targetKanji": [
      "肉"
    ]
  },
  {
    "id": "w-l12-549",
    "lessonId": "l12",
    "lessonNumber": "Lección 12",
    "kanji": "牛肉",
    "reading": "ぎゅうにく",
    "romaji": "gyuuniku",
    "spanish": "carne de ternera / vacuno",
    "segments": [
      {
        "text": "牛",
        "furigana": "ぎゅう"
      },
      {
        "text": "肉",
        "furigana": "にく"
      }
    ],
    "targetKanji": [
      "牛",
      "肉"
    ]
  },
  {
    "id": "w-l12-550",
    "lessonId": "l12",
    "lessonNumber": "Lección 12",
    "kanji": "生け花",
    "reading": "いけばな",
    "romaji": "ikebana",
    "spanish": "arreglo floral japonés",
    "segments": [
      {
        "text": "生",
        "furigana": "い"
      },
      {
        "text": "け"
      },
      {
        "text": "花",
        "furigana": "ばな"
      }
    ],
    "targetKanji": [
      "生",
      "花"
    ]
  },
  {
    "id": "w-l12-551",
    "lessonId": "l12",
    "lessonNumber": "Lección 12",
    "kanji": "紅葉",
    "reading": "もみじ",
    "romaji": "momiji",
    "spanish": "hojas de otoño, arce",
    "segments": [
      {
        "text": "紅",
        "furigana": "も"
      },
      {
        "text": "葉",
        "furigana": "みじ"
      }
    ],
    "targetKanji": [
      "紅",
      "葉"
    ]
  },
  {
    "id": "w-l12-552",
    "lessonId": "l12",
    "lessonNumber": "Lección 12",
    "kanji": "どちら",
    "reading": "どちら",
    "romaji": "dochira",
    "spanish": "cuál (de entre dos)",
    "segments": [
      {
        "text": "どちら"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l12-553",
    "lessonId": "l12",
    "lessonNumber": "Lección 12",
    "kanji": "どちらも",
    "reading": "どちらも",
    "romaji": "dochiramo",
    "spanish": "ambos, los dos",
    "segments": [
      {
        "text": "どちらも"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l12-554",
    "lessonId": "l12",
    "lessonNumber": "Lección 12",
    "kanji": "ずっと",
    "reading": "ずっと",
    "romaji": "zutto",
    "spanish": "mucho más",
    "segments": [
      {
        "text": "ずっと"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l12-555",
    "lessonId": "l12",
    "lessonNumber": "Lección 12",
    "kanji": "初めて",
    "reading": "はじめて",
    "romaji": "hajimete",
    "spanish": "por primera vez",
    "segments": [
      {
        "text": "初",
        "furigana": "はじ"
      },
      {
        "text": "めて"
      }
    ],
    "targetKanji": [
      "初"
    ]
  },
  {
    "id": "w-l13-556",
    "lessonId": "l13",
    "lessonNumber": "Lección 13",
    "kanji": "遊びます",
    "reading": "あそびます",
    "romaji": "asobimasu",
    "spanish": "jugar, divertirse",
    "segments": [
      {
        "text": "遊",
        "furigana": "あそ"
      },
      {
        "text": "びます"
      }
    ],
    "targetKanji": [
      "遊"
    ]
  },
  {
    "id": "w-l13-557",
    "lessonId": "l13",
    "lessonNumber": "Lección 13",
    "kanji": "泳ぎます",
    "reading": "およぎます",
    "romaji": "oyogimasu",
    "spanish": "nadar",
    "segments": [
      {
        "text": "泳",
        "furigana": "およ"
      },
      {
        "text": "ぎます"
      }
    ],
    "targetKanji": [
      "泳"
    ]
  },
  {
    "id": "w-l13-558",
    "lessonId": "l13",
    "lessonNumber": "Lección 13",
    "kanji": "迎えます",
    "reading": "むかえます",
    "romaji": "mukaemasu",
    "spanish": "recibir (a alguien), acoger",
    "segments": [
      {
        "text": "迎",
        "furigana": "むか"
      },
      {
        "text": "えます"
      }
    ],
    "targetKanji": [
      "迎"
    ]
  },
  {
    "id": "w-l13-559",
    "lessonId": "l13",
    "lessonNumber": "Lección 13",
    "kanji": "疲れます",
    "reading": "つかれます",
    "romaji": "tsukaremasu",
    "spanish": "cansarse",
    "segments": [
      {
        "text": "疲",
        "furigana": "つか"
      },
      {
        "text": "れます"
      }
    ],
    "targetKanji": [
      "疲"
    ]
  },
  {
    "id": "w-l13-560",
    "lessonId": "l13",
    "lessonNumber": "Lección 13",
    "kanji": "出します",
    "reading": "だします",
    "romaji": "dashimasu",
    "spanish": "sacar, enviar (carta)",
    "segments": [
      {
        "text": "出",
        "furigana": "だ"
      },
      {
        "text": "します"
      }
    ],
    "targetKanji": [
      "出"
    ]
  },
  {
    "id": "w-l13-561",
    "lessonId": "l13",
    "lessonNumber": "Lección 13",
    "kanji": "入ります",
    "reading": "はいります",
    "romaji": "hairimasu",
    "spanish": "entrar",
    "segments": [
      {
        "text": "入",
        "furigana": "はい"
      },
      {
        "text": "ります"
      }
    ],
    "targetKanji": [
      "入"
    ]
  },
  {
    "id": "w-l13-562",
    "lessonId": "l13",
    "lessonNumber": "Lección 13",
    "kanji": "出ます",
    "reading": "でます",
    "romaji": "demasu",
    "spanish": "salir",
    "segments": [
      {
        "text": "出",
        "furigana": "で"
      },
      {
        "text": "ます"
      }
    ],
    "targetKanji": [
      "出"
    ]
  },
  {
    "id": "w-l13-563",
    "lessonId": "l13",
    "lessonNumber": "Lección 13",
    "kanji": "結婚します",
    "reading": "けっこんします",
    "romaji": "kekkonshimasu",
    "spanish": "casarse",
    "segments": [
      {
        "text": "結",
        "furigana": "けっ"
      },
      {
        "text": "婚",
        "furigana": "こん"
      },
      {
        "text": "します"
      }
    ],
    "targetKanji": [
      "結",
      "婚"
    ]
  },
  {
    "id": "w-l13-564",
    "lessonId": "l13",
    "lessonNumber": "Lección 13",
    "kanji": "買い物します",
    "reading": "かいものします",
    "romaji": "kaimonoshimasu",
    "spanish": "hacer compras",
    "segments": [
      {
        "text": "買",
        "furigana": "か"
      },
      {
        "text": "い"
      },
      {
        "text": "物",
        "furigana": "もの"
      },
      {
        "text": "します"
      }
    ],
    "targetKanji": [
      "買",
      "物"
    ]
  },
  {
    "id": "w-l13-565",
    "lessonId": "l13",
    "lessonNumber": "Lección 13",
    "kanji": "食事します",
    "reading": "しょくじします",
    "romaji": "shokujishimasu",
    "spanish": "comer, almorzar/cenar",
    "segments": [
      {
        "text": "食",
        "furigana": "しょく"
      },
      {
        "text": "事",
        "furigana": "じ"
      },
      {
        "text": "します"
      }
    ],
    "targetKanji": [
      "食",
      "事"
    ]
  },
  {
    "id": "w-l13-566",
    "lessonId": "l13",
    "lessonNumber": "Lección 13",
    "kanji": "散歩します",
    "reading": "さんぽします",
    "romaji": "sanposhimasu",
    "spanish": "dar un paseo",
    "segments": [
      {
        "text": "散",
        "furigana": "さん"
      },
      {
        "text": "歩",
        "furigana": "ぽ"
      },
      {
        "text": "します"
      }
    ],
    "targetKanji": [
      "散",
      "歩"
    ]
  },
  {
    "id": "w-l13-567",
    "lessonId": "l13",
    "lessonNumber": "Lección 13",
    "kanji": "大変［な］",
    "reading": "たいへん［な］",
    "romaji": "taihen [na]",
    "spanish": "duro, penoso, difícil",
    "segments": [
      {
        "text": "大",
        "furigana": "たい"
      },
      {
        "text": "変",
        "furigana": "へん"
      },
      {
        "text": "［な］"
      }
    ],
    "targetKanji": [
      "大",
      "変"
    ]
  },
  {
    "id": "w-l13-568",
    "lessonId": "l13",
    "lessonNumber": "Lección 13",
    "kanji": "欲しい",
    "reading": "ほしい",
    "romaji": "hoshii",
    "spanish": "querer, desear (un objeto)",
    "segments": [
      {
        "text": "欲",
        "furigana": "ほ"
      },
      {
        "text": "しい"
      }
    ],
    "targetKanji": [
      "欲"
    ]
  },
  {
    "id": "w-l13-569",
    "lessonId": "l13",
    "lessonNumber": "Lección 13",
    "kanji": "寂しい",
    "reading": "さびしい",
    "romaji": "sabishii",
    "spanish": "solitario, triste",
    "segments": [
      {
        "text": "寂",
        "furigana": "さび"
      },
      {
        "text": "しい"
      }
    ],
    "targetKanji": [
      "寂"
    ]
  },
  {
    "id": "w-l13-570",
    "lessonId": "l13",
    "lessonNumber": "Lección 13",
    "kanji": "広い",
    "reading": "ひろい",
    "romaji": "hiroi",
    "spanish": "amplio, espacioso",
    "segments": [
      {
        "text": "広",
        "furigana": "ひろ"
      },
      {
        "text": "い"
      }
    ],
    "targetKanji": [
      "広"
    ]
  },
  {
    "id": "w-l13-571",
    "lessonId": "l13",
    "lessonNumber": "Lección 13",
    "kanji": "狭い",
    "reading": "せまい",
    "romaji": "semai",
    "spanish": "estrecho, angosto",
    "segments": [
      {
        "text": "狭",
        "furigana": "せま"
      },
      {
        "text": "い"
      }
    ],
    "targetKanji": [
      "狭"
    ]
  },
  {
    "id": "w-l13-572",
    "lessonId": "l13",
    "lessonNumber": "Lección 13",
    "kanji": "市役所",
    "reading": "しやくしょ",
    "romaji": "shiyakusho",
    "spanish": "ayuntamiento, municipalidad",
    "segments": [
      {
        "text": "市",
        "furigana": "し"
      },
      {
        "text": "役",
        "furigana": "やく"
      },
      {
        "text": "所",
        "furigana": "しょ"
      }
    ],
    "targetKanji": [
      "市",
      "役",
      "所"
    ]
  },
  {
    "id": "w-l13-573",
    "lessonId": "l13",
    "lessonNumber": "Lección 13",
    "kanji": "プール",
    "reading": "プール",
    "romaji": "puuru",
    "spanish": "piscina",
    "segments": [
      {
        "text": "プール"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l13-574",
    "lessonId": "l13",
    "lessonNumber": "Lección 13",
    "kanji": "川",
    "reading": "かわ",
    "romaji": "kawa",
    "spanish": "río",
    "segments": [
      {
        "text": "川",
        "furigana": "かわ"
      }
    ],
    "targetKanji": [
      "川"
    ]
  },
  {
    "id": "w-l13-575",
    "lessonId": "l13",
    "lessonNumber": "Lección 13",
    "kanji": "経済",
    "reading": "けいざい",
    "romaji": "keizai",
    "spanish": "economía",
    "segments": [
      {
        "text": "経",
        "furigana": "けい"
      },
      {
        "text": "済",
        "furigana": "ざい"
      }
    ],
    "targetKanji": [
      "経",
      "済"
    ]
  },
  {
    "id": "w-l13-576",
    "lessonId": "l13",
    "lessonNumber": "Lección 13",
    "kanji": "美術",
    "reading": "びじゅつ",
    "romaji": "bijutsu",
    "spanish": "bellas artes",
    "segments": [
      {
        "text": "美",
        "furigana": "び"
      },
      {
        "text": "術",
        "furigana": "じゅつ"
      }
    ],
    "targetKanji": [
      "美",
      "術"
    ]
  },
  {
    "id": "w-l13-577",
    "lessonId": "l13",
    "lessonNumber": "Lección 13",
    "kanji": "釣り",
    "reading": "つり",
    "romaji": "tsuri",
    "spanish": "pesca",
    "segments": [
      {
        "text": "釣",
        "furigana": "つ"
      },
      {
        "text": "り"
      }
    ],
    "targetKanji": [
      "釣"
    ]
  },
  {
    "id": "w-l13-578",
    "lessonId": "l13",
    "lessonNumber": "Lección 13",
    "kanji": "スキー",
    "reading": "スキー",
    "romaji": "sukii",
    "spanish": "esquí",
    "segments": [
      {
        "text": "スキー"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l13-579",
    "lessonId": "l13",
    "lessonNumber": "Lección 13",
    "kanji": "会議",
    "reading": "かいぎ",
    "romaji": "kaigi",
    "spanish": "reunión, junta",
    "segments": [
      {
        "text": "会",
        "furigana": "かい"
      },
      {
        "text": "議",
        "furigana": "ぎ"
      }
    ],
    "targetKanji": [
      "会",
      "議"
    ]
  },
  {
    "id": "w-l13-580",
    "lessonId": "l13",
    "lessonNumber": "Lección 13",
    "kanji": "登録",
    "reading": "とうろく",
    "romaji": "touroku",
    "spanish": "inscripción, registro",
    "segments": [
      {
        "text": "登",
        "furigana": "とう"
      },
      {
        "text": "録",
        "furigana": "ろく"
      }
    ],
    "targetKanji": [
      "登",
      "録"
    ]
  },
  {
    "id": "w-l13-581",
    "lessonId": "l13",
    "lessonNumber": "Lección 13",
    "kanji": "週末",
    "reading": "しゅうまつ",
    "romaji": "shuumatsu",
    "spanish": "fin de semana",
    "segments": [
      {
        "text": "週",
        "furigana": "しゅう"
      },
      {
        "text": "末",
        "furigana": "まつ"
      }
    ],
    "targetKanji": [
      "週",
      "末"
    ]
  },
  {
    "id": "w-l13-582",
    "lessonId": "l13",
    "lessonNumber": "Lección 13",
    "kanji": "～ごろ",
    "reading": "～ごろ",
    "romaji": "~goro",
    "spanish": "alrededor de ~ (hora)",
    "segments": [
      {
        "text": "～ごろ"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l13-583",
    "lessonId": "l13",
    "lessonNumber": "Lección 13",
    "kanji": "何か",
    "reading": "なにか",
    "romaji": "nanika",
    "spanish": "algo",
    "segments": [
      {
        "text": "何",
        "furigana": "なに"
      },
      {
        "text": "か"
      }
    ],
    "targetKanji": [
      "何"
    ]
  },
  {
    "id": "w-l13-584",
    "lessonId": "l13",
    "lessonNumber": "Lección 13",
    "kanji": "どこか",
    "reading": "どこか",
    "romaji": "dokoka",
    "spanish": "algún lugar",
    "segments": [
      {
        "text": "どこか"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l13-585",
    "lessonId": "l13",
    "lessonNumber": "Lección 13",
    "kanji": "定食",
    "reading": "ていしょく",
    "romaji": "teishoku",
    "spanish": "menú del día / combinado",
    "segments": [
      {
        "text": "定",
        "furigana": "てい"
      },
      {
        "text": "食",
        "furigana": "しょく"
      }
    ],
    "targetKanji": [
      "定",
      "食"
    ]
  },
  {
    "id": "w-l13-586",
    "lessonId": "l13",
    "lessonNumber": "Lección 13",
    "kanji": "牛丼",
    "reading": "ぎゅうどん",
    "romaji": "gyuudon",
    "spanish": "cuenco de arroz con ternera",
    "segments": [
      {
        "text": "牛",
        "furigana": "ぎゅう"
      },
      {
        "text": "丼",
        "furigana": "どん"
      }
    ],
    "targetKanji": [
      "牛",
      "丼"
    ]
  },
  {
    "id": "w-l13-587",
    "lessonId": "l13",
    "lessonNumber": "Lección 13",
    "kanji": "別々に",
    "reading": "べつべつに",
    "romaji": "betsubetsuni",
    "spanish": "por separado",
    "segments": [
      {
        "text": "別",
        "furigana": "べつ"
      },
      {
        "text": "々",
        "furigana": "べつ"
      },
      {
        "text": "に"
      }
    ],
    "targetKanji": [
      "別"
    ]
  },
  {
    "id": "w-l14-588",
    "lessonId": "l14",
    "lessonNumber": "Lección 14",
    "kanji": "つけます",
    "reading": "つけます",
    "romaji": "tsukemasu",
    "spanish": "encender (la luz)",
    "segments": [
      {
        "text": "つけます"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l14-589",
    "lessonId": "l14",
    "lessonNumber": "Lección 14",
    "kanji": "消します",
    "reading": "けします",
    "romaji": "keshimasu",
    "spanish": "apagar, borrar",
    "segments": [
      {
        "text": "消",
        "furigana": "け"
      },
      {
        "text": "します"
      }
    ],
    "targetKanji": [
      "消"
    ]
  },
  {
    "id": "w-l14-590",
    "lessonId": "l14",
    "lessonNumber": "Lección 14",
    "kanji": "開けます",
    "reading": "あけます",
    "romaji": "akemasu",
    "spanish": "abrir",
    "segments": [
      {
        "text": "開",
        "furigana": "あ"
      },
      {
        "text": "けます"
      }
    ],
    "targetKanji": [
      "開"
    ]
  },
  {
    "id": "w-l14-591",
    "lessonId": "l14",
    "lessonNumber": "Lección 14",
    "kanji": "閉めます",
    "reading": "しめます",
    "romaji": "shimemasu",
    "spanish": "cerrar",
    "segments": [
      {
        "text": "閉",
        "furigana": "し"
      },
      {
        "text": "めます"
      }
    ],
    "targetKanji": [
      "閉"
    ]
  },
  {
    "id": "w-l14-592",
    "lessonId": "l14",
    "lessonNumber": "Lección 14",
    "kanji": "急ぎます",
    "reading": "いそぎます",
    "romaji": "isogimasu",
    "spanish": "darse prisa, apresurarse",
    "segments": [
      {
        "text": "急",
        "furigana": "いそ"
      },
      {
        "text": "ぎます"
      }
    ],
    "targetKanji": [
      "急"
    ]
  },
  {
    "id": "w-l14-593",
    "lessonId": "l14",
    "lessonNumber": "Lección 14",
    "kanji": "待ちます",
    "reading": "まちます",
    "romaji": "machimasu",
    "spanish": "esperar",
    "segments": [
      {
        "text": "待",
        "furigana": "ま"
      },
      {
        "text": "ちます"
      }
    ],
    "targetKanji": [
      "待"
    ]
  },
  {
    "id": "w-l14-594",
    "lessonId": "l14",
    "lessonNumber": "Lección 14",
    "kanji": "止めます",
    "reading": "とめます",
    "romaji": "tomemasu",
    "spanish": "detener, parar, aparcar",
    "segments": [
      {
        "text": "止",
        "furigana": "と"
      },
      {
        "text": "めます"
      }
    ],
    "targetKanji": [
      "止"
    ]
  },
  {
    "id": "w-l14-595",
    "lessonId": "l14",
    "lessonNumber": "Lección 14",
    "kanji": "曲がります",
    "reading": "まがります",
    "romaji": "magarimasu",
    "spanish": "girar, doblar",
    "segments": [
      {
        "text": "曲",
        "furigana": "ま"
      },
      {
        "text": "がります"
      }
    ],
    "targetKanji": [
      "曲"
    ]
  },
  {
    "id": "w-l14-596",
    "lessonId": "l14",
    "lessonNumber": "Lección 14",
    "kanji": "持ちます",
    "reading": "もちます",
    "romaji": "mochimasu",
    "spanish": "llevar, sostener en la mano",
    "segments": [
      {
        "text": "持",
        "furigana": "mo"
      },
      {
        "text": "ちます"
      }
    ],
    "targetKanji": [
      "持"
    ]
  },
  {
    "id": "w-l14-597",
    "lessonId": "l14",
    "lessonNumber": "Lección 14",
    "kanji": "取ります",
    "reading": "とります",
    "romaji": "torimasu",
    "spanish": "tomar, agarrar",
    "segments": [
      {
        "text": "取",
        "furigana": "と"
      },
      {
        "text": "ります"
      }
    ],
    "targetKanji": [
      "取"
    ]
  },
  {
    "id": "w-l14-598",
    "lessonId": "l14",
    "lessonNumber": "Lección 14",
    "kanji": "手伝います",
    "reading": "てつだいます",
    "romaji": "tetsudaimasu",
    "spanish": "ayudar",
    "segments": [
      {
        "text": "手",
        "furigana": "て"
      },
      {
        "text": "伝",
        "furigana": "つだ"
      },
      {
        "text": "います"
      }
    ],
    "targetKanji": [
      "手",
      "伝"
    ]
  },
  {
    "id": "w-l14-599",
    "lessonId": "l14",
    "lessonNumber": "Lección 14",
    "kanji": "呼びます",
    "reading": "よびます",
    "romaji": "yobimasu",
    "spanish": "llamar",
    "segments": [
      {
        "text": "呼",
        "furigana": "よ"
      },
      {
        "text": "びます"
      }
    ],
    "targetKanji": [
      "呼"
    ]
  },
  {
    "id": "w-l14-600",
    "lessonId": "l14",
    "lessonNumber": "Lección 14",
    "kanji": "話します",
    "reading": "はなします",
    "romaji": "hanashimasu",
    "spanish": "hablar",
    "segments": [
      {
        "text": "話",
        "furigana": "はな"
      },
      {
        "text": "します"
      }
    ],
    "targetKanji": [
      "話"
    ]
  },
  {
    "id": "w-l14-601",
    "lessonId": "l14",
    "lessonNumber": "Lección 14",
    "kanji": "使います",
    "reading": "つかいます",
    "romaji": "tsukaimasu",
    "spanish": "usar, utilizar",
    "segments": [
      {
        "text": "使",
        "furigana": "つか"
      },
      {
        "text": "います"
      }
    ],
    "targetKanji": [
      "使"
    ]
  },
  {
    "id": "w-l14-602",
    "lessonId": "l14",
    "lessonNumber": "Lección 14",
    "kanji": "見せます",
    "reading": "みせます",
    "romaji": "misemasu",
    "spanish": "mostrar, enseñar",
    "segments": [
      {
        "text": "見",
        "furigana": "み"
      },
      {
        "text": "せます"
      }
    ],
    "targetKanji": [
      "見"
    ]
  },
  {
    "id": "w-l14-603",
    "lessonId": "l14",
    "lessonNumber": "Lección 14",
    "kanji": "座ります",
    "reading": "すわります",
    "romaji": "suwarimasu",
    "spanish": "sentarse",
    "segments": [
      {
        "text": "座",
        "furigana": "すわ"
      },
      {
        "text": "ります"
      }
    ],
    "targetKanji": [
      "座"
    ]
  },
  {
    "id": "w-l14-604",
    "lessonId": "l14",
    "lessonNumber": "Lección 14",
    "kanji": "立ちます",
    "reading": "たちます",
    "romaji": "tachimasu",
    "spanish": "ponerse de pie",
    "segments": [
      {
        "text": "立",
        "furigana": "た"
      },
      {
        "text": "ちます"
      }
    ],
    "targetKanji": [
      "立"
    ]
  },
  {
    "id": "w-l14-605",
    "lessonId": "l14",
    "lessonNumber": "Lección 14",
    "kanji": "降ります",
    "reading": "ふります",
    "romaji": "furimasu",
    "spanish": "llover, caer nieve",
    "segments": [
      {
        "text": "降",
        "furigana": "ふ"
      },
      {
        "text": "ります"
      }
    ],
    "targetKanji": [
      "降"
    ]
  },
  {
    "id": "w-l14-606",
    "lessonId": "l14",
    "lessonNumber": "Lección 14",
    "kanji": "コピーします",
    "reading": "コピーします",
    "romaji": "kopiishimasu",
    "spanish": "fotocopiar",
    "segments": [
      {
        "text": "コピーします"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l14-607",
    "lessonId": "l14",
    "lessonNumber": "Lección 14",
    "kanji": "パスポート",
    "reading": "パスポート",
    "romaji": "pasupooto",
    "spanish": "pasaporte",
    "segments": [
      {
        "text": "パスポート"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l14-608",
    "lessonId": "l14",
    "lessonNumber": "Lección 14",
    "kanji": "名前",
    "reading": "なまえ",
    "romaji": "namae",
    "spanish": "nombre",
    "segments": [
      {
        "text": "名",
        "furigana": "な"
      },
      {
        "text": "前",
        "furigana": "まえ"
      }
    ],
    "targetKanji": [
      "名",
      "前"
    ]
  },
  {
    "id": "w-l14-609",
    "lessonId": "l14",
    "lessonNumber": "Lección 14",
    "kanji": "住所",
    "reading": "じゅうしょ",
    "romaji": "juusho",
    "spanish": "dirección, domicilio",
    "segments": [
      {
        "text": "住",
        "furigana": "じゅう"
      },
      {
        "text": "所",
        "furigana": "しょ"
      }
    ],
    "targetKanji": [
      "住",
      "所"
    ]
  },
  {
    "id": "w-l14-610",
    "lessonId": "l14",
    "lessonNumber": "Lección 14",
    "kanji": "地図",
    "reading": "ちず",
    "romaji": "chizu",
    "spanish": "mapa",
    "segments": [
      {
        "text": "地",
        "furigana": "ち"
      },
      {
        "text": "図",
        "furigana": "ず"
      }
    ],
    "targetKanji": [
      "地",
      "図"
    ]
  },
  {
    "id": "w-l14-611",
    "lessonId": "l14",
    "lessonNumber": "Lección 14",
    "kanji": "塩",
    "reading": "しお",
    "romaji": "shio",
    "spanish": "sal",
    "segments": [
      {
        "text": "塩",
        "furigana": "しお"
      }
    ],
    "targetKanji": [
      "塩"
    ]
  },
  {
    "id": "w-l14-612",
    "lessonId": "l14",
    "lessonNumber": "Lección 14",
    "kanji": "砂糖",
    "reading": "さとう",
    "romaji": "satou",
    "spanish": "azúcar",
    "segments": [
      {
        "text": "砂",
        "furigana": "さ"
      },
      {
        "text": "糖",
        "furigana": "とう"
      }
    ],
    "targetKanji": [
      "砂",
      "糖"
    ]
  },
  {
    "id": "w-l14-613",
    "lessonId": "l14",
    "lessonNumber": "Lección 14",
    "kanji": "問題",
    "reading": "もんだい",
    "romaji": "mondai",
    "spanish": "problema, pregunta",
    "segments": [
      {
        "text": "問",
        "furigana": "もん"
      },
      {
        "text": "題",
        "furigana": "だい"
      }
    ],
    "targetKanji": [
      "問",
      "題"
    ]
  },
  {
    "id": "w-l14-614",
    "lessonId": "l14",
    "lessonNumber": "Lección 14",
    "kanji": "答え",
    "reading": "こたえ",
    "romaji": "kotae",
    "spanish": "respuesta",
    "segments": [
      {
        "text": "答",
        "furigana": "こた"
      },
      {
        "text": "え"
      }
    ],
    "targetKanji": [
      "答"
    ]
  },
  {
    "id": "w-l14-615",
    "lessonId": "l14",
    "lessonNumber": "Lección 14",
    "kanji": "読み方",
    "reading": "よみかた",
    "romaji": "yomikata",
    "spanish": "forma de leer, lectura",
    "segments": [
      {
        "text": "読",
        "furigana": "よ"
      },
      {
        "text": "み"
      },
      {
        "text": "方",
        "furigana": "かた"
      }
    ],
    "targetKanji": [
      "読",
      "方"
    ]
  },
  {
    "id": "w-l14-616",
    "lessonId": "l14",
    "lessonNumber": "Lección 14",
    "kanji": "～方",
    "reading": "～かた",
    "romaji": "~kata",
    "spanish": "forma de hacer ~",
    "segments": [
      {
        "text": "～"
      },
      {
        "text": "方",
        "furigana": "かた"
      }
    ],
    "targetKanji": [
      "方"
    ]
  },
  {
    "id": "w-l14-617",
    "lessonId": "l14",
    "lessonNumber": "Lección 14",
    "kanji": "もう少し",
    "reading": "もうすこし",
    "romaji": "mou sukoshi",
    "spanish": "un poco más",
    "segments": [
      {
        "text": "もう"
      },
      {
        "text": "少",
        "furigana": "すこ"
      },
      {
        "text": "し"
      }
    ],
    "targetKanji": [
      "少"
    ]
  },
  {
    "id": "w-l14-618",
    "lessonId": "l14",
    "lessonNumber": "Lección 14",
    "kanji": "もう一度",
    "reading": "もういちど",
    "romaji": "mou ichido",
    "spanish": "otra vez, una vez más",
    "segments": [
      {
        "text": "もう"
      },
      {
        "text": "一",
        "furigana": "いち"
      },
      {
        "text": "度",
        "furigana": "ど"
      }
    ],
    "targetKanji": [
      "一",
      "度"
    ]
  },
  {
    "id": "w-l14-619",
    "lessonId": "l14",
    "lessonNumber": "Lección 14",
    "kanji": "お釣り",
    "reading": "おつり",
    "romaji": "otsuri",
    "spanish": "cambio, vuelta de dinero",
    "segments": [
      {
        "text": "お"
      },
      {
        "text": "釣",
        "furigana": "つ"
      },
      {
        "text": "り"
      }
    ],
    "targetKanji": [
      "釣"
    ]
  },
  {
    "id": "w-l15-620",
    "lessonId": "l15",
    "lessonNumber": "Lección 15",
    "kanji": "置きます",
    "reading": "おきます",
    "romaji": "okimasu",
    "spanish": "colocar, poner",
    "segments": [
      {
        "text": "置",
        "furigana": "お"
      },
      {
        "text": "きます"
      }
    ],
    "targetKanji": [
      "置"
    ]
  },
  {
    "id": "w-l15-621",
    "lessonId": "l15",
    "lessonNumber": "Lección 15",
    "kanji": "作ります",
    "reading": "つくります",
    "romaji": "tsukurimasu",
    "spanish": "hacer, fabricar, cocinar",
    "segments": [
      {
        "text": "作",
        "furigana": "つく"
      },
      {
        "text": "ります"
      }
    ],
    "targetKanji": [
      "作"
    ]
  },
  {
    "id": "w-l15-622",
    "lessonId": "l15",
    "lessonNumber": "Lección 15",
    "kanji": "売ります",
    "reading": "うります",
    "romaji": "urimasu",
    "spanish": "vender",
    "segments": [
      {
        "text": "売",
        "furigana": "う"
      },
      {
        "text": "ります"
      }
    ],
    "targetKanji": [
      "売"
    ]
  },
  {
    "id": "w-l15-623",
    "lessonId": "l15",
    "lessonNumber": "Lección 15",
    "kanji": "知ります",
    "reading": "しります",
    "romaji": "shirimasu",
    "spanish": "conocer, saber",
    "segments": [
      {
        "text": "知",
        "furigana": "し"
      },
      {
        "text": "ります"
      }
    ],
    "targetKanji": [
      "知"
    ]
  },
  {
    "id": "w-l15-624",
    "lessonId": "l15",
    "lessonNumber": "Lección 15",
    "kanji": "住みます",
    "reading": "すみます",
    "romaji": "sumimasu",
    "spanish": "vivir, residir",
    "segments": [
      {
        "text": "住",
        "furigana": "す"
      },
      {
        "text": "みます"
      }
    ],
    "targetKanji": [
      "住"
    ]
  },
  {
    "id": "w-l15-625",
    "lessonId": "l15",
    "lessonNumber": "Lección 15",
    "kanji": "研究します",
    "reading": "けんきゅうします",
    "romaji": "kenkyuushimasu",
    "spanish": "investigar",
    "segments": [
      {
        "text": "研",
        "furigana": "けん"
      },
      {
        "text": "究",
        "furigana": "きゅう"
      },
      {
        "text": "します"
      }
    ],
    "targetKanji": [
      "研",
      "究"
    ]
  },
  {
    "id": "w-l15-626",
    "lessonId": "l15",
    "lessonNumber": "Lección 15",
    "kanji": "知っています",
    "reading": "しっています",
    "romaji": "shitteimasu",
    "spanish": "saber, conocer",
    "segments": [
      {
        "text": "知",
        "furigana": "し"
      },
      {
        "text": "っています"
      }
    ],
    "targetKanji": [
      "知"
    ]
  },
  {
    "id": "w-l15-627",
    "lessonId": "l15",
    "lessonNumber": "Lección 15",
    "kanji": "住んでいます",
    "reading": "すんでいます",
    "romaji": "sundeimasu",
    "spanish": "vivir en",
    "segments": [
      {
        "text": "住",
        "furigana": "す"
      },
      {
        "text": "んでいます"
      }
    ],
    "targetKanji": [
      "住"
    ]
  },
  {
    "id": "w-l15-628",
    "lessonId": "l15",
    "lessonNumber": "Lección 15",
    "kanji": "資料",
    "reading": "しりょう",
    "romaji": "shiryou",
    "spanish": "materiales, datos",
    "segments": [
      {
        "text": "資",
        "furigana": "し"
      },
      {
        "text": "料",
        "furigana": "りょう"
      }
    ],
    "targetKanji": [
      "資",
      "料"
    ]
  },
  {
    "id": "w-l15-629",
    "lessonId": "l15",
    "lessonNumber": "Lección 15",
    "kanji": "カタログ",
    "reading": "カタログ",
    "romaji": "katarogu",
    "spanish": "catálogo",
    "segments": [
      {
        "text": "カタログ"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l15-630",
    "lessonId": "l15",
    "lessonNumber": "Lección 15",
    "kanji": "時刻表",
    "reading": "じこくひょう",
    "romaji": "jikokuhyou",
    "spanish": "horario de trenes/autobuses",
    "segments": [
      {
        "text": "時",
        "furigana": "じ"
      },
      {
        "text": "刻",
        "furigana": "こく"
      },
      {
        "text": "表",
        "furigana": "ひょう"
      }
    ],
    "targetKanji": [
      "時",
      "刻",
      "表"
    ]
  },
  {
    "id": "w-l15-631",
    "lessonId": "l15",
    "lessonNumber": "Lección 15",
    "kanji": "服",
    "reading": "ふく",
    "romaji": "fuku",
    "spanish": "ropa",
    "segments": [
      {
        "text": "服",
        "furigana": "ふく"
      }
    ],
    "targetKanji": [
      "服"
    ]
  },
  {
    "id": "w-l15-632",
    "lessonId": "l15",
    "lessonNumber": "Lección 15",
    "kanji": "製品",
    "reading": "せいひん",
    "romaji": "seihin",
    "spanish": "producto, artículo manufacturado",
    "segments": [
      {
        "text": "製",
        "furigana": "せい"
      },
      {
        "text": "品",
        "furigana": "ひん"
      }
    ],
    "targetKanji": [
      "製",
      "品"
    ]
  },
  {
    "id": "w-l15-633",
    "lessonId": "l15",
    "lessonNumber": "Lección 15",
    "kanji": "ソフト",
    "reading": "ソフト",
    "romaji": "sofuto",
    "spanish": "software",
    "segments": [
      {
        "text": "ソフト"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l15-634",
    "lessonId": "l15",
    "lessonNumber": "Lección 15",
    "kanji": "専門",
    "reading": "せんもん",
    "romaji": "senmon",
    "spanish": "especialidad",
    "segments": [
      {
        "text": "専",
        "furigana": "せん"
      },
      {
        "text": "門",
        "furigana": "もん"
      }
    ],
    "targetKanji": [
      "専",
      "門"
    ]
  },
  {
    "id": "w-l15-635",
    "lessonId": "l15",
    "lessonNumber": "Lección 15",
    "kanji": "歯医者",
    "reading": "はいしゃ",
    "romaji": "haisha",
    "spanish": "dentista",
    "segments": [
      {
        "text": "歯",
        "furigana": "は"
      },
      {
        "text": "医",
        "furigana": "い"
      },
      {
        "text": "者",
        "furigana": "しゃ"
      }
    ],
    "targetKanji": [
      "歯",
      "医",
      "者"
    ]
  },
  {
    "id": "w-l15-636",
    "lessonId": "l15",
    "lessonNumber": "Lección 15",
    "kanji": "床屋",
    "reading": "とこや",
    "romaji": "tokoya",
    "spanish": "barbería, peluquería",
    "segments": [
      {
        "text": "床",
        "furigana": "とこ"
      },
      {
        "text": "屋",
        "furigana": "や"
      }
    ],
    "targetKanji": [
      "床",
      "屋"
    ]
  },
  {
    "id": "w-l15-637",
    "lessonId": "l15",
    "lessonNumber": "Lección 15",
    "kanji": "独身",
    "reading": "どくしん",
    "romaji": "dokushin",
    "spanish": "soltero/a",
    "segments": [
      {
        "text": "独",
        "furigana": "どく"
      },
      {
        "text": "身",
        "furigana": "しん"
      }
    ],
    "targetKanji": [
      "独",
      "身"
    ]
  },
  {
    "id": "w-l15-638",
    "lessonId": "l15",
    "lessonNumber": "Lección 15",
    "kanji": "特に",
    "reading": "とくに",
    "romaji": "tokuni",
    "spanish": "especialmente, sobre todo",
    "segments": [
      {
        "text": "特",
        "furigana": "とく"
      },
      {
        "text": "に"
      }
    ],
    "targetKanji": [
      "特"
    ]
  },
  {
    "id": "w-l15-639",
    "lessonId": "l15",
    "lessonNumber": "Lección 15",
    "kanji": "思い出します",
    "reading": "おもいだします",
    "romaji": "omoidashimasu",
    "spanish": "recordar",
    "segments": [
      {
        "text": "思",
        "furigana": "おも"
      },
      {
        "text": "い"
      },
      {
        "text": "出",
        "furigana": "だ"
      },
      {
        "text": "します"
      }
    ],
    "targetKanji": [
      "思",
      "出"
    ]
  },
  {
    "id": "w-l15-640",
    "lessonId": "l15",
    "lessonNumber": "Lección 15",
    "kanji": "ご家族",
    "reading": "ごかぞく",
    "romaji": "gokazoku",
    "spanish": "la familia (de otra persona)",
    "segments": [
      {
        "text": "ご"
      },
      {
        "text": "家",
        "furigana": "か"
      },
      {
        "text": "族",
        "furigana": "ぞく"
      }
    ],
    "targetKanji": [
      "家",
      "族"
    ]
  },
  {
    "id": "w-l15-641",
    "lessonId": "l15",
    "lessonNumber": "Lección 15",
    "kanji": "高校",
    "reading": "こうこう",
    "romaji": "koukou",
    "spanish": "escuela secundaria superior, bachillerato",
    "segments": [
      {
        "text": "高",
        "furigana": "こう"
      },
      {
        "text": "校",
        "furigana": "こう"
      }
    ],
    "targetKanji": [
      "高",
      "校"
    ]
  },
  {
    "id": "w-l16-642",
    "lessonId": "l16",
    "lessonNumber": "Lección 16",
    "kanji": "乗ります",
    "reading": "のります",
    "romaji": "norimasu",
    "spanish": "subir, montar (en tren, autobús)",
    "segments": [
      {
        "text": "乗",
        "furigana": "の"
      },
      {
        "text": "ります"
      }
    ],
    "targetKanji": [
      "乗"
    ]
  },
  {
    "id": "w-l16-643",
    "lessonId": "l16",
    "lessonNumber": "Lección 16",
    "kanji": "降ります",
    "reading": "おります",
    "romaji": "orimasu",
    "spanish": "bajar (del tren, autobús)",
    "segments": [
      {
        "text": "降",
        "furigana": "お"
      },
      {
        "text": "ります"
      }
    ],
    "targetKanji": [
      "降"
    ]
  },
  {
    "id": "w-l16-644",
    "lessonId": "l16",
    "lessonNumber": "Lección 16",
    "kanji": "乗り換えます",
    "reading": "のりかえます",
    "romaji": "norikaemasu",
    "spanish": "hacer transbordo",
    "segments": [
      {
        "text": "乗",
        "furigana": "の"
      },
      {
        "text": "り"
      },
      {
        "text": "換",
        "furigana": "か"
      },
      {
        "text": "えます"
      }
    ],
    "targetKanji": [
      "乗",
      "換"
    ]
  },
  {
    "id": "w-l16-645",
    "lessonId": "l16",
    "lessonNumber": "Lección 16",
    "kanji": "浴びます",
    "reading": "あびます",
    "romaji": "abimasu",
    "spanish": "tomar (una ducha)",
    "segments": [
      {
        "text": "浴",
        "furigana": "あ"
      },
      {
        "text": "びます"
      }
    ],
    "targetKanji": [
      "浴"
    ]
  },
  {
    "id": "w-l16-646",
    "lessonId": "l16",
    "lessonNumber": "Lección 16",
    "kanji": "入れます",
    "reading": "いれます",
    "romaji": "iremasu",
    "spanish": "meter, introducir",
    "segments": [
      {
        "text": "入",
        "furigana": "い"
      },
      {
        "text": "れます"
      }
    ],
    "targetKanji": [
      "入"
    ]
  },
  {
    "id": "w-l16-647",
    "lessonId": "l16",
    "lessonNumber": "Lección 16",
    "kanji": "出します",
    "reading": "だします",
    "romaji": "dashimasu",
    "spanish": "sacar, entregar",
    "segments": [
      {
        "text": "出",
        "furigana": "だ"
      },
      {
        "text": "します"
      }
    ],
    "targetKanji": [
      "出"
    ]
  },
  {
    "id": "w-l16-648",
    "lessonId": "l16",
    "lessonNumber": "Lección 16",
    "kanji": "下ろします",
    "reading": "おろします",
    "romaji": "oroshimasu",
    "spanish": "retirar (dinero del banco)",
    "segments": [
      {
        "text": "下",
        "furigana": "お"
      },
      {
        "text": "ろします"
      }
    ],
    "targetKanji": [
      "下"
    ]
  },
  {
    "id": "w-l16-649",
    "lessonId": "l16",
    "lessonNumber": "Lección 16",
    "kanji": "入ります",
    "reading": "はいります",
    "romaji": "hairimasu",
    "spanish": "ingresar, entrar (universidad)",
    "segments": [
      {
        "text": "入",
        "furigana": "はい"
      },
      {
        "text": "ります"
      }
    ],
    "targetKanji": [
      "入"
    ]
  },
  {
    "id": "w-l16-650",
    "lessonId": "l16",
    "lessonNumber": "Lección 16",
    "kanji": "出ます",
    "reading": "でます",
    "romaji": "demasu",
    "spanish": "graduarse (de la universidad)",
    "segments": [
      {
        "text": "出",
        "furigana": "で"
      },
      {
        "text": "ます"
      }
    ],
    "targetKanji": [
      "出"
    ]
  },
  {
    "id": "w-l16-651",
    "lessonId": "l16",
    "lessonNumber": "Lección 16",
    "kanji": "押します",
    "reading": "おします",
    "romaji": "oshimasu",
    "spanish": "empujar, presionar (un botón)",
    "segments": [
      {
        "text": "押",
        "furigana": "お"
      },
      {
        "text": "します"
      }
    ],
    "targetKanji": [
      "押"
    ]
  },
  {
    "id": "w-l16-652",
    "lessonId": "l16",
    "lessonNumber": "Lección 16",
    "kanji": "始めます",
    "reading": "はじめます",
    "romaji": "hajimemasu",
    "spanish": "comenzar, empezar",
    "segments": [
      {
        "text": "始",
        "furigana": "はじ"
      },
      {
        "text": "めます"
      }
    ],
    "targetKanji": [
      "始"
    ]
  },
  {
    "id": "w-l16-653",
    "lessonId": "l16",
    "lessonNumber": "Lección 16",
    "kanji": "見学します",
    "reading": "けんがくします",
    "romaji": "kengakushimasu",
    "spanish": "visitar con fines de estudio",
    "segments": [
      {
        "text": "見",
        "furigana": "けん"
      },
      {
        "text": "学",
        "furigana": "がく"
      },
      {
        "text": "します"
      }
    ],
    "targetKanji": [
      "見",
      "学"
    ]
  },
  {
    "id": "w-l16-654",
    "lessonId": "l16",
    "lessonNumber": "Lección 16",
    "kanji": "若い",
    "reading": "わかい",
    "romaji": "wakai",
    "spanish": "joven",
    "segments": [
      {
        "text": "若",
        "furigana": "わか"
      },
      {
        "text": "い"
      }
    ],
    "targetKanji": [
      "若"
    ]
  },
  {
    "id": "w-l16-655",
    "lessonId": "l16",
    "lessonNumber": "Lección 16",
    "kanji": "長い",
    "reading": "ながい",
    "romaji": "nagai",
    "spanish": "largo",
    "segments": [
      {
        "text": "長",
        "furigana": "なが"
      },
      {
        "text": "い"
      }
    ],
    "targetKanji": [
      "長"
    ]
  },
  {
    "id": "w-l16-656",
    "lessonId": "l16",
    "lessonNumber": "Lección 16",
    "kanji": "短い",
    "reading": "みじかい",
    "romaji": "mijikai",
    "spanish": "corto",
    "segments": [
      {
        "text": "短",
        "furigana": "みじか"
      },
      {
        "text": "い"
      }
    ],
    "targetKanji": [
      "短"
    ]
  },
  {
    "id": "w-l16-657",
    "lessonId": "l16",
    "lessonNumber": "Lección 16",
    "kanji": "明るい",
    "reading": "あかるい",
    "romaji": "akarui",
    "spanish": "brillante, luminoso, alegre",
    "segments": [
      {
        "text": "明",
        "furigana": "あか"
      },
      {
        "text": "るい"
      }
    ],
    "targetKanji": [
      "明"
    ]
  },
  {
    "id": "w-l16-658",
    "lessonId": "l16",
    "lessonNumber": "Lección 16",
    "kanji": "暗い",
    "reading": "くらい",
    "romaji": "kurai",
    "spanish": "oscuro",
    "segments": [
      {
        "text": "暗",
        "furigana": "くら"
      },
      {
        "text": "い"
      }
    ],
    "targetKanji": [
      "暗"
    ]
  },
  {
    "id": "w-l16-659",
    "lessonId": "l16",
    "lessonNumber": "Lección 16",
    "kanji": "背が高い",
    "reading": "せがたかい",
    "romaji": "se ga takai",
    "spanish": "alto de estatura",
    "segments": [
      {
        "text": "背",
        "furigana": "せ"
      },
      {
        "text": "が"
      },
      {
        "text": "高",
        "furigana": "たか"
      },
      {
        "text": "い"
      }
    ],
    "targetKanji": [
      "背",
      "高"
    ]
  },
  {
    "id": "w-l16-660",
    "lessonId": "l16",
    "lessonNumber": "Lección 16",
    "kanji": "頭がいい",
    "reading": "あたまがいい",
    "romaji": "atama ga ii",
    "spanish": "inteligente",
    "segments": [
      {
        "text": "頭",
        "furigana": "あたま"
      },
      {
        "text": "がいい"
      }
    ],
    "targetKanji": [
      "頭"
    ]
  },
  {
    "id": "w-l16-661",
    "lessonId": "l16",
    "lessonNumber": "Lección 16",
    "kanji": "体",
    "reading": "からだ",
    "romaji": "karada",
    "spanish": "cuerpo",
    "segments": [
      {
        "text": "体",
        "furigana": "からだ"
      }
    ],
    "targetKanji": [
      "体"
    ]
  },
  {
    "id": "w-l16-662",
    "lessonId": "l16",
    "lessonNumber": "Lección 16",
    "kanji": "頭",
    "reading": "あたま",
    "romaji": "atama",
    "spanish": "cabeza",
    "segments": [
      {
        "text": "頭",
        "furigana": "あたま"
      }
    ],
    "targetKanji": [
      "頭"
    ]
  },
  {
    "id": "w-l16-663",
    "lessonId": "l16",
    "lessonNumber": "Lección 16",
    "kanji": "顔",
    "reading": "かお",
    "romaji": "kao",
    "spanish": "cara, rostro",
    "segments": [
      {
        "text": "顔",
        "furigana": "かお"
      }
    ],
    "targetKanji": [
      "顔"
    ]
  },
  {
    "id": "w-l16-664",
    "lessonId": "l16",
    "lessonNumber": "Lección 16",
    "kanji": "目",
    "reading": "め",
    "romaji": "me",
    "spanish": "ojo",
    "segments": [
      {
        "text": "目",
        "furigana": "め"
      }
    ],
    "targetKanji": [
      "目"
    ]
  },
  {
    "id": "w-l16-665",
    "lessonId": "l16",
    "lessonNumber": "Lección 16",
    "kanji": "耳",
    "reading": "みみ",
    "romaji": "mimi",
    "spanish": "oreja, oído",
    "segments": [
      {
        "text": "耳",
        "furigana": "みみ"
      }
    ],
    "targetKanji": [
      "耳"
    ]
  },
  {
    "id": "w-l16-666",
    "lessonId": "l16",
    "lessonNumber": "Lección 16",
    "kanji": "鼻",
    "reading": "はな",
    "romaji": "hana",
    "spanish": "nariz",
    "segments": [
      {
        "text": "鼻",
        "furigana": "はな"
      }
    ],
    "targetKanji": [
      "鼻"
    ]
  },
  {
    "id": "w-l16-667",
    "lessonId": "l16",
    "lessonNumber": "Lección 16",
    "kanji": "口",
    "reading": "くち",
    "romaji": "kuchi",
    "spanish": "boca",
    "segments": [
      {
        "text": "口",
        "furigana": "くち"
      }
    ],
    "targetKanji": [
      "口"
    ]
  },
  {
    "id": "w-l16-668",
    "lessonId": "l16",
    "lessonNumber": "Lección 16",
    "kanji": "歯",
    "reading": "は",
    "romaji": "ha",
    "spanish": "diente",
    "segments": [
      {
        "text": "歯",
        "furigana": "は"
      }
    ],
    "targetKanji": [
      "歯"
    ]
  },
  {
    "id": "w-l16-669",
    "lessonId": "l16",
    "lessonNumber": "Lección 16",
    "kanji": "おなか",
    "reading": "おなか",
    "romaji": "onaka",
    "spanish": "barriga, estómago",
    "segments": [
      {
        "text": "おなか"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l16-670",
    "lessonId": "l16",
    "lessonNumber": "Lección 16",
    "kanji": "足",
    "reading": "あし",
    "romaji": "ashi",
    "spanish": "pie, pierna",
    "segments": [
      {
        "text": "足",
        "furigana": "あし"
      }
    ],
    "targetKanji": [
      "足"
    ]
  },
  {
    "id": "w-l16-671",
    "lessonId": "l16",
    "lessonNumber": "Lección 16",
    "kanji": "シャワー",
    "reading": "シャワー",
    "romaji": "shawaa",
    "spanish": "ducha",
    "segments": [
      {
        "text": "シャワー"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l16-672",
    "lessonId": "l16",
    "lessonNumber": "Lección 16",
    "kanji": "緑",
    "reading": "みどり",
    "romaji": "midori",
    "spanish": "verde, vegetación",
    "segments": [
      {
        "text": "緑",
        "furigana": "みどり"
      }
    ],
    "targetKanji": [
      "緑"
    ]
  },
  {
    "id": "w-l16-673",
    "lessonId": "l16",
    "lessonNumber": "Lección 16",
    "kanji": "お寺",
    "reading": "おてら",
    "romaji": "otera",
    "spanish": "templo budista",
    "segments": [
      {
        "text": "お"
      },
      {
        "text": "寺",
        "furigana": "てら"
      }
    ],
    "targetKanji": [
      "寺"
    ]
  },
  {
    "id": "w-l16-674",
    "lessonId": "l16",
    "lessonNumber": "Lección 16",
    "kanji": "神社",
    "reading": "じんじゃ",
    "romaji": "jinja",
    "spanish": "santuario sintoísta",
    "segments": [
      {
        "text": "神",
        "furigana": "じん"
      },
      {
        "text": "社",
        "furigana": "じゃ"
      }
    ],
    "targetKanji": [
      "神",
      "社"
    ]
  },
  {
    "id": "w-l16-675",
    "lessonId": "l16",
    "lessonNumber": "Lección 16",
    "kanji": "～番",
    "reading": "～ばん",
    "romaji": "~ban",
    "spanish": "número ~",
    "segments": [
      {
        "text": "～"
      },
      {
        "text": "番",
        "furigana": "ばん"
      }
    ],
    "targetKanji": [
      "番"
    ]
  },
  {
    "id": "w-l16-676",
    "lessonId": "l16",
    "lessonNumber": "Lección 16",
    "kanji": "どうやって",
    "reading": "どうやって",
    "romaji": "dou yatte",
    "spanish": "de qué manera, cómo",
    "segments": [
      {
        "text": "どうやって"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l16-677",
    "lessonId": "l16",
    "lessonNumber": "Lección 16",
    "kanji": "キャッシュカード",
    "reading": "キャッシュカード",
    "romaji": "kyasshukaado",
    "spanish": "tarjeta bancaria",
    "segments": [
      {
        "text": "キャッシュカード"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l16-678",
    "lessonId": "l16",
    "lessonNumber": "Lección 16",
    "kanji": "暗証番号",
    "reading": "あんしょうばんごう",
    "romaji": "anshoubangou",
    "spanish": "número PIN o clave secreta",
    "segments": [
      {
        "text": "暗",
        "furigana": "あん"
      },
      {
        "text": "証",
        "furigana": "しょう"
      },
      {
        "text": "番",
        "furigana": "ばん"
      },
      {
        "text": "号",
        "furigana": "ごう"
      }
    ],
    "targetKanji": [
      "暗",
      "証",
      "番",
      "号"
    ]
  },
  {
    "id": "w-l16-679",
    "lessonId": "l16",
    "lessonNumber": "Lección 16",
    "kanji": "金額",
    "reading": "きんがく",
    "romaji": "kingaku",
    "spanish": "importe, cantidad de dinero",
    "segments": [
      {
        "text": "金",
        "furigana": "きん"
      },
      {
        "text": "額",
        "furigana": "がく"
      }
    ],
    "targetKanji": [
      "金",
      "額"
    ]
  },
  {
    "id": "w-l16-680",
    "lessonId": "l16",
    "lessonNumber": "Lección 16",
    "kanji": "確認",
    "reading": "かくにん",
    "romaji": "kakunin",
    "spanish": "confirmación",
    "segments": [
      {
        "text": "確",
        "furigana": "かく"
      },
      {
        "text": "認",
        "furigana": "にん"
      }
    ],
    "targetKanji": [
      "確",
      "認"
    ]
  },
  {
    "id": "w-l16-681",
    "lessonId": "l16",
    "lessonNumber": "Lección 16",
    "kanji": "ボタン",
    "reading": "ボタン",
    "romaji": "botan",
    "spanish": "botón",
    "segments": [
      {
        "text": "ボタン"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l17-682",
    "lessonId": "l17",
    "lessonNumber": "Lección 17",
    "kanji": "覚えます",
    "reading": "おぼえます",
    "romaji": "oboemasu",
    "spanish": "memorizar, recordar",
    "segments": [
      {
        "text": "覚",
        "furigana": "おぼ"
      },
      {
        "text": "えます"
      }
    ],
    "targetKanji": [
      "覚"
    ]
  },
  {
    "id": "w-l17-683",
    "lessonId": "l17",
    "lessonNumber": "Lección 17",
    "kanji": "忘れます",
    "reading": "わすれます",
    "romaji": "wasuremasu",
    "spanish": "olvidar",
    "segments": [
      {
        "text": "忘",
        "furigana": "わす"
      },
      {
        "text": "れます"
      }
    ],
    "targetKanji": [
      "忘"
    ]
  },
  {
    "id": "w-l17-684",
    "lessonId": "l17",
    "lessonNumber": "Lección 17",
    "kanji": "なくします",
    "reading": "なくします",
    "romaji": "nakushimasu",
    "spanish": "perder (algo)",
    "segments": [
      {
        "text": "なくします"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l17-685",
    "lessonId": "l17",
    "lessonNumber": "Lección 17",
    "kanji": "払います",
    "reading": "はらいます",
    "romaji": "haraimasu",
    "spanish": "pagar",
    "segments": [
      {
        "text": "払",
        "furigana": "はら"
      },
      {
        "text": "います"
      }
    ],
    "targetKanji": [
      "払"
    ]
  },
  {
    "id": "w-l17-686",
    "lessonId": "l17",
    "lessonNumber": "Lección 17",
    "kanji": "返します",
    "reading": "かえします",
    "romaji": "kaeshimasu",
    "spanish": "devolver",
    "segments": [
      {
        "text": "返",
        "furigana": "かえ"
      },
      {
        "text": "します"
      }
    ],
    "targetKanji": [
      "返"
    ]
  },
  {
    "id": "w-l17-687",
    "lessonId": "l17",
    "lessonNumber": "Lección 17",
    "kanji": "出かけます",
    "reading": "でかけます",
    "romaji": "dekakemasu",
    "spanish": "salir de casa",
    "segments": [
      {
        "text": "出",
        "furigana": "で"
      },
      {
        "text": "かけます"
      }
    ],
    "targetKanji": [
      "出"
    ]
  },
  {
    "id": "w-l17-688",
    "lessonId": "l17",
    "lessonNumber": "Lección 17",
    "kanji": "脱ぎます",
    "reading": "ぬぎます",
    "romaji": "nugimasu",
    "spanish": "quitarse (ropa, calzado)",
    "segments": [
      {
        "text": "脱",
        "furigana": "ぬ"
      },
      {
        "text": "ぎます"
      }
    ],
    "targetKanji": [
      "脱"
    ]
  },
  {
    "id": "w-l17-689",
    "lessonId": "l17",
    "lessonNumber": "Lección 17",
    "kanji": "持って行きます",
    "reading": "もっていきます",
    "romaji": "motte ikimasu",
    "spanish": "llevar (algo consigo)",
    "segments": [
      {
        "text": "持",
        "furigana": "も"
      },
      {
        "text": "って"
      },
      {
        "text": "行",
        "furigana": "い"
      },
      {
        "text": "きます"
      }
    ],
    "targetKanji": [
      "持",
      "行"
    ]
  },
  {
    "id": "w-l17-690",
    "lessonId": "l17",
    "lessonNumber": "Lección 17",
    "kanji": "持って来ます",
    "reading": "もってきます",
    "romaji": "motte kimasu",
    "spanish": "traer (algo)",
    "segments": [
      {
        "text": "持",
        "furigana": "も"
      },
      {
        "text": "って"
      },
      {
        "text": "来",
        "furigana": "き"
      },
      {
        "text": "ます"
      }
    ],
    "targetKanji": [
      "持",
      "来"
    ]
  },
  {
    "id": "w-l17-691",
    "lessonId": "l17",
    "lessonNumber": "Lección 17",
    "kanji": "心配します",
    "reading": "しんぱいします",
    "romaji": "shinpaishimasu",
    "spanish": "preocuparse",
    "segments": [
      {
        "text": "心",
        "furigana": "しん"
      },
      {
        "text": "配",
        "furigana": "ぱい"
      },
      {
        "text": "します"
      }
    ],
    "targetKanji": [
      "心",
      "配"
    ]
  },
  {
    "id": "w-l17-692",
    "lessonId": "l17",
    "lessonNumber": "Lección 17",
    "kanji": "残業します",
    "reading": "ざんぎょうします",
    "romaji": "zangyoushimasu",
    "spanish": "hacer horas extras",
    "segments": [
      {
        "text": "残",
        "furigana": "ざん"
      },
      {
        "text": "業",
        "furigana": "ぎょう"
      },
      {
        "text": "します"
      }
    ],
    "targetKanji": [
      "残",
      "業"
    ]
  },
  {
    "id": "w-l17-693",
    "lessonId": "l17",
    "lessonNumber": "Lección 17",
    "kanji": "出張します",
    "reading": "しゅっちょうします",
    "romaji": "shucchoushimasu",
    "spanish": "ir de viaje de negocios",
    "segments": [
      {
        "text": "出",
        "furigana": "しゅっ"
      },
      {
        "text": "張",
        "furigana": "ちょう"
      },
      {
        "text": "します"
      }
    ],
    "targetKanji": [
      "出",
      "張"
    ]
  },
  {
    "id": "w-l17-694",
    "lessonId": "l17",
    "lessonNumber": "Lección 17",
    "kanji": "大切［な］",
    "reading": "たいせつ［な］",
    "romaji": "taisetsu [na]",
    "spanish": "importante, valioso",
    "segments": [
      {
        "text": "大",
        "furigana": "たい"
      },
      {
        "text": "切",
        "furigana": "せつ"
      },
      {
        "text": "［な］"
      }
    ],
    "targetKanji": [
      "大",
      "切"
    ]
  },
  {
    "id": "w-l17-695",
    "lessonId": "l17",
    "lessonNumber": "Lección 17",
    "kanji": "大丈夫［な］",
    "reading": "だいじょうぶ［な］",
    "romaji": "daijoubu [na]",
    "spanish": "estar bien, no haber problema",
    "segments": [
      {
        "text": "大",
        "furigana": "だい"
      },
      {
        "text": "丈",
        "furigana": "じょう"
      },
      {
        "text": "夫",
        "furigana": "ぶ"
      },
      {
        "text": "［な］"
      }
    ],
    "targetKanji": [
      "大",
      "丈",
      "夫"
    ]
  },
  {
    "id": "w-l17-696",
    "lessonId": "l17",
    "lessonNumber": "Lección 17",
    "kanji": "危ない",
    "reading": "あぶない",
    "romaji": "abunai",
    "spanish": "peligroso",
    "segments": [
      {
        "text": "危",
        "furigana": "あぶ"
      },
      {
        "text": "ない"
      }
    ],
    "targetKanji": [
      "危"
    ]
  },
  {
    "id": "w-l17-697",
    "lessonId": "l17",
    "lessonNumber": "Lección 17",
    "kanji": "禁煙",
    "reading": "きんえん",
    "romaji": "kin'en",
    "spanish": "prohibido fumar",
    "segments": [
      {
        "text": "禁",
        "furigana": "きん"
      },
      {
        "text": "煙",
        "furigana": "えん"
      }
    ],
    "targetKanji": [
      "禁",
      "煙"
    ]
  },
  {
    "id": "w-l17-698",
    "lessonId": "l17",
    "lessonNumber": "Lección 17",
    "kanji": "保険証",
    "reading": "ほけんしょう",
    "romaji": "hokenshou",
    "spanish": "tarjeta de seguro de salud",
    "segments": [
      {
        "text": "保",
        "furigana": "ほ"
      },
      {
        "text": "険",
        "furigana": "けん"
      },
      {
        "text": "証",
        "furigana": "しょう"
      }
    ],
    "targetKanji": [
      "保",
      "険",
      "証"
    ]
  },
  {
    "id": "w-l17-699",
    "lessonId": "l17",
    "lessonNumber": "Lección 17",
    "kanji": "熱",
    "reading": "ねつ",
    "romaji": "netsu",
    "spanish": "fiebre",
    "segments": [
      {
        "text": "熱",
        "furigana": "ねつ"
      }
    ],
    "targetKanji": [
      "熱"
    ]
  },
  {
    "id": "w-l17-700",
    "lessonId": "l17",
    "lessonNumber": "Lección 17",
    "kanji": "病気",
    "reading": "びょうき",
    "romaji": "byouki",
    "spanish": "enfermedad",
    "segments": [
      {
        "text": "病",
        "furigana": "びょう"
      },
      {
        "text": "気",
        "furigana": "き"
      }
    ],
    "targetKanji": [
      "病",
      "気"
    ]
  },
  {
    "id": "w-l17-701",
    "lessonId": "l17",
    "lessonNumber": "Lección 17",
    "kanji": "薬",
    "reading": "くすり",
    "romaji": "kusuri",
    "spanish": "medicina, medicamento",
    "segments": [
      {
        "text": "薬",
        "furigana": "くすり"
      }
    ],
    "targetKanji": [
      "薬"
    ]
  },
  {
    "id": "w-l17-702",
    "lessonId": "l17",
    "lessonNumber": "Lección 17",
    "kanji": "お風呂",
    "reading": "おふろ",
    "romaji": "ofuro",
    "spanish": "bañera, baño caliente",
    "segments": [
      {
        "text": "お"
      },
      {
        "text": "風",
        "furigana": "ふ"
      },
      {
        "text": "呂",
        "furigana": "ろ"
      }
    ],
    "targetKanji": [
      "風",
      "呂"
    ]
  },
  {
    "id": "w-l17-703",
    "lessonId": "l17",
    "lessonNumber": "Lección 17",
    "kanji": "上着",
    "reading": "うわぎ",
    "romaji": "uwagi",
    "spanish": "chaqueta, prenda exterior",
    "segments": [
      {
        "text": "上",
        "furigana": "うわ"
      },
      {
        "text": "着",
        "furigana": "ぎ"
      }
    ],
    "targetKanji": [
      "上",
      "着"
    ]
  },
  {
    "id": "w-l17-704",
    "lessonId": "l17",
    "lessonNumber": "Lección 17",
    "kanji": "下着",
    "reading": "したぎ",
    "romaji": "shitagi",
    "spanish": "ropa interior",
    "segments": [
      {
        "text": "下",
        "furigana": "した"
      },
      {
        "text": "着",
        "furigana": "ぎ"
      }
    ],
    "targetKanji": [
      "下",
      "着"
    ]
  },
  {
    "id": "w-l17-705",
    "lessonId": "l17",
    "lessonNumber": "Lección 17",
    "kanji": "～までに",
    "reading": "～までに",
    "romaji": "~madeni",
    "spanish": "a más tardar ~, antes de ~",
    "segments": [
      {
        "text": "～までに"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l17-706",
    "lessonId": "l17",
    "lessonNumber": "Lección 17",
    "kanji": "ですから",
    "reading": "ですから",
    "romaji": "desukara",
    "spanish": "por eso, por tanto",
    "segments": [
      {
        "text": "ですから"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l17-707",
    "lessonId": "l17",
    "lessonNumber": "Lección 17",
    "kanji": "かぜ",
    "reading": "かぜ",
    "romaji": "kaze",
    "spanish": "resfriado",
    "segments": [
      {
        "text": "かぜ"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l17-708",
    "lessonId": "l17",
    "lessonNumber": "Lección 17",
    "kanji": "お大事に",
    "reading": "おだいじに",
    "romaji": "odaijini",
    "spanish": "¡que te mejores!",
    "segments": [
      {
        "text": "お"
      },
      {
        "text": "大",
        "furigana": "だい"
      },
      {
        "text": "事",
        "furigana": "じ"
      },
      {
        "text": "に"
      }
    ],
    "targetKanji": [
      "大",
      "事"
    ]
  },
  {
    "id": "w-l18-709",
    "lessonId": "l18",
    "lessonNumber": "Lección 18",
    "kanji": "できます",
    "reading": "できます",
    "romaji": "dekimasu",
    "spanish": "poder, ser capaz de",
    "segments": [
      {
        "text": "できます"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l18-710",
    "lessonId": "l18",
    "lessonNumber": "Lección 18",
    "kanji": "洗います",
    "reading": "あらいます",
    "romaji": "araimasu",
    "spanish": "lavar",
    "segments": [
      {
        "text": "洗",
        "furigana": "あら"
      },
      {
        "text": "います"
      }
    ],
    "targetKanji": [
      "洗"
    ]
  },
  {
    "id": "w-l18-711",
    "lessonId": "l18",
    "lessonNumber": "Lección 18",
    "kanji": "弾きます",
    "reading": "ひきます",
    "romaji": "hikimasu",
    "spanish": "tocar (instrumento de cuerda/tecla)",
    "segments": [
      {
        "text": "弾",
        "furigana": "ひ"
      },
      {
        "text": "きます"
      }
    ],
    "targetKanji": [
      "弾"
    ]
  },
  {
    "id": "w-l18-712",
    "lessonId": "l18",
    "lessonNumber": "Lección 18",
    "kanji": "歌います",
    "reading": "うたいます",
    "romaji": "utaimasu",
    "spanish": "cantar",
    "segments": [
      {
        "text": "歌",
        "furigana": "うた"
      },
      {
        "text": "います"
      }
    ],
    "targetKanji": [
      "歌"
    ]
  },
  {
    "id": "w-l18-713",
    "lessonId": "l18",
    "lessonNumber": "Lección 18",
    "kanji": "集めます",
    "reading": "あつめます",
    "romaji": "atsumemasu",
    "spanish": "coleccionar, reunir",
    "segments": [
      {
        "text": "集",
        "furigana": "あつ"
      },
      {
        "text": "めます"
      }
    ],
    "targetKanji": [
      "集"
    ]
  },
  {
    "id": "w-l18-714",
    "lessonId": "l18",
    "lessonNumber": "Lección 18",
    "kanji": "捨てます",
    "reading": "すてます",
    "romaji": "sutemasu",
    "spanish": "tirar, botar (basura)",
    "segments": [
      {
        "text": "捨",
        "furigana": "す"
      },
      {
        "text": "てます"
      }
    ],
    "targetKanji": [
      "捨"
    ]
  },
  {
    "id": "w-l18-715",
    "lessonId": "l18",
    "lessonNumber": "Lección 18",
    "kanji": "換えます",
    "reading": "かえます",
    "romaji": "kaemasu",
    "spanish": "cambiar, canjear",
    "segments": [
      {
        "text": "換",
        "furigana": "か"
      },
      {
        "text": "えます"
      }
    ],
    "targetKanji": [
      "換"
    ]
  },
  {
    "id": "w-l18-716",
    "lessonId": "l18",
    "lessonNumber": "Lección 18",
    "kanji": "運転します",
    "reading": "うんてんします",
    "romaji": "untenshimasu",
    "spanish": "conducir, manejar",
    "segments": [
      {
        "text": "運",
        "furigana": "うん"
      },
      {
        "text": "転",
        "furigana": "てん"
      },
      {
        "text": "します"
      }
    ],
    "targetKanji": [
      "運",
      "転"
    ]
  },
  {
    "id": "w-l18-717",
    "lessonId": "l18",
    "lessonNumber": "Lección 18",
    "kanji": "予約します",
    "reading": "よやくします",
    "romaji": "yoyakushimasu",
    "spanish": "reservar",
    "segments": [
      {
        "text": "予",
        "furigana": "よ"
      },
      {
        "text": "約",
        "furigana": "やく"
      },
      {
        "text": "します"
      }
    ],
    "targetKanji": [
      "予",
      "約"
    ]
  },
  {
    "id": "w-l18-718",
    "lessonId": "l18",
    "lessonNumber": "Lección 18",
    "kanji": "ピアノ",
    "reading": "ピアノ",
    "romaji": "piano",
    "spanish": "piano",
    "segments": [
      {
        "text": "ピアノ"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l18-719",
    "lessonId": "l18",
    "lessonNumber": "Lección 18",
    "kanji": "メートル",
    "reading": "メートル",
    "romaji": "meetoru",
    "spanish": "metro (unidad de longitud)",
    "segments": [
      {
        "text": "メートル"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l18-720",
    "lessonId": "l18",
    "lessonNumber": "Lección 18",
    "kanji": "現金",
    "reading": "げんきん",
    "romaji": "genkin",
    "spanish": "dinero en efectivo",
    "segments": [
      {
        "text": "現",
        "furigana": "げん"
      },
      {
        "text": "金",
        "furigana": "きん"
      }
    ],
    "targetKanji": [
      "現",
      "金"
    ]
  },
  {
    "id": "w-l18-721",
    "lessonId": "l18",
    "lessonNumber": "Lección 18",
    "kanji": "趣味",
    "reading": "しゅみ",
    "romaji": "shumi",
    "spanish": "afición, pasatiempo",
    "segments": [
      {
        "text": "趣味",
        "furigana": "しゅみ"
      }
    ],
    "targetKanji": [
      "趣",
      "味"
    ]
  },
  {
    "id": "w-l18-722",
    "lessonId": "l18",
    "lessonNumber": "Lección 18",
    "kanji": "日記",
    "reading": "にっき",
    "romaji": "nikki",
    "spanish": "diario personal",
    "segments": [
      {
        "text": "日",
        "furigana": "にっ"
      },
      {
        "text": "記",
        "furigana": "き"
      }
    ],
    "targetKanji": [
      "日",
      "記"
    ]
  },
  {
    "id": "w-l18-723",
    "lessonId": "l18",
    "lessonNumber": "Lección 18",
    "kanji": "お祈り",
    "reading": "おいのり",
    "romaji": "oinori",
    "spanish": "oración, rezo",
    "segments": [
      {
        "text": "お"
      },
      {
        "text": "祈",
        "furigana": "いの"
      },
      {
        "text": "り"
      }
    ],
    "targetKanji": [
      "祈"
    ]
  },
  {
    "id": "w-l18-724",
    "lessonId": "l18",
    "lessonNumber": "Lección 18",
    "kanji": "課長",
    "reading": "かちょう",
    "romaji": "kachou",
    "spanish": "jefe de sección",
    "segments": [
      {
        "text": "課",
        "furigana": "か"
      },
      {
        "text": "長",
        "furigana": "ちょう"
      }
    ],
    "targetKanji": [
      "課",
      "長"
    ]
  },
  {
    "id": "w-l18-725",
    "lessonId": "l18",
    "lessonNumber": "Lección 18",
    "kanji": "部長",
    "reading": "ぶちょう",
    "romaji": "buchou",
    "spanish": "director de departamento",
    "segments": [
      {
        "text": "部",
        "furigana": "ぶ"
      },
      {
        "text": "長",
        "furigana": "ちょう"
      }
    ],
    "targetKanji": [
      "部",
      "長"
    ]
  },
  {
    "id": "w-l18-726",
    "lessonId": "l18",
    "lessonNumber": "Lección 18",
    "kanji": "社長",
    "reading": "しゃちょう",
    "romaji": "shachou",
    "spanish": "presidente de la empresa",
    "segments": [
      {
        "text": "社",
        "furigana": "しゃ"
      },
      {
        "text": "長",
        "furigana": "ちょう"
      }
    ],
    "targetKanji": [
      "社",
      "長"
    ]
  },
  {
    "id": "w-l18-727",
    "lessonId": "l18",
    "lessonNumber": "Lección 18",
    "kanji": "動物",
    "reading": "どうぶつ",
    "romaji": "doubutsu",
    "spanish": "animal",
    "segments": [
      {
        "text": "動",
        "furigana": "どう"
      },
      {
        "text": "物",
        "furigana": "ぶつ"
      }
    ],
    "targetKanji": [
      "動",
      "物"
    ]
  },
  {
    "id": "w-l18-728",
    "lessonId": "l18",
    "lessonNumber": "Lección 18",
    "kanji": "馬",
    "reading": "うま",
    "romaji": "uma",
    "spanish": "caballo",
    "segments": [
      {
        "text": "馬",
        "furigana": "うま"
      }
    ],
    "targetKanji": [
      "馬"
    ]
  },
  {
    "id": "w-l18-729",
    "lessonId": "l18",
    "lessonNumber": "Lección 18",
    "kanji": "インターネット",
    "reading": "インターネット",
    "romaji": "intaanetto",
    "spanish": "internet",
    "segments": [
      {
        "text": "インターネット"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l18-730",
    "lessonId": "l18",
    "lessonNumber": "Lección 18",
    "kanji": "ぜひ",
    "reading": "ぜひ",
    "romaji": "zehi",
    "spanish": "sin falta, por todos los medios",
    "segments": [
      {
        "text": "ぜひ"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l19-731",
    "lessonId": "l19",
    "lessonNumber": "Lección 19",
    "kanji": "登ります",
    "reading": "のぼります",
    "romaji": "noborimasu",
    "spanish": "escalar, subir (una montaña)",
    "segments": [
      {
        "text": "登",
        "furigana": "のぼ"
      },
      {
        "text": "ります"
      }
    ],
    "targetKanji": [
      "登"
    ]
  },
  {
    "id": "w-l19-732",
    "lessonId": "l19",
    "lessonNumber": "Lección 19",
    "kanji": "泊まります",
    "reading": "とまります",
    "romaji": "tomarimasu",
    "spanish": "hospedarse, alojarse (en un hotel)",
    "segments": [
      {
        "text": "泊",
        "furigana": "と"
      },
      {
        "text": "まります"
      }
    ],
    "targetKanji": [
      "泊"
    ]
  },
  {
    "id": "w-l19-733",
    "lessonId": "l19",
    "lessonNumber": "Lección 19",
    "kanji": "掃除します",
    "reading": "そうじします",
    "romaji": "soujishimasu",
    "spanish": "limpiar",
    "segments": [
      {
        "text": "掃",
        "furigana": "そう"
      },
      {
        "text": "除",
        "furigana": "じ"
      },
      {
        "text": "します"
      }
    ],
    "targetKanji": [
      "掃",
      "除"
    ]
  },
  {
    "id": "w-l19-734",
    "lessonId": "l19",
    "lessonNumber": "Lección 19",
    "kanji": "洗濯します",
    "reading": "せんたくします",
    "romaji": "sentakushimasu",
    "spanish": "lavar la ropa",
    "segments": [
      {
        "text": "洗",
        "furigana": "せん"
      },
      {
        "text": "濯",
        "furigana": "たく"
      },
      {
        "text": "します"
      }
    ],
    "targetKanji": [
      "洗",
      "濯"
    ]
  },
  {
    "id": "w-l19-735",
    "lessonId": "l19",
    "lessonNumber": "Lección 19",
    "kanji": "なります",
    "reading": "なります",
    "romaji": "narimasu",
    "spanish": "llegar a ser, volverse",
    "segments": [
      {
        "text": "なります"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l19-736",
    "lessonId": "l19",
    "lessonNumber": "Lección 19",
    "kanji": "眠い",
    "reading": "ねむい",
    "romaji": "nemui",
    "spanish": "somnoliento, con sueño",
    "segments": [
      {
        "text": "眠",
        "furigana": "ねむ"
      },
      {
        "text": "い"
      }
    ],
    "targetKanji": [
      "眠"
    ]
  },
  {
    "id": "w-l19-737",
    "lessonId": "l19",
    "lessonNumber": "Lección 19",
    "kanji": "強い",
    "reading": "つよい",
    "romaji": "tsuyoi",
    "spanish": "fuerte",
    "segments": [
      {
        "text": "強",
        "furigana": "つよ"
      },
      {
        "text": "い"
      }
    ],
    "targetKanji": [
      "強"
    ]
  },
  {
    "id": "w-l19-738",
    "lessonId": "l19",
    "lessonNumber": "Lección 19",
    "kanji": "弱い",
    "reading": "よわい",
    "romaji": "yowai",
    "spanish": "débil",
    "segments": [
      {
        "text": "弱",
        "furigana": "よわ"
      },
      {
        "text": "い"
      }
    ],
    "targetKanji": [
      "弱"
    ]
  },
  {
    "id": "w-l19-739",
    "lessonId": "l19",
    "lessonNumber": "Lección 19",
    "kanji": "調子",
    "reading": "ちょうし",
    "romaji": "choushi",
    "spanish": "condición, estado (de salud/máquina)",
    "segments": [
      {
        "text": "調",
        "furigana": "ちょう"
      },
      {
        "text": "子",
        "furigana": "し"
      }
    ],
    "targetKanji": [
      "調",
      "子"
    ]
  },
  {
    "id": "w-l19-740",
    "lessonId": "l19",
    "lessonNumber": "Lección 19",
    "kanji": "一度",
    "reading": "いちど",
    "romaji": "ichido",
    "spanish": "una vez",
    "segments": [
      {
        "text": "一",
        "furigana": "いち"
      },
      {
        "text": "度",
        "furigana": "ど"
      }
    ],
    "targetKanji": [
      "一",
      "度"
    ]
  },
  {
    "id": "w-l19-741",
    "lessonId": "l19",
    "lessonNumber": "Lección 19",
    "kanji": "一度も",
    "reading": "いちども",
    "romaji": "ichidomo",
    "spanish": "ni una sola vez (con negativo)",
    "segments": [
      {
        "text": "一",
        "furigana": "いち"
      },
      {
        "text": "度",
        "furigana": "ど"
      },
      {
        "text": "も"
      }
    ],
    "targetKanji": [
      "一",
      "度"
    ]
  },
  {
    "id": "w-l19-742",
    "lessonId": "l19",
    "lessonNumber": "Lección 19",
    "kanji": "だんだん",
    "reading": "だんだん",
    "romaji": "dandan",
    "spanish": "gradualmente, poco a poco",
    "segments": [
      {
        "text": "だんだん"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l19-743",
    "lessonId": "l19",
    "lessonNumber": "Lección 19",
    "kanji": "もうすぐ",
    "reading": "もうすぐ",
    "romaji": "mousugu",
    "spanish": "muy pronto",
    "segments": [
      {
        "text": "もうすぐ"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l19-744",
    "lessonId": "l19",
    "lessonNumber": "Lección 19",
    "kanji": "おかげさまで",
    "reading": "おかげさまで",
    "romaji": "okagesamade",
    "spanish": "gracias a Dios / afortunadamente",
    "segments": [
      {
        "text": "おかげさまで"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l19-745",
    "lessonId": "l19",
    "lessonNumber": "Lección 19",
    "kanji": "乾杯",
    "reading": "かんぱい",
    "romaji": "kanpai",
    "spanish": "¡salud! (brindis)",
    "segments": [
      {
        "text": "乾",
        "furigana": "かん"
      },
      {
        "text": "杯",
        "furigana": "ぱい"
      }
    ],
    "targetKanji": [
      "乾",
      "杯"
    ]
  },
  {
    "id": "w-l19-746",
    "lessonId": "l19",
    "lessonNumber": "Lección 19",
    "kanji": "無理［な］",
    "reading": "むり［な］",
    "romaji": "muri [na]",
    "spanish": "imposible, forzado",
    "segments": [
      {
        "text": "無",
        "furigana": "む"
      },
      {
        "text": "理",
        "furigana": "り"
      },
      {
        "text": "［な］"
      }
    ],
    "targetKanji": [
      "無",
      "理"
    ]
  },
  {
    "id": "w-l19-747",
    "lessonId": "l19",
    "lessonNumber": "Lección 19",
    "kanji": "体にいい",
    "reading": "からだにいい",
    "romaji": "karada ni ii",
    "spanish": "bueno para la salud",
    "segments": [
      {
        "text": "体",
        "furigana": "からだ"
      },
      {
        "text": "にいい"
      }
    ],
    "targetKanji": [
      "体"
    ]
  },
  {
    "id": "w-l20-748",
    "lessonId": "l20",
    "lessonNumber": "Lección 20",
    "kanji": "要ります",
    "reading": "いります",
    "romaji": "irimasu",
    "spanish": "necesitar",
    "segments": [
      {
        "text": "要",
        "furigana": "い"
      },
      {
        "text": "ります"
      }
    ],
    "targetKanji": [
      "要"
    ]
  },
  {
    "id": "w-l20-749",
    "lessonId": "l20",
    "lessonNumber": "Lección 20",
    "kanji": "調べます",
    "reading": "しらべます",
    "romaji": "shirabemasu",
    "spanish": "investigar, consultar, averiguar",
    "segments": [
      {
        "text": "調",
        "furigana": "しら"
      },
      {
        "text": "べます"
      }
    ],
    "targetKanji": [
      "調"
    ]
  },
  {
    "id": "w-l20-750",
    "lessonId": "l20",
    "lessonNumber": "Lección 20",
    "kanji": "直します",
    "reading": "なおします",
    "romaji": "naoshimasu",
    "spanish": "corregir, reparar",
    "segments": [
      {
        "text": "直",
        "furigana": "なお"
      },
      {
        "text": "します"
      }
    ],
    "targetKanji": [
      "直"
    ]
  },
  {
    "id": "w-l20-751",
    "lessonId": "l20",
    "lessonNumber": "Lección 20",
    "kanji": "修理します",
    "reading": "しゅうりします",
    "romaji": "shuurishimasu",
    "spanish": "reparar, arreglar",
    "segments": [
      {
        "text": "修",
        "furigana": "しゅう"
      },
      {
        "text": "理",
        "furigana": "り"
      },
      {
        "text": "します"
      }
    ],
    "targetKanji": [
      "修",
      "理"
    ]
  },
  {
    "id": "w-l20-752",
    "lessonId": "l20",
    "lessonNumber": "Lección 20",
    "kanji": "僕",
    "reading": "ぼく",
    "romaji": "boku",
    "spanish": "yo (usado por varones en tono informal)",
    "segments": [
      {
        "text": "僕",
        "furigana": "ぼく"
      }
    ],
    "targetKanji": [
      "僕"
    ]
  },
  {
    "id": "w-l20-753",
    "lessonId": "l20",
    "lessonNumber": "Lección 20",
    "kanji": "君",
    "reading": "きみ",
    "romaji": "kimi",
    "spanish": "tú (informal, familiar)",
    "segments": [
      {
        "text": "君",
        "furigana": "きみ"
      }
    ],
    "targetKanji": [
      "君"
    ]
  },
  {
    "id": "w-l20-754",
    "lessonId": "l20",
    "lessonNumber": "Lección 20",
    "kanji": "～君",
    "reading": "～くん",
    "romaji": "~kun",
    "spanish": "sufijo para amigos masculinos",
    "segments": [
      {
        "text": "～"
      },
      {
        "text": "君",
        "furigana": "くん"
      }
    ],
    "targetKanji": [
      "君"
    ]
  },
  {
    "id": "w-l20-755",
    "lessonId": "l20",
    "lessonNumber": "Lección 20",
    "kanji": "うん",
    "reading": "うん",
    "romaji": "un",
    "spanish": "sí (coloquial)",
    "segments": [
      {
        "text": "うん"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l20-756",
    "lessonId": "l20",
    "lessonNumber": "Lección 20",
    "kanji": "ううん",
    "reading": "ううん",
    "romaji": "uun",
    "spanish": "no (coloquial)",
    "segments": [
      {
        "text": "ううん"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l20-757",
    "lessonId": "l20",
    "lessonNumber": "Lección 20",
    "kanji": "ことば",
    "reading": "ことば",
    "romaji": "kotoba",
    "spanish": "palabra, idioma",
    "segments": [
      {
        "text": "ことば"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l20-758",
    "lessonId": "l20",
    "lessonNumber": "Lección 20",
    "kanji": "物価",
    "reading": "ぶっか",
    "romaji": "bukka",
    "spanish": "precios de los artículos, costo de la vida",
    "segments": [
      {
        "text": "物",
        "furigana": "ぶっ"
      },
      {
        "text": "価",
        "furigana": "か"
      }
    ],
    "targetKanji": [
      "物",
      "価"
    ]
  },
  {
    "id": "w-l20-759",
    "lessonId": "l20",
    "lessonNumber": "Lección 20",
    "kanji": "着物",
    "reading": "きもの",
    "romaji": "kimono",
    "spanish": "kimono, traje tradicional japonés",
    "segments": [
      {
        "text": "着",
        "furigana": "き"
      },
      {
        "text": "物",
        "furigana": "もの"
      }
    ],
    "targetKanji": [
      "着",
      "物"
    ]
  },
  {
    "id": "w-l20-760",
    "lessonId": "l20",
    "lessonNumber": "Lección 20",
    "kanji": "ビザ",
    "reading": "ビザ",
    "romaji": "biza",
    "spanish": "visado, visa",
    "segments": [
      {
        "text": "ビザ"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l20-761",
    "lessonId": "l20",
    "lessonNumber": "Lección 20",
    "kanji": "初め",
    "reading": "はじめ",
    "romaji": "hajime",
    "spanish": "comienzo, principio",
    "segments": [
      {
        "text": "初",
        "furigana": "はじ"
      },
      {
        "text": "め"
      }
    ],
    "targetKanji": [
      "初"
    ]
  },
  {
    "id": "w-l20-762",
    "lessonId": "l20",
    "lessonNumber": "Lección 20",
    "kanji": "終わり",
    "reading": "おわり",
    "romaji": "owari",
    "spanish": "fin, término",
    "segments": [
      {
        "text": "終",
        "furigana": "お"
      },
      {
        "text": "わり"
      }
    ],
    "targetKanji": [
      "終"
    ]
  },
  {
    "id": "w-l20-763",
    "lessonId": "l20",
    "lessonNumber": "Lección 20",
    "kanji": "こっち",
    "reading": "こっち",
    "romaji": "kocchi",
    "spanish": "aquí, por aquí (informal)",
    "segments": [
      {
        "text": "こっち"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l20-764",
    "lessonId": "l20",
    "lessonNumber": "Lección 20",
    "kanji": "そっち",
    "reading": "そっち",
    "romaji": "socchi",
    "spanish": "ahí, por ahí (informal)",
    "segments": [
      {
        "text": "そっち"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l20-765",
    "lessonId": "l20",
    "lessonNumber": "Lección 20",
    "kanji": "あっち",
    "reading": "あっち",
    "romaji": "acchi",
    "spanish": "allá, por allá (informal)",
    "segments": [
      {
        "text": "あっち"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l20-766",
    "lessonId": "l20",
    "lessonNumber": "Lección 20",
    "kanji": "どっち",
    "reading": "どっち",
    "romaji": "docchi",
    "spanish": "cuál, por dónde (informal)",
    "segments": [
      {
        "text": "どっち"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l20-767",
    "lessonId": "l20",
    "lessonNumber": "Lección 20",
    "kanji": "みんなで",
    "reading": "みんなで",
    "romaji": "minnade",
    "spanish": "todos juntos",
    "segments": [
      {
        "text": "みんなで"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l20-768",
    "lessonId": "l20",
    "lessonNumber": "Lección 20",
    "kanji": "～けど",
    "reading": "～けど",
    "romaji": "~kedo",
    "spanish": "pero (coloquial)",
    "segments": [
      {
        "text": "～けど"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l21-769",
    "lessonId": "l21",
    "lessonNumber": "Lección 21",
    "kanji": "思います",
    "reading": "おもいます",
    "romaji": "omoimasu",
    "spanish": "creer, pensar",
    "segments": [
      {
        "text": "思",
        "furigana": "おも"
      },
      {
        "text": "います"
      }
    ],
    "targetKanji": [
      "思"
    ]
  },
  {
    "id": "w-l21-770",
    "lessonId": "l21",
    "lessonNumber": "Lección 21",
    "kanji": "言います",
    "reading": "いいます",
    "romaji": "iimasu",
    "spanish": "decir",
    "segments": [
      {
        "text": "言",
        "furigana": "い"
      },
      {
        "text": "います"
      }
    ],
    "targetKanji": [
      "言"
    ]
  },
  {
    "id": "w-l21-771",
    "lessonId": "l21",
    "lessonNumber": "Lección 21",
    "kanji": "勝ちます",
    "reading": "かちます",
    "romaji": "kachimasu",
    "spanish": "ganar, vencer",
    "segments": [
      {
        "text": "勝",
        "furigana": "か"
      },
      {
        "text": "ちます"
      }
    ],
    "targetKanji": [
      "勝"
    ]
  },
  {
    "id": "w-l21-772",
    "lessonId": "l21",
    "lessonNumber": "Lección 21",
    "kanji": "負けます",
    "reading": "まけます",
    "romaji": "makemasu",
    "spanish": "perder, ser derrotado",
    "segments": [
      {
        "text": "負",
        "furigana": "ま"
      },
      {
        "text": "けます"
      }
    ],
    "targetKanji": [
      "負"
    ]
  },
  {
    "id": "w-l21-773",
    "lessonId": "l21",
    "lessonNumber": "Lección 21",
    "kanji": "役に立ちます",
    "reading": "やくにたちます",
    "romaji": "yaku ni tachimasu",
    "spanish": "ser útil, servir",
    "segments": [
      {
        "text": "役",
        "furigana": "やく"
      },
      {
        "text": "に"
      },
      {
        "text": "立",
        "furigana": "た"
      },
      {
        "text": "ちます"
      }
    ],
    "targetKanji": [
      "役",
      "立"
    ]
  },
  {
    "id": "w-l21-774",
    "lessonId": "l21",
    "lessonNumber": "Lección 21",
    "kanji": "動きます",
    "reading": "うごきます",
    "romaji": "ugokimasu",
    "spanish": "moverse, funcionar",
    "segments": [
      {
        "text": "動",
        "furigana": "うご"
      },
      {
        "text": "きます"
      }
    ],
    "targetKanji": [
      "動"
    ]
  },
  {
    "id": "w-l21-775",
    "lessonId": "l21",
    "lessonNumber": "Lección 21",
    "kanji": "やめます",
    "reading": "やめます",
    "romaji": "yamemasu",
    "spanish": "dejar, renunciar a (un empleo)",
    "segments": [
      {
        "text": "やめます"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l21-776",
    "lessonId": "l21",
    "lessonNumber": "Lección 21",
    "kanji": "気をつけます",
    "reading": "きをつけます",
    "romaji": "ki o tsukemasu",
    "spanish": "prestar atención, tener cuidado",
    "segments": [
      {
        "text": "気",
        "furigana": "き"
      },
      {
        "text": "をつけます"
      }
    ],
    "targetKanji": [
      "気"
    ]
  },
  {
    "id": "w-l21-777",
    "lessonId": "l21",
    "lessonNumber": "Lección 21",
    "kanji": "留学します",
    "reading": "りゅうがくします",
    "romaji": "ryuugakushimasu",
    "spanish": "estudiar en el extranjero",
    "segments": [
      {
        "text": "留",
        "furigana": "りゅう"
      },
      {
        "text": "学",
        "furigana": "がく"
      },
      {
        "text": "します"
      }
    ],
    "targetKanji": [
      "留",
      "学"
    ]
  },
  {
    "id": "w-l21-778",
    "lessonId": "l21",
    "lessonNumber": "Lección 21",
    "kanji": "むだ［な］",
    "reading": "むだ［な］",
    "romaji": "muda [na]",
    "spanish": "inútil, desperdicio",
    "segments": [
      {
        "text": "むだ［な］"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l21-779",
    "lessonId": "l21",
    "lessonNumber": "Lección 21",
    "kanji": "不便［な］",
    "reading": "ふべん［な］",
    "romaji": "fuben [na]",
    "spanish": "incómodo, poco práctico",
    "segments": [
      {
        "text": "不",
        "furigana": "ふ"
      },
      {
        "text": "便",
        "furigana": "べん"
      },
      {
        "text": "［な］"
      }
    ],
    "targetKanji": [
      "不",
      "便"
    ]
  },
  {
    "id": "w-l21-780",
    "lessonId": "l21",
    "lessonNumber": "Lección 21",
    "kanji": "すごい",
    "reading": "すごい",
    "romaji": "sugoi",
    "spanish": "increíble, asombroso",
    "segments": [
      {
        "text": "すごい"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l21-781",
    "lessonId": "l21",
    "lessonNumber": "Lección 21",
    "kanji": "本当",
    "reading": "ほんとう",
    "romaji": "hontou",
    "spanish": "verdad, realidad",
    "segments": [
      {
        "text": "本",
        "furigana": "ほん"
      },
      {
        "text": "当",
        "furigana": "とう"
      }
    ],
    "targetKanji": [
      "本",
      "当"
    ]
  },
  {
    "id": "w-l21-782",
    "lessonId": "l21",
    "lessonNumber": "Lección 21",
    "kanji": "うそ",
    "reading": "うそ",
    "romaji": "uso",
    "spanish": "mentira",
    "segments": [
      {
        "text": "うそ"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l21-783",
    "lessonId": "l21",
    "lessonNumber": "Lección 21",
    "kanji": "交通",
    "reading": "こうつう",
    "romaji": "koutsuu",
    "spanish": "tráfico, transporte",
    "segments": [
      {
        "text": "交",
        "furigana": "こう"
      },
      {
        "text": "通",
        "furigana": "つう"
      }
    ],
    "targetKanji": [
      "交",
      "通"
    ]
  },
  {
    "id": "w-l21-784",
    "lessonId": "l21",
    "lessonNumber": "Lección 21",
    "kanji": "放送",
    "reading": "ほうそう",
    "romaji": "housou",
    "spanish": "emisión, transmisión",
    "segments": [
      {
        "text": "放",
        "furigana": "ほう"
      },
      {
        "text": "送",
        "furigana": "そう"
      }
    ],
    "targetKanji": [
      "放",
      "送"
    ]
  },
  {
    "id": "w-l21-785",
    "lessonId": "l21",
    "lessonNumber": "Lección 21",
    "kanji": "ニュース",
    "reading": "ニュース",
    "romaji": "nyuusu",
    "spanish": "noticias",
    "segments": [
      {
        "text": "ニュース"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l21-786",
    "lessonId": "l21",
    "lessonNumber": "Lección 21",
    "kanji": "アニメ",
    "reading": "アニメ",
    "romaji": "anime",
    "spanish": "animación japonesa, dibujos animados",
    "segments": [
      {
        "text": "アニメ"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l21-787",
    "lessonId": "l21",
    "lessonNumber": "Lección 21",
    "kanji": "マンガ",
    "reading": "マンガ",
    "romaji": "manga",
    "spanish": "cómic japonés",
    "segments": [
      {
        "text": "マンガ"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l21-788",
    "lessonId": "l21",
    "lessonNumber": "Lección 21",
    "kanji": "デザイン",
    "reading": "デザイン",
    "romaji": "dezain",
    "spanish": "diseño",
    "segments": [
      {
        "text": "デザイン"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l21-789",
    "lessonId": "l21",
    "lessonNumber": "Lección 21",
    "kanji": "夢",
    "reading": "ゆめ",
    "romaji": "yume",
    "spanish": "sueño (al dormir o anhelo)",
    "segments": [
      {
        "text": "夢",
        "furigana": "ゆめ"
      }
    ],
    "targetKanji": [
      "夢"
    ]
  },
  {
    "id": "w-l21-790",
    "lessonId": "l21",
    "lessonNumber": "Lección 21",
    "kanji": "天才",
    "reading": "てんさい",
    "romaji": "tensai",
    "spanish": "genio",
    "segments": [
      {
        "text": "天",
        "furigana": "てん"
      },
      {
        "text": "才",
        "furigana": "さい"
      }
    ],
    "targetKanji": [
      "天",
      "才"
    ]
  },
  {
    "id": "w-l21-791",
    "lessonId": "l21",
    "lessonNumber": "Lección 21",
    "kanji": "試合",
    "reading": "しあい",
    "romaji": "shiai",
    "spanish": "partido, competición deportiva",
    "segments": [
      {
        "text": "試",
        "furigana": "し"
      },
      {
        "text": "合",
        "furigana": "あい"
      }
    ],
    "targetKanji": [
      "試",
      "合"
    ]
  },
  {
    "id": "w-l21-792",
    "lessonId": "l21",
    "lessonNumber": "Lección 21",
    "kanji": "意見",
    "reading": "いけん",
    "romaji": "iken",
    "spanish": "opinión",
    "segments": [
      {
        "text": "意",
        "furigana": "い"
      },
      {
        "text": "見",
        "furigana": "けん"
      }
    ],
    "targetKanji": [
      "意",
      "見"
    ]
  },
  {
    "id": "w-l21-793",
    "lessonId": "l21",
    "lessonNumber": "Lección 21",
    "kanji": "話",
    "reading": "はなし",
    "romaji": "hanashi",
    "spanish": "historia, charla, conversación",
    "segments": [
      {
        "text": "話",
        "furigana": "はなし"
      }
    ],
    "targetKanji": [
      "話"
    ]
  },
  {
    "id": "w-l21-794",
    "lessonId": "l21",
    "lessonNumber": "Lección 21",
    "kanji": "地球",
    "reading": "ちきゅう",
    "romaji": "chikyuu",
    "spanish": "planeta Tierra",
    "segments": [
      {
        "text": "地",
        "furigana": "ち"
      },
      {
        "text": "球",
        "furigana": "きゅう"
      }
    ],
    "targetKanji": [
      "地",
      "球"
    ]
  },
  {
    "id": "w-l21-795",
    "lessonId": "l21",
    "lessonNumber": "Lección 21",
    "kanji": "月",
    "reading": "つき",
    "romaji": "tsuki",
    "spanish": "luna",
    "segments": [
      {
        "text": "月",
        "furigana": "つき"
      }
    ],
    "targetKanji": [
      "月"
    ]
  },
  {
    "id": "w-l21-796",
    "lessonId": "l21",
    "lessonNumber": "Lección 21",
    "kanji": "最近",
    "reading": "さいきん",
    "romaji": "saikin",
    "spanish": "últimamente, recientemente",
    "segments": [
      {
        "text": "最",
        "furigana": "さい"
      },
      {
        "text": "近",
        "furigana": "きん"
      }
    ],
    "targetKanji": [
      "最",
      "近"
    ]
  },
  {
    "id": "w-l21-797",
    "lessonId": "l21",
    "lessonNumber": "Lección 21",
    "kanji": "たぶん",
    "reading": "たぶん",
    "romaji": "tabun",
    "spanish": "quizás, tal vez",
    "segments": [
      {
        "text": "たぶん"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l21-798",
    "lessonId": "l21",
    "lessonNumber": "Lección 21",
    "kanji": "きっと",
    "reading": "きっと",
    "romaji": "kitto",
    "spanish": "seguramente, sin duda",
    "segments": [
      {
        "text": "きっと"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l21-799",
    "lessonId": "l21",
    "lessonNumber": "Lección 21",
    "kanji": "本当に",
    "reading": "ほんとうに",
    "romaji": "hontouni",
    "spanish": "realmente, de verdad",
    "segments": [
      {
        "text": "本",
        "furigana": "ほん"
      },
      {
        "text": "当",
        "furigana": "とう"
      },
      {
        "text": "に"
      }
    ],
    "targetKanji": [
      "本",
      "当"
    ]
  },
  {
    "id": "w-l21-800",
    "lessonId": "l21",
    "lessonNumber": "Lección 21",
    "kanji": "～について",
    "reading": "～について",
    "romaji": "~ni tsuite",
    "spanish": "acerca de ~, sobre ~",
    "segments": [
      {
        "text": "～について"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l22-801",
    "lessonId": "l22",
    "lessonNumber": "Lección 22",
    "kanji": "着ます",
    "reading": "きます",
    "romaji": "kimasu",
    "spanish": "ponerse (ropa de cintura para arriba)",
    "segments": [
      {
        "text": "着",
        "furigana": "き"
      },
      {
        "text": "ます"
      }
    ],
    "targetKanji": [
      "着"
    ]
  },
  {
    "id": "w-l22-802",
    "lessonId": "l22",
    "lessonNumber": "Lección 22",
    "kanji": "はきます",
    "reading": "はきます",
    "romaji": "hakimasu",
    "spanish": "ponerse (pantalones, zapatos)",
    "segments": [
      {
        "text": "はきます"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l22-803",
    "lessonId": "l22",
    "lessonNumber": "Lección 22",
    "kanji": "かぶります",
    "reading": "かぶります",
    "romaji": "kaburimasu",
    "spanish": "ponerse (sombrero, gorra)",
    "segments": [
      {
        "text": "かぶります"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l22-804",
    "lessonId": "l22",
    "lessonNumber": "Lección 22",
    "kanji": "かけます",
    "reading": "かけます",
    "romaji": "kakemasu",
    "spanish": "ponerse (gafas)",
    "segments": [
      {
        "text": "かけます"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l22-805",
    "lessonId": "l22",
    "lessonNumber": "Lección 22",
    "kanji": "取ります",
    "reading": "とります",
    "romaji": "torimasu",
    "spanish": "quitarse (gafas, reloj)",
    "segments": [
      {
        "text": "取",
        "furigana": "と"
      },
      {
        "text": "ります"
      }
    ],
    "targetKanji": [
      "取"
    ]
  },
  {
    "id": "w-l22-806",
    "lessonId": "l22",
    "lessonNumber": "Lección 22",
    "kanji": "生まれます",
    "reading": "うまれます",
    "romaji": "umaremasu",
    "spanish": "nacer",
    "segments": [
      {
        "text": "生",
        "furigana": "う"
      },
      {
        "text": "まれます"
      }
    ],
    "targetKanji": [
      "生"
    ]
  },
  {
    "id": "w-l22-807",
    "lessonId": "l22",
    "lessonNumber": "Lección 22",
    "kanji": "コート",
    "reading": "コート",
    "romaji": "kooto",
    "spanish": "abrigo",
    "segments": [
      {
        "text": "コート"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l22-808",
    "lessonId": "l22",
    "lessonNumber": "Lección 22",
    "kanji": "スーツ",
    "reading": "スーツ",
    "romaji": "suutsu",
    "spanish": "traje",
    "segments": [
      {
        "text": "スーツ"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l22-809",
    "lessonId": "l22",
    "lessonNumber": "Lección 22",
    "kanji": "セーター",
    "reading": "セーター",
    "romaji": "seetaa",
    "spanish": "suéter, jersey",
    "segments": [
      {
        "text": "セーター"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l22-810",
    "lessonId": "l22",
    "lessonNumber": "Lección 22",
    "kanji": "帽子",
    "reading": "ぼうし",
    "romaji": "boushi",
    "spanish": "sombrero, gorra",
    "segments": [
      {
        "text": "帽",
        "furigana": "ぼう"
      },
      {
        "text": "子",
        "furigana": "し"
      }
    ],
    "targetKanji": [
      "帽",
      "子"
    ]
  },
  {
    "id": "w-l22-811",
    "lessonId": "l22",
    "lessonNumber": "Lección 22",
    "kanji": "眼鏡",
    "reading": "めがね",
    "romaji": "megane",
    "spanish": "gafas, anteojos",
    "segments": [
      {
        "text": "眼",
        "furigana": "め"
      },
      {
        "text": "鏡",
        "furigana": "がね"
      }
    ],
    "targetKanji": [
      "眼",
      "鏡"
    ]
  },
  {
    "id": "w-l22-812",
    "lessonId": "l22",
    "lessonNumber": "Lección 22",
    "kanji": "ケーキ",
    "reading": "ケーキ",
    "romaji": "keeki",
    "spanish": "pastel, tarta",
    "segments": [
      {
        "text": "ケーキ"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l22-813",
    "lessonId": "l22",
    "lessonNumber": "Lección 22",
    "kanji": "お弁当",
    "reading": "おべんとう",
    "romaji": "obentou",
    "spanish": "comida para llevar en caja",
    "segments": [
      {
        "text": "お"
      },
      {
        "text": "弁",
        "furigana": "べん"
      },
      {
        "text": "当",
        "furigana": "とう"
      }
    ],
    "targetKanji": [
      "弁",
      "当"
    ]
  },
  {
    "id": "w-l22-814",
    "lessonId": "l22",
    "lessonNumber": "Lección 22",
    "kanji": "ロボット",
    "reading": "ロボット",
    "romaji": "robotto",
    "spanish": "robot",
    "segments": [
      {
        "text": "ロボット"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l22-815",
    "lessonId": "l22",
    "lessonNumber": "Lección 22",
    "kanji": "ユーモア",
    "reading": "ユーモア",
    "romaji": "yuumoa",
    "spanish": "humor",
    "segments": [
      {
        "text": "ユーモア"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l22-816",
    "lessonId": "l22",
    "lessonNumber": "Lección 22",
    "kanji": "都合",
    "reading": "つごう",
    "romaji": "tsugou",
    "spanish": "conveniencia, disponibilidad de horario",
    "segments": [
      {
        "text": "都",
        "furigana": "つ"
      },
      {
        "text": "合",
        "furigana": "ごう"
      }
    ],
    "targetKanji": [
      "都",
      "合"
    ]
  },
  {
    "id": "w-l22-817",
    "lessonId": "l22",
    "lessonNumber": "Lección 22",
    "kanji": "よく",
    "reading": "よく",
    "romaji": "yoku",
    "spanish": "frecuentemente, a menudo",
    "segments": [
      {
        "text": "よく"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l22-818",
    "lessonId": "l22",
    "lessonNumber": "Lección 22",
    "kanji": "おめでとうございます",
    "reading": "おめでとうございます",
    "romaji": "omedetou gozaimasu",
    "spanish": "¡felicidades! / ¡enhorabuena!",
    "segments": [
      {
        "text": "おめでとうございます"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l23-819",
    "lessonId": "l23",
    "lessonNumber": "Lección 23",
    "kanji": "聞きます",
    "reading": "ききます",
    "romaji": "kikimasu",
    "spanish": "preguntar (al profesor)",
    "segments": [
      {
        "text": "聞",
        "furigana": "き"
      },
      {
        "text": "きます"
      }
    ],
    "targetKanji": [
      "聞"
    ]
  },
  {
    "id": "w-l23-820",
    "lessonId": "l23",
    "lessonNumber": "Lección 23",
    "kanji": "回します",
    "reading": "まわします",
    "romaji": "mawashimasu",
    "spanish": "girar, hacer rotar",
    "segments": [
      {
        "text": "回",
        "furigana": "まわ"
      },
      {
        "text": "します"
      }
    ],
    "targetKanji": [
      "回"
    ]
  },
  {
    "id": "w-l23-821",
    "lessonId": "l23",
    "lessonNumber": "Lección 23",
    "kanji": "引きます",
    "reading": "ひきます",
    "romaji": "hikimasu",
    "spanish": "tirar de (una puerta)",
    "segments": [
      {
        "text": "引",
        "furigana": "ひ"
      },
      {
        "text": "きます"
      }
    ],
    "targetKanji": [
      "引"
    ]
  },
  {
    "id": "w-l23-822",
    "lessonId": "l23",
    "lessonNumber": "Lección 23",
    "kanji": "変えます",
    "reading": "かえます",
    "romaji": "kaemasu",
    "spanish": "cambiar, modificar",
    "segments": [
      {
        "text": "変",
        "furigana": "か"
      },
      {
        "text": "えます"
      }
    ],
    "targetKanji": [
      "変"
    ]
  },
  {
    "id": "w-l23-823",
    "lessonId": "l23",
    "lessonNumber": "Lección 23",
    "kanji": "触ります",
    "reading": "さわります",
    "romaji": "sawarimasu",
    "spanish": "tocar (con la mano)",
    "segments": [
      {
        "text": "触",
        "furigana": "さわ"
      },
      {
        "text": "ります"
      }
    ],
    "targetKanji": [
      "触"
    ]
  },
  {
    "id": "w-l23-824",
    "lessonId": "l23",
    "lessonNumber": "Lección 23",
    "kanji": "出ます",
    "reading": "でます",
    "romaji": "demasu",
    "spanish": "salir (cambio de dinero)",
    "segments": [
      {
        "text": "出",
        "furigana": "で"
      },
      {
        "text": "ます"
      }
    ],
    "targetKanji": [
      "出"
    ]
  },
  {
    "id": "w-l23-825",
    "lessonId": "l23",
    "lessonNumber": "Lección 23",
    "kanji": "歩きます",
    "reading": "あるきます",
    "romaji": "arukimasu",
    "spanish": "caminar",
    "segments": [
      {
        "text": "歩",
        "furigana": "ある"
      },
      {
        "text": "きます"
      }
    ],
    "targetKanji": [
      "歩"
    ]
  },
  {
    "id": "w-l23-826",
    "lessonId": "l23",
    "lessonNumber": "Lección 23",
    "kanji": "渡ります",
    "reading": "わたります",
    "romaji": "watarimasu",
    "spanish": "cruzar (un puente, una calle)",
    "segments": [
      {
        "text": "渡",
        "furigana": "わた"
      },
      {
        "text": "ります"
      }
    ],
    "targetKanji": [
      "渡"
    ]
  },
  {
    "id": "w-l23-827",
    "lessonId": "l23",
    "lessonNumber": "Lección 23",
    "kanji": "曲がります",
    "reading": "まがります",
    "romaji": "magarimasu",
    "spanish": "doblar, girar (a la derecha)",
    "segments": [
      {
        "text": "曲",
        "furigana": "ま"
      },
      {
        "text": "がります"
      }
    ],
    "targetKanji": [
      "曲"
    ]
  },
  {
    "id": "w-l23-828",
    "lessonId": "l23",
    "lessonNumber": "Lección 23",
    "kanji": "お湯",
    "reading": "おゆ",
    "romaji": "oyu",
    "spanish": "agua caliente",
    "segments": [
      {
        "text": "お"
      },
      {
        "text": "湯",
        "furigana": "ゆ"
      }
    ],
    "targetKanji": [
      "湯"
    ]
  },
  {
    "id": "w-l23-829",
    "lessonId": "l23",
    "lessonNumber": "Lección 23",
    "kanji": "音",
    "reading": "おと",
    "romaji": "oto",
    "spanish": "sonido",
    "segments": [
      {
        "text": "音",
        "furigana": "おと"
      }
    ],
    "targetKanji": [
      "音"
    ]
  },
  {
    "id": "w-l23-830",
    "lessonId": "l23",
    "lessonNumber": "Lección 23",
    "kanji": "サイズ",
    "reading": "サイズ",
    "romaji": "saizu",
    "spanish": "talla, tamaño",
    "segments": [
      {
        "text": "サイズ"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l23-831",
    "lessonId": "l23",
    "lessonNumber": "Lección 23",
    "kanji": "故障",
    "reading": "こしょう",
    "romaji": "koshou",
    "spanish": "avería, descompostura",
    "segments": [
      {
        "text": "故",
        "furigana": "こ"
      },
      {
        "text": "障",
        "furigana": "しょう"
      }
    ],
    "targetKanji": [
      "故",
      "障"
    ]
  },
  {
    "id": "w-l23-832",
    "lessonId": "l23",
    "lessonNumber": "Lección 23",
    "kanji": "道",
    "reading": "みち",
    "romaji": "michi",
    "spanish": "camino, calle",
    "segments": [
      {
        "text": "道",
        "furigana": "みち"
      }
    ],
    "targetKanji": [
      "道"
    ]
  },
  {
    "id": "w-l23-833",
    "lessonId": "l23",
    "lessonNumber": "Lección 23",
    "kanji": "交差点",
    "reading": "こうさてん",
    "romaji": "kousaten",
    "spanish": "cruce de calles, intersección",
    "segments": [
      {
        "text": "交",
        "furigana": "こう"
      },
      {
        "text": "差",
        "furigana": "さ"
      },
      {
        "text": "点",
        "furigana": "てん"
      }
    ],
    "targetKanji": [
      "交",
      "差",
      "点"
    ]
  },
  {
    "id": "w-l23-834",
    "lessonId": "l23",
    "lessonNumber": "Lección 23",
    "kanji": "信号",
    "reading": "しんごう",
    "romaji": "shingou",
    "spanish": "semáforo",
    "segments": [
      {
        "text": "信",
        "furigana": "しん"
      },
      {
        "text": "号",
        "furigana": "ごう"
      }
    ],
    "targetKanji": [
      "信",
      "号"
    ]
  },
  {
    "id": "w-l23-835",
    "lessonId": "l23",
    "lessonNumber": "Lección 23",
    "kanji": "角",
    "reading": "かど",
    "romaji": "kado",
    "spanish": "esquina",
    "segments": [
      {
        "text": "角",
        "furigana": "かど"
      }
    ],
    "targetKanji": [
      "角"
    ]
  },
  {
    "id": "w-l23-836",
    "lessonId": "l23",
    "lessonNumber": "Lección 23",
    "kanji": "橋",
    "reading": "はし",
    "romaji": "hashi",
    "spanish": "puente",
    "segments": [
      {
        "text": "橋",
        "furigana": "はし"
      }
    ],
    "targetKanji": [
      "橋"
    ]
  },
  {
    "id": "w-l23-837",
    "lessonId": "l23",
    "lessonNumber": "Lección 23",
    "kanji": "駐車場",
    "reading": "ちゅうしゃじょう",
    "romaji": "chuushajou",
    "spanish": "aparcamiento, estacionamiento",
    "segments": [
      {
        "text": "駐",
        "furigana": "ちゅう"
      },
      {
        "text": "車",
        "furigana": "しゃ"
      },
      {
        "text": "場",
        "furigana": "じょう"
      }
    ],
    "targetKanji": [
      "駐",
      "車",
      "場"
    ]
  },
  {
    "id": "w-l23-838",
    "lessonId": "l23",
    "lessonNumber": "Lección 23",
    "kanji": "～目",
    "reading": "～め",
    "romaji": "~me",
    "spanish": "el ordinal ~ (ej: el segundo)",
    "segments": [
      {
        "text": "～"
      },
      {
        "text": "目",
        "furigana": "め"
      }
    ],
    "targetKanji": [
      "目"
    ]
  },
  {
    "id": "w-l23-839",
    "lessonId": "l23",
    "lessonNumber": "Lección 23",
    "kanji": "お正月",
    "reading": "おしょうがつ",
    "romaji": "oshougatsu",
    "spanish": "Año Nuevo japonés",
    "segments": [
      {
        "text": "お"
      },
      {
        "text": "正",
        "furigana": "しょう"
      },
      {
        "text": "月",
        "furigana": "がつ"
      }
    ],
    "targetKanji": [
      "正",
      "月"
    ]
  },
  {
    "id": "w-l23-840",
    "lessonId": "l23",
    "lessonNumber": "Lección 23",
    "kanji": "建物",
    "reading": "たてもの",
    "romaji": "tatemono",
    "spanish": "edificio",
    "segments": [
      {
        "text": "建",
        "furigana": "たて"
      },
      {
        "text": "物",
        "furigana": "もの"
      }
    ],
    "targetKanji": [
      "建",
      "物"
    ]
  },
  {
    "id": "w-l24-841",
    "lessonId": "l24",
    "lessonNumber": "Lección 24",
    "kanji": "くれます",
    "reading": "くれます",
    "romaji": "kuremasu",
    "spanish": "darme (a mí o a mi grupo)",
    "segments": [
      {
        "text": "くれます"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l24-842",
    "lessonId": "l24",
    "lessonNumber": "Lección 24",
    "kanji": "直します",
    "reading": "なおします",
    "romaji": "naoshimasu",
    "spanish": "reparar, arreglar",
    "segments": [
      {
        "text": "直",
        "furigana": "なお"
      },
      {
        "text": "します"
      }
    ],
    "targetKanji": [
      "直"
    ]
  },
  {
    "id": "w-l24-843",
    "lessonId": "l24",
    "lessonNumber": "Lección 24",
    "kanji": "連れて行きます",
    "reading": "つれていきます",
    "romaji": "tsurete ikimasu",
    "spanish": "llevar consigo (a una persona)",
    "segments": [
      {
        "text": "連",
        "furigana": "つ"
      },
      {
        "text": "れて"
      },
      {
        "text": "行",
        "furigana": "い"
      },
      {
        "text": "きます"
      }
    ],
    "targetKanji": [
      "連",
      "行"
    ]
  },
  {
    "id": "w-l24-844",
    "lessonId": "l24",
    "lessonNumber": "Lección 24",
    "kanji": "連れて来ます",
    "reading": "つれてきます",
    "romaji": "tsurete kimasu",
    "spanish": "traer consigo (a una persona)",
    "segments": [
      {
        "text": "連",
        "furigana": "つ"
      },
      {
        "text": "れて"
      },
      {
        "text": "来",
        "furigana": "き"
      },
      {
        "text": "ます"
      }
    ],
    "targetKanji": [
      "連",
      "来"
    ]
  },
  {
    "id": "w-l24-845",
    "lessonId": "l24",
    "lessonNumber": "Lección 24",
    "kanji": "送ります",
    "reading": "おくります",
    "romaji": "okurimasu",
    "spanish": "acompañar (a alguien a la estación)",
    "segments": [
      {
        "text": "送",
        "furigana": "おく"
      },
      {
        "text": "ります"
      }
    ],
    "targetKanji": [
      "送"
    ]
  },
  {
    "id": "w-l24-846",
    "lessonId": "l24",
    "lessonNumber": "Lección 24",
    "kanji": "紹介します",
    "reading": "しょうかいします",
    "romaji": "shoukaishimasu",
    "spanish": "presentar (a una persona)",
    "segments": [
      {
        "text": "紹",
        "furigana": "しょう"
      },
      {
        "text": "介",
        "furigana": "かい"
      },
      {
        "text": "します"
      }
    ],
    "targetKanji": [
      "紹",
      "介"
    ]
  },
  {
    "id": "w-l24-847",
    "lessonId": "l24",
    "lessonNumber": "Lección 24",
    "kanji": "案内します",
    "reading": "あんないします",
    "romaji": "annaishimasu",
    "spanish": "guiar, mostrar el camino",
    "segments": [
      {
        "text": "案",
        "furigana": "あん"
      },
      {
        "text": "内",
        "furigana": "ない"
      },
      {
        "text": "します"
      }
    ],
    "targetKanji": [
      "案",
      "内"
    ]
  },
  {
    "id": "w-l24-848",
    "lessonId": "l24",
    "lessonNumber": "Lección 24",
    "kanji": "説明します",
    "reading": "せつめいします",
    "romaji": "setsumeishimasu",
    "spanish": "explicar",
    "segments": [
      {
        "text": "説",
        "furigana": "せつ"
      },
      {
        "text": "明",
        "furigana": "めい"
      },
      {
        "text": "します"
      }
    ],
    "targetKanji": [
      "説",
      "明"
    ]
  },
  {
    "id": "w-l24-849",
    "lessonId": "l24",
    "lessonNumber": "Lección 24",
    "kanji": "おじいさん",
    "reading": "おじいさん",
    "romaji": "ojiisan",
    "spanish": "abuelo, anciano",
    "segments": [
      {
        "text": "おじいさん"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l24-850",
    "lessonId": "l24",
    "lessonNumber": "Lección 24",
    "kanji": "おばあさん",
    "reading": "おばあさん",
    "romaji": "obaasan",
    "spanish": "abuela, anciana",
    "segments": [
      {
        "text": "おばあさん"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l24-851",
    "lessonId": "l24",
    "lessonNumber": "Lección 24",
    "kanji": "準備",
    "reading": "じゅんび",
    "romaji": "junbi",
    "spanish": "preparativos",
    "segments": [
      {
        "text": "準",
        "furigana": "じゅん"
      },
      {
        "text": "備",
        "furigana": "び"
      }
    ],
    "targetKanji": [
      "準",
      "備"
    ]
  },
  {
    "id": "w-l24-852",
    "lessonId": "l24",
    "lessonNumber": "Lección 24",
    "kanji": "引っ越し",
    "reading": "ひっこし",
    "romaji": "hikkoshi",
    "spanish": "mudanza",
    "segments": [
      {
        "text": "引",
        "furigana": "ひっ"
      },
      {
        "text": "っ"
      },
      {
        "text": "越",
        "furigana": "こ"
      },
      {
        "text": "し"
      }
    ],
    "targetKanji": [
      "引",
      "越"
    ]
  },
  {
    "id": "w-l24-853",
    "lessonId": "l24",
    "lessonNumber": "Lección 24",
    "kanji": "お菓子",
    "reading": "おかし",
    "romaji": "okashi",
    "spanish": "dulces, golosinas, aperitivos",
    "segments": [
      {
        "text": "お"
      },
      {
        "text": "菓",
        "furigana": "か"
      },
      {
        "text": "子",
        "furigana": "し"
      }
    ],
    "targetKanji": [
      "菓",
      "子"
    ]
  },
  {
    "id": "w-l24-854",
    "lessonId": "l24",
    "lessonNumber": "Lección 24",
    "kanji": "ホームステイ",
    "reading": "ホームステイ",
    "romaji": "hoomusutei",
    "spanish": "estancia con una familia (homestay)",
    "segments": [
      {
        "text": "ホームステイ"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l24-855",
    "lessonId": "l24",
    "lessonNumber": "Lección 24",
    "kanji": "全部",
    "reading": "ぜんぶ",
    "romaji": "zenbu",
    "spanish": "todo",
    "segments": [
      {
        "text": "全",
        "furigana": "ぜん"
      },
      {
        "text": "部",
        "furigana": "ぶ"
      }
    ],
    "targetKanji": [
      "全",
      "部"
    ]
  },
  {
    "id": "w-l24-856",
    "lessonId": "l24",
    "lessonNumber": "Lección 24",
    "kanji": "自分で",
    "reading": "じぶんで",
    "romaji": "jibunde",
    "spanish": "por uno mismo, solo",
    "segments": [
      {
        "text": "自",
        "furigana": "じ"
      },
      {
        "text": "分",
        "furigana": "ぶん"
      },
      {
        "text": "で"
      }
    ],
    "targetKanji": [
      "自",
      "分"
    ]
  },
  {
    "id": "w-l24-857",
    "lessonId": "l24",
    "lessonNumber": "Lección 24",
    "kanji": "ほかに",
    "reading": "ほかに",
    "romaji": "hokani",
    "spanish": "además, aparte de",
    "segments": [
      {
        "text": "ほかに"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l25-858",
    "lessonId": "l25",
    "lessonNumber": "Lección 25",
    "kanji": "考えます",
    "reading": "かんがえます",
    "romaji": "kangaemasu",
    "spanish": "pensar, reflexionar",
    "segments": [
      {
        "text": "考",
        "furigana": "かんが"
      },
      {
        "text": "えます"
      }
    ],
    "targetKanji": [
      "考"
    ]
  },
  {
    "id": "w-l25-859",
    "lessonId": "l25",
    "lessonNumber": "Lección 25",
    "kanji": "着きます",
    "reading": "つきます",
    "romaji": "tsukimasu",
    "spanish": "llegar (a la estación, al destino)",
    "segments": [
      {
        "text": "着",
        "furigana": "つ"
      },
      {
        "text": "きます"
      }
    ],
    "targetKanji": [
      "着"
    ]
  },
  {
    "id": "w-l25-860",
    "lessonId": "l25",
    "lessonNumber": "Lección 25",
    "kanji": "留学します",
    "reading": "りゅうがくします",
    "romaji": "ryuugakushimasu",
    "spanish": "estudiar en el extranjero",
    "segments": [
      {
        "text": "留",
        "furigana": "りゅう"
      },
      {
        "text": "学",
        "furigana": "がく"
      },
      {
        "text": "します"
      }
    ],
    "targetKanji": [
      "留",
      "学"
    ]
  },
  {
    "id": "w-l25-861",
    "lessonId": "l25",
    "lessonNumber": "Lección 25",
    "kanji": "取ります",
    "reading": "とります",
    "romaji": "torimasu",
    "spanish": "cumplir (años), tomar",
    "segments": [
      {
        "text": "取",
        "furigana": "と"
      },
      {
        "text": "ります"
      }
    ],
    "targetKanji": [
      "取"
    ]
  },
  {
    "id": "w-l25-862",
    "lessonId": "l25",
    "lessonNumber": "Lección 25",
    "kanji": "田舎",
    "reading": "いなか",
    "romaji": "inaka",
    "spanish": "el campo, pueblo natal",
    "segments": [
      {
        "text": "田",
        "furigana": "い"
      },
      {
        "text": "舎",
        "furigana": "なか"
      }
    ],
    "targetKanji": [
      "田",
      "舎"
    ]
  },
  {
    "id": "w-l25-863",
    "lessonId": "l25",
    "lessonNumber": "Lección 25",
    "kanji": "チャンス",
    "reading": "チャンス",
    "romaji": "chansu",
    "spanish": "oportunidad, chance",
    "segments": [
      {
        "text": "チャンス"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l25-864",
    "lessonId": "l25",
    "lessonNumber": "Lección 25",
    "kanji": "億",
    "reading": "おく",
    "romaji": "oku",
    "spanish": "cien millones",
    "segments": [
      {
        "text": "億",
        "furigana": "おく"
      }
    ],
    "targetKanji": [
      "億"
    ]
  },
  {
    "id": "w-l25-865",
    "lessonId": "l25",
    "lessonNumber": "Lección 25",
    "kanji": "もし",
    "reading": "もし",
    "romaji": "moshi",
    "spanish": "si... (condicional)",
    "segments": [
      {
        "text": "もし"
      }
    ],
    "targetKanji": []
  },
  {
    "id": "w-l25-866",
    "lessonId": "l25",
    "lessonNumber": "Lección 25",
    "kanji": "転勤",
    "reading": "てんきん",
    "romaji": "tenkin",
    "spanish": "traslado laboral",
    "segments": [
      {
        "text": "転",
        "furigana": "てん"
      },
      {
        "text": "勤",
        "furigana": "きん"
      }
    ],
    "targetKanji": [
      "転",
      "勤"
    ]
  },
  {
    "id": "w-l25-867",
    "lessonId": "l25",
    "lessonNumber": "Lección 25",
    "kanji": "一杯飲みましょう",
    "reading": "いっぱいのみましょう",
    "romaji": "ippai nomimashou",
    "spanish": "tomemos una copa",
    "segments": [
      {
        "text": "一",
        "furigana": "いっ"
      },
      {
        "text": "杯",
        "furigana": "ぱい"
      },
      {
        "text": "飲",
        "furigana": "の"
      },
      {
        "text": "みましょう"
      }
    ],
    "targetKanji": [
      "一",
      "杯",
      "飲"
    ]
  },
  {
    "id": "w-l25-868",
    "lessonId": "l25",
    "lessonNumber": "Lección 25",
    "kanji": "お世話になりました",
    "reading": "おせわになりました",
    "romaji": "osewani narimashita",
    "spanish": "gracias por sus atenciones y cuidados",
    "segments": [
      {
        "text": "お"
      },
      {
        "text": "世",
        "furigana": "せ"
      },
      {
        "text": "話",
        "furigana": "わ"
      },
      {
        "text": "になりました"
      }
    ],
    "targetKanji": [
      "世",
      "話"
    ]
  },
  {
    "id": "w-l25-869",
    "lessonId": "l25",
    "lessonNumber": "Lección 25",
    "kanji": "頑張ります",
    "reading": "がんばります",
    "romaji": "ganbarimasu",
    "spanish": "esforzarse al máximo",
    "segments": [
      {
        "text": "頑",
        "furigana": "がん"
      },
      {
        "text": "張",
        "furigana": "ば"
      },
      {
        "text": "ります"
      }
    ],
    "targetKanji": [
      "頑",
      "張"
    ]
  },
  {
    "id": "w-l25-870",
    "lessonId": "l25",
    "lessonNumber": "Lección 25",
    "kanji": "どうぞお元気で",
    "reading": "どうぞおげんきで",
    "romaji": "douzo ogenkide",
    "spanish": "que le vaya muy bien / cuídese",
    "segments": [
      {
        "text": "どうぞお"
      },
      {
        "text": "元",
        "furigana": "げん"
      },
      {
        "text": "気",
        "furigana": "き"
      },
      {
        "text": "で"
      }
    ],
    "targetKanji": [
      "元",
      "気"
    ]
  }
];

export function getVocabularyByLesson(lessonId: string): VocabularyItem[] {
  if (lessonId === 'all') return MNN_VOCABULARY;
  return MNN_VOCABULARY.filter((v) => v.lessonId === lessonId);
}

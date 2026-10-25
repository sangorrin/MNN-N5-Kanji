import { ReferenceLesson, ReferenceItem } from './types';

export const REFERENCE_LESSONS: ReferenceLesson[] = [
  // ==========================================
  // LECCIÓN 1: Países, nacionalidades e idiomas
  // ==========================================
  {
    lessonId: 'l01',
    lessonNumber: 'Lección 1',
    topic: 'Países, nacionalidades e idiomas',
    topicJapanese: '国・人・ことば',
    topicDescription:
      'En japonés, la nacionalidad se forma habitualmente añadiendo el sufijo 〜人 (じん) al nombre del país, y el idioma se expresa agregando el sufijo 〜語 (ご).',
    categories: ['Países, nacionalidades e idiomas'],
    items: [
      {
        id: 'ref-l01-1',
        lessonId: 'l01',
        category: 'Países, nacionalidades e idiomas',
        japanese: 'アメリカ · アメリカ人 · 英語',
        reading: 'アメリカ · アメリカじん · えいご',
        romaji: 'Amerika · Amerikajin · Eigo',
        spanish: 'Estados Unidos — estadounidense — inglés',
        badge: 'Estados Unidos',
        segments: [
          { text: 'アメリカ' },
          { text: ' · ' },
          { text: 'アメリカ' },
          { text: '人', furigana: 'じん' },
          { text: ' · ' },
          { text: '英語', furigana: 'えいご' },
        ],
        targetKanji: ['人', '語', '英'],
        countryTriple: {
          country: {
            japanese: 'アメリカ',
            segments: [{ text: 'アメリカ' }],
            romaji: 'Amerika',
            spanish: 'Estados Unidos',
          },
          nationality: {
            japanese: 'アメリカ人',
            segments: [{ text: 'アメリカ' }, { text: '人', furigana: 'じん' }],
            romaji: 'Amerikajin',
            spanish: 'estadounidense',
          },
          language: {
            japanese: '英語',
            segments: [{ text: '英語', furigana: 'えいご' }],
            romaji: 'Eigo',
            spanish: 'inglés',
          },
          targetKanji: ['人', '語', '英'],
        },
      },
      {
        id: 'ref-l01-2',
        lessonId: 'l01',
        category: 'Países, nacionalidades e idiomas',
        japanese: 'イギリス · イギリス人 · 英語',
        reading: 'イギリス · イギリスじん · えいご',
        romaji: 'Igirisu · Igirisujin · Eigo',
        spanish: 'Inglaterra / Reino Unido — británico/a — inglés',
        badge: 'Reino Unido',
        segments: [
          { text: 'イギリス' },
          { text: ' · ' },
          { text: 'イギリス' },
          { text: '人', furigana: 'じん' },
          { text: ' · ' },
          { text: '英語', furigana: 'えいご' },
        ],
        targetKanji: ['人', '語', '英'],
        countryTriple: {
          country: {
            japanese: 'イギリス',
            segments: [{ text: 'イギリス' }],
            romaji: 'Igirisu',
            spanish: 'Reino Unido / Inglaterra',
          },
          nationality: {
            japanese: 'イギリス人',
            segments: [{ text: 'イギリス' }, { text: '人', furigana: 'じん' }],
            romaji: 'Igirisujin',
            spanish: 'británico/a',
          },
          language: {
            japanese: '英語',
            segments: [{ text: '英語', furigana: 'えいご' }],
            romaji: 'Eigo',
            spanish: 'inglés',
          },
          targetKanji: ['人', '語', '英'],
        },
      },
      {
        id: 'ref-l01-3',
        lessonId: 'l01',
        category: 'Países, nacionalidades e idiomas',
        japanese: 'イタリア · イタリア人 · イタリア語',
        reading: 'イタリア · イタリアじん · イタリアご',
        romaji: 'Itaria · Itariajin · Itaria-go',
        spanish: 'Italia — italiano/a — italiano',
        badge: 'Italia',
        segments: [
          { text: 'イタリア' },
          { text: ' · ' },
          { text: 'イタリア' },
          { text: '人', furigana: 'じん' },
          { text: ' · ' },
          { text: 'イタリア' },
          { text: '語', furigana: 'ご' },
        ],
        targetKanji: ['人', '語'],
        countryTriple: {
          country: {
            japanese: 'イタリア',
            segments: [{ text: 'イタリア' }],
            romaji: 'Itaria',
            spanish: 'Italia',
          },
          nationality: {
            japanese: 'イタリア人',
            segments: [{ text: 'イタリア' }, { text: '人', furigana: 'じん' }],
            romaji: 'Itariajin',
            spanish: 'italiano/a',
          },
          language: {
            japanese: 'イタリア語',
            segments: [{ text: 'イタリア' }, { text: '語', furigana: 'ご' }],
            romaji: 'Itaria-go',
            spanish: 'italiano',
          },
          targetKanji: ['人', '語'],
        },
      },
      {
        id: 'ref-l01-4',
        lessonId: 'l01',
        category: 'Países, nacionalidades e idiomas',
        japanese: 'イラン · イラン人 · ペルシア語',
        reading: 'イラン · イランじん · ペルシアご',
        romaji: 'Iran · Iranjin · Perushia-go',
        spanish: 'Irán — iraní — persa',
        badge: 'Irán',
        segments: [
          { text: 'イラン' },
          { text: ' · ' },
          { text: 'イラン' },
          { text: '人', furigana: 'じん' },
          { text: ' · ' },
          { text: 'ペルシア' },
          { text: '語', furigana: 'ご' },
        ],
        targetKanji: ['人', '語'],
        countryTriple: {
          country: {
            japanese: 'イラン',
            segments: [{ text: 'イラン' }],
            romaji: 'Iran',
            spanish: 'Irán',
          },
          nationality: {
            japanese: 'イラン人',
            segments: [{ text: 'イラン' }, { text: '人', furigana: 'じん' }],
            romaji: 'Iranjin',
            spanish: 'iraní',
          },
          language: {
            japanese: 'ペルシア語',
            segments: [{ text: 'ペルシア' }, { text: '語', furigana: 'ご' }],
            romaji: 'Perushia-go',
            spanish: 'persa',
          },
          targetKanji: ['人', '語'],
        },
      },
      {
        id: 'ref-l01-5',
        lessonId: 'l01',
        category: 'Países, nacionalidades e idiomas',
        japanese: 'インド · インド人 · ヒンディー語',
        reading: 'インド · インドじん · ヒンディーご',
        romaji: 'Indo · Indojin · Hindii-go',
        spanish: 'India — indio/a — hindi',
        badge: 'India',
        segments: [
          { text: 'インド' },
          { text: ' · ' },
          { text: 'インド' },
          { text: '人', furigana: 'じん' },
          { text: ' · ' },
          { text: 'ヒンディー' },
          { text: '語', furigana: 'ご' },
        ],
        targetKanji: ['人', '語'],
        countryTriple: {
          country: {
            japanese: 'インド',
            segments: [{ text: 'インド' }],
            romaji: 'Indo',
            spanish: 'India',
          },
          nationality: {
            japanese: 'インド人',
            segments: [{ text: 'インド' }, { text: '人', furigana: 'じん' }],
            romaji: 'Indojin',
            spanish: 'indio/a',
          },
          language: {
            japanese: 'ヒンディー語',
            segments: [{ text: 'ヒンディー' }, { text: '語', furigana: 'ご' }],
            romaji: 'Hindii-go',
            spanish: 'hindi',
          },
          targetKanji: ['人', '語'],
        },
      },
      {
        id: 'ref-l01-6',
        lessonId: 'l01',
        category: 'Países, nacionalidades e idiomas',
        japanese: 'インドネシア · インドネシア人 · インドネシア語',
        reading: 'インドネシア · インドネシアじん · インドネシアご',
        romaji: 'Indoneshia · Indoneshiajin · Indoneshia-go',
        spanish: 'Indonesia — indonesio/a — indonesio',
        badge: 'Indonesia',
        segments: [
          { text: 'インドネシア' },
          { text: ' · ' },
          { text: 'インドネシア' },
          { text: '人', furigana: 'じん' },
          { text: ' · ' },
          { text: 'インドネシア' },
          { text: '語', furigana: 'ご' },
        ],
        targetKanji: ['人', '語'],
        countryTriple: {
          country: {
            japanese: 'インドネシア',
            segments: [{ text: 'インドネシア' }],
            romaji: 'Indoneshia',
            spanish: 'Indonesia',
          },
          nationality: {
            japanese: 'インドネシア人',
            segments: [{ text: 'インドネシア' }, { text: '人', furigana: 'じん' }],
            romaji: 'Indoneshiajin',
            spanish: 'indonesio/a',
          },
          language: {
            japanese: 'インドネシア語',
            segments: [{ text: 'インドネシア' }, { text: '語', furigana: 'ご' }],
            romaji: 'Indoneshia-go',
            spanish: 'indonesio',
          },
          targetKanji: ['人', '語'],
        },
      },
      {
        id: 'ref-l01-7',
        lessonId: 'l01',
        category: 'Países, nacionalidades e idiomas',
        japanese: 'エジプト · エジプト人 · アラビア語',
        reading: 'エジプト · エジプトじん · アラビアご',
        romaji: 'Ejiputo · Ejiputojin · Arabia-go',
        spanish: 'Egipto — egipcio/a — árabe',
        badge: 'Egipto',
        segments: [
          { text: 'エジプト' },
          { text: ' · ' },
          { text: 'エジプト' },
          { text: '人', furigana: 'じん' },
          { text: ' · ' },
          { text: 'アラビア' },
          { text: '語', furigana: 'ご' },
        ],
        targetKanji: ['人', '語'],
        countryTriple: {
          country: {
            japanese: 'エジプト',
            segments: [{ text: 'エジプト' }],
            romaji: 'Ejiputo',
            spanish: 'Egipto',
          },
          nationality: {
            japanese: 'エジプト人',
            segments: [{ text: 'エジプト' }, { text: '人', furigana: 'じん' }],
            romaji: 'Ejiputojin',
            spanish: 'egipcio/a',
          },
          language: {
            japanese: 'アラビア語',
            segments: [{ text: 'アラビア' }, { text: '語', furigana: 'ご' }],
            romaji: 'Arabia-go',
            spanish: 'árabe',
          },
          targetKanji: ['人', '語'],
        },
      },
      {
        id: 'ref-l01-8',
        lessonId: 'l01',
        category: 'Países, nacionalidades e idiomas',
        japanese: 'オーストラリア · オーストラリア人 · 英語',
        reading: 'オーストラリア · オーストラリアじん · えいご',
        romaji: 'Oosutoraria · Oosutorariajin · Eigo',
        spanish: 'Australia — australiano/a — inglés',
        badge: 'Australia',
        segments: [
          { text: 'オーストラリア' },
          { text: ' · ' },
          { text: 'オーストラリア' },
          { text: '人', furigana: 'じん' },
          { text: ' · ' },
          { text: '英語', furigana: 'えいご' },
        ],
        targetKanji: ['人', '語', '英'],
        countryTriple: {
          country: {
            japanese: 'オーストラリア',
            segments: [{ text: 'オーストラリア' }],
            romaji: 'Oosutoraria',
            spanish: 'Australia',
          },
          nationality: {
            japanese: 'オーストラリア人',
            segments: [{ text: 'オーストラリア' }, { text: '人', furigana: 'じん' }],
            romaji: 'Oosutorariajin',
            spanish: 'australiano/a',
          },
          language: {
            japanese: '英語',
            segments: [{ text: '英語', furigana: 'えいご' }],
            romaji: 'Eigo',
            spanish: 'inglés',
          },
          targetKanji: ['人', '語', '英'],
        },
      },
      {
        id: 'ref-l01-9',
        lessonId: 'l01',
        category: 'Países, nacionalidades e idiomas',
        japanese: 'カナダ · カナダ人 · 英語 / フランス語',
        reading: 'カナダ · カナダじん · えいご / フランスご',
        romaji: 'Kanada · Kanadajin · Eigo / Furansu-go',
        spanish: 'Canadá — canadiense — inglés / francés',
        badge: 'Canadá',
        segments: [
          { text: 'カナダ' },
          { text: ' · ' },
          { text: 'カナダ' },
          { text: '人', furigana: 'じん' },
          { text: ' · ' },
          { text: '英語', furigana: 'えいご' },
          { text: ' / ' },
          { text: 'フランス' },
          { text: '語', furigana: 'ご' },
        ],
        targetKanji: ['人', '語', '英'],
        countryTriple: {
          country: {
            japanese: 'カナダ',
            segments: [{ text: 'カナダ' }],
            romaji: 'Kanada',
            spanish: 'Canadá',
          },
          nationality: {
            japanese: 'カナダ人',
            segments: [{ text: 'カナダ' }, { text: '人', furigana: 'じん' }],
            romaji: 'Kanadajin',
            spanish: 'canadiense',
          },
          language: {
            japanese: '英語・フランス語',
            segments: [
              { text: '英語', furigana: 'えいご' },
              { text: '・' },
              { text: 'フランス' },
              { text: '語', furigana: 'ご' },
            ],
            romaji: 'Eigo / Furansu-go',
            spanish: 'inglés / francés',
          },
          targetKanji: ['人', '語', '英'],
        },
      },
      {
        id: 'ref-l01-10',
        lessonId: 'l01',
        category: 'Países, nacionalidades e idiomas',
        japanese: '韓国 · 韓国人 · 韓国語',
        reading: 'かんこく · かんこくじん · かんこくご',
        romaji: 'Kankoku · Kankokujin · Kankokugo',
        spanish: 'Corea del Sur — coreano/a — coreano',
        badge: 'Corea del Sur',
        segments: [
          { text: '韓国', furigana: 'かんこく' },
          { text: ' · ' },
          { text: '韓国人', furigana: 'かんこくじん' },
          { text: ' · ' },
          { text: '韓国語', furigana: 'かんこくご' },
        ],
        targetKanji: ['国', '人', '語'],
        countryTriple: {
          country: {
            japanese: '韓国',
            segments: [{ text: '韓国', furigana: 'かんこく' }],
            romaji: 'Kankoku',
            spanish: 'Corea del Sur',
          },
          nationality: {
            japanese: '韓国人',
            segments: [{ text: '韓国人', furigana: 'かんこくじん' }],
            romaji: 'Kankokujin',
            spanish: 'coreano/a',
          },
          language: {
            japanese: '韓国語',
            segments: [{ text: '韓国語', furigana: 'かんこくご' }],
            romaji: 'Kankokugo',
            spanish: 'coreano',
          },
          targetKanji: ['国', '人', '語'],
        },
      },
      {
        id: 'ref-l01-11',
        lessonId: 'l01',
        category: 'Países, nacionalidades e idiomas',
        japanese: 'サウジアラビア · サウジアラビア人 · アラビア語',
        reading: 'サウジアラビア · サウジアラビアじん · アラビアご',
        romaji: 'Saujiarabia · Saujiarabiajin · Arabia-go',
        spanish: 'Arabia Saudí — saudí — árabe',
        badge: 'Arabia Saudí',
        segments: [
          { text: 'サウジアラビア' },
          { text: ' · ' },
          { text: 'サウジアラビア' },
          { text: '人', furigana: 'じん' },
          { text: ' · ' },
          { text: 'アラビア' },
          { text: '語', furigana: 'ご' },
        ],
        targetKanji: ['人', '語'],
        countryTriple: {
          country: {
            japanese: 'サウジアラビア',
            segments: [{ text: 'サウジアラビア' }],
            romaji: 'Saujiarabia',
            spanish: 'Arabia Saudí',
          },
          nationality: {
            japanese: 'サウジアラビア人',
            segments: [{ text: 'サウジアラビア' }, { text: '人', furigana: 'じん' }],
            romaji: 'Saujiarabiajin',
            spanish: 'saudí',
          },
          language: {
            japanese: 'アラビア語',
            segments: [{ text: 'アラビア' }, { text: '語', furigana: 'ご' }],
            romaji: 'Arabia-go',
            spanish: 'árabe',
          },
          targetKanji: ['人', '語'],
        },
      },
      {
        id: 'ref-l01-12',
        lessonId: 'l01',
        category: 'Países, nacionalidades e idiomas',
        japanese: 'スペイン · スペイン人 · スペイン語',
        reading: 'スペイン · スペインじん · スペインご',
        romaji: 'Supein · Supeinjin · Supein-go',
        spanish: 'España — español/a — español',
        badge: 'España',
        segments: [
          { text: 'スペイン' },
          { text: ' · ' },
          { text: 'スペイン' },
          { text: '人', furigana: 'じん' },
          { text: ' · ' },
          { text: 'スペイン' },
          { text: '語', furigana: 'ご' },
        ],
        targetKanji: ['人', '語'],
        countryTriple: {
          country: {
            japanese: 'スペイン',
            segments: [{ text: 'スペイン' }],
            romaji: 'Supein',
            spanish: 'España',
          },
          nationality: {
            japanese: 'スペイン人',
            segments: [{ text: 'スペイン' }, { text: '人', furigana: 'じん' }],
            romaji: 'Supeinjin',
            spanish: 'español/a',
          },
          language: {
            japanese: 'スペイン語',
            segments: [{ text: 'スペイン' }, { text: '語', furigana: 'ご' }],
            romaji: 'Supein-go',
            spanish: 'español',
          },
          targetKanji: ['人', '語'],
        },
      },
      {
        id: 'ref-l01-13',
        lessonId: 'l01',
        category: 'Países, nacionalidades e idiomas',
        japanese: 'シンガポール · シンガポール人 · 英語',
        reading: 'シンガポール · シンガポールじん · えいご',
        romaji: 'Shingapooru · Shingapoorujin · Eigo',
        spanish: 'Singapur — singapurense — inglés',
        badge: 'Singapur',
        segments: [
          { text: 'シンガポール' },
          { text: ' · ' },
          { text: 'シンガポール' },
          { text: '人', furigana: 'じん' },
          { text: ' · ' },
          { text: '英語', furigana: 'えいご' },
        ],
        targetKanji: ['人', '語', '英'],
        countryTriple: {
          country: {
            japanese: 'シンガポール',
            segments: [{ text: 'シンガポール' }],
            romaji: 'Shingapooru',
            spanish: 'Singapur',
          },
          nationality: {
            japanese: 'シンガポール人',
            segments: [{ text: 'シンガポール' }, { text: '人', furigana: 'じん' }],
            romaji: 'Shingapoorujin',
            spanish: 'singapurense',
          },
          language: {
            japanese: '英語',
            segments: [{ text: '英語', furigana: 'えいご' }],
            romaji: 'Eigo',
            spanish: 'inglés',
          },
          targetKanji: ['人', '語', '英'],
        },
      },
      {
        id: 'ref-l01-14',
        lessonId: 'l01',
        category: 'Países, nacionalidades e idiomas',
        japanese: 'タイ · タイ人 · タイ語',
        reading: 'タイ · タイじん · タイご',
        romaji: 'Tai · Taijin · Tai-go',
        spanish: 'Tailandia — tailandés/a — tailandés',
        badge: 'Tailandia',
        segments: [
          { text: 'タイ' },
          { text: ' · ' },
          { text: 'タイ' },
          { text: '人', furigana: 'じん' },
          { text: ' · ' },
          { text: 'タイ' },
          { text: '語', furigana: 'ご' },
        ],
        targetKanji: ['人', '語'],
        countryTriple: {
          country: {
            japanese: 'タイ',
            segments: [{ text: 'タイ' }],
            romaji: 'Tai',
            spanish: 'Tailandia',
          },
          nationality: {
            japanese: 'タイ人',
            segments: [{ text: 'タイ' }, { text: '人', furigana: 'じん' }],
            romaji: 'Taijin',
            spanish: 'tailandés/a',
          },
          language: {
            japanese: 'タイ語',
            segments: [{ text: 'タイ' }, { text: '語', furigana: 'ご' }],
            romaji: 'Tai-go',
            spanish: 'tailandés',
          },
          targetKanji: ['人', '語'],
        },
      },
      {
        id: 'ref-l01-15',
        lessonId: 'l01',
        category: 'Países, nacionalidades e idiomas',
        japanese: '中国 · 中国人 · 中国語',
        reading: 'ちゅうごく · ちゅうごくじん · ちゅうごくご',
        romaji: 'Chuugoku · Chuugokujin · Chuugokugo',
        spanish: 'China — chino/a — chino',
        badge: 'China',
        segments: [
          { text: '中国', furigana: 'ちゅうごく' },
          { text: ' · ' },
          { text: '中国人', furigana: 'ちゅうごくじん' },
          { text: ' · ' },
          { text: '中国語', furigana: 'ちゅうごくご' },
        ],
        targetKanji: ['中', '国', '人', '語'],
        countryTriple: {
          country: {
            japanese: '中国',
            segments: [{ text: '中国', furigana: 'ちゅうごく' }],
            romaji: 'Chuugoku',
            spanish: 'China',
          },
          nationality: {
            japanese: '中国人',
            segments: [{ text: '中国人', furigana: 'ちゅうごくじん' }],
            romaji: 'Chuugokujin',
            spanish: 'chino/a',
          },
          language: {
            japanese: '中国語',
            segments: [{ text: '中国語', furigana: 'ちゅうごくご' }],
            romaji: 'Chuugokugo',
            spanish: 'chino',
          },
          targetKanji: ['中', '国', '人', '語'],
        },
      },
      {
        id: 'ref-l01-16',
        lessonId: 'l01',
        category: 'Países, nacionalidades e idiomas',
        japanese: 'ドイツ · ドイツ人 · ドイツ語',
        reading: 'ドイツ · ドイツじん · ドイツご',
        romaji: 'Doitsu · Doitsujin · Doitsu-go',
        spanish: 'Alemania — alemán/a — alemán',
        badge: 'Alemania',
        segments: [
          { text: 'ドイツ' },
          { text: ' · ' },
          { text: 'ドイツ' },
          { text: '人', furigana: 'じん' },
          { text: ' · ' },
          { text: 'ドイツ' },
          { text: '語', furigana: 'ご' },
        ],
        targetKanji: ['人', '語'],
        countryTriple: {
          country: {
            japanese: 'ドイツ',
            segments: [{ text: 'ドイツ' }],
            romaji: 'Doitsu',
            spanish: 'Alemania',
          },
          nationality: {
            japanese: 'ドイツ人',
            segments: [{ text: 'ドイツ' }, { text: '人', furigana: 'じん' }],
            romaji: 'Doitsujin',
            spanish: 'alemán/a',
          },
          language: {
            japanese: 'ドイツ語',
            segments: [{ text: 'ドイツ' }, { text: '語', furigana: 'ご' }],
            romaji: 'Doitsu-go',
            spanish: 'alemán',
          },
          targetKanji: ['人', '語'],
        },
      },
      {
        id: 'ref-l01-17',
        lessonId: 'l01',
        category: 'Países, nacionalidades e idiomas',
        japanese: '日本 · 日本人 · 日本語',
        reading: 'にほん · にほんじん · にほんご',
        romaji: 'Nihon · Nihonjin · Nihongo',
        spanish: 'Japón — japonés/a — japonés',
        badge: 'Japón',
        segments: [
          { text: '日本', furigana: 'にほん' },
          { text: ' · ' },
          { text: '日本人', furigana: 'にほんじん' },
          { text: ' · ' },
          { text: '日本語', furigana: 'にほんご' },
        ],
        targetKanji: ['日', '本', '人', '語'],
        countryTriple: {
          country: {
            japanese: '日本',
            segments: [{ text: '日本', furigana: 'にほん' }],
            romaji: 'Nihon',
            spanish: 'Japón',
          },
          nationality: {
            japanese: '日本人',
            segments: [{ text: '日本人', furigana: 'にほんじん' }],
            romaji: 'Nihonjin',
            spanish: 'japonés/a',
          },
          language: {
            japanese: '日本語',
            segments: [{ text: '日本語', furigana: 'にほんご' }],
            romaji: 'Nihongo',
            spanish: 'japonés',
          },
          targetKanji: ['日', '本', '人', '語'],
        },
      },
      {
        id: 'ref-l01-18',
        lessonId: 'l01',
        category: 'Países, nacionalidades e idiomas',
        japanese: 'フランス · フランス人 · フランス語',
        reading: 'フランス · フランスじん · フランスご',
        romaji: 'Furansu · Furansujin · Furansu-go',
        spanish: 'Francia — francés/a — francés',
        badge: 'Francia',
        segments: [
          { text: 'フランス' },
          { text: ' · ' },
          { text: 'フランス' },
          { text: '人', furigana: 'じん' },
          { text: ' · ' },
          { text: 'フランス' },
          { text: '語', furigana: 'ご' },
        ],
        targetKanji: ['人', '語'],
        countryTriple: {
          country: {
            japanese: 'フランス',
            segments: [{ text: 'フランス' }],
            romaji: 'Furansu',
            spanish: 'Francia',
          },
          nationality: {
            japanese: 'フランス人',
            segments: [{ text: 'フランス' }, { text: '人', furigana: 'じん' }],
            romaji: 'Furansujin',
            spanish: 'francés/a',
          },
          language: {
            japanese: 'フランス語',
            segments: [{ text: 'フランス' }, { text: '語', furigana: 'ご' }],
            romaji: 'Furansu-go',
            spanish: 'francés',
          },
          targetKanji: ['人', '語'],
        },
      },
      {
        id: 'ref-l01-19',
        lessonId: 'l01',
        category: 'Países, nacionalidades e idiomas',
        japanese: 'フィリピン · フィリピン人 · フィリピノ語',
        reading: 'フィリピン · フィリピンじん · フィリピノご',
        romaji: 'Firipin · Firipinjin · Firipino-go',
        spanish: 'Filipinas — filipino/a — filipino',
        badge: 'Filipinas',
        segments: [
          { text: 'フィリピン' },
          { text: ' · ' },
          { text: 'フィリピン' },
          { text: '人', furigana: 'じん' },
          { text: ' · ' },
          { text: 'フィリピノ' },
          { text: '語', furigana: 'ご' },
        ],
        targetKanji: ['人', '語'],
        countryTriple: {
          country: {
            japanese: 'フィリピン',
            segments: [{ text: 'フィリピン' }],
            romaji: 'Firipin',
            spanish: 'Filipinas',
          },
          nationality: {
            japanese: 'フィリピン人',
            segments: [{ text: 'フィリピン' }, { text: '人', furigana: 'じん' }],
            romaji: 'Firipinjin',
            spanish: 'filipino/a',
          },
          language: {
            japanese: 'フィリピノ語',
            segments: [{ text: 'フィリピノ' }, { text: '語', furigana: 'ご' }],
            romaji: 'Firipino-go',
            spanish: 'filipino',
          },
          targetKanji: ['人', '語'],
        },
      },
      {
        id: 'ref-l01-20',
        lessonId: 'l01',
        category: 'Países, nacionalidades e idiomas',
        japanese: 'ブラジル · ブラジル人 · ポルトガル語',
        reading: 'ブラジル · ブラジルじん · ポルトガルご',
        romaji: 'Burajiru · Burajirujin · Porutogaru-go',
        spanish: 'Brasil — brasileño/a — portugués',
        badge: 'Brasil',
        segments: [
          { text: 'ブラジル' },
          { text: ' · ' },
          { text: 'ブラジル' },
          { text: '人', furigana: 'じん' },
          { text: ' · ' },
          { text: 'ポルトガル' },
          { text: '語', furigana: 'ご' },
        ],
        targetKanji: ['人', '語'],
        countryTriple: {
          country: {
            japanese: 'ブラジル',
            segments: [{ text: 'ブラジル' }],
            romaji: 'Burajiru',
            spanish: 'Brasil',
          },
          nationality: {
            japanese: 'ブラジル人',
            segments: [{ text: 'ブラジル' }, { text: '人', furigana: 'じん' }],
            romaji: 'Burajirujin',
            spanish: 'brasileño/a',
          },
          language: {
            japanese: 'ポルトガル語',
            segments: [{ text: 'ポルトガル' }, { text: '語', furigana: 'ご' }],
            romaji: 'Porutogaru-go',
            spanish: 'portugués',
          },
          targetKanji: ['人', '語'],
        },
      },
      {
        id: 'ref-l01-21',
        lessonId: 'l01',
        category: 'Países, nacionalidades e idiomas',
        japanese: 'ベトナム · ベトナム人 · ベトナム語',
        reading: 'ベトナム · ベトナムじん · ベトナムご',
        romaji: 'Betonamu · Betonamujin · Betonamu-go',
        spanish: 'Vietnam — vietnamita — vietnamita',
        badge: 'Vietnam',
        segments: [
          { text: 'ベトナム' },
          { text: ' · ' },
          { text: 'ベトナム' },
          { text: '人', furigana: 'じん' },
          { text: ' · ' },
          { text: 'ベトナム' },
          { text: '語', furigana: 'ご' },
        ],
        targetKanji: ['人', '語'],
        countryTriple: {
          country: {
            japanese: 'ベトナム',
            segments: [{ text: 'ベトナム' }],
            romaji: 'Betonamu',
            spanish: 'Vietnam',
          },
          nationality: {
            japanese: 'ベトナム人',
            segments: [{ text: 'ベトナム' }, { text: '人', furigana: 'じん' }],
            romaji: 'Betonamujin',
            spanish: 'vietnamita',
          },
          language: {
            japanese: 'ベトナム語',
            segments: [{ text: 'ベトナム' }, { text: '語', furigana: 'ご' }],
            romaji: 'Betonamu-go',
            spanish: 'vietnamita',
          },
          targetKanji: ['人', '語'],
        },
      },
      {
        id: 'ref-l01-22',
        lessonId: 'l01',
        category: 'Países, nacionalidades e idiomas',
        japanese: 'マレーシア · マレーシア人 · マレーシア語',
        reading: 'マレーシア · マレーシアじん · マレーシアご',
        romaji: 'Mareeshia · Mareeshiajin · Mareeshia-go',
        spanish: 'Malasia — malayo/a — malayo',
        badge: 'Malasia',
        segments: [
          { text: 'マレーシア' },
          { text: ' · ' },
          { text: 'マレーシア' },
          { text: '人', furigana: 'じん' },
          { text: ' · ' },
          { text: 'マレーシア' },
          { text: '語', furigana: 'ご' },
        ],
        targetKanji: ['人', '語'],
        countryTriple: {
          country: {
            japanese: 'マレーシア',
            segments: [{ text: 'マレーシア' }],
            romaji: 'Mareeshia',
            spanish: 'Malasia',
          },
          nationality: {
            japanese: 'マレーシア人',
            segments: [{ text: 'マレーシア' }, { text: '人', furigana: 'じん' }],
            romaji: 'Mareeshiajin',
            spanish: 'malayo/a',
          },
          language: {
            japanese: 'マレーシア語',
            segments: [{ text: 'マレーシア' }, { text: '語', furigana: 'ご' }],
            romaji: 'Mareeshia-go',
            spanish: 'malayo',
          },
          targetKanji: ['人', '語'],
        },
      },
      {
        id: 'ref-l01-23',
        lessonId: 'l01',
        category: 'Países, nacionalidades e idiomas',
        japanese: 'メキシコ · メキシコ人 · スペイン語',
        reading: 'メキシコ · メキシコじん · スペインご',
        romaji: 'Mekishiko · Mekishikojin · Supein-go',
        spanish: 'México — mexicano/a — español',
        badge: 'México',
        segments: [
          { text: 'メキシコ' },
          { text: ' · ' },
          { text: 'メキシコ' },
          { text: '人', furigana: 'じん' },
          { text: ' · ' },
          { text: 'スペイン' },
          { text: '語', furigana: 'ご' },
        ],
        targetKanji: ['人', '語'],
        countryTriple: {
          country: {
            japanese: 'メキシコ',
            segments: [{ text: 'メキシコ' }],
            romaji: 'Mekishiko',
            spanish: 'México',
          },
          nationality: {
            japanese: 'メキシコ人',
            segments: [{ text: 'メキシコ' }, { text: '人', furigana: 'じん' }],
            romaji: 'Mekishikojin',
            spanish: 'mexicano/a',
          },
          language: {
            japanese: 'スペイン語',
            segments: [{ text: 'スペイン' }, { text: '語', furigana: 'ご' }],
            romaji: 'Supein-go',
            spanish: 'español',
          },
          targetKanji: ['人', '語'],
        },
      },
      {
        id: 'ref-l01-24',
        lessonId: 'l01',
        category: 'Países, nacionalidades e idiomas',
        japanese: 'ロシア · ロシア人 · ロシア語',
        reading: 'ロシア · ロシアじん · ロシアご',
        romaji: 'Roshia · Roshiajin · Roshia-go',
        spanish: 'Rusia — ruso/a — ruso',
        badge: 'Rusia',
        segments: [
          { text: 'ロシア' },
          { text: ' · ' },
          { text: 'ロシア' },
          { text: '人', furigana: 'じん' },
          { text: ' · ' },
          { text: 'ロシア' },
          { text: '語', furigana: 'ご' },
        ],
        targetKanji: ['人', '語'],
        countryTriple: {
          country: {
            japanese: 'ロシア',
            segments: [{ text: 'ロシア' }],
            romaji: 'Roshia',
            spanish: 'Rusia',
          },
          nationality: {
            japanese: 'ロシア人',
            segments: [{ text: 'ロシア' }, { text: '人', furigana: 'じん' }],
            romaji: 'Roshiajin',
            spanish: 'ruso/a',
          },
          language: {
            japanese: 'ロシア語',
            segments: [{ text: 'ロシア' }, { text: '語', furigana: 'ご' }],
            romaji: 'Roshia-go',
            spanish: 'ruso',
          },
          targetKanji: ['人', '語'],
        },
      },
    ],
  },

  // ==========================================
  // LECCIÓN 2: Nombres y apellidos japoneses
  // ==========================================
  {
    lessonId: 'l02',
    lessonNumber: 'Lección 2',
    topic: 'Nombres y apellidos japoneses',
    topicJapanese: '名前・日本の姓',
    topicDescription:
      'En Japón, el apellido precede al nombre de pila (ej. 田中 太郎: Tanaka Tarō). Esta es la lista de los 20 apellidos más comunes en Japón.',
    categories: ['Apellidos más comunes (日本の姓)'],
    items: [
      {
        id: 'ref-l02-1',
        lessonId: 'l02',
        category: 'Apellidos más comunes (日本の姓)',
        badge: '#1 en Japón',
        japanese: '佐藤',
        reading: 'さとう',
        romaji: 'Satou (Sato)',
        spanish: 'Sato (el apellido más frecuente en Japón)',
        segments: [{ text: '佐藤', furigana: 'さとう' }],
        targetKanji: ['佐', '藤'],
      },
      {
        id: 'ref-l02-2',
        lessonId: 'l02',
        category: 'Apellidos más comunes (日本の姓)',
        badge: '#2 en Japón',
        japanese: '鈴木',
        reading: 'すずき',
        romaji: 'Suzuki',
        spanish: 'Suzuki',
        segments: [{ text: '鈴木', furigana: 'すずき' }],
        targetKanji: ['鈴', '木'],
      },
      {
        id: 'ref-l02-3',
        lessonId: 'l02',
        category: 'Apellidos más comunes (日本の姓)',
        badge: '#3 en Japón',
        japanese: '高橋',
        reading: 'たかはし',
        romaji: 'Takahashi',
        spanish: 'Takahashi',
        segments: [{ text: '高橋', furigana: 'たかはし' }],
        targetKanji: ['高', '橋'],
      },
      {
        id: 'ref-l02-4',
        lessonId: 'l02',
        category: 'Apellidos más comunes (日本の姓)',
        badge: '#4 en Japón',
        japanese: '田中',
        reading: 'たなか',
        romaji: 'Tanaka',
        spanish: 'Tanaka',
        segments: [{ text: '田中', furigana: 'たなか' }],
        targetKanji: ['田', '中'],
      },
      {
        id: 'ref-l02-5',
        lessonId: 'l02',
        category: 'Apellidos más comunes (日本の姓)',
        badge: '#5 en Japón',
        japanese: '渡辺',
        reading: 'わたなべ',
        romaji: 'Watanabe',
        spanish: 'Watanabe',
        segments: [{ text: '渡辺', furigana: 'わたなべ' }],
        targetKanji: ['渡', '辺'],
      },
      {
        id: 'ref-l02-6',
        lessonId: 'l02',
        category: 'Apellidos más comunes (日本の姓)',
        badge: '#6 en Japón',
        japanese: '伊藤',
        reading: 'いとう',
        romaji: 'Itou (Ito)',
        spanish: 'Ito',
        segments: [{ text: '伊藤', furigana: 'いとう' }],
        targetKanji: ['伊', '藤'],
      },
      {
        id: 'ref-l02-7',
        lessonId: 'l02',
        category: 'Apellidos más comunes (日本の姓)',
        badge: '#7 en Japón',
        japanese: '山本',
        reading: 'やまもと',
        romaji: 'Yamamoto',
        spanish: 'Yamamoto',
        segments: [{ text: '山本', furigana: 'やまもと' }],
        targetKanji: ['山', '本'],
      },
      {
        id: 'ref-l02-8',
        lessonId: 'l02',
        category: 'Apellidos más comunes (日本の姓)',
        badge: '#8 en Japón',
        japanese: '中村',
        reading: 'なかむら',
        romaji: 'Nakamura',
        spanish: 'Nakamura',
        segments: [{ text: '中村', furigana: 'なかむら' }],
        targetKanji: ['中', '村'],
      },
      {
        id: 'ref-l02-9',
        lessonId: 'l02',
        category: 'Apellidos más comunes (日本の姓)',
        badge: '#9 en Japón',
        japanese: '小林',
        reading: 'こばやし',
        romaji: 'Kobayashi',
        spanish: 'Kobayashi',
        segments: [{ text: '小林', furigana: 'こばやし' }],
        targetKanji: ['小', '林'],
      },
      {
        id: 'ref-l02-10',
        lessonId: 'l02',
        category: 'Apellidos más comunes (日本の姓)',
        badge: '#10 en Japón',
        japanese: '加藤',
        reading: 'かとう',
        romaji: 'Katou (Kato)',
        spanish: 'Kato',
        segments: [{ text: '加藤', furigana: 'かとう' }],
        targetKanji: ['加', '藤'],
      },
      {
        id: 'ref-l02-11',
        lessonId: 'l02',
        category: 'Apellidos más comunes (日本の姓)',
        badge: '#11 en Japón',
        japanese: '吉田',
        reading: 'よしだ',
        romaji: 'Yoshida',
        spanish: 'Yoshida',
        segments: [{ text: '吉田', furigana: 'よしだ' }],
        targetKanji: ['吉', '田'],
      },
      {
        id: 'ref-l02-12',
        lessonId: 'l02',
        category: 'Apellidos más comunes (日本の姓)',
        badge: '#12 en Japón',
        japanese: '山田',
        reading: 'やまだ',
        romaji: 'Yamada',
        spanish: 'Yamada',
        segments: [{ text: '山田', furigana: 'やまだ' }],
        targetKanji: ['山', '田'],
      },
      {
        id: 'ref-l02-13',
        lessonId: 'l02',
        category: 'Apellidos más comunes (日本の姓)',
        badge: '#13 en Japón',
        japanese: '佐々木',
        reading: 'ささき',
        romaji: 'Sasaki',
        spanish: 'Sasaki',
        segments: [{ text: '佐々木', furigana: 'ささき' }],
        targetKanji: ['佐', '木'],
      },
      {
        id: 'ref-l02-14',
        lessonId: 'l02',
        category: 'Apellidos más comunes (日本の姓)',
        badge: '#14 en Japón',
        japanese: '斎藤',
        reading: 'さいとう',
        romaji: 'Saitou (Saito)',
        spanish: 'Saito',
        segments: [{ text: '斎藤', furigana: 'さいとう' }],
        targetKanji: ['藤'],
      },
      {
        id: 'ref-l02-15',
        lessonId: 'l02',
        category: 'Apellidos más comunes (日本の姓)',
        badge: '#15 en Japón',
        japanese: '山口',
        reading: 'やまぐち',
        romaji: 'Yamaguchi',
        spanish: 'Yamaguchi',
        segments: [{ text: '山口', furigana: 'やまぐち' }],
        targetKanji: ['山', '口'],
      },
      {
        id: 'ref-l02-16',
        lessonId: 'l02',
        category: 'Apellidos más comunes (日本の姓)',
        badge: '#16 en Japón',
        japanese: '松本',
        reading: 'まつもと',
        romaji: 'Matsumoto',
        spanish: 'Matsumoto',
        segments: [{ text: '松本', furigana: 'まつもと' }],
        targetKanji: ['松', '本'],
      },
      {
        id: 'ref-l02-17',
        lessonId: 'l02',
        category: 'Apellidos más comunes (日本の姓)',
        badge: '#17 en Japón',
        japanese: '井上',
        reading: 'いのうえ',
        romaji: 'Inoue',
        spanish: 'Inoue',
        segments: [{ text: '井上', furigana: 'いのうえ' }],
        targetKanji: ['井', '上'],
      },
      {
        id: 'ref-l02-18',
        lessonId: 'l02',
        category: 'Apellidos más comunes (日本の姓)',
        badge: '#18 en Japón',
        japanese: '木村',
        reading: 'きむら',
        romaji: 'Kimura',
        spanish: 'Kimura',
        segments: [{ text: '木村', furigana: 'きむら' }],
        targetKanji: ['木', '村'],
      },
      {
        id: 'ref-l02-19',
        lessonId: 'l02',
        category: 'Apellidos más comunes (日本の姓)',
        badge: '#19 en Japón',
        japanese: '林',
        reading: 'はやし',
        romaji: 'Hayashi',
        spanish: 'Hayashi',
        segments: [{ text: '林', furigana: 'はやし' }],
        targetKanji: ['林'],
      },
      {
        id: 'ref-l02-20',
        lessonId: 'l02',
        category: 'Apellidos más comunes (日本の姓)',
        badge: '#20 en Japón',
        japanese: '清水',
        reading: 'しみず',
        romaji: 'Shimizu',
        spanish: 'Shimizu',
        segments: [{ text: '清水', furigana: 'しみず' }],
        targetKanji: ['清', '水'],
      },
    ],
  },

  // ==========================================
  // LECCIÓN 3: Gran almacén y plantas
  // ==========================================
  {
    lessonId: 'l03',
    lessonNumber: 'Lección 3',
    topic: 'Gran almacén: Plantas y secciones',
    topicJapanese: 'デパートの案内・階',
    topicDescription:
      'Organización por plantas (階 - かい/がい) de unos grandes almacenes japoneses, desde la azotea (屋上) hasta los sótanos comerciales (地下).',
    categories: ['Plantas superiores', 'Plantas principales', 'Sótanos comerciales'],
    items: [
      {
        id: 'ref-l03-1',
        lessonId: 'l03',
        category: 'Plantas superiores',
        badge: 'R (Roof)',
        japanese: '屋上',
        reading: 'おくじょう',
        romaji: 'Okujou',
        spanish: 'Azotea / Parque de atracciones (屋上・遊園地)',
        details: 'Parque infantil, jardín en azotea y atracciones recreativas.',
        segments: [{ text: '屋上', furigana: 'おくじょう' }],
        targetKanji: ['屋', '上'],
      },
      {
        id: 'ref-l03-2',
        lessonId: 'l03',
        category: 'Plantas superiores',
        badge: '8F',
        japanese: '8階',
        reading: 'はちかい',
        romaji: 'Hachikai',
        spanish: 'Restaurantes y salones de eventos (レストラン・催し物会場)',
        details: 'Zona de restaurantes, exposiciones y eventos especiales (催し物会場).',
        segments: [{ text: '8階', furigana: 'はちかい' }],
        targetKanji: ['階', '会', '場'],
      },
      {
        id: 'ref-l03-3',
        lessonId: 'l03',
        category: 'Plantas superiores',
        badge: '7F',
        japanese: '7階',
        reading: 'ななかい',
        romaji: 'Nanakai',
        spanish: 'Relojes y gafas (時計・眼鏡)',
        details: 'Óptica, gafas, joyería y relojes de pulsera y pared.',
        segments: [{ text: '7階', furigana: 'ななかい' }],
        targetKanji: ['階', '時', '計'],
      },
      {
        id: 'ref-l03-4',
        lessonId: 'l03',
        category: 'Plantas superiores',
        badge: '6F',
        japanese: '6階',
        reading: 'ろっかい',
        romaji: 'Rokkai',
        spanish: 'Artículos de deporte y artículos de viaje (スポーツ用品・旅行用品)',
        details: 'Equipamiento deportivo, maletas, mochilas y artículos para viaje.',
        segments: [{ text: '6階', furigana: 'ろっかい' }],
        targetKanji: ['階', '旅', '行'],
      },
      {
        id: 'ref-l03-5',
        lessonId: 'l03',
        category: 'Plantas principales',
        badge: '5F',
        japanese: '5階',
        reading: 'ごかい',
        romaji: 'Gokai',
        spanish: 'Ropa infantil, juguetes, libros y papelería (子ども服・おもちゃ・本・文房具)',
        details: 'Moda infantil, juguetería, librería y artículos de escritorio.',
        segments: [{ text: '5階', furigana: 'ごかい' }],
        targetKanji: ['階', '子', '本'],
      },
      {
        id: 'ref-l03-6',
        lessonId: 'l03',
        category: 'Plantas principales',
        badge: '4F',
        japanese: '4階',
        reading: 'よんかい',
        romaji: 'Yonkai',
        spanish: 'Muebles, vajillas y electrodomésticos (家具・食器・電化製品)',
        details: 'Mobiliario del hogar, vajillas de cocina y electrodomésticos.',
        segments: [{ text: '4階', furigana: 'よんかい' }],
        targetKanji: ['階', '食', '電'],
      },
      {
        id: 'ref-l03-7',
        lessonId: 'l03',
        category: 'Plantas principales',
        badge: '3F',
        japanese: '3階',
        reading: 'さんがい',
        romaji: 'Sangai',
        spanish: 'Ropa para caballeros (紳士服)',
        details: 'Moda masculina, trajes, camisas y accesorios de caballero.',
        segments: [{ text: '3階', furigana: 'さんがい' }],
        targetKanji: ['階'],
      },
      {
        id: 'ref-l03-8',
        lessonId: 'l03',
        category: 'Plantas principales',
        badge: '2F',
        japanese: '2階',
        reading: 'にかい',
        romaji: 'Nikai',
        spanish: 'Ropa para damas (婦人服)',
        details: 'Moda femenina, vestidos, abrigos y ropa de mujer.',
        segments: [{ text: '2階', furigana: 'にかい' }],
        targetKanji: ['階', '人'],
      },
      {
        id: 'ref-l03-9',
        lessonId: 'l03',
        category: 'Plantas principales',
        badge: '1F',
        japanese: '1階',
        reading: 'いっかい',
        romaji: 'Ikkai',
        spanish: 'Calzados, bolsos, accesorios y cosméticos (靴・かばん・アクセサリー・化粧品)',
        details: 'Entrada principal con perfumería, cosmética, marroquinería y zapatería.',
        segments: [{ text: '1階', furigana: 'いっかい' }],
        targetKanji: ['階'],
      },
      {
        id: 'ref-l03-10',
        lessonId: 'l03',
        category: 'Sótanos comerciales',
        badge: 'B1F',
        japanese: '地下1階',
        reading: 'ちかいっかい',
        romaji: 'Chika ikkai',
        spanish: 'Comestibles / Alimentación ("Depachika" - 食品)',
        details: 'El famoso sótano gastronómico de Japón con delicatessen, pastelerías y supermercado gourmet.',
        segments: [{ text: '地下1階', furigana: 'ちかいっかい' }],
        targetKanji: ['地', '下', '階', '食'],
      },
      {
        id: 'ref-l03-11',
        lessonId: 'l03',
        category: 'Sótanos comerciales',
        badge: 'B2F',
        japanese: '地下2階',
        reading: 'ちかにかい',
        romaji: 'Chika nikai',
        spanish: 'Estacionamiento / Aparcamiento (駐車場)',
        details: 'Aparcamiento subterráneo para clientes del establecimiento.',
        segments: [{ text: '地下2階', furigana: 'ちかにかい' }],
        targetKanji: ['地', '下', '階', '車', '場'],
      },
    ],
  },

  // ==========================================
  // LECCIÓN 4: Teléfono y cartas
  // ==========================================
  {
    lessonId: 'l04',
    lessonNumber: 'Lección 4',
    topic: 'Teléfono y cartas',
    topicJapanese: '電話・手紙',
    topicDescription:
      'Números telefónicos de emergencia y asistencia pública en Japón, junto con la estructura de las direcciones postales.',
    categories: ['Números de emergencia e información útil', 'Estructura de dirección postal (住所)'],
    items: [
      {
        id: 'ref-l04-1',
        lessonId: 'l04',
        category: 'Números de emergencia e información útil',
        badge: '110',
        japanese: '警察署',
        reading: 'けいさつしょ',
        romaji: 'Keisatsusho (110)',
        spanish: 'Comisaría de policía (Policía ante emergencias y accidentes)',
        details: 'Marcando 110 se contacta directamente con la policía de emergencias en Japón.',
        segments: [{ text: '警察署', furigana: 'けいさつしょ' }],
        targetKanji: [],
      },
      {
        id: 'ref-l04-2',
        lessonId: 'l04',
        category: 'Números de emergencia e información útil',
        badge: '119',
        japanese: '消防署',
        reading: 'しょうぼうしょ',
        romaji: 'Shoubousho (119)',
        spanish: 'Cuartel de bomberos y ambulancias (Incendios y rescates)',
        details: 'Marcando 119 se solicita asistencia de bomberos y ambulancias médicas en emergencias.',
        segments: [{ text: '消防署', furigana: 'しょうぼうしょ' }],
        targetKanji: [],
      },
      {
        id: 'ref-l04-3',
        lessonId: 'l04',
        category: 'Números de emergencia e información útil',
        badge: '117',
        japanese: '時報',
        reading: 'じほう',
        romaji: 'Jihou (117)',
        spanish: 'Hora exacta (Servicio telefónico de sincronización horaria)',
        details: 'Servicio automatizado que comunica la hora oficial exacta con pitidos.',
        segments: [{ text: '時報', furigana: 'じほう' }],
        targetKanji: ['時'],
      },
      {
        id: 'ref-l04-4',
        lessonId: 'l04',
        category: 'Números de emergencia e información útil',
        badge: '177',
        japanese: '天気予報',
        reading: 'てんきよほう',
        romaji: 'Tenki yohou (177)',
        spanish: 'Pronóstico del tiempo (Información meteorológica telefónica)',
        details: 'Marcando 177 se escucha la previsión meteorológica de la zona.',
        segments: [{ text: '天気予報', furigana: 'てんきよほう' }],
        targetKanji: ['天', '気'],
      },
      {
        id: 'ref-l04-5',
        lessonId: 'l04',
        category: 'Números de emergencia e información útil',
        badge: '104',
        japanese: '電話番号案内',
        reading: 'でんわばんごうあんない',
        romaji: 'Denwa bangou annai (104)',
        spanish: 'Guía telefónica / Información de números (Directorio telefónico)',
        details: 'Servicio de consulta de abonados y números telefónicos por operadora.',
        segments: [
          { text: '電話番号', furigana: 'でんわばんごう' },
          { text: '案内', furigana: 'あんない' },
        ],
        targetKanji: ['電', '話'],
      },
      {
        id: 'ref-l04-6',
        lessonId: 'l04',
        category: 'Estructura de dirección postal (住所)',
        badge: '〒',
        japanese: '郵便番号',
        reading: 'ゆうびんばんごう',
        romaji: 'Yuubin bangou (〒)',
        spanish: 'Código postal (símbolo postal japonés 〒 con 7 dígitos)',
        details: 'El símbolo 〒 representa el correo japonés. El formato postal es de tres dígitos, guión y cuatro dígitos (ej. 〒100-0001).',
        segments: [{ text: '郵便番号', furigana: 'ゆうびんばんごう' }],
        targetKanji: [],
      },
      {
        id: 'ref-l04-7',
        lessonId: 'l04',
        category: 'Estructura de dirección postal (住所)',
        badge: '県',
        japanese: '県',
        reading: 'けん',
        romaji: 'Ken',
        spanish: 'Prefectura (división administrativa principal en Japón)',
        details: 'Japón se divide en 47 prefecturas: 1 都 (To: Tokio), 1 道 (Doo: Hokkaido), 2 府 (Fu: Osaka y Kioto) y 43 県 (Ken).',
        segments: [{ text: '県', furigana: 'けん' }],
        targetKanji: [],
      },
      {
        id: 'ref-l04-8',
        lessonId: 'l04',
        category: 'Estructura de dirección postal (住所)',
        badge: '市',
        japanese: '市',
        reading: 'し',
        romaji: 'Shi',
        spanish: 'Ciudad (municipio con estatus urbano)',
        details: 'Nivel municipal por debajo de la prefectura (ej. 横浜市 Yokohama-shi).',
        segments: [{ text: '市', furigana: 'し' }],
        targetKanji: [],
      },
      {
        id: 'ref-l04-9',
        lessonId: 'l04',
        category: 'Estructura de dirección postal (住所)',
        badge: '区',
        japanese: '区',
        reading: 'く',
        romaji: 'Ku',
        spanish: 'Distrito / Barrio municipal',
        details: 'Subdivisión de las grandes ciudades como Tokio u Osaka (ej. 新宿区 Shinjuku-ku).',
        segments: [{ text: '区', furigana: 'く' }],
        targetKanji: [],
      },
      {
        id: 'ref-l04-10',
        lessonId: 'l04',
        category: 'Estructura de dirección postal (住所)',
        badge: '号',
        japanese: '号',
        reading: 'ごう',
        romaji: 'Gou',
        spanish: 'Número de edificio / Apartamento o puerta',
        details: 'En las direcciones se usa el esquema chōme-banchi-gō (丁目-番地-号), donde 号 es el identificador final.',
        segments: [{ text: '号', furigana: 'ごう' }],
        targetKanji: [],
      },
    ],
  },

  // ==========================================
  // LECCIÓN 5: Días festivos y vacaciones
  // ==========================================
  {
    lessonId: 'l05',
    lessonNumber: 'Lección 5',
    topic: 'Días festivos y vacaciones',
    topicJapanese: '祝日 / 休み',
    topicDescription:
      'Días festivos oficiales de Japón (国民の祝日 - Kokumin no Shukujitsu) establecidos por ley. En estas fechas no hay colegios ni jornada laboral regular.',
    categories: ['Días festivos nacionales de Japón (国民の祝日)'],
    items: [
      {
        id: 'ref-l05-1',
        lessonId: 'l05',
        category: 'Días festivos nacionales de Japón (国民の祝日)',
        badge: '1 de enero',
        japanese: '元日',
        reading: 'がんじつ',
        romaji: 'Ganjitsu',
        spanish: 'Día de Año Nuevo',
        details: 'La festividad más solemne y familiar de Japón para dar la bienvenida al nuevo año.',
        segments: [{ text: '元日', furigana: 'がんじつ' }],
        targetKanji: ['日'],
      },
      {
        id: 'ref-l05-2',
        lessonId: 'l05',
        category: 'Días festivos nacionales de Japón (国民の祝日)',
        badge: '2º lunes de enero',
        japanese: '成人の日',
        reading: 'せいじんのひ',
        romaji: 'Seijin no Hi',
        spanish: 'Día de la Mayoría de Edad',
        details: 'Homenaje a los jóvenes que cumplen la mayoría de edad vistiendo kimonos tradicionales.',
        segments: [{ text: '成人の日', furigana: 'せいじんのひ' }],
        targetKanji: ['人', '日'],
      },
      {
        id: 'ref-l05-3',
        lessonId: 'l05',
        category: 'Días festivos nacionales de Japón (国民の祝日)',
        badge: '11 de febrero',
        japanese: '建国記念の日',
        reading: 'けんこくきねんのひ',
        romaji: 'Kenkoku Kinen no Hi',
        spanish: 'Día de la Fundación de la Nación',
        details: 'Conmemora la mítica ascensión del primer emperador Jinmu.',
        segments: [
          { text: '建国記念', furigana: 'けんこくきねん' },
          { text: 'の' },
          { text: '日', furigana: 'ひ' },
        ],
        targetKanji: ['国', '日'],
      },
      {
        id: 'ref-l05-4',
        lessonId: 'l05',
        category: 'Días festivos nacionales de Japón (国民の祝日)',
        badge: '23 de febrero',
        japanese: '天皇誕生日',
        reading: 'てんのうたんじょうび',
        romaji: 'Tennou Tanjoubi',
        spanish: 'Cumpleaños del Emperador',
        details: 'Cumpleaños del actual monarca Naruhito. El Palacio Imperial abre sus puertas al público.',
        segments: [
          { text: '天皇誕生日', furigana: 'てんのうたんじょうび' },
        ],
        targetKanji: ['天', '生', '日'],
      },
      {
        id: 'ref-l05-5',
        lessonId: 'l05',
        category: 'Días festivos nacionales de Japón (国民の祝日)',
        badge: '20/21 de marzo',
        japanese: '春分の日',
        reading: 'しゅんぶんのひ',
        romaji: 'Shunbun no Hi',
        spanish: 'Equinoccio de Primavera',
        details: 'Día dedicado a la veneración de la naturaleza y el afecto hacia los seres vivos.',
        segments: [{ text: '春分の日', furigana: 'しゅんぶんのひ' }],
        targetKanji: ['春', '分', '日'],
      },
      {
        id: 'ref-l05-6',
        lessonId: 'l05',
        category: 'Días festivos nacionales de Japón (国民の祝日)',
        badge: '29 de abril',
        japanese: '昭和の日',
        reading: 'しょうわのひ',
        romaji: 'Shouwa no Hi',
        spanish: 'Día de Showa (inicio de Golden Week)',
        details: 'Recuerdo de la era Showa y del cumpleaños del emperador Hirohito.',
        segments: [
          { text: '昭和', furigana: 'しょうわ' },
          { text: 'の' },
          { text: '日', furigana: 'ひ' },
        ],
        targetKanji: ['日'],
      },
      {
        id: 'ref-l05-7',
        lessonId: 'l05',
        category: 'Días festivos nacionales de Japón (国民の祝日)',
        badge: '3 de mayo',
        japanese: '憲法記念日',
        reading: 'けんぽうきねんび',
        romaji: 'Kenpou Kinenbi',
        spanish: 'Día de la Constitución',
        details: 'Conmemora la entrada en vigor de la Constitución democrática de Japón en 1947.',
        segments: [{ text: '憲法記念日', furigana: 'けんぽうきねんび' }],
        targetKanji: ['日'],
      },
      {
        id: 'ref-l05-8',
        lessonId: 'l05',
        category: 'Días festivos nacionales de Japón (国民の祝日)',
        badge: '4 de mayo',
        japanese: 'みどりの日',
        reading: 'みどりのひ',
        romaji: 'Midori no Hi',
        spanish: 'Día del Verdor (Día de la Naturaleza)',
        details: 'Festividad para apreciar los árboles, bosques y el entorno natural.',
        segments: [
          { text: 'みどりの' },
          { text: '日', furigana: 'ひ' },
        ],
        targetKanji: ['日'],
      },
      {
        id: 'ref-l05-9',
        lessonId: 'l05',
        category: 'Días festivos nacionales de Japón (国民の祝日)',
        badge: '5 de mayo',
        japanese: 'こどもの日',
        reading: 'こどものひ',
        romaji: 'Kodomo no Hi',
        spanish: 'Día del Niño',
        details: 'Celebración por la felicidad de los niños izando serpentinas de carpas (koinobori).',
        segments: [
          { text: 'こどもの' },
          { text: '日', furigana: 'ひ' },
        ],
        targetKanji: ['日'],
      },
      {
        id: 'ref-l05-10',
        lessonId: 'l05',
        category: 'Días festivos nacionales de Japón (国民の祝日)',
        badge: '3er lunes de julio',
        japanese: '海の日',
        reading: 'うみのひ',
        romaji: 'Umi no Hi',
        spanish: 'Día del Mar',
        details: 'Agradecimiento por las bendiciones de los mares y prosperidad como nación marítima.',
        segments: [{ text: '海の日', furigana: 'うみのひ' }],
        targetKanji: ['海', '日'],
      },
      {
        id: 'ref-l05-11',
        lessonId: 'l05',
        category: 'Días festivos nacionales de Japón (国民の祝日)',
        badge: '11 de agosto',
        japanese: '山の日',
        reading: 'やまのひ',
        romaji: 'Yama no Hi',
        spanish: 'Día de la Montaña',
        details: 'Ocasión para familiarizarse con las cumbres y apreciar las montañas de Japón.',
        segments: [{ text: '山の日', furigana: 'やまのひ' }],
        targetKanji: ['山', '日'],
      },
      {
        id: 'ref-l05-12',
        lessonId: 'l05',
        category: 'Días festivos nacionales de Japón (国民の祝日)',
        badge: '3er lunes de sept.',
        japanese: '敬老の日',
        reading: 'けいろうのひ',
        romaji: 'Keirou no Hi',
        spanish: 'Día del Respeto a los Mayores',
        details: 'Reconocimiento y afecto a los ancianos y celebración de su longevidad.',
        segments: [{ text: '敬老の日', furigana: 'けいろうのひ' }],
        targetKanji: ['日'],
      },
      {
        id: 'ref-l05-13',
        lessonId: 'l05',
        category: 'Días festivos nacionales de Japón (国民の祝日)',
        badge: '22/23 de sept.',
        japanese: '秋分の日',
        reading: 'しゅうぶんのひ',
        romaji: 'Shuubun no Hi',
        spanish: 'Equinoccio de Otoño',
        details: 'Día para honrar a los antepasados y recordar a los difuntos.',
        segments: [{ text: '秋分の日', furigana: 'しゅうぶんのひ' }],
        targetKanji: ['秋', '分', '日'],
      },
      {
        id: 'ref-l05-14',
        lessonId: 'l05',
        category: 'Días festivos nacionales de Japón (国民の祝日)',
        badge: '2º lunes de octubre',
        japanese: 'スポーツの日',
        reading: 'スポーツのひ',
        romaji: 'Supootsu no Hi (antiguo 体育の日 - Taiiku no Hi)',
        spanish: 'Día del Deporte (antiguo Día de la Educación Física)',
        details: 'Promoción del ejercicio físico, la salud y el espíritu deportivo.',
        segments: [
          { text: 'スポーツの' },
          { text: '日', furigana: 'ひ' },
        ],
        targetKanji: ['日'],
      },
      {
        id: 'ref-l05-15',
        lessonId: 'l05',
        category: 'Días festivos nacionales de Japón (国民の祝日)',
        badge: '3 de noviembre',
        japanese: '文化の日',
        reading: 'ぶんかのひ',
        romaji: 'Bunka no Hi',
        spanish: 'Día de la Cultura',
        details: 'Promoción de la libertad, la paz, las artes y la cultura académica.',
        segments: [{ text: '文化の日', furigana: 'ぶんかのひ' }],
        targetKanji: ['化', '日'],
      },
      {
        id: 'ref-l05-16',
        lessonId: 'l05',
        category: 'Días festivos nacionales de Japón (国民の祝日)',
        badge: '23 de noviembre',
        japanese: '勤労感謝の日',
        reading: 'きんろうかんしゃのひ',
        romaji: 'Kinrou Kansha no Hi',
        spanish: 'Día del Agradecimiento al Trabajo',
        details: 'Elogio al trabajo mutuo y gratitud por la producción y el esfuerzo laboral.',
        segments: [{ text: '勤労感謝の日', furigana: 'きんろうかんしゃのひ' }],
        targetKanji: ['日'],
      },
    ],
  },
  {
    "lessonId": "l06",
    "lessonNumber": "Lección 6",
    "topic": "Comida",
    "topicJapanese": "食べ物",
    "topicDescription": "Vocabulario de alimentos clasificado por verduras, frutas, carnes, pescados y cereales. Japón es 100% autosuficiente únicamente en arroz, e importa la mayor parte de frutas, carnes y pescados.",
    "categories": [
      "Verduras (野菜)",
      "Frutas (果物)",
      "Carne (肉)",
      "Pescados y mariscos (魚)",
      "Básicos"
    ],
    "items": [
      {
        "id": "ref-l06-1",
        "lessonId": "l06",
        "category": "Verduras (野菜)",
        "badge": "Verdura",
        "japanese": "きゅうり",
        "reading": "きゅうり",
        "romaji": "Kyuuri",
        "spanish": "Pepino",
        "segments": [
          {
            "text": "きゅうり"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l06-2",
        "lessonId": "l06",
        "category": "Verduras (野菜)",
        "badge": "Verdura",
        "japanese": "トマト",
        "reading": "トマト",
        "romaji": "Tomato",
        "spanish": "Tomate",
        "segments": [
          {
            "text": "トマト"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l06-3",
        "lessonId": "l06",
        "category": "Verduras (野菜)",
        "badge": "Verdura",
        "japanese": "なす",
        "reading": "なす",
        "romaji": "Nasu",
        "spanish": "Berenjena",
        "segments": [
          {
            "text": "なす"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l06-4",
        "lessonId": "l06",
        "category": "Verduras (野菜)",
        "badge": "Verdura",
        "japanese": "まめ",
        "reading": "まめ",
        "romaji": "Mame",
        "spanish": "Legumbres, judías",
        "segments": [
          {
            "text": "まめ"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l06-5",
        "lessonId": "l06",
        "category": "Verduras (野菜)",
        "badge": "Verdura",
        "japanese": "キャベツ",
        "reading": "キャベツ",
        "romaji": "Kyabetsu",
        "spanish": "Col, repollo",
        "segments": [
          {
            "text": "キャベツ"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l06-6",
        "lessonId": "l06",
        "category": "Verduras (野菜)",
        "badge": "Verdura",
        "japanese": "ねぎ",
        "reading": "ねぎ",
        "romaji": "Negi",
        "spanish": "Cebolleta, puerro japonés",
        "segments": [
          {
            "text": "ねぎ"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l06-7",
        "lessonId": "l06",
        "category": "Verduras (野菜)",
        "badge": "Verdura",
        "japanese": "白菜",
        "reading": "はくさい",
        "romaji": "Hakusai",
        "spanish": "Col china",
        "segments": [
          {
            "text": "白菜",
            "furigana": "はくさい"
          }
        ],
        "targetKanji": [
          "白"
        ]
      },
      {
        "id": "ref-l06-8",
        "lessonId": "l06",
        "category": "Verduras (野菜)",
        "badge": "Verdura",
        "japanese": "ほうれんそう",
        "reading": "ほうれんそう",
        "romaji": "Hourensou",
        "spanish": "Espinaca",
        "segments": [
          {
            "text": "ほうれんそう"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l06-9",
        "lessonId": "l06",
        "category": "Verduras (野菜)",
        "badge": "Verdura",
        "japanese": "レタス",
        "reading": "レタス",
        "romaji": "Retasu",
        "spanish": "Lechuga",
        "segments": [
          {
            "text": "レタス"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l06-10",
        "lessonId": "l06",
        "category": "Verduras (野菜)",
        "badge": "Verdura",
        "japanese": "じゃがいも",
        "reading": "じゃがいも",
        "romaji": "Jagaimo",
        "spanish": "Patatas",
        "segments": [
          {
            "text": "じゃがいも"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l06-11",
        "lessonId": "l06",
        "category": "Verduras (野菜)",
        "badge": "Verdura",
        "japanese": "大根",
        "reading": "だいこん",
        "romaji": "Daikon",
        "spanish": "Nabo japonés",
        "segments": [
          {
            "text": "大根",
            "furigana": "だいこん"
          }
        ],
        "targetKanji": [
          "大"
        ]
      },
      {
        "id": "ref-l06-12",
        "lessonId": "l06",
        "category": "Verduras (野菜)",
        "badge": "Verdura",
        "japanese": "たまねぎ",
        "reading": "たまねぎ",
        "romaji": "Tamanegi",
        "spanish": "Cebolla",
        "segments": [
          {
            "text": "たまねぎ"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l06-13",
        "lessonId": "l06",
        "category": "Verduras (野菜)",
        "badge": "Verdura",
        "japanese": "にんじん",
        "reading": "にんじん",
        "romaji": "Ninjin",
        "spanish": "Zanahoria",
        "segments": [
          {
            "text": "にんじん"
          }
        ],
        "targetKanji": [
          "人"
        ]
      },
      {
        "id": "ref-l06-14",
        "lessonId": "l06",
        "category": "Frutas (果物)",
        "badge": "Fruta",
        "japanese": "いちご",
        "reading": "いちご",
        "romaji": "Ichigo",
        "spanish": "Fresas",
        "segments": [
          {
            "text": "いちご"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l06-15",
        "lessonId": "l06",
        "category": "Frutas (果物)",
        "badge": "Fruta",
        "japanese": "もも",
        "reading": "もも",
        "romaji": "Momo",
        "spanish": "Melocotón, durazno",
        "segments": [
          {
            "text": "もも"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l06-16",
        "lessonId": "l06",
        "category": "Frutas (果物)",
        "badge": "Fruta",
        "japanese": "すいか",
        "reading": "すいか",
        "romaji": "Suika",
        "spanish": "Sandía",
        "segments": [
          {
            "text": "すいか"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l06-17",
        "lessonId": "l06",
        "category": "Frutas (果物)",
        "badge": "Fruta",
        "japanese": "ぶどう",
        "reading": "ぶどう",
        "romaji": "Budou",
        "spanish": "Uvas",
        "segments": [
          {
            "text": "ぶどう"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l06-18",
        "lessonId": "l06",
        "category": "Frutas (果物)",
        "badge": "Fruta",
        "japanese": "なし",
        "reading": "なし",
        "romaji": "Nashi",
        "spanish": "Pera japonesa",
        "segments": [
          {
            "text": "なし"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l06-19",
        "lessonId": "l06",
        "category": "Frutas (果物)",
        "badge": "Fruta",
        "japanese": "かき",
        "reading": "かき",
        "romaji": "Kaki",
        "spanish": "Caqui",
        "segments": [
          {
            "text": "かき"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l06-20",
        "lessonId": "l06",
        "category": "Frutas (果物)",
        "badge": "Fruta",
        "japanese": "みかん",
        "reading": "みかん",
        "romaji": "Mikan",
        "spanish": "Mandarina",
        "segments": [
          {
            "text": "みかん"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l06-21",
        "lessonId": "l06",
        "category": "Frutas (果物)",
        "badge": "Fruta",
        "japanese": "りんご",
        "reading": "りんご",
        "romaji": "Ringo",
        "spanish": "Manzana",
        "segments": [
          {
            "text": "りんご"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l06-22",
        "lessonId": "l06",
        "category": "Frutas (果物)",
        "badge": "Fruta",
        "japanese": "バナナ",
        "reading": "バナナ",
        "romaji": "Banana",
        "spanish": "Plátano",
        "segments": [
          {
            "text": "バナナ"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l06-23",
        "lessonId": "l06",
        "category": "Carne (肉)",
        "badge": "Carne",
        "japanese": "牛肉",
        "reading": "ぎゅうにく",
        "romaji": "Gyuuniku",
        "spanish": "Ternera, carne de vaca",
        "segments": [
          {
            "text": "牛肉",
            "furigana": "ぎゅうにく"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l06-24",
        "lessonId": "l06",
        "category": "Carne (肉)",
        "badge": "Carne",
        "japanese": "とり肉",
        "reading": "とりにく",
        "romaji": "Toriniku",
        "spanish": "Pollo, carne de ave",
        "segments": [
          {
            "text": "とり"
          },
          {
            "text": "肉",
            "furigana": "にく"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l06-25",
        "lessonId": "l06",
        "category": "Carne (肉)",
        "badge": "Carne",
        "japanese": "豚肉",
        "reading": "ぶたにく",
        "romaji": "Butaniku",
        "spanish": "Cerdo, carne de cerdo",
        "segments": [
          {
            "text": "豚肉",
            "furigana": "ぶたにく"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l06-26",
        "lessonId": "l06",
        "category": "Carne (肉)",
        "badge": "Carne",
        "japanese": "ソーセージ",
        "reading": "ソーセージ",
        "romaji": "Sooseeji",
        "spanish": "Salchicha",
        "segments": [
          {
            "text": "ソーセージ"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l06-27",
        "lessonId": "l06",
        "category": "Carne (肉)",
        "badge": "Carne",
        "japanese": "ハム",
        "reading": "ハム",
        "romaji": "Hamu",
        "spanish": "Jamón",
        "segments": [
          {
            "text": "ハム"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l06-28",
        "lessonId": "l06",
        "category": "Básicos",
        "badge": "Cereal",
        "japanese": "米",
        "reading": "こめ",
        "romaji": "Kome",
        "spanish": "Arroz (grano crudo)",
        "details": "El único cereal en el que Japón tiene el 100% de autosuficiencia alimentaria.",
        "segments": [
          {
            "text": "米",
            "furigana": "こめ"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l06-29",
        "lessonId": "l06",
        "category": "Básicos",
        "badge": "Básico",
        "japanese": "卵",
        "reading": "たまご",
        "romaji": "Tamago",
        "spanish": "Huevo",
        "segments": [
          {
            "text": "卵",
            "furigana": "たまご"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l06-30",
        "lessonId": "l06",
        "category": "Pescados y mariscos (魚)",
        "badge": "Pescado",
        "japanese": "あじ",
        "reading": "あじ",
        "romaji": "Aji",
        "spanish": "Jurel",
        "segments": [
          {
            "text": "あじ"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l06-31",
        "lessonId": "l06",
        "category": "Pescados y mariscos (魚)",
        "badge": "Pescado",
        "japanese": "いわし",
        "reading": "いわし",
        "romaji": "Iwashi",
        "spanish": "Sardina",
        "segments": [
          {
            "text": "いわし"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l06-32",
        "lessonId": "l06",
        "category": "Pescados y mariscos (魚)",
        "badge": "Pescado",
        "japanese": "さば",
        "reading": "さば",
        "romaji": "Saba",
        "spanish": "Caballa, verdel",
        "segments": [
          {
            "text": "さば"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l06-33",
        "lessonId": "l06",
        "category": "Pescados y mariscos (魚)",
        "badge": "Pescado",
        "japanese": "さんま",
        "reading": "さんま",
        "romaji": "Sanma",
        "spanish": "Paparda (pez aguja del otoño japonés)",
        "segments": [
          {
            "text": "さんま"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l06-34",
        "lessonId": "l06",
        "category": "Pescados y mariscos (魚)",
        "badge": "Pescado",
        "japanese": "さけ",
        "reading": "さけ",
        "romaji": "Sake",
        "spanish": "Salmón",
        "segments": [
          {
            "text": "さけ"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l06-35",
        "lessonId": "l06",
        "category": "Pescados y mariscos (魚)",
        "badge": "Pescado",
        "japanese": "まぐろ",
        "reading": "まぐろ",
        "romaji": "Maguro",
        "spanish": "Atún",
        "segments": [
          {
            "text": "まぐろ"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l06-36",
        "lessonId": "l06",
        "category": "Pescados y mariscos (魚)",
        "badge": "Pescado",
        "japanese": "たい",
        "reading": "たい",
        "romaji": "Tai",
        "spanish": "Besugo, pargo rojo (pez augurio de buena suerte y celebraciones)",
        "segments": [
          {
            "text": "たい"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l06-37",
        "lessonId": "l06",
        "category": "Pescados y mariscos (魚)",
        "badge": "Pescado",
        "japanese": "たら",
        "reading": "たら",
        "romaji": "Tara",
        "spanish": "Bacalao",
        "segments": [
          {
            "text": "たら"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l06-38",
        "lessonId": "l06",
        "category": "Pescados y mariscos (魚)",
        "badge": "Marisco",
        "japanese": "えび",
        "reading": "えび",
        "romaji": "Ebi",
        "spanish": "Camarón, langostino, gamba",
        "segments": [
          {
            "text": "えび"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l06-39",
        "lessonId": "l06",
        "category": "Pescados y mariscos (魚)",
        "badge": "Marisco",
        "japanese": "かに",
        "reading": "かに",
        "romaji": "Kani",
        "spanish": "Cangrejo, centolla",
        "segments": [
          {
            "text": "かに"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l06-40",
        "lessonId": "l06",
        "category": "Pescados y mariscos (魚)",
        "badge": "Marisco",
        "japanese": "いか",
        "reading": "いか",
        "romaji": "Ika",
        "spanish": "Calamar",
        "segments": [
          {
            "text": "いか"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l06-41",
        "lessonId": "l06",
        "category": "Pescados y mariscos (魚)",
        "badge": "Marisco",
        "japanese": "たこ",
        "reading": "たこ",
        "romaji": "Tako",
        "spanish": "Pulpo",
        "segments": [
          {
            "text": "たこ"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l06-42",
        "lessonId": "l06",
        "category": "Pescados y mariscos (魚)",
        "badge": "Marisco",
        "japanese": "貝",
        "reading": "かい",
        "romaji": "Kai",
        "spanish": "Moluscos con concha, almejas",
        "segments": [
          {
            "text": "貝",
            "furigana": "かい"
          }
        ],
        "targetKanji": []
      }
    ]
  },
  {
    "lessonId": "l07",
    "lessonNumber": "Lección 7",
    "topic": "Familia",
    "topicJapanese": "家族",
    "topicDescription": "En japonés es fundamental distinguir entre los términos para la propia familia (términos humildes) y los que se usan para la familia de otra persona (términos de cortesía y respeto con prefijo お〜 / ご〜 y sufijo 〜さん).",
    "categories": [
      "Mi familia (わたしの家族 - Humilde)",
      "Familia de otra persona (田中さんの家族 - Respetuoso)"
    ],
    "items": [
      {
        "id": "ref-l07-1",
        "lessonId": "l07",
        "category": "Mi familia (わたしの家族 - Humilde)",
        "badge": "Mi familia",
        "japanese": "祖父",
        "reading": "そふ",
        "romaji": "Sofu",
        "spanish": "Mi abuelo",
        "segments": [
          {
            "text": "祖父",
            "furigana": "そふ"
          }
        ],
        "targetKanji": [
          "父"
        ]
      },
      {
        "id": "ref-l07-2",
        "lessonId": "l07",
        "category": "Mi familia (わたしの家族 - Humilde)",
        "badge": "Mi familia",
        "japanese": "祖母",
        "reading": "そぼ",
        "romaji": "Sobo",
        "spanish": "Mi abuela",
        "segments": [
          {
            "text": "祖母",
            "furigana": "そぼ"
          }
        ],
        "targetKanji": [
          "母"
        ]
      },
      {
        "id": "ref-l07-3",
        "lessonId": "l07",
        "category": "Mi familia (わたしの家族 - Humilde)",
        "badge": "Mi familia",
        "japanese": "祖父母",
        "reading": "そふぼ",
        "romaji": "Sofubo",
        "spanish": "Mis abuelos",
        "segments": [
          {
            "text": "祖父母",
            "furigana": "そふぼ"
          }
        ],
        "targetKanji": [
          "父",
          "母"
        ]
      },
      {
        "id": "ref-l07-4",
        "lessonId": "l07",
        "category": "Mi familia (わたしの家族 - Humilde)",
        "badge": "Mi familia",
        "japanese": "父",
        "reading": "ちち",
        "romaji": "Chichi",
        "spanish": "Mi padre",
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
        "id": "ref-l07-5",
        "lessonId": "l07",
        "category": "Mi familia (わたしの家族 - Humilde)",
        "badge": "Mi familia",
        "japanese": "母",
        "reading": "はは",
        "romaji": "Haha",
        "spanish": "Mi madre",
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
        "id": "ref-l07-6",
        "lessonId": "l07",
        "category": "Mi familia (わたしの家族 - Humilde)",
        "badge": "Mi familia",
        "japanese": "両親",
        "reading": "りょうしん",
        "romaji": "Ryoushin",
        "spanish": "Mis padres",
        "segments": [
          {
            "text": "両親",
            "furigana": "りょうしん"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l07-7",
        "lessonId": "l07",
        "category": "Mi familia (わたしの家族 - Humilde)",
        "badge": "Mi familia",
        "japanese": "兄",
        "reading": "あに",
        "romaji": "Ani",
        "spanish": "Mi hermano mayor",
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
        "id": "ref-l07-8",
        "lessonId": "l07",
        "category": "Mi familia (わたしの家族 - Humilde)",
        "badge": "Mi familia",
        "japanese": "姉",
        "reading": "あね",
        "romaji": "Ane",
        "spanish": "Mi hermana mayor",
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
        "id": "ref-l07-9",
        "lessonId": "l07",
        "category": "Mi familia (わたしの家族 - Humilde)",
        "badge": "Mi familia",
        "japanese": "弟",
        "reading": "おとうと",
        "romaji": "Otouto",
        "spanish": "Mi hermano menor",
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
        "id": "ref-l07-10",
        "lessonId": "l07",
        "category": "Mi familia (わたしの家族 - Humilde)",
        "badge": "Mi familia",
        "japanese": "妹",
        "reading": "いもうと",
        "romaji": "Imouto",
        "spanish": "Mi hermana menor",
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
        "id": "ref-l07-11",
        "lessonId": "l07",
        "category": "Mi familia (わたしの家族 - Humilde)",
        "badge": "Mi familia",
        "japanese": "兄弟",
        "reading": "きょうだい",
        "romaji": "Kyoudai",
        "spanish": "Mis hermanos",
        "segments": [
          {
            "text": "兄弟",
            "furigana": "きょうだい"
          }
        ],
        "targetKanji": [
          "兄",
          "弟"
        ]
      },
      {
        "id": "ref-l07-12",
        "lessonId": "l07",
        "category": "Mi familia (わたしの家族 - Humilde)",
        "badge": "Mi familia",
        "japanese": "夫 · 主人",
        "reading": "おっと · しゅじん",
        "romaji": "Otto · Shujin",
        "spanish": "Mi esposo / marido",
        "segments": [
          {
            "text": "夫",
            "furigana": "おっと"
          },
          {
            "text": " · "
          },
          {
            "text": "主人",
            "furigana": "しゅじん"
          }
        ],
        "targetKanji": [
          "人"
        ]
      },
      {
        "id": "ref-l07-13",
        "lessonId": "l07",
        "category": "Mi familia (わたしの家族 - Humilde)",
        "badge": "Mi familia",
        "japanese": "妻 · 家内",
        "reading": "つま · かない",
        "romaji": "Tsuma · Kanai",
        "spanish": "Mi esposa / mujer",
        "segments": [
          {
            "text": "妻",
            "furigana": "つま"
          },
          {
            "text": " · "
          },
          {
            "text": "家内",
            "furigana": "かない"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l07-14",
        "lessonId": "l07",
        "category": "Mi familia (わたしの家族 - Humilde)",
        "badge": "Mi familia",
        "japanese": "夫婦",
        "reading": "ふうふ",
        "romaji": "Fuufu",
        "spanish": "Matrimonio, pareja (nosotros)",
        "segments": [
          {
            "text": "夫婦",
            "furigana": "ふうふ"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l07-15",
        "lessonId": "l07",
        "category": "Mi familia (わたしの家族 - Humilde)",
        "badge": "Mi familia",
        "japanese": "息子",
        "reading": "むすこ",
        "romaji": "Musuko",
        "spanish": "Mi hijo",
        "segments": [
          {
            "text": "息子",
            "furigana": "むすこ"
          }
        ],
        "targetKanji": [
          "子"
        ]
      },
      {
        "id": "ref-l07-16",
        "lessonId": "l07",
        "category": "Mi familia (わたしの家族 - Humilde)",
        "badge": "Mi familia",
        "japanese": "娘",
        "reading": "むすめ",
        "romaji": "Musume",
        "spanish": "Mi hija",
        "segments": [
          {
            "text": "娘",
            "furigana": "むすめ"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l07-17",
        "lessonId": "l07",
        "category": "Mi familia (わたしの家族 - Humilde)",
        "badge": "Mi familia",
        "japanese": "子ども",
        "reading": "こども",
        "romaji": "Kodomo",
        "spanish": "Mis hijos",
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
        "id": "ref-l07-18",
        "lessonId": "l07",
        "category": "Familia de otra persona (田中さんの家族 - Respetuoso)",
        "badge": "De otra persona",
        "japanese": "おじいさん",
        "reading": "おじいさん",
        "romaji": "Ojiisan",
        "spanish": "Abuelo (de otra persona)",
        "segments": [
          {
            "text": "おじいさん"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l07-19",
        "lessonId": "l07",
        "category": "Familia de otra persona (田中さんの家族 - Respetuoso)",
        "badge": "De otra persona",
        "japanese": "おばあさん",
        "reading": "おばあさん",
        "romaji": "Obaasan",
        "spanish": "Abuela (de otra persona)",
        "segments": [
          {
            "text": "おばあさん"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l07-20",
        "lessonId": "l07",
        "category": "Familia de otra persona (田中さんの家族 - Respetuoso)",
        "badge": "De otra persona",
        "japanese": "お父さん",
        "reading": "おとうさん",
        "romaji": "Otousan",
        "spanish": "Padre (de otra persona)",
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
        "id": "ref-l07-21",
        "lessonId": "l07",
        "category": "Familia de otra persona (田中さんの家族 - Respetuoso)",
        "badge": "De otra persona",
        "japanese": "お母さん",
        "reading": "おかあさん",
        "romaji": "Okaasan",
        "spanish": "Madre (de otra persona)",
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
        "id": "ref-l07-22",
        "lessonId": "l07",
        "category": "Familia de otra persona (田中さんの家族 - Respetuoso)",
        "badge": "De otra persona",
        "japanese": "ご両親",
        "reading": "ごりょうしん",
        "romaji": "Goryoushin",
        "spanish": "Padres (de otra persona)",
        "segments": [
          {
            "text": "ご"
          },
          {
            "text": "両親",
            "furigana": "りょうしん"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l07-23",
        "lessonId": "l07",
        "category": "Familia de otra persona (田中さんの家族 - Respetuoso)",
        "badge": "De otra persona",
        "japanese": "お兄さん",
        "reading": "おにいさん",
        "romaji": "Oniisan",
        "spanish": "Hermano mayor (de otra persona)",
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
        "id": "ref-l07-24",
        "lessonId": "l07",
        "category": "Familia de otra persona (田中さんの家族 - Respetuoso)",
        "badge": "De otra persona",
        "japanese": "お姉さん",
        "reading": "おねえさん",
        "romaji": "Oneesan",
        "spanish": "Hermana mayor (de otra persona)",
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
        "id": "ref-l07-25",
        "lessonId": "l07",
        "category": "Familia de otra persona (田中さんの家族 - Respetuoso)",
        "badge": "De otra persona",
        "japanese": "弟さん",
        "reading": "おとうとさん",
        "romaji": "Otoutosan",
        "spanish": "Hermano menor (de otra persona)",
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
        "id": "ref-l07-26",
        "lessonId": "l07",
        "category": "Familia de otra persona (田中さんの家族 - Respetuoso)",
        "badge": "De otra persona",
        "japanese": "妹さん",
        "reading": "いもうとさん",
        "romaji": "Imoutosan",
        "spanish": "Hermana menor (de otra persona)",
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
        "id": "ref-l07-27",
        "lessonId": "l07",
        "category": "Familia de otra persona (田中さんの家族 - Respetuoso)",
        "badge": "De otra persona",
        "japanese": "ご兄弟",
        "reading": "ごきょうだい",
        "romaji": "Gokyoudai",
        "spanish": "Hermanos (de otra persona)",
        "segments": [
          {
            "text": "ご"
          },
          {
            "text": "兄弟",
            "furigana": "きょうだい"
          }
        ],
        "targetKanji": [
          "兄",
          "弟"
        ]
      },
      {
        "id": "ref-l07-28",
        "lessonId": "l07",
        "category": "Familia de otra persona (田中さんの家族 - Respetuoso)",
        "badge": "De otra persona",
        "japanese": "ご主人",
        "reading": "ごしゅじん",
        "romaji": "Goshujin",
        "spanish": "Esposo / marido (de otra persona)",
        "segments": [
          {
            "text": "ご"
          },
          {
            "text": "主人",
            "furigana": "しゅじん"
          }
        ],
        "targetKanji": [
          "人"
        ]
      },
      {
        "id": "ref-l07-29",
        "lessonId": "l07",
        "category": "Familia de otra persona (田中さんの家族 - Respetuoso)",
        "badge": "De otra persona",
        "japanese": "奥さん",
        "reading": "おくさん",
        "romaji": "Okusan",
        "spanish": "Esposa / mujer (de otra persona)",
        "segments": [
          {
            "text": "奥",
            "furigana": "おく"
          },
          {
            "text": "さん"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l07-30",
        "lessonId": "l07",
        "category": "Familia de otra persona (田中さんの家族 - Respetuoso)",
        "badge": "De otra persona",
        "japanese": "ご夫婦",
        "reading": "ごふうふ",
        "romaji": "Gofuufu",
        "spanish": "Matrimonio, pareja (de otra persona)",
        "segments": [
          {
            "text": "ご"
          },
          {
            "text": "夫婦",
            "furigana": "ふうふ"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l07-31",
        "lessonId": "l07",
        "category": "Familia de otra persona (田中さんの家族 - Respetuoso)",
        "badge": "De otra persona",
        "japanese": "息子さん",
        "reading": "むすこさん",
        "romaji": "Musukosan",
        "spanish": "Hijo (de otra persona)",
        "segments": [
          {
            "text": "息子",
            "furigana": "むすこ"
          },
          {
            "text": "さん"
          }
        ],
        "targetKanji": [
          "子"
        ]
      },
      {
        "id": "ref-l07-32",
        "lessonId": "l07",
        "category": "Familia de otra persona (田中さんの家族 - Respetuoso)",
        "badge": "De otra persona",
        "japanese": "娘さん",
        "reading": "むすめさん",
        "romaji": "Musumesan",
        "spanish": "Hija (de otra persona)",
        "segments": [
          {
            "text": "娘",
            "furigana": "むすめ"
          },
          {
            "text": "さん"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l07-33",
        "lessonId": "l07",
        "category": "Familia de otra persona (田中さんの家族 - Respetuoso)",
        "badge": "De otra persona",
        "japanese": "お子さん",
        "reading": "おこさん",
        "romaji": "Okosan",
        "spanish": "Hijos / niños (de otra persona)",
        "segments": [
          {
            "text": "お"
          },
          {
            "text": "子",
            "furigana": "こ"
          },
          {
            "text": "さん"
          }
        ],
        "targetKanji": [
          "子"
        ]
      }
    ]
  },
  {
    "lessonId": "l08",
    "lessonNumber": "Lección 8",
    "topic": "Colores y sabores",
    "topicJapanese": "色・味",
    "topicDescription": "En japonés, algunos colores actúan tanto como sustantivo como adjetivo-い (白→白い, 赤→赤い), mientras que otros solo son sustantivos y usan 〜の para calificar (緑の〜, ピンクの〜). Los sabores son mayormente adjetivos-い.",
    "categories": [
      "Colores (色)",
      "Sabores (味)",
      "Estaciones del año (季節)"
    ],
    "items": [
      {
        "id": "ref-l08-1",
        "lessonId": "l08",
        "category": "Colores (色)",
        "badge": "Sustantivo / Adjetivo",
        "japanese": "白 · 白い",
        "reading": "しろ · しろい",
        "romaji": "Shiro · Shiroi",
        "spanish": "Blanco (sustantivo / adjetivo)",
        "details": "白 (sustantivo: el blanco) / 白い (adjetivo: blanco/a).",
        "segments": [
          {
            "text": "白",
            "furigana": "しろ"
          },
          {
            "text": " · "
          },
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
        "id": "ref-l08-2",
        "lessonId": "l08",
        "category": "Colores (色)",
        "badge": "Sustantivo / Adjetivo",
        "japanese": "黒 · 黒い",
        "reading": "くろ · くろい",
        "romaji": "Kuro · Kuroi",
        "spanish": "Negro (sustantivo / adjetivo)",
        "details": "黒 (sustantivo: el negro) / 黒い (adjetivo: negro/a).",
        "segments": [
          {
            "text": "黒",
            "furigana": "くろ"
          },
          {
            "text": " · "
          },
          {
            "text": "黒",
            "furigana": "くろ"
          },
          {
            "text": "い"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l08-3",
        "lessonId": "l08",
        "category": "Colores (色)",
        "badge": "Sustantivo / Adjetivo",
        "japanese": "赤 · 赤い",
        "reading": "あか · あかい",
        "romaji": "Aka · Akai",
        "spanish": "Rojo (sustantivo / adjetivo)",
        "details": "赤 (sustantivo: el rojo) / 赤い (adjetivo: rojo/a).",
        "segments": [
          {
            "text": "赤",
            "furigana": "あか"
          },
          {
            "text": " · "
          },
          {
            "text": "赤",
            "furigana": "あか"
          },
          {
            "text": "い"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l08-4",
        "lessonId": "l08",
        "category": "Colores (色)",
        "badge": "Sustantivo / Adjetivo",
        "japanese": "青 · 青い",
        "reading": "あお · あおい",
        "romaji": "Ao · Aoi",
        "spanish": "Azul (sustantivo / adjetivo)",
        "details": "青 (sustantivo: el azul) / 青い (adjetivo: azul).",
        "segments": [
          {
            "text": "青",
            "furigana": "あお"
          },
          {
            "text": " · "
          },
          {
            "text": "青",
            "furigana": "あお"
          },
          {
            "text": "い"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l08-5",
        "lessonId": "l08",
        "category": "Colores (色)",
        "badge": "Sustantivo solo",
        "japanese": "緑",
        "reading": "みどり",
        "romaji": "Midori",
        "spanish": "Verde (sustantivo: modifica con 緑の)",
        "details": "Solo existe como sustantivo. Para decir coche verde se usa 緑の車 (midori no kuruma).",
        "segments": [
          {
            "text": "緑",
            "furigana": "みどり"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l08-6",
        "lessonId": "l08",
        "category": "Colores (色)",
        "badge": "Sustantivo solo",
        "japanese": "紫",
        "reading": "むらさき",
        "romaji": "Murasaki",
        "spanish": "Violeta, morado (modifica con 紫の)",
        "details": "Solo existe como sustantivo. Para adjetivo se añade の (紫の傘).",
        "segments": [
          {
            "text": "紫",
            "furigana": "むらさき"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l08-7",
        "lessonId": "l08",
        "category": "Colores (色)",
        "badge": "Sustantivo / Adjetivo",
        "japanese": "黄色 · 黄色い",
        "reading": "きいろ · きいろい",
        "romaji": "Kiiro · Kiiroi",
        "spanish": "Amarillo (sustantivo / adjetivo)",
        "details": "黄色 (sustantivo) / 黄色い (adjetivo).",
        "segments": [
          {
            "text": "黄色",
            "furigana": "きいろ"
          },
          {
            "text": " · "
          },
          {
            "text": "黄色",
            "furigana": "きいろ"
          },
          {
            "text": "い"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l08-8",
        "lessonId": "l08",
        "category": "Colores (色)",
        "badge": "Sustantivo / Adjetivo",
        "japanese": "茶色 · 茶色い",
        "reading": "ちゃいろ · ちゃいろい",
        "romaji": "Chairo · Chairoi",
        "spanish": "Marrón (sustantivo / adjetivo)",
        "details": "Literalmente \"color del té\". 茶色 (sustantivo) / 茶色い (adjetivo).",
        "segments": [
          {
            "text": "茶色",
            "furigana": "ちゃいろ"
          },
          {
            "text": " · "
          },
          {
            "text": "茶色",
            "furigana": "ちゃいろ"
          },
          {
            "text": "い"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l08-9",
        "lessonId": "l08",
        "category": "Colores (色)",
        "badge": "Katakana",
        "japanese": "ピンク",
        "reading": "ピンク",
        "romaji": "Pinku",
        "spanish": "Rosa (modifica con ピンクの)",
        "segments": [
          {
            "text": "ピンク"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l08-10",
        "lessonId": "l08",
        "category": "Colores (色)",
        "badge": "Katakana",
        "japanese": "オレンジ",
        "reading": "オレンジ",
        "romaji": "Orenji",
        "spanish": "Naranja (modifica con オレンジの)",
        "segments": [
          {
            "text": "オレンジ"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l08-11",
        "lessonId": "l08",
        "category": "Colores (色)",
        "badge": "Katakana",
        "japanese": "グレー",
        "reading": "グレー",
        "romaji": "Guree",
        "spanish": "Gris (modifica con グレーの)",
        "segments": [
          {
            "text": "グレー"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l08-12",
        "lessonId": "l08",
        "category": "Colores (色)",
        "badge": "Katakana",
        "japanese": "ベージュ",
        "reading": "ベージュ",
        "romaji": "Beeju",
        "spanish": "Beige (modifica con ベージュの)",
        "segments": [
          {
            "text": "ベージュ"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l08-13",
        "lessonId": "l08",
        "category": "Sabores (味)",
        "badge": "Sabor",
        "japanese": "甘い",
        "reading": "あまい",
        "romaji": "Amai",
        "spanish": "Dulce",
        "segments": [
          {
            "text": "甘",
            "furigana": "あま"
          },
          {
            "text": "い"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l08-14",
        "lessonId": "l08",
        "category": "Sabores (味)",
        "badge": "Sabor",
        "japanese": "辛い",
        "reading": "からい",
        "romaji": "Karai",
        "spanish": "Picante",
        "segments": [
          {
            "text": "辛",
            "furigana": "から"
          },
          {
            "text": "い"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l08-15",
        "lessonId": "l08",
        "category": "Sabores (味)",
        "badge": "Sabor",
        "japanese": "苦い",
        "reading": "にがい",
        "romaji": "Nigai",
        "spanish": "Amargo",
        "segments": [
          {
            "text": "苦",
            "furigana": "にが"
          },
          {
            "text": "い"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l08-16",
        "lessonId": "l08",
        "category": "Sabores (味)",
        "badge": "Sabor",
        "japanese": "塩辛い",
        "reading": "しおからい",
        "romaji": "Shiokarai",
        "spanish": "Salado",
        "segments": [
          {
            "text": "塩辛",
            "furigana": "しおから"
          },
          {
            "text": "い"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l08-17",
        "lessonId": "l08",
        "category": "Sabores (味)",
        "badge": "Sabor",
        "japanese": "酸っぱい",
        "reading": "すっぱい",
        "romaji": "Suppai",
        "spanish": "Ácido, agrio",
        "segments": [
          {
            "text": "酸",
            "furigana": "す"
          },
          {
            "text": "っぱい"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l08-18",
        "lessonId": "l08",
        "category": "Sabores (味)",
        "badge": "Intensidad",
        "japanese": "濃い",
        "reading": "こい",
        "romaji": "Koi",
        "spanish": "Fuerte, marcado, concentrado, espeso",
        "segments": [
          {
            "text": "濃",
            "furigana": "こ"
          },
          {
            "text": "い"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l08-19",
        "lessonId": "l08",
        "category": "Sabores (味)",
        "badge": "Intensidad",
        "japanese": "薄い",
        "reading": "うすい",
        "romaji": "Usui",
        "spanish": "Soso, flojo, suave, aguado",
        "segments": [
          {
            "text": "薄",
            "furigana": "うす"
          },
          {
            "text": "い"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l08-20",
        "lessonId": "l08",
        "category": "Estaciones del año (季節)",
        "badge": "Primavera",
        "japanese": "春",
        "reading": "はる",
        "romaji": "Haru",
        "spanish": "Primavera (marzo, abril, mayo)",
        "details": "Estación templada y florecimiento de los cerezos (sakura).",
        "segments": [
          {
            "text": "春",
            "furigana": "はる"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l08-21",
        "lessonId": "l08",
        "category": "Estaciones del año (季節)",
        "badge": "Verano",
        "japanese": "夏",
        "reading": "なつ",
        "romaji": "Natsu",
        "spanish": "Verano (junio, julio, agosto)",
        "details": "Estación calurosa y húmeda con festivales tradicionales (matsuri).",
        "segments": [
          {
            "text": "夏",
            "furigana": "なつ"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l08-22",
        "lessonId": "l08",
        "category": "Estaciones del año (季節)",
        "badge": "Otoño",
        "japanese": "秋",
        "reading": "あき",
        "romaji": "Aki",
        "spanish": "Otoño (septiembre, octubre, noviembre)",
        "details": "Estación fresca con cambio de color en las hojas (kōyō).",
        "segments": [
          {
            "text": "秋",
            "furigana": "あき"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l08-23",
        "lessonId": "l08",
        "category": "Estaciones del año (季節)",
        "badge": "Invierno",
        "japanese": "冬",
        "reading": "ふゆ",
        "romaji": "Fuyu",
        "spanish": "Invierno (diciembre, enero, febrero)",
        "details": "Estación fría con nevadas en el norte y la costa del Mar de Japón.",
        "segments": [
          {
            "text": "冬",
            "furigana": "ふゆ"
          }
        ],
        "targetKanji": []
      }
    ]
  },
  {
    "lessonId": "l09",
    "lessonNumber": "Lección 9",
    "topic": "Música, deporte y cine",
    "topicJapanese": "音楽・スポーツ・映画",
    "topicDescription": "Géneros musicales, géneros de cine y modalidades deportivas para expresar aficiones, gustos y habilidades con 〜が好きです (me gusta), 〜が上手です (se me da bien) o 〜ができます (sé hacer).",
    "categories": [
      "Música (音楽)",
      "Cine (映画)",
      "Deporte (スポーツ)"
    ],
    "items": [
      {
        "id": "ref-l09-1",
        "lessonId": "l09",
        "category": "Música (音楽)",
        "badge": "Música",
        "japanese": "ポップス",
        "reading": "ポップス",
        "romaji": "Poppusu",
        "spanish": "Pop",
        "segments": [
          {
            "text": "ポップス"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l09-2",
        "lessonId": "l09",
        "category": "Música (音楽)",
        "badge": "Música",
        "japanese": "ロック",
        "reading": "ロック",
        "romaji": "Rokku",
        "spanish": "Rock",
        "segments": [
          {
            "text": "ロック"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l09-3",
        "lessonId": "l09",
        "category": "Música (音楽)",
        "badge": "Música",
        "japanese": "ジャズ",
        "reading": "ジャズ",
        "romaji": "Jazu",
        "spanish": "Jazz",
        "segments": [
          {
            "text": "ジャズ"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l09-4",
        "lessonId": "l09",
        "category": "Música (音楽)",
        "badge": "Música",
        "japanese": "ラテン",
        "reading": "ラテン",
        "romaji": "Raten",
        "spanish": "Música latina",
        "segments": [
          {
            "text": "ラテン"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l09-5",
        "lessonId": "l09",
        "category": "Música (音楽)",
        "badge": "Música",
        "japanese": "クラシック",
        "reading": "クラシック",
        "romaji": "Kurashikku",
        "spanish": "Música clásica",
        "segments": [
          {
            "text": "クラシック"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l09-6",
        "lessonId": "l09",
        "category": "Música (音楽)",
        "badge": "Japonesa",
        "japanese": "民謡",
        "reading": "みんよう",
        "romaji": "Min'you",
        "spanish": "Folclórica tradicional japonesa",
        "segments": [
          {
            "text": "民謡",
            "furigana": "みんよう"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l09-7",
        "lessonId": "l09",
        "category": "Música (音楽)",
        "badge": "Japonesa",
        "japanese": "演歌",
        "reading": "えんか",
        "romaji": "Enka",
        "spanish": "Canción popular japonesa tradicional / balada enka",
        "segments": [
          {
            "text": "演歌",
            "furigana": "えんか"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l09-8",
        "lessonId": "l09",
        "category": "Música (音楽)",
        "badge": "Música",
        "japanese": "ミュージカル",
        "reading": "ミュージカル",
        "romaji": "Myuujikaru",
        "spanish": "Teatro musical",
        "segments": [
          {
            "text": "ミュージカル"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l09-9",
        "lessonId": "l09",
        "category": "Música (音楽)",
        "badge": "Música",
        "japanese": "オペラ",
        "reading": "オペラ",
        "romaji": "Opera",
        "spanish": "Ópera",
        "segments": [
          {
            "text": "オペラ"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l09-10",
        "lessonId": "l09",
        "category": "Cine (映画)",
        "badge": "Cine",
        "japanese": "SF",
        "reading": "エスエフ",
        "romaji": "Esu-efu",
        "spanish": "Ciencia ficción",
        "segments": [
          {
            "text": "SF"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l09-11",
        "lessonId": "l09",
        "category": "Cine (映画)",
        "badge": "Cine",
        "japanese": "ホラー",
        "reading": "ホラー",
        "romaji": "Horaa",
        "spanish": "Terror",
        "segments": [
          {
            "text": "ホラー"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l09-12",
        "lessonId": "l09",
        "category": "Cine (映画)",
        "badge": "Cine",
        "japanese": "アニメ",
        "reading": "アニメ",
        "romaji": "Anime",
        "spanish": "Dibujos animados, anime",
        "segments": [
          {
            "text": "アニメ"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l09-13",
        "lessonId": "l09",
        "category": "Cine (映画)",
        "badge": "Cine",
        "japanese": "ドキュメンタリー",
        "reading": "ドキュメンタリー",
        "romaji": "Dokyumentarii",
        "spanish": "Documental",
        "segments": [
          {
            "text": "ドキュメンタリー"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l09-14",
        "lessonId": "l09",
        "category": "Cine (映画)",
        "badge": "Cine",
        "japanese": "恋愛",
        "reading": "れんあい",
        "romaji": "Ren'ai",
        "spanish": "Romántico, de amor",
        "segments": [
          {
            "text": "恋愛",
            "furigana": "れんあい"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l09-15",
        "lessonId": "l09",
        "category": "Cine (映画)",
        "badge": "Cine",
        "japanese": "ミステリー",
        "reading": "ミステリー",
        "romaji": "Misuterii",
        "spanish": "Misterio, suspense",
        "segments": [
          {
            "text": "ミステリー"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l09-16",
        "lessonId": "l09",
        "category": "Cine (映画)",
        "badge": "Cine",
        "japanese": "文芸",
        "reading": "ぶんげい",
        "romaji": "Bungei",
        "spanish": "Basado en obras literarias / cine de época",
        "segments": [
          {
            "text": "文芸",
            "furigana": "ぶんげい"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l09-17",
        "lessonId": "l09",
        "category": "Cine (映画)",
        "badge": "Cine",
        "japanese": "戦争",
        "reading": "せんそう",
        "romaji": "Sensou",
        "spanish": "Bélico, de guerra, épico",
        "segments": [
          {
            "text": "戦争",
            "furigana": "せんそう"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l09-18",
        "lessonId": "l09",
        "category": "Cine (映画)",
        "badge": "Cine",
        "japanese": "アクション",
        "reading": "アクション",
        "romaji": "Akushon",
        "spanish": "Acción",
        "segments": [
          {
            "text": "アクション"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l09-19",
        "lessonId": "l09",
        "category": "Cine (映画)",
        "badge": "Cine",
        "japanese": "喜劇",
        "reading": "きげき",
        "romaji": "Kigeki",
        "spanish": "Comedia",
        "segments": [
          {
            "text": "喜劇",
            "furigana": "きげき"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l09-20",
        "lessonId": "l09",
        "category": "Deporte (スポーツ)",
        "badge": "Deporte",
        "japanese": "ソフトボール",
        "reading": "ソフトボール",
        "romaji": "Sofutobooru",
        "spanish": "Sóftbol",
        "segments": [
          {
            "text": "ソフトボール"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l09-21",
        "lessonId": "l09",
        "category": "Deporte (スポーツ)",
        "badge": "Deporte",
        "japanese": "サッカー",
        "reading": "サッカー",
        "romaji": "Sakkaa",
        "spanish": "Fútbol",
        "segments": [
          {
            "text": "サッカー"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l09-22",
        "lessonId": "l09",
        "category": "Deporte (スポーツ)",
        "badge": "Deporte",
        "japanese": "ラグビー",
        "reading": "ラグビー",
        "romaji": "Ragubii",
        "spanish": "Rugby",
        "segments": [
          {
            "text": "ラグビー"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l09-23",
        "lessonId": "l09",
        "category": "Deporte (スポーツ)",
        "badge": "Deporte",
        "japanese": "バレーボール",
        "reading": "バレーボール",
        "romaji": "Bareebooru",
        "spanish": "Voleibol",
        "segments": [
          {
            "text": "バレーボール"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l09-24",
        "lessonId": "l09",
        "category": "Deporte (スポーツ)",
        "badge": "Deporte",
        "japanese": "バスケットボール",
        "reading": "バスケットボール",
        "romaji": "Basukettobooru",
        "spanish": "Baloncesto",
        "segments": [
          {
            "text": "バスケットボール"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l09-25",
        "lessonId": "l09",
        "category": "Deporte (スポーツ)",
        "badge": "Deporte",
        "japanese": "テニス",
        "reading": "テニス",
        "romaji": "Tenisu",
        "spanish": "Tenis",
        "segments": [
          {
            "text": "テニス"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l09-26",
        "lessonId": "l09",
        "category": "Deporte (スポーツ)",
        "badge": "Deporte",
        "japanese": "ボウリング",
        "reading": "ボウリング",
        "romaji": "Bouringu",
        "spanish": "Bolos",
        "segments": [
          {
            "text": "ボウリング"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l09-27",
        "lessonId": "l09",
        "category": "Deporte (スポーツ)",
        "badge": "Deporte",
        "japanese": "スキー",
        "reading": "スキー",
        "romaji": "Sukii",
        "spanish": "Esquí",
        "segments": [
          {
            "text": "スキー"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l09-28",
        "lessonId": "l09",
        "category": "Deporte (スポーツ)",
        "badge": "Deporte",
        "japanese": "スケート",
        "reading": "スケート",
        "romaji": "Sukeeto",
        "spanish": "Patinaje",
        "segments": [
          {
            "text": "スケート"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l09-29",
        "lessonId": "l09",
        "category": "Deporte (スポーツ)",
        "badge": "Deporte",
        "japanese": "野球",
        "reading": "やきゅう",
        "romaji": "Yakyuu",
        "spanish": "Béisbol",
        "details": "El deporte de equipo profesional más seguido en Japón.",
        "segments": [
          {
            "text": "野球",
            "furigana": "やきゅう"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l09-30",
        "lessonId": "l09",
        "category": "Deporte (スポーツ)",
        "badge": "Deporte",
        "japanese": "卓球 · ピンポン",
        "reading": "たっきゅう · ピンポン",
        "romaji": "Takkyuu · Pinpon",
        "spanish": "Tenis de mesa, ping-pong",
        "segments": [
          {
            "text": "卓球",
            "furigana": "たっきゅう"
          },
          {
            "text": " · "
          },
          {
            "text": "ピンポン"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l09-31",
        "lessonId": "l09",
        "category": "Deporte (スポーツ)",
        "badge": "Tradicional",
        "japanese": "相撲",
        "reading": "すもう",
        "romaji": "Sumou",
        "spanish": "Sumo (lucha tradicional nacional japonesa)",
        "segments": [
          {
            "text": "相撲",
            "furigana": "すもう"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l09-32",
        "lessonId": "l09",
        "category": "Deporte (スポーツ)",
        "badge": "Arte marcial",
        "japanese": "柔道",
        "reading": "じゅうどう",
        "romaji": "Juudou",
        "spanish": "Judo / yudo",
        "segments": [
          {
            "text": "柔道",
            "furigana": "じゅうどう"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l09-33",
        "lessonId": "l09",
        "category": "Deporte (スポーツ)",
        "badge": "Arte marcial",
        "japanese": "剣道",
        "reading": "けんどう",
        "romaji": "Kendou",
        "spanish": "Kendo (esgrima tradicional con sable de bambú)",
        "segments": [
          {
            "text": "剣道",
            "furigana": "けんどう"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l09-34",
        "lessonId": "l09",
        "category": "Deporte (スポーツ)",
        "badge": "Deporte",
        "japanese": "水泳",
        "reading": "すいえい",
        "romaji": "Suiei",
        "spanish": "Natación",
        "segments": [
          {
            "text": "水泳",
            "furigana": "すいえい"
          }
        ],
        "targetKanji": [
          "水"
        ]
      }
    ]
  },
  {
    "lessonId": "l10",
    "lessonNumber": "Lección 10",
    "topic": "En casa",
    "topicJapanese": "うちの中",
    "topicDescription": "Estancias y partes principales de una vivienda japonesa, junto con costumbres del hogar: uso del baño (お風呂) y tipos de inodoro (estilo japonés y occidental).",
    "categories": [
      "Partes de la casa (うちの中)",
      "Costumbres del hogar"
    ],
    "items": [
      {
        "id": "ref-l10-1",
        "lessonId": "l10",
        "category": "Partes de la casa (うちの中)",
        "badge": "① Entrada",
        "japanese": "玄関",
        "reading": "げんかん",
        "romaji": "Genkan",
        "spanish": "Vestíbulo, entrada principal",
        "details": "Zona de entrada donde los habitantes e invitados se quitan los zapatos antes de pisar el suelo elevado.",
        "segments": [
          {
            "text": "玄関",
            "furigana": "げんかん"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l10-2",
        "lessonId": "l10",
        "category": "Partes de la casa (うちの中)",
        "badge": "② Servicio",
        "japanese": "トイレ",
        "reading": "トイレ",
        "romaji": "Toire",
        "spanish": "Cuarto de aseo, servicio, retrete",
        "details": "En Japón el retrete suele estar en una habitación separada e independiente del cuarto de baño.",
        "segments": [
          {
            "text": "トイレ"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l10-3",
        "lessonId": "l10",
        "category": "Partes de la casa (うちの中)",
        "badge": "③ Baño",
        "japanese": "ふろ場",
        "reading": "ふろば",
        "romaji": "Furoba",
        "spanish": "Cuarto de baño (bañera y ducha)",
        "details": "Habitación impermeable donde se encuentran la ducha y la bañera profunda (ofuro).",
        "segments": [
          {
            "text": "ふろ"
          },
          {
            "text": "場",
            "furigana": "ば"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l10-4",
        "lessonId": "l10",
        "category": "Partes de la casa (うちの中)",
        "badge": "④ Lavabo",
        "japanese": "洗面所",
        "reading": "せんめんじょ",
        "romaji": "Senmenjo",
        "spanish": "Lavabo, zona de aseo personal",
        "details": "Área previa al cuarto de baño equipada con lavabo, espejo y a menudo la lavadora.",
        "segments": [
          {
            "text": "洗面所",
            "furigana": "せんめんじょ"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l10-5",
        "lessonId": "l10",
        "category": "Partes de la casa (うちの中)",
        "badge": "⑤ Cocina",
        "japanese": "台所",
        "reading": "だいどころ",
        "romaji": "Daidokoro",
        "spanish": "Cocina",
        "segments": [
          {
            "text": "台所",
            "furigana": "だいどころ"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l10-6",
        "lessonId": "l10",
        "category": "Partes de la casa (うちの中)",
        "badge": "⑥ Comedor",
        "japanese": "食堂",
        "reading": "しょくどう",
        "romaji": "Shokudou",
        "spanish": "Comedor",
        "segments": [
          {
            "text": "食堂",
            "furigana": "しょくどう"
          }
        ],
        "targetKanji": [
          "食"
        ]
      },
      {
        "id": "ref-l10-7",
        "lessonId": "l10",
        "category": "Partes de la casa (うちの中)",
        "badge": "⑦ Sala",
        "japanese": "居間",
        "reading": "いま",
        "romaji": "Ima",
        "spanish": "Cuarto de estar, sala de estar",
        "segments": [
          {
            "text": "居間",
            "furigana": "いま"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l10-8",
        "lessonId": "l10",
        "category": "Partes de la casa (うちの中)",
        "badge": "⑧ Dormitorio",
        "japanese": "寝室",
        "reading": "しんしつ",
        "romaji": "Shinshitsu",
        "spanish": "Dormitorio",
        "segments": [
          {
            "text": "寝室",
            "furigana": "しんしつ"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l10-9",
        "lessonId": "l10",
        "category": "Partes de la casa (うちの中)",
        "badge": "⑨ Pasillo",
        "japanese": "廊下",
        "reading": "ろうか",
        "romaji": "Rouka",
        "spanish": "Pasillo",
        "segments": [
          {
            "text": "廊下",
            "furigana": "ろうか"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l10-10",
        "lessonId": "l10",
        "category": "Partes de la casa (うちの中)",
        "badge": "⑩ Balcón",
        "japanese": "ベランダ",
        "reading": "ベランダ",
        "romaji": "Beranda",
        "spanish": "Balcón, terraza",
        "segments": [
          {
            "text": "ベランダ"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l10-11",
        "lessonId": "l10",
        "category": "Costumbres del hogar",
        "badge": "Costumbre",
        "japanese": "お風呂の入り方",
        "reading": "おふろのはいりかた",
        "romaji": "Ofuro no hairikata",
        "spanish": "Cómo bañarse en Japón",
        "details": "1) Se lava y aclara el cuerpo con jabón fuera antes de entrar a la bañera. 2) No se usa jabón en la bañera, sirve para calentarse y relajarse. 3) Al salir no se vacía el agua, se tapa para que la use el resto de la familia.",
        "segments": [
          {
            "text": "お"
          },
          {
            "text": "風呂",
            "furigana": "ふろ"
          },
          {
            "text": "の"
          },
          {
            "text": "入",
            "furigana": "はい"
          },
          {
            "text": "り"
          },
          {
            "text": "方",
            "furigana": "かた"
          }
        ],
        "targetKanji": [
          "入",
          "方"
        ]
      },
      {
        "id": "ref-l10-12",
        "lessonId": "l10",
        "category": "Costumbres del hogar",
        "badge": "Costumbre",
        "japanese": "和式トイレ",
        "reading": "わしきトイレ",
        "romaji": "Washiki toire",
        "spanish": "Inodoro de estilo tradicional japonés",
        "details": "Inodoro a ras de suelo que se utiliza en cuclillas mirando hacia la campana/pared frontal.",
        "segments": [
          {
            "text": "和式",
            "furigana": "わしき"
          },
          {
            "text": "トイレ"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l10-13",
        "lessonId": "l10",
        "category": "Costumbres del hogar",
        "badge": "Costumbre",
        "japanese": "洋式トイレ",
        "reading": "ようしきトイレ",
        "romaji": "Youshiki toire",
        "spanish": "Inodoro de estilo occidental (washlet)",
        "details": "Inodoro con asiento, frecuentemente equipado con panel electrónico con funciones de bidé y asiento calefactado.",
        "segments": [
          {
            "text": "洋式",
            "furigana": "ようしき"
          },
          {
            "text": "トイレ"
          }
        ],
        "targetKanji": []
      }
    ]
  }
,
{
  "lessonId": "l11",
  "lessonNumber": "Lección 11",
  "topic": "Menú y platos de restaurante",
  "topicJapanese": "メニュー",
  "topicDescription": "Platos típicos de la cocina japonesa (teishoku, donburi, sushi, fideos) y platos populares de estilo occidental (yōshoku), bebidas y acompañamientos frecuentes en las cartas de restaurantes de Japón.",
  "categories": [
    "Platos japoneses y fideos",
    "Platos de estilo occidental y aperitivos",
    "Bebidas"
  ],
  "items": [
    {
      "id": "ref-l11-1",
      "lessonId": "l11",
      "category": "Platos japoneses y fideos",
      "badge": "Menú completo",
      "japanese": "定食",
      "reading": "ていしょく",
      "romaji": "Teishoku",
      "spanish": "Plato combinado / menú completo",
      "details": "Bandeja completa que suele incluir arroz, sopa de miso, plato principal y pequeños platillos de encurtidos o ensalada.",
      "segments": [
        {
          "text": "定食",
          "furigana": "ていしょく"
        }
      ],
      "targetKanji": [
        "定",
        "食"
      ]
    },
    {
      "id": "ref-l11-2",
      "lessonId": "l11",
      "category": "Platos japoneses y fideos",
      "badge": "Almuerzo",
      "japanese": "ランチ",
      "reading": "ランチ",
      "romaji": "Ranchi",
      "spanish": "Menú del día (a mediodía)",
      "details": "Menú económico de mediodía ofrecido en muchos restaurantes.",
      "segments": [
        {
          "text": "ランチ"
        }
      ],
      "targetKanji": []
    },
    {
      "id": "ref-l11-3",
      "lessonId": "l11",
      "category": "Platos japoneses y fideos",
      "badge": "Donburi",
      "japanese": "天どん",
      "reading": "てんどん",
      "romaji": "Tendon",
      "spanish": "Arroz cubierto de tempura sazonado",
      "details": "Tazón de arroz cubierto de piezas de tempura crujiente bañado en salsa tare dulce.",
      "segments": [
        {
          "text": "天",
          "furigana": "てん"
        },
        {
          "text": "どん"
        }
      ],
      "targetKanji": [
        "天"
      ]
    },
    {
      "id": "ref-l11-4",
      "lessonId": "l11",
      "category": "Platos japoneses y fideos",
      "badge": "Donburi",
      "japanese": "親子どん",
      "reading": "おやこどん",
      "romaji": "Oyakodon",
      "spanish": "Arroz cubierto con pollo y huevo cocidos",
      "details": "Literalmente \"tazón de padre e hijo\" por llevar carne de pollo y huevo guisados con caldo dashi y salsa de soja sobre arroz.",
      "segments": [
        {
          "text": "親子",
          "furigana": "おやこ"
        },
        {
          "text": "どん"
        }
      ],
      "targetKanji": [
        "親",
        "子"
      ]
    },
    {
      "id": "ref-l11-5",
      "lessonId": "l11",
      "category": "Platos japoneses y fideos",
      "badge": "Donburi",
      "japanese": "牛どん",
      "reading": "ぎゅうどん",
      "romaji": "Gyuudon",
      "spanish": "Arroz cubierto con carne de vaca y cebolla",
      "details": "Tazón de arroz con finas láminas de carne de ternera y cebolla cocinadas a fuego lento en salsa sazonada de soja y mirin.",
      "segments": [
        {
          "text": "牛",
          "furigana": "ぎゅう"
        },
        {
          "text": "どん"
        }
      ],
      "targetKanji": [
        "牛"
      ]
    },
    {
      "id": "ref-l11-6",
      "lessonId": "l11",
      "category": "Platos japoneses y fideos",
      "badge": "Carne asada",
      "japanese": "焼き肉",
      "reading": "やきにく",
      "romaji": "Yakiniku",
      "spanish": "Carne de vaca asada a la parrilla",
      "details": "Carne a la barbacoa asada en la propia mesa por los comensales.",
      "segments": [
        {
          "text": "焼",
          "furigana": "や"
        },
        {
          "text": "き"
        },
        {
          "text": "肉",
          "furigana": "にく"
        }
      ],
      "targetKanji": [
        "焼",
        "肉"
      ]
    },
    {
      "id": "ref-l11-7",
      "lessonId": "l11",
      "category": "Platos japoneses y fideos",
      "badge": "Salteado",
      "japanese": "野菜いため",
      "reading": "やさいいため",
      "romaji": "Yasai-itame",
      "spanish": "Sofrito / salteado de verduras",
      "details": "Salteado rápido al wok de verduras variadas (col, zanahoria, brotes de soja, etc.).",
      "segments": [
        {
          "text": "野菜",
          "furigana": "やさい"
        },
        {
          "text": "いため"
        }
      ],
      "targetKanji": [
        "野",
        "菜"
      ]
    },
    {
      "id": "ref-l11-8",
      "lessonId": "l11",
      "category": "Platos japoneses y fideos",
      "badge": "Acompañamiento",
      "japanese": "漬物",
      "reading": "つけもの",
      "romaji": "Tsukemono",
      "spanish": "Verduras encurtidas",
      "details": "Encurtidos tradicionales que limpian el paladar y acompañan las comidas con arroz.",
      "segments": [
        {
          "text": "漬物",
          "furigana": "つけもの"
        }
      ],
      "targetKanji": [
        "物"
      ]
    },
    {
      "id": "ref-l11-9",
      "lessonId": "l11",
      "category": "Platos japoneses y fideos",
      "badge": "Sopa",
      "japanese": "みそ汁",
      "reading": "みそしる",
      "romaji": "Misoshiru",
      "spanish": "Sopa de miso",
      "details": "Sopa indispensable de caldo dashi y pasta de soja fermentada con tofu, algas wakame o cebollino.",
      "segments": [
        {
          "text": "みそ"
        },
        {
          "text": "汁",
          "furigana": "しる"
        }
      ],
      "targetKanji": []
    },
    {
      "id": "ref-l11-10",
      "lessonId": "l11",
      "category": "Platos japoneses y fideos",
      "badge": "Arroz",
      "japanese": "おにぎり",
      "reading": "おにぎり",
      "romaji": "Onigiri",
      "spanish": "Bola o triángulo de arroz",
      "details": "Porción compactada de arroz a menudo rellena de ciruela encurtida (umeboshi), salmón o atún con mayonesa y envuelta en alga nori.",
      "segments": [
        {
          "text": "おにぎり"
        }
      ],
      "targetKanji": []
    },
    {
      "id": "ref-l11-11",
      "lessonId": "l11",
      "category": "Platos japoneses y fideos",
      "badge": "Tradicional",
      "japanese": "てんぷら",
      "reading": "てんぷら",
      "romaji": "Tenpura",
      "spanish": "Tempura (frituras ligeras)",
      "details": "Fritura crujiente y aireada de langostinos, calamares y verduras de temporada.",
      "segments": [
        {
          "text": "てんぷら"
        }
      ],
      "targetKanji": []
    },
    {
      "id": "ref-l11-12",
      "lessonId": "l11",
      "category": "Platos japoneses y fideos",
      "badge": "Tradicional",
      "japanese": "すし",
      "reading": "すし",
      "romaji": "Sushi",
      "spanish": "Sushi",
      "details": "Arroz sazonado con vinagre de arroz acompañado de piezas de pescado crudo fresco o marisco.",
      "segments": [
        {
          "text": "すし"
        }
      ],
      "targetKanji": []
    },
    {
      "id": "ref-l11-13",
      "lessonId": "l11",
      "category": "Platos japoneses y fideos",
      "badge": "Fideos",
      "japanese": "うどん",
      "reading": "うどん",
      "romaji": "Udon",
      "spanish": "Tallarines gruesos de trigo",
      "details": "Fideos blancos de textura elástica servidos en un cuenco con caldo caliente o fríos con salsa para mojar.",
      "segments": [
        {
          "text": "うどん"
        }
      ],
      "targetKanji": []
    },
    {
      "id": "ref-l11-14",
      "lessonId": "l11",
      "category": "Platos japoneses y fideos",
      "badge": "Fideos",
      "japanese": "そば",
      "reading": "そば",
      "romaji": "Soba",
      "spanish": "Tallarines de alforfón",
      "details": "Fideos finos y grisáceos de trigo sarraceno muy aromáticos.",
      "segments": [
        {
          "text": "そば"
        }
      ],
      "targetKanji": []
    },
    {
      "id": "ref-l11-15",
      "lessonId": "l11",
      "category": "Platos japoneses y fideos",
      "badge": "Fideos",
      "japanese": "ラーメン",
      "reading": "ラーメン",
      "romaji": "Raamen",
      "spanish": "Tallarines en caldo (ramen)",
      "details": "Fideos amarillos ondulados en caldos intensos de hueso de cerdo (tonkotsu), salsa de soja (shoyu), sal o miso.",
      "segments": [
        {
          "text": "ラーメン"
        }
      ],
      "targetKanji": []
    },
    {
      "id": "ref-l11-16",
      "lessonId": "l11",
      "category": "Platos japoneses y fideos",
      "badge": "Fideos fritos",
      "japanese": "焼きそば",
      "reading": "やきそば",
      "romaji": "Yakisoba",
      "spanish": "Tallarines salteados con verduras y salsa",
      "details": "Fideos fritos en plancha con cerdo, col y una salsa oscura ligeramente agridulce.",
      "segments": [
        {
          "text": "焼",
          "furigana": "や"
        },
        {
          "text": "きそば"
        }
      ],
      "targetKanji": [
        "焼"
      ]
    },
    {
      "id": "ref-l11-17",
      "lessonId": "l11",
      "category": "Platos japoneses y fideos",
      "badge": "Especialidad",
      "japanese": "お好み焼き",
      "reading": "おこのみやき",
      "romaji": "Okonomiyaki",
      "spanish": "Torta / panqueque salado a la plancha",
      "details": "Masa de harina, huevo y col cocinada en teppan con carne o marisco, decorada con salsa okonomi, mayonesa, aonori y katsuobushi.",
      "segments": [
        {
          "text": "お"
        },
        {
          "text": "好",
          "furigana": "この"
        },
        {
          "text": "み"
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
        "好",
        "焼"
      ]
    },
    {
      "id": "ref-l11-18",
      "lessonId": "l11",
      "category": "Platos de estilo occidental y aperitivos",
      "badge": "Yōshoku",
      "japanese": "カレーライス",
      "reading": "カレーライス",
      "romaji": "Kareeraisu",
      "spanish": "Curry con arroz",
      "details": "Uno de los platos más populares de Japón: salsa espesa de curry japonés servida junto a arroz blanco.",
      "segments": [
        {
          "text": "カレーライス"
        }
      ],
      "targetKanji": []
    },
    {
      "id": "ref-l11-19",
      "lessonId": "l11",
      "category": "Platos de estilo occidental y aperitivos",
      "badge": "Yōshoku",
      "japanese": "ハンバーグ",
      "reading": "ハンバーグ",
      "romaji": "Hanbaagu",
      "spanish": "Hamburguesa al plato (filete ruso)",
      "details": "Filete de carne picada sazonada servido al plato con salsa demi-glace o ponzu, sin pan de sándwich.",
      "segments": [
        {
          "text": "ハンバーグ"
        }
      ],
      "targetKanji": []
    },
    {
      "id": "ref-l11-20",
      "lessonId": "l11",
      "category": "Platos de estilo occidental y aperitivos",
      "badge": "Yōshoku",
      "japanese": "コロッケ",
      "reading": "コロッケ",
      "romaji": "Korokke",
      "spanish": "Croqueta japonesa",
      "details": "Croqueta frita rebozada en panko, tradicionalmente rellena de puré de patata y carne picada.",
      "segments": [
        {
          "text": "コロッケ"
        }
      ],
      "targetKanji": []
    },
    {
      "id": "ref-l11-21",
      "lessonId": "l11",
      "category": "Platos de estilo occidental y aperitivos",
      "badge": "Yōshoku",
      "japanese": "えびフライ",
      "reading": "えびフライ",
      "romaji": "Ebi-furai",
      "spanish": "Langostinos / gambas fritas",
      "details": "Langostinos enteros empanados en panko crujiente y servidos con salsa tártara y rodajas de limón.",
      "segments": [
        {
          "text": "えびフライ"
        }
      ],
      "targetKanji": []
    },
    {
      "id": "ref-l11-22",
      "lessonId": "l11",
      "category": "Platos de estilo occidental y aperitivos",
      "badge": "Yōshoku",
      "japanese": "フライドチキン",
      "reading": "フライドチキン",
      "romaji": "Furaido-chikin",
      "spanish": "Pollo frito",
      "details": "Trozos de pollo rebozados y fritos al estilo occidental.",
      "segments": [
        {
          "text": "フライドチキン"
        }
      ],
      "targetKanji": []
    },
    {
      "id": "ref-l11-23",
      "lessonId": "l11",
      "category": "Platos de estilo occidental y aperitivos",
      "badge": "Acompañamiento",
      "japanese": "サラダ",
      "reading": "サラダ",
      "romaji": "Sarada",
      "spanish": "Ensalada",
      "details": "Ensalada de lechuga, tomate, maíz o ensalada de patata japonesa.",
      "segments": [
        {
          "text": "サラダ"
        }
      ],
      "targetKanji": []
    },
    {
      "id": "ref-l11-24",
      "lessonId": "l11",
      "category": "Platos de estilo occidental y aperitivos",
      "badge": "Acompañamiento",
      "japanese": "スープ",
      "reading": "スープ",
      "romaji": "Suupu",
      "spanish": "Sopa, caldo",
      "details": "Sopa de estilo occidental como crema de maíz (corn soup) o consomé.",
      "segments": [
        {
          "text": "スープ"
        }
      ],
      "targetKanji": []
    },
    {
      "id": "ref-l11-25",
      "lessonId": "l11",
      "category": "Platos de estilo occidental y aperitivos",
      "badge": "Pasta",
      "japanese": "スパゲッティ",
      "reading": "スパゲッティ",
      "romaji": "Supagetti",
      "spanish": "Espaguetis",
      "details": "Pasta italiana o adaptaciones japonesas como espaguetis Napolitan con ketchup y salchichas.",
      "segments": [
        {
          "text": "スパゲッティ"
        }
      ],
      "targetKanji": []
    },
    {
      "id": "ref-l11-26",
      "lessonId": "l11",
      "category": "Platos de estilo occidental y aperitivos",
      "badge": "Comida rápida",
      "japanese": "ピザ",
      "reading": "ピザ",
      "romaji": "Piza",
      "spanish": "Pizza",
      "details": "Pizza.",
      "segments": [
        {
          "text": "ピザ"
        }
      ],
      "targetKanji": []
    },
    {
      "id": "ref-l11-27",
      "lessonId": "l11",
      "category": "Platos de estilo occidental y aperitivos",
      "badge": "Comida rápida",
      "japanese": "ハンバーガー",
      "reading": "ハンバーガー",
      "romaji": "Hanbaagaa",
      "spanish": "Hamburguesa con panecillo",
      "details": "Hamburguesa servida dentro de pan redondo con lechuga y salsas.",
      "segments": [
        {
          "text": "ハンバーガー"
        }
      ],
      "targetKanji": []
    },
    {
      "id": "ref-l11-28",
      "lessonId": "l11",
      "category": "Platos de estilo occidental y aperitivos",
      "badge": "Comida rápida",
      "japanese": "サンドイッチ",
      "reading": "サンドイッチ",
      "romaji": "Sandoicchi",
      "spanish": "Sándwich",
      "details": "Sándwich de pan de molde suave y sin corteza, con huevo, jamón o frutas.",
      "segments": [
        {
          "text": "サンドイッチ"
        }
      ],
      "targetKanji": []
    },
    {
      "id": "ref-l11-29",
      "lessonId": "l11",
      "category": "Platos de estilo occidental y aperitivos",
      "badge": "Desayuno",
      "japanese": "トースト",
      "reading": "トースト",
      "romaji": "Toosuto",
      "spanish": "Tostada de pan",
      "details": "Tostada de pan grueso servida comúnmente con mantequilla o mermelada en el desayuno.",
      "segments": [
        {
          "text": "トースト"
        }
      ],
      "targetKanji": []
    },
    {
      "id": "ref-l11-30",
      "lessonId": "l11",
      "category": "Bebidas",
      "badge": "Caliente / Frío",
      "japanese": "コーヒー",
      "reading": "コーヒー",
      "romaji": "Koohii",
      "spanish": "Café",
      "details": "Café solo o con leche, servido caliente (ホット) o con hielo (アイス).",
      "segments": [
        {
          "text": "コーヒー"
        }
      ],
      "targetKanji": []
    },
    {
      "id": "ref-l11-31",
      "lessonId": "l11",
      "category": "Bebidas",
      "badge": "Té occidental",
      "japanese": "紅茶",
      "reading": "こうちゃ",
      "romaji": "Koucha",
      "spanish": "Té negro (té occidental)",
      "details": "A diferencia del té verde japonés (ocha), kōcha se refiere al té negro estilo inglés.",
      "segments": [
        {
          "text": "紅茶",
          "furigana": "こうちゃ"
        }
      ],
      "targetKanji": [
        "茶"
      ]
    },
    {
      "id": "ref-l11-32",
      "lessonId": "l11",
      "category": "Bebidas",
      "badge": "Dulce",
      "japanese": "ココア",
      "reading": "ココア",
      "romaji": "Kokoa",
      "spanish": "Chocolate / cacao soluble",
      "details": "Bebida dulce caliente o fría a base de cacao.",
      "segments": [
        {
          "text": "ココア"
        }
      ],
      "targetKanji": []
    },
    {
      "id": "ref-l11-33",
      "lessonId": "l11",
      "category": "Bebidas",
      "badge": "Refresco",
      "japanese": "ジュース",
      "reading": "ジュース",
      "romaji": "Juusu",
      "spanish": "Zumo, jugo de frutas",
      "details": "Zumo de naranja, manzana u otras frutas.",
      "segments": [
        {
          "text": "ジュース"
        }
      ],
      "targetKanji": []
    },
    {
      "id": "ref-l11-34",
      "lessonId": "l11",
      "category": "Bebidas",
      "badge": "Refresco",
      "japanese": "コーラ",
      "reading": "コーラ",
      "romaji": "Koora",
      "spanish": "Coca-cola / refresco de cola",
      "details": "Refresco carbonatado de cola.",
      "segments": [
        {
          "text": "コーラ"
        }
      ],
      "targetKanji": []
    }
  ]
},
{
  "lessonId": "l12",
  "lessonNumber": "Lección 12",
  "topic": "Festivales y lugares turísticos",
  "topicJapanese": "祭り と 名所",
  "topicDescription": "Lugares turísticos célebres, templos históricos, castillos y grandes festivales tradicionales de las regiones de Japón.",
  "categories": [
    "Lugares turísticos y monumentos",
    "Festivales tradicionales (Matsuri)"
  ],
  "items": [
    {
      "id": "ref-l12-1",
      "lessonId": "l12",
      "category": "Lugares turísticos y monumentos",
      "badge": "Símbolo nacional",
      "japanese": "富士山",
      "reading": "ふじさん",
      "romaji": "Fujisan",
      "spanish": "Monte Fuji",
      "details": "La cumbre más alta de Japón (3.776 m), estratovolcán sagrado y símbolo icónico del país.",
      "segments": [
        {
          "text": "富士山",
          "furigana": "ふじさん"
        }
      ],
      "targetKanji": [
        "山"
      ]
    },
    {
      "id": "ref-l12-2",
      "lessonId": "l12",
      "category": "Lugares turísticos y monumentos",
      "badge": "Kioto",
      "japanese": "鹿苑寺（金閣寺）金閣",
      "reading": "ろくおんじ（きんかくじ）きんかく",
      "romaji": "Rokuonji (Kinkakuji) Kinkaku",
      "spanish": "Templo Rokuonji / Kinkakuji (Pabellón Dorado)",
      "details": "Templo zen situado en Kioto, cuya planta superior está completamente recubierta de láminas de oro puro reflejadas sobre el estanque Kyōko-chi.",
      "segments": [
        {
          "text": "金閣寺",
          "furigana": "きんかくじ"
        },
        {
          "text": "（"
        },
        {
          "text": "鹿苑寺",
          "furigana": "ろくおんじ"
        },
        {
          "text": "）"
        }
      ],
      "targetKanji": [
        "金"
      ]
    },
    {
      "id": "ref-l12-3",
      "lessonId": "l12",
      "category": "Festivales tradicionales (Matsuri)",
      "badge": "Kioto",
      "japanese": "祇園祭",
      "reading": "ぎおんまつり",
      "romaji": "Gion-matsuri",
      "spanish": "Festival de Gion",
      "details": "El festival más famoso de Kioto, celebrado durante todo julio con un desfile colosal de carrozas tradicionales de madera tallada (yamaboko).",
      "segments": [
        {
          "text": "祇園祭",
          "furigana": "ぎおんまつり"
        }
      ],
      "targetKanji": []
    },
    {
      "id": "ref-l12-4",
      "lessonId": "l12",
      "category": "Lugares turísticos y monumentos",
      "badge": "Castillo histórico",
      "japanese": "姫路城",
      "reading": "ひめじじょう",
      "romaji": "Himejijou",
      "spanish": "Castillo de Himeji",
      "details": "Castillo feudal en Himeji (prefectura de Hyōgo), apodado \"Castillo de la Garza Blanca\" (Shirasagi-jō) por sus radiantes muros de yeso blanco y sus torres defensivas.",
      "segments": [
        {
          "text": "姫路城",
          "furigana": "ひめじじょう"
        }
      ],
      "targetKanji": []
    },
    {
      "id": "ref-l12-5",
      "lessonId": "l12",
      "category": "Lugares turísticos y monumentos",
      "badge": "Hiroshima / Paz",
      "japanese": "原爆ドーム",
      "reading": "げんばくドーム",
      "romaji": "Genbaku Doomu",
      "spanish": "Cúpula de la Bomba Atómica",
      "details": "Estructura preservada en Hiroshima, memorial declarado Patrimonio de la Humanidad en recuerdo de las víctimas del bombardeo nuclear de 1945 y símbolo mundial de la paz.",
      "segments": [
        {
          "text": "原爆",
          "furigana": "げんばく"
        },
        {
          "text": "ドーム"
        }
      ],
      "targetKanji": []
    },
    {
      "id": "ref-l12-6",
      "lessonId": "l12",
      "category": "Lugares turísticos y monumentos",
      "badge": "Nikko / Santuario",
      "japanese": "東照宮",
      "reading": "とうしょうぐう",
      "romaji": "Toushouguu",
      "spanish": "Santuario Toshogu (Nikko)",
      "details": "Santuario sintoísta en Nikkō donde reposa el shōgun Tokugawa Ieyasu, conocido por sus fastuosas tallas doradas de los tres monos sabios y el gato durmiente.",
      "segments": [
        {
          "text": "東照宮",
          "furigana": "とうしょうぐう"
        }
      ],
      "targetKanji": [
        "東"
      ]
    },
    {
      "id": "ref-l12-7",
      "lessonId": "l12",
      "category": "Lugares turísticos y monumentos",
      "badge": "Tokio",
      "japanese": "皇居",
      "reading": "こうきょ",
      "romaji": "Koukyo",
      "spanish": "Palacio Imperial",
      "details": "Residencia principal de la familia imperial japonesa en el corazón de Tokio, emplazada sobre los antiguos terrenos del Castillo de Edo rodeados de fosos.",
      "segments": [
        {
          "text": "皇居",
          "furigana": "こうきょ"
        }
      ],
      "targetKanji": []
    },
    {
      "id": "ref-l12-8",
      "lessonId": "l12",
      "category": "Festivales tradicionales (Matsuri)",
      "badge": "Tokio",
      "japanese": "神田祭",
      "reading": "かんだまつり",
      "romaji": "Kanda-matsuri",
      "spanish": "Festival de Kanda",
      "details": "Uno de los tres grandes festivales sintoístas de Tokio, celebrado en mayo con más de doscientas andas sagradas (mikoshi) recorriendo las calles de Akihabara y Kanda.",
      "segments": [
        {
          "text": "神田祭",
          "furigana": "かんだまつり"
        }
      ],
      "targetKanji": [
        "田"
      ]
    },
    {
      "id": "ref-l12-9",
      "lessonId": "l12",
      "category": "Lugares turísticos y monumentos",
      "badge": "Nara / Templo",
      "japanese": "東大寺・大仏",
      "reading": "とうだいじ・だいぶつ",
      "romaji": "Toudaiji · Daibutsu",
      "spanish": "Templo Todaiji y el Gran Buda",
      "details": "Templo budista de Nara con la edificación de madera más grande del mundo (Daibutsuden), que alberga una monumental estatua de bronce de Buda Vairocana de 15 metros.",
      "segments": [
        {
          "text": "東大寺",
          "furigana": "とうだいじ"
        },
        {
          "text": " · "
        },
        {
          "text": "大仏",
          "furigana": "だいぶつ"
        }
      ],
      "targetKanji": [
        "東",
        "大"
      ]
    },
    {
      "id": "ref-l12-10",
      "lessonId": "l12",
      "category": "Festivales tradicionales (Matsuri)",
      "badge": "Osaka",
      "japanese": "天神祭",
      "reading": "てんじんまつり",
      "romaji": "Tenjin-matsuri",
      "spanish": "Festival Tenjin",
      "details": "Gran festival estival de Osaka en honor al dios del aprendizaje Sugawara no Michizane, con procesión de cien embarcaciones sobre el río Okawa y espectáculo pirotécnico.",
      "segments": [
        {
          "text": "天神祭",
          "furigana": "てんじんまつり"
        }
      ],
      "targetKanji": [
        "天"
      ]
    }
  ]
},
{
  "lessonId": "l13",
  "lessonNumber": "Lección 13",
  "topic": "Lugares e instalaciones en la ciudad",
  "topicJapanese": "町の中",
  "topicDescription": "Edificios públicos, centros culturales, templos y lugares de culto, centros educativos, áreas de ocio y comercios típicos de un barrio japonés.",
  "categories": [
    "Cultura, ocio y culto",
    "Servicios públicos y educación",
    "Comercios y tiendas de alimentación"
  ],
  "items": [
    {
      "id": "ref-l13-1",
      "lessonId": "l13",
      "category": "Cultura, ocio y culto",
      "badge": "Cultura",
      "japanese": "博物館",
      "reading": "はくぶつかん",
      "romaji": "Hakubutsukan",
      "spanish": "Museo",
      "details": "Museo general o de historia / ciencias naturales.",
      "segments": [
        {
          "text": "博物館",
          "furigana": "はくぶつかん"
        }
      ],
      "targetKanji": [
        "物"
      ]
    },
    {
      "id": "ref-l13-2",
      "lessonId": "l13",
      "category": "Cultura, ocio y culto",
      "badge": "Cultura",
      "japanese": "美術館",
      "reading": "びじゅつかん",
      "romaji": "Bijutsukan",
      "spanish": "Museo de bellas artes",
      "details": "Galería de arte o museo pictórico / escultórico.",
      "segments": [
        {
          "text": "美術館",
          "furigana": "びじゅつかん"
        }
      ],
      "targetKanji": []
    },
    {
      "id": "ref-l13-3",
      "lessonId": "l13",
      "category": "Cultura, ocio y culto",
      "badge": "Cultura",
      "japanese": "図書館",
      "reading": "としょかん",
      "romaji": "Toshokan",
      "spanish": "Biblioteca",
      "details": "Biblioteca municipal o pública con sala de lectura y préstamo.",
      "segments": [
        {
          "text": "図書館",
          "furigana": "としょかん"
        }
      ],
      "targetKanji": [
        "図",
        "書"
      ]
    },
    {
      "id": "ref-l13-4",
      "lessonId": "l13",
      "category": "Cultura, ocio y culto",
      "badge": "Ocio",
      "japanese": "映画館",
      "reading": "えいがかん",
      "romaji": "Eigakan",
      "spanish": "Cine",
      "details": "Sala de proyección cinematográfica.",
      "segments": [
        {
          "text": "映画館",
          "furigana": "えいがかん"
        }
      ],
      "targetKanji": []
    },
    {
      "id": "ref-l13-5",
      "lessonId": "l13",
      "category": "Cultura, ocio y culto",
      "badge": "Ocio",
      "japanese": "動物園",
      "reading": "どうぶつえん",
      "romaji": "Doubutsuen",
      "spanish": "Parque zoológico",
      "details": "Zoológico con animales.",
      "segments": [
        {
          "text": "動物園",
          "furigana": "どうぶつえん"
        }
      ],
      "targetKanji": [
        "物"
      ]
    },
    {
      "id": "ref-l13-6",
      "lessonId": "l13",
      "category": "Cultura, ocio y culto",
      "badge": "Ocio",
      "japanese": "植物園",
      "reading": "しょくぶつえん",
      "romaji": "Shokubutsuen",
      "spanish": "Jardín botánico",
      "details": "Invernaderos y parque dedicado al cultivo y exhibición botánica.",
      "segments": [
        {
          "text": "植物園",
          "furigana": "しょくぶつえん"
        }
      ],
      "targetKanji": [
        "物"
      ]
    },
    {
      "id": "ref-l13-7",
      "lessonId": "l13",
      "category": "Cultura, ocio y culto",
      "badge": "Ocio",
      "japanese": "遊園地",
      "reading": "ゆうえんち",
      "romaji": "Yuuenchi",
      "spanish": "Parque de atracciones / diversiones",
      "details": "Parque temático con montañas rusas, norias y atracciones.",
      "segments": [
        {
          "text": "遊園地",
          "furigana": "ゆうえんち"
        }
      ],
      "targetKanji": []
    },
    {
      "id": "ref-l13-8",
      "lessonId": "l13",
      "category": "Cultura, ocio y culto",
      "badge": "Budismo",
      "japanese": "お寺",
      "reading": "おてら",
      "romaji": "Otera",
      "spanish": "Templo budista",
      "details": "Recinto religioso budista, a menudo reconocible por sus techos curvados, campana (bonshō) y estatuas de Buda.",
      "segments": [
        {
          "text": "お"
        },
        {
          "text": "寺",
          "furigana": "てら"
        }
      ],
      "targetKanji": []
    },
    {
      "id": "ref-l13-9",
      "lessonId": "l13",
      "category": "Cultura, ocio y culto",
      "badge": "Sintoísmo",
      "japanese": "神社",
      "reading": "じんじゃ",
      "romaji": "Jinja",
      "spanish": "Santuario sintoísta",
      "details": "Lugar sagrado del culto sintoísta a los kami, marcado en la entrada por una gran puerta torii bermellón.",
      "segments": [
        {
          "text": "神社",
          "furigana": "じんじゃ"
        }
      ],
      "targetKanji": [
        "社"
      ]
    },
    {
      "id": "ref-l13-10",
      "lessonId": "l13",
      "category": "Cultura, ocio y culto",
      "badge": "Cristianismo",
      "japanese": "教会",
      "reading": "きょうかい",
      "romaji": "Kyoukai",
      "spanish": "Iglesia",
      "details": "Templo de culto cristiano.",
      "segments": [
        {
          "text": "教会",
          "furigana": "きょうかい"
        }
      ],
      "targetKanji": [
        "会"
      ]
    },
    {
      "id": "ref-l13-11",
      "lessonId": "l13",
      "category": "Cultura, ocio y culto",
      "badge": "Islam",
      "japanese": "モスク",
      "reading": "モスク",
      "romaji": "Mosuku",
      "spanish": "Mezquita",
      "details": "Templo islámico de oración.",
      "segments": [
        {
          "text": "モスク"
        }
      ],
      "targetKanji": []
    },
    {
      "id": "ref-l13-12",
      "lessonId": "l13",
      "category": "Cultura, ocio y culto",
      "badge": "Deporte",
      "japanese": "体育館",
      "reading": "たいいくかん",
      "romaji": "Taiikukan",
      "spanish": "Gimnasio, pabellón cubierto",
      "details": "Pabellón cubierto para baloncesto, voleibol, gimnasia y actos comunales.",
      "segments": [
        {
          "text": "体育館",
          "furigana": "たいいくかん"
        }
      ],
      "targetKanji": []
    },
    {
      "id": "ref-l13-13",
      "lessonId": "l13",
      "category": "Cultura, ocio y culto",
      "badge": "Deporte",
      "japanese": "プール",
      "reading": "プール",
      "romaji": "Puuru",
      "spanish": "Piscina",
      "details": "Piscina municipal o recreativa de natación.",
      "segments": [
        {
          "text": "プール"
        }
      ],
      "targetKanji": []
    },
    {
      "id": "ref-l13-14",
      "lessonId": "l13",
      "category": "Cultura, ocio y culto",
      "badge": "Naturaleza",
      "japanese": "公園",
      "reading": "こうえん",
      "romaji": "Kouen",
      "spanish": "Parque público",
      "details": "Área verde urbana con columpios, bancos y cerezos en flor.",
      "segments": [
        {
          "text": "公園",
          "furigana": "こうえん"
        }
      ],
      "targetKanji": []
    },
    {
      "id": "ref-l13-15",
      "lessonId": "l13",
      "category": "Servicios públicos y educación",
      "badge": "Gobierno",
      "japanese": "大使館",
      "reading": "たいしかん",
      "romaji": "Taishikan",
      "spanish": "Embajada",
      "details": "Misión diplomática de un país extranjero en Japón.",
      "segments": [
        {
          "text": "大使館",
          "furigana": "たいしかん"
        }
      ],
      "targetKanji": [
        "大"
      ]
    },
    {
      "id": "ref-l13-16",
      "lessonId": "l13",
      "category": "Servicios públicos y educación",
      "badge": "Gobierno",
      "japanese": "入国管理局",
      "reading": "にゅうこくかんりきょく",
      "romaji": "Nyuukoku kanrikyoku",
      "spanish": "Oficina de inmigración",
      "details": "Oficina oficial donde se gestionan los visados, permisos de residencia y trámites de estancia para extranjeros.",
      "segments": [
        {
          "text": "入国管理局",
          "furigana": "にゅうこくかんりきょく"
        }
      ],
      "targetKanji": [
        "入",
        "国"
      ]
    },
    {
      "id": "ref-l13-17",
      "lessonId": "l13",
      "category": "Servicios públicos y educación",
      "badge": "Administración",
      "japanese": "市役所",
      "reading": "しやくしょ",
      "romaji": "Shiyakusho",
      "spanish": "Ayuntamiento / casa consistorial",
      "details": "Sede del gobierno municipal para empadronamiento, seguros y documentación civil.",
      "segments": [
        {
          "text": "市役所",
          "furigana": "しやくしょ"
        }
      ],
      "targetKanji": []
    },
    {
      "id": "ref-l13-18",
      "lessonId": "l13",
      "category": "Servicios públicos y educación",
      "badge": "Seguridad",
      "japanese": "警察署",
      "reading": "けいさつしょ",
      "romaji": "Keisatsusho",
      "spanish": "Comisaría de policía central",
      "details": "Comisaría de policía distrital.",
      "segments": [
        {
          "text": "警察署",
          "furigana": "けいさつしょ"
        }
      ],
      "targetKanji": []
    },
    {
      "id": "ref-l13-19",
      "lessonId": "l13",
      "category": "Servicios públicos y educación",
      "badge": "Seguridad",
      "japanese": "交番",
      "reading": "こうばん",
      "romaji": "Kouban",
      "spanish": "Puesto de policía de barrio (kōban)",
      "details": "Pequeñas casetas de policía en esquinas y estaciones donde se reportan objetos perdidos y se orienta a transeúntes.",
      "segments": [
        {
          "text": "交番",
          "furigana": "こうばん"
        }
      ],
      "targetKanji": []
    },
    {
      "id": "ref-l13-20",
      "lessonId": "l13",
      "category": "Servicios públicos y educación",
      "badge": "Emergencias",
      "japanese": "消防署",
      "reading": "しょうぼうしょ",
      "romaji": "Shoubousho",
      "spanish": "Cuartel de bomberos",
      "details": "Parque de bomberos y ambulancias.",
      "segments": [
        {
          "text": "消防署",
          "furigana": "しょうぼうしょ"
        }
      ],
      "targetKanji": []
    },
    {
      "id": "ref-l13-21",
      "lessonId": "l13",
      "category": "Servicios públicos y educación",
      "badge": "Transporte",
      "japanese": "駐車場",
      "reading": "ちゅうしゃじょう",
      "romaji": "Chuushajou",
      "spanish": "Aparcamiento / estacionamiento",
      "details": "Zona de estacionamiento de vehículos.",
      "segments": [
        {
          "text": "駐車場",
          "furigana": "ちゅうしゃじょう"
        }
      ],
      "targetKanji": [
        "車"
      ]
    },
    {
      "id": "ref-l13-22",
      "lessonId": "l13",
      "category": "Servicios públicos y educación",
      "badge": "Educación superior",
      "japanese": "大学",
      "reading": "だいがく",
      "romaji": "Daigaku",
      "spanish": "Universidad",
      "details": "Institución de educación universitaria y superior.",
      "segments": [
        {
          "text": "大学",
          "furigana": "だいがく"
        }
      ],
      "targetKanji": [
        "大",
        "学"
      ]
    },
    {
      "id": "ref-l13-23",
      "lessonId": "l13",
      "category": "Servicios públicos y educación",
      "badge": "Educación secundaria",
      "japanese": "高校",
      "reading": "こうこう",
      "romaji": "Koukou",
      "spanish": "Bachillerato / secundaria superior (15-18 años)",
      "details": "Abreviatura habitual de 高等学校 (kōtō gakkō), instituto preparatorio.",
      "segments": [
        {
          "text": "高校",
          "furigana": "こうこう"
        }
      ],
      "targetKanji": [
        "高",
        "校"
      ]
    },
    {
      "id": "ref-l13-24",
      "lessonId": "l13",
      "category": "Servicios públicos y educación",
      "badge": "Educación secundaria",
      "japanese": "中学校",
      "reading": "ちゅうがっこう",
      "romaji": "Chuugakkou",
      "spanish": "Escuela secundaria básica (12-15 años)",
      "details": "Educación secundaria obligatoria de tres cursos en Japón.",
      "segments": [
        {
          "text": "中学校",
          "furigana": "ちゅうがっこう"
        }
      ],
      "targetKanji": [
        "中",
        "学",
        "校"
      ]
    },
    {
      "id": "ref-l13-25",
      "lessonId": "l13",
      "category": "Servicios públicos y educación",
      "badge": "Educación primaria",
      "japanese": "小学校",
      "reading": "しょうがっこう",
      "romaji": "Shougakkou",
      "spanish": "Escuela primaria (6-12 años)",
      "details": "Escuela básica de 6 grados donde los niños aprenden hiragana, katakana y más de 1.000 kanjis.",
      "segments": [
        {
          "text": "小学校",
          "furigana": "しょうがっこう"
        }
      ],
      "targetKanji": [
        "小",
        "学",
        "校"
      ]
    },
    {
      "id": "ref-l13-26",
      "lessonId": "l13",
      "category": "Servicios públicos y educación",
      "badge": "Educación infantil",
      "japanese": "幼稚園",
      "reading": "ようちえん",
      "romaji": "Youchien",
      "spanish": "Jardín de infancia / guardería",
      "details": "Escuela preescolar para niños de 3 a 5 años.",
      "segments": [
        {
          "text": "幼稚園",
          "furigana": "ようちえん"
        }
      ],
      "targetKanji": []
    },
    {
      "id": "ref-l13-27",
      "lessonId": "l13",
      "category": "Comercios y tiendas de alimentación",
      "badge": "Comercio tradicional",
      "japanese": "肉屋",
      "reading": "にくや",
      "romaji": "Nikuya",
      "spanish": "Carnicería",
      "details": "Tienda de carne fresca, a menudo famosa por vender también croquetas (korokke) caseras recién fritas.",
      "segments": [
        {
          "text": "肉屋",
          "furigana": "にくや"
        }
      ],
      "targetKanji": [
        "肉"
      ]
    },
    {
      "id": "ref-l13-28",
      "lessonId": "l13",
      "category": "Comercios y tiendas de alimentación",
      "badge": "Comercio",
      "japanese": "パン屋",
      "reading": "パンや",
      "romaji": "Panya",
      "spanish": "Panadería",
      "details": "Panadería y pastelería con panes dulces como el anpan o melonpan.",
      "segments": [
        {
          "text": "パン"
        },
        {
          "text": "屋",
          "furigana": "や"
        }
      ],
      "targetKanji": []
    },
    {
      "id": "ref-l13-29",
      "lessonId": "l13",
      "category": "Comercios y tiendas de alimentación",
      "badge": "Comercio tradicional",
      "japanese": "魚屋",
      "reading": "さかなや",
      "romaji": "Sakanaya",
      "spanish": "Pescadería",
      "details": "Tienda especializada en pescado y marisco fresco del día.",
      "segments": [
        {
          "text": "魚屋",
          "furigana": "さかなや"
        }
      ],
      "targetKanji": [
        "魚"
      ]
    },
    {
      "id": "ref-l13-30",
      "lessonId": "l13",
      "category": "Comercios y tiendas de alimentación",
      "badge": "Comercio tradicional",
      "japanese": "酒屋",
      "reading": "さかや",
      "romaji": "Sakaya",
      "spanish": "Tienda de vinos y licores (bodega)",
      "details": "Venta de sake japonés (nihonshu), cerveza, shōchū y vinos.",
      "segments": [
        {
          "text": "酒屋",
          "furigana": "さかや"
        }
      ],
      "targetKanji": []
    },
    {
      "id": "ref-l13-31",
      "lessonId": "l13",
      "category": "Comercios y tiendas de alimentación",
      "badge": "Comercio tradicional",
      "japanese": "八百屋",
      "reading": "やおや",
      "romaji": "Yaoya",
      "spanish": "Verdulería, frutería",
      "details": "Literalmente \"tienda de las ochocientas variedades\", designa la tradicional frutería y verdulería de barrio.",
      "segments": [
        {
          "text": "八百屋",
          "furigana": "やおや"
        }
      ],
      "targetKanji": [
        "八",
        "百"
      ]
    },
    {
      "id": "ref-l13-32",
      "lessonId": "l13",
      "category": "Comercios y tiendas de alimentación",
      "badge": "Hostelería",
      "japanese": "喫茶店",
      "reading": "きっさてん",
      "romaji": "Kissaten",
      "spanish": "Cafetería clásica",
      "details": "Cafetería clásica japonesa de ambiente sosegado, célebre por su café de filtro y tostadas matutinas.",
      "segments": [
        {
          "text": "喫茶店",
          "furigana": "きっさてん"
        }
      ],
      "targetKanji": [
        "茶"
      ]
    },
    {
      "id": "ref-l13-33",
      "lessonId": "l13",
      "category": "Comercios y tiendas de alimentación",
      "badge": "24 horas",
      "japanese": "コンビニ",
      "reading": "コンビニ",
      "romaji": "Konbini",
      "spanish": "Tienda de conveniencia (24 horas)",
      "details": "Establecimiento abierto 24/7 (7-Eleven, Lawson, FamilyMart) con comida lista, cajero automático, pago de facturas y paquetería.",
      "segments": [
        {
          "text": "コンビニ"
        }
      ],
      "targetKanji": []
    },
    {
      "id": "ref-l13-34",
      "lessonId": "l13",
      "category": "Comercios y tiendas de alimentación",
      "badge": "Comercio",
      "japanese": "スーパー",
      "reading": "スーパー",
      "romaji": "Suupaa",
      "spanish": "Supermercado",
      "details": "Gran supermercado de comestibles y productos del hogar.",
      "segments": [
        {
          "text": "スーパー"
        }
      ],
      "targetKanji": []
    },
    {
      "id": "ref-l13-35",
      "lessonId": "l13",
      "category": "Comercios y tiendas de alimentación",
      "badge": "Gran superficie",
      "japanese": "デパート",
      "reading": "デパート",
      "romaji": "Depaato",
      "spanish": "Gran almacén comercial",
      "details": "Grandes almacenes de varias plantas con sótano gourmet (depachika), moda y restaurantes en la azotea.",
      "segments": [
        {
          "text": "デパート"
        }
      ],
      "targetKanji": []
    }
  ]
},
{
  "lessonId": "l14",
  "lessonNumber": "Lección 14",
  "topic": "La estación de tren y el transporte",
  "topicJapanese": "駅",
  "topicDescription": "Instalaciones y accesos de las estaciones de tren japonesas, categorías de trenes según su velocidad y vocabulario de billetes y abonos.",
  "categories": [
    "Instalaciones y accesos de la estación",
    "Tipos de trenes por velocidad",
    "Billetes y horarios"
  ],
  "items": [
    {
      "id": "ref-l14-1",
      "lessonId": "l14",
      "category": "Instalaciones y accesos de la estación",
      "badge": "Taquilla",
      "japanese": "切符売り場",
      "reading": "きっぷうりば",
      "romaji": "Kippu-uriba",
      "spanish": "Ventanilla / taquilla de billetes",
      "details": "Zona de taquillas atendida por personal para comprar billetes y reservas de asientos.",
      "segments": [
        {
          "text": "切符売",
          "furigana": "きっぷう"
        },
        {
          "text": "り"
        },
        {
          "text": "場",
          "furigana": "ば"
        }
      ],
      "targetKanji": []
    },
    {
      "id": "ref-l14-2",
      "lessonId": "l14",
      "category": "Instalaciones y accesos de la estación",
      "badge": "Autoventa",
      "japanese": "自動券売機",
      "reading": "じどうけんばいき",
      "romaji": "Jidou kenbaiki",
      "spanish": "Máquina expendedora de billetes",
      "details": "Terminales automáticas con pantalla táctil para adquirir billetes sencillos y recargar tarjetas IC (Suica/Pasmo).",
      "segments": [
        {
          "text": "自動券売機",
          "furigana": "じどうけんばいき"
        }
      ],
      "targetKanji": []
    },
    {
      "id": "ref-l14-3",
      "lessonId": "l14",
      "category": "Instalaciones y accesos de la estación",
      "badge": "Ajuste de saldo",
      "japanese": "精算機",
      "reading": "せいさんき",
      "romaji": "Seisanki",
      "spanish": "Máquina de ajuste de tarifa (Fare Adjustment)",
      "details": "Máquinas situadas antes de los tornos de salida para pagar la diferencia si tu billete o tarjeta IC no cubrió todo el trayecto.",
      "segments": [
        {
          "text": "精算機",
          "furigana": "せいさんき"
        }
      ],
      "targetKanji": []
    },
    {
      "id": "ref-l14-4",
      "lessonId": "l14",
      "category": "Instalaciones y accesos de la estación",
      "badge": "Acceso",
      "japanese": "改札口",
      "reading": "かいさつぐち",
      "romaji": "Kaisatsuguchi",
      "spanish": "Barrera de control de billetes / tornos",
      "details": "Puertas automáticas donde se introduce el billete magnético o se aproxima la tarjeta IC.",
      "segments": [
        {
          "text": "改札口",
          "furigana": "かいさつぐち"
        }
      ],
      "targetKanji": [
        "口"
      ]
    },
    {
      "id": "ref-l14-5",
      "lessonId": "l14",
      "category": "Instalaciones y accesos de la estación",
      "badge": "Salida",
      "japanese": "出口",
      "reading": "でぐち",
      "romaji": "Deguchi",
      "spanish": "Salida",
      "details": "Salida hacia el exterior.",
      "segments": [
        {
          "text": "出口",
          "furigana": "でぐち"
        }
      ],
      "targetKanji": [
        "出",
        "口"
      ]
    },
    {
      "id": "ref-l14-6",
      "lessonId": "l14",
      "category": "Instalaciones y accesos de la estación",
      "badge": "Entrada",
      "japanese": "入口",
      "reading": "いりぐち",
      "romaji": "Iriguchi",
      "spanish": "Entrada",
      "details": "Entrada hacia el interior de la estación.",
      "segments": [
        {
          "text": "入口",
          "furigana": "いりぐち"
        }
      ],
      "targetKanji": [
        "入",
        "口"
      ]
    },
    {
      "id": "ref-l14-7",
      "lessonId": "l14",
      "category": "Instalaciones y accesos de la estación",
      "badge": "Orientación",
      "japanese": "東口",
      "reading": "ひがしぐち",
      "romaji": "Higashiguchi",
      "spanish": "Salida este",
      "details": "Salida del lado este de la estación.",
      "segments": [
        {
          "text": "東口",
          "furigana": "ひがしぐち"
        }
      ],
      "targetKanji": [
        "東",
        "口"
      ]
    },
    {
      "id": "ref-l14-8",
      "lessonId": "l14",
      "category": "Instalaciones y accesos de la estación",
      "badge": "Orientación",
      "japanese": "西口",
      "reading": "にしぐち",
      "romaji": "Nishiguchi",
      "spanish": "Salida oeste",
      "details": "Salida del lado oeste de la estación.",
      "segments": [
        {
          "text": "西口",
          "furigana": "にしぐち"
        }
      ],
      "targetKanji": [
        "西",
        "口"
      ]
    },
    {
      "id": "ref-l14-9",
      "lessonId": "l14",
      "category": "Instalaciones y accesos de la estación",
      "badge": "Orientación",
      "japanese": "南口",
      "reading": "みなみぐち",
      "romaji": "Minamiguchi",
      "spanish": "Salida sur",
      "details": "Salida del lado sur de la estación.",
      "segments": [
        {
          "text": "南口",
          "furigana": "みなみぐち"
        }
      ],
      "targetKanji": [
        "南",
        "口"
      ]
    },
    {
      "id": "ref-l14-10",
      "lessonId": "l14",
      "category": "Instalaciones y accesos de la estación",
      "badge": "Orientación",
      "japanese": "北口",
      "reading": "きたぐち",
      "romaji": "Kitaguchi",
      "spanish": "Salida norte",
      "details": "Salida del lado norte de la estación.",
      "segments": [
        {
          "text": "北口",
          "furigana": "きたぐち"
        }
      ],
      "targetKanji": [
        "北",
        "口"
      ]
    },
    {
      "id": "ref-l14-11",
      "lessonId": "l14",
      "category": "Instalaciones y accesos de la estación",
      "badge": "Orientación",
      "japanese": "中央口",
      "reading": "ちゅうおうぐち",
      "romaji": "Chuuouguchi",
      "spanish": "Salida central",
      "details": "Acceso o salida central de la estación.",
      "segments": [
        {
          "text": "中央口",
          "furigana": "ちゅうおうぐち"
        }
      ],
      "targetKanji": [
        "中",
        "口"
      ]
    },
    {
      "id": "ref-l14-12",
      "lessonId": "l14",
      "category": "Instalaciones y accesos de la estación",
      "badge": "Andén",
      "japanese": "［プラット］ホーム",
      "reading": "［プラット］ホーム",
      "romaji": "[Puratto]hoomu",
      "spanish": "Andén, plataforma",
      "details": "Andén de subida y bajada a los vagones del tren.",
      "segments": [
        {
          "text": "［プラット］ホーム"
        }
      ],
      "targetKanji": []
    },
    {
      "id": "ref-l14-13",
      "lessonId": "l14",
      "category": "Instalaciones y accesos de la estación",
      "badge": "Comercio",
      "japanese": "売店",
      "reading": "ばいてん",
      "romaji": "Baiten",
      "spanish": "Quiosco / puesto de venta",
      "details": "Quiosco en el andén o vestíbulo con bebidas, prensa y bento para el viaje (ekiben).",
      "segments": [
        {
          "text": "売店",
          "furigana": "ばいてん"
        }
      ],
      "targetKanji": []
    },
    {
      "id": "ref-l14-14",
      "lessonId": "l14",
      "category": "Instalaciones y accesos de la estación",
      "badge": "Servicio",
      "japanese": "コインロッカー",
      "reading": "コインロッカー",
      "romaji": "Koinrokkaa",
      "spanish": "Consigna automática (taquillas)",
      "details": "Taquillas de equipaje accionadas por monedas o tarjeta IC.",
      "segments": [
        {
          "text": "コインロッカー"
        }
      ],
      "targetKanji": []
    },
    {
      "id": "ref-l14-15",
      "lessonId": "l14",
      "category": "Instalaciones y accesos de la estación",
      "badge": "Conexión",
      "japanese": "タクシー乗り場",
      "reading": "タクシーのりば",
      "romaji": "Takushii-noriba",
      "spanish": "Parada de taxis",
      "details": "Dársena exterior donde se hace fila ordenada para tomar un taxi.",
      "segments": [
        {
          "text": "タクシー"
        },
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
      "targetKanji": []
    },
    {
      "id": "ref-l14-16",
      "lessonId": "l14",
      "category": "Instalaciones y accesos de la estación",
      "badge": "Conexión",
      "japanese": "バスターミナル",
      "reading": "バスターミナル",
      "romaji": "Basutaaminaru",
      "spanish": "Terminal de autobuses",
      "details": "Estación de autobuses urbanos o de largo recorrido.",
      "segments": [
        {
          "text": "バスターミナル"
        }
      ],
      "targetKanji": []
    },
    {
      "id": "ref-l14-17",
      "lessonId": "l14",
      "category": "Instalaciones y accesos de la estación",
      "badge": "Conexión",
      "japanese": "バス停",
      "reading": "バスてい",
      "romaji": "Basutei",
      "spanish": "Parada de autobuses",
      "details": "Poste o marquesina de parada de autobús con su horario.",
      "segments": [
        {
          "text": "バス"
        },
        {
          "text": "停",
          "furigana": "てい"
        }
      ],
      "targetKanji": []
    },
    {
      "id": "ref-l14-18",
      "lessonId": "l14",
      "category": "Tipos de trenes por velocidad",
      "badge": "Mayor velocidad",
      "japanese": "特急",
      "reading": "とっきゅう",
      "romaji": "Tokkyuu",
      "spanish": "Tren superexpreso (Limited Express)",
      "details": "El más rápido de la red convencional. Solo se detiene en terminales principales y habitualmente requiere un billete adicional con recargo de expreso (tokkyūken).",
      "segments": [
        {
          "text": "特急",
          "furigana": "とっきゅう"
        }
      ],
      "targetKanji": []
    },
    {
      "id": "ref-l14-19",
      "lessonId": "l14",
      "category": "Tipos de trenes por velocidad",
      "badge": "Rápido",
      "japanese": "急行",
      "reading": "きゅうこう",
      "romaji": "Kyuukou",
      "spanish": "Tren expreso",
      "details": "Tren que se detiene únicamente en las estaciones más importantes del trayecto.",
      "segments": [
        {
          "text": "急行",
          "furigana": "きゅうこう"
        }
      ],
      "targetKanji": [
        "行"
      ]
    },
    {
      "id": "ref-l14-20",
      "lessonId": "l14",
      "category": "Tipos de trenes por velocidad",
      "badge": "Semirrápido",
      "japanese": "快速",
      "reading": "かいそく",
      "romaji": "Kaisoku",
      "spanish": "Tren rápido (Rapid)",
      "details": "Tren que salta varias estaciones intermedias para acortar tiempo sin suplemento de precio.",
      "segments": [
        {
          "text": "快速",
          "furigana": "かいそく"
        }
      ],
      "targetKanji": []
    },
    {
      "id": "ref-l14-21",
      "lessonId": "l14",
      "category": "Tipos de trenes por velocidad",
      "badge": "Semiexpreso",
      "japanese": "準急",
      "reading": "じゅんきゅう",
      "romaji": "Junkyuu",
      "spanish": "Tren semiexpreso",
      "details": "Tren con paradas intermedias entre el tren local y el expreso.",
      "segments": [
        {
          "text": "準急",
          "furigana": "じゅんきゅう"
        }
      ],
      "targetKanji": []
    },
    {
      "id": "ref-l14-22",
      "lessonId": "l14",
      "category": "Tipos de trenes por velocidad",
      "badge": "Todas las paradas",
      "japanese": "普通",
      "reading": "ふつう",
      "romaji": "Futsuu",
      "spanish": "Tren local (ordinario)",
      "details": "Tren que efectúa parada en todas y cada una de las estaciones de la línea.",
      "segments": [
        {
          "text": "普通",
          "furigana": "ふつう"
        }
      ],
      "targetKanji": []
    },
    {
      "id": "ref-l14-23",
      "lessonId": "l14",
      "category": "Billetes y horarios",
      "badge": "Información",
      "japanese": "時刻表",
      "reading": "じこくひょう",
      "romaji": "Jikokuhyou",
      "spanish": "Horario de trenes",
      "details": "Cartel informativo detallando las horas y minutos exactos de paso de cada tren.",
      "segments": [
        {
          "text": "時刻表",
          "furigana": "じこくひょう"
        }
      ],
      "targetKanji": [
        "時"
      ]
    },
    {
      "id": "ref-l14-24",
      "lessonId": "l14",
      "category": "Billetes y horarios",
      "badge": "Horario / Origen",
      "japanese": "〜発",
      "reading": "〜はつ",
      "romaji": "~hatsu",
      "spanish": "Salida ~ (a tal hora / desde tal origen)",
      "details": "Indica la hora o estación de salida (p. ej. 東京発: procedente de Tokio; 10:15発: salida a las 10:15).",
      "segments": [
        {
          "text": "〜"
        },
        {
          "text": "発",
          "furigana": "はつ"
        }
      ],
      "targetKanji": []
    },
    {
      "id": "ref-l14-25",
      "lessonId": "l14",
      "category": "Billetes y horarios",
      "badge": "Horario / Llegada",
      "japanese": "〜着",
      "reading": "〜ちゃく",
      "romaji": "~chaku",
      "spanish": "Llegada ~ (a tal hora / a tal destino)",
      "details": "Indica la hora de llegada prevista (p. ej. 京都着: llegada a Kioto; 14:30着: llegada a las 14:30).",
      "segments": [
        {
          "text": "〜"
        },
        {
          "text": "着",
          "furigana": "ちゃく"
        }
      ],
      "targetKanji": []
    },
    {
      "id": "ref-l14-26",
      "lessonId": "l14",
      "category": "Billetes y horarios",
      "badge": "Destino",
      "japanese": "［東京］行き",
      "reading": "［とうきょう］いき",
      "romaji": "[Toukyou] iki",
      "spanish": "Con destino a [TOKIO]",
      "details": "Indica la estación terminal o dirección hacia donde se dirige el convoy.",
      "segments": [
        {
          "text": "［東京］"
        },
        {
          "text": "行",
          "furigana": "い"
        },
        {
          "text": "き"
        }
      ],
      "targetKanji": [
        "東",
        "行"
      ]
    },
    {
      "id": "ref-l14-27",
      "lessonId": "l14",
      "category": "Billetes y horarios",
      "badge": "Abono",
      "japanese": "定期券",
      "reading": "ていきけん",
      "romaji": "Teikiken",
      "spanish": "Abono de transporte regular",
      "details": "Pase con descuento válido durante 1, 3 o 6 meses para viajes ilimitados entre dos estaciones concretas (usado por estudiantes y trabajadores).",
      "segments": [
        {
          "text": "定期券",
          "furigana": "ていきけん"
        }
      ],
      "targetKanji": []
    },
    {
      "id": "ref-l14-28",
      "lessonId": "l14",
      "category": "Billetes y horarios",
      "badge": "Bono",
      "japanese": "回数券",
      "reading": "かいすうけん",
      "romaji": "Kaisuuken",
      "spanish": "Billete múltiple / talonario de viajes",
      "details": "Conjunto de 11 billetes por el precio de 10 para un mismo trayecto frecuente.",
      "segments": [
        {
          "text": "回数券",
          "furigana": "かいすうけん"
        }
      ],
      "targetKanji": []
    },
    {
      "id": "ref-l14-29",
      "lessonId": "l14",
      "category": "Billetes y horarios",
      "badge": "Trayecto",
      "japanese": "片道",
      "reading": "かたみち",
      "romaji": "Katamichi",
      "spanish": "Solo ida (billete sencillo)",
      "details": "Viaje en una sola dirección.",
      "segments": [
        {
          "text": "片道",
          "furigana": "かたみち"
        }
      ],
      "targetKanji": []
    },
    {
      "id": "ref-l14-30",
      "lessonId": "l14",
      "category": "Billetes y horarios",
      "badge": "Trayecto",
      "japanese": "往復",
      "reading": "おうふく",
      "romaji": "Oufuku",
      "spanish": "Ida y vuelta",
      "details": "Billete que incluye el trayecto de ida y el correspondiente regreso.",
      "segments": [
        {
          "text": "往復",
          "furigana": "おうふく"
        }
      ],
      "targetKanji": []
    }
  ]
},
{
  "lessonId": "l15",
  "lessonNumber": "Lección 15",
  "topic": "Profesiones y ocupaciones",
  "topicJapanese": "職業",
  "topicDescription": "Gama representativa de oficios, puestos corporativos, personal de servicios, profesionales de la salud, artes, educación y deportes.",
  "categories": [
    "Empresa y función pública",
    "Comercio, hostelería y servicios",
    "Educación, salud y derecho",
    "Artes, humanidades y ciencia",
    "Diseño, comunicación y deportes"
  ],
  "items": [
    {
      "id": "ref-l15-1",
      "lessonId": "l15",
      "category": "Empresa y función pública",
      "badge": "Empresa",
      "japanese": "会社員",
      "reading": "かいしゃいん",
      "romaji": "Kaishain",
      "spanish": "Empleado de compañía",
      "details": "Oficinista / trabajador asalariado de una corporación privada.",
      "segments": [
        {
          "text": "会社員",
          "furigana": "かいしゃいん"
        }
      ],
      "targetKanji": [
        "会",
        "社",
        "員"
      ]
    },
    {
      "id": "ref-l15-2",
      "lessonId": "l15",
      "category": "Empresa y función pública",
      "badge": "Sector público",
      "japanese": "公務員",
      "reading": "こうむいん",
      "romaji": "Koumuin",
      "spanish": "Funcionario público",
      "details": "Trabajador al servicio de la administración del estado, prefectura o ayuntamiento.",
      "segments": [
        {
          "text": "公務員",
          "furigana": "こうむいん"
        }
      ],
      "targetKanji": [
        "員"
      ]
    },
    {
      "id": "ref-l15-3",
      "lessonId": "l15",
      "category": "Empresa y función pública",
      "badge": "Transporte",
      "japanese": "駅員",
      "reading": "えきいん",
      "romaji": "Ekiin",
      "spanish": "Empleado de estación",
      "details": "Personal de apoyo al viajero y control en estaciones de tren y metro.",
      "segments": [
        {
          "text": "駅員",
          "furigana": "えきいん"
        }
      ],
      "targetKanji": [
        "員"
      ]
    },
    {
      "id": "ref-l15-4",
      "lessonId": "l15",
      "category": "Empresa y función pública",
      "badge": "Banca",
      "japanese": "銀行員",
      "reading": "ぎんこういん",
      "romaji": "Ginkouin",
      "spanish": "Empleado de banco",
      "details": "Profesional que trabaja en entidades financieras y bancarias.",
      "segments": [
        {
          "text": "銀行員",
          "furigana": "ぎんこういん"
        }
      ],
      "targetKanji": [
        "銀",
        "行",
        "員"
      ]
    },
    {
      "id": "ref-l15-5",
      "lessonId": "l15",
      "category": "Empresa y función pública",
      "badge": "Servicio postal",
      "japanese": "郵便局員",
      "reading": "ゆうびんきょくいん",
      "romaji": "Yuubinkyokuin",
      "spanish": "Empleado de correos",
      "details": "Empleado de oficina postal o cartero encargado del reparto.",
      "segments": [
        {
          "text": "郵便局員",
          "furigana": "ゆうびんきょくいん"
        }
      ],
      "targetKanji": [
        "員"
      ]
    },
    {
      "id": "ref-l15-6",
      "lessonId": "l15",
      "category": "Comercio, hostelería y servicios",
      "badge": "Comercio",
      "japanese": "店員",
      "reading": "てんいん",
      "romaji": "Ten'in",
      "spanish": "Dependiente / empleado de tienda",
      "details": "Trabajador de atención al cliente en tiendas, supermercados o almacenes.",
      "segments": [
        {
          "text": "店員",
          "furigana": "てんいん"
        }
      ],
      "targetKanji": [
        "店",
        "員"
      ]
    },
    {
      "id": "ref-l15-7",
      "lessonId": "l15",
      "category": "Comercio, hostelería y servicios",
      "badge": "Gastronomía",
      "japanese": "調理師",
      "reading": "ちょうりし",
      "romaji": "Chourishi",
      "spanish": "Cocinero titulado / chef",
      "details": "Profesional de la cocina certificado con licencia gastronómica oficial.",
      "segments": [
        {
          "text": "調理師",
          "furigana": "ちょうりし"
        }
      ],
      "targetKanji": []
    },
    {
      "id": "ref-l15-8",
      "lessonId": "l15",
      "category": "Comercio, hostelería y servicios",
      "badge": "Cuidado personal",
      "japanese": "理容師",
      "reading": "りようし",
      "romaji": "Riyoushi",
      "spanish": "Barbero",
      "details": "Especialista en afeitado y corte de cabello masculino con barbería tradicional.",
      "segments": [
        {
          "text": "理容師",
          "furigana": "りようし"
        }
      ],
      "targetKanji": []
    },
    {
      "id": "ref-l15-9",
      "lessonId": "l15",
      "category": "Comercio, hostelería y servicios",
      "badge": "Cuidado personal",
      "japanese": "美容師",
      "reading": "びようし",
      "romaji": "Biyoushi",
      "spanish": "Peluquero / estilista",
      "details": "Estilista profesional de corte, peinado y cuidado estético capilar.",
      "segments": [
        {
          "text": "美容師",
          "furigana": "びようし"
        }
      ],
      "targetKanji": []
    },
    {
      "id": "ref-l15-10",
      "lessonId": "l15",
      "category": "Educación, salud y derecho",
      "badge": "Enseñanza",
      "japanese": "教師",
      "reading": "きょうし",
      "romaji": "Kyoushi",
      "spanish": "Maestro / profesor",
      "details": "Denominación técnica de la ocupación docente (cuando uno habla de su propio trabajo como profesor se usa 教師, mientras que el trato respetuoso ajeno es 先生).",
      "segments": [
        {
          "text": "教師",
          "furigana": "きょうし"
        }
      ],
      "targetKanji": []
    },
    {
      "id": "ref-l15-11",
      "lessonId": "l15",
      "category": "Educación, salud y derecho",
      "badge": "Derecho",
      "japanese": "弁護士",
      "reading": "べんごし",
      "romaji": "Bengoshi",
      "spanish": "Abogado",
      "details": "Letrado y asesor jurídico profesional.",
      "segments": [
        {
          "text": "弁護士",
          "furigana": "べんごし"
        }
      ],
      "targetKanji": []
    },
    {
      "id": "ref-l15-12",
      "lessonId": "l15",
      "category": "Artes, humanidades y ciencia",
      "badge": "Investigación",
      "japanese": "研究者",
      "reading": "けんきゅうしゃ",
      "romaji": "Kenkyuusha",
      "spanish": "Investigador / científico",
      "details": "Científico o investigador adscrito a universidades e institutos de I+D.",
      "segments": [
        {
          "text": "研究者",
          "furigana": "けんきゅうしゃ"
        }
      ],
      "targetKanji": []
    },
    {
      "id": "ref-l15-13",
      "lessonId": "l15",
      "category": "Educación, salud y derecho",
      "badge": "Medicina",
      "japanese": "医者",
      "reading": "いしゃ",
      "romaji": "Isha",
      "spanish": "Médico / doctor",
      "details": "Profesional de la medicina y la atención clínica de pacientes.",
      "segments": [
        {
          "text": "医者",
          "furigana": "いしゃ"
        }
      ],
      "targetKanji": []
    },
    {
      "id": "ref-l15-14",
      "lessonId": "l15",
      "category": "Educación, salud y derecho",
      "badge": "Enfermería",
      "japanese": "看護師",
      "reading": "かんごし",
      "romaji": "Kangoshi",
      "spanish": "Enfermero / enfermera",
      "details": "Profesional sanitario de enfermería y cuidados médicos.",
      "segments": [
        {
          "text": "看護師",
          "furigana": "かんごし"
        }
      ],
      "targetKanji": []
    },
    {
      "id": "ref-l15-15",
      "lessonId": "l15",
      "category": "Comercio, hostelería y servicios",
      "badge": "Transporte",
      "japanese": "運転手",
      "reading": "うんてんしゅ",
      "romaji": "Untenshu",
      "spanish": "Chófer, conductor",
      "details": "Conductor profesional de taxi, autobús o vehículos de transporte de pasajeros y mercancías.",
      "segments": [
        {
          "text": "運転手",
          "furigana": "うんてんしゅ"
        }
      ],
      "targetKanji": [
        "手"
      ]
    },
    {
      "id": "ref-l15-16",
      "lessonId": "l15",
      "category": "Empresa y función pública",
      "badge": "Seguridad",
      "japanese": "警察官",
      "reading": "けいさつかん",
      "romaji": "Keisatsukan",
      "spanish": "Agente de policía",
      "details": "Oficial de policía uniformado.",
      "segments": [
        {
          "text": "警察官",
          "furigana": "けいさつかん"
        }
      ],
      "targetKanji": []
    },
    {
      "id": "ref-l15-17",
      "lessonId": "l15",
      "category": "Empresa y función pública",
      "badge": "Diplomacia",
      "japanese": "外交官",
      "reading": "がいこうかん",
      "romaji": "Gaikoukan",
      "spanish": "Diplomático",
      "details": "Representante oficial del servicio exterior de un estado.",
      "segments": [
        {
          "text": "外交官",
          "furigana": "がいこうかん"
        }
      ],
      "targetKanji": [
        "外"
      ]
    },
    {
      "id": "ref-l15-18",
      "lessonId": "l15",
      "category": "Empresa y función pública",
      "badge": "Política",
      "japanese": "政治家",
      "reading": "せいじか",
      "romaji": "Seijika",
      "spanish": "Político",
      "details": "Miembro del parlamento, asamblea legislativa o gobernante electo.",
      "segments": [
        {
          "text": "政治家",
          "furigana": "せいじか"
        }
      ],
      "targetKanji": []
    },
    {
      "id": "ref-l15-19",
      "lessonId": "l15",
      "category": "Artes, humanidades y ciencia",
      "badge": "Bellas artes",
      "japanese": "画家",
      "reading": "がか",
      "romaji": "Gaka",
      "spanish": "Pintor artístico",
      "details": "Artista que crea obras pictóricas.",
      "segments": [
        {
          "text": "画家",
          "furigana": "がか"
        }
      ],
      "targetKanji": []
    },
    {
      "id": "ref-l15-20",
      "lessonId": "l15",
      "category": "Artes, humanidades y ciencia",
      "badge": "Literatura",
      "japanese": "作家",
      "reading": "さっか",
      "romaji": "Sakka",
      "spanish": "Escritor, novelista, autor",
      "details": "Creador de obras literarias, novelas o ensayos.",
      "segments": [
        {
          "text": "作家",
          "furigana": "さっか"
        }
      ],
      "targetKanji": [
        "作"
      ]
    },
    {
      "id": "ref-l15-21",
      "lessonId": "l15",
      "category": "Artes, humanidades y ciencia",
      "badge": "Música",
      "japanese": "音楽家",
      "reading": "おんがくか",
      "romaji": "Ongakuka",
      "spanish": "Músico profesional / compositor",
      "details": "Compositor o intérprete instrumental clásico o contemporáneo.",
      "segments": [
        {
          "text": "音楽家",
          "furigana": "おんがくか"
        }
      ],
      "targetKanji": []
    },
    {
      "id": "ref-l15-22",
      "lessonId": "l15",
      "category": "Artes, humanidades y ciencia",
      "badge": "Arquitectura",
      "japanese": "建築家",
      "reading": "けんちくか",
      "romaji": "Kenchikuka",
      "spanish": "Arquitecto",
      "details": "Profesional del diseño estructural y planificación de edificios.",
      "segments": [
        {
          "text": "建築家",
          "furigana": "けんちくか"
        }
      ],
      "targetKanji": []
    },
    {
      "id": "ref-l15-23",
      "lessonId": "l15",
      "category": "Diseño, comunicación y deportes",
      "badge": "Tecnología",
      "japanese": "エンジニア",
      "reading": "エンジニア",
      "romaji": "Enjinia",
      "spanish": "Ingeniero",
      "details": "Ingeniero informático, mecánico, eléctrico u obras públicas.",
      "segments": [
        {
          "text": "エンジニア"
        }
      ],
      "targetKanji": []
    },
    {
      "id": "ref-l15-24",
      "lessonId": "l15",
      "category": "Diseño, comunicación y deportes",
      "badge": "Creativo",
      "japanese": "デザイナー",
      "reading": "デザイナー",
      "romaji": "Dezainaa",
      "spanish": "Diseñador / modista",
      "details": "Profesional del diseño gráfico, moda, producto o interiores.",
      "segments": [
        {
          "text": "デザイナー"
        }
      ],
      "targetKanji": []
    },
    {
      "id": "ref-l15-25",
      "lessonId": "l15",
      "category": "Diseño, comunicación y deportes",
      "badge": "Comunicación",
      "japanese": "ジャーナリスト",
      "reading": "ジャーナリスト",
      "romaji": "Jaanarisuto",
      "spanish": "Periodista",
      "details": "Corresponsal o reportero de noticias en prensa, radio y televisión.",
      "segments": [
        {
          "text": "ジャーナリスト"
        }
      ],
      "targetKanji": []
    },
    {
      "id": "ref-l15-26",
      "lessonId": "l15",
      "category": "Diseño, comunicación y deportes",
      "badge": "Música",
      "japanese": "歌手",
      "reading": "かしゅ",
      "romaji": "Kashu",
      "spanish": "Cantante",
      "details": "Vocalista e intérprete de canciones.",
      "segments": [
        {
          "text": "歌手",
          "furigana": "かしゅ"
        }
      ],
      "targetKanji": [
        "手"
      ]
    },
    {
      "id": "ref-l15-27",
      "lessonId": "l15",
      "category": "Diseño, comunicación y deportes",
      "badge": "Artes escénicas",
      "japanese": "俳優",
      "reading": "はいゆう",
      "romaji": "Haiyuu",
      "spanish": "Actor (actriz)",
      "details": "Intérprete teatral, de cine o series de televisión.",
      "segments": [
        {
          "text": "俳優",
          "furigana": "はいゆう"
        }
      ],
      "targetKanji": []
    },
    {
      "id": "ref-l15-28",
      "lessonId": "l15",
      "category": "Diseño, comunicación y deportes",
      "badge": "Deportes",
      "japanese": "スポーツ選手",
      "reading": "スポーツせんしゅ",
      "romaji": "Supootsu-senshu",
      "spanish": "Atleta / deportista profesional",
      "details": "Deportista de béisbol, fútbol, judo u otra disciplina competitiva.",
      "segments": [
        {
          "text": "スポーツ"
        },
        {
          "text": "選手",
          "furigana": "せんしゅ"
        }
      ],
      "targetKanji": [
        "手"
      ]
    }
  ]
},
{
    "lessonId": "l16",
    "lessonNumber": "Lección 16",
    "topic": "Cómo usar el cajero automático (ATM)",
    "topicJapanese": "ATM の 使い方",
    "topicDescription": "Términos bancarios clave, botones de la pantalla táctil y el procedimiento paso a paso para operar en un cajero automático japonés (depósitos, retiros, transferencias y libretas de ahorro).",
    "categories": [
      "Operaciones bancarias del cajero",
      "Teclas, moneda y pantalla",
      "Pasos para retirar efectivo (お引き出しの手順)"
    ],
    "items": [
      {
        "id": "ref-l16-1",
        "lessonId": "l16",
        "category": "Operaciones bancarias del cajero",
        "badge": "Operación",
        "japanese": "お預け入れ",
        "reading": "おあずけいれ",
        "romaji": "Oazukeire",
        "spanish": "Depósito / Ingreso de dinero",
        "details": "Opción para ingresar billetes o monedas en la cuenta bancaria.",
        "segments": [
          {
            "text": "お"
          },
          {
            "text": "預",
            "furigana": "あず"
          },
          {
            "text": "け"
          },
          {
            "text": "入",
            "furigana": "い"
          },
          {
            "text": "れ"
          }
        ],
        "targetKanji": [
          "入"
        ]
      },
      {
        "id": "ref-l16-2",
        "lessonId": "l16",
        "category": "Operaciones bancarias del cajero",
        "badge": "Operación",
        "japanese": "お振り込み",
        "reading": "おふりこみ",
        "romaji": "Ofurikomi",
        "spanish": "Pago por transferencia",
        "details": "Envío de dinero a una cuenta de otra persona, empresa o entidad bancaria.",
        "segments": [
          {
            "text": "お"
          },
          {
            "text": "振",
            "furigana": "ふ"
          },
          {
            "text": "り"
          },
          {
            "text": "込",
            "furigana": "こ"
          },
          {
            "text": "み"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l16-3",
        "lessonId": "l16",
        "category": "Operaciones bancarias del cajero",
        "badge": "Operación",
        "japanese": "お振り替え",
        "reading": "おふりかえ",
        "romaji": "Ofurikae",
        "spanish": "Transferencia (traspaso entre cuentas)",
        "details": "Traspaso de fondos entre cuentas del mismo titular o banco.",
        "segments": [
          {
            "text": "お"
          },
          {
            "text": "振",
            "furigana": "ふ"
          },
          {
            "text": "り"
          },
          {
            "text": "替",
            "furigana": "か"
          },
          {
            "text": "え"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l16-4",
        "lessonId": "l16",
        "category": "Operaciones bancarias del cajero",
        "badge": "Operación",
        "japanese": "お引き出し",
        "reading": "おひきだし",
        "romaji": "Ohikidashi",
        "spanish": "Retiro / Sacar efectivo",
        "details": "Extracción de dinero en efectivo de la cuenta mediante tarjeta bancaria.",
        "segments": [
          {
            "text": "お"
          },
          {
            "text": "引",
            "furigana": "ひ"
          },
          {
            "text": "き"
          },
          {
            "text": "出",
            "furigana": "だ"
          },
          {
            "text": "し"
          }
        ],
        "targetKanji": [
          "出"
        ]
      },
      {
        "id": "ref-l16-5",
        "lessonId": "l16",
        "category": "Operaciones bancarias del cajero",
        "badge": "Operación",
        "japanese": "通帳記入",
        "reading": "つうちょうきにゅう",
        "romaji": "Tsuuchou kinyuu",
        "spanish": "Actualización de registros en la libreta",
        "details": "Inserción de la libreta física para imprimir los movimientos y saldo actualizados.",
        "segments": [
          {
            "text": "通帳",
            "furigana": "つうちょう"
          },
          {
            "text": "記入",
            "furigana": "きにゅう"
          }
        ],
        "targetKanji": [
          "入"
        ]
      },
      {
        "id": "ref-l16-6",
        "lessonId": "l16",
        "category": "Operaciones bancarias del cajero",
        "badge": "Operación",
        "japanese": "残高照会",
        "reading": "ざんだかしょうかい",
        "romaji": "Zandaka shoukai",
        "spanish": "Consulta del saldo",
        "details": "Comprobación del balance disponible en la cuenta bancaria sin retirar dinero.",
        "segments": [
          {
            "text": "残高",
            "furigana": "ざんだか"
          },
          {
            "text": "照会",
            "furigana": "しょうかい"
          }
        ],
        "targetKanji": [
          "会"
        ]
      },
      {
        "id": "ref-l16-7",
        "lessonId": "l16",
        "category": "Teclas, moneda y pantalla",
        "badge": "Seguridad",
        "japanese": "暗証番号",
        "reading": "あんしょうばんごう",
        "romaji": "Anshou bangou",
        "spanish": "Contraseña / Código secreto (PIN)",
        "details": "Código numérico secreto de 4 dígitos requerido para autorizar cualquier transacción bancaria.",
        "segments": [
          {
            "text": "暗証番号",
            "furigana": "あんしょうばんごう"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l16-8",
        "lessonId": "l16",
        "category": "Teclas, moneda y pantalla",
        "badge": "Control",
        "japanese": "確認",
        "reading": "かくにん",
        "romaji": "Kakunin",
        "spanish": "Confirmación / Botón de confirmar",
        "details": "Botón táctil en pantalla para dar conformidad y ejecutar la transacción.",
        "segments": [
          {
            "text": "確認",
            "furigana": "かくにん"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l16-9",
        "lessonId": "l16",
        "category": "Teclas, moneda y pantalla",
        "badge": "Control",
        "japanese": "訂正",
        "reading": "ていせい",
        "romaji": "Teisei",
        "spanish": "Corrección / Botón de corregir",
        "details": "Botón para borrar una cifra errónea introducida y volver a teclearla.",
        "segments": [
          {
            "text": "訂正",
            "furigana": "ていせい"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l16-10",
        "lessonId": "l16",
        "category": "Teclas, moneda y pantalla",
        "badge": "Importe",
        "japanese": "金額",
        "reading": "きんがく",
        "romaji": "Kingaku",
        "spanish": "Importe / Suma de dinero",
        "details": "Cantidad de dinero especificada para la operación.",
        "segments": [
          {
            "text": "金額",
            "furigana": "きんがく"
          }
        ],
        "targetKanji": [
          "金"
        ]
      },
      {
        "id": "ref-l16-11",
        "lessonId": "l16",
        "category": "Teclas, moneda y pantalla",
        "badge": "Moneda",
        "japanese": "円",
        "reading": "えん",
        "romaji": "En",
        "spanish": "Yenes (símbolo monetario)",
        "details": "Unidad de la moneda de Japón. Se pulsa en el teclado tras la cifra monetaria.",
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
        "id": "ref-l16-12",
        "lessonId": "l16",
        "category": "Teclas, moneda y pantalla",
        "badge": "Unidad",
        "japanese": "万",
        "reading": "まん",
        "romaji": "Man",
        "spanish": "Diez mil (10.000)",
        "details": "Tecla multiplicadora para cifras en decenas de miles de yenes (ej. 5 + 万 = 50.000 yenes).",
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
        "id": "ref-l16-13",
        "lessonId": "l16",
        "category": "Teclas, moneda y pantalla",
        "badge": "Unidad",
        "japanese": "千",
        "reading": "せん",
        "romaji": "Sen",
        "spanish": "Mil (1.000)",
        "details": "Tecla para cifras en millares de yenes (ej. 3 + 千 = 3.000 yenes).",
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
        "id": "ref-l16-14",
        "lessonId": "l16",
        "category": "Teclas, moneda y pantalla",
        "badge": "Soporte",
        "japanese": "キャッシュカード",
        "reading": "キャッシュカード",
        "romaji": "Kyasshu kaado",
        "spanish": "Tarjeta bancaria / Tarjeta de débito",
        "details": "Tarjeta emitida por la entidad bancaria para operar en cajeros automáticos.",
        "segments": [
          {
            "text": "キャッシュカード"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l16-15",
        "lessonId": "l16",
        "category": "Teclas, moneda y pantalla",
        "badge": "Soporte",
        "japanese": "通帳",
        "reading": "つうちょう",
        "romaji": "Tsuuchou",
        "spanish": "Libreta bancaria de ahorros",
        "details": "Libreta física con banda magnética donde se imprimen saldos y movimientos.",
        "segments": [
          {
            "text": "通帳",
            "furigana": "つうちょう"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l16-16",
        "lessonId": "l16",
        "category": "Teclas, moneda y pantalla",
        "badge": "Efectivo",
        "japanese": "硬貨",
        "reading": "こうか",
        "romaji": "Kouka",
        "spanish": "Monedas (dinero metálico)",
        "details": "Bandeja o ranura para ingresar o retirar monedas en el cajero.",
        "segments": [
          {
            "text": "硬貨",
            "furigana": "こうか"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l16-17",
        "lessonId": "l16",
        "category": "Teclas, moneda y pantalla",
        "badge": "Efectivo",
        "japanese": "紙幣",
        "reading": "しへい",
        "romaji": "Shihei",
        "spanish": "Billetes (papel moneda)",
        "details": "Compuerta automática para ingresar o recoger los billetes dispensados.",
        "segments": [
          {
            "text": "紙幣",
            "furigana": "しへい"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l16-18",
        "lessonId": "l16",
        "category": "Pasos para retirar efectivo (お引き出しの手順)",
        "badge": "Paso 1",
        "japanese": "お引き出しのボタンを押す",
        "reading": "おひきだしのボタンをおす",
        "romaji": "Ohikidashi no botan o osu",
        "spanish": "Paso 1: Presionar el botón de retiro (お引き出し)",
        "details": "En la pantalla inicial del cajero, pulsar la opción de retirar dinero.",
        "segments": [
          {
            "text": "お"
          },
          {
            "text": "引",
            "furigana": "ひ"
          },
          {
            "text": "き"
          },
          {
            "text": "出",
            "furigana": "だ"
          },
          {
            "text": "し"
          },
          {
            "text": "のボタンを"
          },
          {
            "text": "押",
            "furigana": "お"
          },
          {
            "text": "す"
          }
        ],
        "targetKanji": [
          "出"
        ]
      },
      {
        "id": "ref-l16-19",
        "lessonId": "l16",
        "category": "Pasos para retirar efectivo (お引き出しの手順)",
        "badge": "Paso 2",
        "japanese": "カードを入れる",
        "reading": "カードをいれる",
        "romaji": "Kaado o ireru",
        "spanish": "Paso 2: Insertar la tarjeta",
        "details": "Introducir la tarjeta bancaria en la ranura correspondiente.",
        "segments": [
          {
            "text": "カードを"
          },
          {
            "text": "入",
            "furigana": "い"
          },
          {
            "text": "れる"
          }
        ],
        "targetKanji": [
          "入"
        ]
      },
      {
        "id": "ref-l16-20",
        "lessonId": "l16",
        "category": "Pasos para retirar efectivo (お引き出しの手順)",
        "badge": "Paso 3",
        "japanese": "暗証番号を押す",
        "reading": "あんしょうばんごうをおす",
        "romaji": "Anshou bangou o osu",
        "spanish": "Paso 3: Digitar la contraseña (PIN)",
        "details": "Introducir el número secreto de 4 cifras en el teclado numérico de la pantalla.",
        "segments": [
          {
            "text": "暗証番号",
            "furigana": "あんしょうばんごう"
          },
          {
            "text": "を"
          },
          {
            "text": "押",
            "furigana": "お"
          },
          {
            "text": "す"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l16-21",
        "lessonId": "l16",
        "category": "Pasos para retirar efectivo (お引き出しの手順)",
        "badge": "Paso 4",
        "japanese": "金額を押して「円」を押す",
        "reading": "きんがくをおして「えん」をおす",
        "romaji": "Kingaku o oshite \"en\" o osu",
        "spanish": "Paso 4: Digitar la suma y presionar el botón 円",
        "details": "Marcar la cantidad deseada (por ejemplo 1 + 万) y presionar el botón «円».",
        "segments": [
          {
            "text": "金額",
            "furigana": "きんがく"
          },
          {
            "text": "を"
          },
          {
            "text": "押",
            "furigana": "お"
          },
          {
            "text": "して「"
          },
          {
            "text": "円",
            "furigana": "えん"
          },
          {
            "text": "」を"
          },
          {
            "text": "押",
            "furigana": "お"
          },
          {
            "text": "す"
          }
        ],
        "targetKanji": [
          "金",
          "円"
        ]
      },
      {
        "id": "ref-l16-22",
        "lessonId": "l16",
        "category": "Pasos para retirar efectivo (お引き出しの手順)",
        "badge": "Paso 5",
        "japanese": "金額を確認して「確認」を押す",
        "reading": "きんがくをかくにんして「かくにん」をおす",
        "romaji": "Kingaku o kakunin shite \"kakunin\" o osu",
        "spanish": "Paso 5: Confirmar la suma y presionar el botón 確認",
        "details": "Verificar en pantalla el importe y comisiones, y pulsar el botón «確認».",
        "segments": [
          {
            "text": "金額",
            "furigana": "きんがく"
          },
          {
            "text": "を"
          },
          {
            "text": "確認",
            "furigana": "かくにん"
          },
          {
            "text": "して「"
          },
          {
            "text": "確認",
            "furigana": "かくにん"
          },
          {
            "text": "」を"
          },
          {
            "text": "押",
            "furigana": "お"
          },
          {
            "text": "す"
          }
        ],
        "targetKanji": [
          "金"
        ]
      },
      {
        "id": "ref-l16-23",
        "lessonId": "l16",
        "category": "Pasos para retirar efectivo (お引き出しの手順)",
        "badge": "Paso 6",
        "japanese": "現金とカードを受け取る",
        "reading": "げんきんとカードをうけとる",
        "romaji": "Genkin to kaado o uketoru",
        "spanish": "Paso 6: Retirar el dinero y la tarjeta",
        "details": "Tomar los billetes dispensados de la compuerta y recoger la tarjeta bancaria y el comprobante.",
        "segments": [
          {
            "text": "現金",
            "furigana": "げんきん"
          },
          {
            "text": "とカードを"
          },
          {
            "text": "受",
            "furigana": "う"
          },
          {
            "text": "け"
          },
          {
            "text": "取",
            "furigana": "と"
          },
          {
            "text": "る"
          }
        ],
        "targetKanji": [
          "金"
        ]
      }
    ]
  },
  {
    "lessonId": "l17",
    "lessonNumber": "Lección 17",
    "topic": "Partes del cuerpo y enfermedades",
    "topicJapanese": "体・病気",
    "topicDescription": "Anatomía del cuerpo humano, síntomas médicos comunes, sensaciones físicas, dolencias y la consulta médica habitual (どう しましたか).",
    "categories": [
      "Partes del cuerpo (体)",
      "Síntomas y sensaciones físicas (症状)",
      "Enfermedades y lesiones (病気・けが)"
    ],
    "items": [
      {
        "id": "ref-l17-1",
        "lessonId": "l17",
        "category": "Partes del cuerpo (体)",
        "badge": "Cabeza",
        "japanese": "あたま",
        "reading": "あたま",
        "romaji": "Atama",
        "spanish": "Cabeza (頭)",
        "segments": [
          {
            "text": "あたま"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l17-2",
        "lessonId": "l17",
        "category": "Partes del cuerpo (体)",
        "badge": "Cabeza",
        "japanese": "かみ",
        "reading": "かみ",
        "romaji": "Kami",
        "spanish": "Pelo / cabello (髪)",
        "segments": [
          {
            "text": "かみ"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l17-3",
        "lessonId": "l17",
        "category": "Partes del cuerpo (体)",
        "badge": "Rostro",
        "japanese": "かお",
        "reading": "かお",
        "romaji": "Kao",
        "spanish": "Cara / rostro (顔)",
        "segments": [
          {
            "text": "かお"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l17-4",
        "lessonId": "l17",
        "category": "Partes del cuerpo (体)",
        "badge": "Rostro",
        "japanese": "め",
        "reading": "め",
        "romaji": "Me",
        "spanish": "Ojo (目)",
        "segments": [
          {
            "text": "め"
          }
        ],
        "targetKanji": [
          "目"
        ]
      },
      {
        "id": "ref-l17-5",
        "lessonId": "l17",
        "category": "Partes del cuerpo (体)",
        "badge": "Rostro",
        "japanese": "はな",
        "reading": "はな",
        "romaji": "Hana",
        "spanish": "Nariz (鼻)",
        "segments": [
          {
            "text": "はな"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l17-6",
        "lessonId": "l17",
        "category": "Partes del cuerpo (体)",
        "badge": "Rostro",
        "japanese": "くち",
        "reading": "くち",
        "romaji": "Kuchi",
        "spanish": "Boca (口)",
        "segments": [
          {
            "text": "くち"
          }
        ],
        "targetKanji": [
          "口"
        ]
      },
      {
        "id": "ref-l17-7",
        "lessonId": "l17",
        "category": "Partes del cuerpo (体)",
        "badge": "Cabeza",
        "japanese": "みみ",
        "reading": "みみ",
        "romaji": "Mimi",
        "spanish": "Oreja / oído (耳)",
        "segments": [
          {
            "text": "みみ"
          }
        ],
        "targetKanji": [
          "耳"
        ]
      },
      {
        "id": "ref-l17-8",
        "lessonId": "l17",
        "category": "Partes del cuerpo (体)",
        "badge": "Cuello",
        "japanese": "のど",
        "reading": "のど",
        "romaji": "Nodo",
        "spanish": "Garganta",
        "segments": [
          {
            "text": "のど"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l17-9",
        "lessonId": "l17",
        "category": "Partes del cuerpo (体)",
        "badge": "Rostro",
        "japanese": "あご",
        "reading": "あご",
        "romaji": "Ago",
        "spanish": "Barbilla / mandíbula",
        "segments": [
          {
            "text": "あご"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l17-10",
        "lessonId": "l17",
        "category": "Partes del cuerpo (体)",
        "badge": "Cuello",
        "japanese": "くび",
        "reading": "くび",
        "romaji": "Kubi",
        "spanish": "Cuello (首)",
        "segments": [
          {
            "text": "くび"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l17-11",
        "lessonId": "l17",
        "category": "Partes del cuerpo (体)",
        "badge": "Torso",
        "japanese": "かた",
        "reading": "かた",
        "romaji": "Kata",
        "spanish": "Hombro (肩)",
        "segments": [
          {
            "text": "かた"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l17-12",
        "lessonId": "l17",
        "category": "Partes del cuerpo (体)",
        "badge": "Torso",
        "japanese": "むね",
        "reading": "むね",
        "romaji": "Mune",
        "spanish": "Pecho (胸)",
        "segments": [
          {
            "text": "むね"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l17-13",
        "lessonId": "l17",
        "category": "Partes del cuerpo (体)",
        "badge": "Torso",
        "japanese": "せなか",
        "reading": "せなか",
        "romaji": "Senaka",
        "spanish": "Espalda (背中)",
        "segments": [
          {
            "text": "せなか"
          }
        ],
        "targetKanji": [
          "中"
        ]
      },
      {
        "id": "ref-l17-14",
        "lessonId": "l17",
        "category": "Partes del cuerpo (体)",
        "badge": "Extremidades sup.",
        "japanese": "うで",
        "reading": "うで",
        "romaji": "Ude",
        "spanish": "Brazo (腕)",
        "segments": [
          {
            "text": "うで"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l17-15",
        "lessonId": "l17",
        "category": "Partes del cuerpo (体)",
        "badge": "Extremidades sup.",
        "japanese": "ひじ",
        "reading": "ひじ",
        "romaji": "Hiji",
        "spanish": "Codo (肘)",
        "segments": [
          {
            "text": "ひじ"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l17-16",
        "lessonId": "l17",
        "category": "Partes del cuerpo (体)",
        "badge": "Extremidades sup.",
        "japanese": "て",
        "reading": "て",
        "romaji": "Te",
        "spanish": "Mano (手)",
        "segments": [
          {
            "text": "て"
          }
        ],
        "targetKanji": [
          "手"
        ]
      },
      {
        "id": "ref-l17-17",
        "lessonId": "l17",
        "category": "Partes del cuerpo (体)",
        "badge": "Extremidades sup.",
        "japanese": "ゆび",
        "reading": "ゆび",
        "romaji": "Yubi",
        "spanish": "Dedo (指)",
        "segments": [
          {
            "text": "ゆび"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l17-18",
        "lessonId": "l17",
        "category": "Partes del cuerpo (体)",
        "badge": "Extremidades sup.",
        "japanese": "つめ",
        "reading": "つめ",
        "romaji": "Tsume",
        "spanish": "Uña (爪)",
        "segments": [
          {
            "text": "つめ"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l17-19",
        "lessonId": "l17",
        "category": "Partes del cuerpo (体)",
        "badge": "Torso",
        "japanese": "おなか",
        "reading": "おなか",
        "romaji": "Onaka",
        "spanish": "Estómago / vientre / barriga (お腹)",
        "segments": [
          {
            "text": "おなか"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l17-20",
        "lessonId": "l17",
        "category": "Partes del cuerpo (体)",
        "badge": "Torso",
        "japanese": "こし",
        "reading": "こし",
        "romaji": "Koshi",
        "spanish": "Cintura / lumbares / cadera (腰)",
        "segments": [
          {
            "text": "こし"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l17-21",
        "lessonId": "l17",
        "category": "Partes del cuerpo (体)",
        "badge": "Torso",
        "japanese": "しり",
        "reading": "しり",
        "romaji": "Shiri",
        "spanish": "Nalgas / trasero (尻)",
        "segments": [
          {
            "text": "しり"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l17-22",
        "lessonId": "l17",
        "category": "Partes del cuerpo (体)",
        "badge": "Extremidades inf.",
        "japanese": "ひざ",
        "reading": "ひざ",
        "romaji": "Hiza",
        "spanish": "Rodilla (膝)",
        "segments": [
          {
            "text": "ひざ"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l17-23",
        "lessonId": "l17",
        "category": "Partes del cuerpo (体)",
        "badge": "Extremidades inf.",
        "japanese": "あし",
        "reading": "あし",
        "romaji": "Ashi",
        "spanish": "Pierna / pie (足・脚)",
        "segments": [
          {
            "text": "あし"
          }
        ],
        "targetKanji": [
          "足"
        ]
      },
      {
        "id": "ref-l17-24",
        "lessonId": "l17",
        "category": "Partes del cuerpo (体)",
        "badge": "Anatomía",
        "japanese": "ほね",
        "reading": "ほね",
        "romaji": "Hone",
        "spanish": "Hueso (骨)",
        "segments": [
          {
            "text": "ほね"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l17-25",
        "lessonId": "l17",
        "category": "Síntomas y sensaciones físicas (症状)",
        "badge": "Pregunta médica",
        "japanese": "どう しましたか。",
        "reading": "どう しましたか。",
        "romaji": "Dou shimashita ka.",
        "spanish": "¿Qué le pasa? / ¿Qué problema tiene?",
        "details": "Pregunta protocolaria con la que el médico abre la consulta.",
        "segments": [
          {
            "text": "どう しましたか。"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l17-26",
        "lessonId": "l17",
        "category": "Síntomas y sensaciones físicas (症状)",
        "badge": "Dolor",
        "japanese": "頭が 痛い",
        "reading": "あたまが いたい",
        "romaji": "Atama ga itai",
        "spanish": "Tener dolor de cabeza",
        "details": "Cefalea o dolor craneal.",
        "segments": [
          {
            "text": "頭",
            "furigana": "あたま"
          },
          {
            "text": "が "
          },
          {
            "text": "痛",
            "furigana": "い"
          },
          {
            "text": "い"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l17-27",
        "lessonId": "l17",
        "category": "Síntomas y sensaciones físicas (症状)",
        "badge": "Dolor",
        "japanese": "おなかが 痛い",
        "reading": "おなかが いたい",
        "romaji": "Onaka ga itai",
        "spanish": "Tener dolor de estómago / vientre",
        "details": "Dolor abdominal o digestivo.",
        "segments": [
          {
            "text": "おなかが "
          },
          {
            "text": "痛",
            "furigana": "い"
          },
          {
            "text": "い"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l17-28",
        "lessonId": "l17",
        "category": "Síntomas y sensaciones físicas (症状)",
        "badge": "Dolor",
        "japanese": "歯が 痛い",
        "reading": "はが いたい",
        "romaji": "Ha ga itai",
        "spanish": "Tener dolor de dientes / muelas",
        "details": "Dolor dental o de encías.",
        "segments": [
          {
            "text": "歯",
            "furigana": "は"
          },
          {
            "text": "が "
          },
          {
            "text": "痛",
            "furigana": "い"
          },
          {
            "text": "い"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l17-29",
        "lessonId": "l17",
        "category": "Síntomas y sensaciones físicas (症状)",
        "badge": "Fiebre",
        "japanese": "熱が あります",
        "reading": "ねつが あります",
        "romaji": "Netsu ga arimasu",
        "spanish": "Tener fiebre",
        "details": "Temperatura corporal elevada.",
        "segments": [
          {
            "text": "熱",
            "furigana": "ねつ"
          },
          {
            "text": "が あります"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l17-30",
        "lessonId": "l17",
        "category": "Síntomas y sensaciones físicas (症状)",
        "badge": "Respiratorio",
        "japanese": "せきが 出ます",
        "reading": "せきが でます",
        "romaji": "Seki ga demasu",
        "spanish": "Tener tos / toser",
        "details": "Tos seca o con flema.",
        "segments": [
          {
            "text": "せきが "
          },
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
        "id": "ref-l17-31",
        "lessonId": "l17",
        "category": "Síntomas y sensaciones físicas (症状)",
        "badge": "Respiratorio",
        "japanese": "鼻水が 出ます",
        "reading": "はなみずが でます",
        "romaji": "Hanamizu ga demasu",
        "spanish": "Tener secreción nasal / mucosidad",
        "details": "Goteo nasal continuo por resfriado o alergia.",
        "segments": [
          {
            "text": "鼻水",
            "furigana": "はなみず"
          },
          {
            "text": "が "
          },
          {
            "text": "出",
            "furigana": "で"
          },
          {
            "text": "ます"
          }
        ],
        "targetKanji": [
          "水",
          "出"
        ]
      },
      {
        "id": "ref-l17-32",
        "lessonId": "l17",
        "category": "Síntomas y sensaciones físicas (症状)",
        "badge": "Hemorragia",
        "japanese": "血が 出ます",
        "reading": "ちが でます",
        "romaji": "Chi ga demasu",
        "spanish": "Sangrar / salir sangre",
        "details": "Hemorragia por herida o lesión.",
        "segments": [
          {
            "text": "血",
            "furigana": "ち"
          },
          {
            "text": "が "
          },
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
        "id": "ref-l17-33",
        "lessonId": "l17",
        "category": "Síntomas y sensaciones físicas (症状)",
        "badge": "Digestivo",
        "japanese": "吐き気が します",
        "reading": "はきけが します",
        "romaji": "Hakike ga shimasu",
        "spanish": "Tener náuseas / ganas de vomitar",
        "details": "Sensación de arcada o malestar estomacal.",
        "segments": [
          {
            "text": "吐",
            "furigana": "は"
          },
          {
            "text": "き"
          },
          {
            "text": "気",
            "furigana": "け"
          },
          {
            "text": "が します"
          }
        ],
        "targetKanji": [
          "気"
        ]
      },
      {
        "id": "ref-l17-34",
        "lessonId": "l17",
        "category": "Síntomas y sensaciones físicas (症状)",
        "badge": "General",
        "japanese": "寒気が します",
        "reading": "さむけが します",
        "romaji": "Samuke ga shimasu",
        "spanish": "Sentir escalofríos",
        "details": "Temblores corporales por subida febril.",
        "segments": [
          {
            "text": "寒気",
            "furigana": "さむけ"
          },
          {
            "text": "が します"
          }
        ],
        "targetKanji": [
          "気"
        ]
      },
      {
        "id": "ref-l17-35",
        "lessonId": "l17",
        "category": "Síntomas y sensaciones físicas (症状)",
        "badge": "General",
        "japanese": "めまいが します",
        "reading": "めまいが します",
        "romaji": "Memai ga shimasu",
        "spanish": "Estar mareado / sentir vértigo",
        "details": "Sensación de inestabilidad o desvanecimiento.",
        "segments": [
          {
            "text": "めまいが します"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l17-36",
        "lessonId": "l17",
        "category": "Síntomas y sensaciones físicas (症状)",
        "badge": "Digestivo",
        "japanese": "下痢を します",
        "reading": "げりを します",
        "romaji": "Geri o shimasu",
        "spanish": "Tener diarrea",
        "details": "Trastorno intestinal con evacuaciones frecuentes y líquidas.",
        "segments": [
          {
            "text": "下痢",
            "furigana": "げり"
          },
          {
            "text": "を します"
          }
        ],
        "targetKanji": [
          "下"
        ]
      },
      {
        "id": "ref-l17-37",
        "lessonId": "l17",
        "category": "Síntomas y sensaciones físicas (症状)",
        "badge": "Digestivo",
        "japanese": "便秘を します",
        "reading": "べんぴを します",
        "romaji": "Benpi o shimasu",
        "spanish": "Estar estreñido",
        "details": "Dificultad o retención en la evacuación digestiva.",
        "segments": [
          {
            "text": "便秘",
            "furigana": "べんぴ"
          },
          {
            "text": "を します"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l17-38",
        "lessonId": "l17",
        "category": "Síntomas y sensaciones físicas (症状)",
        "badge": "Lesión",
        "japanese": "けがを します",
        "reading": "けがを します",
        "romaji": "Kega o shimasu",
        "spanish": "Tener una herida / lesionarse",
        "details": "Lesión, golpe o corte accidental en el cuerpo.",
        "segments": [
          {
            "text": "けがを します"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l17-39",
        "lessonId": "l17",
        "category": "Síntomas y sensaciones físicas (症状)",
        "badge": "Lesión",
        "japanese": "やけどを します",
        "reading": "やけどを します",
        "romaji": "Yakedo o shimasu",
        "spanish": "Quemarse / sufrir una quemadura",
        "details": "Daño en los tejidos cutáneos provocado por fuego, calor o líquidos calientes.",
        "segments": [
          {
            "text": "やけどを します"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l17-40",
        "lessonId": "l17",
        "category": "Síntomas y sensaciones físicas (症状)",
        "badge": "Digestivo",
        "japanese": "食欲が ありません",
        "reading": "しょくよくが ありません",
        "romaji": "Shokuyoku ga arimasen",
        "spanish": "No tener apetito",
        "details": "Falta de ganas de comer asociada a enfermedad.",
        "segments": [
          {
            "text": "食欲",
            "furigana": "しょくよく"
          },
          {
            "text": "が ありません"
          }
        ],
        "targetKanji": [
          "食"
        ]
      },
      {
        "id": "ref-l17-41",
        "lessonId": "l17",
        "category": "Síntomas y sensaciones físicas (症状)",
        "badge": "Muscular",
        "japanese": "肩が こります",
        "reading": "かたが こります",
        "romaji": "Kata ga korimasu",
        "spanish": "Tener los hombros tensos / rigidez de hombros",
        "details": "Tensión muscular característica conocida en Japón como Katakori.",
        "segments": [
          {
            "text": "肩",
            "furigana": "かた"
          },
          {
            "text": "が こります"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l17-42",
        "lessonId": "l17",
        "category": "Síntomas y sensaciones físicas (症状)",
        "badge": "General",
        "japanese": "体が だるい",
        "reading": "からだが だるい",
        "romaji": "Karada ga darui",
        "spanish": "Sentirse cansado / pesado / desganado",
        "details": "Astenia, fatiga y debilidad física generalizada.",
        "segments": [
          {
            "text": "体",
            "furigana": "からだ"
          },
          {
            "text": "が だるい"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l17-43",
        "lessonId": "l17",
        "category": "Síntomas y sensaciones físicas (症状)",
        "badge": "Dermatológico",
        "japanese": "かゆい",
        "reading": "かゆい",
        "romaji": "Kayui",
        "spanish": "Sentir picor / tener comezón",
        "details": "Sensación cutánea incómoda que provoca ganas de rascarse.",
        "segments": [
          {
            "text": "かゆい"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l17-44",
        "lessonId": "l17",
        "category": "Enfermedades y lesiones (病気・けが)",
        "badge": "Común",
        "japanese": "かぜ",
        "reading": "かぜ",
        "romaji": "Kaze",
        "spanish": "Resfriado / catarro (風邪)",
        "details": "Cuadro viral leve de garganta, nariz y tos.",
        "segments": [
          {
            "text": "かぜ"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l17-45",
        "lessonId": "l17",
        "category": "Enfermedades y lesiones (病気・けが)",
        "badge": "Infección",
        "japanese": "インフルエンザ",
        "reading": "インフルエンザ",
        "romaji": "Infuruenza",
        "spanish": "Gripe, influenza",
        "details": "Infección vírica estacional con fiebre elevada, dolores articulares y postración.",
        "segments": [
          {
            "text": "インフルエンザ"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l17-46",
        "lessonId": "l17",
        "category": "Enfermedades y lesiones (病気・けが)",
        "badge": "Cirugía",
        "japanese": "盲腸",
        "reading": "もうちょう",
        "romaji": "Mouchou",
        "spanish": "Apendicitis",
        "details": "Inflamación aguda del apéndice cecal.",
        "segments": [
          {
            "text": "盲腸",
            "furigana": "もうちょう"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l17-47",
        "lessonId": "l17",
        "category": "Enfermedades y lesiones (病気・けが)",
        "badge": "Muscular",
        "japanese": "ぎっくり腰",
        "reading": "ぎっくりごし",
        "romaji": "Gikkuri-goshi",
        "spanish": "Lumbago agudo / tirón lumbar repentino",
        "details": "Dolor punzante e inmovilizador en la zona lumbar baja al levantar peso o flexionarse.",
        "segments": [
          {
            "text": "ぎっくり"
          },
          {
            "text": "腰",
            "furigana": "ごし"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l17-48",
        "lessonId": "l17",
        "category": "Enfermedades y lesiones (病気・けが)",
        "badge": "Lesión",
        "japanese": "ねんざ",
        "reading": "ねんざ",
        "romaji": "Nenza",
        "spanish": "Esguince / torcedura (捻挫)",
        "details": "Distensión violenta o desgarro leve de los ligamentos articulares.",
        "segments": [
          {
            "text": "ねんざ"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l17-49",
        "lessonId": "l17",
        "category": "Enfermedades y lesiones (病気・けが)",
        "badge": "Lesión",
        "japanese": "骨折",
        "reading": "こっせつ",
        "romaji": "Kossetsu",
        "spanish": "Fractura (rotura de hueso)",
        "details": "Quiebra total o parcial de un hueso.",
        "segments": [
          {
            "text": "骨折",
            "furigana": "こっせつ"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l17-50",
        "lessonId": "l17",
        "category": "Enfermedades y lesiones (病気・けが)",
        "badge": "Malestar",
        "japanese": "二日酔い",
        "reading": "ふつかよい",
        "romaji": "Futsukayoi",
        "spanish": "Resaca",
        "details": "Malestar físico al día siguiente tras haber ingerido bebidas alcohólicas en exceso.",
        "segments": [
          {
            "text": "二日酔い",
            "furigana": "ふつかよい"
          }
        ],
        "targetKanji": [
          "二",
          "日"
        ]
      }
    ]
  },
  {
    "lessonId": "l18",
    "lessonNumber": "Lección 18",
    "topic": "Movimientos y acciones corporales",
    "topicJapanese": "動き",
    "topicDescription": "Verbos ilustrados de movimiento físico, deportes, dinámica corporal, gimnasia y desplazamientos motrices del cuerpo humano.",
    "categories": [
      "Desplazamientos y saltos",
      "Acciones acuáticas y gimnasia",
      "Acciones con manos y pies",
      "Flexibilidad y posturas corporales"
    ],
    "items": [
      {
        "id": "ref-l18-1",
        "lessonId": "l18",
        "category": "Desplazamientos y saltos",
        "badge": "Vuelo",
        "japanese": "飛ぶ",
        "reading": "とぶ",
        "romaji": "Tobu",
        "spanish": "Volar",
        "details": "Planear o volar por los aires en ala delta o avión.",
        "segments": [
          {
            "text": "飛",
            "furigana": "と"
          },
          {
            "text": "ぶ"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l18-2",
        "lessonId": "l18",
        "category": "Desplazamientos y saltos",
        "badge": "Salto",
        "japanese": "跳ぶ",
        "reading": "とぶ",
        "romaji": "Tobu",
        "spanish": "Saltar / brincar",
        "details": "Impulsarse con los pies para saltar un foso u obstáculo.",
        "segments": [
          {
            "text": "跳",
            "furigana": "と"
          },
          {
            "text": "ぶ"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l18-3",
        "lessonId": "l18",
        "category": "Desplazamientos y saltos",
        "badge": "Escalada",
        "japanese": "登る",
        "reading": "のぼる",
        "romaji": "Noboru",
        "spanish": "Subir, escalar",
        "details": "Trepar por una pared rocosa o ladera montañosa.",
        "segments": [
          {
            "text": "登",
            "furigana": "のぼ"
          },
          {
            "text": "る"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l18-4",
        "lessonId": "l18",
        "category": "Desplazamientos y saltos",
        "badge": "Carrera",
        "japanese": "走る",
        "reading": "はしる",
        "romaji": "Hashiru",
        "spanish": "Correr",
        "details": "Desplazarse a paso veloz corriendo a pie.",
        "segments": [
          {
            "text": "走",
            "furigana": "はし"
          },
          {
            "text": "る"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l18-5",
        "lessonId": "l18",
        "category": "Acciones acuáticas y gimnasia",
        "badge": "Natación",
        "japanese": "泳ぐ",
        "reading": "およぐ",
        "romaji": "Oyogu",
        "spanish": "Nadar",
        "details": "Desplazarse en el agua moviendo brazos y piernas.",
        "segments": [
          {
            "text": "泳",
            "furigana": "およ"
          },
          {
            "text": "ぐ"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l18-6",
        "lessonId": "l18",
        "category": "Acciones acuáticas y gimnasia",
        "badge": "Buceo",
        "japanese": "もぐる",
        "reading": "もぐる",
        "romaji": "Moguru",
        "spanish": "Bucear / sumergirse",
        "details": "Sumergirse bajo la superficie acuática.",
        "segments": [
          {
            "text": "もぐる"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l18-7",
        "lessonId": "l18",
        "category": "Acciones acuáticas y gimnasia",
        "badge": "Zambullida",
        "japanese": "飛び込む",
        "reading": "とびこむ",
        "romaji": "Tobikomu",
        "spanish": "Zambullirse / tirarse al agua",
        "details": "Lanzarse de cabeza o con impulso a la piscina desde el borde.",
        "segments": [
          {
            "text": "飛",
            "furigana": "と"
          },
          {
            "text": "び"
          },
          {
            "text": "込",
            "furigana": "こ"
          },
          {
            "text": "む"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l18-8",
        "lessonId": "l18",
        "category": "Acciones acuáticas y gimnasia",
        "badge": "Equilibrio",
        "japanese": "逆立ちする",
        "reading": "さかだちする",
        "romaji": "Sakadachi suru",
        "spanish": "Hacer el pino, pararse sobre las manos",
        "details": "Postura gimnástica de inversión apoyando el peso del cuerpo sobre las manos.",
        "segments": [
          {
            "text": "逆立",
            "furigana": "さかだ"
          },
          {
            "text": "ちする"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l18-9",
        "lessonId": "l18",
        "category": "Desplazamientos y saltos",
        "badge": "Reptar",
        "japanese": "はう",
        "reading": "はう",
        "romaji": "Hau",
        "spanish": "Gatear / arrastrarse (這う)",
        "details": "Avanzar a cuatro patas con manos y rodillas.",
        "segments": [
          {
            "text": "はう"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l18-10",
        "lessonId": "l18",
        "category": "Acciones con manos y pies",
        "badge": "Patada",
        "japanese": "ける",
        "reading": "ける",
        "romaji": "Keru",
        "spanish": "Dar patadas, patear (蹴る)",
        "details": "Impulsar o golpear una pelota con el pie.",
        "segments": [
          {
            "text": "ける"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l18-11",
        "lessonId": "l18",
        "category": "Acciones con manos y pies",
        "badge": "Gesto",
        "japanese": "振る",
        "reading": "ふる",
        "romaji": "Furu",
        "spanish": "Agitar / ondear la mano o un pañuelo",
        "details": "Mover un objeto o la mano repetidamente en el aire para saludar o despedir.",
        "segments": [
          {
            "text": "振",
            "furigana": "ふ"
          },
          {
            "text": "る"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l18-12",
        "lessonId": "l18",
        "category": "Acciones con manos y pies",
        "badge": "Fuerza",
        "japanese": "持ち上げる",
        "reading": "もちあげる",
        "romaji": "Mochiageru",
        "spanish": "Levantar / alzar en peso",
        "details": "Elevar un objeto pesado del suelo usando la fuerza de los brazos.",
        "segments": [
          {
            "text": "持",
            "furigana": "も"
          },
          {
            "text": "ち"
          },
          {
            "text": "上",
            "furigana": "あ"
          },
          {
            "text": "げる"
          }
        ],
        "targetKanji": [
          "上"
        ]
      },
      {
        "id": "ref-l18-13",
        "lessonId": "l18",
        "category": "Acciones con manos y pies",
        "badge": "Lanzamiento",
        "japanese": "投げる",
        "reading": "なげる",
        "romaji": "Nageru",
        "spanish": "Lanzar / tirar",
        "details": "Arrojar una pelota con fuerza hacia un objetivo.",
        "segments": [
          {
            "text": "投",
            "furigana": "な"
          },
          {
            "text": "げる"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l18-14",
        "lessonId": "l18",
        "category": "Acciones con manos y pies",
        "badge": "Impacto",
        "japanese": "たたく",
        "reading": "たたく",
        "romaji": "Tataku",
        "spanish": "Golpear / dar palmaditas (叩く)",
        "details": "Propinar toques, palmadas o golpes rítmicos.",
        "segments": [
          {
            "text": "たたく"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l18-15",
        "lessonId": "l18",
        "category": "Acciones con manos y pies",
        "badge": "Tracción",
        "japanese": "引く",
        "reading": "ひく",
        "romaji": "Hiku",
        "spanish": "Tirar / jalar",
        "details": "Atraer con fuerza hacia sí (ej. tirar de la cuerda en un juego de tracción).",
        "segments": [
          {
            "text": "引",
            "furigana": "ひ"
          },
          {
            "text": "く"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l18-16",
        "lessonId": "l18",
        "category": "Acciones con manos y pies",
        "badge": "Empuje",
        "japanese": "押す",
        "reading": "おす",
        "romaji": "Osu",
        "spanish": "Empujar, presionar",
        "details": "Ejercer fuerza hacia adelante para mover un cochecito o presionar un interruptor.",
        "segments": [
          {
            "text": "押",
            "furigana": "お"
          },
          {
            "text": "す"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l18-17",
        "lessonId": "l18",
        "category": "Flexibilidad y posturas corporales",
        "badge": "Flexión",
        "japanese": "曲げる",
        "reading": "まげる",
        "romaji": "Mageru",
        "spanish": "Doblar, flexionar",
        "details": "Flexionar una articulación como la rodilla o el codo.",
        "segments": [
          {
            "text": "曲",
            "furigana": "ま"
          },
          {
            "text": "げる"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l18-18",
        "lessonId": "l18",
        "category": "Flexibilidad y posturas corporales",
        "badge": "Extensión",
        "japanese": "伸ばす",
        "reading": "のばす",
        "romaji": "Nobasu",
        "spanish": "Extender / estirar",
        "details": "Estirar en línea recta una pierna, brazo o la espalda.",
        "segments": [
          {
            "text": "伸",
            "furigana": "の"
          },
          {
            "text": "ばす"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l18-19",
        "lessonId": "l18",
        "category": "Flexibilidad y posturas corporales",
        "badge": "Caída",
        "japanese": "転ぶ",
        "reading": "ころぶ",
        "romaji": "Korobu",
        "spanish": "Caerse / tropezar",
        "details": "Perder pie y caer al suelo de bruces.",
        "segments": [
          {
            "text": "転",
            "furigana": "ころ"
          },
          {
            "text": "ぶ"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l18-20",
        "lessonId": "l18",
        "category": "Flexibilidad y posturas corporales",
        "badge": "Giro",
        "japanese": "振り向く",
        "reading": "ふりむく",
        "romaji": "Furimuku",
        "spanish": "Mirar atrás / volverse",
        "details": "Girar la cabeza o el cuerpo hacia la espalda para mirar a alguien.",
        "segments": [
          {
            "text": "振",
            "furigana": "ふ"
          },
          {
            "text": "り"
          },
          {
            "text": "向",
            "furigana": "む"
          },
          {
            "text": "く"
          }
        ],
        "targetKanji": []
      }
    ]
  },
  {
    "lessonId": "l19",
    "lessonNumber": "Lección 19",
    "topic": "Cultura tradicional y ocio",
    "topicJapanese": "伝統文化・娯楽",
    "topicDescription": "Artes tradicionales japonesas del camino (道), disciplinas escénicas consagradas (kabuki, no, bunraku), artes marciales (武道), humor clásico (manzai, rakugo), juegos de mesa tradicionales y ocio popular moderno.",
    "categories": [
      "Artes tradicionales del camino (道)",
      "Artes escénicas clásicas (伝統芸能)",
      "Artes marciales tradicionales (武道)",
      "Humor clásico y juegos de ingenio (演芸・ボードゲーム)",
      "Ocio popular y festividades (娯楽・祭り)"
    ],
    "items": [
      {
        "id": "ref-l19-1",
        "lessonId": "l19",
        "category": "Artes tradicionales del camino (道)",
        "badge": "Arte del té",
        "japanese": "茶道（お茶）",
        "reading": "さどう（おちゃ）",
        "romaji": "Sadou (Ocha)",
        "spanish": "Ceremonia del té (Chadō / Sadō)",
        "details": "Ritual estético y de hospitalidad zen para preparar té verde matcha.",
        "segments": [
          {
            "text": "茶道",
            "furigana": "さどう"
          },
          {
            "text": "（"
          },
          {
            "text": "お"
          },
          {
            "text": "茶",
            "furigana": "ちゃ"
          },
          {
            "text": "）"
          }
        ],
        "targetKanji": [
          "茶"
        ]
      },
      {
        "id": "ref-l19-2",
        "lessonId": "l19",
        "category": "Artes tradicionales del camino (道)",
        "badge": "Arreglo floral",
        "japanese": "華道（生け花）",
        "reading": "かどう（いけばな）",
        "romaji": "Kadou (Ikebana)",
        "spanish": "Arreglo floral (Kadō / Ikebana)",
        "details": "Disciplina estética de disponer flores, ramas y tallos en armonía espacial.",
        "segments": [
          {
            "text": "華道",
            "furigana": "かどう"
          },
          {
            "text": "（"
          },
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
          },
          {
            "text": "）"
          }
        ],
        "targetKanji": [
          "生",
          "花"
        ]
      },
      {
        "id": "ref-l19-3",
        "lessonId": "l19",
        "category": "Artes tradicionales del camino (道)",
        "badge": "Caligrafía",
        "japanese": "書道",
        "reading": "しょどう",
        "romaji": "Shodou",
        "spanish": "Caligrafía (Shodō)",
        "details": "Arte del trazo y la pincelada japonesa con tinta sumi y papel washi.",
        "segments": [
          {
            "text": "書道",
            "furigana": "しょどう"
          }
        ],
        "targetKanji": [
          "書"
        ]
      },
      {
        "id": "ref-l19-4",
        "lessonId": "l19",
        "category": "Artes escénicas clásicas (伝統芸能)",
        "badge": "Teatro",
        "japanese": "歌舞伎",
        "reading": "かぶき",
        "romaji": "Kabuki",
        "spanish": "Teatro kabuki",
        "details": "Teatro clásico de la época Edo con actores masculinos (onnagata), maquillaje dramático y escenarios giratorios.",
        "segments": [
          {
            "text": "歌舞伎",
            "furigana": "かぶき"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l19-5",
        "lessonId": "l19",
        "category": "Artes escénicas clásicas (伝統芸能)",
        "badge": "Teatro",
        "japanese": "能",
        "reading": "のう",
        "romaji": "Noh",
        "spanish": "Teatro no (Nō)",
        "details": "Drama lírico musical solemne que se remonta al siglo XIV, caracterizado por el uso de máscaras de madera labrada.",
        "segments": [
          {
            "text": "能",
            "furigana": "のう"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l19-6",
        "lessonId": "l19",
        "category": "Artes escénicas clásicas (伝統芸能)",
        "badge": "Marionetas",
        "japanese": "文楽",
        "reading": "ぶんらく",
        "romaji": "Bunraku",
        "spanish": "Bunraku (teatro de marionetas)",
        "details": "Teatro de marionetas a gran escala manipuladas por tres titiriteros acompañados de recitado jōruri y laúd shamisen.",
        "segments": [
          {
            "text": "文楽",
            "furigana": "ぶんらく"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l19-7",
        "lessonId": "l19",
        "category": "Artes marciales tradicionales (武道)",
        "badge": "Lucha sagrada",
        "japanese": "相撲",
        "reading": "すもう",
        "romaji": "Sumou",
        "spanish": "Sumo",
        "details": "Milenaria lucha tradicional japonesa y deporte oficial que conserva rituales de purificación sintoísta.",
        "segments": [
          {
            "text": "相撲",
            "furigana": "すもう"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l19-8",
        "lessonId": "l19",
        "category": "Artes marciales tradicionales (武道)",
        "badge": "Arte marcial",
        "japanese": "柔道",
        "reading": "じゅうどう",
        "romaji": "Juudou",
        "spanish": "Yudo (Judo)",
        "details": "Disciplina olímpica fundada sobre el principio de suavidad y proyección corporal (el \"camino de la flexibilidad\").",
        "segments": [
          {
            "text": "柔道",
            "furigana": "じゅうどう"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l19-9",
        "lessonId": "l19",
        "category": "Artes marciales tradicionales (武道)",
        "badge": "Arte marcial",
        "japanese": "剣道",
        "reading": "けんどう",
        "romaji": "Kendou",
        "spanish": "Kendo (esgrima japonesa)",
        "details": "El \"camino de la espada\", practicado con armadura bogu y espada de tiras de bambú shinai.",
        "segments": [
          {
            "text": "剣道",
            "furigana": "けんどう"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l19-10",
        "lessonId": "l19",
        "category": "Artes marciales tradicionales (武道)",
        "badge": "Arte marcial",
        "japanese": "空手",
        "reading": "からて",
        "romaji": "Karate",
        "spanish": "Karate",
        "details": "Arte marcial de defensa personal (\"mano vacía\") desarrollado en Okinawa a base de bloqueos y golpes contundentes.",
        "segments": [
          {
            "text": "空手",
            "furigana": "からて"
          }
        ],
        "targetKanji": [
          "手"
        ]
      },
      {
        "id": "ref-l19-11",
        "lessonId": "l19",
        "category": "Humor clásico y juegos de ingenio (演芸・ボードゲーム)",
        "badge": "Dúo cómico",
        "japanese": "漫才",
        "reading": "まんざい",
        "romaji": "Manzai",
        "spanish": "Manzai (diálogo cómico)",
        "details": "Comedia de ritmo trepidante entre dos artistas: el personaje formal (tsukkomi) y el disparatado (boke).",
        "segments": [
          {
            "text": "漫才",
            "furigana": "まんざい"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l19-12",
        "lessonId": "l19",
        "category": "Humor clásico y juegos de ingenio (演芸・ボードゲーム)",
        "badge": "Monólogo cómico",
        "japanese": "落語",
        "reading": "らくご",
        "romaji": "Rakugo",
        "spanish": "Rakugo (monólogo cómico, arte de contar historias)",
        "details": "Un comediante sentado en solitario representa múltiples personajes usando únicamente un abanico y un pañuelo.",
        "segments": [
          {
            "text": "落語",
            "furigana": "らくご"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l19-13",
        "lessonId": "l19",
        "category": "Humor clásico y juegos de ingenio (演芸・ボードゲーム)",
        "badge": "Juego de mesa",
        "japanese": "囲碁",
        "reading": "いご",
        "romaji": "Igo",
        "spanish": "Igo (Go)",
        "details": "Juego de tablero milenario donde se conquistan territorios rodeando piedras del rival en una retícula de 19x19.",
        "segments": [
          {
            "text": "囲碁",
            "furigana": "いご"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l19-14",
        "lessonId": "l19",
        "category": "Humor clásico y juegos de ingenio (演芸・ボードゲーム)",
        "badge": "Juego de mesa",
        "japanese": "将棋",
        "reading": "しょうぎ",
        "romaji": "Shougi",
        "spanish": "Shogi (ajedrez japonés)",
        "details": "Ajedrez japonés en tablero de 9x9 con la singular regla de reintroducir fichas capturadas.",
        "segments": [
          {
            "text": "将棋",
            "furigana": "しょうぎ"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l19-15",
        "lessonId": "l19",
        "category": "Ocio popular y festividades (娯楽・祭り)",
        "badge": "Recreativo",
        "japanese": "パチンコ",
        "reading": "パチンコ",
        "romaji": "Pachinko",
        "spanish": "Pachinko (un tipo de tragamonedas)",
        "details": "Máquinas recreativas verticales japonesas donde se disparan bolitas de acero a través de un laberinto de clavijas.",
        "segments": [
          {
            "text": "パチンコ"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l19-16",
        "lessonId": "l19",
        "category": "Ocio popular y festividades (娯楽・祭り)",
        "badge": "Canto y ocio",
        "japanese": "カラオケ",
        "reading": "カラオケ",
        "romaji": "Karaoke",
        "spanish": "Karaoke",
        "details": "Entretenimiento nacido en Japón para cantar canciones populares con acompañamiento grabado en cabinas privadas.",
        "segments": [
          {
            "text": "カラオケ"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l19-17",
        "lessonId": "l19",
        "category": "Ocio popular y festividades (娯楽・祭り)",
        "badge": "Baile festivo",
        "japanese": "盆踊り",
        "reading": "ぼんおどり",
        "romaji": "Bon-odori",
        "spanish": "Bonodori (baile del festival Bon)",
        "details": "Danza folclórica veraniega donde vecinos de todas las edades bailan en círculo con yukata en honor a sus ancestros.",
        "segments": [
          {
            "text": "盆踊",
            "furigana": "ぼんおど"
          },
          {
            "text": "り"
          }
        ],
        "targetKanji": []
      }
    ]
  },
  {
    "lessonId": "l20",
    "lessonNumber": "Lección 20",
    "topic": "Diferentes maneras de dirigirse a la gente",
    "topicJapanese": "人の 呼び方",
    "topicDescription": "Fórmulas de tratamiento interpersonal en la sociedad japonesa: la perspectiva del menor dentro del hogar (お兄ちゃん, お姉ちゃん, パパ, ママ) y la llamada por cargos institucionales o roles públicos (部長, お客様, 先生).",
    "categories": [
      "Tratamiento en el ámbito familiar (家族内)",
      "Tratamiento en el ámbito social y laboral (社会・職場)",
      "Información cultural y reglas sociales"
    ],
    "items": [
      {
        "id": "ref-l20-1",
        "lessonId": "l20",
        "category": "Tratamiento en el ámbito familiar (家族内)",
        "badge": "Hermano",
        "japanese": "お兄ちゃん",
        "reading": "おにいちゃん",
        "romaji": "Oniichan",
        "spanish": "Hermano mayor (llamado cariñoso familiar)",
        "details": "Denominación afectuosa adoptada comúnmente también por los padres basada en la perspectiva del hijo menor.",
        "segments": [
          {
            "text": "お"
          },
          {
            "text": "兄",
            "furigana": "にい"
          },
          {
            "text": "ちゃん"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l20-2",
        "lessonId": "l20",
        "category": "Tratamiento en el ámbito familiar (家族内)",
        "badge": "Hermana",
        "japanese": "お姉ちゃん",
        "reading": "おねえちゃん",
        "romaji": "Oneechan",
        "spanish": "Hermana mayor (llamado cariñoso familiar)",
        "details": "Denominación afectuosa con la que hermanos y padres se dirigen a la hija mayor.",
        "segments": [
          {
            "text": "お"
          },
          {
            "text": "姉",
            "furigana": "ねえ"
          },
          {
            "text": "ちゃん"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l20-3",
        "lessonId": "l20",
        "category": "Tratamiento en el ámbito familiar (家族内)",
        "badge": "Padre",
        "japanese": "お父さん（パパ）",
        "reading": "おとうさん（パパ）",
        "romaji": "Otousan (Papa)",
        "spanish": "Papá / padre",
        "details": "Al conversar en presencia de los hijos, la esposa a menudo se dirige al marido como お父さん o パパ.",
        "segments": [
          {
            "text": "お"
          },
          {
            "text": "父",
            "furigana": "とう"
          },
          {
            "text": "さん（パパ）"
          }
        ],
        "targetKanji": [
          "父"
        ]
      },
      {
        "id": "ref-l20-4",
        "lessonId": "l20",
        "category": "Tratamiento en el ámbito familiar (家族内)",
        "badge": "Madre",
        "japanese": "お母さん（ママ）",
        "reading": "おかあさん（ママ）",
        "romaji": "Okaasan (Mama)",
        "spanish": "Mamá / madre",
        "details": "Al conversar en presencia de los hijos, el esposo a menudo llama a su mujer お母さん o ママ.",
        "segments": [
          {
            "text": "お"
          },
          {
            "text": "母",
            "furigana": "かあ"
          },
          {
            "text": "さん（ママ）"
          }
        ],
        "targetKanji": [
          "母"
        ]
      },
      {
        "id": "ref-l20-5",
        "lessonId": "l20",
        "category": "Tratamiento en el ámbito familiar (家族内)",
        "badge": "Frase en familia",
        "japanese": "「パパ、きょうは 太郎の 誕生日よ。」",
        "reading": "「パパ、きょうは たろうの たんじょうびよ。」",
        "romaji": "\"Papa, kyou wa Tarou no tanjoubi yo.\"",
        "spanish": "«Querido, hoy es el cumpleaños de Taro.»",
        "details": "Ejemplo ilustrado del libro escolar donde la madre apela al padre desde la óptica compartida de los hijos.",
        "segments": [
          {
            "text": "「パパ、きょうは "
          },
          {
            "text": "太郎",
            "furigana": "たろう"
          },
          {
            "text": "の "
          },
          {
            "text": "誕生日",
            "furigana": "たんじょうび"
          },
          {
            "text": "よ。」"
          }
        ],
        "targetKanji": [
          "生",
          "日"
        ]
      },
      {
        "id": "ref-l20-6",
        "lessonId": "l20",
        "category": "Tratamiento en el ámbito social y laboral (社会・職場)",
        "badge": "Empresa",
        "japanese": "部長",
        "reading": "ぶちょう",
        "romaji": "Buchou",
        "spanish": "Director de departamento / Jefe de división",
        "details": "En las empresas de Japón, los empleados se dirigen al superior jerárquico llamándolo por su cargo.",
        "segments": [
          {
            "text": "部長",
            "furigana": "ぶちょう"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l20-7",
        "lessonId": "l20",
        "category": "Tratamiento en el ámbito social y laboral (社会・職場)",
        "badge": "Empresa",
        "japanese": "課長",
        "reading": "かちょう",
        "romaji": "Kachou",
        "spanish": "Jefe de sección",
        "details": "Cargo de mando intermedio en oficinas y empresas japonesas.",
        "segments": [
          {
            "text": "課長",
            "furigana": "かちょう"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l20-8",
        "lessonId": "l20",
        "category": "Tratamiento en el ámbito social y laboral (社会・職場)",
        "badge": "Empresa",
        "japanese": "社長",
        "reading": "しゃちょう",
        "romaji": "Shachou",
        "spanish": "Presidente de la compañía / Director general",
        "details": "Máximo cargo ejecutivo de una empresa u organización comercial.",
        "segments": [
          {
            "text": "社長",
            "furigana": "しゃちょう"
          }
        ],
        "targetKanji": [
          "社"
        ]
      },
      {
        "id": "ref-l20-9",
        "lessonId": "l20",
        "category": "Tratamiento en el ámbito social y laboral (社会・職場)",
        "badge": "Comercio",
        "japanese": "お客様",
        "reading": "おきゃくさま",
        "romaji": "Okyakusama",
        "spanish": "Estimado/a cliente / Sr. o Sra. cliente",
        "details": "Tratamiento reverencial obligatorio utilizado por comerciantes, bancos y camareros hacia cualquier usuario o comprador.",
        "segments": [
          {
            "text": "お"
          },
          {
            "text": "客",
            "furigana": "きゃく"
          },
          {
            "text": "様",
            "furigana": "さま"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l20-10",
        "lessonId": "l20",
        "category": "Tratamiento en el ámbito social y laboral (社会・職場)",
        "badge": "Profesión",
        "japanese": "先生",
        "reading": "せんせい",
        "romaji": "Sensei",
        "spanish": "Doctor/a / Médico / Profesor/a",
        "details": "Fórmula de respeto indiscutible con la que los pacientes se dirigen a los médicos en la clínica u hospital.",
        "segments": [
          {
            "text": "先生",
            "furigana": "せんせい"
          }
        ],
        "targetKanji": [
          "先",
          "生"
        ]
      },
      {
        "id": "ref-l20-11",
        "lessonId": "l20",
        "category": "Tratamiento en el ámbito social y laboral (社会・職場)",
        "badge": "Frase en oficina",
        "japanese": "「部長、サイン お願いします。」",
        "reading": "「ぶちょう、サイン おねがいします。」",
        "romaji": "\"Buchou, sain onegai shimasu.\"",
        "spanish": "«Por favor, firme el documento, Sr. Matsumoto (jefe de departamento).»",
        "details": "Solicitud formal de firma al superior llamándolo directamente «Buchō».",
        "segments": [
          {
            "text": "「"
          },
          {
            "text": "部長",
            "furigana": "ぶちょう"
          },
          {
            "text": "、サイン "
          },
          {
            "text": "願",
            "furigana": "ねが"
          },
          {
            "text": "いします。」"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l20-12",
        "lessonId": "l20",
        "category": "Tratamiento en el ámbito social y laboral (社会・職場)",
        "badge": "Frase en tienda",
        "japanese": "「お客様、よく お似合いですよ。」",
        "reading": "「おきゃくさま、よく おにあいですよ。」",
        "romaji": "\"Okyakusama, yoku oniai desu yo.\"",
        "spanish": "«Le queda muy bien, Sr. (Sra.) cliente.»",
        "details": "Cumplido servicial del vendedor ante el cliente que se prueba ropa o un complemento.",
        "segments": [
          {
            "text": "「お"
          },
          {
            "text": "客",
            "furigana": "きゃく"
          },
          {
            "text": "様",
            "furigana": "さま"
          },
          {
            "text": "、よく お"
          },
          {
            "text": "似",
            "furigana": "に"
          },
          {
            "text": "合",
            "furigana": "あ"
          },
          {
            "text": "いですよ。」"
          }
        ],
        "targetKanji": [
          "合"
        ]
      },
      {
        "id": "ref-l20-13",
        "lessonId": "l20",
        "category": "Tratamiento en el ámbito social y laboral (社会・職場)",
        "badge": "Frase en consulta",
        "japanese": "「先生、おなかが 痛いんです。」",
        "reading": "「せんせい、おなかが いたいんです。」",
        "romaji": "\"Sensei, onaka ga itai n desu.\"",
        "spanish": "«Me duele el estómago, doctor.»",
        "details": "Frase modelo del paciente explicando sus molestias al facultativo médico.",
        "segments": [
          {
            "text": "「"
          },
          {
            "text": "先生",
            "furigana": "せんせい"
          },
          {
            "text": "、おなかが "
          },
          {
            "text": "痛",
            "furigana": "い"
          },
          {
            "text": "いんです。」"
          }
        ],
        "targetKanji": [
          "先",
          "生"
        ]
      },
      {
        "id": "ref-l20-14",
        "lessonId": "l20",
        "category": "Información cultural y reglas sociales",
        "badge": "Regla familiar",
        "japanese": "家族内での呼び方の基準",
        "reading": "かぞくないでのよびかたのきじゅん",
        "romaji": "Kazokunai de no yobikata no kijun",
        "spanish": "El punto de referencia en la familia: el hijo menor",
        "details": "Entre los miembros de la familia se toma como base de referencia al hijo menor. Si hay dos o más hijos, los padres llaman a los mayores お兄ちゃん u お姉ちゃん desde el punto de vista del hermano menor. Asimismo, en presencia de los hijos, la pareja se llama mutuamente お母さん/ママ u お父さん/パパ.",
        "segments": [
          {
            "text": "家族内",
            "furigana": "かぞくない"
          },
          {
            "text": "での"
          },
          {
            "text": "呼",
            "furigana": "よ"
          },
          {
            "text": "び"
          },
          {
            "text": "方",
            "furigana": "かた"
          },
          {
            "text": "の"
          },
          {
            "text": "基準",
            "furigana": "きじゅん"
          }
        ],
        "targetKanji": []
      },
      {
        "id": "ref-l20-15",
        "lessonId": "l20",
        "category": "Información cultural y reglas sociales",
        "badge": "Regla social",
        "japanese": "社会での役職・立場による呼び方",
        "reading": "しゃかいでのやくしょく・たちばによるよびかた",
        "romaji": "Shakai de no yakushoku / tachiba ni yoru yobikata",
        "spanish": "Tratamiento social según cargo o rol profesional",
        "details": "En la sociedad japonesa es norma dirigirse a las personas por el cargo que ocupan en el grupo al que pertenecen (部長, 課長, 先生, お客様) en lugar de usar su nombre propio, preservando la jerarquía, la consideración y la armonía social.",
        "segments": [
          {
            "text": "社会",
            "furigana": "しゃかい"
          },
          {
            "text": "での"
          },
          {
            "text": "役職",
            "furigana": "やくしょく"
          },
          {
            "text": "・"
          },
          {
            "text": "立場",
            "furigana": "たちば"
          },
          {
            "text": "による"
          },
          {
            "text": "呼",
            "furigana": "よ"
          },
          {
            "text": "び"
          },
          {
            "text": "方",
            "furigana": "かた"
          }
        ],
        "targetKanji": [
          "社",
          "会",
          "場"
        ]
      }
    ]
  }
,

{
  "lessonId": "l21",
  "lessonNumber": "Lección 21",
  "topic": "Denominación de cargos",
  "topicJapanese": "役職名",
  "topicDescription": "Títulos oficiales y cargos jerárquicos en la administración pública japonesa, instituciones docentes, empresas, bancos, estaciones, hospitales y comisarías de policía.",
  "categories": [
    "Administración pública y gobierno",
    "Centros educativos",
    "Compañía y empresa",
    "Banco",
    "Estación de tren",
    "Hospital",
    "Comisaría de policía"
  ],
  "items": [
    {
      "id": "ref-l21-1",
      "lessonId": "l21",
      "category": "Administración pública y gobierno",
      "badge": "Gobierno nacional",
      "japanese": "首相 · 内閣総理大臣",
      "reading": "しゅしょう · ないかくそうりだいじん",
      "romaji": "Shushou · Naikaku souri daijin",
      "spanish": "Primer ministro (Jefe de gobierno)",
      "details": "El término formal oficial es 内閣総理大臣 (ないかくそうりだいじん), habitualmente abreviado en los medios y conversaciones como 首相 (しゅしょう) o 総理 (そうり). Encabeza el gobierno de Japón (国 / くに).",
      "segments": [
        {
          "text": "首相",
          "furigana": "しゅしょう"
        },
        {
          "text": " · "
        },
        {
          "text": "内閣総理大臣",
          "furigana": "ないかくそうりだいじん"
        }
      ],
      "targetKanji": [
        "首",
        "相",
        "内",
        "閣",
        "総",
        "理",
        "大",
        "臣",
        "国"
      ]
    },
    {
      "id": "ref-l21-2",
      "lessonId": "l21",
      "category": "Administración pública y gobierno",
      "badge": "Prefectura",
      "japanese": "都道府県 · 知事",
      "reading": "とどうふけん · ちじ",
      "romaji": "Todoufuken · Chiji",
      "spanish": "Prefectura — Gobernador prefectural",
      "details": "Japón se divide en 47 prefecturas (都: Tokio, 道: Hokkaido, 府: Osaka/Kioto, 県: 43 prefecturas). La máxima autoridad ejecutiva electa de cada una es el 知事 (ちじ).",
      "segments": [
        {
          "text": "都道府県",
          "furigana": "とどうふけん"
        },
        {
          "text": " · "
        },
        {
          "text": "知事",
          "furigana": "ちじ"
        }
      ],
      "targetKanji": [
        "都",
        "道",
        "府",
        "県",
        "知",
        "事"
      ]
    },
    {
      "id": "ref-l21-3",
      "lessonId": "l21",
      "category": "Administración pública y gobierno",
      "badge": "Municipio (Ciudad)",
      "japanese": "市 · 市長",
      "reading": "し · しちょう",
      "romaji": "Shi · Shichou",
      "spanish": "Ciudad — Alcalde de la ciudad",
      "details": "La ciudad (市 / し) es administrada por el alcalde 市長 (しちょう), electo por sufragio popular municipal.",
      "segments": [
        {
          "text": "市",
          "furigana": "し"
        },
        {
          "text": " · "
        },
        {
          "text": "市長",
          "furigana": "しちょう"
        }
      ],
      "targetKanji": [
        "市",
        "長"
      ]
    },
    {
      "id": "ref-l21-4",
      "lessonId": "l21",
      "category": "Administración pública y gobierno",
      "badge": "Municipio (Pueblo)",
      "japanese": "町 · 町長",
      "reading": "まち · ちょうちょう",
      "romaji": "Machi · Chouchou",
      "spanish": "Pueblo — Alcalde de pueblo",
      "details": "El pueblo o distrito menor (町 / まち) tiene como máxima autoridad al 町長 (ちょうちょう).",
      "segments": [
        {
          "text": "町",
          "furigana": "まち"
        },
        {
          "text": " · "
        },
        {
          "text": "町長",
          "furigana": "ちょうちょう"
        }
      ],
      "targetKanji": [
        "町",
        "長"
      ]
    },
    {
      "id": "ref-l21-5",
      "lessonId": "l21",
      "category": "Administración pública y gobierno",
      "badge": "Municipio (Aldea)",
      "japanese": "村 · 村長",
      "reading": "むら · そんちょう",
      "romaji": "Mura · Sonchou",
      "spanish": "Aldea / Comuna rural — Alcalde de aldea",
      "details": "La división administrativa municipal más pequeña es la aldea (村 / むら), dirigida por el 村長 (そんちょう).",
      "segments": [
        {
          "text": "村",
          "furigana": "むら"
        },
        {
          "text": " · "
        },
        {
          "text": "村長",
          "furigana": "そんちょう"
        }
      ],
      "targetKanji": [
        "村",
        "長"
      ]
    },
    {
      "id": "ref-l21-6",
      "lessonId": "l21",
      "category": "Centros educativos",
      "badge": "Universidad",
      "japanese": "大学 · 学長",
      "reading": "だいがく · がくちょう",
      "romaji": "Daigaku · Gakuchou",
      "spanish": "Universidad — Rector de universidad",
      "details": "En una universidad (大学 / だいがく), la máxima autoridad académica e institucional recibe el título de 学長 (がくちょう). En universidades grandes con facultades múltiples también se usa 総長 (そうちょう).",
      "segments": [
        {
          "text": "大学",
          "furigana": "だいがく"
        },
        {
          "text": " · "
        },
        {
          "text": "学長",
          "furigana": "がくちょう"
        }
      ],
      "targetKanji": [
        "大",
        "学",
        "長"
      ]
    },
    {
      "id": "ref-l21-7",
      "lessonId": "l21",
      "category": "Centros educativos",
      "badge": "Bachillerato",
      "japanese": "高等学校 · 校長",
      "reading": "こうとうがっこう · こうちょう",
      "romaji": "Koutou gakkou · Kouchou",
      "spanish": "Instituto de bachillerato / Escuela secundaria superior — Director",
      "details": "Comúnmente abreviado como 高校 (こうこう). El director escolar se denomina 校長 (こうちょう) o 校長先生.",
      "segments": [
        {
          "text": "高等学校",
          "furigana": "こうとうがっこう"
        },
        {
          "text": " · "
        },
        {
          "text": "校長",
          "furigana": "こうちょう"
        }
      ],
      "targetKanji": [
        "高",
        "等",
        "学",
        "校",
        "長"
      ]
    },
    {
      "id": "ref-l21-8",
      "lessonId": "l21",
      "category": "Centros educativos",
      "badge": "Secundaria",
      "japanese": "中学校 · 校長",
      "reading": "ちゅうがっこう · こうちょう",
      "romaji": "Chuugakkou · Kouchou",
      "spanish": "Escuela secundaria básica (3 años) — Director",
      "details": "Escuela de educación obligatoria intermedia (12-15 años). Su director escolar es el 校長 (こうちょう).",
      "segments": [
        {
          "text": "中学校",
          "furigana": "ちゅうがっこう"
        },
        {
          "text": " · "
        },
        {
          "text": "校長",
          "furigana": "こうちょう"
        }
      ],
      "targetKanji": [
        "中",
        "学",
        "校",
        "長"
      ]
    },
    {
      "id": "ref-l21-9",
      "lessonId": "l21",
      "category": "Centros educativos",
      "badge": "Primaria",
      "japanese": "小学校 · 校長",
      "reading": "しょうがっこう · こうちょう",
      "romaji": "Shougakkou · Kouchou",
      "spanish": "Escuela primaria (6 años) — Director",
      "details": "Educación primaria obligatoria (6-12 años). El director escolar es el 校長 (こうちょう).",
      "segments": [
        {
          "text": "小学校",
          "furigana": "しょうがっこう"
        },
        {
          "text": " · "
        },
        {
          "text": "校長",
          "furigana": "こうちょう"
        }
      ],
      "targetKanji": [
        "小",
        "学",
        "校",
        "長"
      ]
    },
    {
      "id": "ref-l21-10",
      "lessonId": "l21",
      "category": "Centros educativos",
      "badge": "Infantil",
      "japanese": "幼稚園 · 園長",
      "reading": "ようちえん · えんちょう",
      "romaji": "Youchien · Enchou",
      "spanish": "Jardín de infancia — Director / Directora de parvulario",
      "details": "El director o responsable de un jardín de infancia o guardería preescolar se llama 園長 (えんちょう).",
      "segments": [
        {
          "text": "幼稚園",
          "furigana": "ようちえん"
        },
        {
          "text": " · "
        },
        {
          "text": "園長",
          "furigana": "えんちょう"
        }
      ],
      "targetKanji": [
        "幼",
        "稚",
        "園",
        "長"
      ]
    },
    {
      "id": "ref-l21-11",
      "lessonId": "l21",
      "category": "Compañía y empresa",
      "badge": "Empresa",
      "japanese": "会長",
      "reading": "かいちょう",
      "romaji": "Kaichou",
      "spanish": "Presidente del consejo directivo / de administración",
      "details": "Máxima figura institucional en una corporación japonesa, comúnmente un antiguo 社長 que se retira de la operativa diaria para presidir el consejo.",
      "segments": [
        {
          "text": "会長",
          "furigana": "かいちょう"
        }
      ],
      "targetKanji": [
        "会",
        "長"
      ]
    },
    {
      "id": "ref-l21-12",
      "lessonId": "l21",
      "category": "Compañía y empresa",
      "badge": "Empresa",
      "japanese": "社長",
      "reading": "しゃちょう",
      "romaji": "Shachou",
      "spanish": "Director ejecutivo / Presidente de la empresa (CEO)",
      "details": "La persona con máximo poder de decisión y gestión operativa en una empresa (会社 / かいしゃ). Dentro de la empresa se le llama directamente \"社長\".",
      "segments": [
        {
          "text": "社長",
          "furigana": "しゃちょう"
        }
      ],
      "targetKanji": [
        "社",
        "長"
      ]
    },
    {
      "id": "ref-l21-13",
      "lessonId": "l21",
      "category": "Compañía y empresa",
      "badge": "Empresa",
      "japanese": "重役",
      "reading": "じゅうやく",
      "romaji": "Juuyaku",
      "spanish": "Consejero delegado / Miembro de la junta directiva",
      "details": "Término colectivo para los altos ejecutivos y directores corporativos (directores generales, vicepresidentes, auditores).",
      "segments": [
        {
          "text": "重役",
          "furigana": "じゅうやく"
        }
      ],
      "targetKanji": [
        "重",
        "役"
      ]
    },
    {
      "id": "ref-l21-14",
      "lessonId": "l21",
      "category": "Compañía y empresa",
      "badge": "Empresa",
      "japanese": "部長",
      "reading": "ぶちょう",
      "romaji": "Buchou",
      "spanish": "Director / Gerente de departamento o división",
      "details": "Jefe a cargo de un departamento completo (営業部, 人事部, 開発部, etc.). Está por encima del 課長.",
      "segments": [
        {
          "text": "部長",
          "furigana": "ぶちょう"
        }
      ],
      "targetKanji": [
        "部",
        "長"
      ]
    },
    {
      "id": "ref-l21-15",
      "lessonId": "l21",
      "category": "Compañía y empresa",
      "badge": "Empresa",
      "japanese": "課長",
      "reading": "かちょう",
      "romaji": "Kachou",
      "spanish": "Jefe de sección",
      "details": "Líder de un equipo operativo o sección específica (課) dentro de un departamento. Trato habitual de respeto hacia el superior inmediato.",
      "segments": [
        {
          "text": "課長",
          "furigana": "かちょう"
        }
      ],
      "targetKanji": [
        "課",
        "長"
      ]
    },
    {
      "id": "ref-l21-16",
      "lessonId": "l21",
      "category": "Banco",
      "badge": "Banca",
      "japanese": "頭取",
      "reading": "とうどり",
      "romaji": "Toudori",
      "spanish": "Presidente de banco",
      "details": "Cargo equivalente al de 社長 en una entidad bancaria comercial japonesa (銀行 / ぎんこう). Término tradicional reservado a la banca.",
      "segments": [
        {
          "text": "頭取",
          "furigana": "とうどり"
        }
      ],
      "targetKanji": [
        "頭",
        "取"
      ]
    },
    {
      "id": "ref-l21-17",
      "lessonId": "l21",
      "category": "Banco",
      "badge": "Banca",
      "japanese": "支店長",
      "reading": "してんちょう",
      "romaji": "Shitenchou",
      "spanish": "Gerente / Director de sucursal bancaria",
      "details": "Responsable de una sucursal local (支店 / してん) de un banco o compañía comercial.",
      "segments": [
        {
          "text": "支店長",
          "furigana": "してんちょう"
        }
      ],
      "targetKanji": [
        "支",
        "店",
        "長"
      ]
    },
    {
      "id": "ref-l21-18",
      "lessonId": "l21",
      "category": "Estación de tren",
      "badge": "Ferrocarril",
      "japanese": "駅 · 駅長",
      "reading": "えき · えきちょう",
      "romaji": "Eki · Ekichou",
      "spanish": "Estación — Jefe de estación ferroviaria",
      "details": "El jefe de estación (駅長 / えきちょう) viste uniforme con distintivos dorados y coordina la seguridad, puntualidad y personal de la estación.",
      "segments": [
        {
          "text": "駅",
          "furigana": "えき"
        },
        {
          "text": " · "
        },
        {
          "text": "駅長",
          "furigana": "えきちょう"
        }
      ],
      "targetKanji": [
        "駅",
        "長"
      ]
    },
    {
      "id": "ref-l21-19",
      "lessonId": "l21",
      "category": "Hospital",
      "badge": "Sanidad",
      "japanese": "病院 · 院長",
      "reading": "びょういん · いんちょう",
      "romaji": "Byouin · Inchou",
      "spanish": "Hospital — Director de hospital",
      "details": "El médico jefe y máximo responsable de una clínica u hospital (病院 / びょういん).",
      "segments": [
        {
          "text": "病院",
          "furigana": "びょういん"
        },
        {
          "text": " · "
        },
        {
          "text": "院長",
          "furigana": "いんちょう"
        }
      ],
      "targetKanji": [
        "病",
        "院",
        "長"
      ]
    },
    {
      "id": "ref-l21-20",
      "lessonId": "l21",
      "category": "Hospital",
      "badge": "Sanidad",
      "japanese": "部長",
      "reading": "ぶちょう",
      "romaji": "Buchou",
      "spanish": "Jefe de departamento médico / Jefe de servicio",
      "details": "Médico especialista a cargo de un departamento clínico (cirugía, medicina interna, pediatría, etc.).",
      "segments": [
        {
          "text": "部長",
          "furigana": "ぶちょう"
        }
      ],
      "targetKanji": [
        "部",
        "長"
      ]
    },
    {
      "id": "ref-l21-21",
      "lessonId": "l21",
      "category": "Hospital",
      "badge": "Sanidad",
      "japanese": "看護師長",
      "reading": "かんごしちょう",
      "romaji": "Kangoshichou",
      "spanish": "Jefe de enfermería / Supervisora de enfermeros",
      "details": "Enfermero/a con el rango de supervisor general de la plantilla de enfermería en planta o quirófano.",
      "segments": [
        {
          "text": "看護師長",
          "furigana": "かんごしちょう"
        }
      ],
      "targetKanji": [
        "看",
        "護",
        "師",
        "長"
      ]
    },
    {
      "id": "ref-l21-22",
      "lessonId": "l21",
      "category": "Comisaría de policía",
      "badge": "Seguridad",
      "japanese": "警察 · 署長",
      "reading": "けいさつ · しょちょう",
      "romaji": "Keisatsu · Shochou",
      "spanish": "Policía — Comisario / Jefe de comisaría",
      "details": "El responsable máximo de una comisaría de policía local (警察署 / けいさつしょ).",
      "segments": [
        {
          "text": "警察",
          "furigana": "けいさつ"
        },
        {
          "text": " · "
        },
        {
          "text": "署長",
          "furigana": "しょちょう"
        }
      ],
      "targetKanji": [
        "警",
        "察",
        "署",
        "長"
      ]
    }
  ]
},

{
  "lessonId": "l22",
  "lessonNumber": "Lección 22",
  "topic": "Ropas",
  "topicJapanese": "衣服",
  "topicDescription": "Prendas de vestir cotidianas y formales, calzado, complementos y trajes tradicionales japoneses.",
  "categories": [
    "Prendas superiores y vestidos",
    "Pantalones y faldas",
    "Ropa de abrigo",
    "Ropa interior y medias",
    "Calzado",
    "Accesorios",
    "Indumentaria tradicional japonesa"
  ],
  "items": [
    {
      "id": "ref-l22-1",
      "lessonId": "l22",
      "category": "Prendas superiores y vestidos",
      "badge": "Formal",
      "japanese": "スーツ",
      "reading": "スーツ",
      "romaji": "suutsu",
      "spanish": "Traje (de vestir / chaqueta y pantalón o falda)",
      "details": "Prenda imprescindible en el entorno laboral y formal japonés (del inglés \"suit\").",
      "segments": [
        {
          "text": "スーツ"
        }
      ],
      "targetKanji": []
    },
    {
      "id": "ref-l22-2",
      "lessonId": "l22",
      "category": "Prendas superiores y vestidos",
      "badge": "Femenino",
      "japanese": "ワンピース",
      "reading": "ワンピース",
      "romaji": "wanpiisu",
      "spanish": "Vestido (de una sola pieza)",
      "details": "Del inglés \"one-piece dress\". Prenda enteriza comúnmente usada en primavera y verano.",
      "segments": [
        {
          "text": "ワンピース"
        }
      ],
      "targetKanji": []
    },
    {
      "id": "ref-l22-3",
      "lessonId": "l22",
      "category": "Prendas superiores y vestidos",
      "badge": "Exterior",
      "japanese": "上着",
      "reading": "うわぎ",
      "romaji": "uwagi",
      "spanish": "Chaqueta / Prenda de vestir exterior superior",
      "details": "Cualquier prenda que se viste sobre la camisa o camiseta. El kanji 上 significa \"arriba\" y 着 significa \"vestir/ponerse\".",
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
      "id": "ref-l22-4",
      "lessonId": "l22",
      "category": "Pantalones y faldas",
      "badge": "Inferior",
      "japanese": "ズボン · パンツ",
      "reading": "ズボン · パンツ",
      "romaji": "zubon · pantsu",
      "spanish": "Pantalones",
      "details": "ズボン proviene del francés \"jupon\". En el japonés moderno se usa también con mucha frecuencia パンツ (del inglés \"pants\") para pantalones largos.",
      "segments": [
        {
          "text": "ズボン"
        },
        {
          "text": " · "
        },
        {
          "text": "パンツ"
        }
      ],
      "targetKanji": []
    },
    {
      "id": "ref-l22-5",
      "lessonId": "l22",
      "category": "Pantalones y faldas",
      "badge": "Casual",
      "japanese": "ジーンズ",
      "reading": "ジーンズ",
      "romaji": "jiinzu",
      "spanish": "Pantalones vaqueros / Jeans / Tejanos",
      "details": "Prenda de mezclilla o denim (del inglés \"jeans\").",
      "segments": [
        {
          "text": "ジーンズ"
        }
      ],
      "targetKanji": []
    },
    {
      "id": "ref-l22-6",
      "lessonId": "l22",
      "category": "Pantalones y faldas",
      "badge": "Femenino",
      "japanese": "スカート",
      "reading": "スカート",
      "romaji": "sukaato",
      "spanish": "Falda",
      "details": "Del inglés \"skirt\". Forma parte del uniforme escolar femenino clásico en Japón.",
      "segments": [
        {
          "text": "スカート"
        }
      ],
      "targetKanji": []
    },
    {
      "id": "ref-l22-7",
      "lessonId": "l22",
      "category": "Prendas superiores y vestidos",
      "badge": "Superior",
      "japanese": "ブラウス",
      "reading": "ブラウス",
      "romaji": "burausu",
      "spanish": "Blusa",
      "details": "Prenda de vestir femenina con botones o cuello estilizado (del inglés \"blouse\").",
      "segments": [
        {
          "text": "ブラウス"
        }
      ],
      "targetKanji": []
    },
    {
      "id": "ref-l22-8",
      "lessonId": "l22",
      "category": "Prendas superiores y vestidos",
      "badge": "Superior",
      "japanese": "ワイシャツ",
      "reading": "ワイシャツ",
      "romaji": "waishatsu",
      "spanish": "Camisa de vestir formal",
      "details": "Derivado fonético de \"white shirt\" (camisa blanca de vestir formal con cuello y botones).",
      "segments": [
        {
          "text": "ワイシャツ"
        }
      ],
      "targetKanji": []
    },
    {
      "id": "ref-l22-9",
      "lessonId": "l22",
      "category": "Prendas superiores y vestidos",
      "badge": "Punto",
      "japanese": "セーター",
      "reading": "セーター",
      "romaji": "seetaa",
      "spanish": "Suéter / Pulóver / Jersey de punto",
      "details": "Prenda de punto cálida para otoño e invierno (del inglés \"sweater\").",
      "segments": [
        {
          "text": "セーター"
        }
      ],
      "targetKanji": []
    },
    {
      "id": "ref-l22-10",
      "lessonId": "l22",
      "category": "Ropa de abrigo",
      "badge": "Invierno",
      "japanese": "マフラー",
      "reading": "マフラー",
      "romaji": "mafuraa",
      "spanish": "Bufanda",
      "details": "Bufanda o chalina que abriga el cuello en invierno (del inglés \"muffler\").",
      "segments": [
        {
          "text": "マフラー"
        }
      ],
      "targetKanji": []
    },
    {
      "id": "ref-l22-11",
      "lessonId": "l22",
      "category": "Ropa de abrigo",
      "badge": "Invierno",
      "japanese": "手袋",
      "reading": "てぶくろ",
      "romaji": "tebukuro",
      "spanish": "Guantes",
      "details": "Literalmente \"bolsa para la mano\" (手: mano, 袋: bolsa/envoltura). Se usan con el verbo はめる o する.",
      "segments": [
        {
          "text": "手",
          "furigana": "て"
        },
        {
          "text": "袋",
          "furigana": "ぶくろ"
        }
      ],
      "targetKanji": [
        "手",
        "袋"
      ]
    },
    {
      "id": "ref-l22-12",
      "lessonId": "l22",
      "category": "Ropa interior y medias",
      "badge": "Interior",
      "japanese": "下着",
      "reading": "したぎ",
      "romaji": "shitagi",
      "spanish": "Ropa interior",
      "details": "Prenda que se viste debajo (下: abajo, 着: vestir).",
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
      "id": "ref-l22-13",
      "lessonId": "l22",
      "category": "Ropa interior y medias",
      "badge": "Pie",
      "japanese": "くつした · 靴下",
      "reading": "くつした",
      "romaji": "kutsushita",
      "spanish": "Calcetines",
      "details": "Literalmente \"debajo del zapato\" (靴: calzado, 下: debajo). Se combinan con el verbo はく.",
      "segments": [
        {
          "text": "靴",
          "furigana": "くつ"
        },
        {
          "text": "下",
          "furigana": "した"
        }
      ],
      "targetKanji": [
        "靴",
        "下"
      ]
    },
    {
      "id": "ref-l22-14",
      "lessonId": "l22",
      "category": "Ropa interior y medias",
      "badge": "Pierna",
      "japanese": "パンティー · ストッキング",
      "reading": "パンティー · ストッキング",
      "romaji": "pantii · sutokkingu",
      "spanish": "Bragas / Medias",
      "details": "Medias de nylon, pantis o medias finas para falda o vestido formal.",
      "segments": [
        {
          "text": "パンティー"
        },
        {
          "text": " · "
        },
        {
          "text": "ストッキング"
        }
      ],
      "targetKanji": []
    },
    {
      "id": "ref-l22-15",
      "lessonId": "l22",
      "category": "Ropa de abrigo",
      "badge": "Abrigo",
      "japanese": "(オーバー)コート",
      "reading": "（オーバー）コート",
      "romaji": "(oobaa) kooto",
      "spanish": "Abrigo / Sobretodo",
      "details": "Abrigo largo exterior para el frío invernal (del inglés \"overcoat\").",
      "segments": [
        {
          "text": "（オーバー）コート"
        }
      ],
      "targetKanji": []
    },
    {
      "id": "ref-l22-16",
      "lessonId": "l22",
      "category": "Ropa de abrigo",
      "badge": "Lluvia",
      "japanese": "レインコート",
      "reading": "レインコート",
      "romaji": "reinkooto",
      "spanish": "Impermeable / Chubasquero",
      "details": "Prenda resistente al agua para los días de lluvia (del inglés \"raincoat\").",
      "segments": [
        {
          "text": "レインコート"
        }
      ],
      "targetKanji": []
    },
    {
      "id": "ref-l22-17",
      "lessonId": "l22",
      "category": "Accesorios",
      "badge": "Cuello",
      "japanese": "ネクタイ",
      "reading": "ネクタイ",
      "romaji": "nekutai",
      "spanish": "Corbata",
      "details": "Del inglés \"necktie\". Se usa con el verbo しめる (apretar/anudar) o する (ponerse).",
      "segments": [
        {
          "text": "ネクタイ"
        }
      ],
      "targetKanji": []
    },
    {
      "id": "ref-l22-18",
      "lessonId": "l22",
      "category": "Accesorios",
      "badge": "Cintura",
      "japanese": "ベルト",
      "reading": "ベルト",
      "romaji": "beruto",
      "spanish": "Cinturón",
      "details": "Del inglés \"belt\". Se ajusta a los pantalones o vestidos con el verbo しめる o する.",
      "segments": [
        {
          "text": "ベルト"
        }
      ],
      "targetKanji": []
    },
    {
      "id": "ref-l22-19",
      "lessonId": "l22",
      "category": "Calzado",
      "badge": "Tacón",
      "japanese": "ハイヒール",
      "reading": "ハイヒール",
      "romaji": "haihiiru",
      "spanish": "Zapatos de tacones altos",
      "details": "Calzado femenino formal con tacón elevado (del inglés \"high heels\"). Verbo: はく.",
      "segments": [
        {
          "text": "ハイヒール"
        }
      ],
      "targetKanji": []
    },
    {
      "id": "ref-l22-20",
      "lessonId": "l22",
      "category": "Calzado",
      "badge": "Calzado",
      "japanese": "ブーツ",
      "reading": "ブーツ",
      "romaji": "buutsu",
      "spanish": "Botas",
      "details": "Calzado alto que cubre el tobillo o parte de la pierna (del inglés \"boots\"). Verbo: はく.",
      "segments": [
        {
          "text": "ブーツ"
        }
      ],
      "targetKanji": []
    },
    {
      "id": "ref-l22-21",
      "lessonId": "l22",
      "category": "Calzado",
      "badge": "Deporte",
      "japanese": "運動靴",
      "reading": "うんどうぐつ",
      "romaji": "undougutsu",
      "spanish": "Calzado de deporte / Zapatillas deportivas",
      "details": "Literalmente \"calzado para ejercicio\" (運動: ejercicio, 靴: zapato). Verbo: はく.",
      "segments": [
        {
          "text": "運動",
          "furigana": "うんどう"
        },
        {
          "text": "靴",
          "furigana": "ぐつ"
        }
      ],
      "targetKanji": [
        "運",
        "動",
        "靴"
      ]
    },
    {
      "id": "ref-l22-22",
      "lessonId": "l22",
      "category": "Indumentaria tradicional japonesa",
      "badge": "Tradicional",
      "japanese": "着物",
      "reading": "きもの",
      "romaji": "kimono",
      "spanish": "Quimono (vestido tradicional japonés)",
      "details": "Literalmente \"cosa para vestir\" (着る: vestir, 物: cosa). Se viste solapando el lado izquierdo sobre el derecho y se ajusta con una faja de seda (帯).",
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
      "id": "ref-l22-23",
      "lessonId": "l22",
      "category": "Indumentaria tradicional japonesa",
      "badge": "Tradicional",
      "japanese": "帯",
      "reading": "おび",
      "romaji": "obi",
      "spanish": "Obi (cinturón ancho tradicional para el quimono)",
      "details": "Faja o cinturón ancho de seda ricamente elaborado con el que se ciñe el quimono, rematado en un elaborado lazo a la espalda.",
      "segments": [
        {
          "text": "帯",
          "furigana": "おび"
        }
      ],
      "targetKanji": [
        "帯"
      ]
    },
    {
      "id": "ref-l22-24",
      "lessonId": "l22",
      "category": "Indumentaria tradicional japonesa",
      "badge": "Tradicional",
      "japanese": "ぞうり · 草履",
      "reading": "ぞうり",
      "romaji": "zouri",
      "spanish": "Zori (sandalias / chanclos tradicionales de suela plana)",
      "details": "Sandalias tradicionales japonesas con tiras divisorias para los dedos (hanao), fabricadas en paja de arroz, cuero o vinilo fino.",
      "segments": [
        {
          "text": "草",
          "furigana": "ぞう"
        },
        {
          "text": "履",
          "furigana": "り"
        }
      ],
      "targetKanji": [
        "草",
        "履"
      ]
    },
    {
      "id": "ref-l22-25",
      "lessonId": "l22",
      "category": "Indumentaria tradicional japonesa",
      "badge": "Tradicional",
      "japanese": "たび · 足袋",
      "reading": "たび",
      "romaji": "tabi",
      "spanish": "Tabi (calcetines tradicionales japoneses con separación para el dedo gordo)",
      "details": "Calcetines blancos de tela resistente que dividen el pulgar del resto de dedos para calzar cómodamente zori o geta al llevar quimono.",
      "segments": [
        {
          "text": "足",
          "furigana": "た"
        },
        {
          "text": "袋",
          "furigana": "び"
        }
      ],
      "targetKanji": [
        "足",
        "袋"
      ]
    }
  ]
},

{
  "lessonId": "l23",
  "lessonNumber": "Lección 23",
  "topic": "Carreteras y tráfico",
  "topicJapanese": "道路・交通",
  "topicDescription": "Elementos urbanos de la vía pública, calzadas, puentes peatonales, cruces y principales señales de circulación vial en Japón.",
  "categories": [
    "Vía pública e infraestructura",
    "Señales de tráfico"
  ],
  "items": [
    {
      "id": "ref-l23-1",
      "lessonId": "l23",
      "category": "Vía pública e infraestructura",
      "badge": "Infraestructura",
      "japanese": "歩道",
      "reading": "ほどう",
      "romaji": "hodou",
      "spanish": "Acera, vereda (camino para peatones)",
      "details": "Vía lateral de la calle reservada al tránsito de personas (歩: caminar, 道: camino).",
      "segments": [
        {
          "text": "歩",
          "furigana": "ほ"
        },
        {
          "text": "道",
          "furigana": "どう"
        }
      ],
      "targetKanji": [
        "歩",
        "道"
      ]
    },
    {
      "id": "ref-l23-2",
      "lessonId": "l23",
      "category": "Vía pública e infraestructura",
      "badge": "Infraestructura",
      "japanese": "車道",
      "reading": "しゃどう",
      "romaji": "shadou",
      "spanish": "Carril, calzada (vía para vehículos)",
      "details": "Parte pavimentada de la vía destinada exclusivamente a la circulación de automóviles y vehículos (車: vehículo, 道: vía). En Japón se circula por la izquierda.",
      "segments": [
        {
          "text": "車",
          "furigana": "しゃ"
        },
        {
          "text": "道",
          "furigana": "どう"
        }
      ],
      "targetKanji": [
        "車",
        "道"
      ]
    },
    {
      "id": "ref-l23-3",
      "lessonId": "l23",
      "category": "Vía pública e infraestructura",
      "badge": "Infraestructura",
      "japanese": "高速道路",
      "reading": "こうそくどうろ",
      "romaji": "kousokudouro",
      "spanish": "Autopista / Autovía de peaje",
      "details": "Vía rápida para automóviles sin cruces a nivel (高速: alta velocidad, 道路: carretera/autopista). El peaje se abona comúnmente mediante tarjeta electrónica ETC.",
      "segments": [
        {
          "text": "高",
          "furigana": "こう"
        },
        {
          "text": "速",
          "furigana": "そく"
        },
        {
          "text": "道",
          "furigana": "どう"
        },
        {
          "text": "路",
          "furigana": "ろ"
        }
      ],
      "targetKanji": [
        "高",
        "速",
        "道",
        "路"
      ]
    },
    {
      "id": "ref-l23-4",
      "lessonId": "l23",
      "category": "Vía pública e infraestructura",
      "badge": "Infraestructura",
      "japanese": "通り",
      "reading": "とおり",
      "romaji": "toori",
      "spanish": "Calle / Avenida transitada",
      "details": "Calle urbana transitada o gran avenida (por ejemplo, 銀座通り, 明治通り). Procede del verbo 通る (pasar/transitar).",
      "segments": [
        {
          "text": "通",
          "furigana": "とお"
        },
        {
          "text": "り"
        }
      ],
      "targetKanji": [
        "通"
      ]
    },
    {
      "id": "ref-l23-5",
      "lessonId": "l23",
      "category": "Vía pública e infraestructura",
      "badge": "Infraestructura",
      "japanese": "交差点",
      "reading": "こうさてん",
      "romaji": "kousaten",
      "spanish": "Cruce / Intersección de calles",
      "details": "Punto donde se cruzan dos o más vías (交差: intersección, 点: punto). El famoso cruce de Shibuya es el スクランブル交差点 más célebre.",
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
      "id": "ref-l23-6",
      "lessonId": "l23",
      "category": "Vía pública e infraestructura",
      "badge": "Infraestructura",
      "japanese": "横断歩道",
      "reading": "おうだんほどう",
      "romaji": "oudanhodou",
      "spanish": "Paso de peatones / Paso de cebra",
      "details": "Zona señalizada con franjas blancas en el pavimento para que los peatones crucen la calzada (横断: cruzar transversalmente, 歩道: senda peatonal).",
      "segments": [
        {
          "text": "横",
          "furigana": "おう"
        },
        {
          "text": "断",
          "furigana": "だん"
        },
        {
          "text": "歩",
          "furigana": "ほ"
        },
        {
          "text": "道",
          "furigana": "どう"
        }
      ],
      "targetKanji": [
        "横",
        "断",
        "歩",
        "道"
      ]
    },
    {
      "id": "ref-l23-7",
      "lessonId": "l23",
      "category": "Vía pública e infraestructura",
      "badge": "Infraestructura",
      "japanese": "歩道橋",
      "reading": "ほどうきょう",
      "romaji": "hodoukyou",
      "spanish": "Puente para peatones / Pasarela peatonal elevada",
      "details": "Estructura elevada para permitir el paso seguro de peatones por encima de grandes avenidas y cruces de mucho tráfico (歩道: acera, 橋: puente).",
      "segments": [
        {
          "text": "歩",
          "furigana": "ほ"
        },
        {
          "text": "道",
          "furigana": "どう"
        },
        {
          "text": "橋",
          "furigana": "きょう"
        }
      ],
      "targetKanji": [
        "歩",
        "道",
        "橋"
      ]
    },
    {
      "id": "ref-l23-8",
      "lessonId": "l23",
      "category": "Vía pública e infraestructura",
      "badge": "Ubicación",
      "japanese": "角",
      "reading": "かど",
      "romaji": "kado",
      "spanish": "Esquina",
      "details": "Ángulo formado por la confluencia de dos calles. Expresión habitual para dar indicaciones: 次の角を右へ曲がってください (Gire a la derecha en la próxima esquina).",
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
      "id": "ref-l23-9",
      "lessonId": "l23",
      "category": "Vía pública e infraestructura",
      "badge": "Tráfico",
      "japanese": "信号",
      "reading": "しんごう",
      "romaji": "shingou",
      "spanish": "Semáforo",
      "details": "En Japón las luces del semáforo son verde (llamado tradicionalmente 青 / azul), ámbar (黄色) y rojo (赤).",
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
      "id": "ref-l23-10",
      "lessonId": "l23",
      "category": "Vía pública e infraestructura",
      "badge": "Relieve",
      "japanese": "坂",
      "reading": "さか",
      "romaji": "saka",
      "spanish": "Cuesta / Pendiente",
      "details": "Calle empinada o cuesta. Tokio es célebre por sus cientos de cuestas históricas con nombre propio (坂道 / sakamichi).",
      "segments": [
        {
          "text": "坂",
          "furigana": "さか"
        }
      ],
      "targetKanji": [
        "坂"
      ]
    },
    {
      "id": "ref-l23-11",
      "lessonId": "l23",
      "category": "Vía pública e infraestructura",
      "badge": "Ferrocarril",
      "japanese": "踏切",
      "reading": "ふみきり",
      "romaji": "fumikiri",
      "spanish": "Paso a nivel",
      "details": "Intersección a nivel entre una calle y las vías del ferrocarril con barreras mecánicas y señales de advertencia luminosas y acústicas.",
      "segments": [
        {
          "text": "踏",
          "furigana": "ふみ"
        },
        {
          "text": "切",
          "furigana": "きり"
        }
      ],
      "targetKanji": [
        "踏",
        "切"
      ]
    },
    {
      "id": "ref-l23-12",
      "lessonId": "l23",
      "category": "Vía pública e infraestructura",
      "badge": "Servicio",
      "japanese": "ガソリンスタンド",
      "reading": "ガソリンスタンド",
      "romaji": "gasorin sutando",
      "spanish": "Gasolinera / Estación de servicio",
      "details": "Término japonés derivado del inglés (wasei-eigo: \"gasoline stand\"). En muchas gasolineras japonesas las mangueras bajan suspendidas del techo.",
      "segments": [
        {
          "text": "ガソリンスタンド"
        }
      ],
      "targetKanji": []
    },
    {
      "id": "ref-l23-13",
      "lessonId": "l23",
      "category": "Señales de tráfico",
      "badge": "Señal obligatoria",
      "japanese": "止まれ",
      "reading": "とまれ",
      "romaji": "Tomare",
      "spanish": "Pare / STOP (Detención obligatoria)",
      "details": "Señal triangular invertida de color rojo intenso con la palabra 止まれ inscrita en blanco. Exige la detención total del vehículo antes de la línea.",
      "segments": [
        {
          "text": "止",
          "furigana": "と"
        },
        {
          "text": "まれ"
        }
      ],
      "targetKanji": [
        "止"
      ]
    },
    {
      "id": "ref-l23-14",
      "lessonId": "l23",
      "category": "Señales de tráfico",
      "badge": "Señal de prohibición",
      "japanese": "進入禁止",
      "reading": "しんにゅうきんし",
      "romaji": "Shinnyuu kinshi",
      "spanish": "Prohibida la entrada / Dirección prohibida",
      "details": "Disco circular rojo con una franja horizontal blanca en el centro que veta el ingreso de todo vehículo a la calzada.",
      "segments": [
        {
          "text": "進",
          "furigana": "しん"
        },
        {
          "text": "入",
          "furigana": "にゅう"
        },
        {
          "text": "禁",
          "furigana": "きん"
        },
        {
          "text": "止",
          "furigana": "し"
        }
      ],
      "targetKanji": [
        "進",
        "入",
        "禁",
        "止"
      ]
    },
    {
      "id": "ref-l23-15",
      "lessonId": "l23",
      "category": "Señales de tráfico",
      "badge": "Señal informativa",
      "japanese": "一方通行",
      "reading": "いっぽうつうこう",
      "romaji": "Ippou tsuukou",
      "spanish": "Sentido único / Unidireccional",
      "details": "Placa rectangular azul o negra con flecha blanca indicando el sentido único autorizado de circulación en esa calle.",
      "segments": [
        {
          "text": "一",
          "furigana": "いっ"
        },
        {
          "text": "方",
          "furigana": "ぽう"
        },
        {
          "text": "通",
          "furigana": "つう"
        },
        {
          "text": "行",
          "furigana": "こう"
        }
      ],
      "targetKanji": [
        "一",
        "方",
        "通",
        "行"
      ]
    },
    {
      "id": "ref-l23-16",
      "lessonId": "l23",
      "category": "Señales de tráfico",
      "badge": "Señal de prohibición",
      "japanese": "駐車禁止",
      "reading": "ちゅうしゃきんし",
      "romaji": "Chuusha kinshi",
      "spanish": "Prohibido estacionar / No aparcar",
      "details": "Disco azul circular bordeado de rojo con una franja roja diagonal que prohíbe el aparcamiento o estacionamiento en dicho tramo.",
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
          "text": "禁",
          "furigana": "きん"
        },
        {
          "text": "止",
          "furigana": "し"
        }
      ],
      "targetKanji": [
        "駐",
        "車",
        "禁",
        "止"
      ]
    },
    {
      "id": "ref-l23-17",
      "lessonId": "l23",
      "category": "Señales de tráfico",
      "badge": "Señal de prohibición",
      "japanese": "右折禁止",
      "reading": "うせつきんし",
      "romaji": "Usetsu kinshi",
      "spanish": "Prohibido doblar / girar a la derecha",
      "details": "Señal circular que prohíbe el giro a la derecha en la intersección.",
      "segments": [
        {
          "text": "右",
          "furigana": "う"
        },
        {
          "text": "折",
          "furigana": "せつ"
        },
        {
          "text": "禁",
          "furigana": "きん"
        },
        {
          "text": "止",
          "furigana": "し"
        }
      ],
      "targetKanji": [
        "右",
        "折",
        "禁",
        "止"
      ]
    }
  ]
},

{
  "lessonId": "l24",
  "lessonNumber": "Lección 24",
  "topic": "Regalos que se acostumbra dar",
  "topicJapanese": "贈答の習慣",
  "topicDescription": "Tradiciones japonesas de regalos monetarios y obsequios formales para hitos vitales, temporadas de agradecimiento, visitas de cortesía y sobres ceremoniales (熨斗袋).",
  "categories": [
    "Celebraciones y festividades",
    "Regalos estacionales",
    "Condolencias y salud",
    "Sobres ceremoniales (熨斗袋)"
  ],
  "items": [
    {
      "id": "ref-l24-1",
      "lessonId": "l24",
      "category": "Celebraciones y festividades",
      "badge": "Año Nuevo",
      "japanese": "お年玉",
      "reading": "おとしだま",
      "romaji": "Otoshidama",
      "spanish": "Aguinaldo de Año Nuevo para los niños",
      "details": "Dinero en efectivo que padres, abuelos y parientes entregan a los niños en pequeños sobres decorados (pochibukuro) durante el Año Nuevo (Shogatsu).",
      "segments": [
        {
          "text": "お"
        },
        {
          "text": "年",
          "furigana": "とし"
        },
        {
          "text": "玉",
          "furigana": "だま"
        }
      ],
      "targetKanji": [
        "年",
        "玉"
      ]
    },
    {
      "id": "ref-l24-2",
      "lessonId": "l24",
      "category": "Celebraciones y festividades",
      "badge": "Estudios",
      "japanese": "入学祝い",
      "reading": "にゅうがくいわい",
      "romaji": "Nyuugakuiwai",
      "spanish": "Regalo por ingreso escolar o universitario",
      "details": "Presente que se entrega a niños y jóvenes al ingresar a la escuela primaria, secundaria o universidad (mochila escolar randoseru, papelería, libros o dinero en sobre festivo).",
      "segments": [
        {
          "text": "入",
          "furigana": "にゅう"
        },
        {
          "text": "学",
          "furigana": "がく"
        },
        {
          "text": "祝",
          "furigana": "いわ"
        },
        {
          "text": "い"
        }
      ],
      "targetKanji": [
        "入",
        "学",
        "祝"
      ]
    },
    {
      "id": "ref-l24-3",
      "lessonId": "l24",
      "category": "Celebraciones y festividades",
      "badge": "Graduación",
      "japanese": "卒業祝い",
      "reading": "そつぎょういわい",
      "romaji": "Sotsugyouiwai",
      "spanish": "Regalo de graduación escolar o académica",
      "details": "Obsequio conmemorativo que se concede al concluir con éxito una etapa de estudios formal (libros, estilográficas, dinero o artículos de vestir para la nueva etapa).",
      "segments": [
        {
          "text": "卒",
          "furigana": "そつ"
        },
        {
          "text": "業",
          "furigana": "ぎょう"
        },
        {
          "text": "祝",
          "furigana": "いわ"
        },
        {
          "text": "い"
        }
      ],
      "targetKanji": [
        "卒",
        "業",
        "祝"
      ]
    },
    {
      "id": "ref-l24-4",
      "lessonId": "l24",
      "category": "Celebraciones y festividades",
      "badge": "Boda",
      "japanese": "結婚祝い",
      "reading": "けっこんいわい",
      "romaji": "Kekkoniwai",
      "spanish": "Regalo de bodas / Felicitación de matrimonio",
      "details": "Presente para los recién casados. En la ceremonia nupcial japonesa los invitados entregan dinero en billetes nuevos e impares (habitualmente 30.000 ¥ o 50.000 ¥) en un sobre con nudo結び切り.",
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
          "text": "祝",
          "furigana": "いわ"
        },
        {
          "text": "い"
        }
      ],
      "targetKanji": [
        "結",
        "婚",
        "祝"
      ]
    },
    {
      "id": "ref-l24-5",
      "lessonId": "l24",
      "category": "Celebraciones y festividades",
      "badge": "Nacimiento",
      "japanese": "出産祝い",
      "reading": "しゅっさんいわい",
      "romaji": "Shussaniwai",
      "spanish": "Regalo por nacimiento de un bebé",
      "details": "Presente que se otorga tras el nacimiento seguro de una criatura (ropita de bebé, juguetes estimulantes, pañales de alta gama o dinero en efectivo).",
      "segments": [
        {
          "text": "出",
          "furigana": "しゅっ"
        },
        {
          "text": "産",
          "furigana": "さん"
        },
        {
          "text": "祝",
          "furigana": "いわ"
        },
        {
          "text": "い"
        }
      ],
      "targetKanji": [
        "出",
        "産",
        "祝"
      ]
    },
    {
      "id": "ref-l24-6",
      "lessonId": "l24",
      "category": "Regalos estacionales",
      "badge": "Julio / Agosto",
      "japanese": "お中元",
      "reading": "おちゅうげん",
      "romaji": "Ochuugen",
      "spanish": "Regalo de agradecimiento de pleno verano",
      "details": "Costumbre de enviar obsequios a principios de julio o agosto a superiores, clientes, maestros o doctores en señal de gratitud. Se regalan alimentos refrescantes, cerveza, frutas selectas o zumos.",
      "segments": [
        {
          "text": "お"
        },
        {
          "text": "中",
          "furigana": "ちゅう"
        },
        {
          "text": "元",
          "furigana": "げん"
        }
      ],
      "targetKanji": [
        "中",
        "元"
      ]
    },
    {
      "id": "ref-l24-7",
      "lessonId": "l24",
      "category": "Regalos estacionales",
      "badge": "Diciembre",
      "japanese": "お歳暮",
      "reading": "おせいぼ",
      "romaji": "Oseibo",
      "spanish": "Regalo de agradecimiento de fin de año",
      "details": "Obsequio entregado en diciembre a personas con las que se tiene deuda de gratitud por su apoyo durante todo el año transcurrido (jamón curado, dulces finos, té, conservas gourmet).",
      "segments": [
        {
          "text": "お"
        },
        {
          "text": "歳",
          "furigana": "せい"
        },
        {
          "text": "暮",
          "furigana": "ぼ"
        }
      ],
      "targetKanji": [
        "歳",
        "暮"
      ]
    },
    {
      "id": "ref-l24-8",
      "lessonId": "l24",
      "category": "Condolencias y salud",
      "badge": "Funeral",
      "japanese": "お香典",
      "reading": "おこうでん",
      "romaji": "Okouden",
      "spanish": "Ofrenda monetaria de condolencias / Pésame ante difuntos",
      "details": "Aporte de dinero que los asistentes a un velatorio o funeral entregan a los deudos para ayudar en los costes del sepelio. Se coloca en sobre especial con cintas blancas y negras (御霊前).",
      "segments": [
        {
          "text": "お"
        },
        {
          "text": "香",
          "furigana": "こう"
        },
        {
          "text": "典",
          "furigana": "でん"
        }
      ],
      "targetKanji": [
        "香",
        "典"
      ]
    },
    {
      "id": "ref-l24-9",
      "lessonId": "l24",
      "category": "Condolencias y salud",
      "badge": "Enfermos",
      "japanese": "お見舞い",
      "reading": "おみまい",
      "romaji": "Omimai",
      "spanish": "Visita y presente para personas hospitalizadas o convalecientes",
      "details": "Muestra de solidaridad y ánimo a quien padece una dolencia o accidente (flores suaves sin maceta ni olor invasivo, cestas de fruta o libros).",
      "segments": [
        {
          "text": "お"
        },
        {
          "text": "見",
          "furigana": "み"
        },
        {
          "text": "舞",
          "furigana": "ま"
        },
        {
          "text": "い"
        }
      ],
      "targetKanji": [
        "見",
        "舞"
      ]
    },
    {
      "id": "ref-l24-10",
      "lessonId": "l24",
      "category": "Sobres ceremoniales (熨斗袋)",
      "badge": "Sobre ceremonial",
      "japanese": "熨斗袋",
      "reading": "のしぶくろ",
      "romaji": "Noshibukuro",
      "spanish": "Sobre especial ceremonial para regalar dinero en efectivo",
      "details": "Sobre de papel de arroz japonés plegado con cordeles ceremoniales entrelazados (mizuhiki). Se escoge rigurosamente según sea boda, felicitación o pésame.",
      "segments": [
        {
          "text": "熨",
          "furigana": "の"
        },
        {
          "text": "斗",
          "furigana": "し"
        },
        {
          "text": "袋",
          "furigana": "ぶくろ"
        }
      ],
      "targetKanji": [
        "熨",
        "斗",
        "袋"
      ]
    },
    {
      "id": "ref-l24-11",
      "lessonId": "l24",
      "category": "Sobres ceremoniales (熨斗袋)",
      "badge": "Boda / Unión única",
      "japanese": "結び切りの熨斗袋 (御結婚 · 御祝)",
      "reading": "むすびきりののしぶくろ (ごけっこん · ごしゅく)",
      "romaji": "Musubikiri no noshibukuro (Gokekkon · Goshuku)",
      "spanish": "Sobre para bodas (nudo indestructible que no se desata)",
      "details": "Lleva hilos de papel blanco y rojo o dorado y plateado atados con un nudo plano cerrado (結び切り / musubikiri) que no puede desatarse, deseando que el matrimonio ocurra una sola vez y dure toda la vida.",
      "segments": [
        {
          "text": "結",
          "furigana": "むす"
        },
        {
          "text": "び"
        },
        {
          "text": "切",
          "furigana": "き"
        },
        {
          "text": "りの"
        },
        {
          "text": "熨斗袋",
          "furigana": "のしぶくろ"
        },
        {
          "text": " ("
        },
        {
          "text": "御結婚",
          "furigana": "ごけっこん"
        },
        {
          "text": " · "
        },
        {
          "text": "御祝",
          "furigana": "ごしゅく"
        },
        {
          "text": ")"
        }
      ],
      "targetKanji": [
        "結",
        "切",
        "袋",
        "御",
        "婚",
        "祝"
      ]
    },
    {
      "id": "ref-l24-12",
      "lessonId": "l24",
      "category": "Sobres ceremoniales (熨斗袋)",
      "badge": "Felicitaciones reiterables",
      "japanese": "蝶結びの熨斗袋 (御祝)",
      "reading": "ちょうむすびののしぶくろ (ごしゅく)",
      "romaji": "Choumusubi no noshibukuro (Goshuku)",
      "spanish": "Sobre para felicitaciones generales (nudo de lazo desatable)",
      "details": "Cordeles blanco y rojo en forma de lazada desatable (蝶結び / choumusubi), ideal para celebraciones que uno desea que se repitan muchas veces a lo largo de la vida (nacimientos, admisiones escolares, ascensos laborales).",
      "segments": [
        {
          "text": "蝶結",
          "furigana": "ちょうむす"
        },
        {
          "text": "びの"
        },
        {
          "text": "熨斗袋",
          "furigana": "のしぶくろ"
        },
        {
          "text": " ("
        },
        {
          "text": "御祝",
          "furigana": "ごしゅく"
        },
        {
          "text": ")"
        }
      ],
      "targetKanji": [
        "蝶",
        "結",
        "袋",
        "御",
        "祝"
      ]
    },
    {
      "id": "ref-l24-13",
      "lessonId": "l24",
      "category": "Sobres ceremoniales (熨斗袋)",
      "badge": "Funeral / Pésame",
      "japanese": "不祝儀袋 (御霊前)",
      "reading": "ぶしゅうぎぶくろ (ごれいぜん)",
      "romaji": "Bushuugibukuro (Goreizen)",
      "spanish": "Sobre para funerales y condolencias (cordeles blanco y negro)",
      "details": "Sobre sobrio con hilos mizuhiki en colores blanco y negro o plateado sin adorno de noshi. Se escribe 御霊前 (Ante el alma del difunto) y el nombre del donante en tinta tenue (usu-zumi) expresando profunda tristeza.",
      "segments": [
        {
          "text": "不祝儀袋",
          "furigana": "ぶしゅうぎぶくろ"
        },
        {
          "text": " ("
        },
        {
          "text": "御霊前",
          "furigana": "ごれいぜん"
        },
        {
          "text": ")"
        }
      ],
      "targetKanji": [
        "不",
        "祝",
        "儀",
        "袋",
        "御",
        "霊",
        "前"
      ]
    }
  ]
},

{
  "lessonId": "l25",
  "lessonNumber": "Lección 25",
  "topic": "La vida de una persona",
  "topicJapanese": "人の一生",
  "topicDescription": "Cronología de las etapas del ciclo vital humano, etapas del sistema educativo japonés, hitos biográficos y esperanza de vida en Japón.",
  "categories": [
    "Etapas de la vida y edades",
    "Educación y centros formativos",
    "Hitos vitales y trayectoria",
    "Esperanza de vida en Japón"
  ],
  "items": [
    {
      "id": "ref-l25-1",
      "lessonId": "l25",
      "category": "Etapas de la vida y edades",
      "badge": "0 años",
      "japanese": "0歳 · 赤ちゃん",
      "reading": "ぜろさい · あかちゃん",
      "romaji": "zero sai · akachan",
      "spanish": "0 años — Bebé / Lactante recién nacido",
      "details": "El término 赤ちゃん proviene de 赤い (rojo), aludiendo al aspecto sonrosado y vivo de la piel del recién nacido.",
      "segments": [
        {
          "text": "0"
        },
        {
          "text": "歳",
          "furigana": "さい"
        },
        {
          "text": " · "
        },
        {
          "text": "赤",
          "furigana": "あか"
        },
        {
          "text": "ちゃん"
        }
      ],
      "targetKanji": [
        "歳",
        "赤"
      ]
    },
    {
      "id": "ref-l25-2",
      "lessonId": "l25",
      "category": "Etapas de la vida y edades",
      "badge": "6 años",
      "japanese": "6歳 · 子ども",
      "reading": "ろくさい · こども",
      "romaji": "roku sai · kodomo",
      "spanish": "6 años — Niñez / Infancia",
      "details": "A los 6 años los niños japoneses inician la educación primaria obligatoria (小学校).",
      "segments": [
        {
          "text": "6"
        },
        {
          "text": "歳",
          "furigana": "さい"
        },
        {
          "text": " · "
        },
        {
          "text": "子",
          "furigana": "こ"
        },
        {
          "text": "ども"
        }
      ],
      "targetKanji": [
        "歳",
        "子"
      ]
    },
    {
      "id": "ref-l25-3",
      "lessonId": "l25",
      "category": "Etapas de la vida y edades",
      "badge": "18 años",
      "japanese": "18歳 · 青年",
      "reading": "じゅうはっさい · せいねん",
      "romaji": "juuhassai · seinen",
      "spanish": "18 años — Juventud / Adolescencia",
      "details": "Etapa de graduación de bachillerato e ingreso a la educación superior o vida adulta.",
      "segments": [
        {
          "text": "18"
        },
        {
          "text": "歳",
          "furigana": "さい"
        },
        {
          "text": " · "
        },
        {
          "text": "青年",
          "furigana": "せいねん"
        }
      ],
      "targetKanji": [
        "歳",
        "青",
        "年"
      ]
    },
    {
      "id": "ref-l25-4",
      "lessonId": "l25",
      "category": "Etapas de la vida y edades",
      "badge": "40 años",
      "japanese": "40歳 · 中年",
      "reading": "よんじゅっさい · ちゅうねん",
      "romaji": "yonjussai · chuunen",
      "spanish": "40 años — Mediana edad / Madurez",
      "details": "Etapa de madurez profesional plena y consolidación de la vida familiar.",
      "segments": [
        {
          "text": "40"
        },
        {
          "text": "歳",
          "furigana": "さい"
        },
        {
          "text": " · "
        },
        {
          "text": "中年",
          "furigana": "ちゅうねん"
        }
      ],
      "targetKanji": [
        "歳",
        "中",
        "年"
      ]
    },
    {
      "id": "ref-l25-5",
      "lessonId": "l25",
      "category": "Etapas de la vida y edades",
      "badge": "70 años",
      "japanese": "70歳 · 老人",
      "reading": "ななじゅっさい · ろうじん",
      "romaji": "nanajussai · roujin",
      "spanish": "70 años — Tercera edad / Ancianidad",
      "details": "Etapa venerada en Japón, celebrada en el Día del Respeto a los Mayores (敬老の日).",
      "segments": [
        {
          "text": "70"
        },
        {
          "text": "歳",
          "furigana": "さい"
        },
        {
          "text": " · "
        },
        {
          "text": "老人",
          "furigana": "ろうじん"
        }
      ],
      "targetKanji": [
        "歳",
        "老",
        "人"
      ]
    },
    {
      "id": "ref-l25-6",
      "lessonId": "l25",
      "category": "Educación y centros formativos",
      "badge": "Preescolar",
      "japanese": "保育園",
      "reading": "ほいくえん",
      "romaji": "hoikuen",
      "spanish": "Guardería infantil / Centro de cuidado diurno",
      "details": "Instalación para el cuidado diurno de bebés e infantes hasta el ingreso a primaria.",
      "segments": [
        {
          "text": "保育園",
          "furigana": "ほいくえん"
        }
      ],
      "targetKanji": [
        "保",
        "育",
        "園"
      ]
    },
    {
      "id": "ref-l25-7",
      "lessonId": "l25",
      "category": "Educación y centros formativos",
      "badge": "Preescolar",
      "japanese": "幼稚園",
      "reading": "ようちえん",
      "romaji": "youchien",
      "spanish": "Jardín de infancia / Escuela infantil",
      "details": "Centro pedagógico preescolar dependiente del Ministerio de Educación (MEXT).",
      "segments": [
        {
          "text": "幼稚園",
          "furigana": "ようちえん"
        }
      ],
      "targetKanji": [
        "幼",
        "稚",
        "園"
      ]
    },
    {
      "id": "ref-l25-8",
      "lessonId": "l25",
      "category": "Educación y centros formativos",
      "badge": "Ingreso",
      "japanese": "学校に入ります",
      "reading": "がっこうにはいります",
      "romaji": "gakkou ni hairimasu",
      "spanish": "Ingresar en la escuela / Comenzar los estudios escolares",
      "details": "En Japón el curso escolar comienza el 1 de abril de cada año coincidiendo con la floración de los cerezos (sakura).",
      "segments": [
        {
          "text": "学校",
          "furigana": "がっこう"
        },
        {
          "text": "に"
        },
        {
          "text": "入",
          "furigana": "はい"
        },
        {
          "text": "ります"
        }
      ],
      "targetKanji": [
        "学",
        "校",
        "入"
      ]
    },
    {
      "id": "ref-l25-9",
      "lessonId": "l25",
      "category": "Educación y centros formativos",
      "badge": "6 años de duración",
      "japanese": "小学校 (6年)",
      "reading": "しょうがっこう (ろくねん)",
      "romaji": "shougakkou (6 nen)",
      "spanish": "Escuela primaria (6 a 12 años)",
      "details": "Primer tramo de educación obligatoria durante 6 años (del 1.º al 6.º grado).",
      "segments": [
        {
          "text": "小学校",
          "furigana": "しょうがっこう"
        },
        {
          "text": " (6"
        },
        {
          "text": "年",
          "furigana": "ねん"
        },
        {
          "text": ")"
        }
      ],
      "targetKanji": [
        "小",
        "学",
        "校",
        "年"
      ]
    },
    {
      "id": "ref-l25-10",
      "lessonId": "l25",
      "category": "Educación y centros formativos",
      "badge": "3 años de duración",
      "japanese": "中学校 (3年)",
      "reading": "ちゅうがっこう (さんねん)",
      "romaji": "chuugakkou (3 nen)",
      "spanish": "Escuela secundaria básica (12 a 15 años)",
      "details": "Segundo tramo de la educación obligatoria japonesa (3 años).",
      "segments": [
        {
          "text": "中学校",
          "furigana": "ちゅうがっこう"
        },
        {
          "text": " (3"
        },
        {
          "text": "年",
          "furigana": "ねん"
        },
        {
          "text": ")"
        }
      ],
      "targetKanji": [
        "中",
        "学",
        "校",
        "年"
      ]
    },
    {
      "id": "ref-l25-11",
      "lessonId": "l25",
      "category": "Educación y centros formativos",
      "badge": "3 años de duración",
      "japanese": "高等学校 (3年)",
      "reading": "こうとうがっこう (さんねん)",
      "romaji": "koutougakkou (3 nen)",
      "spanish": "Instituto de bachillerato / Secundaria superior (15 a 18 años)",
      "details": "Abreviado como 高校 (こうこう). Aunque no es estrictamente obligatoria, más del 98% de los jóvenes japoneses cursa el bachillerato.",
      "segments": [
        {
          "text": "高等学校",
          "furigana": "こうとうがっこう"
        },
        {
          "text": " (3"
        },
        {
          "text": "年",
          "furigana": "ねん"
        },
        {
          "text": ")"
        }
      ],
      "targetKanji": [
        "高",
        "等",
        "学",
        "校",
        "年"
      ]
    },
    {
      "id": "ref-l25-12",
      "lessonId": "l25",
      "category": "Educación y centros formativos",
      "badge": "4 años de duración",
      "japanese": "大学 (4年)",
      "reading": "だいがく (よねん)",
      "romaji": "daigaku (4 nen)",
      "spanish": "Universidad (estudios de grado / licenciatura de 4 años)",
      "details": "Formación universitaria superior de 4 años (6 años en facultades de Medicina y Veterinaria).",
      "segments": [
        {
          "text": "大学",
          "furigana": "だいがく"
        },
        {
          "text": " (4"
        },
        {
          "text": "年",
          "furigana": "ねん"
        },
        {
          "text": ")"
        }
      ],
      "targetKanji": [
        "大",
        "学",
        "年"
      ]
    },
    {
      "id": "ref-l25-13",
      "lessonId": "l25",
      "category": "Educación y centros formativos",
      "badge": "2 años de duración",
      "japanese": "短大 (2年)",
      "reading": "たんだい (にねん)",
      "romaji": "tandai (2 nen)",
      "spanish": "Universidad de primer ciclo / Junior College (carrera de 2 años)",
      "details": "Abreviatura de 短期大学 (たんきだいがく). Carrera universitaria breve de enfoque práctico de dos años.",
      "segments": [
        {
          "text": "短大",
          "furigana": "たんだい"
        },
        {
          "text": " (2"
        },
        {
          "text": "年",
          "furigana": "ねん"
        },
        {
          "text": ")"
        }
      ],
      "targetKanji": [
        "短",
        "大",
        "年"
      ]
    },
    {
      "id": "ref-l25-14",
      "lessonId": "l25",
      "category": "Educación y centros formativos",
      "badge": "2 años de duración",
      "japanese": "専門学校 (2年)",
      "reading": "せんもんがっこう (にねん)",
      "romaji": "senmongakkou (2 nen)",
      "spanish": "Escuela profesional superior / Formación técnica (2 años)",
      "details": "Institutos técnicos superiores especializados en diseño, animación, gastronomía, informática, idiomas o mecánica.",
      "segments": [
        {
          "text": "専門学校",
          "furigana": "せんもんがっこう"
        },
        {
          "text": " (2"
        },
        {
          "text": "年",
          "furigana": "ねん"
        },
        {
          "text": ")"
        }
      ],
      "targetKanji": [
        "専",
        "門",
        "学",
        "校",
        "年"
      ]
    },
    {
      "id": "ref-l25-15",
      "lessonId": "l25",
      "category": "Educación y centros formativos",
      "badge": "2〜6 años de duración",
      "japanese": "大学院 (2〜6年)",
      "reading": "だいがくいん (にからろくねん)",
      "romaji": "daigakuin (2-6 nen)",
      "spanish": "Estudios de posgrado (Maestría y Doctorado)",
      "details": "Estudios avanzados tras la universidad: 2 años de maestría (修士課程 / shuushikatei) y 3-4 años de doctorado (博士課程 / hakushikatei).",
      "segments": [
        {
          "text": "大学院",
          "furigana": "だいがくいん"
        },
        {
          "text": " (2〜6"
        },
        {
          "text": "年",
          "furigana": "ねん"
        },
        {
          "text": ")"
        }
      ],
      "targetKanji": [
        "大",
        "学",
        "院",
        "年"
      ]
    },
    {
      "id": "ref-l25-16",
      "lessonId": "l25",
      "category": "Educación y centros formativos",
      "badge": "Graduación",
      "japanese": "学校を出ます",
      "reading": "がっこうをでます",
      "romaji": "gakkou o demasu",
      "spanish": "Graduarse en una escuela / Finalizar los estudios",
      "details": "Expresión equivalente a 卒業します (そつぎょうします). Las graduaciones se celebran en marzo en todo Japón.",
      "segments": [
        {
          "text": "学校",
          "furigana": "がっこう"
        },
        {
          "text": "を"
        },
        {
          "text": "出",
          "furigana": "で"
        },
        {
          "text": "ます"
        }
      ],
      "targetKanji": [
        "学",
        "校",
        "出"
      ]
    },
    {
      "id": "ref-l25-17",
      "lessonId": "l25",
      "category": "Hitos vitales y trayectoria",
      "badge": "Nacimiento",
      "japanese": "生まれます",
      "reading": "うまれます",
      "romaji": "umaremasu",
      "spanish": "Nacer",
      "details": "Llegada al mundo de una nueva persona (verbo intransitivo: que nace).",
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
      "id": "ref-l25-18",
      "lessonId": "l25",
      "category": "Hitos vitales y trayectoria",
      "badge": "Empleo",
      "japanese": "就職します",
      "reading": "しゅうしょくします",
      "romaji": "shuushoku shimasu",
      "spanish": "Entrar en una empresa / Conseguir empleo fijo",
      "details": "El riguroso proceso de contratación de recién graduados universitarios (就職活動 o 就活 / shuukatsu) culmina con la entrada a la compañía el 1 de abril.",
      "segments": [
        {
          "text": "就職",
          "furigana": "しゅうしょく"
        },
        {
          "text": "します"
        }
      ],
      "targetKanji": [
        "就",
        "職"
      ]
    },
    {
      "id": "ref-l25-19",
      "lessonId": "l25",
      "category": "Hitos vitales y trayectoria",
      "badge": "Matrimonio",
      "japanese": "結婚します",
      "reading": "けっこんします",
      "romaji": "kekkon shimasu",
      "spanish": "Casarse / Contraer matrimonio",
      "details": "Unión conyugal formal y registro civil ante el ayuntamiento (婚姻届).",
      "segments": [
        {
          "text": "結婚",
          "furigana": "けっこん"
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
      "id": "ref-l25-20",
      "lessonId": "l25",
      "category": "Hitos vitales y trayectoria",
      "badge": "Hijos",
      "japanese": "子どもが生まれます",
      "reading": "こどもがうまれます",
      "romaji": "kodomo ga umaremasu",
      "spanish": "Tener un hijo(a) / Nacer el hijo",
      "details": "Ampliación del núcleo familiar con el nacimiento de descendientes.",
      "segments": [
        {
          "text": "子",
          "furigana": "こ"
        },
        {
          "text": "どもが"
        },
        {
          "text": "生",
          "furigana": "う"
        },
        {
          "text": "まれます"
        }
      ],
      "targetKanji": [
        "子",
        "生"
      ]
    },
    {
      "id": "ref-l25-21",
      "lessonId": "l25",
      "category": "Hitos vitales y trayectoria",
      "badge": "Separación",
      "japanese": "離婚します",
      "reading": "りこんします",
      "romaji": "rikon shimasu",
      "spanish": "Divorciarse",
      "details": "Disolución legal del matrimonio (presentación del 離婚届).",
      "segments": [
        {
          "text": "離婚",
          "furigana": "りこん"
        },
        {
          "text": "します"
        }
      ],
      "targetKanji": [
        "離",
        "婚"
      ]
    },
    {
      "id": "ref-l25-22",
      "lessonId": "l25",
      "category": "Hitos vitales y trayectoria",
      "badge": "Matrimonio",
      "japanese": "再婚します",
      "reading": "さいこんします",
      "romaji": "saikon shimasu",
      "spanish": "Volver a casarse / Segundas nupcias",
      "details": "Nuevo enlace matrimonial tras enviudar o divorciarse (再: de nuevo, 婚: casamiento).",
      "segments": [
        {
          "text": "再婚",
          "furigana": "さいこん"
        },
        {
          "text": "します"
        }
      ],
      "targetKanji": [
        "再",
        "婚"
      ]
    },
    {
      "id": "ref-l25-23",
      "lessonId": "l25",
      "category": "Hitos vitales y trayectoria",
      "badge": "Jubilación",
      "japanese": "仕事をやめます",
      "reading": "しごとをやめます",
      "romaji": "shigoto o yamemasu",
      "spanish": "Dejar de trabajar / Retirarse, jubilarse",
      "details": "Conclusión de la vida laboral activa. En Japón la edad de retiro formal (定年 / teinen) suele ser entre los 60 y 65 años.",
      "segments": [
        {
          "text": "仕事",
          "furigana": "しごと"
        },
        {
          "text": "をやめます"
        }
      ],
      "targetKanji": [
        "仕",
        "事"
      ]
    },
    {
      "id": "ref-l25-24",
      "lessonId": "l25",
      "category": "Hitos vitales y trayectoria",
      "badge": "Fin de vida",
      "japanese": "死にます",
      "reading": "しにます",
      "romaji": "shinimasu",
      "spanish": "Morir / Fallecer",
      "details": "Conclusión natural del ciclo biológico humano.",
      "segments": [
        {
          "text": "死",
          "furigana": "し"
        },
        {
          "text": "にます"
        }
      ],
      "targetKanji": [
        "死"
      ]
    },
    {
      "id": "ref-l25-25",
      "lessonId": "l25",
      "category": "Esperanza de vida en Japón",
      "badge": "Dato demográfico",
      "japanese": "日本人の平均寿命",
      "reading": "にほんじんのへいきんじゅみょう",
      "romaji": "Nihonjin no heikin jumyou",
      "spanish": "Esperanza de vida de los japoneses: hombres 79,59 años / mujeres 86,44 años",
      "details": "Dato oficial reflejado en Minna no Nihongo (Fuente: Ministerio de Trabajo, Salud y Bienestar de Japón, 2009). Japón ostenta una de las mayores esperanzas de vida del planeta gracias a su dieta equilibrada y sistema de cobertura sanitaria universal.",
      "segments": [
        {
          "text": "日本",
          "furigana": "にほん"
        },
        {
          "text": "人",
          "furigana": "じん"
        },
        {
          "text": "の"
        },
        {
          "text": "平均",
          "furigana": "へいきん"
        },
        {
          "text": "寿命",
          "furigana": "じゅみょう"
        }
      ],
      "targetKanji": [
        "日",
        "本",
        "人",
        "平",
        "均",
        "寿",
        "命"
      ]
    }
  ]
}
];

export function getReferenceLesson(lessonId: string): ReferenceLesson | undefined {
  return REFERENCE_LESSONS.find((l) => l.lessonId === lessonId);
}

export function getAllReferenceLessons(): ReferenceLesson[] {
  return REFERENCE_LESSONS;
}

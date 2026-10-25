export interface KanjiExample {
  kanji: string;
  reading: string;
  romaji: string;
  meaning: string;
}

export interface KanjiItem {
  id: number;
  kanji: string;
  lessonId: string;
  oldLessonId?: string;
  onyomi: string[];
  kunyomi: string[];
  meaning: string;
  strokes: number;
  examples: KanjiExample[];
}

export interface LessonGroup {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  kanjiCount: number;
  pastelColor: {
    bg: string;
    border: string;
    text: string;
    active: string;
  };
}

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

export interface GrammarExampleSegment {
  text: string;
  furigana?: string;
}

export interface GrammarExample {
  japanese: string;
  segments: GrammarExampleSegment[];
  romaji: string;
  spanish: string;
}

export interface GrammarSubPoint {
  title?: string;
  explanation: string;
  examples?: GrammarExample[];
}

export interface GrammarPoint {
  id: string;
  lessonId: string;
  lessonNumber: string;
  order: number;
  title: string;
  explanation: string;
  subPoints?: GrammarSubPoint[];
  examples?: GrammarExample[];
}

export interface ReferenceSegment {
  text: string;
  furigana?: string;
}

export interface ReferenceCountryTriple {
  country: { japanese: string; segments: ReferenceSegment[]; romaji: string; spanish: string };
  nationality: { japanese: string; segments: ReferenceSegment[]; romaji: string; spanish: string };
  language: { japanese: string; segments: ReferenceSegment[]; romaji: string; spanish: string };
  targetKanji: string[];
}

export interface ReferenceItem {
  id: string;
  lessonId: string;
  category?: string;
  japanese: string;
  reading?: string;
  romaji: string;
  spanish: string;
  details?: string;
  badge?: string;
  segments: ReferenceSegment[];
  targetKanji: string[];
  countryTriple?: ReferenceCountryTriple;
}

export interface ReferenceLesson {
  lessonId: string;
  lessonNumber: string;
  topic: string;
  topicJapanese: string;
  topicDescription: string;
  categories: string[];
  items: ReferenceItem[];
}

export type StudyMode = 'kanji' | 'flashcards' | 'sentensu' | 'tango' | 'bunpo' | 'ref';
export type FlashcardSubMode = 'imi' | 'hatsuon' | 'tango' | 'sentensu';

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

export type StudyMode = 'kanji' | 'flashcards' | 'sentensu' | 'tango';
export type FlashcardSubMode = 'imi' | 'hatsuon' | 'tango' | 'sentensu';

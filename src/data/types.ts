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

export type StudyMode = 'kanji' | 'flashcards' | 'sentensu';
export type FlashcardSubMode = 'imi' | 'hatsuon' | 'tango' | 'sentensu';

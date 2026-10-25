import { KanjiItem } from './types';
import { ALL_KANJI } from './kanji_all';

export { ALL_KANJI };

export const KANJI_BY_ID = new Map<number, KanjiItem>(
  ALL_KANJI.map((k) => [k.id, k])
);

export const KANJI_BY_CHAR = new Map<string, KanjiItem>(
  ALL_KANJI.map((k) => [k.kanji, k])
);

export function getKanjiHex(char: string): string {
  const code = char.codePointAt(0);
  if (!code) return '';
  return code.toString(16).toLowerCase().padStart(5, '0');
}

export function getKanjiByLesson(lessonId: string): KanjiItem[] {
  if (lessonId === 'all') return ALL_KANJI;
  return ALL_KANJI.filter((k) => k.lessonId === lessonId);
}

export * from './types';
export * from './lessons';
export { MNN_VOCABULARY, getVocabularyByLesson } from './vocabulary';
export { MNN_GRAMMAR, GRAMMAR_BY_ID, getGrammarByLesson, getGrammarForSentence } from './grammar';
export * from './reference';


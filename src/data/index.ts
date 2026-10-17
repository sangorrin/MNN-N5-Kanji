import { KanjiItem } from './types';
import { KANJI_PRE_04 } from './kanji_pre_04';
import { KANJI_05_10 } from './kanji_05_10';
import { KANJI_11_16 } from './kanji_11_16';
import { KANJI_17_20 } from './kanji_17_20';
import { KANJI_21_25 } from './kanji_21_25';

export const ALL_KANJI: KanjiItem[] = [
  ...KANJI_PRE_04,
  ...KANJI_05_10,
  ...KANJI_11_16,
  ...KANJI_17_20,
  ...KANJI_21_25,
];

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

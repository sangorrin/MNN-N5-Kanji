const STUDY_COUNTS_KEY = 'mnn_kanji_study_counts_v1';
const FAVORITES_KEY = 'mnn_kanji_favorites_v1';
const AUDIO_ENABLED_KEY = 'mnn_kanji_sound_v1';

export type StudyCounts = Record<number, number>;

export function getStudyCounts(): StudyCounts {
  try {
    const raw = localStorage.getItem(STUDY_COUNTS_KEY);
    if (!raw) return {};
    return JSON.parse(raw);
  } catch (e) {
    console.error('Error loading study counts', e);
    return {};
  }
}

export function incrementStudyCount(kanjiId: number): number {
  try {
    const counts = getStudyCounts();
    const current = counts[kanjiId] || 0;
    const next = current + 1;
    counts[kanjiId] = next;
    localStorage.setItem(STUDY_COUNTS_KEY, JSON.stringify(counts));
    return next;
  } catch (e) {
    console.error('Error saving study count', e);
    return 1;
  }
}

export function resetLessonStudyCounts(kanjiIds: number[]): void {
  try {
    const counts = getStudyCounts();
    kanjiIds.forEach((id) => {
      delete counts[id];
    });
    localStorage.setItem(STUDY_COUNTS_KEY, JSON.stringify(counts));
  } catch (e) {
    console.error('Error resetting lesson counts', e);
  }
}

export function resetAllStudyCounts(): void {
  try {
    localStorage.removeItem(STUDY_COUNTS_KEY);
  } catch (e) {
    console.error('Error clearing all counts', e);
  }
}

export function getFavorites(): number[] {
  try {
    const raw = localStorage.getItem(FAVORITES_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function toggleFavorite(kanjiId: number): boolean {
  try {
    const favs = getFavorites();
    const exists = favs.includes(kanjiId);
    const updated = exists ? favs.filter((id) => id !== kanjiId) : [...favs, kanjiId];
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(updated));
    return !exists;
  } catch {
    return false;
  }
}

export function getSoundEnabled(): boolean {
  try {
    const val = localStorage.getItem(AUDIO_ENABLED_KEY);
    return val === null ? true : val === 'true';
  } catch {
    return true;
  }
}

export function setSoundEnabled(enabled: boolean): void {
  try {
    localStorage.setItem(AUDIO_ENABLED_KEY, String(enabled));
  } catch {
    // ignore
  }
}

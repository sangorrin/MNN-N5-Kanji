import React, { useState, useEffect, useMemo } from 'react';
import { ALL_KANJI, getKanjiByLesson, LESSON_GROUPS } from './data';
import { KanjiItem, StudyMode } from './data/types';
import {
  getStudyCounts,
  incrementStudyCount,
  resetLessonStudyCounts,
  resetAllStudyCounts,
  getFavorites,
  toggleFavorite,
} from './utils/storage';
import { Header } from './components/Header';
import { LessonSelector } from './components/LessonSelector';
import { KanjiCard, getPastelStyle } from './components/KanjiCard';
import { KanjiDetailView } from './components/KanjiDetailView';
import { FlashcardsView } from './components/FlashcardsView';
import { SentensuView } from './components/SentensuView';
import { TermsPrivacyModal } from './components/TermsPrivacyModal';
import {
  RotateCcw,
  Search,
  Sparkles,
  BookOpen,
  Palette,
  ShieldCheck,
  Heart,
  HelpCircle,
  X,
  AlertCircle,
} from 'lucide-react';
import { playSoftClick } from './utils/audio';

export default function App() {
  const [selectedLessonId, setSelectedLessonId] = useState<string>('pre');
  const [currentMode, setCurrentMode] = useState<StudyMode>('kanji');
  const [selectedKanji, setSelectedKanji] = useState<KanjiItem | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [studyCounts, setStudyCounts] = useState<Record<number, number>>({});
  const [favorites, setFavorites] = useState<number[]>([]);
  const [onlyFavorites, setOnlyFavorites] = useState<boolean>(false);
  const [pastelHue, setPastelHue] = useState<'sakura' | 'matcha' | 'lavender' | 'sky'>('sakura');
  const [showTermsModal, setShowTermsModal] = useState<boolean>(false);
  const [showResetConfirm, setShowResetConfirm] = useState<boolean>(false);
  const [returnToMode, setReturnToMode] = useState<StudyMode | null>(null);

  // Initialize from localStorage
  useEffect(() => {
    setStudyCounts(getStudyCounts());
    setFavorites(getFavorites());
  }, []);

  // Filter kanji according to lesson, search, and favorites
  const lessonKanji = useMemo(() => {
    return getKanjiByLesson(selectedLessonId);
  }, [selectedLessonId]);

  const displayedKanji = useMemo(() => {
    let list = lessonKanji;

    if (onlyFavorites) {
      list = list.filter((k) => favorites.includes(k.id));
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter((k) => {
        return (
          k.kanji.includes(q) ||
          k.meaning.toLowerCase().includes(q) ||
          k.onyomi.some((o) => o.includes(q)) ||
          k.kunyomi.some((ku) => ku.includes(q)) ||
          k.examples.some(
            (ex) =>
              ex.kanji.includes(q) ||
              ex.reading.includes(q) ||
              ex.romaji.toLowerCase().includes(q) ||
              ex.meaning.toLowerCase().includes(q)
          )
        );
      });
    }

    return list;
  }, [lessonKanji, onlyFavorites, favorites, searchQuery]);

  // Current lesson title
  const currentLessonGroup = useMemo(() => {
    if (selectedLessonId === 'all') {
      return {
        id: 'all',
        title: 'Todos los 218 Kanji',
        shortTitle: 'Todos',
        description: 'Lista completa de los 218 kanji de Minna no Nihongo N5',
        kanjiCount: 218,
        pastelColor: {
          bg: 'bg-slate-50',
          border: 'border-slate-200',
          text: 'text-slate-800',
          active: 'bg-slate-900 text-white',
        },
      };
    }
    return (
      LESSON_GROUPS.find((g) => g.id === selectedLessonId) || LESSON_GROUPS[0]
    );
  }, [selectedLessonId]);

  // Handle Kanji Selection (speak pronunciation, increment counter & go to detail)
  const handleSelectKanji = (kanji: KanjiItem) => {
    playSoftClick();
    const updatedCount = incrementStudyCount(kanji.id);
    setStudyCounts((prev) => ({ ...prev, [kanji.id]: updatedCount }));
    setSelectedKanji(kanji);
  };

  // Toggle Favorite
  const handleToggleFavorite = (kanjiId: number) => {
    toggleFavorite(kanjiId);
    setFavorites(getFavorites());
  };

  // Select kanji by character (e.g. clicked from Sentensu "Kanji de la lección" chips)
  const handleSelectKanjiByChar = (char: string) => {
    const found = ALL_KANJI.find((k) => k.kanji === char);
    if (found) {
      if (currentMode !== 'kanji') {
        setReturnToMode(currentMode);
        setCurrentMode('kanji');
      }
      if (selectedLessonId !== 'all' && found.lessonId !== selectedLessonId) {
        setSelectedLessonId(found.lessonId);
      }
      handleSelectKanji(found);
    }
  };

  // Reset lesson study progress
  const handleConfirmResetLesson = () => {
    const idsToReset = lessonKanji.map((k) => k.id);
    resetLessonStudyCounts(idsToReset);
    setStudyCounts(getStudyCounts());
    setShowResetConfirm(false);
  };

  // Navigation inside detail view (prev / next)
  const currentKanjiIndex = useMemo(() => {
    if (!selectedKanji) return -1;
    return displayedKanji.findIndex((k) => k.id === selectedKanji.id);
  }, [selectedKanji, displayedKanji]);

  const handlePrevKanji = () => {
    if (currentKanjiIndex > 0) {
      const nextKanji = displayedKanji[currentKanjiIndex - 1];
      playSoftClick();
      const updatedCount = incrementStudyCount(nextKanji.id);
      setStudyCounts((prev) => ({ ...prev, [nextKanji.id]: updatedCount }));
      setSelectedKanji(nextKanji);
    }
  };

  const handleNextKanji = () => {
    if (currentKanjiIndex < displayedKanji.length - 1) {
      const nextKanji = displayedKanji[currentKanjiIndex + 1];
      playSoftClick();
      const updatedCount = incrementStudyCount(nextKanji.id);
      setStudyCounts((prev) => ({ ...prev, [nextKanji.id]: updatedCount }));
      setSelectedKanji(nextKanji);
    }
  };

  // Count how many kanji have been studied at least once in this lesson
  const studiedInLessonCount = useMemo(() => {
    return lessonKanji.filter((k) => (studyCounts[k.id] || 0) > 0).length;
  }, [lessonKanji, studyCounts]);

  // Render application
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-slate-800 overflow-x-hidden">
      {/* Header with 2-row mobile layout */}
      <Header
        currentMode={currentMode}
        onSelectMode={(mode) => {
          setSelectedKanji(null);
          setCurrentMode(mode);
        }}
        onOpenTerms={() => setShowTermsModal(true)}
        onlyFavorites={onlyFavorites}
        onToggleFavoritesFilter={() => {
          setSelectedKanji(null);
          setOnlyFavorites(!onlyFavorites);
        }}
        favoritesCount={favorites.length}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-5xl mx-auto px-3 sm:px-6 pt-4 pb-16 overflow-x-hidden">
        {/* If a kanji is selected in Kanji Mode, show Detail View */}
        {selectedKanji && currentMode === 'kanji' ? (
          <KanjiDetailView
            kanji={selectedKanji}
            lessonTitle={currentLessonGroup.title}
            studyCount={studyCounts[selectedKanji.id] || 0}
            isFavorite={favorites.includes(selectedKanji.id)}
            onToggleFavorite={handleToggleFavorite}
            onBack={() => {
              setSelectedKanji(null);
              if (returnToMode) {
                setCurrentMode(returnToMode);
                setReturnToMode(null);
              }
            }}
            onPrevKanji={handlePrevKanji}
            onNextKanji={handleNextKanji}
            hasPrev={currentKanjiIndex > 0}
            hasNext={currentKanjiIndex < displayedKanji.length - 1}
          />
        ) : (
          <>
            {/* Lesson Navigation Selector */}
            <div className="mb-4 sm:mb-6">
              <LessonSelector
                selectedLessonId={selectedLessonId}
                onSelectLesson={(id) => {
                  setSelectedLessonId(id);
                  setSelectedKanji(null);
                }}
                kanjiStudyCounts={studyCounts}
              />
            </div>

            {/* Lesson Banner / Subheader */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 p-4 sm:p-5 rounded-3xl bg-white border border-slate-200/80 shadow-xs mb-5">
              <div>
                <div className="flex items-center gap-2 text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-0.5">
                  <span>Minna no Nihongo N5</span>
                  <span aria-hidden="true">·</span>
                  <span>{currentLessonGroup.shortTitle}</span>
                </div>
                <h1 className="text-lg sm:text-2xl font-bold text-slate-900 tracking-tight">
                  {currentLessonGroup.title}
                </h1>
                <p className="text-xs text-slate-500 mt-0.5">
                  {currentLessonGroup.description}
                </p>
              </div>

              {/* Progress counter & Palette selector */}
              <div className="flex items-center justify-between sm:justify-end gap-3 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100">
                {/* Studied progress */}
                <div className="flex flex-col items-start sm:items-end">
                  <div className="text-xs font-semibold text-slate-600">
                    <span className="text-rose-600 font-bold tabular-nums">
                      {studiedInLessonCount}
                    </span>{' '}
                    / {lessonKanji.length} repasados
                  </div>
                  <div className="w-24 sm:w-28 h-1.5 bg-slate-100 rounded-full mt-1 overflow-hidden">
                    <div
                      className="h-full bg-rose-500 rounded-full transition-all duration-300"
                      style={{
                        width: `${(studiedInLessonCount / lessonKanji.length) * 100}%`,
                      }}
                    />
                  </div>
                </div>

                {/* Pastel Hue Picker */}
                <div className="flex items-center gap-1 p-1 bg-slate-50 rounded-xl border border-slate-200/60">
                  <button
                    onClick={() => setPastelHue('sakura')}
                    className={`w-5 h-5 sm:w-6 sm:h-6 rounded-lg transition-transform ${
                      pastelHue === 'sakura'
                        ? 'ring-2 ring-rose-400 scale-105'
                        : 'opacity-70 hover:opacity-100'
                    }`}
                    style={{ backgroundColor: '#FECDD3' }}
                    title="Pastel Sakura (Rosa)"
                  />
                  <button
                    onClick={() => setPastelHue('matcha')}
                    className={`w-5 h-5 sm:w-6 sm:h-6 rounded-lg transition-transform ${
                      pastelHue === 'matcha'
                        ? 'ring-2 ring-emerald-400 scale-105'
                        : 'opacity-70 hover:opacity-100'
                    }`}
                    style={{ backgroundColor: '#BBF7D0' }}
                    title="Pastel Matcha (Verde)"
                  />
                  <button
                    onClick={() => setPastelHue('lavender')}
                    className={`w-5 h-5 sm:w-6 sm:h-6 rounded-lg transition-transform ${
                      pastelHue === 'lavender'
                        ? 'ring-2 ring-violet-400 scale-105'
                        : 'opacity-70 hover:opacity-100'
                    }`}
                    style={{ backgroundColor: '#DDD6FE' }}
                    title="Pastel Lavanda (Morado)"
                  />
                  <button
                    onClick={() => setPastelHue('sky')}
                    className={`w-5 h-5 sm:w-6 sm:h-6 rounded-lg transition-transform ${
                      pastelHue === 'sky'
                        ? 'ring-2 ring-sky-400 scale-105'
                        : 'opacity-70 hover:opacity-100'
                    }`}
                    style={{ backgroundColor: '#BAE6FD' }}
                    title="Pastel Cielo (Azul)"
                  />
                </div>
              </div>
            </div>

            {/* Mode: FLASHCARDS */}
            {currentMode === 'flashcards' ? (
              <FlashcardsView
                kanjiList={displayedKanji}
                lessonTitle={currentLessonGroup.title}
              />
            ) : currentMode === 'sentensu' ? (
              <SentensuView
                currentLesson={currentLessonGroup}
                onSelectKanji={handleSelectKanjiByChar}
              />
            ) : (
              /* Mode: KANJI LIST */
              <>
                {/* Search Bar & Intensity Legend */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 sm:gap-3 mb-5">
                  {/* Search Input */}
                  <div className="relative flex-1 max-w-md">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Buscar kanji, español (ej: libro, persona) o romaji..."
                      className="w-full bg-white border border-slate-200/90 rounded-2xl py-2 pl-9 pr-8 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-400 shadow-2xs"
                    />
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                      <Search size={15} />
                    </div>
                    {searchQuery && (
                      <button
                        onClick={() => setSearchQuery('')}
                        className="absolute inset-y-0 right-0 pr-2.5 flex items-center text-slate-400 hover:text-slate-600"
                      >
                        <X size={14} />
                      </button>
                    )}
                  </div>

                  {/* Pastel Saturation Legend */}
                  <div className="flex items-center justify-between sm:justify-end gap-2 text-[10px] sm:text-[11px] text-slate-500 bg-white px-3 py-1.5 rounded-2xl border border-slate-200/80 shadow-2xs">
                    <span className="font-medium">Intensidad:</span>
                    <div className="flex items-center gap-1">
                      <div
                        className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-md border border-slate-200 text-center text-[8px] sm:text-[9px] leading-3.5 sm:leading-4"
                        style={{ backgroundColor: '#FFFFFF' }}
                        title="0 estudios"
                      >
                        0
                      </div>
                      <div
                        className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-md border"
                        style={{ ...getPastelStyle(1, pastelHue) }}
                        title="1 estudio"
                      />
                      <div
                        className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-md border"
                        style={{ ...getPastelStyle(3, pastelHue) }}
                        title="3 estudios"
                      />
                      <div
                        className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-md border"
                        style={{ ...getPastelStyle(5, pastelHue) }}
                        title="5+ estudios"
                      />
                    </div>
                    <span className="text-[10px] text-slate-400 ml-0.5">+ saturado</span>
                  </div>
                </div>

                {/* Empty State */}
                {displayedKanji.length === 0 ? (
                  <div className="text-center py-12 bg-white rounded-3xl border border-slate-200/80 p-6 shadow-xs">
                    <p className="text-sm font-semibold text-slate-700">
                      No se encontraron kanji para «{searchQuery}»
                    </p>
                    <p className="text-xs text-slate-400 mt-1">
                      Prueba a buscar por significado en español, romaji o lectura.
                    </p>
                    <button
                      onClick={() => {
                        setSearchQuery('');
                        setOnlyFavorites(false);
                      }}
                      className="mt-4 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-xl transition-colors"
                    >
                      Limpiar filtros
                    </button>
                  </div>
                ) : (
                  /* Grid of Rounded Square Buttons: 3 cols on mobile, 4 on sm, 6 on md, 8 on lg */
                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 sm:gap-3">
                    {displayedKanji.map((kanji) => (
                      <KanjiCard
                        key={kanji.id}
                        kanji={kanji}
                        studyCount={studyCounts[kanji.id] || 0}
                        onSelect={handleSelectKanji}
                        pastelHue={pastelHue}
                      />
                    ))}
                  </div>
                )}

                {/* Bottom Action: Reset Colors of this Lesson */}
                <div className="mt-8 pt-5 border-t border-slate-200/70 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="text-[11px] sm:text-xs text-slate-500 text-center sm:text-left">
                    <span>
                      Toca un kanji para ver sus trazos animados y vocabulario. Cada toque intensifica el color.
                    </span>
                  </div>

                  <button
                    onClick={() => setShowResetConfirm(true)}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-rose-700 hover:text-rose-800 bg-rose-50 hover:bg-rose-100 border border-rose-200/80 rounded-xl transition-colors shadow-2xs"
                  >
                    <RotateCcw size={13} />
                    <span>Reiniciar colores de esta lección</span>
                  </button>
                </div>
              </>
            )}
          </>
        )}
      </main>

      {/* Confirmation Modal to Reset Colors */}
      {showResetConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs">
          <div className="bg-white rounded-3xl p-6 max-w-sm w-full border border-slate-200 shadow-xl">
            <div className="flex items-center gap-2.5 text-rose-600 mb-2">
              <AlertCircle size={20} />
              <h3 className="font-bold text-slate-900 text-base">
                ¿Reiniciar colores?
              </h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Esto restablecerá a blanco el fondo de los kanji de{' '}
              <strong>{currentLessonGroup.title}</strong>. Podrás volver a estudiar desde cero.
            </p>
            <div className="flex items-center justify-end gap-2 mt-5">
              <button
                onClick={() => setShowResetConfirm(false)}
                className="px-3.5 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={handleConfirmResetLesson}
                className="px-4 py-2 text-xs font-semibold text-white bg-rose-600 hover:bg-rose-700 rounded-xl shadow-xs transition-colors"
              >
                Sí, reiniciar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Terms & Privacy Modal */}
      <TermsPrivacyModal
        isOpen={showTermsModal}
        onClose={() => setShowTermsModal(false)}
      />

      {/* Footer */}
      <footer className="w-full bg-white border-t border-slate-200/80 py-5 px-3 sm:px-6 mt-auto">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-center sm:text-left">
            <span>© 2026 MNN N5 kanji</span>
            <span aria-hidden="true">·</span>
            <span className="font-medium text-slate-700">Licencia MIT</span>
            <span aria-hidden="true">·</span>
            <span>KanjiVG (CC BY-SA 3.0)</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowTermsModal(true)}
              className="text-slate-600 hover:text-slate-900 underline font-medium"
            >
              Términos, Privacidad y Licencias
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

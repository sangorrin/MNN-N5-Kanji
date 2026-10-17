import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { KanjiItem, FlashcardSubMode } from '../data/types';
import {
  Shuffle,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  Volume2,
  Sparkles,
  BookOpen,
  VolumeX,
} from 'lucide-react';
import { speakJapanese, playFlipSound, playSoftClick } from '../utils/audio';

interface FlashcardsViewProps {
  kanjiList: KanjiItem[];
  lessonTitle: string;
}

export const FlashcardsView: React.FC<FlashcardsViewProps> = ({
  kanjiList,
  lessonTitle,
}) => {
  const [subMode, setSubMode] = useState<FlashcardSubMode>('imi');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [deck, setDeck] = useState<KanjiItem[]>(kanjiList);
  const [tangoExampleIndex, setTangoExampleIndex] = useState<number>(0);

  // Sync deck when kanjiList changes
  useEffect(() => {
    setDeck([...kanjiList]);
    setCurrentIndex(0);
    setIsFlipped(false);
    setTangoExampleIndex(0);
  }, [kanjiList]);

  // Current Card
  const currentCard = deck[currentIndex] || deck[0];

  // Flip card
  const handleFlip = useCallback(() => {
    playFlipSound();
    setIsFlipped((prev) => !prev);
  }, []);

  // Next card
  const handleNext = useCallback(() => {
    if (currentIndex < deck.length - 1) {
      playSoftClick();
      setIsFlipped(false);
      setTangoExampleIndex(0);
      setCurrentIndex((prev) => prev + 1);
    }
  }, [currentIndex, deck.length]);

  // Previous card
  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      playSoftClick();
      setIsFlipped(false);
      setTangoExampleIndex(0);
      setCurrentIndex((prev) => prev - 1);
    }
  }, [currentIndex]);

  // Shuffle deck
  const handleShuffle = () => {
    playSoftClick();
    const shuffled = [...deck];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setDeck(shuffled);
    setCurrentIndex(0);
    setIsFlipped(false);
    setTangoExampleIndex(0);
  };

  // Reset to original order
  const handleReset = () => {
    playSoftClick();
    setDeck([...kanjiList]);
    setCurrentIndex(0);
    setIsFlipped(false);
    setTangoExampleIndex(0);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        handleFlip();
      } else if (e.key === 'ArrowRight' || e.key === 'j') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'k') {
        e.preventDefault();
        handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleFlip, handleNext, handlePrev]);

  if (!currentCard) {
    return (
      <div className="text-center py-16 text-slate-400">
        No hay kanji disponibles en esta lección.
      </div>
    );
  }

  const currentExample =
    currentCard.examples[tangoExampleIndex] || currentCard.examples[0] || {
      kanji: currentCard.kanji,
      reading: currentCard.kunyomi[0] || currentCard.onyomi[0] || '',
      romaji: '',
      meaning: currentCard.meaning,
    };

  return (
    <div className="w-full max-w-lg mx-auto flex flex-col items-center pb-12 animate-in fade-in duration-200">
      {/* Submode Switcher: Imi, Hatsuon, Tango */}
      <div className="flex items-center gap-1.5 p-1 bg-slate-100/90 rounded-2xl mb-6 shadow-2xs">
        <button
          onClick={() => {
            setSubMode('imi');
            setIsFlipped(false);
          }}
          className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all ${
            subMode === 'imi'
              ? 'bg-white text-rose-700 shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Imi (Significado)
        </button>
        <button
          onClick={() => {
            setSubMode('hatsuon');
            setIsFlipped(false);
          }}
          className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all ${
            subMode === 'hatsuon'
              ? 'bg-white text-rose-700 shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Hatsuon (Lectura On/Kun)
        </button>
        <button
          onClick={() => {
            setSubMode('tango');
            setIsFlipped(false);
          }}
          className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all ${
            subMode === 'tango'
              ? 'bg-white text-rose-700 shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Tango (Vocabulario)
        </button>
      </div>

      {/* Progress & Lesson Info */}
      <div className="w-full flex items-center justify-between text-xs text-slate-500 mb-3 px-2">
        <span className="font-medium">{lessonTitle}</span>
        <span className="font-semibold text-slate-700 tabular-nums">
          Tarjeta {currentIndex + 1} de {deck.length}
        </span>
      </div>

      {/* Progress bar line */}
      <div className="w-full h-1.5 bg-slate-200/80 rounded-full mb-6 overflow-hidden">
        <div
          className="h-full bg-rose-500 transition-all duration-300 rounded-full"
          style={{ width: `${((currentIndex + 1) / deck.length) * 100}%` }}
        />
      </div>

      {/* 3D Flip Flashcard */}
      <div
        className="w-full h-80 sm:h-96 cursor-pointer select-none perspective-1000"
        onClick={handleFlip}
      >
        <div
          className={`relative w-full h-full duration-500 transform-style-3d transition-transform rounded-3xl ${
            isFlipped ? 'rotate-y-180' : ''
          }`}
        >
          {/* FRONT (Anverso - Siempre el Kanji) */}
          <div className="absolute inset-0 backface-hidden bg-white border-2 border-slate-200/90 rounded-3xl p-6 shadow-sm hover:shadow-md flex flex-col justify-between items-center transition-all bg-gradient-to-b from-white via-white to-rose-50/20">
            {/* Top metadata */}
            <div className="w-full flex items-center justify-between text-xs text-slate-400">
              <span className="font-medium">N5 · {currentCard.strokes} trazos</span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  speakJapanese(currentCard.kanji);
                }}
                className="p-2 text-slate-400 hover:text-rose-600 rounded-lg hover:bg-rose-50 transition-colors"
                title="Pronunciación"
              >
                <Volume2 size={18} />
              </button>
            </div>

            {/* Kanji in Center */}
            <div className="flex flex-col items-center justify-center my-auto">
              <span className="text-7xl sm:text-8xl font-serif font-bold text-slate-900 tracking-tight">
                {currentCard.kanji}
              </span>
            </div>

            {/* Hint */}
            <div className="text-xs font-medium text-slate-400">
              Toca para girar la tarjeta
            </div>
          </div>

          {/* BACK (Reverso - Depende del modo: Imi / Hatsuon / Tango) */}
          <div className="absolute inset-0 backface-hidden rotate-y-180 bg-white border-2 border-rose-200/90 rounded-3xl p-6 shadow-sm flex flex-col justify-between items-center bg-gradient-to-b from-rose-50/30 via-white to-rose-50/30">
            {/* Top metadata */}
            <div className="w-full flex items-center justify-between text-xs text-slate-400">
              <span className="font-medium">
                {subMode === 'imi'
                  ? 'Significado (意味)'
                  : subMode === 'hatsuon'
                  ? 'Pronunciación (発音)'
                  : 'Vocabulario (単語)'}
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  if (subMode === 'tango') {
                    speakJapanese(currentExample.reading || currentExample.kanji);
                  } else {
                    speakJapanese(currentCard.kanji);
                  }
                }}
                className="p-2 text-slate-400 hover:text-rose-600 rounded-lg hover:bg-rose-50 transition-colors"
                title="Pronunciación"
              >
                <Volume2 size={18} />
              </button>
            </div>

            {/* Center Content depending on submode */}
            <div className="flex flex-col items-center justify-center my-auto w-full px-2 text-center">
              {/* IMI MODE */}
              {subMode === 'imi' && (
                <div className="flex flex-col items-center gap-3">
                  <span className="text-2xl sm:text-3xl font-bold text-slate-900">
                    {currentCard.meaning}
                  </span>
                  <div className="text-xs text-slate-500 flex flex-wrap justify-center gap-2 mt-1">
                    {currentCard.kunyomi.length > 0 && (
                      <span className="px-2 py-0.5 bg-sky-50 text-sky-800 rounded-md">
                        {currentCard.kunyomi.join(', ')}
                      </span>
                    )}
                    {currentCard.onyomi.length > 0 && (
                      <span className="px-2 py-0.5 bg-rose-50 text-rose-800 rounded-md">
                        {currentCard.onyomi.join(', ')}
                      </span>
                    )}
                  </div>
                </div>
              )}

              {/* HATSUON MODE */}
              {subMode === 'hatsuon' && (
                <div className="flex flex-col items-center gap-3 w-full">
                  <div className="w-full space-y-2">
                    {currentCard.onyomi.length > 0 && (
                      <div className="p-2.5 bg-rose-50/70 border border-rose-100 rounded-xl">
                        <div className="text-[10px] font-semibold text-rose-700 uppercase tracking-wider mb-0.5">
                          On'yomi (音読み)
                        </div>
                        <div className="text-lg font-bold text-slate-900">
                          {currentCard.onyomi.join(' · ')}
                        </div>
                      </div>
                    )}

                    {currentCard.kunyomi.length > 0 && (
                      <div className="p-2.5 bg-sky-50/70 border border-sky-100 rounded-xl">
                        <div className="text-[10px] font-semibold text-sky-700 uppercase tracking-wider mb-0.5">
                          Kun'yomi (訓読み)
                        </div>
                        <div className="text-lg font-bold text-slate-900">
                          {currentCard.kunyomi.join(' · ')}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="text-xs font-semibold text-slate-600 mt-1">
                    Significado: {currentCard.meaning}
                  </div>
                </div>
              )}

              {/* TANGO MODE */}
              {subMode === 'tango' && (
                <div className="flex flex-col items-center gap-2 w-full">
                  <span className="text-3xl sm:text-4xl font-serif font-bold text-slate-900">
                    {currentExample.kanji}
                  </span>
                  <span className="text-base font-semibold text-rose-600">
                    {currentExample.reading}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {currentExample.romaji}
                  </span>
                  <span className="text-sm font-medium text-slate-700 mt-2 bg-slate-100/80 px-3 py-1 rounded-lg">
                    {currentExample.meaning}
                  </span>

                  {/* Multiple examples navigator if available */}
                  {currentCard.examples.length > 1 && (
                    <div
                      className="flex items-center gap-1.5 mt-3 text-[11px] text-slate-400"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span>Ejemplo {tangoExampleIndex + 1} de {currentCard.examples.length}</span>
                      <button
                        onClick={() =>
                          setTangoExampleIndex(
                            (tangoExampleIndex + 1) % currentCard.examples.length
                          )
                        }
                        className="text-xs text-rose-600 hover:underline font-semibold ml-1"
                      >
                        (Ver siguiente)
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Flip back hint */}
            <div className="text-xs font-medium text-slate-400">
              Toca para volver a ver el kanji
            </div>
          </div>
        </div>
      </div>

      {/* Control Buttons (Shuffle, Reset, Prev, Next) */}
      <div className="flex items-center justify-between w-full mt-6 px-1">
        <div className="flex items-center gap-1.5">
          <button
            onClick={handleShuffle}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-700 bg-white hover:bg-slate-50 border border-slate-200/80 rounded-xl shadow-xs transition-colors"
            title="Mezclar tarjetas aleatoriamente"
          >
            <Shuffle size={14} />
            <span>Mezclar</span>
          </button>
          <button
            onClick={handleReset}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-700 bg-white hover:bg-slate-50 border border-slate-200/80 rounded-xl shadow-xs transition-colors"
            title="Reiniciar orden inicial"
          >
            <RotateCcw size={14} />
            <span>Reiniciar</span>
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="flex items-center gap-1 px-3.5 py-2 text-xs font-medium text-slate-700 bg-white hover:bg-slate-50 border border-slate-200/80 rounded-xl shadow-xs disabled:opacity-30 disabled:pointer-events-none transition-colors"
          >
            <ChevronLeft size={16} />
            <span>Anterior</span>
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex >= deck.length - 1}
            className="flex items-center gap-1 px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl shadow-xs disabled:opacity-30 disabled:pointer-events-none transition-colors"
          >
            <span>Siguiente</span>
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Keyboard shortcuts helper */}
      <div className="hidden sm:flex items-center gap-4 text-[11px] text-slate-400 mt-6">
        <span>[Espacio] Girar</span>
        <span>·</span>
        <span>[←] Anterior</span>
        <span>·</span>
        <span>[→] Siguiente</span>
      </div>
    </div>
  );
};

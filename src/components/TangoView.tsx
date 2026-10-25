import React, { useState, useMemo } from 'react';
import { Volume2, BookOpen, ToggleLeft, ToggleRight, Sparkles, ArrowRight, Search, X } from 'lucide-react';
import { VocabularyItem, getVocabularyByLesson } from '../data/vocabulary';
import { LessonGroup } from '../data/types';
import { getKanjiByLesson } from '../data';
import { speakJapanese } from '../utils/audio';

interface TangoViewProps {
  currentLesson: LessonGroup;
  onSelectKanji?: (kanjiChar: string) => void;
  highlightWordId?: string | null;
}

export const TangoView: React.FC<TangoViewProps> = ({
  currentLesson,
  onSelectKanji,
  highlightWordId,
}) => {
  const [showFurigana, setShowFurigana] = useState<boolean>(true);
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Get vocabulary items for active lesson
  const rawWords = useMemo(() => {
    return getVocabularyByLesson(currentLesson.id);
  }, [currentLesson.id]);

  // Set of known kanji in this lesson
  const lessonKanjiSet = useMemo(() => {
    return new Set(getKanjiByLesson(currentLesson.id).map((k) => k.kanji));
  }, [currentLesson.id]);

  // Filter words by search query
  const words = useMemo(() => {
    if (!searchQuery.trim()) return rawWords;
    const q = searchQuery.toLowerCase().trim();
    return rawWords.filter(
      (w) =>
        w.kanji.includes(q) ||
        w.reading.includes(q) ||
        w.romaji.toLowerCase().includes(q) ||
        w.spanish.toLowerCase().includes(q)
    );
  }, [rawWords, searchQuery]);

  const handlePlayWord = (word: VocabularyItem) => {
    setPlayingId(word.id);
    speakJapanese(word.reading || word.kanji);
    setTimeout(() => {
      setPlayingId(null);
    }, 400);
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-5">
      {/* Top Banner & Control Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white/90 backdrop-blur-xs p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-2xs">
        <div className="flex items-center gap-3">
          <div
            className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg ${currentLesson.pastelColor.bg} ${currentLesson.pastelColor.text}`}
          >
            語
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <span>Vocabulario (Tango)</span>
              <span className="text-xs px-2.5 py-0.5 rounded-full font-semibold bg-slate-100 text-slate-700">
                {rawWords.length} {rawWords.length === 1 ? 'palabra' : 'palabras'}
              </span>
            </h2>
            <p className="text-xs text-slate-500">
              {currentLesson.title} · Minna no Nihongo 初級 I
            </p>
          </div>
        </div>

        {/* Action Controls: Furigana Switch */}
        <div className="flex items-center self-end sm:self-auto gap-2">
          <button
            onClick={() => setShowFurigana(!showFurigana)}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all border cursor-pointer ${
              showFurigana
                ? 'bg-rose-50 text-rose-700 border-rose-200 shadow-2xs'
                : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
            }`}
            title="Activar o desactivar lecturas Furigana"
          >
            {showFurigana ? (
              <ToggleRight className="text-rose-600 w-5 h-5" />
            ) : (
              <ToggleLeft className="text-slate-400 w-5 h-5" />
            )}
            <span>Furigana: {showFurigana ? 'Activado' : 'Desactivado'}</span>
          </button>
        </div>
      </div>

      {/* Search Input Filter */}
      <div className="relative max-w-md">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Buscar palabra, español o romaji..."
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

      {/* Empty State */}
      {words.length === 0 && (
        <div className="p-8 text-center bg-white rounded-2xl border border-dashed border-slate-200">
          <BookOpen className="w-10 h-10 text-slate-300 mx-auto mb-2" />
          <p className="text-sm text-slate-600 font-medium">
            {searchQuery
              ? `No se encontraron palabras para «${searchQuery}»`
              : 'No hay palabras registradas para esta lección aún.'}
          </p>
        </div>
      )}

      {/* Words Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {words.map((w, idx) => {
          const isPlaying = playingId === w.id;
          const isHighlighted = highlightWordId === w.id;
          const validKanji = w.targetKanji || [];

          return (
            <div
              key={w.id}
              className={`bg-white rounded-2xl p-4 border transition-all flex flex-col justify-between ${
                isHighlighted
                  ? 'border-rose-400 ring-2 ring-rose-300/60 shadow-md bg-rose-50/20'
                  : 'border-slate-200/90 hover:border-slate-300 shadow-2xs hover:shadow-xs'
              }`}
            >
              {/* Header inside card: Index and quick audio */}
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-slate-100 text-slate-600">
                  #{idx + 1}
                </span>

                <button
                  type="button"
                  onClick={() => handlePlayWord(w)}
                  className={`flex items-center gap-1 px-2.5 py-1 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    isPlaying
                      ? 'bg-rose-600 text-white shadow-xs'
                      : 'bg-rose-50 text-rose-700 hover:bg-rose-100'
                  }`}
                  title="Escuchar pronunciación"
                >
                  <Volume2 size={13} className={isPlaying ? 'animate-pulse' : ''} />
                  <span>Pronunciar</span>
                </button>
              </div>

              {/* Japanese Word with Ruby */}
              <div className="my-2 min-h-[48px] flex items-end">
                <div className="text-xl sm:text-2xl font-semibold text-slate-900 leading-tight font-japanese flex flex-wrap items-end gap-x-1">
                  {w.segments.map((seg, sIdx) => {
                    if (seg.furigana) {
                      return (
                        <ruby
                          key={sIdx}
                          className="inline-flex flex-col items-center justify-end align-bottom leading-none"
                        >
                          {showFurigana && (
                            <rt className="text-[11px] font-normal text-rose-600 leading-none pb-0.5 select-none text-center block">
                              {seg.furigana}
                            </rt>
                          )}
                          <span className="leading-tight">{seg.text}</span>
                        </ruby>
                      );
                    }
                    return (
                      <span key={sIdx} className="leading-tight">
                        {seg.text}
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* Romaji */}
              <div className="text-xs text-slate-400 italic font-sans mb-1.5">
                {w.romaji}
              </div>

              {/* Spanish Translation */}
              <div className="text-xs sm:text-sm text-slate-800 font-medium bg-amber-50/60 p-2 rounded-xl border border-amber-100/70 mb-3">
                {w.spanish}
              </div>

              {/* Kanji de la lección chips */}
              {validKanji.length > 0 && (
                <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center gap-1 mt-auto">
                  <span className="text-[10px] font-semibold text-slate-400 mr-0.5 flex items-center gap-0.5">
                    <Sparkles size={10} className="text-amber-500" />
                    Kanji:
                  </span>
                  {validKanji.map((k) => {
                    const isInCurrentLesson = lessonKanjiSet.has(k);
                    return (
                      <button
                        key={k}
                        type="button"
                        onClick={() => onSelectKanji && onSelectKanji(k)}
                        className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-lg text-xs font-bold border transition-all cursor-pointer shadow-2xs ${
                          isInCurrentLesson
                            ? 'bg-rose-50 hover:bg-rose-100 text-rose-700 border-rose-200'
                            : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                        }`}
                        title={`Ver kanji ${k} en modo Kanji`}
                      >
                        <span className="font-japanese text-xs">{k}</span>
                        <ArrowRight size={10} className="opacity-50" />
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

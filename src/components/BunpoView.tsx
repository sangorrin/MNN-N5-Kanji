import React, { useState, useMemo, useEffect, useRef } from 'react';
import {
  Volume2,
  BookOpen,
  ToggleLeft,
  ToggleRight,
  Search,
  X,
  FileText,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { LessonGroup, GrammarPoint, GrammarExample } from '../data/types';
import { getGrammarByLesson } from '../data';
import { speakJapanese } from '../utils/audio';

interface BunpoViewProps {
  currentLesson: LessonGroup;
  highlightGrammarId?: string | null;
  onSelectKanji?: (kanjiChar: string) => void;
  onNavigateSentensu?: (lessonId: string) => void;
}

export const BunpoView: React.FC<BunpoViewProps> = ({
  currentLesson,
  highlightGrammarId,
  onSelectKanji,
  onNavigateSentensu,
}) => {
  const [showFurigana, setShowFurigana] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [playingKey, setPlayingKey] = useState<string | null>(null);

  const rawGrammarList = useMemo(() => {
    return getGrammarByLesson(currentLesson.id);
  }, [currentLesson.id]);

  const grammarList = useMemo(() => {
    if (!searchQuery.trim()) return rawGrammarList;
    const q = searchQuery.toLowerCase().trim();
    return rawGrammarList.filter((gp) => {
      const titleMatch = gp.title.toLowerCase().includes(q);
      const explMatch = gp.explanation.toLowerCase().includes(q);
      const subPointsMatch = gp.subPoints?.some(
        (sp) =>
          sp.title?.toLowerCase().includes(q) ||
          sp.explanation.toLowerCase().includes(q) ||
          sp.examples?.some(
            (ex) =>
              ex.japanese.toLowerCase().includes(q) ||
              ex.romaji.toLowerCase().includes(q) ||
              ex.spanish.toLowerCase().includes(q)
          )
      );
      const examplesMatch = gp.examples?.some(
        (ex) =>
          ex.japanese.toLowerCase().includes(q) ||
          ex.romaji.toLowerCase().includes(q) ||
          ex.spanish.toLowerCase().includes(q)
      );
      return titleMatch || explMatch || subPointsMatch || examplesMatch;
    });
  }, [rawGrammarList, searchQuery]);

  const cardRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    if (highlightGrammarId && cardRefs.current[highlightGrammarId]) {
      cardRefs.current[highlightGrammarId]?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }, [highlightGrammarId]);

  const handlePlayAudio = (key: string, text: string) => {
    setPlayingKey(key);
    speakJapanese(text);
    setTimeout(() => {
      setPlayingKey(null);
    }, 400);
  };

  const renderExampleBox = (ex: GrammarExample, key: string) => {
    const isPlaying = playingKey === key;

    return (
      <div
        key={key}
        className="p-3 sm:p-3.5 rounded-2xl bg-amber-50/50 border border-amber-200/60 flex flex-col justify-between gap-2 transition-all hover:bg-amber-50/80"
      >
        <div className="flex items-start justify-between gap-2.5">
          <div className="space-y-1">
            {/* Japanese Text with Ruby Furigana */}
            <div className="text-base sm:text-lg font-medium text-slate-900 leading-relaxed font-japanese flex flex-wrap items-end gap-y-1">
              {ex.segments.map((seg, sIdx) => {
                if (seg.furigana) {
                  return (
                    <ruby
                      key={sIdx}
                      className="inline-flex flex-col items-center justify-end align-bottom mx-[2px] leading-none"
                    >
                      {showFurigana && (
                        <rt className="text-[10px] sm:text-[11px] font-normal text-rose-600 leading-none pb-0.5 select-none text-center block">
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

            {/* Romaji */}
            <div className="text-xs text-slate-500 italic font-sans">{ex.romaji}</div>

            {/* Spanish translation */}
            <div className="text-xs sm:text-sm text-slate-800 font-medium">
              {ex.spanish}
            </div>
          </div>

          {/* Audio Button */}
          <button
            type="button"
            onClick={() => handlePlayAudio(key, ex.japanese)}
            className={`p-2 rounded-xl transition-all cursor-pointer shrink-0 ${
              isPlaying
                ? 'bg-rose-600 text-white shadow-xs'
                : 'text-slate-400 hover:text-rose-600 hover:bg-white'
            }`}
            title="Escuchar pronunciación del ejemplo"
            aria-label="Escuchar pronunciación"
          >
            <Volume2 size={16} className={isPlaying ? 'animate-pulse' : ''} />
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-5">
      {/* Top Banner & Control Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white/90 backdrop-blur-xs p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-2xs">
        <div className="flex items-center gap-3">
          <div
            className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg ${currentLesson.pastelColor.bg} ${currentLesson.pastelColor.text}`}
          >
            法
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <span>Gramática (Bunpō)</span>
              <span className="text-xs px-2.5 py-0.5 rounded-full font-semibold bg-slate-100 text-slate-700">
                {rawGrammarList.length} {rawGrammarList.length === 1 ? 'punto' : 'puntos'}
              </span>
            </h2>
            <p className="text-xs text-slate-500">
              {currentLesson.title} · Minna no Nihongo 初級 I (文法解説)
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
            title="Activar o desactivar lecturas Furigana en ejemplos"
          >
            {showFurigana ? (
              <ToggleRight className="text-rose-600 w-5 h-5" />
            ) : (
              <ToggleLeft className="text-slate-400 w-5 h-5" />
            )}
            <span>Furigana (ルビ): {showFurigana ? 'Activado' : 'Desactivado'}</span>
          </button>
        </div>
      </div>

      {/* Search Input Filter */}
      <div className="relative max-w-md">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Buscar punto gramatical, partícula, explicación o ejemplo..."
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
      {grammarList.length === 0 && (
        <div className="p-10 text-center bg-white rounded-3xl border border-dashed border-slate-200 shadow-xs">
          <FileText className="w-12 h-12 text-slate-300 mx-auto mb-3" />
          <p className="text-sm font-semibold text-slate-700">
            {searchQuery
              ? `No se encontraron puntos gramaticales para «${searchQuery}»`
              : 'Puntos gramaticales no cargados para esta lección aún.'}
          </p>
          <p className="text-xs text-slate-400 mt-1 max-w-md mx-auto">
            {searchQuery
              ? 'Prueba a buscar por partículas (は, です, も, の, から, まで, へ, で, を, に, が, て, ない, たら, と, でも) o palabras clave en español.'
              : 'Las notas gramaticales están disponibles para todas las Lecciones (1 a 25 - Minna no Nihongo I completo).'}
          </p>
        </div>
      )}

      {/* Grammar Cards List */}
      <div className="space-y-5">
        {grammarList.map((gp) => {
          const isHighlighted = highlightGrammarId === gp.id;

          return (
            <div
              key={gp.id}
              ref={(el) => {
                cardRefs.current[gp.id] = el;
              }}
              className={`bg-white rounded-3xl p-5 sm:p-7 border transition-all duration-300 relative shadow-xs ${
                isHighlighted
                  ? 'border-rose-400 ring-2 ring-rose-300/80 shadow-md bg-rose-50/10'
                  : 'border-slate-200/90 hover:border-slate-300 hover:shadow-sm'
              }`}
            >
              {/* Card Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-lg bg-rose-50 text-rose-700 font-bold text-xs flex items-center justify-center shrink-0 border border-rose-100">
                    #{gp.order}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight font-japanese">
                    {gp.title}
                  </h3>
                </div>

                <div className="flex items-center gap-2 self-start sm:self-auto">
                  <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600">
                    {gp.lessonNumber}
                  </span>
                  {onNavigateSentensu && (
                    <button
                      type="button"
                      onClick={() => onNavigateSentensu(gp.lessonId)}
                      className="inline-flex items-center gap-1 text-[11px] font-semibold text-rose-600 hover:text-rose-700 hover:underline cursor-pointer"
                      title="Ver frases de esta lección"
                    >
                      <span>Ver frases</span>
                      <ArrowRight size={11} />
                    </button>
                  )}
                </div>
              </div>

              {/* Main Explanation */}
              <div className="py-4 text-sm sm:text-base text-slate-700 leading-relaxed font-sans whitespace-pre-line">
                {gp.explanation}
              </div>

              {/* Direct Examples if any */}
              {gp.examples && gp.examples.length > 0 && (
                <div className="space-y-2.5 pt-2 mb-4">
                  <div className="text-xs font-semibold text-slate-400 flex items-center gap-1">
                    <Sparkles size={11} className="text-amber-500" />
                    <span>Ejemplos:</span>
                  </div>
                  <div className="space-y-2.5">
                    {gp.examples.map((ex, eIdx) =>
                      renderExampleBox(ex, `${gp.id}-ex-${eIdx}`)
                    )}
                  </div>
                </div>
              )}

              {/* Sub-Points (like sub-rules or breakdowns) */}
              {gp.subPoints && gp.subPoints.length > 0 && (
                <div className="space-y-4 pt-3 border-t border-slate-100">
                  {gp.subPoints.map((sp, spIdx) => (
                    <div
                      key={spIdx}
                      className="p-4 sm:p-5 rounded-2xl bg-slate-50/80 border border-slate-200/70 space-y-3"
                    >
                      {sp.title && (
                        <h4 className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2">
                          <span className="w-1.5 h-3.5 bg-rose-500 rounded-full inline-block" />
                          <span>{sp.title}</span>
                        </h4>
                      )}

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed whitespace-pre-line">
                        {sp.explanation}
                      </p>

                      {sp.examples && sp.examples.length > 0 && (
                        <div className="space-y-2 pt-1">
                          <div className="text-[11px] font-semibold text-slate-400 flex items-center gap-1">
                            <Sparkles size={10} className="text-amber-500" />
                            <span>Ejemplos de {sp.title || 'este punto'}:</span>
                          </div>
                          <div className="space-y-2">
                            {sp.examples.map((ex, eIdx) =>
                              renderExampleBox(ex, `${gp.id}-sub-${spIdx}-ex-${eIdx}`)
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

import React, { useState, useMemo } from 'react';
import { Volume2, BookOpen, ToggleLeft, ToggleRight, Sparkles, ArrowRight } from 'lucide-react';
import { SentenceItem, MNN_SENTENCES } from '../data/sentences';
import { LessonGroup } from '../data/types';
import { getKanjiByLesson } from '../data';
import { getVocabularyByLesson, VocabularyItem } from '../data/vocabulary';
import { speakJapanese } from '../utils/audio';

interface SentensuViewProps {
  currentLesson: LessonGroup;
  onSelectKanji?: (kanjiChar: string) => void;
  onSelectTango?: (word: VocabularyItem) => void;
}

export const SentensuView: React.FC<SentensuViewProps> = ({
  currentLesson,
  onSelectKanji,
  onSelectTango,
}) => {
  const [showFurigana, setShowFurigana] = useState<boolean>(true);
  const [playingId, setPlayingId] = useState<string | null>(null);

  // Filter sentences for the active lesson
  const sentences = useMemo(() => {
    if (currentLesson.id === 'all') return MNN_SENTENCES;
    return MNN_SENTENCES.filter((s) => s.lessonId === currentLesson.id);
  }, [currentLesson.id]);

  const lessonKanji = useMemo(() => {
    return new Set(getKanjiByLesson(currentLesson.id).map((item) => item.kanji));
  }, [currentLesson.id]);

  const lessonWords = useMemo(() => {
    return getVocabularyByLesson(currentLesson.id);
  }, [currentLesson.id]);

  const handlePlaySentence = (s: SentenceItem) => {
    setPlayingId(s.id);
    speakJapanese(s.japaneseText);
    setTimeout(() => {
      setPlayingId(null);
    }, 400);
  };

  return (
    <div className="w-full max-w-3xl mx-auto space-y-6">
      {/* Header bar for Sentensu mode */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white/80 backdrop-blur-xs p-4 rounded-2xl border border-slate-200/80 shadow-2xs">
        <div className="flex items-center gap-3">
          <div
            className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg ${currentLesson.pastelColor.bg} ${currentLesson.pastelColor.text}`}
          >
            文
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <span>Frases y Patrones (Sentensu)</span>
              <span className="text-xs px-2 py-0.5 rounded-full font-medium bg-slate-100 text-slate-600">
                {sentences.length} {sentences.length === 1 ? 'oración' : 'oraciones'}
              </span>
            </h2>
            <p className="text-xs text-slate-500">
              {currentLesson.title} · Minna no Nihongo 初級 I (文型 & 例文)
            </p>
          </div>
        </div>

        {/* Furigana ON / OFF Switch */}
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
            <span>Furigana (ルビ): {showFurigana ? 'Activado' : 'Desactivado'}</span>
          </button>
        </div>
      </div>

      {/* Empty State */}
      {sentences.length === 0 && (
        <div className="p-8 text-center bg-white rounded-2xl border border-dashed border-slate-200">
          <BookOpen className="w-10 h-10 text-slate-300 mx-auto mb-2" />
          <p className="text-sm text-slate-600 font-medium">
            No hay oraciones registradas para esta lección aún.
          </p>
        </div>
      )}

      {/* Sentences List */}
      <div className="space-y-4">
        {sentences.map((s, idx) => {
          const isPlaying = playingId === s.id;
          const validKanji = [...new Set(s.targetKanji || [])].filter(
            (kanji) => (currentLesson.id === 'all' || lessonKanji.has(kanji)) && s.japaneseText.includes(kanji)
          );

          // Find vocabulary words from this lesson present in the sentence
          const matchingWords = lessonWords.filter(
            (w) => w.kanji.length > 0 && s.japaneseText.includes(w.kanji)
          );

          return (
            <div
              key={s.id}
              className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-2xs hover:shadow-xs transition-all relative group"
            >
              {/* Top row: badge & audio button */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-lg bg-slate-100 text-slate-700">
                    #{idx + 1} · {s.lessonNumber}
                  </span>
                  <span
                    className={`text-[10px] font-semibold px-2 py-0.5 rounded-lg ${
                      s.section.includes('文型')
                        ? 'bg-rose-50 text-rose-700 border border-rose-100'
                        : 'bg-indigo-50 text-indigo-700 border border-indigo-100'
                    }`}
                  >
                    {s.section}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => handlePlaySentence(s)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                    isPlaying
                      ? 'bg-rose-600 text-white shadow-xs'
                      : 'bg-rose-50 text-rose-700 hover:bg-rose-100'
                  }`}
                  title="Escuchar pronunciación"
                >
                  <Volume2 size={15} className={isPlaying ? 'animate-pulse' : ''} />
                  <span>Escuchar</span>
                </button>
              </div>

              {/* Japanese Sentence with Centered Ruby Furigana */}
              <div className="my-3 text-lg sm:text-xl font-medium text-slate-900 leading-relaxed select-text font-japanese flex flex-wrap items-end gap-y-2">
                {s.segments.map((seg, sIdx) => {
                  if (seg.furigana) {
                    return (
                      <ruby
                        key={sIdx}
                        className="inline-flex flex-col items-center justify-end align-bottom mx-[2px] leading-none"
                      >
                        {showFurigana && (
                          <rt className="text-[10px] sm:text-[11px] font-normal text-rose-600 leading-none pb-1 select-none text-center block">
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
              <div className="text-xs sm:text-sm text-slate-500 italic mb-2 tracking-wide font-sans">
                {s.romaji}
              </div>

              {/* Spanish Translation */}
              <div className="text-sm sm:text-base text-slate-800 font-medium bg-amber-50/50 p-2.5 rounded-xl border border-amber-100/60">
                {s.spanish}
              </div>

              {/* Kanji y vocabulario de la lección */}
              {(validKanji.length > 0 || matchingWords.length > 0) && (
                <div className="mt-3 pt-3 border-t border-slate-100 flex flex-col gap-2">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="text-[11px] font-semibold text-slate-400 mr-1 flex items-center gap-1">
                      <Sparkles size={11} className="text-amber-500" />
                      Kanji y vocabulario de la lección:
                    </span>

                    {/* Kanji Chips */}
                    {validKanji.map((k) => (
                      <button
                        key={k}
                        type="button"
                        onClick={() => onSelectKanji && onSelectKanji(k)}
                        className="group inline-flex items-center gap-1 px-2.5 py-1 rounded-xl text-xs font-bold bg-slate-100 hover:bg-rose-50 text-slate-700 hover:text-rose-700 border border-slate-200/80 hover:border-rose-200 transition-all cursor-pointer shadow-2xs"
                        title={`Ver detalles del kanji ${k} en modo Kanji`}
                      >
                        <span className="font-japanese text-sm">{k}</span>
                        <ArrowRight
                          size={11}
                          className="text-slate-400 group-hover:text-rose-600 transition-transform group-hover:translate-x-0.5"
                        />
                      </button>
                    ))}

                    {/* Vocabulario (Tango) Chips */}
                    {matchingWords.map((w) => (
                      <button
                        key={w.id}
                        type="button"
                        onClick={() => onSelectTango && onSelectTango(w)}
                        className="group inline-flex items-center gap-1 px-2.5 py-1 rounded-xl text-xs font-semibold bg-indigo-50/80 hover:bg-indigo-100 text-indigo-800 border border-indigo-200/80 transition-all cursor-pointer shadow-2xs"
                        title={`Ver palabra «${w.kanji}» (${w.spanish}) en modo Vocabulario`}
                      >
                        <span className="font-japanese text-xs">{w.kanji}</span>
                        <span className="text-[10px] text-indigo-500">({w.reading})</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

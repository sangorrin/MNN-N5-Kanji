import React, { useState } from 'react';
import { KanjiItem } from '../data/types';
import { getKanjiHex } from '../data';
import { MNN_SENTENCES } from '../data/sentences';
import { KanjiSvgPlayer } from './KanjiSvgPlayer';
import { PracticeCanvas } from './PracticeCanvas';
import {
  ArrowLeft,
  Volume2,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  PenTool,
  Film,
  Star,
  CheckCircle2,
} from 'lucide-react';
import { speakJapanese, playSoftClick } from '../utils/audio';

interface KanjiDetailViewProps {
  kanji: KanjiItem;
  lessonTitle: string;
  studyCount: number;
  isFavorite: boolean;
  onToggleFavorite: (id: number) => void;
  onBack: () => void;
  onPrevKanji?: () => void;
  onNextKanji?: () => void;
  hasPrev?: boolean;
  hasNext?: boolean;
}

export const KanjiDetailView: React.FC<KanjiDetailViewProps> = ({
  kanji,
  lessonTitle,
  studyCount,
  isFavorite,
  onToggleFavorite,
  onBack,
  onPrevKanji,
  onNextKanji,
  hasPrev,
  hasNext,
}) => {
  const [activeTab, setActiveTab] = useState<'svg' | 'draw'>('svg');
  const hex = getKanjiHex(kanji.kanji);

  const handleAudioKanji = () => {
    speakJapanese(kanji.kanji);
  };

  const handleAudioWord = (reading: string) => {
    speakJapanese(reading);
  };

  return (
    <div className="w-full max-w-3xl mx-auto pb-12 animate-in fade-in duration-200">
      {/* Top Bar Navigation */}
      <div className="flex items-center justify-between gap-3 mb-6">
        <button
          onClick={() => {
            playSoftClick();
            onBack();
          }}
          className="inline-flex items-center gap-2 px-3.5 py-2 text-sm font-medium text-slate-700 bg-white hover:bg-slate-50 border border-slate-200/80 rounded-xl shadow-xs transition-colors"
        >
          <ArrowLeft size={16} />
          <span>Volver a la lista</span>
        </button>

        {/* Previous / Next Kanji Navigation */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={onPrevKanji}
            disabled={!hasPrev}
            className="p-2 text-slate-600 bg-white hover:bg-slate-50 border border-slate-200/80 rounded-xl shadow-xs disabled:opacity-30 disabled:pointer-events-none transition-colors"
            title="Kanji anterior"
          >
            <ChevronLeft size={18} />
          </button>
          <span className="text-xs font-semibold text-slate-500 px-1.5 tabular-nums">
            #{kanji.id} / 218
          </span>
          <button
            onClick={onNextKanji}
            disabled={!hasNext}
            className="p-2 text-slate-600 bg-white hover:bg-slate-50 border border-slate-200/80 rounded-xl shadow-xs disabled:opacity-30 disabled:pointer-events-none transition-colors"
            title="Siguiente kanji"
          >
            <ChevronRight size={18} />
          </button>

          <button
            onClick={() => onToggleFavorite(kanji.id)}
            className={`p-2 rounded-xl border border-slate-200/80 shadow-xs transition-colors ml-1 ${
              isFavorite
                ? 'bg-amber-50 text-amber-500 border-amber-200'
                : 'bg-white text-slate-400 hover:text-amber-500'
            }`}
            title={isFavorite ? 'Quitar de favoritos' : 'Añadir a favoritos'}
          >
            <Star size={18} fill={isFavorite ? 'currentColor' : 'none'} />
          </button>
        </div>
      </div>

      {/* Main Card */}
      <div className="bg-white rounded-3xl border border-slate-200/80 shadow-sm p-5 sm:p-8">
        {/* Header of the Kanji */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-1">
              <span>{lessonTitle}</span>
              <span aria-hidden="true">·</span>
              <span>Minna no Nihongo N5</span>
              <span aria-hidden="true">·</span>
              <span className="text-emerald-600 font-semibold flex items-center gap-1">
                <CheckCircle2 size={13} />
                {studyCount} {studyCount === 1 ? 'estudio' : 'estudios'}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-3">
              <span>{kanji.meaning}</span>
              <button
                onClick={handleAudioKanji}
                className="p-1.5 text-slate-400 hover:text-rose-600 transition-colors rounded-lg hover:bg-rose-50"
                title="Escuchar pronunciación del kanji"
                aria-label="Escuchar pronunciación"
              >
                <Volume2 size={20} />
              </button>
            </h1>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={`https://jisho.org/search/${encodeURIComponent(kanji.kanji)}%20%23kanji`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-600 bg-slate-50 hover:bg-slate-100 hover:text-slate-900 rounded-lg border border-slate-200/60 transition-colors"
            >
              <span>Jisho.org</span>
              <ExternalLink size={12} />
            </a>
          </div>
        </div>

        {/* Interactive Center Stage: Tabs between Animated KanjiVG SVG & Manual Drawing */}
        <div className="py-6 flex flex-col items-center">
          {/* Mode Switcher */}
          <div className="inline-flex p-1 bg-slate-100/90 rounded-xl mb-5">
            <button
              onClick={() => setActiveTab('svg')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'svg'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Film size={14} />
              <span>Animación de trazos (KanjiVG)</span>
            </button>
            <button
              onClick={() => setActiveTab('draw')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'draw'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <PenTool size={14} />
              <span>Lienzo para practicar trazo</span>
            </button>
          </div>

          {activeTab === 'svg' ? (
            <KanjiSvgPlayer
              kanji={kanji.kanji}
              hex={hex}
              strokesCount={kanji.strokes}
            />
          ) : (
            <PracticeCanvas kanji={kanji.kanji} hex={hex} />
          )}
        </div>

        {/* Cartilla del Kanji: Pronunciaciones Onyomi y Kunyomi */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
          {/* On'yomi */}
          <div className="p-4 rounded-2xl bg-rose-50/60 border border-rose-100/80">
            <div className="flex items-center justify-between text-xs font-semibold text-rose-800 uppercase tracking-wider mb-2">
              <span>On'yomi · 音読み (Chino)</span>
              <span className="text-[11px] text-rose-600/80 font-normal">Katakana</span>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {kanji.onyomi.length > 0 ? (
                kanji.onyomi.map((on, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAudioWord(on)}
                    className="group inline-flex items-center gap-1.5 px-3 py-1 bg-white text-slate-800 rounded-lg text-sm font-semibold border border-rose-200/70 hover:border-rose-400 hover:text-rose-600 transition-colors shadow-2xs"
                  >
                    <span>{on}</span>
                    <Volume2 size={12} className="text-slate-400 group-hover:text-rose-600" />
                  </button>
                ))
              ) : (
                <span className="text-xs text-slate-400 italic">No habitual en N5</span>
              )}
            </div>
          </div>

          {/* Kun'yomi */}
          <div className="p-4 rounded-2xl bg-sky-50/60 border border-sky-100/80">
            <div className="flex items-center justify-between text-xs font-semibold text-sky-800 uppercase tracking-wider mb-2">
              <span>Kun'yomi · 訓読み (Japonés)</span>
              <span className="text-[11px] text-sky-600/80 font-normal">Hiragana</span>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {kanji.kunyomi.length > 0 ? (
                kanji.kunyomi.map((kun, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAudioWord(kun.replace(/[.-]/g, ''))}
                    className="group inline-flex items-center gap-1.5 px-3 py-1 bg-white text-slate-800 rounded-lg text-sm font-semibold border border-sky-200/70 hover:border-sky-400 hover:text-sky-600 transition-colors shadow-2xs"
                  >
                    <span>{kun}</span>
                    <Volume2 size={12} className="text-slate-400 group-hover:text-sky-600" />
                  </button>
                ))
              ) : (
                <span className="text-xs text-slate-400 italic">No habitual en N5</span>
              )}
            </div>
          </div>
        </div>

        {/* Ejemplos de vocabulario de Minna no Nihongo */}
        <div className="mt-8 pt-6 border-t border-slate-100">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-bold text-slate-900 tracking-tight">
              Ejemplos de vocabulario de Minna no Nihongo
            </h2>
            <span className="text-xs text-slate-500">
              {kanji.examples.length} palabras clave
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {kanji.examples.map((item, idx) => (
              <div
                key={idx}
                className="group p-3.5 rounded-2xl bg-slate-50 hover:bg-slate-100/70 border border-slate-200/60 transition-colors flex items-start justify-between gap-3"
              >
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-lg font-serif font-bold text-slate-900">
                      {item.kanji}
                    </span>
                    <span className="text-xs text-rose-600 font-medium">
                      {item.reading}
                    </span>
                  </div>
                  <div className="text-xs font-mono text-slate-400 mt-0.5">
                    {item.romaji}
                  </div>
                  <div className="text-xs font-medium text-slate-700 mt-1">
                    {item.meaning}
                  </div>
                </div>

                <button
                  onClick={() => handleAudioWord(item.reading || item.kanji)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-800 hover:bg-white transition-colors"
                  title={`Escuchar "${item.kanji}"`}
                  aria-label={`Escuchar ${item.kanji}`}
                >
                  <Volume2 size={15} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Oraciones de ejemplo de Minna no Nihongo */}
        {(() => {
          const sentences = MNN_SENTENCES.filter((s) => s.targetKanji?.includes(kanji.kanji));
          if (sentences.length === 0) return null;

          return (
            <div className="mt-8 pt-6 border-t border-slate-100">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-base font-bold text-slate-900 tracking-tight flex items-center gap-2">
                  <span>Oraciones de ejemplo (Minna no Nihongo)</span>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-rose-50 text-rose-700">
                    文型・例文
                  </span>
                </h2>
                <span className="text-xs text-slate-500">
                  {sentences.length} {sentences.length === 1 ? 'frase' : 'frases'}
                </span>
              </div>

              <div className="space-y-3">
                {sentences.map((s) => (
                  <div
                    key={s.id}
                    className="p-4 rounded-2xl bg-amber-50/40 border border-amber-200/60 flex items-start justify-between gap-3"
                  >
                    <div className="space-y-1">
                      <div className="text-xs font-semibold text-rose-700">
                        {s.lessonNumber} · {s.section}
                      </div>
                      <div className="text-base sm:text-lg font-medium text-slate-900 font-japanese flex flex-wrap items-end gap-y-1">
                        {s.segments.map((seg, sIdx) => {
                          if (seg.furigana) {
                            return (
                              <ruby
                                key={sIdx}
                                className="inline-flex flex-col items-center justify-end align-bottom mx-[2px] leading-none"
                              >
                                <rt className="text-[10px] text-rose-600 font-normal leading-none pb-0.5 select-none text-center block">
                                  {seg.furigana}
                                </rt>
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
                      <div className="text-xs text-slate-500 italic">{s.romaji}</div>
                      <div className="text-xs sm:text-sm text-slate-700 font-medium">
                        {s.spanish}
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        speakJapanese(s.japaneseText);
                      }}
                      className="p-2 rounded-xl text-slate-400 hover:text-rose-600 hover:bg-white transition-colors shrink-0"
                      title="Pronunciación"
                    >
                      <Volume2 size={16} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          );
        })()}
      </div>
    </div>
  );
};

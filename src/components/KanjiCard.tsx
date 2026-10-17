import React from 'react';
import { KanjiItem } from '../data/types';
import { Volume2 } from 'lucide-react';
import { speakJapanese, playSoftClick } from '../utils/audio';

interface KanjiCardProps {
  kanji: KanjiItem;
  studyCount: number;
  isSelected?: boolean;
  onSelect: (kanji: KanjiItem) => void;
  pastelHue?: 'sakura' | 'matcha' | 'lavender' | 'sky';
}

/**
 * Calculates pastel background color, border, and text based on study count.
 * More study counts = higher saturation & richness in pastel tones.
 */
export function getPastelStyle(count: number, hue: 'sakura' | 'matcha' | 'lavender' | 'sky' = 'sakura') {
  // Hue definitions
  // sakura: 350 (rose/pink)
  // matcha: 142 (green/tea)
  // lavender: 260 (purple)
  // sky: 205 (blue)
  const hueValue = hue === 'matcha' ? 145 : hue === 'lavender' ? 265 : hue === 'sky' ? 205 : 350;

  if (count === 0) {
    return {
      backgroundColor: '#FFFFFF',
      borderColor: '#E2E8F0',
      color: '#1E293B',
      accentColor: '#94A3B8',
      countBadgeBg: '#F1F5F9',
      countBadgeText: '#64748B',
    };
  }

  // Cap intensity scaling around 6+ studies
  const factor = Math.min(count, 6) / 6; // 0.16 to 1.0

  // Saturation increases from 25% to 75%
  const saturation = Math.round(25 + factor * 50);
  // Lightness shifts from 96% down to 82% (richer pastel tone)
  const lightness = Math.round(96 - factor * 14);
  const borderLightness = Math.round(lightness - 12);

  return {
    backgroundColor: `hsl(${hueValue}, ${saturation}%, ${lightness}%)`,
    borderColor: `hsl(${hueValue}, ${saturation}%, ${borderLightness}%)`,
    color: factor > 0.6 ? `hsl(${hueValue}, 70%, 20%)` : '#1E293B',
    accentColor: `hsl(${hueValue}, 65%, 45%)`,
    countBadgeBg: `hsl(${hueValue}, ${Math.min(90, saturation + 15)}%, ${Math.max(70, lightness - 10)}%)`,
    countBadgeText: `hsl(${hueValue}, 80%, 25%)`,
  };
}

export const KanjiCard: React.FC<KanjiCardProps> = ({
  kanji,
  studyCount,
  isSelected,
  onSelect,
  pastelHue = 'sakura',
}) => {
  const style = getPastelStyle(studyCount, pastelHue);

  const handleClick = () => {
    playSoftClick();
    onSelect(kanji);
  };

  const handleAudio = (e: React.MouseEvent) => {
    e.stopPropagation();
    speakJapanese(kanji.kanji);
  };

  return (
    <button
      onClick={handleClick}
      style={{
        backgroundColor: style.backgroundColor,
        borderColor: isSelected ? style.accentColor : style.borderColor,
      }}
      className={`group relative flex flex-col items-center justify-between p-3 aspect-square rounded-2xl border-2 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-rose-400 select-none ${
        isSelected ? 'ring-2 ring-rose-400 shadow-md' : 'shadow-xs'
      }`}
    >
      {/* Top row: Study count badge & audio quick icon */}
      <div className="w-full flex items-center justify-between text-[11px] leading-none">
        <span
          style={{
            backgroundColor: style.countBadgeBg,
            color: style.countBadgeText,
          }}
          className={`font-semibold px-1.5 py-0.5 rounded-md text-[10px] tabular-nums transition-colors ${
            studyCount === 0 ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'
          }`}
          title={`Estudiado ${studyCount} ${studyCount === 1 ? 'vez' : 'veces'}`}
        >
          {studyCount > 0 ? `×${studyCount}` : '0'}
        </span>

        <button
          onClick={handleAudio}
          className="p-1 rounded-md text-slate-400 hover:text-slate-800 opacity-0 group-hover:opacity-100 transition-opacity"
          title="Escuchar pronunciación"
          aria-label="Escuchar pronunciación"
        >
          <Volume2 size={13} />
        </button>
      </div>

      {/* Center: The Kanji Character */}
      <div className="flex flex-col items-center justify-center my-auto">
        <span
          style={{ color: style.color }}
          className="text-4xl sm:text-5xl font-serif font-bold tracking-tight transition-transform group-hover:scale-105 duration-150"
        >
          {kanji.kanji}
        </span>
      </div>

      {/* Bottom: Spanish meaning and stroke count */}
      <div className="w-full text-center">
        <p className="text-[12px] font-semibold text-slate-700 truncate w-full" title={kanji.meaning}>
          {kanji.meaning}
        </p>
        <div className="flex items-center justify-center gap-1.5 text-[10px] text-slate-500 mt-0.5">
          <span>{kanji.onyomi[0] || kanji.kunyomi[0] || ''}</span>
          <span aria-hidden="true">·</span>
          <span>{kanji.strokes} tr.</span>
        </div>
      </div>
    </button>
  );
};

import React from 'react';
import { StudyMode } from '../data/types';
import {
  BookOpen,
  Sparkles,
  ShieldCheck,
  Star,
} from 'lucide-react';
import { playSoftClick } from '../utils/audio';

interface HeaderProps {
  currentMode: StudyMode;
  onSelectMode: (mode: StudyMode) => void;
  onOpenTerms: () => void;
  onlyFavorites: boolean;
  onToggleFavoritesFilter: () => void;
  favoritesCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  currentMode,
  onSelectMode,
  onOpenTerms,
  onlyFavorites,
  onToggleFavoritesFilter,
  favoritesCount,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 px-3 sm:px-6 py-2.5 sm:py-3.5 select-none shadow-2xs">
      {/* Container: On mobile stacks in two neat rows (Title & Actions on top, Mode tabs below) */}
      <div className="w-full max-w-5xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5 sm:gap-4">

        {/* Row 1 in mobile: Brand Title on left + Sound & Privacy on right */}
        <div className="flex items-center justify-between w-full sm:w-auto">
          {/* Brand Wordmark */}
          <div className="flex items-center gap-2.5 shrink-0">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-rose-400 to-rose-300 flex items-center justify-center text-white shadow-xs font-serif text-lg font-bold">
              漢
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold tracking-tight text-slate-900 leading-tight font-serif">
                MNN N5 kanji
              </span>
              <span className="text-[10px] text-slate-400 leading-none">
                Minna no Nihongo · 218 Kanji
              </span>
            </div>
          </div>

          {/* Quick Actions in Mobile Row 1 */}
          <div className="flex sm:hidden items-center gap-1">
            <button
              onClick={onOpenTerms}
              className="p-1.5 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors"
              title="Términos y Privacidad"
              aria-label="Términos y Privacidad"
            >
              <ShieldCheck size={17} className="text-emerald-600" />
            </button>
          </div>
        </div>

        {/* Row 2 in mobile (underneath title): Navigation mode buttons */}
        <nav className="flex items-center justify-between sm:justify-start gap-1 p-1 bg-slate-100/90 rounded-2xl w-full sm:w-auto">
          <button
            onClick={() => {
              playSoftClick();
              onSelectMode('kanji');
            }}
            className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-xl whitespace-nowrap transition-all ${
              currentMode === 'kanji' && !onlyFavorites
                ? 'bg-white text-rose-700 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <BookOpen size={14} />
            <span>Kanji</span>
          </button>

          <button
            onClick={() => {
              playSoftClick();
              onSelectMode('flashcards');
            }}
            className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-xl whitespace-nowrap transition-all ${
              currentMode === 'flashcards' && !onlyFavorites
                ? 'bg-white text-rose-700 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Sparkles size={14} />
            <span>Flashcards</span>
          </button>

          <button
            onClick={() => {
              playSoftClick();
              onSelectMode('sentensu');
            }}
            className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-xl whitespace-nowrap transition-all ${
              currentMode === 'sentensu' && !onlyFavorites
                ? 'bg-white text-rose-700 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <span className="font-serif font-bold text-xs">文</span>
            <span>Sentensu</span>
          </button>

          <button
            onClick={() => {
              playSoftClick();
              onToggleFavoritesFilter();
            }}
            className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-xl whitespace-nowrap transition-all ${
              onlyFavorites
                ? 'bg-amber-100/90 text-amber-800 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Star size={13} fill={onlyFavorites ? 'currentColor' : 'none'} />
            <span>Favoritos {favoritesCount > 0 ? `(${favoritesCount})` : ''}</span>
          </button>
        </nav>

        {/* Desktop-only actions (Privacy) */}
        <div className="hidden sm:flex items-center gap-1.5 shrink-0">
          <button
            onClick={onOpenTerms}
            className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-colors"
            title="Términos y Privacidad"
          >
            <ShieldCheck size={15} className="text-emerald-600" />
            <span>Privacidad</span>
          </button>
        </div>

      </div>
    </header>
  );
};

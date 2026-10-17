import React from 'react';
import { StudyMode } from '../data/types';
import { BookOpen, Sparkles, Volume2, VolumeX, ShieldCheck, Star } from 'lucide-react';
import { playSoftClick } from '../utils/audio';

interface HeaderProps {
  currentMode: StudyMode;
  onSelectMode: (mode: StudyMode) => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
  onOpenTerms: () => void;
  onlyFavorites: boolean;
  onToggleFavoritesFilter: () => void;
  favoritesCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  currentMode,
  onSelectMode,
  soundEnabled,
  onToggleSound,
  onOpenTerms,
  onlyFavorites,
  onToggleFavoritesFilter,
  favoritesCount,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-md border-b border-slate-200/80 px-4 sm:px-8 py-3.5 flex items-center justify-between gap-4 select-none">
      {/* Zone 1: Brand title, one line */}
      <div className="flex items-center gap-2.5 shrink-0">
        <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-rose-400 to-rose-300 flex items-center justify-center text-white shadow-xs font-serif text-lg font-bold">
          漢
        </div>
        <div className="flex flex-col">
          <span className="text-base sm:text-lg font-bold tracking-tight text-slate-900 whitespace-nowrap leading-none font-serif">
            MNN N5 kanji
          </span>
          <span className="text-[10px] text-slate-400 leading-tight">
            Minna no Nihongo · 218 Kanji
          </span>
        </div>
      </div>

      {/* Zone 2: Navigation Links (single-line, clean typography) */}
      <nav className="flex items-center gap-1 sm:gap-2">
        <button
          onClick={() => {
            playSoftClick();
            onSelectMode('kanji');
          }}
          className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-xl whitespace-nowrap shrink-0 transition-colors ${
            currentMode === 'kanji' && !onlyFavorites
              ? 'bg-rose-50 text-rose-700'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
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
          className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-xl whitespace-nowrap shrink-0 transition-colors ${
            currentMode === 'flashcards'
              ? 'bg-rose-50 text-rose-700'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
          }`}
        >
          <Sparkles size={14} />
          <span>Flashcards</span>
        </button>

        <button
          onClick={() => {
            playSoftClick();
            onToggleFavoritesFilter();
          }}
          className={`hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-xl whitespace-nowrap shrink-0 transition-colors ${
            onlyFavorites
              ? 'bg-amber-100/80 text-amber-800'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
          }`}
        >
          <Star size={13} fill={onlyFavorites ? 'currentColor' : 'none'} />
          <span>Favoritos ({favoritesCount})</span>
        </button>
      </nav>

      {/* Zone 3: Actions (Sound & Terms/Privacy) */}
      <div className="flex items-center gap-1.5 shrink-0">
        <button
          onClick={onToggleSound}
          className="p-2 rounded-xl text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors"
          title={soundEnabled ? 'Silenciar sonidos' : 'Activar sonidos'}
          aria-label="Alternar sonido"
        >
          {soundEnabled ? <Volume2 size={17} /> : <VolumeX size={17} />}
        </button>

        <button
          onClick={onOpenTerms}
          className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-colors"
          title="Términos y Privacidad"
        >
          <ShieldCheck size={15} className="text-emerald-600" />
          <span className="hidden md:inline">Privacidad</span>
        </button>
      </div>
    </header>
  );
};

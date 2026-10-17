import React, { useRef, useEffect } from 'react';
import { LESSON_GROUPS } from '../data/lessons';
import { LessonGroup } from '../data/types';
import { ChevronDown, Layers } from 'lucide-react';
import { playSoftClick } from '../utils/audio';

interface LessonSelectorProps {
  selectedLessonId: string;
  onSelectLesson: (lessonId: string) => void;
  kanjiStudyCounts: Record<number, number>;
}

export const LessonSelector: React.FC<LessonSelectorProps> = ({
  selectedLessonId,
  onSelectLesson,
}) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  // Scroll active item into view on change
  useEffect(() => {
    if (!scrollRef.current) return;
    const activeEl = scrollRef.current.querySelector('[data-active="true"]');
    if (activeEl) {
      activeEl.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }, [selectedLessonId]);

  const handleSelect = (id: string) => {
    playSoftClick();
    onSelectLesson(id);
  };

  return (
    <div className="w-full">
      {/* Mobile Select Dropdown for fast one-tap jump */}
      <div className="md:hidden relative mb-3">
        <select
          value={selectedLessonId}
          onChange={(e) => handleSelect(e.target.value)}
          className="w-full appearance-none bg-white border border-slate-200/90 rounded-2xl py-3 pl-4 pr-10 text-sm font-semibold text-slate-800 shadow-xs focus:outline-none focus:ring-2 focus:ring-rose-400"
        >
          <option value="all">Todos los Kanji (218)</option>
          {LESSON_GROUPS.map((g) => (
            <option key={g.id} value={g.id}>
              {g.title} ({g.kanjiCount} kanji)
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-slate-400">
          <ChevronDown size={18} />
        </div>
      </div>

      {/* Horizontal Scrollable Tabs with pastel accents */}
      <div
        ref={scrollRef}
        className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none no-scrollbar select-none"
      >
        <button
          data-active={selectedLessonId === 'all'}
          onClick={() => handleSelect('all')}
          className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap shrink-0 transition-all ${
            selectedLessonId === 'all'
              ? 'bg-slate-900 text-white shadow-xs'
              : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-50 border border-slate-200/80'
          }`}
        >
          <Layers size={13} />
          <span>Todos (218)</span>
        </button>

        {LESSON_GROUPS.map((lesson) => {
          const isActive = selectedLessonId === lesson.id;
          return (
            <button
              key={lesson.id}
              data-active={isActive}
              onClick={() => handleSelect(lesson.id)}
              className={`px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap shrink-0 transition-all ${
                isActive
                  ? `${lesson.pastelColor.active} shadow-xs font-bold`
                  : `${lesson.pastelColor.bg} ${lesson.pastelColor.text} border ${lesson.pastelColor.border} hover:opacity-90`
              }`}
            >
              <span>{lesson.title}</span>
              <span className="ml-1.5 opacity-60 text-[10px]">({lesson.kanjiCount})</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

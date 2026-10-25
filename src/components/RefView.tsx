import React, { useState, useMemo } from 'react';
import {
  Volume2,
  Search,
  X,
  BookMarked,
  ToggleLeft,
  ToggleRight,
  Globe,
  Info,
  Calendar,
  Phone,
  Building,
  User,
  Utensils,
  Users,
  Palette,
  Music,
  Home,
  Coffee,
  Landmark,
  Building2,
  Train,
  Briefcase,
  CreditCard,
  Activity,
  Footprints,
  Sparkles,
  MessageSquare,
  Award,
  Shirt,
  Navigation,
  Gift,
  Heart,
} from 'lucide-react';
import { LessonGroup, ReferenceLesson, ReferenceItem, ReferenceSegment } from '../data/types';
import { REFERENCE_LESSONS, getReferenceLesson } from '../data/reference';
import { speakJapanese } from '../utils/audio';

interface RefViewProps {
  currentLesson: LessonGroup;
  onSelectKanji?: (kanjiChar: string) => void;
  onSelectLesson?: (lessonId: string) => void;
}

export const RefView: React.FC<RefViewProps> = ({
  currentLesson,
  onSelectKanji,
  onSelectLesson,
}) => {
  const [showFurigana, setShowFurigana] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [playingKey, setPlayingKey] = useState<string | null>(null);

  // If "all" is selected or specific lesson
  const isAllLessons = currentLesson.id === 'all';

  // Current lesson's reference data (if specific lesson)
  const currentRefLesson = useMemo(() => {
    if (isAllLessons) return null;
    return getReferenceLesson(currentLesson.id) || null;
  }, [currentLesson.id, isAllLessons]);

  // Lessons to display
  const activeLessons: ReferenceLesson[] = useMemo(() => {
    if (isAllLessons) {
      return REFERENCE_LESSONS;
    }
    return currentRefLesson ? [currentRefLesson] : [];
  }, [isAllLessons, currentRefLesson]);

  // Available categories for current view
  const availableCategories = useMemo(() => {
    const cats = new Set<string>();
    activeLessons.forEach((l) => l.categories.forEach((c) => cats.add(c)));
    return Array.from(cats);
  }, [activeLessons]);

  // Filter items
  const filterItem = (item: ReferenceItem, query: string, category: string) => {
    if (category !== 'all' && item.category !== category) {
      return false;
    }
    if (!query) return true;
    const q = query.toLowerCase().trim();
    const jpMatch = item.japanese.toLowerCase().includes(q);
    const readingMatch = item.reading?.toLowerCase().includes(q) || false;
    const romajiMatch = item.romaji.toLowerCase().includes(q);
    const spanishMatch = item.spanish.toLowerCase().includes(q);
    const detailsMatch = item.details?.toLowerCase().includes(q) || false;
    const badgeMatch = item.badge?.toLowerCase().includes(q) || false;
    const tripleMatch = item.countryTriple
      ? item.countryTriple.country.spanish.toLowerCase().includes(q) ||
        item.countryTriple.country.japanese.toLowerCase().includes(q) ||
        item.countryTriple.nationality.spanish.toLowerCase().includes(q) ||
        item.countryTriple.nationality.japanese.toLowerCase().includes(q) ||
        item.countryTriple.language.spanish.toLowerCase().includes(q) ||
        item.countryTriple.language.japanese.toLowerCase().includes(q)
      : false;

    return (
      jpMatch ||
      readingMatch ||
      romajiMatch ||
      spanishMatch ||
      detailsMatch ||
      badgeMatch ||
      tripleMatch
    );
  };

  const handlePlayAudio = (key: string, text: string) => {
    setPlayingKey(key);
    speakJapanese(text);
    setTimeout(() => {
      setPlayingKey(null);
    }, 1200);
  };

  // Helper to render text with furigana ruby tags
  const renderFurigana = (segments: ReferenceSegment[]) => {
    return segments.map((seg, idx) => {
      if (showFurigana && seg.furigana) {
        return (
          <ruby
            key={idx}
            className="inline-flex flex-col items-center justify-end align-bottom mx-[2px] leading-none"
          >
            <rt className="text-[10px] sm:text-[11px] font-normal text-rose-600 leading-none pb-0.5 select-none text-center block">
              {seg.furigana}
            </rt>
            <span className="leading-tight">{seg.text}</span>
          </ruby>
        );
      }
      return <span key={idx}>{seg.text}</span>;
    });
  };

  // Topic icon chooser
  const getTopicIcon = (lessonId: string) => {
    switch (lessonId) {
      case 'l01':
        return <Globe size={18} className="text-emerald-600" />;
      case 'l02':
        return <User size={18} className="text-indigo-600" />;
      case 'l03':
        return <Building size={18} className="text-amber-600" />;
      case 'l04':
        return <Phone size={18} className="text-sky-600" />;
      case 'l05':
        return <Calendar size={18} className="text-rose-600" />;
      case 'l06':
        return <Utensils size={18} className="text-orange-600" />;
      case 'l07':
        return <Users size={18} className="text-pink-600" />;
      case 'l08':
        return <Palette size={18} className="text-purple-600" />;
      case 'l09':
        return <Music size={18} className="text-blue-600" />;
      case 'l10':
        return <Home size={18} className="text-teal-600" />;
      case 'l11':
        return <Coffee size={18} className="text-amber-700" />;
      case 'l12':
        return <Landmark size={18} className="text-red-600" />;
      case 'l13':
        return <Building2 size={18} className="text-cyan-600" />;
      case 'l14':
        return <Train size={18} className="text-blue-700" />;
      case 'l15':
        return <Briefcase size={18} className="text-violet-600" />;
      case 'l16':
        return <CreditCard size={18} className="text-emerald-600" />;
      case 'l17':
        return <Activity size={18} className="text-rose-500" />;
      case 'l18':
        return <Footprints size={18} className="text-amber-600" />;
      case 'l19':
        return <Sparkles size={18} className="text-indigo-600" />;
      case 'l20':
        return <MessageSquare size={18} className="text-sky-600" />;
      case 'l21':
        return <Award size={18} className="text-amber-600" />;
      case 'l22':
        return <Shirt size={18} className="text-violet-600" />;
      case 'l23':
        return <Navigation size={18} className="text-blue-600" />;
      case 'l24':
        return <Gift size={18} className="text-rose-600" />;
      case 'l25':
        return <Heart size={18} className="text-emerald-600" />;
      default:
        return <BookMarked size={18} className="text-rose-600" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Controls Bar: Search + Furigana Toggle + Stats */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-white p-3.5 sm:p-4 rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-2xs">
        {/* Search Input */}
        <div className="relative flex-1 max-w-md">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar en referencias (país, apellido, planta, teléfono, festivo)..."
            className="w-full bg-slate-50 hover:bg-white focus:bg-white border border-slate-200/90 rounded-2xl py-2 pl-9 pr-8 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-400 shadow-2xs transition-all"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
            <Search size={15} />
          </div>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 pr-2.5 flex items-center text-slate-400 hover:text-slate-600"
              title="Borrar búsqueda"
            >
              <X size={14} />
            </button>
          )}
        </div>

        {/* Furigana Toggle */}
        <div className="flex items-center justify-between sm:justify-end gap-3">
          <button
            onClick={() => setShowFurigana(!showFurigana)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-semibold transition-all ${
              showFurigana
                ? 'bg-rose-50 text-rose-700 border-rose-200/80 shadow-2xs'
                : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
            }`}
            title="Alternar lectura furigana sobre los kanji"
          >
            {showFurigana ? (
              <ToggleRight size={18} className="text-rose-600" />
            ) : (
              <ToggleLeft size={18} className="text-slate-400" />
            )}
            <span>Furigana</span>
          </button>
        </div>
      </div>

      {/* Category Pills (if multiple categories available) */}
      {availableCategories.length > 1 && (
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3 py-1.5 text-xs font-medium rounded-xl whitespace-nowrap transition-colors ${
              selectedCategory === 'all'
                ? 'bg-slate-900 text-white shadow-2xs'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/80'
            }`}
          >
            Todas las categorías
          </button>
          {availableCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 text-xs font-medium rounded-xl whitespace-nowrap transition-colors ${
                selectedCategory === cat
                  ? 'bg-rose-700 text-white shadow-2xs'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* When current lesson has no reference data yet */}
      {!isAllLessons && !currentRefLesson && (
        <div className="text-center py-12 px-6 bg-white rounded-3xl border border-slate-200/80 shadow-xs max-w-xl mx-auto">
          <div className="w-12 h-12 mx-auto mb-3 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center border border-amber-200">
            <BookMarked size={22} />
          </div>
          <h3 className="font-bold text-slate-800 text-base mb-1">
            Palabras de referencia para {currentLesson.title}
          </h3>
          <p className="text-xs text-slate-500 mb-5 leading-relaxed">
            Las palabras e informaciones de referencia para esta lección se añadirán próximamente.
            Por ahora puedes consultar las lecciones disponibles (1 a 20).
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {REFERENCE_LESSONS.map((rl) => (
              <button
                key={rl.lessonId}
                onClick={() => onSelectLesson && onSelectLesson(rl.lessonId)}
                className="px-3 py-1.5 text-xs font-semibold text-rose-700 bg-rose-50 hover:bg-rose-100 border border-rose-200 rounded-xl transition-colors"
              >
                {rl.lessonNumber}: {rl.topic}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Render Lessons */}
      {activeLessons.map((refLesson) => {
        const matchingItems = refLesson.items.filter((item) =>
          filterItem(item, searchQuery, selectedCategory)
        );

        if (matchingItems.length === 0 && searchQuery) {
          return null;
        }

        const isCountryMode = refLesson.lessonId === 'l01';

        return (
          <section
            key={refLesson.lessonId}
            className="bg-white rounded-3xl border border-slate-200/90 shadow-xs overflow-hidden"
          >
            {/* Topic Header Banner */}
            <div className="p-4 sm:p-5 bg-gradient-to-r from-slate-50 via-white to-rose-50/40 border-b border-slate-200/80">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 bg-white rounded-2xl border border-slate-200 shadow-2xs mt-0.5">
                    {getTopicIcon(refLesson.lessonId)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-2 py-0.5 rounded-md border border-rose-100">
                        {refLesson.lessonNumber}
                      </span>
                      <h2 className="text-base sm:text-lg font-bold text-slate-900">
                        {refLesson.topic}
                      </h2>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs sm:text-sm font-japanese font-medium text-slate-700">
                        {refLesson.topicJapanese}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-start sm:self-center">
                  <span className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2.5 py-1 rounded-xl">
                    {matchingItems.length} {matchingItems.length === 1 ? 'elemento' : 'elementos'}
                  </span>
                </div>
              </div>

              {/* Topic Description / Context Explanation */}
              {refLesson.topicDescription && (
                <div className="mt-3.5 pt-3 border-t border-slate-200/70 text-xs text-slate-600 leading-relaxed flex items-start gap-2 bg-slate-50/60 -mx-1 px-3 py-2 rounded-xl">
                  <Info size={14} className="text-slate-400 shrink-0 mt-0.5" />
                  <span>{refLesson.topicDescription}</span>
                </div>
              )}
            </div>

            {/* Content Items */}
            <div className="p-3 sm:p-5">
              {matchingItems.length === 0 ? (
                <div className="text-center py-8 text-xs text-slate-400">
                  No se encontraron elementos en esta sección con los filtros actuales.
                </div>
              ) : isCountryMode ? (
                /* Specialized 3-part layout for Lesson 1: Country · Nationality · Language */
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {matchingItems.map((item) => {
                    const ct = item.countryTriple;
                    const isPlaying = playingKey === item.id;

                    return (
                      <div
                        key={item.id}
                        className="p-3.5 bg-slate-50/70 hover:bg-white rounded-2xl border border-slate-200/80 hover:border-rose-300 hover:shadow-xs transition-all flex flex-col justify-between"
                      >
                        {/* Header with Country Name in Spanish + Audio */}
                        <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-slate-200/60">
                          <div className="flex items-center gap-2">
                            <span className="text-base">🏳️</span>
                            <span className="text-xs font-bold text-slate-900">
                              {ct ? ct.country.spanish : item.badge || item.spanish}
                            </span>
                          </div>
                          <button
                            onClick={() =>
                              handlePlayAudio(
                                item.id,
                                ct
                                  ? `${ct.country.japanese}。${ct.nationality.japanese}。${ct.language.japanese}`
                                  : item.japanese
                              )
                            }
                            className={`p-1.5 rounded-lg border transition-colors ${
                              isPlaying
                                ? 'bg-rose-100 text-rose-700 border-rose-300 scale-105'
                                : 'text-slate-400 hover:text-slate-700 hover:bg-slate-100 border-slate-200/80'
                            }`}
                            title="Escuchar pronunciación"
                          >
                            <Volume2 size={13} />
                          </button>
                        </div>

                        {/* 3 Rows: Country / Nationality / Language */}
                        {ct && (
                          <div className="space-y-2 text-xs">
                            {/* Country */}
                            <div className="bg-white/80 p-2 rounded-xl border border-slate-200/50 flex items-center justify-between">
                              <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider w-16">
                                País
                              </span>
                              <div className="flex-1 text-right">
                                <span className="font-japanese font-medium text-slate-900">
                                  {renderFurigana(ct.country.segments)}
                                </span>
                                <div className="text-[10px] text-slate-400 font-mono">
                                  {ct.country.romaji}
                                </div>
                              </div>
                            </div>

                            {/* Nationality */}
                            <div className="bg-white/80 p-2 rounded-xl border border-slate-200/50 flex items-center justify-between">
                              <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider w-16">
                                Persona
                              </span>
                              <div className="flex-1 text-right">
                                <span className="font-japanese font-medium text-slate-900">
                                  {renderFurigana(ct.nationality.segments)}
                                </span>
                                <div className="text-[10px] text-slate-400 font-mono">
                                  {ct.nationality.romaji}
                                </div>
                              </div>
                            </div>

                            {/* Language */}
                            <div className="bg-white/80 p-2 rounded-xl border border-slate-200/50 flex items-center justify-between">
                              <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider w-16">
                                Idioma
                              </span>
                              <div className="flex-1 text-right">
                                <span className="font-japanese font-medium text-slate-900">
                                  {renderFurigana(ct.language.segments)}
                                </span>
                                <div className="text-[10px] text-slate-400 font-mono">
                                  {ct.language.romaji}
                                </div>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Kanji Clickable Chips */}
                        {item.targetKanji && item.targetKanji.length > 0 && onSelectKanji && (
                          <div className="mt-3 pt-2.5 border-t border-slate-200/60 flex items-center justify-between gap-1">
                            <span className="text-[10px] text-slate-400 font-medium">Kanji:</span>
                            <div className="flex items-center gap-1 flex-wrap justify-end">
                              {item.targetKanji.map((k) => (
                                <button
                                  key={k}
                                  onClick={() => onSelectKanji(k)}
                                  className="w-6 h-6 rounded-lg bg-white hover:bg-rose-50 text-rose-700 font-japanese font-bold text-xs border border-rose-200/80 shadow-2xs hover:scale-110 transition-all flex items-center justify-center"
                                  title={`Ver detalles de ${k}`}
                                >
                                  {k}
                                </button>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              ) : (
                /* General Grid for Lessons 2 to 5 (Surnames, Floors, Phone/Addresses, Holidays) */
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {matchingItems.map((item) => {
                    const isPlaying = playingKey === item.id;

                    return (
                      <div
                        key={item.id}
                        className="p-3.5 bg-slate-50/70 hover:bg-white rounded-2xl border border-slate-200/80 hover:border-rose-300 hover:shadow-xs transition-all flex flex-col justify-between"
                      >
                        <div>
                          {/* Badge / Category and Audio */}
                          <div className="flex items-center justify-between gap-2 mb-2">
                            {item.badge ? (
                              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-slate-200/70 text-slate-700 rounded-md">
                                {item.badge}
                              </span>
                            ) : item.category ? (
                              <span className="text-[10px] font-medium text-slate-500 bg-white px-2 py-0.5 rounded-md border border-slate-200">
                                {item.category}
                              </span>
                            ) : (
                              <span />
                            )}

                            <button
                              onClick={() => handlePlayAudio(item.id, item.japanese)}
                              className={`p-1.5 rounded-lg border transition-colors ${
                                isPlaying
                                  ? 'bg-rose-100 text-rose-700 border-rose-300 scale-105'
                                  : 'text-slate-400 hover:text-slate-700 hover:bg-slate-100 border-slate-200/80'
                              }`}
                              title="Escuchar pronunciación"
                            >
                              <Volume2 size={13} />
                            </button>
                          </div>

                          {/* Japanese Heading with Furigana */}
                          <div className="mb-1">
                            <span className="text-base sm:text-lg font-japanese font-bold text-slate-900 tracking-wide">
                              {renderFurigana(item.segments)}
                            </span>
                          </div>

                          {/* Romaji */}
                          <div className="text-[11px] font-mono text-slate-500 mb-1.5">
                            {item.romaji}
                          </div>

                          {/* Spanish Meaning */}
                          <div className="text-xs font-semibold text-slate-800 leading-snug">
                            {item.spanish}
                          </div>

                          {/* Context Details (e.g. holiday meaning, surname notes, postal info) */}
                          {item.details && (
                            <div className="text-[11px] text-slate-500 mt-2 bg-white/90 p-2 rounded-xl border border-slate-200/60 leading-relaxed">
                              {item.details}
                            </div>
                          )}
                        </div>

                        {/* Kanji Clickable Chips */}
                        {item.targetKanji && item.targetKanji.length > 0 && onSelectKanji && (
                          <div className="mt-3 pt-2 border-t border-slate-200/60 flex items-center justify-between gap-1">
                            <span className="text-[10px] text-slate-400 font-medium">
                              Kanji:
                            </span>
                            <div className="flex items-center gap-1 flex-wrap justify-end">
                              {item.targetKanji.map((k) => (
                                <button
                                  key={k}
                                  onClick={() => onSelectKanji(k)}
                                  className="w-6 h-6 rounded-lg bg-white hover:bg-rose-50 text-rose-700 font-japanese font-bold text-xs border border-rose-200/80 shadow-2xs hover:scale-110 transition-all flex items-center justify-center"
                                  title={`Ver detalles de ${k}`}
                                >
                                  {k}
                                </button>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </section>
        );
      })}

      {/* Global Empty State when searching */}
      {searchQuery && activeLessons.every((l) => l.items.filter((i) => filterItem(i, searchQuery, selectedCategory)).length === 0) && (
        <div className="text-center py-12 bg-white rounded-3xl border border-slate-200/80 p-6 shadow-xs max-w-md mx-auto">
          <p className="text-sm font-semibold text-slate-700">
            No se encontraron referencias para «{searchQuery}»
          </p>
          <p className="text-xs text-slate-400 mt-1">
            Prueba a buscar por nombre en español, romaji o lectura en japonés.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
            }}
            className="mt-4 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-xl transition-colors"
          >
            Limpiar filtros
          </button>
        </div>
      )}
    </div>
  );
};

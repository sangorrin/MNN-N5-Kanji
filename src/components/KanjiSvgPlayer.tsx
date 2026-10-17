import React, { useEffect, useState, useRef, useMemo } from 'react';
import { Play, Pause, RotateCcw, ChevronLeft, ChevronRight, Eye, EyeOff, Hash, Grid } from 'lucide-react';

interface StrokePath {
  id: string;
  d: string;
  type?: string;
  length?: number;
}

interface StrokeNumber {
  text: string;
  x: number;
  y: number;
  transform?: string;
}

interface KanjiSvgPlayerProps {
  kanji: string;
  hex: string;
  strokesCount: number;
  onStrokeComplete?: () => void;
}

// In-memory cache for fetched SVG content
const svgCache = new Map<string, string>();

export const KanjiSvgPlayer: React.FC<KanjiSvgPlayerProps> = ({
  kanji,
  hex,
  strokesCount,
}) => {
  const [paths, setPaths] = useState<StrokePath[]>([]);
  const [numbers, setNumbers] = useState<StrokeNumber[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Playback state
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [currentStroke, setCurrentStroke] = useState<number>(0);
  const [strokeProgress, setStrokeProgress] = useState<number>(0); // 0 to 1
  const [speed, setSpeed] = useState<number>(1); // 0.5x, 1x, 1.5x
  const [showNumbers, setShowNumbers] = useState<boolean>(true);
  const [showGrid, setShowGrid] = useState<boolean>(true);

  const animationFrameRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);

  // Fetch and parse KanjiVG SVG
  useEffect(() => {
    let isCancelled = false;
    setLoading(true);
    setError(null);
    setCurrentStroke(0);
    setStrokeProgress(0);

    const parseSvg = (svgText: string) => {
      try {
        const parser = new DOMParser();
        const doc = parser.parseFromString(svgText, 'image/svg+xml');

        // Extract paths in order
        const pathElements = doc.querySelectorAll('g[id^="kvg:StrokePaths"] path, path[id*="-s"]');
        const parsedPaths: StrokePath[] = [];

        pathElements.forEach((p, idx) => {
          const d = p.getAttribute('d') || '';
          const id = p.getAttribute('id') || `stroke-${idx + 1}`;
          const type = p.getAttribute('kvg:type') || '';
          if (d) {
            parsedPaths.push({ id, d, type });
          }
        });

        // Extract numbers
        const textElements = doc.querySelectorAll('g[id^="kvg:StrokeNumbers"] text, text');
        const parsedNumbers: StrokeNumber[] = [];

        textElements.forEach((t) => {
          const text = t.textContent?.trim() || '';
          const transform = t.getAttribute('transform') || '';
          const x = parseFloat(t.getAttribute('x') || '0');
          const y = parseFloat(t.getAttribute('y') || '0');
          if (text) {
            parsedNumbers.push({ text, x, y, transform });
          }
        });

        if (!isCancelled) {
          if (parsedPaths.length > 0) {
            setPaths(parsedPaths);
            setNumbers(parsedNumbers);
            setLoading(false);
            setIsPlaying(true);
          } else {
            throw new Error('No paths found in SVG');
          }
        }
      } catch (err) {
        if (!isCancelled) {
          console.warn('KanjiVG SVG parsing error, using fallback:', err);
          setError('No se pudo cargar el SVG animado');
          setLoading(false);
        }
      }
    };

    if (svgCache.has(hex)) {
      parseSvg(svgCache.get(hex)!);
      return;
    }

    const primaryUrl = `https://cdn.jsdelivr.net/gh/KanjiVG/kanjivg@master/kanji/${hex}.svg`;
    const fallbackUrl = `https://raw.githubusercontent.com/KanjiVG/kanjivg/master/kanji/${hex}.svg`;

    fetch(primaryUrl)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.text();
      })
      .catch(() => fetch(fallbackUrl).then((r) => r.text()))
      .then((text) => {
        svgCache.set(hex, text);
        if (!isCancelled) parseSvg(text);
      })
      .catch((err) => {
        if (!isCancelled) {
          console.warn('Failed to fetch KanjiVG SVG:', err);
          setError('No disponible sin conexión');
          setLoading(false);
        }
      });

    return () => {
      isCancelled = true;
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [hex]);

  // Animation Loop
  useEffect(() => {
    if (!isPlaying || paths.length === 0) {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
      lastTimeRef.current = null;
      return;
    }

    const strokeDuration = 800 / speed; // ms per stroke

    const animate = (time: number) => {
      if (lastTimeRef.current === null) {
        lastTimeRef.current = time;
      }
      const delta = time - lastTimeRef.current;
      lastTimeRef.current = time;

      setStrokeProgress((prevProgress) => {
        const nextProgress = prevProgress + delta / strokeDuration;

        if (nextProgress >= 1) {
          // Current stroke finished
          setCurrentStroke((prevStroke) => {
            if (prevStroke + 1 >= paths.length) {
              // Reached end of kanji
              // Pause slightly at end before repeating
              setTimeout(() => {
                setCurrentStroke(0);
                setStrokeProgress(0);
              }, 900);
              return prevStroke;
            }
            return prevStroke + 1;
          });
          return 0;
        }
        return nextProgress;
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isPlaying, paths.length, speed]);

  const totalStrokes = paths.length || strokesCount;

  const handleTogglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleRestart = () => {
    setCurrentStroke(0);
    setStrokeProgress(0);
    setIsPlaying(true);
  };

  const handlePrevStroke = () => {
    setIsPlaying(false);
    setStrokeProgress(1);
    setCurrentStroke((prev) => Math.max(0, prev - 1));
  };

  const handleNextStroke = () => {
    setIsPlaying(false);
    setStrokeProgress(1);
    setCurrentStroke((prev) => Math.min(paths.length - 1, prev + 1));
  };

  return (
    <div className="flex flex-col items-center w-full">
      {/* SVG Canvas Container */}
      <div className="relative w-64 h-64 sm:w-72 sm:h-72 bg-white rounded-3xl p-3 border border-slate-200/80 shadow-sm flex items-center justify-center overflow-hidden select-none">
        {loading ? (
          <div className="flex flex-col items-center justify-center gap-3 text-slate-400">
            <div className="w-10 h-10 border-3 border-rose-200 border-t-rose-500 rounded-full animate-spin" />
            <span className="text-xs font-medium">Cargando trazos de KanjiVG...</span>
          </div>
        ) : error || paths.length === 0 ? (
          /* Offline / fallback static renderer */
          <div className="relative w-full h-full flex flex-col items-center justify-center">
            {showGrid && (
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
                <rect x="0" y="0" width="100" height="100" fill="none" stroke="#f1f5f9" strokeWidth="2" />
                <line x1="50" y1="0" x2="50" y2="100" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="3,3" />
                <line x1="0" y1="50" x2="100" y2="50" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="3,3" />
                <line x1="0" y1="0" x2="100" y2="100" stroke="#f8fafc" strokeWidth="1" strokeDasharray="4,4" />
                <line x1="100" y1="0" x2="0" y2="100" stroke="#f8fafc" strokeWidth="1" strokeDasharray="4,4" />
              </svg>
            )}
            <span className="text-8xl font-serif text-slate-800 leading-none select-none">{kanji}</span>
            <span className="text-xs text-slate-400 mt-3">{strokesCount} trazos</span>
          </div>
        ) : (
          <svg
            viewBox="0 0 109 109"
            className="w-full h-full"
            style={{ shapeRendering: 'geometricPrecision' }}
          >
            {/* Calligraphy Guideline Grid */}
            {showGrid && (
              <g className="opacity-60 pointer-events-none">
                <rect x="2" y="2" width="105" height="105" fill="none" stroke="#e2e8f0" strokeWidth="1" />
                <line x1="54.5" y1="2" x2="54.5" y2="107" stroke="#cbd5e1" strokeWidth="0.8" strokeDasharray="2,2" />
                <line x1="2" y1="54.5" x2="107" y2="54.5" stroke="#cbd5e1" strokeWidth="0.8" strokeDasharray="2,2" />
                <line x1="2" y1="2" x2="107" y2="107" stroke="#f1f5f9" strokeWidth="0.6" strokeDasharray="3,3" />
                <line x1="107" y1="2" x2="2" y2="107" stroke="#f1f5f9" strokeWidth="0.6" strokeDasharray="3,3" />
              </g>
            )}

            {/* 1. Ghost / Target Strokes (in faint soft gray) */}
            <g style={{ fill: 'none', stroke: '#e2e8f0', strokeWidth: 3.2, strokeLinecap: 'round', strokeLinejoin: 'round' }}>
              {paths.map((p) => (
                <path key={`ghost-${p.id}`} d={p.d} />
              ))}
            </g>

            {/* 2. Completed Strokes (in solid charcoal ink) */}
            <g style={{ fill: 'none', stroke: '#1e293b', strokeWidth: 3.5, strokeLinecap: 'round', strokeLinejoin: 'round' }}>
              {paths.slice(0, currentStroke).map((p) => (
                <path key={`done-${p.id}`} d={p.d} />
              ))}
            </g>

            {/* 3. Currently Animating Stroke (in vibrant pastel-rose / crimson ink) */}
            {paths[currentStroke] && (
              <path
                key={`active-${paths[currentStroke].id}`}
                d={paths[currentStroke].d}
                fill="none"
                stroke="#e11d48"
                strokeWidth={3.8}
                strokeLinecap="round"
                strokeLinejoin="round"
                pathLength={100}
                strokeDasharray="100"
                strokeDashoffset={Math.max(0, 100 * (1 - strokeProgress))}
                style={{
                  transition: isPlaying ? 'none' : 'stroke-dashoffset 0.1s ease-out',
                }}
              />
            )}

            {/* 4. Stroke Numbers (optional) */}
            {showNumbers && (
              <g style={{ fontSize: '7.5px', fill: '#94a3b8', fontFamily: 'sans-serif', fontWeight: 600 }}>
                {numbers.slice(0, currentStroke + 1).map((num, i) => (
                  <text
                    key={`num-${i}`}
                    transform={num.transform}
                    x={num.transform ? undefined : num.x}
                    y={num.transform ? undefined : num.y}
                    className="select-none"
                    fill={i === currentStroke ? '#e11d48' : '#64748b'}
                  >
                    {num.text}
                  </text>
                ))}
              </g>
            )}
          </svg>
        )}

        {/* Current Stroke Indicator Pill-free text */}
        <div className="absolute bottom-2.5 right-3 text-[11px] font-medium text-slate-500 tabular-nums">
          Trazo {Math.min(currentStroke + 1, totalStrokes)} / {totalStrokes}
        </div>
      </div>

      {/* Playback & View Controls */}
      <div className="flex flex-wrap items-center justify-between gap-2 w-64 sm:w-72 mt-3 px-1">
        {/* Step backward */}
        <div className="flex items-center gap-1">
          <button
            onClick={handlePrevStroke}
            disabled={currentStroke === 0}
            className="p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 disabled:opacity-30 disabled:pointer-events-none transition-colors"
            title="Trazo anterior"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Play / Pause */}
          <button
            onClick={handleTogglePlay}
            className="px-3.5 py-2 rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition-colors flex items-center gap-1.5 text-xs font-medium shadow-xs"
            title={isPlaying ? 'Pausar' : 'Reproducir'}
          >
            {isPlaying ? (
              <>
                <Pause size={14} />
                <span>Pausa</span>
              </>
            ) : (
              <>
                <Play size={14} />
                <span>Animar</span>
              </>
            )}
          </button>

          {/* Step forward */}
          <button
            onClick={handleNextStroke}
            disabled={currentStroke >= paths.length - 1}
            className="p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 disabled:opacity-30 disabled:pointer-events-none transition-colors"
            title="Siguiente trazo"
          >
            <ChevronRight size={18} />
          </button>

          {/* Restart */}
          <button
            onClick={handleRestart}
            className="p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            title="Reiniciar animación"
          >
            <RotateCcw size={16} />
          </button>
        </div>

        {/* Secondary options: Speed, Grid, Numbers */}
        <div className="flex items-center gap-1">
          {/* Speed button cycles 0.5x -> 1x -> 1.5x */}
          <button
            onClick={() => setSpeed(speed === 0.5 ? 1 : speed === 1 ? 1.5 : 0.5)}
            className="px-2 py-1 rounded-lg text-xs font-semibold text-slate-600 hover:bg-slate-100 transition-colors"
            title="Cambiar velocidad"
          >
            {speed}x
          </button>

          {/* Toggle Numbers */}
          <button
            onClick={() => setShowNumbers(!showNumbers)}
            className={`p-1.5 rounded-lg text-xs transition-colors ${
              showNumbers ? 'text-rose-600 bg-rose-50' : 'text-slate-400 hover:text-slate-600'
            }`}
            title={showNumbers ? 'Ocultar números de trazo' : 'Mostrar números de trazo'}
          >
            <Hash size={15} />
          </button>

          {/* Toggle Grid */}
          <button
            onClick={() => setShowGrid(!showGrid)}
            className={`p-1.5 rounded-lg text-xs transition-colors ${
              showGrid ? 'text-rose-600 bg-rose-50' : 'text-slate-400 hover:text-slate-600'
            }`}
            title={showGrid ? 'Ocultar cuadrícula guía' : 'Mostrar cuadrícula guía'}
          >
            <Grid size={15} />
          </button>
        </div>
      </div>
    </div>
  );
};

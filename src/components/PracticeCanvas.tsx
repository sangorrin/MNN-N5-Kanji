import React, { useRef, useState, useEffect } from 'react';
import { RotateCcw, Undo2, Eye, EyeOff, Hash } from 'lucide-react';
import { fetchKanjiSvg, StrokePath, StrokeNumber } from '../utils/kanjiSvg';

interface PracticeCanvasProps {
  kanji: string;
  hex: string;
}

export const PracticeCanvas: React.FC<PracticeCanvasProps> = ({ kanji, hex }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [history, setHistory] = useState<ImageData[]>([]);
  const [showGuide, setShowGuide] = useState(true);
  const [showNumbers, setShowNumbers] = useState(true);
  const [strokeWidth, setStrokeWidth] = useState<number>(4); // Fine stroke by default

  // KanjiVG guide paths and numbers
  const [guidePaths, setGuidePaths] = useState<StrokePath[]>([]);
  const [guideNumbers, setGuideNumbers] = useState<StrokeNumber[]>([]);

  // Load KanjiVG SVG paths so the guide matches the animation 1:1
  useEffect(() => {
    let isCancelled = false;
    fetchKanjiSvg(hex)
      .then(({ paths, numbers }) => {
        if (!isCancelled) {
          setGuidePaths(paths);
          setGuideNumbers(numbers);
        }
      })
      .catch((err) => {
        console.warn('Failed to load KanjiVG paths for canvas guide:', err);
      });

    return () => {
      isCancelled = true;
    };
  }, [hex]);

  const initCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Handle high DPI
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.lineWidth = strokeWidth;
    ctx.strokeStyle = '#1e293b';

    // Save initial blank state
    setHistory([ctx.getImageData(0, 0, canvas.width, canvas.height)]);
  };

  useEffect(() => {
    initCanvas();
  }, [kanji]);

  // Update stroke width dynamically on canvas context
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.lineWidth = strokeWidth;
  }, [strokeWidth]);

  const getPos = (e: React.MouseEvent | React.TouchEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    if ('touches' in e && e.touches.length > 0) {
      return {
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top,
      };
    }
    const mouseEvent = e as React.MouseEvent;
    return {
      x: mouseEvent.clientX - rect.left,
      y: mouseEvent.clientY - rect.top,
    };
  };

  const startDrawing = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.lineWidth = strokeWidth;
    ctx.strokeStyle = '#1e293b';
    const { x, y } = getPos(e);
    setIsDrawing(true);
    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const draw = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDrawing) return;
    e.preventDefault();
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const { x, y } = getPos(e);
    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    if (!isDrawing) return;
    setIsDrawing(false);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Push state into history
    const snap = ctx.getImageData(0, 0, canvas.width, canvas.height);
    setHistory((prev) => [...prev.slice(-15), snap]);
  };

  const handleClear = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const snap = ctx.getImageData(0, 0, canvas.width, canvas.height);
    setHistory([snap]);
  };

  const handleUndo = () => {
    if (history.length <= 1) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const nextHistory = [...history];
    nextHistory.pop();
    const prevState = nextHistory[nextHistory.length - 1];
    ctx.putImageData(prevState, 0, 0);
    setHistory(nextHistory);
  };

  return (
    <div className="flex flex-col items-center w-full">
      {/* Box container matches exact dimensions of KanjiSvgPlayer */}
      <div className="relative w-64 h-64 sm:w-72 sm:h-72 bg-white rounded-3xl p-3 border border-slate-200/80 shadow-sm overflow-hidden touch-none select-none flex items-center justify-center">
        {/* Calligraphy Guideline Grid & KanjiVG Stroke Guide (1:1 with Animation) */}
        <svg
          viewBox="0 0 109 109"
          className="absolute inset-0 w-full h-full pointer-events-none p-3"
          style={{ shapeRendering: 'geometricPrecision' }}
        >
          {/* 4-Quadrant Japanese Grid */}
          <g className="opacity-60">
            <rect x="2" y="2" width="105" height="105" fill="none" stroke="#e2e8f0" strokeWidth="1" />
            <line x1="54.5" y1="2" x2="54.5" y2="107" stroke="#cbd5e1" strokeWidth="0.8" strokeDasharray="2,2" />
            <line x1="2" y1="54.5" x2="107" y2="54.5" stroke="#cbd5e1" strokeWidth="0.8" strokeDasharray="2,2" />
            <line x1="2" y1="2" x2="107" y2="107" stroke="#f1f5f9" strokeWidth="0.6" strokeDasharray="3,3" />
            <line x1="107" y1="2" x2="2" y2="107" stroke="#f1f5f9" strokeWidth="0.6" strokeDasharray="3,3" />
          </g>

          {/* Kanji Guide Template: Exact 1:1 KanjiVG vector paths matching animation */}
          {showGuide && (
            <>
              {guidePaths.length > 0 ? (
                <g style={{ fill: 'none', stroke: '#cbd5e1', strokeWidth: 3.5, strokeLinecap: 'round', strokeLinejoin: 'round' }}>
                  {guidePaths.map((p) => (
                    <path key={`guide-${p.id}`} d={p.d} />
                  ))}
                </g>
              ) : (
                /* Fallback centered glyph if SVG paths are still fetching */
                <text
                  x="54.5"
                  y="83"
                  textAnchor="middle"
                  fontSize="74"
                  fontFamily="serif"
                  fill="#cbd5e1"
                  className="select-none font-bold"
                >
                  {kanji}
                </text>
              )}

              {/* Stroke numbers on the guide (enabled by default so students follow the correct order) */}
              {showNumbers && guideNumbers.length > 0 && (
                <g style={{ fontSize: '7.5px', fill: '#e11d48', fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 700 }}>
                  {guideNumbers.map((num, i) => (
                    <text
                      key={`guide-num-${i}`}
                      transform={num.transform}
                      x={num.transform ? undefined : num.x}
                      y={num.transform ? undefined : num.y}
                      fill="#e11d48"
                      stroke="#ffffff"
                      strokeWidth="1.2px"
                      paintOrder="stroke"
                      strokeLinejoin="round"
                    >
                      {num.text}
                    </text>
                  ))}
                </g>
              )}
            </>
          )}
        </svg>

        {/* Tracing Canvas Overlay */}
        <canvas
          ref={canvasRef}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          onTouchStart={startDrawing}
          onTouchMove={draw}
          onTouchEnd={stopDrawing}
          className="absolute inset-0 w-full h-full cursor-crosshair z-10"
        />

        <div className="absolute bottom-2.5 right-3 text-[11px] font-medium text-slate-400 pointer-events-none z-20">
          Trazo fino · Dibuja aquí
        </div>
      </div>

      {/* Canvas Actions & Controls */}
      <div className="flex flex-wrap items-center justify-between w-64 sm:w-72 mt-3 px-1 gap-2 text-xs">
        <div className="flex items-center gap-1">
          <button
            onClick={handleUndo}
            disabled={history.length <= 1}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-slate-600 hover:bg-slate-100 disabled:opacity-30 disabled:pointer-events-none transition-colors"
            title="Deshacer último trazo"
          >
            <Undo2 size={13} />
            <span>Deshacer</span>
          </button>
          <button
            onClick={handleClear}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors"
            title="Borrar lienzo"
          >
            <RotateCcw size={13} />
            <span>Borrar</span>
          </button>
        </div>

        {/* Stroke thickness selector */}
        <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl">
          <button
            onClick={() => setStrokeWidth(3)}
            className={`px-2 py-0.5 rounded-lg text-[10px] font-semibold transition-colors ${
              strokeWidth === 3 ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-500 hover:text-slate-800'
            }`}
            title="Grosor fino (3px)"
          >
            Fino
          </button>
          <button
            onClick={() => setStrokeWidth(5)}
            className={`px-2 py-0.5 rounded-lg text-[10px] font-semibold transition-colors ${
              strokeWidth === 5 ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-500 hover:text-slate-800'
            }`}
            title="Grosor medio (5px)"
          >
            Medio
          </button>
        </div>

        <div className="flex items-center gap-1">
          {/* Numbers toggle */}
          {guideNumbers.length > 0 && (
            <button
              onClick={() => setShowNumbers(!showNumbers)}
              className={`p-1.5 rounded-xl transition-colors ${
                showNumbers ? 'text-rose-600 bg-rose-50' : 'text-slate-400 hover:text-slate-600'
              }`}
              title={showNumbers ? 'Ocultar orden numérico' : 'Mostrar orden numérico'}
            >
              <Hash size={14} />
            </button>
          )}

          {/* Guide template toggle */}
          <button
            onClick={() => setShowGuide(!showGuide)}
            className={`flex items-center gap-1 px-2 py-1.5 rounded-xl transition-colors ${
              showGuide ? 'text-rose-600 bg-rose-50' : 'text-slate-500 hover:bg-slate-100'
            }`}
            title={showGuide ? 'Ocultar plantilla guía' : 'Mostrar plantilla guía'}
          >
            {showGuide ? <Eye size={13} /> : <EyeOff size={13} />}
            <span>Guía</span>
          </button>
        </div>
      </div>
    </div>
  );
};

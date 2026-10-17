import React, { useRef, useState, useEffect } from 'react';
import { RotateCcw, Undo2, Eye, EyeOff } from 'lucide-react';

interface PracticeCanvasProps {
  kanji: string;
}

export const PracticeCanvas: React.FC<PracticeCanvasProps> = ({ kanji }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [history, setHistory] = useState<ImageData[]>([]);
  const [showGuide, setShowGuide] = useState(true);

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
    ctx.lineWidth = 9;
    ctx.strokeStyle = '#1e293b';

    // Save initial blank state
    setHistory([ctx.getImageData(0, 0, canvas.width, canvas.height)]);
  };

  useEffect(() => {
    initCanvas();
  }, [kanji]);

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
      <div className="relative w-64 h-64 sm:w-72 sm:h-72 bg-white rounded-3xl border border-slate-200/80 shadow-sm overflow-hidden touch-none select-none">
        {/* Japanese Calligraphy 4-quadrant grid */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
          <rect x="2" y="2" width="96" height="96" fill="none" stroke="#e2e8f0" strokeWidth="1" />
          <line x1="50" y1="2" x2="50" y2="98" stroke="#cbd5e1" strokeWidth="0.8" strokeDasharray="3,3" />
          <line x1="2" y1="50" x2="98" y2="50" stroke="#cbd5e1" strokeWidth="0.8" strokeDasharray="3,3" />
          <line x1="2" y1="2" x2="98" y2="98" stroke="#f1f5f9" strokeWidth="0.6" strokeDasharray="4,4" />
          <line x1="98" y1="2" x2="2" y2="98" stroke="#f1f5f9" strokeWidth="0.6" strokeDasharray="4,4" />
        </svg>

        {/* Faint guide template */}
        {showGuide && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none text-slate-200 font-serif text-8xl opacity-40">
            {kanji}
          </div>
        )}

        {/* Tracing Canvas */}
        <canvas
          ref={canvasRef}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          onTouchStart={startDrawing}
          onTouchMove={draw}
          onTouchEnd={stopDrawing}
          className="absolute inset-0 w-full h-full cursor-crosshair"
        />

        <div className="absolute bottom-2.5 right-3 text-[11px] font-medium text-slate-400 pointer-events-none">
          Dibuja con tu dedo o ratón
        </div>
      </div>

      {/* Canvas Actions */}
      <div className="flex items-center justify-between w-64 sm:w-72 mt-3 px-1 text-xs">
        <div className="flex items-center gap-1.5">
          <button
            onClick={handleUndo}
            disabled={history.length <= 1}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-slate-600 hover:bg-slate-100 disabled:opacity-30 disabled:pointer-events-none transition-colors"
          >
            <Undo2 size={14} />
            <span>Deshacer</span>
          </button>
          <button
            onClick={handleClear}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors"
          >
            <RotateCcw size={14} />
            <span>Borrar</span>
          </button>
        </div>

        <button
          onClick={() => setShowGuide(!showGuide)}
          className={`flex items-center gap-1 px-2.5 py-1.5 rounded-xl transition-colors ${
            showGuide ? 'text-rose-600 bg-rose-50' : 'text-slate-500 hover:bg-slate-100'
          }`}
        >
          {showGuide ? <Eye size={14} /> : <EyeOff size={14} />}
          <span>Plantilla</span>
        </button>
      </div>
    </div>
  );
};

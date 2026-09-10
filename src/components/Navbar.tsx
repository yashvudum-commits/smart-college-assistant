import React, { useState, useEffect } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  LayoutGrid, 
  FileText, 
  Play, 
  Pause, 
  RotateCcw, 
  Maximize2, 
  Minimize2, 
  Printer, 
  Sparkles, 
  Bot,
  Flame,
  HelpCircle
} from 'lucide-react';
import { SLIDES_METADATA } from '../data/slidesData';

interface NavbarProps {
  currentSlide: number;
  totalSlides: number;
  onPrev: () => void;
  onNext: () => void;
  onOpenGrid: () => void;
  onOpenNotes: () => void;
  onOpenDemo: () => void;
  onPrint: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentSlide,
  totalSlides,
  onPrev,
  onNext,
  onOpenGrid,
  onOpenNotes,
  onOpenDemo,
  onPrint,
}) => {
  // 3-minute hackathon pitch timer
  const [seconds, setSeconds] = useState(180);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isTimerRunning && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((prev) => prev - 1);
      }, 1000);
    } else if (seconds === 0) {
      setIsTimerRunning(false);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, seconds]);

  const toggleTimer = () => setIsTimerRunning(!isTimerRunning);
  const resetTimer = () => {
    setIsTimerRunning(false);
    setSeconds(180);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
        setIsFullscreen(false);
      }
    }
  };

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const rem = secs % 60;
    return `${mins}:${rem < 10 ? '0' : ''}${rem}`;
  };

  const currentMeta = SLIDES_METADATA.find(s => s.number === currentSlide);

  return (
    <header className="h-16 bg-slate-950/95 border-b border-slate-800/80 px-4 sm:px-6 flex items-center justify-between relative z-30 select-none backdrop-blur-md no-print">
      {/* Left: Branding & Current Slide Name */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-cyan-400 flex items-center justify-center text-white shadow-md">
            <Bot className="w-4 h-4" />
          </div>
          <div className="hidden sm:block">
            <h1 className="text-xs font-bold text-white tracking-tight flex items-center gap-1.5 font-display">
              Smart College Assistant
              <span className="text-[9px] px-1.5 py-0.2 rounded bg-indigo-500/20 text-indigo-300 font-mono">HACKATHON</span>
            </h1>
            <p className="text-[10px] text-slate-400 truncate max-w-[200px]">
              {currentMeta?.title}
            </p>
          </div>
        </div>

        {/* Slide Counter Badge */}
        <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
          <span className="text-indigo-400 font-bold">{currentSlide}</span>
          <span className="text-slate-600">/</span>
          <span>{totalSlides}</span>
        </div>
      </div>

      {/* Center: Slide Progress Pill & Prev/Next navigation */}
      <div className="flex items-center gap-1 sm:gap-2">
        <button
          id="nav-prev-slide-btn"
          onClick={onPrev}
          disabled={currentSlide === 1}
          className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 disabled:opacity-30 text-slate-300 hover:text-white border border-slate-800 transition-all cursor-pointer"
          title="Previous Slide (Left Arrow)"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Visual Progress Dots */}
        <div className="hidden md:flex items-center gap-1.5 px-2">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all ${
                i + 1 === currentSlide
                  ? 'w-6 bg-gradient-to-r from-indigo-500 to-cyan-400'
                  : i + 1 < currentSlide
                  ? 'w-2 bg-indigo-700/60'
                  : 'w-2 bg-slate-800'
              }`}
            />
          ))}
        </div>

        <button
          id="nav-next-slide-btn"
          onClick={onNext}
          disabled={currentSlide === totalSlides}
          className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 disabled:opacity-30 text-slate-300 hover:text-white border border-slate-800 transition-all cursor-pointer"
          title="Next Slide (Right Arrow or Space)"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Right: Hackathon Pitch Tools & Presentation Options */}
      <div className="flex items-center gap-1.5 sm:gap-2">
        {/* Pitch Timer */}
        <div className="hidden lg:flex items-center gap-2 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300">
          <span className={`font-mono font-bold ${seconds < 30 ? 'text-rose-400 animate-pulse' : 'text-cyan-300'}`}>
            ⏱️ {formatTime(seconds)}
          </span>
          <button
            onClick={toggleTimer}
            className="text-slate-400 hover:text-white transition-colors cursor-pointer"
            title={isTimerRunning ? 'Pause Pitch Timer' : 'Start Pitch Timer'}
          >
            {isTimerRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>
          <button
            onClick={resetTimer}
            className="text-slate-400 hover:text-white transition-colors cursor-pointer"
            title="Reset to 3:00"
          >
            <RotateCcw className="w-3 h-3" />
          </button>
        </div>

        {/* Live Chatbot Demo Launcher */}
        <button
          id="nav-demo-modal-btn"
          onClick={onOpenDemo}
          className="px-2.5 py-1.5 rounded-lg bg-indigo-500/20 hover:bg-indigo-500/30 border border-indigo-500/40 text-indigo-300 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
          title="Open Interactive Student Assistant Demo"
        >
          <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
          <span className="hidden sm:inline">Live Demo</span>
        </button>

        {/* Presenter Notes */}
        <button
          id="nav-notes-modal-btn"
          onClick={onOpenNotes}
          className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors cursor-pointer"
          title="Presenter Notes & Judge Talking Points (P)"
        >
          <FileText className="w-4 h-4" />
        </button>

        {/* Grid View of all 8 slides */}
        <button
          id="nav-grid-modal-btn"
          onClick={onOpenGrid}
          className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors cursor-pointer"
          title="All Slides Grid (G)"
        >
          <LayoutGrid className="w-4 h-4" />
        </button>

        {/* Print / Save as PDF */}
        <button
          id="nav-print-btn"
          onClick={onPrint}
          className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors cursor-pointer"
          title="Print / Save Slides as PDF"
        >
          <Printer className="w-4 h-4" />
        </button>

        {/* Fullscreen Toggle */}
        <button
          id="nav-fullscreen-btn"
          onClick={toggleFullscreen}
          className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors cursor-pointer"
          title="Toggle Fullscreen (F)"
        >
          {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
        </button>
      </div>
    </header>
  );
};

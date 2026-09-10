/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  FileText, 
  LayoutGrid, 
  HelpCircle,
  Command,
  Download
} from 'lucide-react';

import { Navbar } from './components/Navbar';
import { SlideGridModal } from './components/SlideGridModal';
import { PresenterNotesModal } from './components/PresenterNotesModal';
import { InteractiveDemoModal } from './components/InteractiveDemoModal';
import { PrintSlidesView } from './components/PrintSlidesView';

import { Slide1Title } from './components/slides/Slide1Title';
import { Slide2Problem } from './components/slides/Slide2Problem';
import { Slide3Solution } from './components/slides/Slide3Solution';
import { Slide4Features } from './components/slides/Slide4Features';
import { Slide5Workflow } from './components/slides/Slide5Workflow';
import { Slide6TechStack } from './components/slides/Slide6TechStack';
import { Slide7Benefits } from './components/slides/Slide7Benefits';
import { Slide8FutureConclusion } from './components/slides/Slide8FutureConclusion';

import { SLIDES_METADATA } from './data/slidesData';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [direction, setDirection] = useState(0);
  const [isGridOpen, setIsGridOpen] = useState(false);
  const [isNotesOpen, setIsNotesOpen] = useState(false);
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [showShortcutsHelp, setShowShortcutsHelp] = useState(false);

  const totalSlides = 8;

  const nextSlide = useCallback(() => {
    if (currentSlide < totalSlides) {
      setDirection(1);
      setCurrentSlide((prev) => prev + 1);
    }
  }, [currentSlide, totalSlides]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 1) {
      setDirection(-1);
      setCurrentSlide((prev) => prev - 1);
    }
  }, [currentSlide]);

  const goToSlide = (slideNum: number) => {
    if (slideNum >= 1 && slideNum <= totalSlides) {
      setDirection(slideNum > currentSlide ? 1 : -1);
      setCurrentSlide(slideNum);
    }
  };

  // Keyboard navigation shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore when typing inside an input or textarea
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) {
        return;
      }

      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp' || e.key === 'Backspace') {
        e.preventDefault();
        prevSlide();
      } else if (e.key === 'g' || e.key === 'G') {
        setIsGridOpen((prev) => !prev);
      } else if (e.key === 'p' || e.key === 'P') {
        setIsNotesOpen((prev) => !prev);
      } else if (e.key === 'd' || e.key === 'D') {
        setIsDemoOpen((prev) => !prev);
      } else if (e.key === '?') {
        setShowShortcutsHelp((prev) => !prev);
      } else if (e.key >= '1' && e.key <= '8') {
        goToSlide(parseInt(e.key, 10));
      } else if (e.key === 'Escape') {
        setIsGridOpen(false);
        setIsNotesOpen(false);
        setIsDemoOpen(false);
        setShowShortcutsHelp(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const handlePrint = () => {
    window.print();
  };

  // Render active slide component
  const renderSlideContent = () => {
    switch (currentSlide) {
      case 1:
        return <Slide1Title onOpenDemo={() => setIsDemoOpen(true)} />;
      case 2:
        return <Slide2Problem />;
      case 3:
        return <Slide3Solution />;
      case 4:
        return <Slide4Features />;
      case 5:
        return <Slide5Workflow />;
      case 6:
        return <Slide6TechStack />;
      case 7:
        return <Slide7Benefits />;
      case 8:
        return <Slide8FutureConclusion onOpenDemo={() => setIsDemoOpen(true)} />;
      default:
        return <Slide1Title onOpenDemo={() => setIsDemoOpen(true)} />;
    }
  };

  const currentMeta = SLIDES_METADATA.find((s) => s.number === currentSlide) || SLIDES_METADATA[0];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between overflow-x-hidden select-none font-sans">
      {/* Top Navbar */}
      <Navbar
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        onPrev={prevSlide}
        onNext={nextSlide}
        onOpenGrid={() => setIsGridOpen(true)}
        onOpenNotes={() => setIsNotesOpen(true)}
        onOpenDemo={() => setIsDemoOpen(true)}
        onPrint={handlePrint}
      />

      {/* Main Slide Presentation Stage */}
      <main className="flex-1 flex items-center justify-center p-2 sm:p-4 lg:p-6 no-print">
        <div className="w-full max-w-7xl aspect-[16/9.5] sm:aspect-[16/9] max-h-[84vh] bg-slate-900/90 rounded-2xl sm:rounded-3xl border border-slate-800 shadow-2xl shadow-indigo-950/40 relative overflow-hidden flex flex-col">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentSlide}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 40 : -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -40 : 40 }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
              className="w-full h-full flex-1"
            >
              {renderSlideContent()}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* Bottom Floating Control Bar */}
      <footer className="h-14 bg-slate-950/90 border-t border-slate-800/80 px-4 sm:px-8 flex items-center justify-between no-print relative z-20 backdrop-blur-md">
        {/* Left: Active Slide Quick Info */}
        <div className="flex items-center gap-3">
          <span className="text-xs font-semibold text-slate-400 font-mono">
            {currentMeta.category}
          </span>
          <span className="hidden sm:inline text-slate-700">|</span>
          <span className="hidden sm:inline text-xs text-slate-300 font-medium">
            {currentMeta.title}
          </span>
        </div>

        {/* Center: Direct Jump Slide Pills */}
        <div className="flex items-center gap-1 sm:gap-1.5">
          {SLIDES_METADATA.map((slide) => {
            const isActive = slide.number === currentSlide;
            return (
              <button
                key={slide.number}
                onClick={() => goToSlide(slide.number)}
                title={`Jump to Slide ${slide.number}: ${slide.title}`}
                className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer flex items-center justify-center ${
                  isActive
                    ? 'bg-gradient-to-r from-indigo-500 to-sky-500 text-white shadow-md shadow-indigo-500/30 ring-1 ring-white/20'
                    : 'bg-slate-900/90 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {slide.number}
              </button>
            );
          })}
        </div>

        {/* Right: Keyboard Shortcuts Help Indicator */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowShortcutsHelp((prev) => !prev)}
            className="text-xs text-slate-400 hover:text-slate-200 flex items-center gap-1.5 transition-colors cursor-pointer"
            title="Keyboard shortcuts"
          >
            <Command className="w-3.5 h-3.5 text-indigo-400" />
            <span className="hidden md:inline">Shortcuts</span>
          </button>
        </div>
      </footer>

      {/* Keyboard Shortcuts Help Popup */}
      {showShortcutsHelp && (
        <div className="fixed bottom-16 right-6 z-50 p-4 rounded-xl bg-slate-900 border border-slate-800 shadow-2xl text-xs space-y-2 w-64 backdrop-blur-md">
          <div className="flex items-center justify-between pb-1.5 border-b border-slate-800 text-slate-300 font-bold">
            <span>Keyboard Shortcuts</span>
            <span className="text-[10px] text-slate-500">Esc to close</span>
          </div>
          <div className="space-y-1.5 text-slate-400">
            <div className="flex justify-between">
              <span>Next Slide</span>
              <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 font-mono">→ / Space</kbd>
            </div>
            <div className="flex justify-between">
              <span>Previous Slide</span>
              <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 font-mono">←</kbd>
            </div>
            <div className="flex justify-between">
              <span>Direct Jump</span>
              <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 font-mono">1 – 8</kbd>
            </div>
            <div className="flex justify-between">
              <span>Presenter Notes</span>
              <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 font-mono">P</kbd>
            </div>
            <div className="flex justify-between">
              <span>Slide Grid</span>
              <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 font-mono">G</kbd>
            </div>
            <div className="flex justify-between">
              <span>Live AI Demo</span>
              <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 font-mono">D</kbd>
            </div>
          </div>
        </div>
      )}

      {/* Modals */}
      <SlideGridModal
        isOpen={isGridOpen}
        onClose={() => setIsGridOpen(false)}
        currentSlide={currentSlide}
        onSelectSlide={goToSlide}
      />

      <PresenterNotesModal
        isOpen={isNotesOpen}
        onClose={() => setIsNotesOpen(false)}
        currentSlide={currentSlide}
      />

      <InteractiveDemoModal
        isOpen={isDemoOpen}
        onClose={() => setIsDemoOpen(false)}
      />

      {/* Dedicated Print View (renders all 8 slides cleanly when printing or exporting to PDF) */}
      <PrintSlidesView />
    </div>
  );
}

import React from 'react';
import { X, CheckCircle2 } from 'lucide-react';
import { SLIDES_METADATA } from '../data/slidesData';

interface SlideGridModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentSlide: number;
  onSelectSlide: (slideNumber: number) => void;
}

export const SlideGridModal: React.FC<SlideGridModalProps> = ({
  isOpen,
  onClose,
  currentSlide,
  onSelectSlide,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md">
      <div className="bg-slate-900 border border-slate-800 w-full max-w-4xl rounded-2xl p-6 shadow-2xl flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div>
            <h3 className="text-lg font-bold text-white font-display">Slide Overview (8 Slides)</h3>
            <p className="text-xs text-slate-400">Click any slide to jump directly</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 8-Grid of Slide Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 overflow-y-auto">
          {SLIDES_METADATA.map((slide) => {
            const isCurrent = slide.number === currentSlide;
            return (
              <button
                key={slide.number}
                onClick={() => {
                  onSelectSlide(slide.number);
                  onClose();
                }}
                className={`p-3.5 rounded-xl text-left border transition-all cursor-pointer flex flex-col justify-between aspect-[16/10] relative group ${
                  isCurrent
                    ? 'bg-indigo-950/60 border-indigo-500 ring-2 ring-indigo-500/50 shadow-lg shadow-indigo-950/80'
                    : 'bg-slate-950/80 border-slate-800 hover:border-slate-700 hover:bg-slate-900'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                    isCurrent ? 'bg-indigo-500 text-white' : 'bg-slate-800 text-slate-400'
                  }`}>
                    SLIDE {slide.number}
                  </span>
                  {isCurrent && <CheckCircle2 className="w-4 h-4 text-indigo-400" />}
                </div>

                <div>
                  <h4 className="text-xs font-bold text-white line-clamp-1 group-hover:text-indigo-300 transition-colors font-display">
                    {slide.title}
                  </h4>
                  <p className="text-[10px] text-slate-400 line-clamp-2 mt-1">
                    {slide.subtitle || slide.keyTakeaway}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

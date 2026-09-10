import React from 'react';
import { X, MessageSquare, Lightbulb, Clock, CheckCircle } from 'lucide-react';
import { SLIDES_METADATA } from '../data/slidesData';

interface PresenterNotesModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentSlide: number;
}

export const PresenterNotesModal: React.FC<PresenterNotesModalProps> = ({
  isOpen,
  onClose,
  currentSlide,
}) => {
  if (!isOpen) return null;

  const currentData = SLIDES_METADATA.find(s => s.number === currentSlide) || SLIDES_METADATA[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
      <div className="bg-slate-900 border border-slate-800 w-full max-w-2xl rounded-2xl p-6 shadow-2xl flex flex-col max-h-[85vh]">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-indigo-400">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white font-display">
                Presenter Notes • Slide {currentData.number}
              </h3>
              <p className="text-xs text-indigo-300 font-mono">{currentData.title}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="py-5 space-y-5 overflow-y-auto">
          {/* Key Takeaway */}
          <div className="p-3.5 rounded-xl bg-indigo-950/40 border border-indigo-500/30 flex items-start gap-3">
            <Lightbulb className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-bold text-indigo-200 uppercase tracking-wider">
                Judge Takeaway Goal:
              </p>
              <p className="text-xs text-slate-200 mt-0.5 leading-relaxed">
                {currentData.keyTakeaway}
              </p>
            </div>
          </div>

          {/* Talking Points */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Recommended Pitch Talking Points:
            </h4>
            <div className="space-y-2">
              {currentData.speakerNotes.map((note, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-slate-950/70 border border-slate-800/90 flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-300 leading-relaxed">{note}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Recommended Slide Time */}
          <div className="p-3 rounded-lg bg-slate-950/50 border border-slate-800 flex items-center justify-between text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-indigo-400" />
              <span>Target Duration for 3-minute Hackathon Pitch:</span>
            </span>
            <span className="font-mono text-white font-bold">~22-25 seconds</span>
          </div>
        </div>
      </div>
    </div>
  );
};

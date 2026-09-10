import React, { useState } from 'react';
import { 
  Rocket, 
  Mic, 
  ScanFace, 
  Sparkles, 
  Users, 
  MapPin, 
  PhoneCall, 
  Languages, 
  Heart, 
  MessageSquareCode, 
  CheckCircle2,
  ExternalLink,
  Flame,
  Award
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface Slide8Props {
  onOpenDemo?: () => void;
}

export const Slide8FutureConclusion: React.FC<Slide8Props> = ({ onOpenDemo }) => {
  const [hasCelebrated, setHasCelebrated] = useState(false);

  const futureFeatures = [
    {
      title: 'Voice-Based Assistant',
      desc: 'Hands-free speech-to-text queries for quick answers on the go.',
      icon: Mic,
      tag: 'Voice AI',
    },
    {
      title: 'Face Recognition Integration',
      desc: 'Automated biometric attendance via classroom camera streams.',
      icon: ScanFace,
      tag: 'Computer Vision',
    },
    {
      title: 'Smart Academic Recommendations',
      desc: 'AI recommends electives, research papers, and study schedules based on performance.',
      icon: Sparkles,
      tag: 'Predictive ML',
    },
    {
      title: 'Parent Communication Portal',
      desc: 'Automated monthly progress digests, attendance reports, and fee alerts for guardians.',
      icon: Users,
      tag: 'Family Portal',
    },
    {
      title: 'Campus Navigation (Indoor AR)',
      desc: 'Interactive 3D maps guiding freshers to lecture halls, labs, and faculty cabins.',
      icon: MapPin,
      tag: 'AR / Spatial',
    },
    {
      title: 'Emergency SOS Assistance',
      desc: 'One-tap emergency beacon connecting to campus security and medical infirmary.',
      icon: PhoneCall,
      tag: 'Campus Safety',
    },
    {
      title: 'Multilingual Support',
      desc: 'Supports regional languages and international student dialects seamlessly.',
      icon: Languages,
      tag: 'Global NLP',
    },
  ];

  const triggerConfetti = () => {
    setHasCelebrated(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <div className="h-full w-full flex flex-col justify-between p-6 sm:p-10 lg:p-12 relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950/70">
      {/* Background Lighting */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-cyan-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="space-y-1 relative z-10">
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <Rocket className="w-3.5 h-3.5" />
            <span>Vision & Roadmap</span>
          </div>
          <span className="text-xs text-slate-500 font-medium">Slide 08 / 08 • Final Slide</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
          Future Scope & Conclusion
        </h2>
        <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
          Scalable roadmap paving the way toward an autonomous, AI-driven cognitive campus.
        </p>
      </div>

      {/* Main Content Grid: 7 Future Features + Conclusion/Thank You Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center my-auto relative z-10">
        {/* Left 7 cols: Future Scope Features List */}
        <div className="lg:col-span-7 space-y-2">
          <div className="flex items-center justify-between mb-1">
            <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-400 font-display">
              Upcoming Innovations on the Roadmap
            </h3>
            <span className="text-[10px] text-slate-500 font-mono">Phase 2 & 3 Expansion</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {futureFeatures.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx}
                  className={`p-2.5 rounded-xl bg-slate-900/80 border border-slate-800/90 hover:border-indigo-500/40 transition-all flex items-start gap-2.5 ${
                    idx === 6 ? 'sm:col-span-2' : ''
                  }`}
                >
                  <div className="p-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 shrink-0 mt-0.5">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <h4 className="text-xs font-bold text-white truncate font-display">{item.title}</h4>
                      <span className="text-[9px] px-1.5 py-0.2 rounded bg-slate-800 text-cyan-400 font-mono">
                        {item.tag}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-tight line-clamp-1 mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right 5 cols: Conclusion Banner & Thank You / Questions Box */}
        <div className="lg:col-span-5 flex flex-col gap-3">
          {/* Official Conclusion Tagline Card */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-indigo-950/80 via-slate-900 to-cyan-950/80 border border-indigo-500/40 shadow-2xl relative overflow-hidden">
            <div className="flex items-center gap-2 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-2">
              <Award className="w-4 h-4 text-amber-400" />
              <span>Project Conclusion</span>
            </div>

            {/* The Mandatory Conclusion Tagline */}
            <p className="text-xl sm:text-2xl font-extrabold text-white leading-snug font-display tracking-tight my-2">
              “Making Campus Life Smarter, Faster, and Easier.”
            </p>

            <p className="text-xs text-slate-300 leading-relaxed">
              Smart College Assistant eliminates the friction of modern student life by fusing all disparate college services into one intelligent, always-available AI partner.
            </p>
          </div>

          {/* Thank You & Q&A Box with Interactive Confetti */}
          <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center justify-between gap-4">
            <div className="space-y-0.5">
              <h4 className="text-base font-bold text-white font-display flex items-center gap-1.5">
                <span>Thank You!</span>
                <span className="text-indigo-400 text-sm font-normal">| Questions?</span>
              </h4>
              <p className="text-xs text-slate-400">
                We'd love to hear your feedback and questions, Judges!
              </p>
            </div>

            <button
              id="celebrate-pitch-btn"
              onClick={triggerConfetti}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-indigo-500 hover:from-amber-600 hover:to-indigo-600 text-white font-bold text-xs shadow-lg shadow-indigo-500/25 flex items-center gap-1.5 cursor-pointer shrink-0 transition-transform active:scale-95"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Celebrate Pitch 🎉</span>
            </button>
          </div>
        </div>
      </div>

      {/* Footer Takeaway Bar */}
      <div className="flex flex-wrap items-center justify-between pt-3 border-t border-slate-800/80 text-xs text-slate-400 relative z-10">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-white">Smart College Assistant:</span>
          <span className="text-slate-300">Hackathon Project Submission • Ready for Pilot Deployment</span>
        </div>
        <div className="text-slate-400 font-mono text-[11px]">
          Slide 8 of 8 • End of Pitch Deck
        </div>
      </div>
    </div>
  );
};

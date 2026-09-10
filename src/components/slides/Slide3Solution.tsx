import React from 'react';
import { 
  Sparkles, 
  Cpu, 
  Zap, 
  CheckCircle2, 
  Layers, 
  Bot, 
  ShieldCheck, 
  ArrowRight,
  Database,
  Smartphone,
  Globe2,
  Share2
} from 'lucide-react';

export const Slide3Solution: React.FC = () => {
  const pillars = [
    {
      title: 'Unified Central Core',
      desc: 'Connects fragmented campus portals, LMS, ERP, and databases into a single queryable brain.',
      icon: Layers,
      color: 'from-blue-500/20 to-indigo-500/20 text-indigo-400 border-indigo-500/30'
    },
    {
      title: 'AI Conversational Interface',
      desc: 'Students interact via intuitive natural language chat, receiving instant, context-aware answers.',
      icon: Bot,
      color: 'from-sky-500/20 to-cyan-500/20 text-cyan-400 border-cyan-500/30'
    },
    {
      title: 'Proactive Alert Engine',
      desc: 'Automatic push reminders for upcoming assignment due dates, low attendance risks, and exams.',
      icon: Zap,
      color: 'from-amber-500/20 to-orange-500/20 text-amber-400 border-amber-500/30'
    },
    {
      title: 'Secure & Instant 24/7 Access',
      desc: 'Role-based student authentication with sub-second response times and zero server crashes.',
      icon: ShieldCheck,
      color: 'from-emerald-500/20 to-teal-500/20 text-emerald-400 border-emerald-500/30'
    }
  ];

  return (
    <div className="h-full w-full flex flex-col justify-between p-6 sm:p-10 lg:p-12 relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950/60">
      {/* Background Decorative Lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-cyan-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="space-y-1.5 relative z-10">
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Innovation</span>
          </div>
          <span className="text-xs text-slate-500 font-medium">Slide 03 / 08</span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Proposed Solution: Smart College Assistant
          </h2>
          {/* Prominent Tagline */}
          <div className="inline-block px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 border border-indigo-500/40 text-xs sm:text-sm font-bold text-cyan-300 shadow-sm">
            ✨ "One Smart Platform for All College Needs."
          </div>
        </div>

        <p className="text-sm sm:text-base text-slate-300 max-w-3xl">
          An AI-powered digital platform that brings all essential college services, academic data, and real-time announcements into a single conversational ecosystem.
        </p>
      </div>

      {/* Central Architecture Comparison Visual */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center my-auto relative z-10">
        {/* Left: 4 Pillars of the Solution */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={idx}
                className="p-4 rounded-xl bg-slate-900/85 border border-slate-800 hover:border-indigo-500/50 transition-all shadow-md group"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className={`p-2.5 rounded-lg bg-gradient-to-br ${pillar.color} border shadow-inner group-hover:scale-105 transition-transform`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors font-display">
                    {pillar.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed pl-1">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Right: Modern Ecosystem Architecture Infographic */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <div className="p-5 rounded-2xl bg-slate-900/95 border border-indigo-500/30 shadow-2xl relative">
            <div className="text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-3 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Cpu className="w-4 h-4 text-cyan-400" />
                Unified AI Hub Ecosystem
              </span>
              <span className="text-[10px] text-emerald-400 font-mono">Real-time Bridge</span>
            </div>

            {/* Visual Node Diagram */}
            <div className="space-y-2.5 text-xs">
              {/* Top: Student Interface */}
              <div className="p-2.5 rounded-xl bg-indigo-950/60 border border-indigo-500/40 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-lg bg-indigo-500/30 text-indigo-300">
                    <Smartphone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-white text-xs">Student Touchpoints</p>
                    <p className="text-[11px] text-indigo-200/80">Web App, Mobile UI, Chatbot</p>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 text-[10px]">Zero Friction</span>
              </div>

              {/* Middle: AI Core Engine */}
              <div className="p-3 rounded-xl bg-gradient-to-r from-indigo-900/80 via-slate-900 to-sky-950/80 border border-cyan-500/40 flex items-center justify-between shadow-lg">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 animate-pulse">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <p className="font-bold text-white text-xs">AI Assistant Intelligence Core</p>
                      <span className="text-[9px] px-1.5 py-0.2 rounded bg-cyan-500/20 text-cyan-300">NLP</span>
                    </div>
                    <p className="text-[11px] text-slate-300">Semantic parsing, intent matcher & security layer</p>
                  </div>
                </div>
                <Zap className="w-4 h-4 text-amber-400 shrink-0" />
              </div>

              {/* Bottom: College Systems Integration */}
              <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-lg bg-slate-800 text-slate-300">
                    <Database className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-white text-xs">College Data Layer</p>
                    <p className="text-[11px] text-slate-400">Timetable, SIS, LMS, Exam Cell, Notices</p>
                  </div>
                </div>
                <span className="text-[10px] text-emerald-400 font-mono">Sync 24/7</span>
              </div>
            </div>

            {/* Outcome Badge */}
            <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
              <span className="text-slate-400">Result:</span>
              <span className="font-semibold text-cyan-300 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Zero Fragmentation • Instant Answers
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Takeaway Bar */}
      <div className="flex flex-wrap items-center justify-between pt-3 border-t border-slate-800/80 text-xs text-slate-400 relative z-10">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-white">Value Proposition:</span>
          <span className="text-slate-300">Transforms static college websites into an active, intelligent personal mentor for every student.</span>
        </div>
        <div className="text-slate-400 font-mono text-[11px]">
          Smart College Assistant • Hackathon Pitch
        </div>
      </div>
    </div>
  );
};

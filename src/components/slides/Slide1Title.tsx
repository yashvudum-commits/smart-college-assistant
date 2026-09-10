import React from 'react';
import { 
  Bot, 
  Sparkles, 
  GraduationCap, 
  Building2, 
  Cpu, 
  Clock, 
  ShieldCheck, 
  Zap, 
  MessageSquareCode, 
  Flame
} from 'lucide-react';
import { motion } from 'motion/react';

interface SlideProps {
  onOpenDemo?: () => void;
}

export const Slide1Title: React.FC<SlideProps> = ({ onOpenDemo }) => {
  return (
    <div className="h-full w-full flex flex-col justify-between p-6 sm:p-10 lg:p-14 relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950/70">
      {/* Background Decorative Tech Elements */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-cyan-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-violet-600/10 rounded-full blur-[100px] pointer-events-none" />
      
      {/* Top Bar / Hackathon Metadata */}
      <div className="flex flex-wrap items-center justify-between gap-3 relative z-10">
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold tracking-wide uppercase">
          <Flame className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
          <span>Hackathon 2025 • AI & Smart Campus Track</span>
        </div>

        <div className="flex items-center gap-3 text-xs text-slate-400">
          <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700/60">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            Live Project Pitch
          </span>
          <span className="hidden sm:inline text-slate-500">|</span>
          <span className="text-slate-400 font-medium">Slide 01 / 08</span>
        </div>
      </div>

      {/* Main Hero Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10 my-auto">
        {/* Left Column: Title, Subtitle, Tagline, Action */}
        <div className="lg:col-span-7 flex flex-col gap-5">
          <div className="inline-flex items-center gap-2 text-indigo-400 font-medium text-sm">
            <Bot className="w-5 h-5 text-indigo-400" />
            <span>Next-Gen Campus Intelligence</span>
          </div>

          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight font-display">
              Smart College <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-300 to-cyan-400">
                Assistant
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-xl">
              An AI-Powered Digital Solution for Smart Campus Management
            </p>
          </div>

          {/* Core Value Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 max-w-lg">
            <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800/80 flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-indigo-500/15 text-indigo-400">
                <GraduationCap className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">Focus</p>
                <p className="text-xs font-bold text-white">Student First</p>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800/80 flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-sky-500/15 text-sky-400">
                <Cpu className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">Engine</p>
                <p className="text-xs font-bold text-white">GenAI & NLP</p>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800/80 flex items-center gap-2.5 col-span-2 sm:col-span-1">
              <div className="p-2 rounded-lg bg-emerald-500/15 text-emerald-400">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">Access</p>
                <p className="text-xs font-bold text-white">24/7 Instant</p>
              </div>
            </div>
          </div>

          {/* Pitch Sub-bar */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              id="slide1-explore-demo-btn"
              onClick={onOpenDemo}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-sky-500 hover:from-indigo-600 hover:to-sky-600 text-white font-semibold text-sm shadow-lg shadow-indigo-500/25 flex items-center gap-2 transition-all cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Sparkles className="w-4 h-4" />
              <span>Launch Live Assistant Demo</span>
            </button>
            <span className="text-xs text-slate-400 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Production Architecture Tested
            </span>
          </div>
        </div>

        {/* Right Column: AI Holographic Assistant Visual Card */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="w-full max-w-md bg-slate-900/90 rounded-2xl border border-indigo-500/30 p-5 shadow-2xl shadow-indigo-950/60 relative backdrop-blur-xl">
            {/* Header of Assistant Card */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-400 flex items-center justify-center text-white shadow-md">
                    <Bot className="w-5 h-5" />
                  </div>
                  <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-slate-900" />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-white flex items-center gap-1.5 font-display">
                    Campus Copilot v2.4
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-mono">LIVE</span>
                  </h2>
                  <p className="text-xs text-slate-400">Autonomous Student Support</p>
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20 font-medium">
                <Zap className="w-3 h-3" />
                99.4% Accurate
              </div>
            </div>

            {/* Chat Simulation Snippet */}
            <div className="space-y-3 py-4 text-xs">
              <div className="flex items-start gap-2.5">
                <div className="w-6 h-6 rounded-full bg-indigo-900/80 border border-indigo-500/40 flex items-center justify-center text-[10px] text-indigo-200 shrink-0 mt-0.5">
                  ST
                </div>
                <div className="bg-slate-800/90 text-slate-200 p-2.5 rounded-2xl rounded-tl-sm border border-slate-700/60 max-w-[85%]">
                  "Hey assistant, when is my AI Lab test and what is my current attendance?"
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-indigo-500 to-sky-400 flex items-center justify-center text-white shrink-0 mt-0.5">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <div className="bg-indigo-950/80 text-indigo-100 p-3 rounded-2xl rounded-tl-sm border border-indigo-500/40 space-y-2 max-w-[90%] shadow-inner">
                  <p className="text-slate-200 leading-relaxed">
                    Here's your real-time breakdown:
                  </p>
                  <div className="bg-slate-900/90 p-2 rounded-lg border border-indigo-500/30 space-y-1">
                    <div className="flex justify-between items-center text-[11px]">
                      <span className="text-slate-400">AI Lab Exam:</span>
                      <span className="font-semibold text-amber-300">Tomorrow, 10:30 AM (Room 402)</span>
                    </div>
                    <div className="flex justify-between items-center text-[11px]">
                      <span className="text-slate-400">Attendance:</span>
                      <span className="font-bold text-emerald-400">86.4% (Safe &gt; 75%)</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] text-indigo-300/80">
                    <Clock className="w-3 h-3" />
                    <span>Data verified from College ERP & SIS • 120ms</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Smart Campus Node Connectors */}
            <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
              <span className="flex items-center gap-1">
                <Building2 className="w-3.5 h-3.5 text-indigo-400" />
                <span>Connected to 6 Campus Systems</span>
              </span>
              <span className="font-mono text-indigo-300">REST & WS Ready</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Presentation Bar */}
      <div className="flex flex-wrap items-center justify-between pt-4 border-t border-slate-800/70 text-xs text-slate-400 relative z-10">
        <div className="flex items-center gap-4">
          <span className="font-semibold text-slate-300">Smart College Assistant</span>
          <span className="text-slate-600">•</span>
          <span>Hackathon Final Presentation</span>
        </div>
        <div className="flex items-center gap-2 text-slate-400">
          <MessageSquareCode className="w-3.5 h-3.5 text-indigo-400" />
          <span>Pitch Deck • Powered by Generative AI & Cloud Services</span>
        </div>
      </div>
    </div>
  );
};

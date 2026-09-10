import React, { useState, useEffect } from 'react';
import { 
  LogIn, 
  MessageSquare, 
  Cpu, 
  Database, 
  Zap, 
  ArrowRight, 
  Play, 
  RotateCcw, 
  CheckCircle2, 
  Sparkles,
  Layers,
  ShieldCheck
} from 'lucide-react';

export const Slide5Workflow: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [isSimulating, setIsSimulating] = useState(false);

  const steps = [
    {
      num: '01',
      title: 'Student Login',
      icon: LogIn,
      tag: 'Authentication',
      color: 'from-blue-500/20 to-indigo-500/20 text-indigo-400 border-indigo-500/40',
      activeBorder: 'border-indigo-400 shadow-indigo-500/30',
      summary: 'Secure OAuth / Student ID biometric login.',
      detail: 'Verifies student enrollment, department, semester, and access permissions.'
    },
    {
      num: '02',
      title: 'User Request',
      icon: MessageSquare,
      tag: 'Input Intake',
      color: 'from-cyan-500/20 to-sky-500/20 text-cyan-400 border-cyan-500/40',
      activeBorder: 'border-cyan-400 shadow-cyan-500/30',
      summary: 'Natural language typed query or voice input.',
      detail: 'e.g. "What is my attendance in Data Structures and is there an assignment due?"'
    },
    {
      num: '03',
      title: 'AI Processing',
      icon: Cpu,
      tag: 'NLP Engine',
      color: 'from-violet-500/20 to-purple-500/20 text-violet-400 border-violet-500/40',
      activeBorder: 'border-violet-400 shadow-violet-500/30',
      summary: 'Intent parsing, entity extraction & context lookup.',
      detail: 'Understands acronyms, course codes (CS301), and maps query to target system APIs.'
    },
    {
      num: '04',
      title: 'College Database',
      icon: Database,
      tag: 'Data Query',
      color: 'from-amber-500/20 to-orange-500/20 text-amber-400 border-amber-500/40',
      activeBorder: 'border-amber-400 shadow-amber-500/30',
      summary: 'Secure SQL / Firebase student record fetch.',
      detail: 'Retrieves attendance logs, LMS submissions, exam rosters, and faculty announcements.'
    },
    {
      num: '05',
      title: 'Instant Response',
      icon: Zap,
      tag: 'Output Delivery',
      color: 'from-emerald-500/20 to-teal-500/20 text-emerald-400 border-emerald-500/40',
      activeBorder: 'border-emerald-400 shadow-emerald-500/30',
      summary: 'Clean, formatted visual card delivered in <800ms.',
      detail: 'Personalized answer with actionable links, deadline counters, and direct download buttons.'
    },
  ];

  const runSimulation = () => {
    setIsSimulating(true);
    setActiveStep(0);
  };

  useEffect(() => {
    if (isSimulating && activeStep !== null) {
      if (activeStep < steps.length - 1) {
        const timer = setTimeout(() => {
          setActiveStep(prev => (prev !== null ? prev + 1 : 0));
        }, 900);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => {
          setIsSimulating(false);
        }, 1200);
        return () => clearTimeout(timer);
      }
    }
  }, [isSimulating, activeStep]);

  return (
    <div className="h-full w-full flex flex-col justify-between p-6 sm:p-10 lg:p-12 relative overflow-hidden bg-slate-950">
      {/* Ambient background blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Header */}
      <div className="space-y-1 relative z-10">
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            <span>Process & Architecture</span>
          </div>
          <span className="text-xs text-slate-500 font-medium">Slide 05 / 08</span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            How It Works: 5-Stage Intelligent Workflow
          </h2>
          {/* Interactive Simulation Controls */}
          <button
            id="simulate-workflow-btn"
            onClick={runSimulation}
            disabled={isSimulating}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 disabled:opacity-50 text-white text-xs font-bold transition-all shadow-md cursor-pointer self-start sm:self-auto"
          >
            {isSimulating ? (
              <>
                <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                <span>Processing Pipeline...</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Simulate Live Query Flow</span>
              </>
            )}
          </button>
        </div>

        <p className="text-sm text-slate-400 max-w-3xl">
          From student query to instant response in five seamless, security-hardened steps.
        </p>
      </div>

      {/* Main Flowchart: Horizontal 5 Step Process Diagram */}
      <div className="relative z-10 my-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isCurrentActive = activeStep === idx;
            const hasPassed = activeStep !== null && activeStep > idx;

            return (
              <div key={idx} className="relative flex flex-col">
                {/* Step Card */}
                <div
                  onClick={() => setActiveStep(idx)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer flex flex-col justify-between h-full relative ${
                    isCurrentActive
                      ? `bg-slate-900 ${step.activeBorder} ring-2 ring-indigo-500/50 scale-[1.03] shadow-xl`
                      : hasPassed
                      ? 'bg-slate-900/90 border-emerald-500/40'
                      : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  {/* Top step badge */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                      STEP {step.num}
                    </span>
                    {hasPassed ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <span className="text-[10px] text-slate-400 font-medium">{step.tag}</span>
                    )}
                  </div>

                  {/* Icon & Title */}
                  <div className="space-y-2 mb-3">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${step.color} border flex items-center justify-center`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-bold text-white font-display leading-snug">
                      {step.title}
                    </h3>
                  </div>

                  {/* Summary */}
                  <p className="text-xs text-slate-300 leading-relaxed mb-2">
                    {step.summary}
                  </p>

                  <div className="pt-2 border-t border-slate-800/80 text-[11px] text-slate-400">
                    {step.detail}
                  </div>
                </div>

                {/* Arrow Connector for Desktop */}
                {idx < 4 && (
                  <div className="hidden md:flex absolute -right-2 top-1/2 -translate-y-1/2 z-20 translate-x-1/2">
                    <div className={`p-1 rounded-full border transition-all ${
                      hasPassed || isCurrentActive
                        ? 'bg-indigo-600 text-white border-indigo-400 shadow-md shadow-indigo-500/50'
                        : 'bg-slate-800 text-slate-500 border-slate-700'
                    }`}>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Live Packet Simulation Output Box */}
        <div className="mt-5 p-4 rounded-xl bg-slate-900/90 border border-indigo-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-lg">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-white">Live Query Example:</span>
                <span className="text-[11px] px-2 py-0.5 rounded bg-slate-800 text-cyan-300 font-mono">
                  "Check my Operating Systems attendance"
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                {activeStep === null && "Click 'Simulate Live Query Flow' above to see packet travel through the 5 stages."}
                {activeStep === 0 && "Authenticating student Yash V. (ID: CS-2024-889) via token session..."}
                {activeStep === 1 && "Capturing query payload: Intent = AttendanceQuery | Subject = 'Operating Systems'"}
                {activeStep === 2 && "NLP model performs semantic slot filling & parses threshold safety criteria."}
                {activeStep === 3 && "Executing read on Cloud Firestore / MySQL tables: 28 attended out of 34 classes."}
                {activeStep === 4 && "Delivered: 'Your OS attendance is 82.3% (Safe). 2 absences remaining before 75% limit.' (Latency: 640ms)"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span className="text-xs text-slate-300 font-mono">End-to-End Encrypted</span>
          </div>
        </div>
      </div>

      {/* Footer Takeaway Bar */}
      <div className="flex flex-wrap items-center justify-between pt-3 border-t border-slate-800/80 text-xs text-slate-400 relative z-10">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-white">Execution Speed:</span>
          <span className="text-slate-300">Complete round-trip lifecycle executes in under 800 milliseconds.</span>
        </div>
        <div className="text-slate-400 font-mono text-[11px]">
          Student Login → User Request → AI Processing → College Database → Instant Response
        </div>
      </div>
    </div>
  );
};

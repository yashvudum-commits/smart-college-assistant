import React from 'react';
import { 
  TrendingUp, 
  GraduationCap, 
  Building, 
  Clock, 
  Search, 
  Sparkles, 
  CheckCircle2, 
  Bell, 
  MessageSquareOff, 
  Send, 
  Database, 
  BarChart3,
  ShieldCheck,
  Award
} from 'lucide-react';

export const Slide7Benefits: React.FC = () => {
  const studentBenefits = [
    {
      title: 'Saves Time',
      desc: 'No more waiting in administrative queues or navigating clunky portals.',
      icon: Clock,
      highlight: 'Saves 3–5 hours / week',
    },
    {
      title: 'Easy Access to Information',
      desc: 'All schedules, timetables, and notes accessible in a single query.',
      icon: Search,
      highlight: 'Zero portal hopping',
    },
    {
      title: 'Personalized Assistance',
      desc: 'Custom advice tailored to individual attendance rates and enrolled courses.',
      icon: Sparkles,
      highlight: 'Context-aware alerts',
    },
    {
      title: 'Better Academic Organization',
      desc: 'Never miss lab record deadlines, exam dates, or project milestones.',
      icon: CheckCircle2,
      highlight: 'Zero missed deadlines',
    },
    {
      title: 'Instant Notifications',
      desc: 'Real-time push alerts for urgent schedule shifts and official notices.',
      icon: Bell,
      highlight: '< 1s alert broadcast',
    },
  ];

  const collegeBenefits = [
    {
      title: 'Reduces Repetitive Queries',
      desc: 'Autonomous AI resolves 80%+ of everyday student administrative tickets.',
      icon: MessageSquareOff,
      highlight: '80% inquiry reduction',
    },
    {
      title: 'Improves Communication',
      desc: 'Direct, verified announcements reach 100% of students without email drop-off.',
      icon: Send,
      highlight: '100% circular delivery',
    },
    {
      title: 'Supports Digital Campus Management',
      desc: 'Accelerates the college’s paperless, digitized Smart Campus roadmap.',
      icon: BarChart3,
      highlight: 'Paperless workflow',
    },
    {
      title: 'Centralized Information System',
      desc: 'Unifies isolated department silos into a single verifiable truth source.',
      icon: Database,
      highlight: 'Unified data source',
    },
  ];

  return (
    <div className="h-full w-full flex flex-col justify-between p-6 sm:p-10 lg:p-12 relative overflow-hidden bg-slate-950">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-indigo-900/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-emerald-900/15 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="space-y-1 relative z-10">
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Value & Social Proof</span>
          </div>
          <span className="text-xs text-slate-500 font-medium">Slide 07 / 08</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
          Benefits & Impact: Dual-Sided Value Creation
        </h2>
        <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
          Empowering students with seamless academic clarity while liberating college administrative staff from repetitive inquiries.
        </p>
      </div>

      {/* Dual Column Layout: Students vs Colleges */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-auto relative z-10">
        {/* Left Column: For Students */}
        <div className="p-5 rounded-2xl bg-slate-900/85 border border-indigo-500/30 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-3">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-indigo-500/15 border border-indigo-500/30 text-indigo-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white font-display">For Students</h3>
                  <p className="text-[11px] text-indigo-300">Empowering Academic Success</p>
                </div>
              </div>
              <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                5 Key Advantages
              </span>
            </div>

            <div className="space-y-2.5">
              {studentBenefits.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800/80 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <div className="p-1.5 rounded-lg bg-indigo-500/10 text-indigo-400 shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-white font-display">{item.title}</h4>
                        <p className="text-[11px] text-slate-400 leading-tight">{item.desc}</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-semibold text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 shrink-0">
                      {item.highlight}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: For College */}
        <div className="p-5 rounded-2xl bg-slate-900/85 border border-emerald-500/30 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-3">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400">
                  <Building className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white font-display">For College Administration</h3>
                  <p className="text-[11px] text-emerald-300">Operational Excellence & Efficiency</p>
                </div>
              </div>
              <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                4 Key Advantages
              </span>
            </div>

            <div className="space-y-2.5 mb-4">
              {collegeBenefits.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800/80 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-white font-display">{item.title}</h4>
                        <p className="text-[11px] text-slate-400 leading-tight">{item.desc}</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-semibold text-cyan-300 px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20 shrink-0">
                      {item.highlight}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Institutional ROI Metric Banner */}
          <div className="p-3 rounded-xl bg-gradient-to-r from-emerald-950/50 to-indigo-950/50 border border-emerald-500/30 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-amber-400" />
              <span className="font-semibold text-white">Projected Administrative ROI:</span>
            </div>
            <span className="font-bold text-emerald-300">80% Less Desk Overhead</span>
          </div>
        </div>
      </div>

      {/* Footer Takeaway Bar */}
      <div className="flex flex-wrap items-center justify-between pt-3 border-t border-slate-800/80 text-xs text-slate-400 relative z-10">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-white">Strategic Outcome:</span>
          <span className="text-slate-300">A win-win ecosystem transforming campus bureaucracy into autonomous self-service.</span>
        </div>
        <div className="text-slate-400 font-mono text-[11px]">
          Smart College Assistant • Hackathon Pitch
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { 
  Bot, 
  UserCheck, 
  CalendarClock, 
  AlarmClock, 
  Megaphone, 
  BookOpenCheck, 
  LayoutDashboard, 
  Sparkles, 
  CheckCircle2,
  ArrowUpRight,
  TrendingUp,
  Flame
} from 'lucide-react';

export const Slide4Features: React.FC = () => {
  const [selectedFeature, setSelectedFeature] = useState(0);

  const features = [
    {
      id: 0,
      name: 'AI Chatbot for Queries',
      tag: 'Core Intelligence',
      icon: Bot,
      color: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/30 ring-indigo-500/20',
      badge: 'Natural Language',
      desc: 'Instant answers to academic, logistical, faculty, and administrative queries 24/7 in natural language.',
      mockQuery: '“When is the last date to submit the AI project report?”',
      mockResult: 'Friday, Oct 24 by 5:00 PM on Portal. Late submissions lose 10%.',
      metric: 'Instant < 800ms response'
    },
    {
      id: 1,
      name: 'Attendance Tracking',
      tag: 'Risk Prevention',
      icon: UserCheck,
      color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30 ring-emerald-500/20',
      badge: 'Real-Time Sync',
      desc: 'Live subject-wise percentages with predictive warnings before slipping below the mandatory 75% threshold.',
      mockQuery: '“How many lectures can I miss in Operating Systems?”',
      mockResult: 'Current: 82%. You can safely miss 2 more classes before reaching 75%.',
      metric: '75% Threshold Alert Radar'
    },
    {
      id: 2,
      name: 'Class & Exam Timetable',
      tag: 'Dynamic Schedule',
      icon: CalendarClock,
      color: 'text-sky-400 bg-sky-500/10 border-sky-500/30 ring-sky-500/20',
      badge: 'Conflict Detection',
      desc: 'Always up-to-date schedule reflecting sudden room changes, faculty substitutes, and midterm exam slots.',
      mockQuery: '“Where is my next class right now?”',
      mockResult: 'Database Systems • Room 304, Block B • Starts in 15 mins.',
      metric: 'Real-time room & slot sync'
    },
    {
      id: 3,
      name: 'Assignment Reminders',
      tag: 'Deadline Radar',
      icon: AlarmClock,
      color: 'text-amber-400 bg-amber-500/10 border-amber-500/30 ring-amber-500/20',
      badge: 'Automated Pushes',
      desc: 'Proactive multi-channel push alerts for project milestones, lab records, and homework submissions.',
      mockQuery: '“What assignments are due this weekend?”',
      mockResult: '2 pending: ML Assignment 3 (Due tomorrow) & DBMS Lab 4 (Due Sunday).',
      metric: '0 missed deadlines'
    },
    {
      id: 4,
      name: 'Announcements & Events',
      tag: 'Campus Pulse',
      icon: Megaphone,
      color: 'text-rose-400 bg-rose-500/10 border-rose-500/30 ring-rose-500/20',
      badge: 'Filtered & Verified',
      desc: 'Categorized notifications for seminars, cultural fests, holiday notices, and emergency circulars.',
      mockQuery: '“Any notice regarding tomorrow’s guest lecture?”',
      mockResult: 'Official: AI in Health talk rescheduled to 2:00 PM in Main Auditorium.',
      metric: 'Verified faculty broadcast'
    },
    {
      id: 5,
      name: 'Study Materials',
      tag: 'Knowledge Vault',
      icon: BookOpenCheck,
      color: 'text-purple-400 bg-purple-500/10 border-purple-500/30 ring-purple-500/20',
      badge: 'Direct Download',
      desc: 'Centralized repository of lecture slides, previous year question papers, and recommended reference books.',
      mockQuery: '“Download Unit 4 Computer Networks lecture slides”',
      mockResult: 'Found: Unit4_Routing_Algorithms.pdf (Verified by Prof. Sharma).',
      metric: 'Indexed & tagged notes'
    },
    {
      id: 6,
      name: 'Personalized Dashboard',
      tag: '360° Student Hub',
      icon: LayoutDashboard,
      color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30 ring-cyan-500/20',
      badge: 'Tailored View',
      desc: 'A unified single-screen summary tailored to the student’s branch, semester, electives, and GPA goals.',
      mockQuery: '“Overview of my semester standing”',
      mockResult: 'CGPA: 8.7 • Attendance: 84% • 2 Active Submissions • Next Class: 11:00 AM',
      metric: 'Single consolidated view'
    },
  ];

  const active = features[selectedFeature];
  const ActiveIcon = active.icon;

  return (
    <div className="h-full w-full flex flex-col justify-between p-6 sm:p-10 lg:p-12 relative overflow-hidden bg-slate-950">
      {/* Background accents */}
      <div className="absolute -top-32 right-10 w-96 h-96 bg-indigo-900/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 left-10 w-96 h-96 bg-cyan-900/15 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="space-y-1 relative z-10">
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Product Capabilities</span>
          </div>
          <span className="text-xs text-slate-500 font-medium">Slide 04 / 08</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
          Key Features: Comprehensive Campus Intelligence
        </h2>
        <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
          Seven purpose-built modules designed to streamline everyday student life and eliminate academic friction.
        </p>
      </div>

      {/* Main Grid: 7 Feature Cards + Live Interactive Showcase Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center my-auto relative z-10">
        {/* Left 7 cols: 7 Interactive Feature Buttons/Cards */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {features.map((feat) => {
            const Icon = feat.icon;
            const isSelected = feat.id === selectedFeature;
            return (
              <button
                key={feat.id}
                onClick={() => setSelectedFeature(feat.id)}
                className={`p-3 rounded-xl text-left border transition-all cursor-pointer flex items-start gap-3 group relative ${
                  isSelected
                    ? 'bg-slate-900 border-indigo-500 shadow-lg shadow-indigo-950/50 ring-1 ring-indigo-500/40'
                    : 'bg-slate-900/60 border-slate-800/80 hover:bg-slate-900 hover:border-slate-700'
                } ${feat.id === 6 ? 'sm:col-span-2' : ''}`}
              >
                <div className={`p-2 rounded-lg border ${feat.color} shrink-0 group-hover:scale-105 transition-transform`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1 mb-0.5">
                    <h3 className={`text-xs font-bold truncate ${isSelected ? 'text-white' : 'text-slate-200 group-hover:text-white'}`}>
                      {feat.name}
                    </h3>
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 font-medium">
                      {feat.badge}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 line-clamp-1">
                    {feat.desc}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right 5 cols: Active Feature Live AI Simulation Inspector */}
        <div className="lg:col-span-5">
          <div className="p-5 rounded-2xl bg-gradient-to-b from-slate-900 via-slate-900 to-indigo-950/30 border border-indigo-500/30 shadow-2xl relative overflow-hidden backdrop-blur-md">
            {/* Active Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2.5">
                <div className={`p-2 rounded-xl border ${active.color}`}>
                  <ActiveIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white font-display">{active.name}</h3>
                  <span className="text-[10px] text-indigo-300 font-mono">{active.tag}</span>
                </div>
              </div>
              <span className="text-xs px-2.5 py-1 rounded-full bg-indigo-500/20 text-indigo-300 font-semibold border border-indigo-500/30">
                Interactive Preview
              </span>
            </div>

            {/* Description */}
            <p className="text-xs text-slate-300 py-3 leading-relaxed">
              {active.desc}
            </p>

            {/* Micro AI Chat interaction preview */}
            <div className="space-y-2 py-1">
              <div className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800 text-xs">
                <p className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold mb-1">Student Asks:</p>
                <p className="text-slate-200 italic">{active.mockQuery}</p>
              </div>

              <div className="p-2.5 rounded-lg bg-indigo-950/60 border border-indigo-500/30 text-xs">
                <p className="text-[10px] text-cyan-400 uppercase tracking-wider font-semibold mb-1 flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> Assistant Live Response:
                </p>
                <p className="text-indigo-100 font-medium">{active.mockResult}</p>
              </div>
            </div>

            {/* Benefit metric pill */}
            <div className="mt-3 pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
              <span className="text-slate-400">Impact Metric:</span>
              <span className="font-bold text-emerald-400 flex items-center gap-1 font-mono">
                <CheckCircle2 className="w-3.5 h-3.5" />
                {active.metric}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Takeaway Bar */}
      <div className="flex flex-wrap items-center justify-between pt-3 border-t border-slate-800/80 text-xs text-slate-400 relative z-10">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-white">Full Coverage:</span>
          <span className="text-slate-300">From everyday timetables to high-stakes exam tracking, all 7 modules work in harmony.</span>
        </div>
        <div className="text-slate-400 font-mono text-[11px]">
          Click cards above to preview each module
        </div>
      </div>
    </div>
  );
};

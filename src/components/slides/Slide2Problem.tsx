import React from 'react';
import { 
  AlertTriangle, 
  Calendar, 
  FileText, 
  UserCheck, 
  Clock, 
  BellRing, 
  BookOpen, 
  Layers, 
  TrendingDown, 
  Smartphone,
  ExternalLink,
  MessageCircle,
  Mail,
  Compass
} from 'lucide-react';

export const Slide2Problem: React.FC = () => {
  const painPoints = [
    {
      title: 'Class Schedules',
      icon: Calendar,
      color: 'text-amber-400 bg-amber-500/10 border-amber-500/30',
      issue: 'Scattered across unupdated PDF timetables, faculty email attachments, and sudden room changes.',
    },
    {
      title: 'Exam Timetables',
      icon: Clock,
      color: 'text-rose-400 bg-rose-500/10 border-rose-500/30',
      issue: 'Buried under complex college notice boards or legacy desktop-only portals that crash under exam load.',
    },
    {
      title: 'Attendance Details',
      icon: UserCheck,
      color: 'text-orange-400 bg-orange-500/10 border-orange-500/30',
      issue: 'No real-time tracking; students realize they have fallen below 75% threshold only when hall tickets are held.',
    },
    {
      title: 'Assignments & Deadlines',
      icon: FileText,
      color: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/30',
      issue: 'Spread across Google Classroom, LMS, paper submissions, and informal WhatsApp threads.',
    },
    {
      title: 'College Announcements',
      icon: BellRing,
      color: 'text-sky-400 bg-sky-500/10 border-sky-500/30',
      issue: 'Crucial circulars get drowned in spam emails, noisy group chats, and physical notice boards.',
    },
    {
      title: 'Study Materials',
      icon: BookOpen,
      color: 'text-purple-400 bg-purple-500/10 border-purple-500/30',
      issue: 'Broken Google Drive links, lost lecture presentations, and unorganized peer-shared notes.',
    },
  ];

  return (
    <div className="h-full w-full flex flex-col justify-between p-6 sm:p-10 lg:p-12 relative overflow-hidden bg-slate-950">
      {/* Glow Effects */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-rose-950/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-950/30 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="space-y-1 relative z-10">
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-semibold uppercase tracking-wider">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>The Core Challenge</span>
          </div>
          <span className="text-xs text-slate-500 font-medium">Slide 02 / 08</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
          Problem Statement: The Fragmented Student Experience
        </h2>
        <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
          Students must switch between <span className="text-rose-300 font-semibold underline decoration-rose-500/40">5 to 7 disconnected platforms</span> daily to track essential academic commitments.
        </p>
      </div>

      {/* Main Grid: 6 Problem Pillars + The Fragmentation Infographic */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center my-auto relative z-10">
        {/* Left 7 cols: 6 Key Problems */}
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {painPoints.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/90 hover:border-slate-700 transition-all shadow-md group"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className={`p-2 rounded-lg border ${item.color} group-hover:scale-110 transition-transform`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-white group-hover:text-indigo-300 transition-colors font-display">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed pl-1">
                  {item.issue}
                </p>
              </div>
            );
          })}
        </div>

        {/* Right 4 cols: The Friction Multiplier Visual Card */}
        <div className="lg:col-span-4 flex flex-col gap-3">
          <div className="p-5 rounded-2xl bg-gradient-to-b from-slate-900 to-rose-950/20 border border-rose-500/20 shadow-xl relative overflow-hidden">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <span className="text-xs font-bold text-rose-400 uppercase tracking-wide flex items-center gap-1.5">
                <Layers className="w-4 h-4" />
                Fragmented App Chaos
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-rose-500/10 text-rose-300 border border-rose-500/20">
                High Friction
              </span>
            </div>

            {/* Micro Badges of Disconnected Portals */}
            <div className="py-4 space-y-2 text-xs">
              <div className="p-2 rounded-lg bg-slate-950/70 border border-slate-800 flex items-center justify-between text-slate-300">
                <span className="flex items-center gap-2">
                  <Smartphone className="w-3.5 h-3.5 text-sky-400" />
                  Legacy College ERP
                </span>
                <span className="text-[10px] text-rose-400 font-mono">Slow & Clunky</span>
              </div>
              <div className="p-2 rounded-lg bg-slate-950/70 border border-slate-800 flex items-center justify-between text-slate-300">
                <span className="flex items-center gap-2">
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  Noisy WhatsApp Groups
                </span>
                <span className="text-[10px] text-amber-400 font-mono">Info Lost in Spam</span>
              </div>
              <div className="p-2 rounded-lg bg-slate-950/70 border border-slate-800 flex items-center justify-between text-slate-300">
                <span className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-indigo-400" />
                  Official Email Inbox
                </span>
                <span className="text-[10px] text-rose-400 font-mono">Unread Floods</span>
              </div>
              <div className="p-2 rounded-lg bg-slate-950/70 border border-slate-800 flex items-center justify-between text-slate-300">
                <span className="flex items-center gap-2">
                  <Compass className="w-3.5 h-3.5 text-purple-400" />
                  Google Drive / Classrooms
                </span>
                <span className="text-[10px] text-slate-400 font-mono">Disorganized</span>
              </div>
            </div>

            {/* Pain Impact Metric Box */}
            <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/25 flex items-center gap-3">
              <TrendingDown className="w-6 h-6 text-rose-400 shrink-0" />
              <div>
                <p className="text-xs font-bold text-white">40+ Minutes Wasted Daily</p>
                <p className="text-[11px] text-rose-200/80">Average time students spend hunting for schedules & deadlines.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Takeaway Bar */}
      <div className="flex flex-wrap items-center justify-between pt-3 border-t border-slate-800/80 text-xs text-slate-400 relative z-10">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-white">Key Insight:</span>
          <span className="text-slate-300">Students don't lack information; they lack a unified, intelligent gateway.</span>
        </div>
        <div className="text-slate-400 font-mono text-[11px]">
          Smart College Assistant • Hackathon Pitch
        </div>
      </div>
    </div>
  );
};

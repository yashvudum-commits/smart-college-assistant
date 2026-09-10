import React from 'react';
import { 
  Code2, 
  Server, 
  Database, 
  Cpu, 
  Sparkles, 
  Layers, 
  CheckCircle2, 
  Boxes,
  FileCode,
  Workflow,
  ShieldAlert,
  Zap
} from 'lucide-react';

export const Slide6TechStack: React.FC = () => {
  const stackLayers = [
    {
      title: 'Frontend Presentation',
      tag: 'Client Layer',
      icon: Code2,
      color: 'border-sky-500/30 bg-sky-500/10 text-sky-400',
      techs: [
        { name: 'React', role: 'Component-driven reactive user interface' },
        { name: 'JavaScript', role: 'Modern ES6+ dynamic client scripting' },
        { name: 'HTML5', role: 'Semantic structure & accessibility standards' },
        { name: 'CSS / Tailwind', role: 'Responsive utility-first modern design' },
      ],
      highlights: 'Mobile-first design, interactive widgets, instant UI reactivity',
    },
    {
      title: 'Backend Services',
      tag: 'API & Orchestration',
      icon: Server,
      color: 'border-indigo-500/30 bg-indigo-500/10 text-indigo-400',
      techs: [
        { name: 'Node.js / Express', role: 'High-throughput async event-driven API runtime' },
        { name: 'Python', role: 'FastAPI / Flask microservices for data processing' },
        { name: 'REST & WebSockets', role: 'Real-time two-way student notification channels' },
        { name: 'JWT & OAuth', role: 'Secure role-based college authentication' },
      ],
      highlights: 'Horizontal scaling, rate limiting, student session security',
    },
    {
      title: 'Database & Storage',
      tag: 'Data Persistence',
      icon: Database,
      color: 'border-amber-500/30 bg-amber-500/10 text-amber-400',
      techs: [
        { name: 'Firebase', role: 'Real-time Firestore for live notifications & chat' },
        { name: 'MySQL', role: 'Relational ACID storage for student grades & attendance' },
        { name: 'Cloud Storage', role: 'Secure storage for syllabi & lecture slide PDFs' },
        { name: 'Indexing & Cache', role: 'Sub-millisecond timetable query resolution' },
      ],
      highlights: 'Real-time synchronization with 99.9% uptime reliability',
    },
    {
      title: 'AI & Intelligence Core',
      tag: 'Cognitive Engine',
      icon: Cpu,
      color: 'border-purple-500/30 bg-purple-500/10 text-purple-400',
      techs: [
        { name: 'Chatbot Engine', role: 'Conversational agent handling student dialogues' },
        { name: 'NLP (Natural Language)', role: 'Intent classification & entity extraction' },
        { name: 'LLM Orchestration', role: 'Context-grounded campus answers' },
        { name: 'Semantic Search', role: 'Fast document search across college handbooks' },
      ],
      highlights: 'High precision, contextual understanding, zero hallucination guardrails',
    },
  ];

  return (
    <div className="h-full w-full flex flex-col justify-between p-6 sm:p-10 lg:p-12 relative overflow-hidden bg-slate-950">
      {/* Background radial accent */}
      <div className="absolute top-10 right-1/3 w-[500px] h-[500px] bg-indigo-900/15 rounded-full blur-[120px] pointer-events-none" />

      {/* Header */}
      <div className="space-y-1 relative z-10">
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-semibold uppercase tracking-wider">
            <Boxes className="w-3.5 h-3.5" />
            <span>Engineering Architecture</span>
          </div>
          <span className="text-xs text-slate-500 font-medium">Slide 06 / 08</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
          Technologies Used: Scalable 4-Tier Stack
        </h2>
        <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
          Engineered with modern, industry-standard technologies to ensure high performance, security, and effortless campus scalability.
        </p>
      </div>

      {/* 4 Architecture Column Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-auto relative z-10">
        {stackLayers.map((layer, idx) => {
          const Icon = layer.icon;
          return (
            <div 
              key={idx}
              className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/90 hover:border-slate-700 transition-all flex flex-col justify-between shadow-lg group"
            >
              {/* Card Top */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-2 rounded-lg border ${layer.color} group-hover:scale-110 transition-transform`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                    {layer.tag}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-white mb-3 font-display">
                  {layer.title}
                </h3>

                {/* Tech Pills */}
                <div className="space-y-2 mb-3">
                  {layer.techs.map((tech, tIdx) => (
                    <div key={tIdx} className="p-2 rounded-lg bg-slate-950/70 border border-slate-800/80">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-200">{tech.name}</span>
                        <Zap className="w-3 h-3 text-indigo-400" />
                      </div>
                      <p className="text-[11px] text-slate-400 leading-tight mt-0.5">
                        {tech.role}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Bottom Highlights */}
              <div className="pt-2.5 border-t border-slate-800/80">
                <div className="text-[11px] text-slate-400 flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{layer.highlights}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer Takeaway Bar */}
      <div className="flex flex-wrap items-center justify-between pt-3 border-t border-slate-800/80 text-xs text-slate-400 relative z-10">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-white">Full-Stack Synergy:</span>
          <span className="text-slate-300">Frontend (React/JS/CSS) + Backend (Node/Python) + Database (Firebase/MySQL) + AI (NLP/Chatbot)</span>
        </div>
        <div className="text-slate-400 font-mono text-[11px]">
          Smart College Assistant • Hackathon Pitch
        </div>
      </div>
    </div>
  );
};

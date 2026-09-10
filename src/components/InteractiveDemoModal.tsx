import React, { useState } from 'react';
import { 
  X, 
  Bot, 
  Send, 
  Sparkles, 
  User, 
  Clock, 
  CheckCircle2, 
  FileText, 
  Calendar, 
  AlertCircle,
  RotateCcw
} from 'lucide-react';
import { ChatMessage } from '../types';

interface InteractiveDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const INITIAL_MESSAGES: ChatMessage[] = [
  {
    id: '1',
    sender: 'assistant',
    text: 'Hello Yash! 👋 I am your Smart College Assistant. How can I help you today? You can ask about your class schedule, attendance, assignments, exam timetables, or study materials.',
    timestamp: 'Just now',
  },
];

const PRESET_QUERIES = [
  {
    label: '📊 Check My Attendance',
    query: 'What is my current attendance in all subjects?',
    response: 'Here is your live attendance summary:\n• Data Structures: 88.5% (Safe)\n• Operating Systems: 82.3% (Safe, 2 classes margin)\n• Database Systems: 74.2% ⚠️ Warning: Below 75% limit! You must attend the next 2 classes.',
    category: 'attendance' as const,
  },
  {
    label: '🕒 Next Class Schedule',
    query: 'Where is my next lecture and what time?',
    response: 'Your next class is "Database Systems (CS304)" with Prof. Sharma.\n• Room: Room 304, Academic Block B\n• Time: 11:30 AM – 12:20 PM (starts in 25 minutes)',
    category: 'schedule' as const,
  },
  {
    label: '📝 Upcoming Assignments',
    query: 'What assignments are due this week?',
    response: 'You have 2 pending assignments:\n1. Machine Learning Lab Report #4 (Due Tomorrow, 5:00 PM)\n2. Software Engineering SRS Document (Due Sunday, 11:59 PM)',
    category: 'assignment' as const,
  },
  {
    label: '📚 Download Study Materials',
    query: 'Get me Unit 3 notes for Computer Networks',
    response: 'Found official faculty materials:\n📄 CN_Unit3_Routing_Protocols_v2.pdf (14.2 MB)\nVerified by Department of Computer Science. Download link generated.',
    category: 'material' as const,
  },
  {
    label: '📢 Today’s Announcements',
    query: 'Are there any urgent college circulars today?',
    response: 'Official Notice from Dean Office (Issued 9:15 AM):\n"Campus Cultural Fest (Ignite 2025) registrations are now live on portal. Tomorrow’s guest lecture will be held in Main Auditorium at 2:00 PM."',
    category: 'announcement' as const,
  },
];

export const InteractiveDemoModal: React.FC<InteractiveDemoModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  if (!isOpen) return null;

  const handleSend = (textToSend?: string) => {
    const query = textToSend || inputText;
    if (!query.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'student',
      text: query,
      timestamp: 'Just now',
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    // Find if it matches a preset or generate intelligent answer
    const preset = PRESET_QUERIES.find(p => p.query.toLowerCase() === query.toLowerCase());

    setTimeout(() => {
      let botResponse = '';
      let category: ChatMessage['category'] = preset?.category;

      if (preset) {
        botResponse = preset.response;
      } else {
        const lower = query.toLowerCase();
        if (lower.includes('attendance')) {
          botResponse = 'Your overall attendance across 5 enrolled courses is currently 84.1%. All subjects are above the mandatory 75% threshold except Database Systems (74.2%).';
          category = 'attendance';
        } else if (lower.includes('exam') || lower.includes('timetable')) {
          botResponse = 'Mid-Semester Examinations commence next Monday, Oct 28th. Your first paper is CS301 Algorithms at 10:00 AM in Hall 2.';
          category = 'exam';
        } else if (lower.includes('schedule') || lower.includes('class')) {
          botResponse = 'Today you have 3 sessions remaining: Database Systems (11:30 AM), AI Lab (2:00 PM), and Mentor Mentee hour (4:00 PM).';
          category = 'schedule';
        } else {
          botResponse = `Verified from College SIS: Processed request for "${query}". Your academic record is synced and up to date with no pending clearance holds.`;
        }
      }

      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'assistant',
        text: botResponse,
        timestamp: 'Just now',
        category,
      };

      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 650);
  };

  const resetChat = () => {
    setMessages(INITIAL_MESSAGES);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
      <div className="bg-slate-900 border border-slate-800 w-full max-w-2xl rounded-2xl shadow-2xl flex flex-col h-[85vh] overflow-hidden">
        {/* Header */}
        <div className="p-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-400 flex items-center justify-center text-white shadow-md">
                <Bot className="w-5 h-5" />
              </div>
              <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-500 border-2 border-slate-950" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-bold text-white font-display">Smart College Assistant</h3>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono">LIVE DEMO</span>
              </div>
              <p className="text-xs text-slate-400">Connected to Mock Campus ERP & Knowledge Base</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={resetChat}
              title="Reset Conversation"
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Quick Query Pills */}
        <div className="p-3 bg-slate-900/90 border-b border-slate-800/80 flex items-center gap-2 overflow-x-auto text-xs no-scrollbar">
          <span className="text-slate-400 text-[11px] shrink-0 font-medium">Quick Prompts:</span>
          {PRESET_QUERIES.map((preset, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(preset.query)}
              className="px-2.5 py-1 rounded-full bg-slate-800 hover:bg-indigo-600/30 text-slate-300 hover:text-indigo-200 border border-slate-700/80 text-[11px] whitespace-nowrap transition-colors cursor-pointer"
            >
              {preset.label}
            </button>
          ))}
        </div>

        {/* Message Log */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4 text-xs">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-start gap-3 ${
                msg.sender === 'student' ? 'flex-row-reverse' : ''
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs shrink-0 ${
                  msg.sender === 'student'
                    ? 'bg-indigo-600 text-white font-bold'
                    : 'bg-gradient-to-tr from-cyan-500 to-indigo-600 text-white'
                }`}
              >
                {msg.sender === 'student' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>

              <div
                className={`max-w-[82%] p-3.5 rounded-2xl whitespace-pre-line leading-relaxed ${
                  msg.sender === 'student'
                    ? 'bg-indigo-600 text-white rounded-tr-sm'
                    : 'bg-slate-800/90 text-slate-200 border border-slate-700/80 rounded-tl-sm'
                }`}
              >
                {msg.text}
                <div
                  className={`text-[10px] mt-1.5 flex items-center gap-1 ${
                    msg.sender === 'student' ? 'text-indigo-200 justify-end' : 'text-slate-400'
                  }`}
                >
                  <Clock className="w-3 h-3" />
                  <span>{msg.timestamp}</span>
                </div>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-500 to-indigo-600 text-white flex items-center justify-center text-xs shrink-0">
                <Bot className="w-4 h-4" />
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-800/90 border border-slate-700/80 text-slate-400 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse delay-75" />
                <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse delay-150" />
                <span className="text-[11px] text-slate-400 ml-1">Consulting College Database...</span>
              </div>
            </div>
          )}
        </div>

        {/* Input Bar */}
        <div className="p-3 bg-slate-950 border-t border-slate-800">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ask anything about schedules, exams, attendance, notes..."
              className="flex-1 bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
            />
            <button
              type="submit"
              disabled={!inputText.trim()}
              className="p-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 text-white transition-colors cursor-pointer"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

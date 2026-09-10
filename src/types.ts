export interface SlideData {
  id: number;
  number: number;
  title: string;
  subtitle?: string;
  category?: string;
  speakerNotes: string[];
  keyTakeaway: string;
}

export type ThemeAccent = 'indigo' | 'cyan' | 'emerald' | 'violet';

export interface ChatMessage {
  id: string;
  sender: 'student' | 'assistant';
  text: string;
  timestamp: string;
  category?: 'schedule' | 'attendance' | 'exam' | 'announcement' | 'assignment' | 'material';
  actionCard?: {
    title: string;
    detail: string;
    statusBadge?: string;
  };
}

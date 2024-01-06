import type { practiceType } from './practice';

export interface IRecord {
  id: string;
  userId: string;
  type: practiceType;
  language: string;
  accuracy: number;
  typingSpeed: number;
  createdAt: string;
}

export interface IStastics {
  accuracy: number;
  typingSpeed: number;
}

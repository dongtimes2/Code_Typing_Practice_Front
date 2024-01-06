export type practiceType = 'word' | 'sentence';

export interface IPractice {
  id: string;
  type: practiceType;
  language: string;
  content: string;
}

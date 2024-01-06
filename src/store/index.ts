import { create } from 'zustand';

import type { practiceType } from '../types/practice';

interface INavigationStore {
  language: string;
  type: practiceType;
  setLanguage: (language: string) => void;
  setType: (type: practiceType) => void;
}

export const useNavigationStore = create<INavigationStore>((set) => ({
  language: '',
  type: 'word',
  setLanguage: (language) => set({ language }),
  setType: (type) => set({ type }),
}));

interface IResultStore {
  totalAccuracy: number;
  totalSpeed: number;
  totalTime: number;
  totalTypoCount: number;
  totalTypingSpeed: number;
  setTotalAccuracy: (totalAccuracy: number) => void;
  setTotalSpeed: (totalSpeed: number) => void;
  setTotalTime: (totalTime: number) => void;
  setTotalTypoCount: (totalTypoCount: number) => void;
  setTotalTypingSpeed: (totalTypingSpeed: number) => void;
  reset: () => void;
}

export const useResultStore = create<IResultStore>((set) => ({
  totalAccuracy: 0,
  totalSpeed: 0,
  totalTime: 0,
  totalTypoCount: 0,
  totalTypingSpeed: 0,
  setTotalAccuracy: (totalAccuracy) => set({ totalAccuracy }),
  setTotalSpeed: (totalSpeed) => set({ totalSpeed }),
  setTotalTime: (totalTime) => set({ totalTime }),
  setTotalTypoCount: (totalTypoCount) => set({ totalTypoCount }),
  setTotalTypingSpeed: (totalTypingSpeed) => set({ totalTypingSpeed }),
  reset: () =>
    set({
      totalAccuracy: 0,
      totalSpeed: 0,
      totalTime: 0,
      totalTypoCount: 0,
      totalTypingSpeed: 0,
    }),
}));

interface IUserInfoStore {
  isLoggedin: boolean;
  userNickname: string;
  userProfileImage: string;
  practiceNumber: number;
  sound: boolean;
  isColorWeakness: boolean;
  setIsLoggedin: (isLoggedin: boolean) => void;
  setUserNickname: (userNickname: string) => void;
  setUserProfileImage: (userProfileImage: string) => void;
  setPracticeNumber: (practiceNumber: number) => void;
  setSound: (sound: boolean) => void;
  setIsColorWeakness: (isColorWeakness: boolean) => void;
  reset: () => void;
}

export const useUserInfoStore = create<IUserInfoStore>((set) => ({
  isLoggedin: false,
  userNickname: '',
  userProfileImage: '',
  practiceNumber: 10,
  sound: false,
  isColorWeakness: false,
  setIsLoggedin: (isLoggedin) => set({ isLoggedin }),
  setUserNickname: (userNickname) => set({ userNickname }),
  setUserProfileImage: (userProfileImage) => set({ userProfileImage }),
  setPracticeNumber: (practiceNumber) => set({ practiceNumber }),
  setSound: (sound) => set({ sound }),
  setIsColorWeakness: (isColorWeakness) => set({ isColorWeakness }),
  reset: () => set({ userNickname: '', userProfileImage: '' }),
}));

interface IPracticeStateStore {
  isPracticeFinished: boolean;
  setIsPracticeFinished: (isPracticeFinished: boolean) => void;
}

export const usePracticeStateStore = create<IPracticeStateStore>((set) => ({
  isPracticeFinished: false,
  setIsPracticeFinished: (isPracticeFinished) => set({ isPracticeFinished }),
}));

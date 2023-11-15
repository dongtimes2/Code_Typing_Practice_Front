import { create } from 'zustand';

export const useNavigationStore = create((set) => ({
  language: '',
  type: '',
  setLanguage: (language) => set({ language }),
  setType: (type) => set({ type }),
}));

export const useResultStore = create((set) => ({
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

export const useUserInfoStore = create((set) => ({
  isLoggedIn: false,
  userNickname: '',
  userProfileImage: '',
  practiceNumber: 10,
  sound: false,
  isColorWeakness: false,
  setIsLoggedIn: (isLoggedIn) => set({ isLoggedIn }),
  setUserNickname: (userNickname) => set({ userNickname }),
  setUserProfileImage: (userProfileImage) => set({ userProfileImage }),
  setPracticeNumber: (practiceNumber) => set({ practiceNumber }),
  setSound: (sound) => set({ sound }),
  setIsColorWeakness: (isColorWeakness) => set({ isColorWeakness }),
  reset: () =>
    set({ userNickname: '', userProfileImage: '', isLoggedIn: false }),
}));

export const usePracticeStateStore = create((set) => ({
  isPracticeFinished: false,
  setIsPracticeFinished: (isPracticeFinished) => set({ isPracticeFinished }),
}));

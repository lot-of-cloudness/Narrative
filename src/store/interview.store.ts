import { create } from 'zustand';

interface InterviewState {
  currentStep: number;
  answers: string[];
  setCurrentStep: (step: number) => void;
  addAnswer: (answer: string) => void;
}

export const useInterviewStore = create<InterviewState>((set) => ({
  currentStep: 0,
  answers: [],
  setCurrentStep: (step) => set({ currentStep: step }),
  addAnswer: (answer) =>
    set((state) => ({ answers: [...state.answers, answer] })),
}));

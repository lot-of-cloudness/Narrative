import { create } from 'zustand';

interface EssayState {
  title: string;
  content: string;
  isGenerating: boolean;
  setTitle: (title: string) => void;
  setContent: (content: string) => void;
  setIsGenerating: (generating: boolean) => void;
}

export const useEssayStore = create<EssayState>((set) => ({
  title: '',
  content: '',
  isGenerating: false,
  setTitle: (title) => set({ title }),
  setContent: (content) => set({ content }),
  setIsGenerating: (generating) => set({ isGenerating: generating }),
}));

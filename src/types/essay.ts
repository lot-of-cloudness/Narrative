export interface Essay {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface EssayDraft {
  title: string;
  content: string;
}

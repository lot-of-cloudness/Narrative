export interface InterviewQuestion {
  id: string;
  question: string;
  type: 'text' | 'choice';
  options?: string[];
}

export interface InterviewAnswer {
  questionId: string;
  answer: string;
}

export interface InterviewSession {
  id: string;
  questions: InterviewQuestion[];
  answers: InterviewAnswer[];
  completed: boolean;
}

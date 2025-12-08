export interface Topic {
  id: number;
  title: string;
  description: string;
  notebookPath: string;
  duration: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  learningObjectives: string[];
  prerequisites?: number[];
}

export interface UserProgress {
  completedTopics: number[];
  currentTopic: number;
  apiKey: string;
}

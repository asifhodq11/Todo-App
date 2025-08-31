// --- TYPES ---
export type TaskPriority = 'Low' | 'Medium' | 'High';
export type TaskCategory = 'Personal' | 'Work' | 'Fitness' | 'Health' | 'Nutrition' | 'Other' | 'Break';

export interface Task {
  id: string;
  title: string;
  description?: string;
  category: TaskCategory;
  priority: TaskPriority;
  dueDate?: string;
  isCompleted: boolean;
  createdAt: string;
}

export interface Goal {
  id: string;
  title: string;
  milestones: Milestone[];
  createdAt: string;
}

export interface Milestone {
  id: string;
  text: string;
  isCompleted: boolean;
}

export interface Routine {
  id: string;
  time: string;
  duration: number; // in minutes
  activity: string;
  category: TaskCategory;
}
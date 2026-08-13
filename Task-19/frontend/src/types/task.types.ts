export interface Task {
  _id: string;
  title: string;
  description: string;
  completed: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface CreateTaskData {
  title: string;
  description: string;
  completed: boolean;
}

export interface UpdateTaskData {
  title: string;
  description: string;
  completed: boolean;
}

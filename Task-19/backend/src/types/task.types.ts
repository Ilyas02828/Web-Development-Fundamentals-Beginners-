export interface ITask {
  title: string;
  description: string;
  completed: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface CreateTaskBody {
  title: string;
  description: string;
  completed?: boolean;
}

export interface UpdateTaskBody {
  title?: string;
  description?: string;
  completed?: boolean;
}

export interface TaskParams {
  id: string;
}

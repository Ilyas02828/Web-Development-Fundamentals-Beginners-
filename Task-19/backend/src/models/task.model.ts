import mongoose from "mongoose";
import { ITask } from "../types/task.types";

const taskSchema = new mongoose.Schema<ITask>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

const Task = mongoose.model<ITask>("Task", taskSchema);
export default Task;

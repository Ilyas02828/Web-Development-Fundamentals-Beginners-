import mongoose, { Schema, type Document } from "mongoose";
export interface ITask extends Document {
  title: string;
  description: string;
  completed: boolean;

  userId: mongoose.Types.ObjectId;
  createdAt: Date;
}

const taskSchema = new Schema<ITask>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Task = mongoose.model<ITask>("Task", taskSchema);
export default Task;

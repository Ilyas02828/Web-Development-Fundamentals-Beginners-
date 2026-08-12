import { Request, Response } from "express";
import Task from "../models/task.model";
import {
  CreateTaskBody,
  UpdateTaskBody,
  TaskParams,
} from "../types/task.types";

export async function getTasks(
  request: Request,
  response: Response,
): Promise<void> {
  const tasks = await Task.find();
  response.status(200).json({ success: true, tasks });
}

export async function getTask(
  request: Request<TaskParams>,
  response: Response,
): Promise<void> {
  const { id } = request.params;

  const task = await Task.findById(id);
  if (!task) {
    response.status(404).json({ success: false, message: "Task not found" });
    return;
  }

  response.status(200).json({ success: true, task });
}

export async function createTask(
  request: Request<{}, {}, CreateTaskBody>,
  response: Response,
): Promise<void> {
  const { title, description, completed } = request.body;

  const task = await Task.create({
    title,
    description,
    completed: completed ?? false,
  });

  response
    .status(200)
    .json({ success: true, message: "Task created successfully", task });
}

export async function updateTask(
  request: Request<TaskParams, {}, UpdateTaskBody>,
  response: Response,
): Promise<void> {
  const { id } = request.params;
  const task = await Task.findByIdAndUpdate(id, request.body, {
    new: true,
    runValidators: true,
  });

  if (!task) {
    response.status(404).json({ success: false, message: "Task not found" });
    return;
  }

  response
    .status(200)
    .json({ success: true, message: "Task updated successfully", task });
}

export async function deleteTask(
  request: Request<TaskParams>,
  response: Response,
): Promise<void> {
  const { id } = request.params;

  const task = await Task.findByIdAndDelete(id);
  if (!task) {
    response.status(404).json({ success: false, message: "Task not found" });
    return;
  }

  response
    .status(200)
    .json({ success: true, message: "Task deleted successfully" });
}

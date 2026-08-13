import type { RequestHandler } from "express";
import Task from "../models/task.model";

import type {
  CreateTaskBody,
  UpdateTaskBody,
  TaskParams,
} from "../types/task.types";

export const getTasks: RequestHandler = async (request, response) => {
  try {
    const userId = request.user?.userId;
    if (!userId) {
      response.status(401).json({ success: false, message: "Unauthorized" });
      return;
    }

    const tasks = await Task.find({ userId });
    response.status(200).json({ success: true, tasks });
  } catch (error) {
    console.error("Get Tasks Error:", error);
    response
      .status(500)
      .json({ success: false, message: "Failed to get tasks" });
  }
};

export const getTask: RequestHandler<TaskParams> = async (
  request,
  response,
) => {
  try {
    const { id } = request.params;
    const userId = request.user?.userId;
    if (!userId) {
      response.status(401).json({ success: false, message: "Unauthorized" });
      return;
    }

    const task = await Task.findOne({ _id: id, userId });
    if (!task) {
      response.status(404).json({ success: false, message: "Task not found" });
      return;
    }

    response.status(200).json({ success: true, task });
  } catch (error) {
    console.error("Get Task Error:", error);
    response
      .status(500)
      .json({ success: false, message: "Failed to get task" });
  }
};

export const createTask: RequestHandler<{}, {}, CreateTaskBody> = async (
  request,
  response,
) => {
  try {
    const { title, description, completed } = request.body;
    const userId = request.user?.userId;
    if (!userId) {
      response.status(401).json({ success: false, message: "Unauthorized" });
      return;
    }

    const task = await Task.create({
      title,
      description,
      completed: completed ?? false,
      userId,
    });

    response
      .status(201)
      .json({ success: true, message: "Task created successfully", task });
  } catch (error) {
    console.error("Create Task Error:", error);
    response
      .status(500)
      .json({ success: false, message: "Failed to create task" });
  }
};

export const updateTask: RequestHandler<
  TaskParams,
  {},
  UpdateTaskBody
> = async (request, response) => {
  try {
    const { id } = request.params;
    const userId = request.user?.userId;
    if (!userId) {
      response.status(401).json({ success: false, message: "Unauthorized" });
      return;
    }

    const task = await Task.findOneAndUpdate(
      { _id: id, userId },
      request.body,
      { new: true, runValidators: true },
    );

    if (!task) {
      response.status(404).json({ success: false, message: "Task not found" });
      return;
    }

    response
      .status(200)
      .json({ success: true, message: "Task updated successfully", task });
  } catch (error) {
    console.error("Update Task Error:", error);
    response
      .status(500)
      .json({ success: false, message: "Failed to update task" });
  }
};

export const deleteTask: RequestHandler<TaskParams> = async (
  request,
  response,
) => {
  try {
    const { id } = request.params;
    const userId = request.user?.userId;
    if (!userId) {
      response.status(401).json({ success: false, message: "Unauthorized" });
      return;
    }

    const task = await Task.findOneAndDelete({ _id: id, userId });
    if (!task) {
      response.status(404).json({ success: false, message: "Task not found" });
      return;
    }

    response
      .status(200)
      .json({ success: true, message: "Task deleted successfully" });
  } catch (error) {
    console.error("Delete Task Error:", error);
    response
      .status(500)
      .json({ success: false, message: "Failed to delete task" });
  }
};

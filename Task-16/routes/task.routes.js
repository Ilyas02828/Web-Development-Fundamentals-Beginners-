const express = require("express");
const Task = require("../models/task.model");
const router = express.Router();

router.get("/", async (request, response) => {
  try {
    const tasks = await Task.find();
    response.status(200).json(tasks);
  } catch (error) {
    response.status(500).json({
      message: error.message,
    });
  }
});

router.get("/:id", async (request, response) => {
  try {
    const task = await Task.findById(request.params.id);

    if (!task) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    response.status(200).json(task);
  } catch (error) {
    response.status(500).json({
      message: error.message,
    });
  }
});

router.post("/", async (request, response) => {
  try {
    const task = await Task.create(request.body);

    response.status(201).json({
      message: "Task created successfully",
      task,
    });
  } catch (error) {
    response.status(500).json({
      message: error.message,
    });
  }
});

router.put("/:id", async (request, response) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(
      request.params.id,
      request.body,
      {
        new: true,
        runValidators: true,
      },
    );

    if (!updatedTask) {
      return response.status(404).json({
        message: "Task not found",
      });
    }

    response.status(200).json({
      message: "Task updated successfully",
      task: updatedTask,
    });
  } catch (error) {
    response.status(500).json({
      message: error.message,
    });
  }
});

router.delete("/:id", async (request, response) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(request.params.id);

    if (!deletedTask) {
      return response.status(404).json({
        message: "Task not found",
      });
    }

    response.status(200).json({
      message: "Task deleted successfully",
      task: deletedTask,
    });
  } catch (error) {
    response.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;

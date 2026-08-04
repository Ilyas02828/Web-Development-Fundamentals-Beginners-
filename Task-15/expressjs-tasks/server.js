const express = require("express");
const tasks = require("./tasks");

const app = express();
const PORT = 3000;

app.use(express.json());

app.use((request, response, next) => {
  const timestamp = new Date().toLocaleString();

  console.log(`[${timestamp}] ${request.method} ${request.url}`);
  next();
});

app.get("/tasks", (request, response) => {
  response.status(200).json(tasks);
});

app.get("/tasks/:id", (request, response) => {
  const id = Number(request.params.id);
  const task = tasks.find((task) => task.id === id);

  if (!task) {
    return response.status(404).json({ message: "Task not found" });
  }

  response.status(200).json(task);
});

app.post("/tasks", (request, response) => {
  const { title } = request.body;

  if (!title) {
    return response.status(400).json({
      message: "Title is required",
    });
  }

  const newTask = {
    id: Date.now(),
    title,
    completed: false,
  };

  tasks.push(newTask);

  response.status(201).json({
    message: "Task Added Successfully",
    task: newTask,
  });
});

app.put("/tasks/:id", (request, response) => {
  const id = Number(request.params.id);
  const task = tasks.find((task) => task.id === id);

  if (!task) {
    return request.status(404).json({
      message: "Task Not Found",
    });
  }

  const { title, completed } = request.body;

  if (title !== undefined) {
    task.title = title;
  }

  if (completed !== undefined) {
    task.completed = completed;
  }

  response.status(200).json({
    message: "Task Updated Successfully",
    task,
  });
});

app.delete("/tasks/:id", (request, response) => {
  const id = Number(request.params.id);
  const index = tasks.findIndex((task) => task.id === id);

  if (index === -1) {
    return res.status(404).json({
      message: "Task Not Found",
    });
  }

  const deletedTask = tasks.splice(index, 1);

  response.status(200).json({
    message: "Task Deleted Successfully",
    task: deletedTask[0],
  });
});

app.listen(PORT, () => {
  console.log(`Server Running at http://localhost:${PORT}`);
});

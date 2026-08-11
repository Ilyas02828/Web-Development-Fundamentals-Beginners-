const fs = require("fs");
const path = require("path");

interface Task {
  id: number;
  task: string;
}

const tasksFilePath = path.join(__dirname, "../tasks.json");

function readTasks(): Task[] {
  const data = fs.readFileSync(tasksFilePath, "utf-8");
  return JSON.parse(data) as Task[];
}

function saveTasks(tasks: Task[]): void {
  fs.writeFileSync(tasksFilePath, JSON.stringify(tasks, null, 2));
}

function displayTasks(tasks: Task[]): void {
  tasks.forEach((task: Task, index: number) => {
    console.log(`${index + 1}: ${task.task}`);
  });
}

const command: string | undefined = process.argv[2];
const value: string | undefined = process.argv[3];

if (command === "add" || command === "Add") {
  if (!value) {
    console.log("\n=================");
    console.log("Please provide a task");
    console.log("=================\n");
    process.exit(1);
  }

  const tasks: Task[] = readTasks();
  const newTask: Task = {
    id: Date.now(),
    task: value,
  };

  tasks.push(newTask);
  saveTasks(tasks);

  console.log("\n=================");
  console.log("Task added!");
  console.log("=================\n");
} else if (command === "list" || command === "List") {
  const tasks: Task[] = readTasks();

  console.log("\n============================");
  if (tasks.length === 0) {
    console.log("No tasks found");
  } else {
    displayTasks(tasks);
  }
  console.log("============================\n");
} else if (command === "delete" || command === "Delete") {
  if (!value) {
    console.log("\n=================");
    console.log("Please provide task number");
    console.log("=================\n");
    process.exit(1);
  }

  const index: number = Number(value);
  if (Number.isNaN(index)) {
    console.log("\n=================");
    console.log("Invalid task number");
    console.log("=================\n");
    process.exit(1);
  }

  const tasks: Task[] = readTasks();
  if (index < 1 || index > tasks.length) {
    console.log("\n=================");
    console.log("Task not found");
    console.log("=================\n");
    process.exit(1);
  }

  tasks.splice(index - 1, 1);
  saveTasks(tasks);

  console.log("\n=================");
  console.log("Task deleted");
  console.log("=================");
  displayTasks(tasks);
  console.log("=================\n");
} else {
  console.log("\n=================");
  console.log("Unknown Command");
  console.log("=================\n");
}

const fs = require("fs");
const path = require("path");

const tasksFilePath = path.join(__dirname, "./tasks.json");

function readTasks() {
  const data = fs.readFileSync(tasksFilePath, "utf-8");
  return JSON.parse(data);
}

function saveTasks(tasks) {
  fs.writeFileSync(tasksFilePath, JSON.stringify(tasks, null, 2));
}

const command = process.argv[2];
const value = process.argv[3];
if (command === "add" || command === "Add") {
  const tasks = readTasks();

  const newTask = {
    id: Date.now(),
    task: value,
  };

  tasks.push(newTask);
  saveTasks(tasks);

  console.log("\n=================");
  console.log("Task added!");
  console.log("=================\n");
} else if (command === "list" || command === "List") {
  const tasks = readTasks();

  console.log("\n============================");
  tasks.forEach((task, index) => {
    console.log(`${index + 1}. ${task.task}`);
  });
  console.log("============================\n");
} else if (command === "delete") {
  const index = Number(process.argv[3]);
  const tasks = readTasks();

  tasks.splice(index - 1, 1);
  saveTasks(tasks);

  console.log("\n=================");
  console.log("Task deleted");
  console.log("=================\n");
} else {
  console.log("\n=================");
  console.log("Unknown Command");
  console.log("=================\n");
}

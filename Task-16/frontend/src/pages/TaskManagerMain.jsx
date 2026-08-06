import { useEffect, useState } from "react";
import API from "../services/task.services";
import CreateTask from "../components/CreateTask";
import DisplayTasks from "../components/DisplayTasks";

import "./TaskManagerMain.css";

function TaskManagerMain() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);

  const [tasks, setTasks] = useState([]);

  const [editingTaskId, setEditingTaskId] = useState(null);

  function editTask(task) {
    setEditingTaskId(task._id);

    setTitle(task.title);
    setDescription(task.description);
    setIsCompleted(task.completed);
  }

  async function addTask() {
    try {
      const response = await API.post("/", {
        title,
        description,
        completed: isCompleted,
      });

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }

    setTitle("");
    setDescription("");
    setIsCompleted(false);
  }

  async function getTasks() {
    try {
      const response = await API.get("/");
      setTasks(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteTask(id) {
    await API.delete(`/${id}`);
    getTasks();
  }

  async function updateTask() {
    try {
      await API.put(`/${editingTaskId}`, {
        title,
        description,
        completed: isCompleted,
      });

      getTasks();
      setEditingTaskId(null);

      setTitle("");
      setDescription("");
      setIsCompleted(false);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <>
      <div className="task-manager-app-container">
        <CreateTask
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
          isCompleted={isCompleted}
          setIsCompleted={setIsCompleted}
          editingTaskId={editingTaskId}
          addTask={addTask}
          updateTask={updateTask}
        />

        <DisplayTasks
          getTasks={getTasks}
          tasks={tasks}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      </div>
    </>
  );
}

export default TaskManagerMain;

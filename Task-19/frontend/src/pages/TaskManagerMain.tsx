import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import API from "../services/task.services";

import CreateTask from "../components/CreateTask";
import DisplayTasks from "../components/DisplayTasks";
import UpdateTaskModal from "../components/UpdateTaskModal";

import type { Task, CreateTaskData, UpdateTaskData } from "../types/task.types";

import "./TaskManagerMain.css";

function TaskManagerMain() {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const [tasks, setTasks] = useState<Task[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  function editTask(task: Task): void {
    setEditingTask(task);
    setShowModal(true);
  }

  async function addTask(): Promise<void> {
    try {
      const taskData: CreateTaskData = {
        title,
        description,
        completed: isCompleted,
      };

      await API.post("/", taskData);

      setTitle("");
      setDescription("");
      setIsCompleted(false);

      await getTasks();
    } catch (error) {
      console.error("Add Task Error:", error);
    }
  }

  async function getTasks(): Promise<void> {
    try {
      const response = await API.get<Task[]>("/");
      console.log(response.data);
      setTasks(response.data.tasks);
    } catch (error) {
      console.error("Get Tasks Error:", error);
    }
  }

  async function deleteTask(id: string): Promise<void> {
    try {
      await API.delete(`/${id}`);
      await getTasks();
    } catch (error) {
      console.error("Delete Task Error:", error);
    }
  }

  async function updateTask(updatedData: UpdateTaskData): Promise<void> {
    if (!editingTask) {
      return;
    }

    try {
      await API.put(`/${editingTask._id}`, updatedData);
      await getTasks();

      setShowModal(false);
      setEditingTask(null);
    } catch (error) {
      console.error("Update Task Error:", error);
    }
  }

  function cancelUpdate(): void {
    setShowModal(false);
    setEditingTask(null);
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
          addTask={addTask}
        />

        <DisplayTasks
          getTasks={getTasks}
          tasks={tasks}
          deleteTask={deleteTask}
          editTask={editTask}
        />

        <UpdateTaskModal
          showModal={showModal}
          task={editingTask}
          updateTask={updateTask}
          cancelUpdate={cancelUpdate}
        />
      </div>

      <Link to="/logout" className="task-manager-add-button">
        Logout
      </Link>
    </>
  );
}

export default TaskManagerMain;

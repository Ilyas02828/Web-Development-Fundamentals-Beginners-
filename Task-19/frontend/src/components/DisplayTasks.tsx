import type { Task } from "../types/task.types";

import "./DisplayTasks.css";

interface DisplayTasksProps {
  getTasks: () => Promise<void>;
  tasks: Task[];
  deleteTask: (id: string) => Promise<void>;
  editTask: (task: Task) => void;
}

function DisplayTasks({ tasks, deleteTask, editTask }: DisplayTasksProps) {
  return (
    <>
      <section className="task-manager-list-section">
        <div className="task-manager-list">
          {tasks.map((task) => (
            <div key={task._id} className="task-item">
              <div>
                <h3>{task.title}</h3>
                <p>{task.description}</p>

                <span>{task.completed ? "Completed" : "Pending"}</span>
              </div>

              <div className="task-actions">
                <button
                  className="delete-btn"
                  onClick={() => deleteTask(task._id)}
                >
                  Delete
                </button>

                <button className="update-btn" onClick={() => editTask(task)}>
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default DisplayTasks;

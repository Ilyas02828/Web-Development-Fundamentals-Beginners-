import { useEffect, useState } from "react";

import type { Task, UpdateTaskData } from "../types/task.types";

import "./UpdateTaskModal.css";

interface UpdateTaskModalProps {
  showModal: boolean;
  task: Task | null;
  updateTask: (updatedData: UpdateTaskData) => Promise<void>;
  cancelUpdate: () => void;
}

function UpdateTaskModal({
  showModal,
  task,
  updateTask,
  cancelUpdate,
}: UpdateTaskModalProps) {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
      setIsCompleted(task.completed);
    }
  }, [task]);

  if (!showModal) {
    return null;
  }

  function handleUpdate(): void {
    updateTask({
      title,
      description,
      completed: isCompleted,
    });
  }

  return (
    <>
      <div className="modal-overlay">
        <div className="update-modal">
          <div className="modal-header">
            <h2>Update Task</h2>

            <button className="modal-close-button" onClick={cancelUpdate}>
              ×
            </button>
          </div>

          <div className="modal-field">
            <label>Task Title</label>

            <input
              type="text"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              placeholder="Enter task title"
            />
          </div>

          <div className="modal-field">
            <label>Task Description</label>

            <textarea
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              placeholder="Enter task description"
            />
          </div>

          <div className="modal-field">
            <label>Task Status</label>

            <select
              value={String(isCompleted)}
              onChange={(event) =>
                setIsCompleted(event.target.value === "true")
              }
            >
              <option value="false">Pending</option>

              <option value="true">Completed</option>
            </select>
          </div>

          <div className="modal-buttons">
            <button className="modal-cancel-button" onClick={cancelUpdate}>
              Cancel
            </button>

            <button className="modal-update-button" onClick={handleUpdate}>
              Update Task
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default UpdateTaskModal;

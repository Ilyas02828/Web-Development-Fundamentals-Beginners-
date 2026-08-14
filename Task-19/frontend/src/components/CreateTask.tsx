import "./CreateTask.css";

interface CreateTaskProps {
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;

  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;

  isCompleted: boolean;
  setIsCompleted: React.Dispatch<React.SetStateAction<boolean>>;

  addTask: () => Promise<void>;
}

function CreateTask({
  title,
  setTitle,
  description,
  setDescription,
  isCompleted,
  setIsCompleted,
  addTask,
}: CreateTaskProps) {
  return (
    <>
      <header className="task-manager-header">
        <h1>Task Manager App</h1>
      </header>

      <section className="task-manager-input-section">
        <input
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
          type="text"
          placeholder="Enter task title"
          className="task-manager-input"
          required
        />

        <textarea
          value={description}
          onChange={(event) => {
            setDescription(event.target.value);
          }}
          placeholder="Enter task description"
          className="task-manager-date-input"
        />

        <select
          value={String(isCompleted)}
          onChange={(event) => {
            setIsCompleted(event.target.value === "true");
          }}
          name="status"
          className="status"
        >
          <option value="">Select task status</option>
          <option value="true">Completed</option>
          <option value="false">Pending</option>
        </select>

        <button onClick={addTask} className="task-manager-add-button">
          Add Task
        </button>
      </section>
    </>
  );
}

export default CreateTask;

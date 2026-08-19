import { useState, useEffect } from "react";
import axios from "axios";

import "./AdminPanel.css";

function AdminPanel() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function fetchAllTasks() {
    try {
      setLoading(true);
      setError("");

      const token = localStorage.getItem("token");

      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/tasks/admin/all`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      setTasks(response.data);
    } catch (error) {
      console.error("Get All Tasks Error:", error);

      if (error.response?.status === 403) {
        setError("Access denied. Admin privileges required.");
      } else if (error.response?.status === 401) {
        setError("Authentication required. Please login again.");
      } else {
        setError("Failed to load tasks.");
      }
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchAllTasks();
  }, []);
  return (
    <>
      <div className="admin-page">
        <div className="admin-container">
          <div className="admin-header">
            <div>
              <h1>Admin Panel</h1>
              <p>View and monitor all users' tasks</p>
            </div>

            <button className="refresh-btn" onClick={fetchAllTasks}>
              Refresh
            </button>
          </div>

          {error && <div className="error-message">{error}</div>}

          {loading ? (
            <div className="loading-container">
              <div className="spinner"></div>
              <p>Loading tasks...</p>
            </div>
          ) : (
            <>
              <div className="statistics">
                <div className="stat-card">
                  <div className="stat-content">
                    <p>Total Tasks</p>
                    <h2>{tasks.length}</h2>
                  </div>
                </div>

                <div className="stat-card">
                  <div className="stat-content">
                    <p>Completed</p>
                    <h2>{tasks.filter((task) => task.completed).length}</h2>
                  </div>
                </div>

                <div className="stat-card">
                  <div className="stat-content">
                    <p>Pending</p>
                    <h2>{tasks.filter((task) => !task.completed).length}</h2>
                  </div>
                </div>
              </div>

              <div className="tasks-card">
                <div className="tasks-header">
                  <div>
                    <h2>All Tasks</h2>
                    <p>All tasks created by registered users</p>
                  </div>
                  <span className="task-count">{tasks.length} Tasks</span>
                </div>

                {tasks.length === 0 ? (
                  <div className="empty-state">
                    <div className="empty-icon"></div>
                    <h3>No Tasks Found</h3>
                    <p>There are currently no tasks in the system.</p>
                  </div>
                ) : (
                  <div className="table-wrapper">
                    <table className="tasks-table">
                      <thead>
                        <tr>
                          <th>Task</th>
                          <th>Description</th>
                          <th>User</th>
                          <th>Status</th>
                          <th>Created</th>
                        </tr>
                      </thead>

                      <tbody>
                        {tasks.map((task) => (
                          <tr key={task._id}>
                            <td>
                              <div className="task-title">{task.title}</div>
                            </td>

                            <td>
                              <div className="task-description">
                                {task.description || "No description"}
                              </div>
                            </td>

                            <td>
                              <div className="user-info">
                                <div className="user-avatar">
                                  {task.userId?.name
                                    ?.charAt(0)
                                    ?.toUpperCase() || "U"}
                                </div>

                                <div>
                                  <p className="user-name">
                                    {task.userId?.name || "Unknown"}
                                  </p>

                                  <p className="user-email">
                                    {task.userId?.email || "No email"}
                                  </p>

                                  <span className="user-role">
                                    {task.userId?.role || "user"}
                                  </span>
                                </div>
                              </div>
                            </td>

                            <td>
                              {task.completed ? (
                                <span className="status completed">
                                  <span className="status-dot"></span>
                                  Completed
                                </span>
                              ) : (
                                <span className="status pending">
                                  <span className="status-dot"></span>
                                  Pending
                                </span>
                              )}
                            </td>

                            <td>
                              <span className="created-date">
                                {new Date(task.createdAt).toLocaleDateString()}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default AdminPanel;

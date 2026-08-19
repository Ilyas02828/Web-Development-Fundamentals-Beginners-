import { Link, Outlet, useLocation } from "react-router-dom";
import { useState } from "react";

import "./AdminDashboard.css";

function AdminDashboard() {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const isDashboard = location.pathname === "/admin";
  const isTasksPage = location.pathname === "/admin/tasks";

  return (
    <div className="admin-dashboard">
      {sidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      <aside className={`admin-sidebar ${sidebarOpen ? "sidebar-open" : ""}`}>
        <div className="admin-brand">
          <Link to="/admin" onClick={() => setSidebarOpen(false)}>
            <span className="brand-icon">A</span>
            <span>Admin Panel</span>
          </Link>
        </div>

        <nav className="admin-navigation">
          <p className="navigation-title">ADMIN MENU</p>
          <Link
            to="/admin"
            className={`admin-nav-link ${isDashboard ? "active" : ""}`}
            onClick={() => setSidebarOpen(false)}
          >
            <span className="">⌂</span>
            <span>Dashboard</span>
          </Link>

          <Link
            to="/admin/tasks"
            className={`admin-nav-link ${isTasksPage ? "active" : ""}`}
            onClick={() => setSidebarOpen(false)}
          >
            <span className="nav-icon">☷</span>
            <span>Show All Tasks</span>
          </Link>

          <Link to="/logout" className="admin-nav-link">
            Logout
          </Link>
        </nav>
      </aside>

      <div className="admin-main">
        <header className="admin-topbar">
          <button
            className="menu-button"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            ☰
          </button>

          <div className="topbar-title">
            <h1>{isTasksPage ? "Show All Tasks" : "Admin Dashboard"}</h1>
            <p>
              {isTasksPage
                ? "View and monitor all users' tasks"
                : "Welcome to the Admin Dashboard"}
            </p>
          </div>

          <div className="topbar-actions">
            <div className="topbar-avatar">A</div>
          </div>
        </header>

        <main className="admin-content">
          {isDashboard ? <DashboardHome /> : <Outlet />}
        </main>
      </div>
    </div>
  );
}

function DashboardHome() {
  return (
    <div className="dashboard-home">
      <div className="dashboard-welcome">
        <div>
          <h2>Welcome to Admin Dashboard</h2>
          <p>Manage and monitor tasks created by registered users.</p>
        </div>

        <Link to="/admin/tasks" className="view-tasks-button">
          Show All Tasks →
        </Link>
      </div>

      <div className="admin-info-grid">
        <div className="admin-info-card">
          <div className="info-icon">☷</div>
          <div>
            <h3>All Tasks</h3>
            <p>View every task created by registered users.</p>
          </div>
        </div>

        <div className="admin-info-card">
          <div className="info-icon">♙</div>
          <div>
            <h3>User Information</h3>
            <p>See the user associated with every task.</p>
          </div>
        </div>

        <div className="admin-info-card">
          <div className="info-icon">✓</div>
          <div>
            <h3>Task Status</h3>
            <p>Monitor completed and pending tasks.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;

import { Navigate } from "react-router-dom";

function AdminRoute({ children }) {
  const token = localStorage.getItem("token");
  const storedUser = localStorage.getItem("user");

  let user = null;
  try {
    user = storedUser ? JSON.parse(storedUser) : null;
  } catch (error) {
    console.error("Invalid user data:", error);
    localStorage.removeItem("user");
  }

  if (!user || !token) {
    return <Navigate to="/login" replace />;
  }

  if (user.role?.toLowerCase() !== "admin") {
    return <Navigate to="/tasks" replace />;
  }

  return children;
}

export default AdminRoute;

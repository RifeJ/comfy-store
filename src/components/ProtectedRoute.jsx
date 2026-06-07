import { Navigate } from "react-router";

const ProtectedRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user" || "{}"));

  if (user.role !== "admin") {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;

import { Navigate, Outlet } from "react-router-dom";

export function AuthCheck() {
    const access_token = localStorage.getItem("access_token");
    if (!access_token) {
    return <Navigate to="/login" />;
    }
  return <Outlet />;
}

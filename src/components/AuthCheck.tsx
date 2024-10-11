import { Navigate, Outlet } from "react-router-dom";

export function AuthCheck() {
  //   const login = localStorage.getItem("login");
  //   if (!login) {
  //   return <Navigate to="/login" />;
  //   }
  return <Outlet />;
}

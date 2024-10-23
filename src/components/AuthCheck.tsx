import { Navigate, Outlet } from "react-router-dom";

export function AuthCheck() {
    // const access_token = localStorage.getItem("access_token");
    // versalda production ga chiqardim portfolioga qo'shish uchun loginsiz kirish uchun token ni komentga oldim 
    const access_token = true
    if (!access_token) {
    return <Navigate to="/login" />;
    }
  return <Outlet />;
}

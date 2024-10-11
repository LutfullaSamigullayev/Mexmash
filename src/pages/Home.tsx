import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Nav } from "../components/Nav";

export function Home() {
  return (
    <div className="flex">
      <Nav />
      <div className="flex-auto border border-blue-700">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}

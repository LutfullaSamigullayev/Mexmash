import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Nav } from "../components/Nav";

export function Home() {
  return (
    <div className="flex h-full">
      <Nav />
      <div className="flex-auto">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}

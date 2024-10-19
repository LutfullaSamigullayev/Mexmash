import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Nav } from "../components/Nav";
import { ConfigProvider, theme } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useEffect } from "react";



export function Home() {
  
  const { defaultAlgorithm, darkAlgorithm } = theme;

  const isDarkMode = useSelector((state: RootState ) => state.dark.isDarkMode);

//   console.log(isDarkMode)

//   const darkTheme = isDarkMode ? 'dark' : 'light'

// useEffect(() => {
//   localStorage.setItem("theme", darkTheme)
// },[isDarkMode])

  return (
    <ConfigProvider
    theme={{
      algorithm: isDarkMode == 'dark' ? darkAlgorithm : defaultAlgorithm,
     }}
    >
    <div className="flex h-full">
      <Nav />
      <div className="flex-auto">
        <Header />
        <Outlet />
      </div>
    </div>
    </ConfigProvider>
  );
}

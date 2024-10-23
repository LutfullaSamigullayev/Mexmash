import { Button, Select, Space } from "antd";
import { GlobalOutlined, SunOutlined, LogoutOutlined } from "@ant-design/icons";
import { Dispatch } from "redux"; // Redux dispatch uchun
import { useDispatch, useSelector } from "react-redux"; // Redux dispatch uchun hook
import { useNavigate } from "react-router-dom";
// import { setTheme } from "@/redux/slices/themaSlice";
import { useEffect } from "react";
import { setLang } from "@/redux/slices/langSlice";
import { toggleDarkMode } from "@/redux/slices/darkSlice";
import { RootState } from "@/redux/store";

export function Header() {
  const dispatch: Dispatch = useDispatch(); // Redux dispatch
  const navigate = useNavigate();

  // const [theme, setTheme] = useState(() => {
  //   const mode = localStorage.getItem("theme");
  //   return mode || "light";
  // });

  // const theme = useSelector((state: { theme: { theme: string } }) => state.theme.theme);

  // const toggleTheme = () => {
  //     dispatch(setTheme(theme == 'light' ? "dark" : "light"))
  //   }

  //   const theme = localStorage.getItem("theme")

  // useEffect(() => {
  //   const savedTheme = localStorage.getItem('theme');
  //   if (savedTheme === 'light' || savedTheme === 'dark') {
  //     dispatch(setTheme(savedTheme)); // To'g'ri qiymat bo'lsa, faqat ularni uzatamiz
  //   } else {
  //     dispatch(setTheme("light")); // Default tema
  //   }
  // }, [dispatch]);

  // const toggleTheme = () => {
  //   setTheme((changeTheme) => {
  //     console.log(changeTheme);
  //     const newTheme = changeTheme === "light" ? "dark" : "light";
  //     localStorage.setItem("theme", newTheme); // Yangi tema saqlanadi
  //     return newTheme;
  //   });
  // };

  // useEffect(() => {
  //   document.body.className = theme;
  //   // // Tema o'zgarganda uni localStorage ga saqlash
  //   localStorage.setItem("theme", theme);
  // }, [theme]);

  // const setThema = useSelector<RootState, ThemeState>((state) => state.theme)

  const isDarkMode = useSelector((state: RootState) => state.dark.isDarkMode);

  const localStorageTheme = localStorage.getItem("theme");

  const localStorageLang = localStorage.getItem("lang")

  const newMode = isDarkMode == "dark" ? "light" : "dark";

  useEffect(() => {
    dispatch(toggleDarkMode(localStorageTheme == "dark" ? "dark" : "light"));
    localStorageTheme == "dark" ? document.body.classList.add("dark") : null;
    if(localStorageLang) {
      dispatch(setLang(localStorageLang))
    }
  }, [localStorageTheme, localStorageLang]);

  const clickSetLang = (value: string) => {
    dispatch(setLang(value));
    localStorage.setItem("lang", value)
    console.log(value)
  };

  const logout = () => {
    localStorage.clear();
    window.location.reload();
    return navigate("/login");
  };

  const clickDarkMode = () => {
    dispatch(toggleDarkMode(newMode));
    document.body.classList.toggle("dark");
    localStorage.setItem("theme", newMode);
  };

  return (
    <div className="w-full flex justify-end p-3 pl-7 shadow-sm">
      <div className="flex gap-2">
        <Space wrap>
          <Select
            className="w-fit"
            defaultValue={localStorageLang || "uz"}
            suffixIcon={<GlobalOutlined />}
            onChange={clickSetLang}
            options={[
              { value: "uz", label: "Uz" },
              { value: "ru", label: "Ru" },
              { value: "en", label: "En" },
            ]}
          />
        </Space>
        <Button onClick={clickDarkMode}>
          <SunOutlined />
        </Button>
        <a href="#">
          <img
            src="/person.png"
            alt="person"
            className="w-8 h-8 rounded-full"
          />
        </a>
        <Button onClick={logout} type="primary">
          <LogoutOutlined />
        </Button>
      </div>
    </div>
  );
}

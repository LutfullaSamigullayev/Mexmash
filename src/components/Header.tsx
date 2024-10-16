import { Button, Select, Space, Input } from "antd";
import { GlobalOutlined, SunOutlined, LogoutOutlined } from "@ant-design/icons";
import { Dispatch } from "redux"; // Redux dispatch uchun
import { useDispatch } from "react-redux"; // Redux dispatch uchun hook
import { setSearch } from "@/redux/slices/searchSlice"; // O'zgaruvchi yo'lini moslashtiring
import { useNavigate } from "react-router-dom";

export function Header() {
  const dispatch: Dispatch = useDispatch(); // Redux dispatch
  const navigate = useNavigate();


  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const { Search } = Input;

  const onSearch = (value: string) => {
    dispatch(setSearch(value));
  };

  const logout = () => {
    localStorage.clear();
    return navigate("/login");
  };

  return (


    <div className="w-full flex justify-between p-3 pl-7 shadow-sm">
      <Search
        placeholder="Izlash..."
        allowClear
        onChange={(e) => {
          dispatch(setSearch(e.target.value));
        }}
        onSearch={onSearch}
        style={{
          width: 400,
        }}
      />
      <div className="flex gap-2">
        <Space wrap>
          <Select
            className="w-fit"
            defaultValue="uz"
            suffixIcon={<GlobalOutlined />}
            onChange={handleChange}
            options={[
              { value: "uz", label: "Uz" },
              { value: "ru", label: "Ru" },
              { value: "en", label: "En" },
            ]}
          />
        </Space>
        <Button>
          <SunOutlined />
        </Button>
        <a href="#">
          <img
            src="/public/person.png"
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

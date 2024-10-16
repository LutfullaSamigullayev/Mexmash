import { useState } from "react";
import {
  ContainerOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import { Icons } from "./Icons";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    key: "/",
    icon: <PieChartOutlined />,
    label: <Link to={"/"}>Asosiy</Link>,
  },
  {
    key: "users",
    icon: <UserOutlined />,
    label: <Link to={"/users"}>Foydalanuvchilar</Link>,
  },
  {
    key: "products",
    icon: <ShoppingCartOutlined />,
    label: <Link to={"/products"}>Maxsulotlar</Link>,
  },
  {
    key: "cart",
    icon: <ContainerOutlined />,
    label: <Link to={"/cart"}>Buyurtmalar</Link>,
  },
];

export function Nav() {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="max-w-48 h-full flex flex-col transition-all ease-in duration-700">
      <div className="relative">
        <div className="flex items-center gap-2  p-2 pl-4 ">
        <Icons.logo2 width={40} />
        {collapsed ? null : 'Mexmash'}
        </div>
        <Button
        type="text"
        onClick={toggleCollapsed}
        className="absolute -right-6 bottom-2"
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      </div>
      <Menu
        className=""
        defaultSelectedKeys={[currentPath === "/" ? "/" : currentPath.slice(1)]}
        mode="inline"
        theme="light"
        inlineCollapsed={collapsed}
        items={items}
      />
    </div>
  );
}

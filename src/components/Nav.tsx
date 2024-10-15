import { useState } from "react";
import {
  ContainerOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from 'antd';
import { Button, Menu } from "antd";
import { Link } from "react-router-dom";

type MenuItem = Required<MenuProps>['items'][number];

const items : MenuItem[] = [
  {
    key: "1",
    icon: <PieChartOutlined />,
    label: <Link to={"/"}>Asosiy</Link>,
  },
  {
    key: "2",
    icon: <UserOutlined />,
    label: <Link to={"/users"}>Foydalanuvchilar</Link>,
  },
  {
    key: "3",
    icon: <ShoppingCartOutlined />,
    label: <Link to={"/products"}>Maxsulotlar</Link>,
  },
  {
    key: "4",
    icon: <ContainerOutlined />,
    label: <Link to={"/cart"}>Buyurtmalar</Link>,
  },
];
export function Nav() {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div
      className="w-fit border border-red-500 "
      style={
        {
          // width: 256,
        }
      }
    >
      <Button
        type="text"
        onClick={toggleCollapsed}
        style={{
          marginBottom: 16,
        }}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu
        className="border border-red-500"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        theme="light"
        inlineCollapsed={collapsed}
        items={items}
      />
    </div>
  );
}

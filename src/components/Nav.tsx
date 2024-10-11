import { useState } from "react";
import {
  ContainerOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Menu } from "antd";
const items = [
  {
    key: "1",
    icon: <PieChartOutlined />,
    label: "Asosiy",
  },
  {
    key: "2",
    icon: <UserOutlined />,
    label: "Foydalanuvchilar",
  },
  {
    key: "3",
    icon: <ShoppingCartOutlined />,
    label: "Maxsulotlar",
  },
  {
    key: "4",
    icon: <ContainerOutlined />,
    label: "Buyurtmalar",
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

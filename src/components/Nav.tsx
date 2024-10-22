import { useEffect, useState } from "react";
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
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

type MenuItem = Required<MenuProps>["items"][number];


export function Nav() {
  
  const lang = useSelector(
    (state: { lang: { lang: string } }) => state.lang.lang
  );
  const { t, i18n } = useTranslation();
  
  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);
  
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  
  const location = useLocation();
  const currentPath = location.pathname;
  
  const items: MenuItem[] = [
    {
      key: "/",
      icon: <PieChartOutlined />,
      label: <Link to={"/"}>{t("Main")}</Link>,
    },
    {
      key: "users",
      icon: <UserOutlined />,
      label: <Link to={"/users"}>{t("Users")}</Link>,
    },
    {
      key: "products",
      icon: <ShoppingCartOutlined />,
      label: <Link to={"/products"}>{t("Products")}</Link>,
    },
    {
      key: "cart",
      icon: <ContainerOutlined />,
      label: <Link to={"/cart"}>{t("Orders")}</Link>,
    },
  ];


  return (
    <div className={`flex flex-col ${collapsed ? 'w-20' : 'w-48'} h-full transition-all ease-in duration-300 `}>
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
        defaultSelectedKeys={[currentPath === "/" ? "/" : currentPath.slice(1)]}
        mode="inline"
        theme="light"
        inlineCollapsed={collapsed}
        items={items}
      />
    </div>
  );
}

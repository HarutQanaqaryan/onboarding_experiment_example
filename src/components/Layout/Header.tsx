import React from "react";
import { Layout, Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import { Onboarding } from "../Onboarding";

const { Header: AntHeader } = Layout;

export const Header: React.FC = () => {
  const location = useLocation();

  const menuItems = [
    {
      key: "/page1",
      label: <Link to="/page1">Страница 1</Link>,
    },
    {
      key: "/page2",
      label: <Link to="/page2">Страница 2</Link>,
    },
  ];

  return (
    <AntHeader
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Menu
        theme="dark"
        mode="horizontal"
        selectedKeys={[location.pathname]}
        items={menuItems}
        style={{ width: "90%" }}
      />
      <Onboarding />
    </AntHeader>
  );
};

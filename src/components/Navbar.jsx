import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Typography, Menu, Avatar } from "antd";
import {
  HomeOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";

import icon from "../Images/cryptocurrency.png";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(null);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize < 768) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  const menuItems = [
    {
      key: "Home",
      icon: <HomeOutlined />,
      // label: "Home",
      label: <Link to="/">Home</Link>,
    },
    {
      key: "Cryptocurrencies",
      icon: <FundOutlined />,
      // label: "Cryptocurrencies",
      label: <Link to="/cryptocurrencies">Cryptocurrencies</Link>,
    },
    {
      key: "News",
      icon: <BulbOutlined />,
      // label: "News",
      label: <Link to="/news">News</Link>,
    },
  ];

  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="/">CryptoWorld</Link>
        </Typography.Title>
        <Button
          className="menu-control-container"
          onClick={() => setActiveMenu(!activeMenu)}
        >
          <MenuOutlined />
        </Button>
      </div>

      {activeMenu && (
        // <Menu theme="dark">
        //   <Menu.Item icon={<HomeOutlined />}>
        //     <Link to="/">Home</Link>
        //   </Menu.Item>
        //   <Menu.Item icon={<FundOutlined />}>
        //     <Link to="/cryptocurrencies">Cryptocurrencies</Link>
        //   </Menu.Item>
        //   <Menu.Item icon={<BulbOutlined />}>
        //     <Link to="/news">News</Link>
        //   </Menu.Item>
        // </Menu>
        <Menu items={menuItems} />
      )}
    </div>
  );
};

export default Navbar;

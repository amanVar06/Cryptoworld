import React from "react";
import { Link } from "react-router-dom";
import { Button, Typography, Menu, Avatar } from "antd";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";

import icon from "../Images/cryptocurrency.png";

// const menuItems = [
//   {
//     key: "Home",
//     icon: <HomeOutlined />,
//     childern: [<Link to="/">Home</Link>],
//   },
//   {
//     key: "Cryptocurrencies",
//     icon: <FundOutlined />,
//     childern: [<Link to="/cryptocurrencies">Cryptocurrencies</Link>],
//   },
//   {
//     key: "Exchanges",
//     icon: <MoneyCollectOutlined />,
//     childern: [<Link to="/exchanges">Exchanges</Link>],
//   },
//   {
//     key: "News",
//     icon: <BulbOutlined />,
//     childern: [<Link to="/news">News</Link>],
//   },
// ];

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="/">Cryptoverse</Link>
        </Typography.Title>
      </div>
      <Menu theme="dark">
        <Menu.Item icon={<HomeOutlined />}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item icon={<FundOutlined />}>
          <Link to="/cryptocurrencies">Cryptocurrencies</Link>
        </Menu.Item>
        <Menu.Item icon={<MoneyCollectOutlined />}>
          <Link to="/exchanges">Exchanges</Link>
        </Menu.Item>
        <Menu.Item icon={<BulbOutlined />}>
          <Link to="/news">News</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Navbar;

import React, { useState, useEffect } from "react";
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

//visit this for cryto logo
/*
https://www.google.com/search?rlz=1C1VDKB_enIN977IN977&sxsrf=ALiCzsbBG5MUnPYvcf81dXQcDBLjKAQc5w:1660454651841&q=crypto+logo&tbm=isch&chips=q:crypto+logo,g_1:cryptocurrency:mGVivQzmKR8%3D&usg=AI4_-kRPMFMmybLI2Pz1flTPRnL1Yy-9pQ&sa=X&ved=2ahUKEwjQ38DNy8X5AhUbZt4KHSMsDPMQgIoDKAJ6BAgCEBE&biw=767&bih=712&dpr=1.25#imgrc=WJBOV2FveVQP_M
*/
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

  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="/">Cryptoverse</Link>
        </Typography.Title>
        <Button
          className="menu-control-container"
          onClick={() => setActiveMenu(!activeMenu)}
        >
          <MenuOutlined />
        </Button>
      </div>

      {activeMenu && (
        <Menu theme="dark">
          <Menu.Item icon={<HomeOutlined />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item icon={<FundOutlined />}>
            <Link to="/cryptocurrencies">Cryptocurrencies</Link>
          </Menu.Item>
          {/* <Menu.Item icon={<MoneyCollectOutlined />}>
            <Link to="/exchanges">Exchanges</Link>
          </Menu.Item> */}
          <Menu.Item icon={<BulbOutlined />}>
            <Link to="/news">News</Link>
          </Menu.Item>
        </Menu>
      )}
    </div>
  );
};

export default Navbar;

import "./SideBar.modules.scss";
import Robot from "../Icons/Robot";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import User from "../Icons/User";

function SideBar({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/",
      name: "Dashboard",
      icon: <Robot />,
    },
    {
      path: "/about",
      name: "About",
      icon: <Robot />,
    },
    {
      path: "/analytics",
      name: "Analytics",
      icon: <Robot />,
    },
    {
      path: "/comment",
      name: "Comment",
      icon: <Robot />,
    },
    {
      path: "/product",
      name: "Product",
      icon: <Robot />,
    },
    {
      path: "/productList",
      name: "Product List",
      icon: <Robot />,
    },
  ];
  return (
    <div className="container">
      <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            Logo
          </h1>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <button onClick={toggle}>
              <User />
            </button>
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={item.name + index}
            className="link"
            activeclassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <div className="main">{children}</div>
    </div>
  );
}

export default SideBar;

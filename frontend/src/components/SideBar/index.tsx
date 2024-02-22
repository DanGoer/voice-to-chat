import "./SideBar.modules.scss";
import Robot from "../Icons/Robot";
import { Link } from "react-router-dom";
import User from "../Icons/User";
import { Nav } from "react-bootstrap";

function SideBar({ sideIsOpen, setSideIsOpen }) {
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
    <div className="sidebar-container">
      <div style={{ width: sideIsOpen ? "200px" : "50px" }} className="sidebar">
        <div className="top_section">
          <h1
            style={{ display: sideIsOpen ? "block" : "none" }}
            className="logo"
          >
            Logo
          </h1>
          <div
            style={{ marginLeft: sideIsOpen ? "50px" : "0px" }}
            className="bars"
          >
            <button onClick={() => setSideIsOpen(!sideIsOpen)}>
              <User />
            </button>
          </div>
        </div>
        {menuItem.map((item, index) => (
          <Nav.Link
            as={Link}
            to={item.path}
            key={item.name + index}
            className="link"
            activeclassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: sideIsOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </Nav.Link>
        ))}
      </div>
    </div>
  );
}

export default SideBar;

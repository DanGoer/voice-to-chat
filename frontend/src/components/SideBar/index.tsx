import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { useSetup } from "../../context/SetupProvider";
import "./SideBar.modules.scss";
import Robot from "../Icons/Robot";
import User from "../Icons/User";

function SideBar({ toggleDarkMode }) {
  const { sideIsOpen, toggleSettings, setSideIsOpen } = useSetup();
  const menuNavItems = [
    {
      path: "/chat",
      name: "Chat",
      icon: <Robot />,
    },
    {
      path: "/faq",
      name: "FAQ",
      icon: <User />,
    },
    {
      path: "/history",
      name: "History",
      icon: <Robot />,
    },
    {
      path: "/product",
      name: "Product",
      icon: <Robot />,
    },
  ];

  return (
    <div className="sidebar-container">
      <div style={{ width: sideIsOpen ? "200px" : "50px" }} className="sidebar">
        <div className="top_section">
          <div
            style={{ marginLeft: sideIsOpen ? "50px" : "0px" }}
            className="bars"
          >
            <button onClick={() => setSideIsOpen(!sideIsOpen)}>
              <User />
            </button>
          </div>
        </div>
        <button onClick={toggleSettings} className="link">
          <div className="icon">
            <Robot />
          </div>
          <div
            style={{ display: sideIsOpen ? "block" : "none" }}
            className="link_text"
          >
            Settings
          </div>
        </button>
        <button onClick={toggleDarkMode} className="link">
          <div className="icon">
            <Robot />
          </div>
          <div
            style={{ display: sideIsOpen ? "block" : "none" }}
            className="link_text"
          >
            ToggleDarkMode
          </div>
        </button>
        {menuNavItems.map((item) => (
          <Nav.Link as={Link} to={item.path} key={item.name} className="link">
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

import "./SideBar.modules.scss";
import Robot from "../Icons/Robot";
import { Link } from "react-router-dom";
import User from "../Icons/User";
import { Nav } from "react-bootstrap";
import { useSetup } from "../../context/SetupProvider";

function SideBar({ toggleDarkMode }) {
  const { sideIsOpen, toggleSettings, setSideIsOpen } = useSetup();
  const menuItem = [
    {
      path: "/chat",
      name: "Settings",
      icon: <Robot />,
      onClick: toggleSettings,
    },
    {
      path: "/comment",
      name: "Comment",
      icon: <Robot />,
      onClick: toggleSettings,
    },
    {
      path: "/product",
      name: "Product",
      icon: <Robot />,
      onClick: toggleSettings,
    },
    {
      path: "/productList",
      name: "Product List",
      icon: <Robot />,
      onClick: toggleSettings,
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
        {menuItem.map((item, index) => (
          <Nav.Link
            as={Link}
            to={item.path}
            key={item.name + index}
            className="link"
            activeclassName="active"
            onClick={item.onClick}
          >
            <div className="icon">
              <Robot />
            </div>
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

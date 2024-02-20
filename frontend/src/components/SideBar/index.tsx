import { Button, Nav } from "react-bootstrap";
import "./SideBar.modules.scss";

function SideBar({ isSidebarOpen }) {
  console.log(isSidebarOpen);
  return (
    <div className={`sidebar ${isSidebarOpen ? "is-open" : ""}`}>
      <div className="sidebar-header">
        <Button variant="link" style={{ color: "#fff" }} className="mt-4">
          aaa
        </Button>
        <h3>react-bootstrap sidebar</h3>
      </div>
      <Nav className="flex-column pt-2">
        <p className="ml-3">Heading</p>
        <Nav.Item className="active">
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/">About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/">Portfolio</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/">FAQ</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/">Contact</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default SideBar;

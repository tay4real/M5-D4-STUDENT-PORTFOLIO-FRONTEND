import React from "react";
import { Nav } from "react-bootstrap";

export default function SideNav(props) {
  return (
    <Nav
      variant="pills"
      defaultActiveKey="/home"
      className="flex-column pt-5 "
      style={{ minHeight: "85vh" }}
    >
      <Nav.Item>
        <Nav.Link className="text-white" href="/home">
          All Students
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="text-white" eventKey="link-1">
          Manage Student
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="text-white" eventKey="link-2">
          Project List
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="text-white" eventKey="link-3">
          Manage Projects
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

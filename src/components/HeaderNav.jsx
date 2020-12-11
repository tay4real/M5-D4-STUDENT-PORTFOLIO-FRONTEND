import React, { Component } from "react";
import {
  Nav,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Row,
  Col,
} from "react-bootstrap";

class HeaderNav extends Component {
  state = {
    isSearchOpen: false,
  };

  onSearchToggle = () => {
    this.setState({
      isSearchOpen: !this.state.isSearchOpen,
    });
  };

  render() {
    return (
      <Navbar className="py-3" style={{ backgroundColor: "#111111" }}>
        <Button variant="outline-light">
          <i class="fas fa-bars >" onClick={this.props.onNavToggle}></i>
        </Button>

        <Navbar.Brand href="#home" className="text-light">
          <Row className="no-gutters">
            <Col className="px-2">
              <i class="fas fa-user-graduate"></i>
            </Col>
            <Col>Students Portfolio</Col>
          </Row>
        </Navbar.Brand>

        <Nav defaultActiveKey="/home" className="ml-auto ">
          {this.state.isSearchOpen && (
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
            </Form>
          )}
          <Button variant="outline-light">
            <i class="fas fa-search" onClick={this.onSearchToggle}></i>
          </Button>
          <Nav.Link eventKey="link-1" className="text-white">
            <i class="fab fa-github"></i>
          </Nav.Link>
          <Nav.Link eventKey="link-1" className="text-white">
            Release v1.0
          </Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}

export default HeaderNav;

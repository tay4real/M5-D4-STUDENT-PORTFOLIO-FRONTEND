import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

import HeaderNav from "./HeaderNav";
import SideNav from "./SideNav";

export default class Layout extends Component {
  state = {
    isNavOpen: true,
  };

  onNavToggle = () => {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  };
  render() {
    return (
      <Container fluid className="p-0 m-0">
        <HeaderNav
          isNavOpen={this.state.isNavOpen}
          onNavToggle={this.onNavToggle}
        />
        <Row className="p-0 m-0">
          {this.state.isNavOpen && (
            <Col xs={3} className="bg-dark" style={{ maxHeight: "100vh" }}>
              <SideNav isNavOpen={this.state.isNavOpen} />
            </Col>
          )}
          <Col className="bg-light"></Col>
        </Row>
      </Container>
    );
  }
}

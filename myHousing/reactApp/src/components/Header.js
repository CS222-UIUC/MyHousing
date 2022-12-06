import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../actions/auth";
import { Nav, Navbar, Container, Button, Form } from "react-bootstrap";

export class Header extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired,
  };

  render() {
    const { isAuthenticated } = this.props.auth;

    const authLinks = (
      <Form className="d-flex">
        <Link to="/">
          <Button
            onClick={this.props.logout}
            varient="primary"
            className="me-2"
            style={{
              color: "white",
              background: "orange",
              borderColor: "orange",
            }}
          >
            Logout
          </Button>
        </Link>
      </Form>
    );

    const guestLinks = (
      <Form className="d-flex">
        <Link to="/signIn">
          <Button
            varient="primary"
            className="me-2"
            style={{
              color: "white",
              background: "orange",
              borderColor: "orange",
            }}
          >
            Login
          </Button>
        </Link>

        <Link to="/registrationPage">
          <Button
            varient="primary"
            className="me-2"
            style={{
              color: "orange",
              background: "white",
              borderColor: "orange",
            }}
          >
            Register
          </Button>
        </Link>
      </Form>
    );

    return (
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Link to="/">
            <Navbar.Brand href="#">MyHousing</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
            >
            </Nav>
          </Navbar.Collapse>
          {isAuthenticated ? authLinks : guestLinks}
        </Container>
      </Navbar>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Header);

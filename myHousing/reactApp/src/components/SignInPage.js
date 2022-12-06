import React, { Component } from "react";
import { Link, Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { MDBContainer, MDBInput, MDBBtn } from "mdb-react-ui-kit";
import Button from 'react-bootstrap/Button'

import { login } from "../actions/auth";

export class SignInPage extends Component {
  state = {
    email: "",
    password: "",
  };

  static propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.login(this.state.email, this.state.password);
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    if (this.props.isAuthenticated) {
      return <Navigate to="/" />;
    }
    const { email, password } = this.state;

    return (
      <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
        <h1>Sign-In Here</h1>
        <form onSubmit={this.onSubmit}>
          <MDBInput
            wrapperClass="mb-4"
            label="Email address"
            id="form1"
            name="email"
            type="email"
            onChange={this.onChange}
            value={email}
          />
          <MDBInput
            wrapperClass="mb-4"
            label="Password"
            id="form2"
            name="password"
            type="password"
            onChange={this.onChange}
            value={password}
          />

          <Button variant="outline-secondary" type="submit">
            Sign in
          </Button>
          <p>
            Don't have an account? <Link to="/registrationPage">Register</Link>
          </p>
        </form>
      </MDBContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(SignInPage);

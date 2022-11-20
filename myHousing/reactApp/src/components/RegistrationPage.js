import React, { Component } from "react";
import { Link, Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  MDBBtn,
  MDBContainer,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
} from "mdb-react-ui-kit";

import { register } from "../actions/auth";
import { createMessage } from "../actions/messages";
export class RegisterationPage extends Component {
  state = {
    email: "",
    password: "",
    password2: "",
  };

  static propTypes = {
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { email, password, password2 } = this.state;
    if (password !== password2) {
      this.props.createMessage({ passwordNotMatch: "Passwords do not match" });
      console.log("Passwords do not match");
    } else {
      const newUser = {
        email,
        password,
      };
      this.props.register(newUser);
    }
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    if (this.props.isAuthenticated) {
      return <Navigate to="/" />;
    }
    const { email, password, password2 } = this.state;
    return (
      <MDBContainer className="w-50">
        <MDBCard className="text-black m-5" style={{ borderRadius: "25px" }}>
          <MDBCardBody>
            <MDBCol className="order-2 order-lg-1 d-flex flex-column align-items-center">
              <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                Register for MyHousing
              </p>

              <form onSubmit={this.onSubmit}>
                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="envelope me-3" size="lg" />
                  <MDBInput
                    label="Your Email"
                    id="form2"
                    type="email"
                    name="email"
                    onChange={this.onChange}
                    value={email}
                  />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="lock me-3" size="lg" />
                  <MDBInput
                    label="Password"
                    id="form3"
                    type="password"
                    name="password"
                    onChange={this.onChange}
                    value={password}
                  />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="key me-3" size="lg" />
                  <MDBInput
                    label="Repeat your password"
                    id="form4"
                    type="password"
                    name="password2"
                    onChange={this.onChange}
                    value={password2}
                  />
                </div>

                <MDBBtn type="submit" className="mb-4" size="lg">
                  Register
                </MDBBtn>
                <p>
                  Already have an account? <Link to="/login">Login</Link>
                </p>
              </form>
            </MDBCol>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { register, createMessage })(
  RegisterationPage
);

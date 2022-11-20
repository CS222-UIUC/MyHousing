import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Nav, Navbar, Container, Button, Form } from "react-bootstrap";
import Reviews from "./components/Reviews";
import FormPage from "./components/FormPage";
import RegistrationPage from "./components/RegistrationPage";
import SignInPage from "./components/SignInPage";
import ReviewPage from "./components/ReviewPage";
import { Link } from "react-scroll";
import MapAPI from "./components/MapAPI";

import store from "./store";
import { loadUser } from "./actions/auth";
import { Provider } from "react-redux";
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import Alerts from "./components/Alerts";

const alertOptions = {
  timeout: 3000,
  position: "top center",
};

function App() {
  store.dispatch(loadUser());

  const navToHomePage = useNavigate();
  const navToSignInPage = useNavigate();
  const navToRegistrationPage = useNavigate();

  const navigateToHomePage = () => {
    navToHomePage("/");
  };

  const navigateToSignInPage = () => {
    navToSignInPage("/signIn");
  };

  const navigateToRegistrationPage = () => {
    navToRegistrationPage("/registrationPage");
  };

  return (
    <Provider store={store}>
      <AlertProvider template={AlertTemplate} {...alertOptions}>
        <div>
          <nav>
            <Navbar bg="light" expand="lg">
              <Container fluid>
                <Navbar.Brand onClick={navigateToHomePage} href="#">
                  MyHousing
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: "100px" }}
                  >
                    <Link
                      onClick={navigateToHomePage}
                      href="#action2"
                      activeClass="active"
                      smooth
                      spy
                      to="reviews"
                    >
                      Reviews
                    </Link>
                  </Nav>
                  <Form className="d-flex">
                    <Button
                      onClick={navigateToSignInPage}
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
                    <Button
                      onClick={navigateToRegistrationPage}
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
                  </Form>
                </Navbar.Collapse>
              </Container>
            </Navbar>
            <Alerts />
            <Routes>
              <Route path="/reviewPage" element={<ReviewPage />}></Route>
              <Route path="/signIn" element={<SignInPage />} />
              <Route path="/registrationPage" element={<RegistrationPage />} />
              <Route
                path="/"
                element={
                  <div>
                    <section id="map">
                      <MapAPI />
                    </section>
                    <section id="reviews">
                      <Reviews></Reviews>{" "}
                    </section>
                    <section id="form-page">
                      <FormPage />
                    </section>
                  </div>
                }
              />
            </Routes>
          </nav>
        </div>
      </AlertProvider>
    </Provider>
  );
}

export default App;

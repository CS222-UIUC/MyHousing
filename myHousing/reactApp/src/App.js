import React from "react";
import { Routes, Route } from "react-router-dom";

import Reviews from "./components/Reviews";
import FormPage from "./components/FormPage";
import RegistrationPage from "./components/RegistrationPage";
import SignInPage from "./components/SignInPage";
import ReviewPage from "./components/ReviewPage";
import MapAPI from "./components/MapAPI";
import CreateReview from "./components/CreateReview";

import store from "./store";
import { loadUser } from "./actions/auth";
import { Provider } from "react-redux";
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import Alerts from "./components/Alerts";
import Header from "./components/Header";

const alertOptions = {
  timeout: 3000,
  position: "top center",
};

function App() {
  store.dispatch(loadUser());

  return (
    <Provider store={store}>
      <AlertProvider template={AlertTemplate} {...alertOptions}>
        <Alerts />
        <div>
          <nav>
            <Header />
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

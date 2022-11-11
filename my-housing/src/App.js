//import './App.css';
import React from "react"
import {useRef} from 'react'
import { Element } from 'react-scroll'
import { Nav, Navbar, Container, Button, Form } from "react-bootstrap"
// import NavBar from './components/NavBar'
import Reviews from './components/Reviews';
import FormPage from './components/FormPage'
import RegistrationPage from './components/RegistrationPage';
import SignInPage from './components/SignInPage';
//import TestScroll from './components/TestScroll';
import ProfilePage from './components/ProfilePage';
import { Link } from "react-scroll";
import { render } from "react-dom";
import {GoogleMap, useLoadScript, Marker} from "@react-google-maps/api"
import MapAPI from "./components/MapAPI";


//import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  
  const [signInState, setSignInState] = React.useState(true);
  const [signRegistration, setRegistration] = React.useState(true);
  function toggle() {
    setSignInState(false)
    setRegistration(true)
  }
  function toggle1() {
    setSignInState(true)
    setRegistration(false)
  }
  function refreshPage() {
    window.location.reload(false);
  }
  
  let renderComponents;
  if(!signInState && signRegistration) {
    renderComponents = <SignInPage/>;
  } else if (signInState && !signRegistration) {
    renderComponents = <RegistrationPage/>;
  } else {
    renderComponents = <div> 
      <section id = "map"><MapAPI/></section>
      <section id = "reviews"><Reviews /></section>
      <section id = "form-page"><FormPage/></section>
       </div>
  }
  return (
    <div>
       <nav>
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand onClick={refreshPage}href="#">MyHousing</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                    >
                        <Link href="#action2" activeClass="active" smooth spy to="reviews">Reviews</Link>
                        <Link href="#action2" activeClass="active" smooth spy to="form-page">Roomate Finder</Link>
                    </Nav>
                    <Form className="d-flex">
                        <Button onClick={toggle} varient="primary" className="me-2" style={{ color: "white", background: "orange", borderColor:"orange"}}>Login</Button>
                        <Button onClick = {toggle1} varient="primary" className="me-2" style={{ color: "orange", background: "white", borderColor:"orange"}}>Register</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>    
        </nav>
        
      {renderComponents}
      {/*
      <SignInPage/>
      <RegistrationPage/>
      <Reviews/> */}
       {/* <ProfilePage/> */}
      {/* <FormPage/> */}
      
    </div>
    
  );
}

export default App;

import React from 'react'
import './NavBarComp.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Nav, Navbar, Container, Button, Form } from "react-bootstrap"


export default function NavBarComp() {
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">MyHousing</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav
                        className="me-auto my-2 my-lg-10"
                        style={{ maxHeight: '100px' }}
                    >
                        <Nav.Link href="#action1">Reviews</Nav.Link>
                        <Nav.Link href="#action2">Roomate Finder</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Button varient="primary" className="me-2" style={{ color: "white", background: "orange", borderColor:"orange"}}>Login</Button>
                        <Button varient="primary" className="me-2" style={{ color: "orange", background: "white", borderColor:"orange"}}>Register</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
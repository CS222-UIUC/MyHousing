import React from "react"
import { MDBInputGroup, MDBInput, MDBIcon, MDBAlert, MDBBtn } from 'mdb-react-ui-kit';
import Card from 'react-bootstrap/Card';
import logo from "./212_East_apartment.jpg"
import logo1 from "./5stars.png"

function Reviews() {
    return(
        <div className="pt-10">
            <div className = "flex">
            <h1 className = "font-sans-Montserrat pl-10 pr-20 fw-700">Reviews</h1>
                <MDBInputGroup>
                    <MDBInput label='Search'> </MDBInput>
                    <MDBBtn color = "black" onClick={() => setShowSearchAlert(true)} rippleColor='dark'>
                    <MDBIcon icon='search' />
                    </MDBBtn>
                </MDBInputGroup>
            </div>
            <div><p className = "pl-10">Search here for reviews from tenants on realty companies near you</p></div>
            <div>
            <Card style={{ width: '20rem' }} className = "ml-10">
                <Card.Img variant="top" src={logo} />
                <Card.Body>
                    <Card.Title>Company Name</Card.Title>
                    <Card.Img variant="top" src={logo1} />
                    <Card.Text>
                    "MyHousing helped me find the best space to live this semester" - User
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
            </Card>
            </div>
        </div>
    )
}
export default Reviews;
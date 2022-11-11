import React, {useState} from "react"
import { MDBInputGroup, MDBInput, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import logo from "./212_East_apartment.jpg"
import logo1 from "./5stars.png"
import "./Reviews.css"

function Reviews() {
    //const [showSearchAlert, setShowSearchAlert] = useState(false);
    return(
        <div >
            <div>
            <h1 className = "reviews pl-10 fw-700">Reviews</h1>
            <InputGroup className="mb-3 pl-10">
            <Form.Control
            placeholder="Apartment Name"
            aria-label="Apartment Name"
            aria-describedby="basic-addon2"
            />
        <Button variant="outline-secondary" id="button-addon2">
          Search
        </Button>
      </InputGroup>
            </div>
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
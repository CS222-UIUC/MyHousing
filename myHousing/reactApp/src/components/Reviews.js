import React, {useState} from "react"
import { MDBInputGroup, MDBInput, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';
import { Routes, Route, useNavigate } from 'react-router-dom';
import ReviewPage from "./ReviewPage";
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import logo from "./212_East_apartment.jpg"
import logo1 from "./5stars.png"
import "./Reviews.css"
import ReviewListAPI from "./ReviewListAPI";
import HousingReviewAPI from "./HousingReviewAPI";

function Reviews() {
    //const [showSearchAlert, setShowSearchAlert] = useState(false);
    const navToReviewPage = useNavigate();
    const navigateToReviewPage = () => {
        navToReviewPage('/reviewPage');
        
      }
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
        <Button onClick = {navigateToReviewPage} variant="outline-secondary" id="button-addon2" >
          Search
        </Button>
      </InputGroup>
            </div>
            <div>
            <ReviewListAPI/>
            <HousingReviewAPI/>
            </div>
            <Routes>
                <Route path="/reviewPage" element={<ReviewPage/>}>
                </Route>
            </Routes>
        </div>
    )
}
export default Reviews;
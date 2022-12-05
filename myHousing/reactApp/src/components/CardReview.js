import React from "react";
import Card from 'react-bootstrap/Card';
import logo from "./212_East_apartment.jpg"
import logo1 from "./5stars.png"
import { Routes, Route, useNavigate, Link } from 'react-router-dom';
import ReviewPage from "./ReviewPage";



const CardReview = ({ housingInfo }) => {
    const navigate = useNavigate();
    const toComponentB = () => {
        navigate('/reviewPage', { state:housingInfo });
    }
    return (
        <div onClick={()=>{toComponentB()}}>
            <Card style={{ width: '23rem' }} className="ml-10">
                <Card.Img variant="top" src={logo} />
                <Card.Body>
                    <div className="font-[700] text-2xl">{housingInfo.housing_name}</div>
                    <div className="font-[700]">Address: {housingInfo.street_address}</div>
                    <div className="font-[700]">Price: ${housingInfo.housing_price}</div>
                    <div className="mt-3 h-[200px] overflow-auto">
                        {housingInfo.housing_description}
                    </div>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
            </Card>
            <Routes>
                <Route path="/reviewPage" element={<ReviewPage />}>
                </Route>
            </Routes>
        </div>
    );
}

export default CardReview; 
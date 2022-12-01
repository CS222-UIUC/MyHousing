import React from "react";
import Card from 'react-bootstrap/Card';
import logo from "./212_East_apartment.jpg"
import logo1 from "./5stars.png"


const CardReview = ({ housingInfo }) => {
    return (
        <Card style={{ width: '23rem' }} className="ml-10">
            <Card.Img variant="top" src={logo} />
            <Card.Body>
                <div className="font-[700] text-2xl">{housingInfo.housing_name}</div>
                <div className="font-[500]">Address: {housingInfo.street_address}</div>
                <Card.Img variant="top" src={logo1} />
                <div className="h-[200px] overflow-auto">
                    {housingInfo.housing_description}
                </div>
                {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
        </Card>
    );
}

export default CardReview; 
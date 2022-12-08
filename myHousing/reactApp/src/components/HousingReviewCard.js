import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Rating from '@material-ui/lab/Rating';



const HousingReviewAPI = ({ review }) => {
    return (
        <Card sx={{maxWidth: 400, border: "none", boxShadow: "none", backgroundColor: 'transparent'}}>
            <CardContent sx={{paddingLeft: 0, paddingRight: 5}}>
                <Rating name="read-only" value={review.stars} readOnly />
                <div className="font-[700] text-xl mb-[0.5vh] lg:text-3xl lg:mb-[2vh] text-orange-400">{review.title}</div>
                <div className="font-[400] text-base lg:text-2xl leading-6">{review.body}</div>
            </CardContent>
        </Card>
    );
}

export default HousingReviewAPI; 
import React from "react"
import { Routes, Route } from 'react-router-dom';
import ReviewPage from "./ReviewPage";
import "./Reviews.css"
import ReviewListAPI from "./ReviewListAPI";

function Reviews() {
    return(
        <div >
            <div>
            <h1 className = "reviews pl-10 fw-700">Reviews</h1>
            </div>
            <div>
            <ReviewListAPI/>
            </div>
            <Routes>
                <Route path="/reviewPage" element={<ReviewPage/>}>
                </Route>
            </Routes>
        </div>
    )
}
export default Reviews;
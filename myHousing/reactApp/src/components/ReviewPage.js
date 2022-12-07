import React from "react";
import "./ReviewPage.css";
import background from "./assets/apt.png";
import ForumComp from "./ForumComp";
import { useLocation } from "react-router-dom";
import HousingReviewAPI from "./HousingReviewAPI";
import CreateReview from "./CreateReview.js";
//import SignInPage from './SignInPage';
//import RegistrationPage from './RegistrationPage';

function ReviewPage() {
  const location = useLocation();
  return (
    <div>
      <header class="relative flex items-center justify-center h-screen mb-12 overflow-hidden">
        <div class="relative z-50 p-5 text-5xl text-white">
          Share Your Experiences for {location.state.housing_name}
        </div>
        <img
          alt="bg"
          src={background}
          className="absolute z-10 w-auto min-w-full min-h-full max-w-none blur-sm"
        ></img>
      </header>
      <body>
        <div className="mt-[2vh] mb-[5vh] ml-[11vw] mr-[11vw]">
          <CreateReview id={location.state.housing_id} />
          <HousingReviewAPI housing_id={location.state.housing_id} />
        </div>
        <div class="container">
          <ForumComp />
        </div>
      </body>
    </div>
  );
}

export default ReviewPage;

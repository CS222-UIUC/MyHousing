import axios from "axios";
import { returnErrors } from "./messages";
import { tokenConfig } from "./auth";

export const createReview = (info) => (dispatch, getState) => {
  console.log(info);
  axios
    .post("http://127.0.0.1:8000/reviews/", info, tokenConfig(getState))
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

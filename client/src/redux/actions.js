import { GET_COUNTRIES } from "./costantes";
import axios from "axios";
const localhost = "http://localhost:3001";

export const getCountries = () => {
  return function (dispatch) {
    axios
      .get(`${localhost}/countries`)
      .then((data) => dispatch({ type: GET_COUNTRIES, payload: data.data }));
  };
};

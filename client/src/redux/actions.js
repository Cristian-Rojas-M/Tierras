import { GET_COUNTRIES, GET_DETAILS, GET_SEARCH } from "./costantes";
import axios from "axios";
const localhost = "http://localhost:3001";

export const getCountries = (limit, offset) => {
  return function (dispatch) {
    if (limit && offset) {
      axios
        .get(`${localhost}/countries/?limit=${limit}&offset=${offset}`)
        .then((data) => dispatch({ type: GET_COUNTRIES, payload: data.data }));
    } else {
      axios
        .get(`${localhost}/countries`)
        .then((data) => dispatch({ type: GET_COUNTRIES, payload: data.data }));
    }
  };
};

export const getDetails = (id) => {
  return function (dispatch) {
    axios
      .get(`${localhost}/countries/${id}`)
      .then((data) => dispatch({ type: GET_DETAILS, payload: data.data }));
  };
};

export const getSearch = (value) => {
  return function (dispatch) {
    axios
      .get(`${localhost}/countries/search?value=${value}`)
      .then((data) => dispatch({ type: GET_SEARCH, payload: data.data }));
  };
};

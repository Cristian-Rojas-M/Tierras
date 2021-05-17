import { GET_COUNTRIES, GET_DETAILS, GET_SEARCH } from "./costantes";

let initialState = {};
export default function datos(state = initialState, action) {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload.sort((a, b) => a.id - b.id),
      };
    case GET_DETAILS:
      return {
        ...state,
        detail: action.payload,
      };
    case GET_SEARCH:
      return {
        ...state,
        countriesSearch: action.payload,
      };
    default:
      return state;
  }
}

import { GET_COUNTRIES } from "./costantes";
let initialState = {};
export default function findProductReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries:action.payload
      };
    default:
      return state;
  }
}

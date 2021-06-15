import {
  ADD_PUBLICACION,
  GET_DETALLE_PUBLICACION,
  GET_PUBLICACIONES,
  GET_SEARCH,
  INPUT_CHANGE,
  REMOVE_PUBLICACION,
  UPDATE_PUBLI,
} from "./constants";

let initialState = {};

export default function findPublicacion(state = initialState, action) {
  switch (action.type) {
    case GET_PUBLICACIONES:
      return {
        ...state,
        publicacion: action.payload,
      };
    case GET_DETALLE_PUBLICACION:
      return {
        ...state,
        detailPublicacion: action.payload,
      };
    case UPDATE_PUBLI:
      return {
        ...state,
        updatePubli: action.payload,
      };
    case ADD_PUBLICACION:
      return { ...state, addPublicacion: action.payload };
    case REMOVE_PUBLICACION:
      return {
        ...state,
        removePubli: action.payload,
      };
    case GET_SEARCH:
      return {
        ...state,
        resultSearch: action.payload,
      };
    case INPUT_CHANGE:
      return {
        ...state,
        inputChange: action.payload,
      };

    default:
      return state;
  }
}

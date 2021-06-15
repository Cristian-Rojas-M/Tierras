import {
  ADD_PUBLICACION,
  GET_DETALLE_PUBLICACION,
  GET_PUBLICACIONES,
  GET_SEARCH,
  INPUT_CHANGE,
  REMOVE_PUBLICACION,
  UPDATE_PUBLI,
} from "./constants";
import axios from "axios";

const localhost = "http://localhost:3001";

export const getPublicacion = (value) => {
  return function (dispatch) {
    if (value) {
      axios
        .get(`${localhost}/publicaciones/?${value}`)
        .then((data) =>
          dispatch({ type: GET_PUBLICACIONES, payload: data.data })
        );
    } else {
      axios
        .get(`${localhost}/publicaciones`)
        .then((data) =>
          dispatch({ type: GET_PUBLICACIONES, payload: data.data })
        );
    }
  };
};

export const getDetail = (id) => {
  return function (dispatch) {
    axios
      .get(`${localhost}/publicaciones/${id}`)
      .then((data) =>
        dispatch({ type: GET_DETALLE_PUBLICACION, payload: data.data })
      );
  };
};

export const removePublic = (id) => {
  return function (dispatch) {
    axios
      .delete(`${localhost}/publicaciones/eliminarPublicacion/${id}`)
      .then((data) =>
        dispatch({ type: REMOVE_PUBLICACION, payload: data.data })
      );
  };
};

export const getSearch = (value) => {
  return function (dispatch) {
    if (value) {
      axios
        .get(`${localhost}/publicaciones/?value=${value}`)
        .then((data) => dispatch({ type: GET_SEARCH, payload: data.data }));
    }
  };
};

export const inputChange = (value) => {
  return function (dispatch) {
    dispatch({ type: INPUT_CHANGE, payload: value });
  };
};

export const updatePubli = (id, input) => {
  let {
    titulo,
    descripcion_corta,
    descripcion_larga,
    ubicacion,
    precio,
    stock,
    codigo_postal,
    latitud,
    longitud,
    imagen,
  } = input;
  return function (dispatch) {
    axios
      .put(`${localhost}/publicaciones/${id}`, {
        titulo,
        descripcion_corta,
        descripcion_larga,
        ubicacion,
        precio,
        stock,
        codigo_postal,
        latitud,
        longitud,
        imagen,
      })
      .then((data) => dispatch({ type: UPDATE_PUBLI, payload: data.data }));
  };
};

export const addPublicacion = (input) => {
  let {
    titulo,
    descripcion_corta,
    descripcion_larga,
    ubicacion,
    precio,
    stock,
    codigo_postal,
    latitud,
    longitud,
    imagen,
  } = input;
  return function (dispatch) {
    axios
      .post(`${localhost}/publicaciones/crearPublicacion`, {
        titulo,
        descripcion_corta,
        descripcion_larga,
        ubicacion,
        precio,
        stock,
        codigo_postal,
        latitud,
        longitud,
        imagen,
      })
      .then((data) => dispatch({ type: ADD_PUBLICACION, payload: data.data }));
  };
};

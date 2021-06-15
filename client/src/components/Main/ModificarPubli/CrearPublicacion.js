import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPublicacion } from "../../../redux/actions";
import "./ModeficarPubli.scss";

function CrearPublicacion() {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    titulo: "",
    descripcion_corta: "",
    descripcion_larga: "",
    ubicacion: "",
    precio: "",
    stock: "",
    codigo_postal: "",
    latitud: "",
    longitud: "",
    imagen: "",
  });

  const handleInputChange = function (e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = function (e) {
    e.preventDefault();
    dispatch(addPublicacion(input));
    setInput({
      titulo: "",
      descripcion_corta: "",
      descripcion_larga: "",
      ubicacion: "",
      precio: "",
      stock: "",
      codigo_postal: "",
      latitud: "",
      longitud: "",
      imagen: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="formAddProduct">
      <div className="div">
        <label>Titulo: </label>
        <input
          type="text"
          name="titulo"
          value={input.titulo}
          onChange={handleInputChange}
        />
      </div>
      <div className="div">
        <label>Descripcion corta: </label>
        <textarea
          type="text"
          name="descripcion_corta"
          value={input.descripcion_corta}
          onChange={handleInputChange}
        />
      </div>
      <div className="div">
        <label>Descripcion larga: </label>
        <textarea
          type="text"
          name="descripcion_larga"
          value={input.descripcion_larga}
          onChange={handleInputChange}
        />
      </div>

      <div className="div">
        <label>ubicacion </label>
        <textarea
          type="text"
          name="ubicacion"
          value={input.ubicacion}
          onChange={handleInputChange}
        />
      </div>
      <div className="div">
        <label>Precio: </label>
        <input
          type="number"
          name="precio"
          value={input.precio}
          onChange={handleInputChange}
        />
      </div>
      <div className="div">
        <label>Stock: </label>
        <input
          type="number"
          name="stock"
          value={input.stock}
          onChange={handleInputChange}
        />
      </div>
      <div className="div">
        <label>Codigo postal: </label>
        <input
          type="text"
          name="codigo_postal"
          value={input.codigo_postal}
          onChange={handleInputChange}
        />
      </div>
      <div className="div">
        <label> Latitud: </label>
        <input
          type="number"
          name="latitud"
          value={input.latitud}
          onChange={handleInputChange}
        />
      </div>
      <div className="div">
        <label> Longitud: </label>
        <input
          type="number"
          name="longitud"
          value={input.longitud}
          onChange={handleInputChange}
        />
      </div>
      <div className="div">
        <label> URL Imagen: </label>
        <input
          type="text"
          name="imagen"
          value={input.imagen}
          onChange={handleInputChange}
        />
      </div>
      <input
        type="submit"
        value="add publicacion"
        disabled={
          !input.titulo ||
          !input.descripcion_corta ||
          !input.descripcion_larga ||
          !input.ubicacion ||
          !input.precio ||
          !input.stock ||
          !input.codigo_postal ||
          !input.latitud ||
          !input.longitud ||
          !input.imagen ||
          false
        }
        className="btnAddProduct"
      ></input>
    </form>
  );
}

export default CrearPublicacion;

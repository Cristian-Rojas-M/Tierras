import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDetail, updatePubli } from "../../../redux/actions";

import "./ModeficarPubli.scss";

function ModificarPubli({ match }) {
  const dispatch = useDispatch();
  const { id } = match.params;
  const { detailPublicacion } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch]);

  const [input, setInput] = useState({
    titulo: detailPublicacion ? detailPublicacion.titulo : "",
    descripcion_corta: detailPublicacion
      ? detailPublicacion.descripcion_corta
      : "",
    descripcion_larga: detailPublicacion
      ? detailPublicacion.descripcion_larga
      : "",
    ubicacion: detailPublicacion ? detailPublicacion.ubicacion : "",
    precio: detailPublicacion ? detailPublicacion.precio : "",
    stock: detailPublicacion ? detailPublicacion.stock : "",
    codigo_postal: detailPublicacion ? detailPublicacion.codigo_postal : "",
    latitud: detailPublicacion ? detailPublicacion.latitud : "",
    longitud: detailPublicacion ? detailPublicacion.longitud : "",
    imagen: detailPublicacion ? detailPublicacion.imagen : "",
  });

  const handleInputChange = function (e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    for (let key in input) {
      if (!input[key]) {
        input[key] = detailPublicacion[key];
      }
    }

    dispatch(updatePubli(id, input));

    alert("The product was edited correctly!");
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
  if (!detailPublicacion) return <h3>Loading...</h3>;
  return (
    <form onSubmit={handleSubmit} className="formAddProduct">
      <div className="div">
        <label>Titulo: </label>
        <input
          placeholder={detailPublicacion.titulo}
          type="text"
          name="titulo"
          value={input.titulo}
          onChange={handleInputChange}
        />
      </div>
      <div className="div">
        <label>Descripcion corta: </label>
        <textarea
          placeholder={detailPublicacion.descripcion_corta}
          type="text"
          name="descripcion_corta"
          value={input.descripcion_corta}
          onChange={handleInputChange}
        />
      </div>
      <div className="div">
        <label>Descripcion larga: </label>
        <textarea
          placeholder={detailPublicacion.descripcion_larga}
          type="text"
          name="descripcion_larga"
          value={input.descripcion_larga}
          onChange={handleInputChange}
        />
      </div>
      <div className="div">
        <label>Ubicacion: </label>
        <textarea
          placeholder={detailPublicacion.ubicacion}
          type="text"
          name="ubicacion"
          value={input.ubicacion}
          onChange={handleInputChange}
        />
      </div>
      <div className="div">
        <label>URL imaginen: </label>
        <textarea
          placeholder={detailPublicacion.imagen}
          type="text"
          name="imagen"
          value={input.imagen}
          onChange={handleInputChange}
        />
      </div>
      <div className="div">
        <label>Precio: </label>
        <input
          placeholder={detailPublicacion.precio}
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
          placeholder={detailPublicacion.stock}
          name="stock"
          value={input.stock}
          onChange={handleInputChange}
        />
      </div>
      <div className="div">
        <label>Codigo postal: </label>
        <input
          type="number"
          placeholder={detailPublicacion.codigo_postal}
          name="codigo_postal"
          value={input.codigo_postal}
          onChange={handleInputChange}
        />
      </div>
      <div className="div">
        <label> Latitud: </label>
        <input
          type="number"
          placeholder={detailPublicacion.latitud}
          name="latitud"
          value={input.latitud}
          onChange={handleInputChange}
        />
      </div>
      <div className="div">
        <label> Longitud: </label>
        <input
          type="number"
          placeholder={detailPublicacion.longitud}
          name="longitud"
          value={input.longitud}
          onChange={handleInputChange}
        />
      </div>

      <input
        type="submit"
        value="Edit Product"
        className="btnAddProduct"
      ></input>
    </form>
  );
}

export default ModificarPubli;

import React from "react";
import Cart from "../Cart";
import { useSelector } from "react-redux";
import "./Publicacion.scss";

function Publicacion() {
  const { publicacion } = useSelector((state) => state);
  const { resultSearch } = useSelector((state) => state);
  const { inputChange } = useSelector((state) => state);

  return (
    <div className="publicacionCnt">
      {inputChange && resultSearch
        ? resultSearch.map((p, i) => (
            <Cart
              key={i}
              id={p.id}
              titulo={p.titulo}
              descripcion_corta={p.descripcion_corta}
              imagen={p.imagen}
              price={p.precio}
              stock={p.stock}
            />
          ))
        : publicacion &&
          publicacion.map((p, i) => (
            <Cart
              key={i}
              id={p.id}
              titulo={p.titulo}
              descripcion_corta={p.descripcion_corta}
              imagen={p.imagen}
              price={p.precio}
              stock={p.stock}
            />
          ))}
    </div>
  );
}

export default Publicacion;

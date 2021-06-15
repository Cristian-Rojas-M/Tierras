import React from "react";
import { Link } from "react-router-dom";
import "./Cart.scss";

function Cart({ id, titulo, descripcion_corta, imagen, price, stock }) {
  return (
    <div>
      <div className="cardCnt">
        <div className="imgName">
          <Link to={`/publicaciones/${id}`} className="link">
            <img src={imagen} className="imgProduct" />
            <span className="name" value={titulo} onClick={(e) => {}}>
              {titulo}
            </span>
          </Link>
        </div>
        <div className="info">
          <span>{stock > 0 ? "$ " + price : "Sin Stock"}</span>
          <p>{descripcion_corta}</p>
        </div>
      </div>
    </div>
  );
}

export default Cart;

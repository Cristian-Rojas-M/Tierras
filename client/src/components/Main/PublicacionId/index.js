import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getDetail, removePublic } from "../../../redux/actions";

import "./PublicacionId.scss";

function PublicacionId({ match }) {
  const { id } = match.params;
  const dispatch = useDispatch();
  const { detailPublicacion } = useSelector((state) => state);
  const [input, setInput] = useState({
    delete: false,
  });

  useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch]);

  const handleToggle = (e) => {
    let { name } = e.target;
    setInput({ ...input, [name]: !input[name] });
  };

  const handleDelete = () => {
    dispatch(removePublic(id));
  };

  if (!detailPublicacion) return <h2>Loading...</h2>;
  return (
    <div className="productID">
      <div className="box">
        <div className="idBox">
          <h3>{detailPublicacion.titulo}</h3>
          <img src={detailPublicacion.imagen} />
        </div>
        <div className="info">
          <h5>Description: </h5>
          <p>{detailPublicacion.descripcion_larga}</p>
          <div className="details">
            <span>Price: $ {detailPublicacion.precio}</span>
            <span>Stock: {detailPublicacion.stock}</span>
            <div className="butons">
              <Link to={`/modificarPubli/${id}`}>
                <button className="buton1">modificar</button>
              </Link>
              <button className="buton2" name="delete" onClick={handleToggle}>
                eliminar
              </button>
              <div className={`delete-${input.delete}`}>
                <div className="modal-contenido">
                  <button name="delete" onClick={handleToggle}>
                    X
                  </button>
                  <p>Esta seguro de eliminar esta publicacion</p>
                  <Link to={"/"}>
                    <button className="yes" onClick={handleDelete}>
                      Yes
                    </button>
                  </Link>
                  <button className="no" onClick={handleToggle} name="delete">
                    No
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PublicacionId;

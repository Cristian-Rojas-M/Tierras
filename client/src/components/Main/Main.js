import React, { useEffect } from "react";
import Publicacion from "./Publicacion";
import { useDispatch } from "react-redux";
import { getPublicacion } from "../../redux/actions";
import "./Main.scss";

function Main() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPublicacion());
  }, [dispatch]);
  return (
    <div className="main">
      <div className="publicacion">
        <Publicacion />
      </div>
    </div>
  );
}

export default Main;

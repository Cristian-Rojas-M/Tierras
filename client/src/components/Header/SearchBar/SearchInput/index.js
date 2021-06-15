import React, { useState } from "react";
import { useRouteMatch } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./SearchInput.scss";
import { getSearch, inputChange } from "../../../../redux/actions";

const SearchInput = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInput(e.target.value);
    dispatch(getSearch(e.target.value));
    dispatch(inputChange(e.target.value));
  };

  const check = useRouteMatch("/");

  return (
    <div className={`searchBar-${check?.isExact ? "active" : "inactive"}`}>
      <input
        type="text"
        className="input"
        value={input}
        placeholder="Buscar"
        onChange={(e) => handleChange(e)}
      ></input>
    </div>
  );
};

export default SearchInput;

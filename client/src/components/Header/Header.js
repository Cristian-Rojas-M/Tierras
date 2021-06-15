import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import SearchInput from "./SearchBar/SearchInput";

function Header() {
  return (
    <header className="header">
      <Link to="/" className="link">
        <h3> M2 COINS</h3>
      </Link>
      <SearchInput className="searchBar" />
      <Link to="/createPublication" className="link">
        <span>Crear publication</span>
      </Link>
    </header>
  );
}

export default Header;

import React, { useState } from "react";
import Home from "./Home";
import Service from "./Service";

const SearchBar = () => {
  const [search, setSearch] = useState();

  function onSubmit(e) {
    e.preventDefault();
    setSearch(document.getElementById("input-field").value);
  }

  return (
    <nav className="nav-searchbar">
      <div className="nav-wrapper search teal darken-4">
        <form onSubmit={onSubmit}>
          <div className="input-field">
            <input id="search" type="search" required />
            <label className="label-icon" for="search">
              <i className="material-icons">search</i>
            </label>
            <i className="material-icons">close</i>
          </div>
        </form>
      </div>
      <Home queryParameter={search} />
    </nav>
  );
};

export default SearchBar;

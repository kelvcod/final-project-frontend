import React from "react";

const SearchBar = ({ searchValue, onResetSearch, onHandleSearch }) => {
  return (
    <nav className="nav-searchbar">
      <div className="nav-wrapper search teal darken-4">
        <div className="input-field">
          <input
            id="search"
            type="search"
            name="search"
            value={searchValue}
            onChange={onHandleSearch}
          />
          <label className="label-icon" for="search">
            <i className="material-icons">search</i>
          </label>
          <i className="material-icons" onClick={onResetSearch}>
            close
          </i>
        </div>
      </div>
    </nav>
  );
};

export default SearchBar;

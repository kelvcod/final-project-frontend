import React, { useRef, useEffect } from "react";
import M from "materialize-css";

import { NavLink } from "react-router-dom";
import Logo from "../mvp-logo.png";

const Navbar = () => {
  const myNav = useRef();

  useEffect(() => {
    if (myNav.current) {
      const elems = myNav.current;

      const instances = M.Dropdown.init(elems, {
        hover: true,
      });
    }
  }, []);

  return (
    <div>
      {" "}
      <nav className="navbar">
        {" "}
        <div className="nav-wrapper #004d40 teal darken-4">
          {" "}
          <a href="/" className="brand-logo">
            {" "}
            <img src={Logo} className="logo" alt="Logo" />{" "}
          </a>{" "}
          <ul className="right hide-on-med-and-down">
            {" "}
            <li>
              {" "}
              <NavLink to="/" className="homebtn">
                {" "}
                Home{" "}
              </NavLink>{" "}
            </li>{" "}
            <li>
              {" "}
              <a href="sass.html" className="ord">
                Orders
              </a>{" "}
            </li>{" "}
            <li>
              {" "}
              <a href="badges.html" className="lgn">
                Login
              </a>{" "}
            </li>{" "}
            <li>
              {" "}
              <a
                ref={myNav}
                className="dropdown-trigger"
                href="#"
                data-target="dropdown1"
              >
                {" "}
                Categories{" "}
              </a>{" "}
            </li>{" "}
            <ul id="dropdown1" className="dropdown-content">
              {" "}
              <li className="xyz">
                {" "}
                <a href="#!">ART</a>{" "}
              </li>{" "}
              <li className="xyz">
                {" "}
                <a href="#!" className="drop">
                  ENTERTAINMENT
                </a>{" "}
              </li>{" "}
              <li className="xyz">
                {" "}
                <a href="#!">INSTRUMENTS</a>{" "}
              </li>{" "}
            </ul>{" "}
          </ul>{" "}
        </div>{" "}
      </nav>{" "}
    </div>
  );
};

export default Navbar;

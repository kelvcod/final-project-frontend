import React, { useRef, useEffect } from "react";
import M from "materialize-css";

import { NavLink } from "react-router-dom";
import Logo from "../mvp-logo.png";

const Navigation = () => {
  const elem = document.querySelector(".sidenav");
  const instance = M.Sidenav.init(elem, {
    inDuration: 350,
    outDuration: 350,
    edge: "left",
  });
  // -------- dropdown menu instance
  // const instances = M.Dropdown.init(elems, {
  //   hover: true,
  // });

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
    <nav className="#004d40 teal darken-4">
      {/* <!--  Navbar structure, visible on desktop --> */}
      <div className="nav-wrapper container ">
        {/* <!--  Trigger sidenav  --> */}
        <a
          href="javascript:void(0)"
          data-target="slide-out"
          className="sidenav-trigger"
        >
          <i className="material-icons">menu</i>
        </a>
        {/* <!-- Brand Logo --> */}
        <a href="/" className="brand-logo">
          <img src={Logo} className="logo" alt="Logo" />
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <NavLink to="/" className="homebtn">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className="ord">
              Orders
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className="lgn">
              Login
            </NavLink>
          </li>
          {/* dropdown menu */}
          <li>
            <a
              ref={myNav}
              className="dropdown-trigger"
              href="#"
              data-target="dropdown1"
            >
              Categories
            </a>
          </li>
          <ul id="dropdown1" className="dropdown-content">
            <li className="xyz">
              <a href="#!">ART</a>
            </li>
            <li className="xyz">
              <a href="#!" className="drop">
                ENTERTAINMENT
              </a>
            </li>
            <li className="xyz">
              <a href="#!">INSTRUMENTS</a>
            </li>
          </ul>
          {/* end dropwodn menu */}
        </ul>
      </div>

      {/* <!--  Sidenav structure, visible on tablet and mobile  --> */}
      <ul id="slide-out" className="sidenav">
        <li>
          <div className="user-view #004d40 teal darken-4">
            {/* <a href="/" className="brand-logo">
              <img src={Logo} className="logo" alt="Logo" />
            </a> */}
            {/* you can add user login and info here */}
            <div className="background">
              <img
                src="http://materializecss.com/images/office.jpg"
                alt="Background User View"
              />
            </div>
            <a href="#user">
              <img
                className="circle"
                src="http://materializecss.com/images/yuna.jpg"
                alt="Avatar User View"
              />
            </a>
            <a href="#name">
              <span className="white-text name">Pretty Woman</span>
            </a>
            <a href="#email">
              <span className="white-text email">prettywoman@gmail.com</span>
            </a>
          </div>
        </li>
        <li>
          <NavLink to="/" className="homebtn">
            Home
          </NavLink>
        </li>
        <li>
          <a href="sass.html" className="ord">
            Orders
          </a>
        </li>
        <li>
          <a href="badges.html" className="lgn">
            Login
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
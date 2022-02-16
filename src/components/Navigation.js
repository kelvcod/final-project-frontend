import React, { useRef, useEffect } from "react";
import M from "materialize-css";

import { NavLink } from "react-router-dom";
import Logo from "../mvp-logo.png";
import Logout from "./Logout";

const Navigation = () => {
  const elem = document.querySelector(".sidenav");
  const instance = M.Sidenav.init(elem, {
    inDuration: 350,
    outDuration: 350,
    edge: "left",
  });

  const collapsibleElem = document.querySelector(".collapsible");
  const collapsibleInstance = M.Collapsible.init(collapsibleElem, {
    inDuration: 350,
    outDuration: 350,
    edge: "left",
  });
  // -------- dropdown menu instance

  const pathname = window.location.pathname;
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
          href="#"
          // href="javascript:void(0)"
          data-target="slide-out"
          className="sidenav-trigger"
        >
          <i className="material-icons">menu</i>
        </a>
        {/* <!-- Brand Logo --> */}
        <NavLink to="/" className="brand-logo">
          <img src={Logo} className="logo" alt="Logo" />
        </NavLink>
        <span className="brand-logo_title">MVP FinPro</span>
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
            <NavLink to="/auth/login" className="lgn">
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
              <NavLink to="/category/art">ART</NavLink>
            </li>
            <li className="xyz">
              <NavLink to="/category/entertainment" className="drop">
                ENTERTAINMENT
              </NavLink>
            </li>
            <li className="xyz">
              <NavLink to="/category/instruments">INSTRUMENTS</NavLink>
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
              <img className="circle" src={Logo} alt="Avatar logo" />
            </a>
            <NavLink to="/">
              <span className="white-text name">MVP FinPro</span>
            </NavLink>
            <a href="#email">
              <span className="white-text email">mvp.finpro@gmail.com</span>
            </a>
          </div>
        </li>
        <li>
          <NavLink to="/" className="homebtn">
            <span className="material-icons icon_sn">home</span>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/orders" className="ord">
            <span className="material-icons icon_sn">shopping_basket</span>
            Orders
          </NavLink>
        </li>
        <li>
          <NavLink to="/auth/login" className="lgn">
            <span className="material-icons icon_sn">login</span>
            Login
          </NavLink>
        </li>
        <li className="no-padding">
          <ul className="collapsible collapsible-accordion">
            <li>
              <a className="collapsible-header">
                Category<i className="material-icons">arrow_drop_down</i>
              </a>
              <div className="collapsible-body">
                <ul>
                  <li>
                    <NavLink to="/category/art">ART</NavLink>
                  </li>
                  <li>
                    <NavLink to="/category/entertainment" className="drop">
                      ENTERTAINMENT
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/category/instruments">INSTRUMENTS</NavLink>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

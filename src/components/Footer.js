import React from "react";

const Footer = () => {
  return (
    <footer className="page-footer">
      <div className="container">
        <div className="row">
          <div className="col l4 s12">
            <h5 className="white-text">Contact us</h5>
            <p className="grey-text text-lighten-4">
              <p>Address: </p>
              <p>Email: </p>
              <p>Phone: </p>
            </p>
          </div>
          <div className="col l4 s12">
            <h5 className="white-text">Categories</h5>
            <ul>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  Art
                </a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  Entertainment
                </a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  Instruments
                </a>
              </li>
            </ul>
          </div>
          <div className="col l4 s12">
            <h5 className="white-text">About</h5>
            <ul>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  Become a Seller
                </a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  Careers
                </a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  Privacy 
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        <div className="container">
          © 2021 Copyright
          <a className="grey-text text-lighten-4 right" href="#!">
                More Links
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

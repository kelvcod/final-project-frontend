import React from "react";

const Footer = () => {
  return (
    <footer className="page-footer" id="footer">
      <div className="container container_footer">
        <div className="row container_footer">
          <div className="col l4 s12">
            <h5 className="white-text">Contact us</h5>
            <ul className="grey-text text-lighten-4">
              <li>Address: MVP Strasse 1, 10967 Berlin</li>
              <li>Email: mvp@ymail.com</li>
              <li>Phone: +49 176 12345678</li>
            </ul>
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
                <a className="grey-text text-lighten-3" href="/register">
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
        <div className="container">© 2021 Copyright</div>
      </div>
    </footer>
  );
};

export default Footer;

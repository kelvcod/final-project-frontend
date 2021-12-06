import React from "react";
import { Link } from "react-router-dom";

const MessageSent = () => {
  return (
    <div>
      <div>
        <h4>Your message has been forwarded to the seller.</h4>
        <p>click on the home button to go back to the home page</p>
      </div>
      <div className="btn_links">
        <Link to={`/`} className="waves-effect waves-light btn" id="back_home">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default MessageSent;

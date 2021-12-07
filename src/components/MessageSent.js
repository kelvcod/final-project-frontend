import React from "react";
import { Link } from "react-router-dom";

const MessageSent = () => {
  return (
    <div className="row" id="msg-forwarded">
      <div className="col s12 m8 offset-m2">
        <div className="msg-sent-font">
          <h4>Your message has been forwarded to the seller.</h4>
          <p>Click on the home button to go back to the home page.</p>
        </div>
        <div className="btn_links-msg-sent">
          <Link
            to={`/`}
            className="waves-effect waves-light btn"
            id="back_home"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MessageSent;

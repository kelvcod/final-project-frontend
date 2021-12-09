import React from "react";
import { Link } from "react-router-dom";

const PaymentConfirmation = () => {
  return (
    <div>
      <h5>Your Payment was successful</h5>
      <div className="btn_links">
        <Link to={`/`} className="waves-effect waves-light btn" id="back_home">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default PaymentConfirmation;

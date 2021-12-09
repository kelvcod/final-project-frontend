import React from "react";
import { Link } from "react-router-dom";

const PaymentConfirmation = () => {
  return (
    <div className="row" id="payment-confirmation">
      <div className="col s12 m8 offset-m2">
        <div className="payment-confirmation-font"></div>
        <h4>Your Payment was successful</h4>
        <div className="btn_links-payment-confirmation">
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

export default PaymentConfirmation;

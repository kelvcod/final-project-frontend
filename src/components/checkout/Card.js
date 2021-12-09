import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import StatusMessages, { useMessages } from "./StatusMessages";
import { Link, useLocation, useHistory } from "react-router-dom";

const CardForm = () => {
  const { REACT_APP_BACKEND_URL } = process.env;
  const stripe = useStripe();
  const elements = useElements();
  const [messages, addMessage] = useMessages();
  const [inputs, setInputs] = useState();
  const history = useHistory();

  let location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  const { id, category, business_name, image, price, title } =
    location.state.location.state.serviceId;

  const onChange = (e) => {
    console.log(e.target.value);
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      addMessage("Stripe.js has not yet loaded.");
      return;
    }
    addMessage("Creating payment intent...");

    // Create payment intent on the server

    const { error: backendError, clientSecret } = await fetch(
      `${REACT_APP_BACKEND_URL}/checkout/create-payment-intent`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          paymentMethodType: "card",
          currency: "usd",
          amount: price * 100,
        }),
      }
    ).then((r) => r.json());
    addMessage("Payment intent created");

    if (backendError) {
      addMessage(backendError.message);
      return;
    }
    // addMessage("Client secret returned");

    // Confirm the payment on the client

    console.log({
      name: inputs.name,
      email: inputs.email,
    });

    const { error: stripeError, paymentIntent } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: inputs.name,
            email: inputs.email,
          },
        },
      });

    if (stripeError) {
      // Show error to your customer (e.g., insufficient funds)
      addMessage(stripeError.message);
      return;
    }

    // Show a success message to your customer
    addMessage(`PaymentIntent ${paymentIntent.status}: ${paymentIntent.id}`);
    // history.push("/");
    history.push("/paymentConfirmation");
  };
  return (
    <div className="row" id="single_service">
      <div className="col s12 m8 offset-m2">
        <div className="card">
          <div className="serviceId_title">
            <div className="card_display_pay">
              <div className="title-review">
                <h5>Complete the checkout process</h5>
              </div>
            </div>
            <br />
            <div
              className="card-image card_swipe service-image__wrap"
              id="image_pay"
            >
              <img
                src={`${REACT_APP_BACKEND_URL}${image}`}
                alt="good service"
              />
            </div>
            <p>
              <b>{title}</b>
            </p>
            <p>Category: {category}</p>
            <div className="business-name-review">
              <h6>
                <b>{business_name}</b>
              </h6>

              <div className="card_container">
                <form
                  id="payment-form"
                  className="card_form"
                  onSubmit={handleSubmit}
                >
                  <label htmlFor="card">All fields are required</label>
                  <CardElement id="card" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    // value="name"
                    onChange={(e) => onChange(e)}
                  />
                  <input
                    label="Email"
                    id="email"
                    type="email"
                    name="email"
                    required
                    placeholder="Enter your email address"
                    // value={email}
                    onChange={(e) => onChange(e)}
                  />
                  <p>
                    You will receive notifications and receipts on this email
                  </p>
                  <button type="submit" className="card_button">
                    Pay
                  </button>
                </form>
                {/* <StatusMessages messages={messages} /> */}
              </div>
              <div className="row" id="service_summary">
                <div className="col s12">
                  <div className="card_display_pay">
                    <div className="serviceId_title">
                      <br />

                      <h5>
                        <b>Total: ${price}</b>
                      </h5>
                      <hr className="card-display-separator" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="btn_links-pay">
              <Link
                to={`../services/${id}`}
                className="waves-effect waves-light btn"
                id="back_home_pay"
              >
                Back
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(CardForm);

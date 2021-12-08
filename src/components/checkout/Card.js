import React from "react";
import { withRouter } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import StatusMessages, { useMessages } from "./StatusMessages";
import { Link, useLocation } from "react-router-dom";

const CardForm = () => {
  const { REACT_APP_BACKEND_URL } = process.env;
  const stripe = useStripe();
  const elements = useElements();
  const [messages, addMessage] = useMessages();

  let location = useLocation();
  console.log(location);
  const { id, category, business_name, image, price, title } =
    location.state.location.state.serviceId;
  console.log(category);

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
          amount: `$${price}`,
        }),
      }
    ).then((r) => r.json());
    addMessage("Payment intent created");

    if (backendError) {
      addMessage(backendError.message);
      return;
    }
    addMessage("Client secret returned");

    // Confirm the payment on the client

    const { error: stripeError, paymentIntent } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: "name",
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
  };
  return (
    <div className="row" id="single_service">
      <div className="col s12 m8 offset-m2">
        <div className="card">
          <div className="serviceId_title">
            <div className="paymentForm_container">
              <div className="row" id="service_summary">
                <div className="card_display_pay">
                  <div className="serviceId_title">
                    <div className="title-review">
                      <h5>Complete the checkout process</h5>
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
                    <div className="business-name-review">
                      <h6>
                        <b>{business_name}</b>
                      </h6>
                    </div>
                    <b>Total: ${price}</b>
                    <hr />
                  </div>
                </div>
              </div>
              <div className="card_container">
                <div className="col s12 m8 offset-m2">
                  <form
                    id="payment-form"
                    className="card_form"
                    onSubmit={handleSubmit}
                  >
                    <label htmlFor="card">All fields are required</label>
                    <CardElement id="card" />
                    <input type="text" name="name" placeholder="Full Name" />
                    <input
                      label="Email"
                      id="outlined-email-input"
                      type="email"
                      required
                      placeholder="Email"
                    />
                    <p>
                      You will recieve notifications and receipts on this email
                    </p>
                    <button type="submit" className="card_button">
                      Pay
                    </button>
                  </form>
                  <StatusMessages messages={messages} />
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

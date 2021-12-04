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
  const { category, business_name, image, price, title } =
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
      <div className="col s12 m10 l8 xl8">
        <div className="card">
          <div className="serviceId_title">
            <div className="paymentForm_container">
              <div className="card_container">
                <h5>Complete the checkout process</h5>
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
                    placeholder="email"
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
              <div className="row" id="service_summary">
                <div className="col s12 m10 l8 xl8">
                  <div className="card_display_pay">
                    <div className="serviceId_title">
                      <br />
                      <div
                        className="card-image card_swipe service-image__wrap"
                        id="image_pay"
                      >
                        <img
                          src={`${REACT_APP_BACKEND_URL}${image}`}
                          alt="image of service"
                        />
                      </div>
                      <p>
                        <b>{title}</b>
                      </p>
                      <p>
                        <b>{business_name}</b>
                      </p>
                      <b>Total: ${price}</b>
                      <hr />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="btn_links">
              <Link
                to={`/`}
                className="waves-effect waves-light btn"
                id="back_home_pay"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(CardForm);

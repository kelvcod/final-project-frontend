import React, { useState, useEffect } from "react";
import Home from "./components/Home";
import "./App.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { Switch, Route } from "react-router";
import Service from "./components/Service";

import SearchBar from "./components/SearchBar";

import Breadcrumbs from "./components/Breadcrumbs";
import Card from "./components/checkout/Card";
//import ApplePay from "./components/checkout/ApplePay";
import ContactSeller from "./components/checkout/ContactSeller";
import MessageSent from "./components/MessageSent";

import Review from "./components/checkout/Review";
import Login from "./components/Login";
import Register from "./components/Register";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const App = () => {
  // console.log(window);
  // console.log(window.innerWidth);

  const [services, setServices] = useState();
  const [stripePromise, setStripePromise] = useState();

  const { REACT_APP_BACKEND_URL } = process.env;

  useEffect(() => {
    const getStripePromise = async () => {
      const res = await fetch(`${REACT_APP_BACKEND_URL}/checkout/config`);
      const { publishableKey } = await res.json();
      const promise = await loadStripe(publishableKey);
      setStripePromise(promise);
    };
    getStripePromise();
  }, []);

  useEffect(() => {
    fetch(`${REACT_APP_BACKEND_URL}/services`)
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);

  if (!stripePromise) return null;

  return (
    <div>
      <div>
        <Navigation />
      </div>
      <div>
        <SearchBar />
      </div>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route exact path="/">
          <Home services={services} />
        </Route>
        <Route path="/services/:id">
          <Service />
        </Route>
        <Route path="/checkout">
          <Elements stripe={stripePromise}>
            <Card />
          </Elements>
        </Route>
        {/* <Route path="/apple-pay">
          <Elements stripe={stripePromise}>
            <ApplePay />
          </Elements>
        </Route> */}
        <Route path="/review">
          <Review />
        </Route>
        <Route path="/contact/seller">
          <ContactSeller />
        </Route>
        <Route path="/send-message">
          <MessageSent />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </Switch>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default App;

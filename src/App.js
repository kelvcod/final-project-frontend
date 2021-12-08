import React, { useState, useEffect } from "react";
import Home from "./components/Home";
import "./App.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { Switch, Route, Redirect } from "react-router-dom";
import Service from "./components/Service";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import SearchBar from "./components/SearchBar";
import ResetPassword from "./components/ResetPassword";

//import Breadcrumbs from "./components/Breadcrumbs";
import Card from "./components/checkout/Card";
//import ApplePay from "./components/checkout/ApplePay";
import ContactSeller from "./components/checkout/ContactSeller";
import MessageSent from "./components/MessageSent";

import Review from "./components/checkout/Review";
import Login from "./components/Login";
import Register from "./components/Register";
import ProfilePage from "./components/ProfilePage";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

toast.configure();

const App = () => {
  // console.log(window);
  // console.log(window.innerWidth);

  const [services, setServices] = useState();

  const [stripePromise, setStripePromise] = useState();

  const [search, setSearch] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const { REACT_APP_BACKEND_URL } = process.env;

  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  };

  const isAuth = async () => {
    try {
      const res = await fetch(`${REACT_APP_BACKEND_URL}/auth/verify`, {
        method: "GET",
        headers: { jwt_token: localStorage.token },
      });

      const parseRes = await res.json();
      parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    isAuth();
  }, []);

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

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const resetSearch = () => {
    setSearch("");
  };

  return (
    <div>
      <div>
        <Navigation />
      </div>

      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route exact path="/">
          <SearchBar
            onHandleSearch={handleSearch}
            search={search}
            onResetSearch={resetSearch}
          />
          <Home services={services} search={search} />
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
        <Route path="/reset-password">
          <MessageSent />
        </Route>
        <Route
          exact
          path="/login"
          render={(props) =>
            !isAuthenticated ? (
              <Login {...props} setAuth={setAuth} />
            ) : (
              <Redirect to="/profile" />
            )
          }
        />
        <Route
          exact
          path="/register"
          render={(props) =>
            !isAuthenticated ? (
              <Register {...props} setAuth={setAuth} />
            ) : (
              <Redirect to="/login" />
            )
          }
        />
        <Route
          exact
          path="/profile"
          render={(props) =>
            isAuthenticated ? (
              <ProfilePage {...props} setAuth={setAuth} />
            ) : (
              <Redirect to="/login" />
            )
          }
        />

        {/* <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/profile">
          <ProfilePage />
        </Route> */}
      </Switch>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default App;

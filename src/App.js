import React, { Fragment, useState, useEffect } from "react";
import Home from "./components/Home";
import "./App.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import Service from "./components/Service";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import SearchBar from "./components/SearchBar";
import ResetPassword from "./components/ResetPassword";
import NewPassword from "./components/NewPassword";
import PaymentConfirmation from "./components/PaymentConfirmation";
import Art from "./components/category/Art";
import Entertainment from "./components/category/Entertainment";
import Instruments from "./components/category/Instruments";

//import Breadcrumbs from "./components/Breadcrumbs";
import Card from "./components/checkout/Card";
//import ApplePay from "./components/checkout/ApplePay";
import ContactSeller from "./components/checkout/ContactSeller";
import MessageSent from "./components/MessageSent";
import Review from "./components/checkout/Review";
import Login from "./components/Login";
// import Register from "./components/Register";
import Register from "./components/newRegComp/Register2";
import ProfilePage from "./components/ProfilePage";
import UpdateService from "./components/UpdateService";
import DeleteService from "./components/DeleteService";
// import NoMatch from "./components/NoMatch";
import CreateService from "./components/CreateService";
import ListService from "./components/ListService";
// import { path } from "react-router-dom/cjs/react-router-dom.min";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

toast.configure();

const App = () => {
  // console.log(window);
  // console.log(window.innerWidth);
  // let history = useHistory();

  const [services, setServices] = useState();

  const [stripePromise, setStripePromise] = useState();

  const [search, setSearch] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const { REACT_APP_BACKEND_URL } = process.env;

  // const noMatchTimeout = setTimeout(() => {
  //    history.push("/");
  // }, 3000);

  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  };

  const isAuth = async () => {
    try {
      const res = await fetch(`${REACT_APP_BACKEND_URL}/auth/verify`, {
        method: "GET",
        headers: { token: localStorage.token },
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
    <Fragment>
      <div>
        <Navigation />
      </div>

      <Switch>
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
        <Route exact path="/reset-password">
          <ResetPassword />
        </Route>
        <Route exact path="/new-password">
          <NewPassword />
        </Route>
        <Route exact path="/paymentConfirmation">
          <PaymentConfirmation />
        </Route>
        {/* <Route exact path="/create-service">
          <CreateService />
        </Route> */}

        {/* <Route exact path="/list-service">
          <ListService services={services} />
        </Route> */}

        <Route exact path="/update-service">
          <UpdateService />
        </Route>

        <Route exact path="/delete-service">
          <DeleteService />
        </Route>

        <Route exact path="/category/art">
          <Art />
        </Route>

        <Route exact path="/category/entertainment">
          <Entertainment />
        </Route>

        <Route exact path="/category/instruments">
          <Instruments />
        </Route>

        <Route
          exact
          path="/auth/login"
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
          path="/auth/register"
          render={(props) =>
            !isAuthenticated ? (
              <Register {...props} setAuth={setAuth} />
            ) : (
              <Redirect to="/auth/login" />
            )
          }
        />
        <Route
          exact
          path="/profile"
          render={(props) =>
            isAuthenticated ? (
              <ProfilePage {...props} setAuth={setAuth} services={services} />
            ) : (
              <Redirect to="/auth/login" />
            )
          }
        />
        <Redirect from="*" to="/" />
        {/* <Route path="*">
          <NoMatch noMatchTimeout={noMatchTimeout} />
        </Route> */}
      </Switch>

      <div>
        <Footer />
      </div>
    </Fragment>
  );
};

export default App;

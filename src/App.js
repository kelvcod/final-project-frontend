import React, { useState, useEffect } from "react";
import Home from "./components/Home";
import "./App.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { Switch, Route } from "react-router";
import Service from "./components/Service";
//import Breadcrumbs from "./components/Breadcrumbs";
import Checkout from "./components/Checkout";
import SearchBar from "./components/SearchBar";

const App = () => {
  console.log(window);
  console.log(window.innerWidth);

  const [services, setServices] = useState();
  const [search, setSearch] = useState();

  const { REACT_APP_BACKEND_URL } = process.env;

  useEffect(() => {
    fetch(`${REACT_APP_BACKEND_URL}/services`)
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, [REACT_APP_BACKEND_URL]);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const restSearch = () => {
    setSearch("");
  };

  return (
    <div>
      <div>
        <Navigation />
      </div>
      <div>
        <SearchBar />
      </div>

      <Switch>
        {/* <Route path="/">
           <About />
          </Route>
          <Route path="/">
            <Trending />
          </Route>
          <Route path="/">
            <Contact />
          </Route> */}
        <Route exact path="/">
          <SearchBar
            onHandleSearch={handleSearch}
            search={search}
            onResetSearch={restSearch}
          />
          <Home services={services} search={search} />
        </Route>
        <Route path="/services/:id">
          <Service services={services} />
        </Route>
        <Route path="/checkout">
          <Checkout services={services} />
        </Route>
      </Switch>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default App;

import React from "react";
//import { useParams } from 'react-router';
import ServiceCard from "./ServiceCards";

const Home = ({ services }) => {
  //const {id} = useParams();
  if (!services) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="row">
      {services.map((service, index) => (
        <ServiceCard service={service} key={index} />
      ))}
    </div>
  );
};

export default Home;

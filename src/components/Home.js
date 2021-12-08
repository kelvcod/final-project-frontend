import React from "react";
// import Service from "./Service";
//import { useParams } from 'react-router';
import ServiceCard from "./ServiceCards";

const Home = ({ services, search }) => {
  //const {id} = useParams();
  if (!services) {
    return <h1>Loading...</h1>;
  }

  const filteredServices = services.filter((service) => {
    if (
      service.title.toLowerCase().includes(search.toLowerCase()) ||
      service.description.toLowerCase().includes(search.toLowerCase())
    ) {
      return service;
    }
    return false;
  });

  const servicesToDisplay = !search ? services : filteredServices;

  return (
    <div className="row">
      {servicesToDisplay.map((service, index) => (
        <ServiceCard service={service} key={index} />
      ))}
    </div>
  );
};

export default Home;

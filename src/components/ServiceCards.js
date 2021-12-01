/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Link } from "react-router-dom";

const ServiceCards = ({ service }) => {
  const { id, image, description, price, title } = service;
  const { REACT_APP_BACKEND_URL } = process.env;

  return (
    <div className="card service-card col s12 m5 l3">
      <div className="card-image service-image__wrap responsive-img">
        <img
          className="service_image"
          src={`${REACT_APP_BACKEND_URL}${image}`}
          alt="image of srvice"
        />
        {/* <span className="card-title">{}</span> */}
      </div>
      <div className="service-card__content">
        <h5 className="service-card__title">{title}</h5>
        <Link
          className="service-card__btn waves-effect waves-light btn "
          id="my_btn"
          to={`./services/${id}`}
        >
          {"See more"}
        </Link>
        <p className="service-card__price price">${price}</p>
      </div>
    </div>
  );
};

export default ServiceCards;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams, Switch, Route } from "react-router";

import SimilarCategory from "./SimilarCategory";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SellerInfo from "./SellerInfo";

// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

const Service = () => {
  const { id } = useParams();
  const [serviceId, setServiceId] = useState({});

  const { REACT_APP_BACKEND_URL } = process.env;

  useEffect(() => {
    fetch(`${REACT_APP_BACKEND_URL}/services/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setServiceId(data);
      });
  }, [id]);

  if (!serviceId) return null;

  return (
    <div className="row" id="single_service">
      <div className="col s12 m10 l8 xl8">
        <div className="card">
          <div className="serviceId_title">
            <h4>I can offer you a Professional {serviceId.title}</h4>
          </div>
          <div className="card-image card_swipe service-image__wrap">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                <img
                  src={`${REACT_APP_BACKEND_URL}${serviceId.image}`}
                  alt="service image"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={`${REACT_APP_BACKEND_URL}${serviceId.image}`}
                  alt="service image"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={`${REACT_APP_BACKEND_URL}${serviceId.image}`}
                  alt="service image"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={`${REACT_APP_BACKEND_URL}${serviceId.image}`}
                  alt="service image"
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="card-content ">
            <h5 className="service_about">About this Gig</h5>
            <h6 className="service_title">
              <b>{serviceId.title}</b>
            </h6>
          </div>
          <div>
            <p className="service_description">{serviceId.description}</p>
          </div>

          <div className="btn_links">
            <Link
              to={`/`}
              className="waves-effect waves-light btn"
              id="back_home"
            >
              Back to Home
            </Link>
            <Link
              to={{
                pathname: "/review",
                // search: "?sort=name",
                // hash: "#the-hash",
                state: { serviceId },
              }}
              className="waves-effect waves-light btn"
              id="proceed_checkout"
            >
              Order Service
            </Link>
          </div>

          <div className="card-action link">
            <div>
              <p className="service_price">${serviceId.price}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col s12">
        <h5 className="related_text">Related offers form this category</h5>
        <SimilarCategory serviceId={serviceId} />
        <SellerInfo serviceId={serviceId} />
      </div>
      <hr />
    </div>
  );
};

export default Service;

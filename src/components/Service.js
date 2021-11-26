import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'


function Service() {
  const { id } = useParams();
  const [serviceId, setServiceId] = useState({});




  useEffect(() => {
    fetch(`https://mvp-finpro.herokuapp.com/services/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setServiceId(data);
      });
  }, [id]);
  console.log(serviceId)

  return (
    <div className="row">
      <div className="col s12">
        <div className="card">
          <div className="card-image">
                <Swiper
            spaceBetween={50}
            slidesPerView={2}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
            <SwiperSlide>
            <img src={serviceId.image} alt="image"/>

            </SwiperSlide>
            <SwiperSlide>
            <img src={serviceId.image} alt="image"/>

            </SwiperSlide>
            <SwiperSlide>
            <img src={serviceId.image} alt="image"/>

            </SwiperSlide>
            <SwiperSlide>
            <img src={serviceId.image} alt="image"/>

            </SwiperSlide>
            </Swiper>
            {/* <span className="card-title">{}</span> */}
          </div>
          <div className="card-content">
            <p>{serviceId.title}</p>
          </div>
          <div><p>{serviceId.description}</p></div>
          <div>

          

            <Link to={`/`} className="waves-effect waves-light btn"> {"Back to Home"}</Link>
          </div>

          <div className="card-action link">
            <div>
              <p className="price">${serviceId.price}</p>
            </div>
          </div>
        </div>
      </div>
      <hr/>
      <div className= "seller-info">
          <h3 className= "seller-header">About The Seller</h3>
          <img src={serviceId.image_user} alt="image"/>
          <p className="seller_name">{serviceId.first_name} {" "} {serviceId.last_name}</p>
          <p className="seller_businessname">{serviceId.businees_name}</p>
          <p className="seller_country">Country: {serviceId.country}</p>
          <p className="seller_about">{serviceId.about}</p>

      </div>
     

    </div>
  );
}

export default Service;

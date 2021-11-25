import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import { Link } from "react-router-dom";



const cards = ({ service }) => {
  
  const { id, image, description, price, title, } = service;
  return (
    <div className="row">
      <div className="col s12 m7">
        <div className="card">
          <div className="card-image service_image">
            {/* <img src="https://cdn.pixabay.com/photo/2021/11/11/16/05/fruits-6786607_1280.jpg" /> */}
            <img
              src={"."+image}
              alt="image"
            />
            {/* <span className="card-title">{}</span> */}
          </div>
          <div className="card-content">
            <p>{title}</p>
          </div>
          <div>{/* <p>{description}</p> */}</div>
          <div>
            <Link to={`./services/${id}`}>{"See more"}</Link>
          </div>

          <div className="card-action link">
            <div>
              <p className="price">${price}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



export default cards;


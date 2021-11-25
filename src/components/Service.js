import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { useParams } from "react-router";

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

  return (
    <div className="row">
      <div className="col s12">
        <div className="card">
          <div className="card-image">
            <img src={serviceId.image} alt="image"/>
            {/* <span className="card-title">{}</span> */}
          </div>
          <div className="card-content">
            <p>{serviceId.title}</p>
          </div>
          <div><p>{serviceId.description}</p></div>
          <div>
            <Link to={`/`}>{"Back to Main"}</Link>
          </div>

          <div className="card-action link">
            <div>
              <p className="price">${serviceId.price}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;

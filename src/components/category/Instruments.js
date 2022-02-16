import React, { useEffect, useState } from "react";
import ServiceCards from "../ServiceCards";

const Instruments = () => {
  const { REACT_APP_BACKEND_URL } = process.env;
  const [instruments, setInstruments] = useState();
  const url = `${REACT_APP_BACKEND_URL}/category/instruments`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setInstruments(data);
      });
  }, []);

  if (!instruments) return null;

  if (!instruments.length)
    return (
      <h1>
        We don't have any services related to your request in stock for now!
      </h1>
    );

  return (
    <div className="container ">
      <h5 className="art_text">
        Professional Art related services from our Top offers
      </h5>
      <div>
        {instruments &&
          instruments.map((item, index) => {
            return (
              <div className="category_art col s12 m5 l3">
                <ServiceCards key={item.id} service={item} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Instruments;

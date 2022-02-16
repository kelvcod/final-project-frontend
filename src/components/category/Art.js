import React, { useEffect, useState } from "react";
import ServiceCards from "../ServiceCards";

const Art = () => {
  const { REACT_APP_BACKEND_URL } = process.env;
  const [art, setArt] = useState();
  const url = `${REACT_APP_BACKEND_URL}/category/art`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setArt(data);
      });
  }, []);

  if (!art) return null;

  if (!art.length)
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
        {art &&
          art.map((oneArt, index) => {
            return (
              <div className="category_art col s12 m5 l3">
                <ServiceCards key={oneArt.id} service={oneArt} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Art;

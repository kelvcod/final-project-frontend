import React, { useEffect, useState } from "react";
import ServiceCards from "../ServiceCards";

const Entertainment = () => {
  const { REACT_APP_BACKEND_URL } = process.env;
  const [entertainment, setEntertainment] = useState();
  const url = `${REACT_APP_BACKEND_URL}/category/entertainment`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setEntertainment(data);
      });
  }, []);

  if (!entertainment) return null;

  if (!entertainment.length)
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
        {entertainment &&
          entertainment.map((item, index) => {
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

export default Entertainment;

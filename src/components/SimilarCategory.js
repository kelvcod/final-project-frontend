import React, { useState, useEffect } from "react";
import ServiceCards from "./ServiceCards";

const SimilarCategory = ({ serviceId: { id, category } }) => {
  const [similar, setSimilar] = useState();
  const { REACT_APP_BACKEND_URL } = process.env;

  useEffect(() => {
    fetch(`${REACT_APP_BACKEND_URL}/services/related/${id}/${category}`)
      .then((res) => res.json())
      .then((data) => {
        setSimilar(data);
      });
  }, [id, category]);

  if (!similar) return null;

  if (!similar.length)
    return <h1>We don't have any similar services in stock for now!</h1>;

  return (
    <>
      {similar.slice(0, 2).map((item, index) => {
        return (
          <div className="related_services">
            <ServiceCards key={index} service={item} />
          </div>
        );
      })}
    </>
  );
};

export default SimilarCategory;

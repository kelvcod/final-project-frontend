import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css";

const ListService = ({ profile }) => {
  const { REACT_APP_BACKEND_URL } = process.env;

  const [serviceList, setServiceList] = useState();
  const { id } = profile;

  // console.log(profile);

  const mySuperModal = useRef();
  useEffect(() => {
    if (mySuperModal.current) {
      M.Modal.init(mySuperModal.current);
    }
  }, []);

  useEffect(async () => {
    await fetch(`${REACT_APP_BACKEND_URL}/users/list/${id}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setServiceList(data);
      });
  }, [id]);

  // console.log(serviceList);

  return (
    <div>
      <div>
        <h3>My services list</h3>
      </div>
      {serviceList &&
        serviceList.map((service, index) => {
          return (
            <div key={index} className="card-panel hoverable small">
              <h5>
                Title: <a href={`/services/${id}`}>{service.title}</a>
              </h5>
              <h6>Category: {service.category}</h6>
              <p>Service ID: {service.id}</p>
              {/* <Link to="/update-service">Update</Link> */}
              <div className="update-delete">
                <Link to={{ pathname: "/update-service", state: { service } }}>
                  Update
                </Link>
                <Link
                  to={{ pathname: "/delete-service", state: { service } }}
                  className="delete-service"
                >
                  Delete
                </Link>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default ListService;

import React, { useEffect, useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const DeleteService = () => {
  const { REACT_APP_BACKEND_URL } = process.env;
  const history = useHistory();

  let location = useLocation();
  console.log(location);
  const {
    id,
    // user_id,
    // image,
    // image_2,
    // image_3,
    // image_4,
    // description,
    // category,
    // price,
    // title,
  } = location.state.service;
  // console.log(title);

  const [deleteService, setDeleteService] = useState();

  //   useEffect(async () => {
  //     await fetch(`${REACT_APP_BACKEND_URL}/users/list/${id}`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         // console.log(data);
  //         setDeleteService(data);
  //       });
  //   }, [id]);

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${REACT_APP_BACKEND_URL}/services/${id}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
        // body: JSON.stringify(body),
      });
      const parseRes = await response.json();
      console.log(parseRes);
      if (parseRes.token) {
        localStorage.setItem("token", parseRes.token);

        toast.success("You successfully deleted service");
      } else {
        toast.error(parseRes);
      }
    } catch (err) {
      console.error(err.message);
    }
    history.push("/profile");
  };

  return (
    <div>
      <h5>
        Are you sure you want to delete this service? This action cannot be
        undone and you stand a chance of missing some interested customers.
      </h5>
      <div className="update-delete">
        <Link
          className="service-card__btn waves-effect waves-light btn "
          id="back_btn"
          to={`../profile`}
        >
          Back
        </Link>
        <button onClick={handleClick}>Delete</button>
      </div>
    </div>
  );
};

export default DeleteService;

import React, { useEffect, useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const DeleteUser = ({ setAuth, profile }) => {
  const [deleteUser, setDeleteUser] = useState();

  const { REACT_APP_BACKEND_URL } = process.env;
  const history = useHistory();
  const { id } = profile;

  //   let location = useLocation();
  //   console.log(location);
  //   const {
  //     id,
  // user_id,
  // image,
  // image_2,
  // image_3,
  // image_4,
  // description,
  // category,
  // price,
  // title,
  //   } = location.state.service;
  // console.log(title);
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${REACT_APP_BACKEND_URL}/users/${id}`, {
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
        //   localStorage.setItem("token", parseRes.token);
        localStorage.removeItem("token");
        setAuth(false);

        toast.success("You successfully deleted MVP user/ account profile");
      } else {
        toast.error(parseRes);
      }
    } catch (err) {
      console.error(err.message);
    }
    history.push("/auth/register");
  };

  return (
    <div>
      <h5>
        Are you sure you want to delete your account? This action cannot be
        undone.
      </h5>
      <div className="update-delete">
        <Link
          className="service-card__btn waves-effect waves-light btn "
          id="back_btn"
          to={`../profile`}
        >
          Back
        </Link>
        <button
          className="service-card__btn waves-effect waves-light btn "
          id="back_btn"
          onClick={handleClick}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default DeleteUser;

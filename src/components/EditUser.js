import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import M from "materialize-css";

const EditUser = ({ setAuth, profile }) => {
  // const {
  //   id,
  //   first_name,
  //   last_name,
  //   image_user,
  //   type,
  //   business_name,
  //   email,
  //   password,
  //   phone_number,
  //   address,
  //   city,
  //   state,
  //   country,
  //   about,
  // } = profile;

  // console.log(first_name);
  const mySuperModal = useRef();
  useEffect(() => {
    if (mySuperModal.current) {
      M.Modal.init(mySuperModal.current);
    }
  }, []);

  const { REACT_APP_BACKEND_URL } = process.env;
  const [inputs, setInputs] = useState({
    id: profile.id || "",
    first_name: profile.first_name || "",
    last_name: profile.last_name || "",
    image_user: profile.image_user || "",
    type: profile.type || "",
    business_name: profile.business_name || "",
    email: profile.email || "",
    password: profile.password || "",
    phone_number: profile.phone_number || "",
    address: profile.address || "",
    city: profile.city || "",
    state: profile.state || "",
    country: profile.country || "",
    about: profile.about || "",
  });

  // const [inputs, setInputs] = useState({
  //   id,
  //   first_name,
  //   last_name,
  //   image_user,
  //   type,
  //   business_name,
  //   email,
  //   password,
  //   phone_number,
  //   address,
  //   city,
  //   state,
  //   country,
  //   about,
  // });

  const [file, setFile] = useState({
    selectedFile: null,
  });

  const {
    id,
    first_name,
    last_name,
    image_user,
    type,
    business_name,
    email,
    password,
    phone_number,
    address,
    city,
    state,
    country,
    about,
  } = inputs;

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const onChangeHandler = (event) => {
    console.log(event.target.files[0]);
    setFile({
      selectedFile: event.target.files[0],
    });
    // console.log(file);
  };

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = {
        id,
        first_name,
        last_name,
        image_user,
        type,
        business_name,
        email,
        password,
        phone_number,
        address,
        city,
        state,
        country,
        about,
      };
      const response = await fetch(`${REACT_APP_BACKEND_URL}/users/${id}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const parseRes = await response.json();
      console.log(parseRes);
      if (parseRes.token) {
        localStorage.setItem("token", parseRes.token);
        // setAuth(true);
        toast.success("Profile update was Successful");
      } else {
        // setAuth(false);
        toast.error(parseRes);
      }
    } catch (err) {
      console.error(err.message);
    }

    // setInputs({
    //   id: "",
    //   first_name: "",
    //   last_name: "",
    //   image_user: "",
    //   type: "",
    //   business_name: "",
    //   email: "",
    //   password: "",
    //   phone_number: "",
    //   address: "",
    //   city: "",
    //   state: "",
    //   country: "",
    //   about: "",
    // });
  };

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col s12 m8 offset-m2">
          <h5 className="register-text my-5">Update Profile Information</h5>
          <div className="gf">
            <div className="card-body">
              <form onSubmit={onSubmitForm}>
                <div className="row">
                  <div className="input-field col s12 form-group ">
                    <input
                      id="first_name"
                      type="text"
                      className="form-control my-3"
                      name="first_name"
                      value={first_name}
                      onChange={(e) => onChange(e)}
                    />
                    <label className="active" for="first_name">
                      First name
                    </label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12 form-group ">
                    <label className="active" for="last_name">
                      Last name
                    </label>
                    <input
                      id="last_name"
                      type="text"
                      className="form-control my-3"
                      name="last_name"
                      value={last_name}
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                </div>

                <div>
                  <label className="active" htmlFor="file">
                    Upload a profile image:
                  </label>
                  <input
                    type="file"
                    id="file"
                    name="file"
                    onChange={onChangeHandler}
                    multiple
                  />
                </div>
                <div className="row">
                  <div className="input-field col s12 form-group ">
                    <label className="active" for="type">
                      Type of User
                    </label>
                    <input
                      id="type"
                      type="text"
                      className="form-control my-3"
                      name="type"
                      value={type}
                      onChange={(e) => onChange(e)}
                      placeholder="Seller, Customer, or Both"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12 form-group ">
                    <label className="active" for="business_name">
                      Business Name
                    </label>
                    <input
                      id="business_name"
                      type="text"
                      className="form-control my-3"
                      name="business_name"
                      value={business_name}
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="input-field col s12 form-group ">
                    <label className="active" for="email">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="form-control my-3"
                      name="email"
                      value={email}
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="input-field col s12 form-group ">
                    <label className="active" for="password">
                      Password
                    </label>
                    <input
                      id="password"
                      type="password"
                      className="form-control my-3"
                      name="password"
                      value={password}
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="input-field col s12 form-group ">
                    <label className="active" for="phone_number">
                      Phone number
                    </label>
                    <input
                      id="phone_number"
                      type="tel"
                      className="form-control my-3"
                      name="phone_number"
                      value={phone_number}
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="input-field col s12 form-group ">
                    <label className="active" for="address">
                      Address
                    </label>
                    <input
                      id="address"
                      type="text"
                      className="form-control my-3"
                      name="address"
                      value={address}
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="input-field col s12 form-group ">
                    <label className="active" for="city">
                      City
                    </label>
                    <input
                      id="city"
                      type="text"
                      className="form-control my-3"
                      name="city"
                      value={city}
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="input-field col s12 form-group ">
                    <label className="active" for="state">
                      State
                    </label>
                    <input
                      id="state"
                      type="text"
                      className="form-control my-3"
                      name="state"
                      value={state}
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="input-field col s12 form-group ">
                    <label className="active" for="country">
                      Country
                    </label>
                    <input
                      id="country"
                      type="text"
                      className="form-control my-3"
                      name="country"
                      value={country}
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="input-field col s12 form-group ">
                    <label className="active" for="textarea1">
                      Short biography
                    </label>
                    <textarea
                      id="textarea1"
                      type="text"
                      className="materialize-textarea"
                      name="about"
                      value={about}
                      onChange={(e) => onChange(e)}
                    ></textarea>
                  </div>
                </div>
                <div className="row">
                  <button type="submit" className="login_btn">
                    Update Profile
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditUser;

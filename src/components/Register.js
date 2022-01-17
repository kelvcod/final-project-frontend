import React, { useRef, useState, useEffect } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import logo from "../mvp-logo.png";
import M from "materialize-css";

const Register = ({ setAuth }) => {
  const { REACT_APP_BACKEND_URL } = process.env;

  // let history = useHistory();
  // let location = useLocation();

  const myFormSelect = useRef();
  useEffect(() => {
    if (myFormSelect.current) {
      M.FormSelect.init(myFormSelect.current);
    }
  }, []);

  const [inputs, setInputs] = useState({
    first_name: "",
    last_name: "",
    image_user: "",
    type: "",
    business_name: "",
    email: "",
    password: "",
    phone_number: "",
    address: "",
    city: "",
    state: "",
    country: "",
    about: "",
  });

  const [userImage, setUserImage] = useState({
    selectedFile: null,
  });

  const {
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
    console.log(event.target.files);
    if (event.target.files.length) {
      setUserImage({
        selectedFile: event.target.files[0],
        loaded: 0,
      });
      // setUserImage({
      //   selectedFile: event.target.files,
      // });

      // setUserImage(event.target.files[0]);
    }
    console.log(userImage);
  };

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    // const formData = new FormData();
    // const {
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
    // } = e.target.elements;

    // formData.append("first_name", first_name.value);
    // formData.append("last_name", last_name.value);
    // formData.append("type", type.value);
    // formData.append("business_name", business_name.value);
    // formData.append("email", email.value);
    // formData.append("password", password.value);
    // formData.append("phone_number", phone_number.value);
    // formData.append("address", address.value);
    // formData.append("city", city.value);
    // formData.append("state", state.value);
    // formData.append("country", country.value);
    // formData.append("about", about.value);
    // formData.append("image_user", userImage);

    try {
      const body = {
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

      const response = await fetch(`${REACT_APP_BACKEND_URL}/auth/register`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
          // "Content-Type": "multipart/form-data",
        },
        // data: JSON.stringify(formData),
        body: JSON.stringify(body),
      });
      const parseRes = await response.json();
      // console.log(parseRes);
      if (parseRes.token) {
        localStorage.setItem("token", parseRes.token);
        setAuth(true);
        toast.success("Registeration was Successful");
      } else {
        setAuth(false);
        toast.error(parseRes);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="container">
      {/* <h4 className="register-text my-5">Register</h4> */}
      {/* <div className="col-sm-4 google_sign_in ">
        <div className="card social-block">
          <div className="card-body">
            <a
              className="btn btn-block"
              href="/auth/google"
              role="button"
              id="google_sign_in_link"
            >
              <i className="fab fa-google"></i>
              Sign Up with Google
            </a>
          </div>
        </div>
      </div> */}
      <div className="no-card" id="login">
        <h4 className="register-text my-5">Register</h4>
        <div className="card-body">
          <div>
            <div className="center ">
              <div className="truncate bg-card-user">
                <img src={logo} alt="logo" className="circle responsive-img" />

                <div className="row login">
                  {/* Makes POST request to /register route */}
                  <form
                    className="col s12"
                    onSubmit={onSubmitForm}
                    // action={`${REACT_APP_BACKEND_URL}/auth/register`}
                    // method="POST"
                  >
                    <div className="form-group">
                      <label for="first_name">First name</label>
                      <input
                        type="text"
                        className="form-control my-3"
                        name="first_name"
                        value={first_name}
                        onChange={(e) => onChange(e)}
                      />
                    </div>
                    <div className="form-group">
                      <label for="last_name">Last name</label>
                      <input
                        type="text"
                        className="form-control my-3"
                        name="last_name"
                        value={last_name}
                        onChange={(e) => onChange(e)}
                      />
                    </div>
                    <br />
                    <div>
                      <label htmlFor="userImage">Upload a profile image:</label>
                      <input
                        type="file"
                        id="userImage"
                        name="userImage"
                        onChange={onChangeHandler}
                      />
                    </div>
                    <br />

                    {/* <div className="row"> */}
                    <div className="input-field col s12">
                      <select
                        multiple
                        name="type"
                        id="users"
                        ref={myFormSelect}
                      >
                        <option value="" disabled selected>
                          Choose your option
                        </option>
                        <option value="seller">seller</option>
                        <option value="customer">customer</option>
                      </select>
                      <label for="type">Type of user:</label>
                    </div>
                    {/* </div> */}

                    {/* <div className="form-group">
                      <label for="type">Type of User</label>
                      <input
                      type="text"
                      className="form-control my-3"
                      name="type"
                      value={type}
                      onChange={(e) => onChange(e)}
                      placeholder="Seller, Customer, or Both"
                      />
                    </div> */}

                    <br />
                    <div className="form-group">
                      <label for="business_name">Business Name</label>
                      <input
                        type="text"
                        className="form-control my-3"
                        name="business_name"
                        value={business_name}
                        onChange={(e) => onChange(e)}
                      />
                    </div>
                    <div className="form-group">
                      <label for="email">Email</label>
                      <input
                        type="email"
                        className="form-control my-3"
                        name="email"
                        value={email}
                        onChange={(e) => onChange(e)}
                      />
                    </div>
                    <div className="form-group">
                      <label for="password">Password</label>
                      <input
                        type="password"
                        className="form-control my-3"
                        name="password"
                        value={password}
                        onChange={(e) => onChange(e)}
                      />
                    </div>
                    <div className="form-group">
                      <label for="phone_number">Phone number</label>
                      <input
                        type="tel"
                        className="form-control my-3"
                        name="phone_number"
                        value={phone_number}
                        onChange={(e) => onChange(e)}
                      />
                    </div>
                    <div className="form-group">
                      <label for="address">Address</label>
                      <input
                        type="text"
                        className="form-control my-3"
                        name="address"
                        value={address}
                        onChange={(e) => onChange(e)}
                      />
                    </div>
                    <div className="form-group">
                      <label for="city">City</label>
                      <input
                        type="text"
                        className="form-control my-3"
                        name="city"
                        value={city}
                        onChange={(e) => onChange(e)}
                      />
                    </div>
                    <div className="form-group">
                      <label for="state">State</label>
                      <input
                        type="text"
                        className="form-control my-3"
                        name="state"
                        value={state}
                        onChange={(e) => onChange(e)}
                      />
                    </div>
                    <div className="form-group">
                      <label for="country">Country</label>
                      <input
                        type="text"
                        className="form-control my-3"
                        name="country"
                        value={country}
                        onChange={(e) => onChange(e)}
                      />
                    </div>
                    <div className="form-group">
                      <label for="about">Short biography</label>
                      <textarea
                        type="textarea"
                        className="form-control my-3"
                        name="about"
                        value={about}
                        onChange={(e) => onChange(e)}
                      />
                    </div>
                    <button type="submit" className="login_btn">
                      Register
                    </button>
                  </form>
                </div>
              </div>
              <div className="register_container">
                <p className="no_acc_text">Already have an account?</p>
                <Link
                  to={{
                    pathname: "/auth/login",
                    // state: { location },
                  }}
                  className="waves-effect waves-light btn #004d40 teal darken-4"
                  id="login"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

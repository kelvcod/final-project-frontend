import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
const { REACT_APP_BACKEND_URL } = process.env;

const Register = ({ setAuth }) => {
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
  const [file, setFile] = useState({
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

  const onChangeHandler = (event) => {
    console.log(event.target.files[0]);
    setFile({
      selectedFile: event.target.files,
    });
    console.log(file);
  };

  const onChange = (e) =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  const onSubmitForm = async (e) => {
    e.preventDefault();
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
          "Content-type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const parseRes = await response.json();

      if (parseRes.jwtToken) {
        localStorage.setItem("token", parseRes.jwtToken);
        setAuth(true);
        toast.success("Register Successfully");
      } else {
        setAuth(false);
        toast.error(parseRes);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div class="container my-5">
      <h4 className="register-text my-5">Register</h4>
      <div class="col-sm-4 google_sign_in ">
        <div class="card social-block">
          <div class="card-body">
            <a
              class="btn btn-block"
              href="/auth/google"
              role="button"
              id="google_sign_in_link"
            >
              <i class="fab fa-google"></i>
              Sign Up with Google
            </a>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col s12 m8 offset-m2">
          <div className="card" id="login">
            <div className="card-body">
              {/* Makes POST request to /register route */}
              <form
                onSubmit={onSubmitForm}
                action={`${REACT_APP_BACKEND_URL}/auth/register`}
                method="POST"
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
                <div>
                  <label htmlFor="file">Upload a profile image:</label>
                  <input
                    type="file"
                    id="file"
                    name="file"
                    onChange={onChangeHandler}
                    multiple
                  />
                </div>
                {/* <div>
                  <label for="type">Type of user:</label>
                  <select name="type" id="users">
                    <option value="type">Seller</option>
                    <option value="type">Just a acustomer</option>
                    <option value="type">Both</option>
                  </select>
                </div> */}
                <div className="form-group">
                  <label for="type">Type of User</label>
                  <input
                    type="text"
                    className="form-control my-3"
                    name="type"
                    value={type}
                    onChange={(e) => onChange(e)}
                    placeholder="Seller, Customer, or Both"
                  />
                </div>
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
                  <input
                    type="text"
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
                pathname: "/login",
                // state: { location },
              }}
              className="waves-effect waves-light btn"
              id="login"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

import React, { useState } from "react";

const Register = () => {
  const [userInfo, setUserInfo] = useState();
  const [file, setFile] = useState({
    selectedFile: null,
  });

  const onChangeHandler = (event) => {
    console.log(event.target.files[0]);
    setFile({
      selectedFile: event.target.files,
    });
    console.log(file);
  };

  return (
    <div class="container mt-5">
      {/* <h5 className="register-text">Register</h5>
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
      </div> */}
      <div className="row">
        <div className="col s12 m8 offset-m2">
          <div className="card" id="login">
            <div className="card-body">
              {/* Makes POST request to /register route */}
              <form action="/register" method="POST">
                <div className="form-group">
                  <label for="first_name">First name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="first_name"
                  />
                </div>
                <div className="form-group">
                  <label for="last_name">Last name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="last_name"
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
                <div>
                  <label for="users">Type of user:</label>
                  <select name="users" id="users">
                    <option value="seller">Seller</option>
                    <option value="customer">Just a acustomer</option>
                    <option value="both">Both</option>
                  </select>
                </div>
                <div className="form-group">
                  <label for="business_name">Business Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="business_name"
                  />
                </div>
                <div className="form-group">
                  <label for="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="username"
                  />
                </div>
                <div className="form-group">
                  <label for="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                  />
                </div>
                <div className="form-group">
                  <label for="phone_number">Phone number</label>
                  <input
                    type="tel"
                    className="form-control"
                    name="phone_number"
                  />
                </div>
                <div className="form-group">
                  <label for="address">Address</label>
                  <input type="text" className="form-control" name="address" />
                </div>
                <div className="form-group">
                  <label for="city">City</label>
                  <input type="text" className="form-control" name="city" />
                </div>
                <div className="form-group">
                  <label for="state">State</label>
                  <input type="text" className="form-control" name="state" />
                </div>
                <div className="form-group">
                  <label for="country">Country</label>
                  <input type="text" className="form-control" name="country" />
                </div>
                <button type="submit" className="login_btn">
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

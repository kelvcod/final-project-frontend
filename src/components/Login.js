import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Login = () => {
  const { REACT_APP_BACKEND_URL } = process.env;
  const [login, setLogin] = useState();

  return (
    <div>
      <div className="container mt-5">
        {/* <div className="col s12 m8 offset-m2"> */}
        <h5 className="login-text">Login to view your profile and more!</h5>
        <div className="row_login">
          {/* <div className="col s12 m10 l8 xl8"> */}
          <div className="col s12 m8 offset-m2">
            <div className="card" id="login">
              <div className="card-body">
                {/* Makes POST request to /login route  */}
                <form
                  action={`${REACT_APP_BACKEND_URL}/jwt/login`}
                  method="POST"
                >
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
                  <button type="submit" className="login_btn">
                    Login
                  </button>
                </form>
                <div>
                  <a href="#">Forgot your password? </a>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="col s12 google_sign_in_login">
            <div className="card ">
              <div className="card-body">
                <a
                  className="btn btn-block"
                  href="/auth/google"
                  role="button"
                  id="google_sign_in_link"
                >
                  <i className="fab fa-google"></i>
                  Sign In with Google
                </a>
              </div>
            </div>
          </div> */}

          <div className="register_container">
            <p className="no_acc_text">Don't have an account yet?</p>
            <Link
              to={{
                pathname: "/register",
                // state: { location },
              }}
              className="waves-effect waves-light btn"
              id="register"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

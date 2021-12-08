import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

const { REACT_APP_BACKEND_URL } = process.env;
const Login = ({ setAuth }) => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  let location = useLocation();
  const { email, password } = inputs;

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { email, password };
      const response = await fetch(`${REACT_APP_BACKEND_URL}/auth/login`, {
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
        toast.success("Logged in Successfully");
      } else {
        setAuth(false);
        toast.error(parseRes);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div>
      <div className="container mt-5">
        {/* <div className="col s12 m8 offset-m2"> */}
        <h5 className="login-text">
          Login to view your orders, edit your profile and more!
        </h5>
        <div className="row_login">
          {/* <div className="col s12 m10 l8 xl8"> */}
          <div className="col s12 m8 offset-m2">
            <div className="card" id="login">
              <div className="card-body">
                {/* Makes POST request to /login route  */}
                <form
                  action={`${REACT_APP_BACKEND_URL}/auth/login`}
                  method="POST"
                  onSubmit={onSubmitForm}
                >
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
                  <button
                    type="submit"
                    className="login_btn"
                    onClick={() => setAuth(true)}
                  >
                    Login
                  </button>
                </form>
                <div>
                  <a href="/reset-password">Forgot your password? </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col s12 google_sign_in_login">
            <div className="card ">
              <div className="card-body">
                <Link
                  className="btn btn-block"
                  to="/auth/google"
                  role="button"
                  id="google_sign_in_link"
                >
                  <i className="fab fa-google"></i>
                  Sign In with Google
                </Link>
              </div>
            </div>
          </div>

          <div className="register_container">
            <p className="no_acc_text">Don't have an account yet?</p>
            <Link
              to={{
                pathname: "/register",
                state: { location },
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

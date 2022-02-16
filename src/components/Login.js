import React, { useRef, useState, useEffect } from "react";
import { Link, useLocation, Redirect } from "react-router-dom";
import { toast } from "react-toastify";
import ResetPassword from "./ResetPassword";
import M from "materialize-css";
import logo from "../mvp-logo.png";

const Login = ({ setAuth }) => {
  const { REACT_APP_BACKEND_URL } = process.env;
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  let location = useLocation();

  const { email, password } = inputs;
  // console.log(email);

  const mySuperModal = useRef();
  useEffect(() => {
    if (mySuperModal.current) {
      M.Modal.init(mySuperModal.current);
    }
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { email, password };
      const response = await fetch(`${REACT_APP_BACKEND_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(body),
      });

      const parseRes = await response.json();
      console.log(parseRes);
      if (parseRes.token) {
        localStorage.setItem("token", parseRes.token);
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
    <div className="container">
      <div className="j" id="login">
        <div className="card-body">
          <div className="mt-5">
            <div className="row">
              <br />
              <div className="center ">
                <h4 className="truncate bg-card-user">
                  <img
                    src={logo}
                    alt="logo"
                    className="circle responsive-img"
                  />

                  <h6>Enter your email and password.</h6>
                  {/* <div className="col s12 m8 offset-m2"> */}
                  <div className="row login">
                    <form className="col s12" onSubmit={onSubmitForm}>
                      {/* <div className="row"> */}
                      <div className="input-field box col m12 s12  ">
                        <i className="material-icons icon prefix">
                          account_circle
                        </i>

                        <input
                          id="email"
                          type="email"
                          className=" validate "
                          name="email"
                          value={email}
                          onChange={(e) => onChange(e)}
                        />
                        <label for="email">Email</label>
                        {/* </div> */}
                      </div>

                      {/* <div className="row"> */}
                      <div className="input-field box col m12 s12 ">
                        <i className="material-icons icon prefix">
                          enhanced_encryption
                        </i>
                        <input
                          id="password"
                          type="password"
                          className="validate"
                          name="password"
                          value={password}
                          onChange={(e) => onChange(e)}
                        />
                        <label for="password">Password</label>
                        {/* </div> */}
                      </div>
                      <div className="row">
                        <button
                          type="submit"
                          className="login_btn btn waves-effect waves-light"
                          // onClick={() => setAuth(true)}
                        >
                          Login
                        </button>
                      </div>
                    </form>
                  </div>
                </h4>

                <div>
                  <a className="reset-password" href="/reset-password">
                    Forgot your password?
                  </a>
                </div>
              </div>
            </div>

            {/* <div className="col s12 google_sign_in_login">
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
          </div> */}

            <div className="register_container">
              <p className="no_acc_text">Don't have an account yet?</p>
              <Link
                to={{
                  pathname: "/auth/register",
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
    </div>
  );
};

export default Login;

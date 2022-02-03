import React, { useRef, useState, useEffect } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import NewPassword from "./NewPassword";
import M from "materialize-css";
import logo from "../mvp-logo.png";
import { toast } from "react-toastify";

const ResetPassword = () => {
  const [inputs, setInputs] = useState();

  const { REACT_APP_BACKEND_URL } = process.env;

  const mySuperModal = useRef();
  useEffect(() => {
    if (mySuperModal.current) {
      M.Modal.init(mySuperModal.current);
    }
  }, []);

  const history = useHistory();

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    // history.push("/new-password");
  };

  // const onSubmitForm = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const body = {
  //       id,
  //       email,
  //       password,
  //     };
  //     const response = await fetch(`${REACT_APP_BACKEND_URL}/users/${id}`, {
  //       method: "PUT",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-type": "application/json",
  //       },
  //       body: JSON.stringify(body),
  //     });
  //     const parseRes = await response.json();
  //     console.log(parseRes);
  //     if (parseRes.token) {
  //       localStorage.setItem("token", parseRes.token);
  //       // setAuth(true);
  //       toast.success("Profile update was Successful");
  //     } else {
  //       // setAuth(false);
  //       toast.error(parseRes);
  //     }
  //   } catch (err) {
  //     console.error(err.message);
  //   }
  // };

  return (
    <div className="container" style={{ width: "700px" }}>
      <div className="no-card" id="login">
        <p className="register-text my-5">
          Enter the email addressed you used for registration. Click on the link
          in the email and follor the steps to reset your password.
        </p>
        <div className="card-body">
          <div>
            <div className="center ">
              <div className="truncate bg-card-user">
                <img src={logo} alt="logo" className="circle responsive-img" />

                <div className="row login">
                  <form
                    className="col s12"
                    // action={`${REACT_APP_BACKEND_URL}/reset-password`}
                    // method="POST"
                    onSubmit={onSubmitForm}
                  >
                    <div className="form-group">
                      <label for="password">Email</label>
                      <input
                        type="email"
                        className="form-control my-3"
                        name="email"
                        // value={email}
                        onChange={(e) => onChange(e)}
                      />
                    </div>
                    <button
                      type="submit"
                      className="login_btn modal-trigger"
                      href="#modal1"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div id="modal1" className="modal col s12 m8 " ref={mySuperModal}>
          <div className="modal-content ">
            <NewPassword />
          </div>
          <div className="modal-footer">
            <a
              href="/auth/login"
              className="modal-close waves-effect waves-green btn-flat"
            >
              Close
            </a>
          </div>
        </div>
      </div>
      <div className="register_container">
        <p className="no_acc_text">Back to Login</p>
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
  );
};

export default ResetPassword;

import React, { useRef, useState, useEffect } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import NewPassword from "./NewPassword";
import M from "materialize-css";

const ResetPassword = () => {
  const [inputs, setInputs] = useState();

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

  return (
    <div className="container">
      <form
        // action={`${REACT_APP_BACKEND_URL}/reset-password`}
        // method="POST"
        onSubmit={onSubmitForm}
      >
        <p>Reset your password</p>
        <div className="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            className="form-control my-3"
            name="password"
            // value={password}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <label for="password">New password</label>
          <input
            type="password"
            className="form-control my-3"
            name="password"
            // value={password}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <label for="password">Confirm password</label>
          <input
            type="password"
            className="form-control my-3"
            name="password"
            // value={password}
            onChange={(e) => onChange(e)}
          />
        </div>
        <button
          type="submit"
          className="login_btn modal-trigger"
          href="#modal1"
        >
          Reset Password
        </button>
      </form>
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
    </div>
  );
};

export default ResetPassword;

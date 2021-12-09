import React, { useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";

const ResetPassword = () => {
  const [inputs, setInputs] = useState();

  const history = useHistory();

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    history.push("/reset-password");
  };

  return (
    <div>
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
        <button type="submit" className="login_btn">
          Login
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;

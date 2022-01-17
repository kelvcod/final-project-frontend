import React from "react";
import { toast } from "react-toastify";

const Logout = ({ setAuth }) => {
  const logout = async (e) => {
    e.preventDefault();
    try {
      localStorage.removeItem("token");
      setAuth(false);
      toast.success("Logged out successfully");
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div>
      <button
        id="back_btn"
        onClick={(e) => logout(e)}
        className="btn btn-primary"
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;

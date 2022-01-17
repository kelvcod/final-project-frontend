import React, { useRef, useState, useEffect } from "react";
import RegisteredUser from "./RegisteredUser";
import Logout from "./Logout";
import { Link } from "react-router-dom";
import EditUser from "./EditUser";
import ManageUser from "./ManageUser";
import ListService from "./ListService";
import M from "materialize-css";
import DeleteUser from "./DeleteUser";
import Orders from "./Orders";

const ProfilePage = ({ setAuth, services }) => {
  const { REACT_APP_BACKEND_URL } = process.env;
  const [profile, setProfile] = useState("");
  // console.log("na we dey hia" + profile);

  const mySuperModal = useRef();
  useEffect(() => {
    if (mySuperModal.current) {
      M.Modal.init(mySuperModal.current);
    }
  }, []);
  const mySuperModal2 = useRef();
  useEffect(() => {
    if (mySuperModal2.current) {
      M.Modal.init(mySuperModal2.current);
    }
  }, []);

  const mySuperModal3 = useRef();
  useEffect(() => {
    if (mySuperModal3.current) {
      M.Modal.init(mySuperModal3.current);
    }
  }, []);

  const mySuperModal4 = useRef();
  useEffect(() => {
    if (mySuperModal4.current) {
      M.Modal.init(mySuperModal4.current);
    }
  }, []);

  const getProfile = async () => {
    try {
      const res = await fetch(`${REACT_APP_BACKEND_URL}/profile/`, {
        method: "GET",
        headers: { token: localStorage.token },
      });

      const parseData = await res.json();
      // console.log("na we dey hia" + JSON.stringify(parseData));
      setProfile(parseData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div className="container">
      <h2>Welcome {profile.first_name} </h2>
      <hr />
      <div className="manage-account">
        <div>
          <p>Manage Profile</p>
          <p className="ind-link">
            <a href="#modal1" className=" modal-trigger">
              <span className="material-icons">manage_accounts</span>
            </a>
          </p>

          <div>
            <div id="modal1" className="modal col s12 m8 " ref={mySuperModal}>
              <div className="modal-content ">
                <EditUser profile={profile} />
                {/* <ManageUser profile={profile} /> */}
              </div>
              <div className="modal-footer">
                <Link
                  to="/profile"
                  className="modal-close waves-effect waves-green btn-flat"
                >
                  Close
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p> New Service</p>
          <p className="ind-link">
            <Link to="/create-service">
              <span className="material-icons">add_circle</span>{" "}
            </Link>
          </p>
        </div>

        <div>
          <p>List Services</p>
          <p className="ind-link">
            <a href="#modal2" className=" modal-trigger">
              <span className="material-icons">view_list</span>
            </a>
          </p>
          <div>
            <div id="modal2" className="modal col s12 m8 " ref={mySuperModal2}>
              <div className="modal-content ">
                <ListService profile={profile} />
              </div>
              <div className="modal-footer">
                <Link
                  to="/profile"
                  className="modal-close waves-effect waves-green btn-flat"
                >
                  Close
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p>Delete profile</p>
          <p className="ind-link">
            <a href="#modal3" className=" modal-trigger">
              <span className="material-icons">delete</span>
            </a>
          </p>
          <div>
            <div id="modal3" className="modal col s12 m8 " ref={mySuperModal3}>
              <div className="modal-content ">
                <DeleteUser profile={profile} setAuth={setAuth} />
              </div>
              <div className="modal-footer">
                <Link
                  to={"/profile" ? "/profile" : "/"}
                  className="modal-close waves-effect waves-green btn-flat"
                >
                  Close
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p>Orders</p>
          <p className="ind-link">
            <a href="#modal4" className=" modal-trigger">
              <span className="material-icons">shopping_basket</span>
            </a>
          </p>
          <div>
            <div id="modal4" className="modal col s12 m8 " ref={mySuperModal4}>
              <div className="modal-content ">
                <Orders profile={profile} />
              </div>
              <div className="modal-footer">
                <Link
                  to="/profile"
                  className="modal-close waves-effect waves-green btn-flat"
                >
                  Close
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <RegisteredUser profile={profile} />
      <hr />
      <Logout setAuth={setAuth} />
    </div>
  );
};

export default ProfilePage;

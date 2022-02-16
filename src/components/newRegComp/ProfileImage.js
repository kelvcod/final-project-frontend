import React, { useRef, useEffect, useState } from "react";
import EditImage from "./UploadImage";
import M from "materialize-css";
import { Link } from "react-router-dom";

const ProfileImage = ({ profile }) => {
  const { image_user, first_name, last_name } = profile;
  // const [file, setFile] = useState({
  //   selectedFile: null,
  // });

  const mySuperModal = useRef();
  useEffect(() => {
    if (mySuperModal.current) {
      M.Modal.init(mySuperModal.current);
    }
  }, []);

  //   const onChangeHandler = (event) => {
  //     console.log(event.target.files[0]);
  //     setFile({
  //       selectedFile: event.target.files[0],
  //     });
  //     // console.log(file);
  //   };

  return (
    <div className="smile">
      <div className="preview text-center">
        <div>
          <p className="ind-link">
            <a href="#modal" className=" modal-trigger">
              <span className="material-icons">edit</span>
            </a>
          </p>
          <div>
            <div id="modal" className="modal col s12 m8 " ref={mySuperModal}>
              <div className="modal-content ">
                <EditImage profile={profile} />
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

        <img
          //   className="profile_image"
          className="preview-img materialboxed"
          src={
            image_user
              ? image_user
              : "http://simpleicon.com/wp-content/uploads/account.png"
          }
          alt="Preview Image"
          width="200"
          height="200"
        />
        {/* <div className="browse-button">
          <span className="material-icons edit-icon">edit</span>
          <input
            className="browse-input"
            type="file"
            required
            name="file"
            id="file"
            onChange={onChangeHandler} 
          />
        </div>*/}
        {/* <span className="Error"></span> */}
        <h4 className="name_">
          {first_name} {last_name}
        </h4>
      </div>
    </div>
  );
};

export default ProfileImage;

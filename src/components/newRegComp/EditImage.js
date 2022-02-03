import React, { useRef, useState, useEffect } from "react";

const EditImage = ({ profile }) => {
  const { image_user } = profile;

  const [file, setFile] = useState({
    selectedFile: null,
  });
  const onChangeHandler = (event) => {
    console.log(event.target.files[0]);
    setFile({
      selectedFile: event.target.files[0],
    });
    // console.log(file);
  };

  return (
    <div>
      <form>
        <h4 className="img_text">Change profile Image</h4>
        <div className="preview text-center">
          <img
            className="preview-img"
            src={
              image_user
                ? image_user
                : "http://simpleicon.com/wp-content/uploads/account.png"
            }
            alt="Preview Image"
            width="200"
            height="200"
          />
          <div className="browse-button">
            <span className="material-icons edit-icon">edit</span>
            <input
              className="browse-input"
              type="file"
              required
              name="file"
              id="file"
              onChange={onChangeHandler}
            />
          </div>
          <span className="Error"></span>
        </div>
        <button type="submit" className="img_profile">
          Update Photo
        </button>
      </form>
    </div>
  );
};

export default EditImage;

import React, { useRef, useState, useEffect } from "react";
import axios from "axios";

const EditImage = ({ profile }) => {
  const { first_name, last_name, image_user, id } = profile;
  const { REACT_APP_BACKEND_URL } = process.env;

  const [file, setFile] = useState({
    selectedFile: null,
  });
  const onChangeHandler = (event) => {
    console.log(event.target.files[0]);
    setFile({
      selectedFile: event.target.files[0],
      loaded: 0,
    });
    // console.log(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `${REACT_APP_BACKEND_URL}/users/upload`;
    const data = new FormData();
    data.append("file", file);
    // await axios
    //   .post(url, data, {
    //     // receive two parameter endpoint url ,form data
    //   })
    //   .then((res) => {
    //     // then print response status
    //     console.log("geeret " + res.statusText);
    //   });

    try {
      const result = await axios({
        method: "POST",
        url: url,
        data: data,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(result.data);
    } catch (e) {
      console.log("geeret " + e.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h4 className="img_text">
          Change your profile Image {first_name} {last_name}
        </h4>
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

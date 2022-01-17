import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const CreateService = ({ services }) => {
  const { REACT_APP_BACKEND_URL } = process.env;
  let history = useHistory();
  const [service, setService] = useState({
    id: "",
    user_id: "",
    title: "",
    image: "",
    image_2: "",
    image_3: "",
    image_4: "",
    category: "",
    price: "",
    description: "",
  });

  const [status, setStatus] = useState("Submit");
  const [file, setFile] = useState({
    selectedFile: null,
  });

  const {
    id,
    user_id,
    title,
    image,
    image_2,
    image_3,
    image_4,
    category,
    price,
    description,
  } = service;

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const onChangeHandler = (event) => {
    console.log(event.target.files[0]);
    setFile({
      selectedFile: event.target.files,
    });
    // console.log(file);
  };

  const onChange = (e) => {
    setService({ ...service, [e.target.name]: e.target.value });
  };

  //   console.log(services);

  //   const createAService = async () => {
  //     const body = {
  //       user_id,
  //       title,
  //       image,
  //       image_2,
  //       image_3,
  //       image_4,
  //       category,
  //       price,
  //       description,
  //     };
  //     try {
  //       const res = await fetch(`${REACT_APP_BACKEND_URL}/profile/`, {
  //         method: "POST",
  //         body: { token: localStorage.token },
  //       });

  //       const parseData = await res.json();

  //       setService(parseData);
  //     } catch (err) {
  //       console.error(err.message);
  //     }
  //   };

  //   useEffect(() => {
  //     createAService();
  //   }, []);

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = {
        id,
        user_id,
        title,
        image,
        image_2,
        image_3,
        image_4,
        category,
        price,
        description,
      };
      const response = await fetch(`${REACT_APP_BACKEND_URL}/services/`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const parseRes = await response.json();
      console.log(parseRes);
      if (parseRes.token) {
        localStorage.setItem("token", parseRes.token);

        toast.success("You successfully created a service");
      } else {
        toast.error(parseRes);
      }
    } catch (err) {
      console.error(err.message);
    }
    // history.push(`/services/${id}`);
    history.push(`/profile`);
  };

  return (
    <div>
      <div className="container my-5">
        <div className="row">
          <div className="col s12 m8 offset-m2">
            <h4 className="register-text my-5">Create A New Service</h4>
            <div className="card" id="login">
              <div className="card-body">
                {/* Makes POST request to create a service route */}
                <form onSubmit={onSubmitForm}>
                  <div className="form-group">
                    <label for="title">Title</label>
                    <input
                      type="text"
                      className="form-control my-3"
                      name="title"
                      value={title}
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                  <div className="form-group">
                    <label for="category">Category</label>
                    <input
                      type="text"
                      className="form-control my-3"
                      name="category"
                      value={category}
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                  <div>
                    <h6>
                      Upload a photo to showcase your service. (min. 1, max. 4)
                    </h6>
                    <div>
                      <label htmlFor="file">Upload photo</label>
                      <input
                        type="file"
                        id="file"
                        name="file"
                        onChange={onChangeHandler}
                        multiple
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label for="price">Price</label>
                    <input
                      type="text"
                      className="form-control my-3"
                      name="price"
                      value={price}
                      onChange={(e) => onChange(e)}
                      placeholder="$"
                    />
                  </div>
                  <div className="form-group">
                    <label for="description">Description</label>
                    <input
                      type="text"
                      className="form-control my-3"
                      name="description"
                      value={description}
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                  <div className="form-group">
                    <label for="user_id">Seller ID</label>
                    <input
                      type="text"
                      className="form-control my-3"
                      name="user_id"
                      value={user_id}
                      onChange={(e) => onChange(e)}
                    />
                  </div>

                  <button type="submit" className="login_btn">
                    Create Service
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Link
        className="service-card__btn waves-effect waves-light btn "
        id="back_btn"
        to={`../profile`}
      >
        Back
      </Link>
    </div>
  );
};

export default CreateService;
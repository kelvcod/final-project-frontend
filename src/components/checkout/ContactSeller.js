import React, { useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import axios from "axios";

const { REACT_APP_BACKEND_URL } = process.env;

const ContactSeller = () => {
  let history = useHistory();
  let location = useLocation();
  console.log(location);
  const {
    id,
    first_name,
    last_name,
    image_user,
    email: sellerEmail,
    category,
    business_name,
    title,
  } = location.state.serviceId;

  const [status, setStatus] = useState("Submit");
  const [file, setFile] = useState();

  const onChangeHandler = (event) => {
    if (event.target.files && event.target.files.length) {
      setFile(event.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const formData = new FormData();
    const { name, buyerEmail, message } = e.target.elements;

    formData.append("name", name.value);
    formData.append("buyerEmail", buyerEmail.value);
    formData.append("message", message.value);
    formData.append("sellerEmail", sellerEmail);
    formData.append("file", file);

    try {
      await axios({
        method: "POST",
        url: `${REACT_APP_BACKEND_URL}/contact/seller`,
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    } catch (e) {
      console.log(e.message);
    }

    setStatus("Submit");

    // let result = await response.json();
    // alert(result.status);
    history.push("/send-message");
  };

  return (
    <div className="row" id="single_service">
      {/* <div className="col s12 m10 l8 xl8"> */}
      <div className="col s12 m8 offset-m2">
        <div
          className="card-image_contact-seller card_swipe seller-image__wrap"
          id="contact-page-seller"
        >
          <img
            id="user_image_review"
            src={`${REACT_APP_BACKEND_URL}${image_user}`}
            alt="Here is the seller"
          />

          <div className="contact-seller-info">
            <h4>
              {first_name} {last_name}
            </h4>
            <p>
              <b>{business_name}</b>
            </p>
            <p>
              <b>{category}</b>
            </p>
            <p>
              <b>{title}</b>
            </p>
            <hr className="hr_line" />
            <p>
              <b>Please include:</b>
            </p>
            <ul>
              <li>Project description</li>
              <li>Specific instructions</li>
              <li>Relevant files (if any)</li>
              <li>Your budget</li>
            </ul>
          </div>
          {/* form start */}
          <div className="serviceId_title">
            <form className="form_contact-seller" onSubmit={handleSubmit}>
              <br />
              <h5 className="send_message">Send a message to the seller</h5>

              <div>
                <label htmlFor="name"> Name: </label>
                <input type="text" id="name" required />
              </div>
              <div>
                <label htmlFor="buyerEmail">Email:</label>
                <input type="email" id="buyerEmail" required />
              </div>
              <div>
                <label htmlFor="message">Message:</label>
                <textarea id="message" required />
              </div>
              <div>
                <label htmlFor="file">Upload Your File:</label>
                <input
                  type="file"
                  id="file"
                  className="file"
                  onChange={onChangeHandler}
                  // multiple
                />
              </div>
              <div>
                <div className="seller-btns">
                  <Link
                    className="service-card__btn waves-effect waves-light btn "
                    id="back_btn"
                    to={`../services/${id}`}
                  >
                    back
                  </Link>
                </div>
                <button className="submit_contact" type="submit">
                  {status}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSeller;

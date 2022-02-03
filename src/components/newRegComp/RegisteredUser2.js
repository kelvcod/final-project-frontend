import React, { useEffect } from "react";
import ProfileImage from "./ProfileImage";

// import { useParams } from "react-router";

const RegisteredUser = ({ profile }) => {
  const {
    first_name,
    last_name,
    image_user,
    type,
    business_name,
    email,

    phone_number,
    address,
    city,
    state,
    country,
    about,
  } = profile;

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  return (
    <div>
      <h3>Go to Manage Profile to update your profile.</h3>
      <h4>{business_name}</h4>

      {/* <img src={image_user} alt={first_name} /> */}

      <div className="_img">
        <ProfileImage profile={profile} />
      </div>

      <div className="contact_profile">
        <h6>Contact: </h6>
        <p>Mobile number: {phone_number}</p>
        <p>Email address: {email}</p>
      </div>
      <div>
        <h5>Short Bio</h5>
        <p className="bio">{about}</p>
      </div>
      <hr />

      <div>
        <p>City: {city}</p>
        <p>State: {state}</p>
        <p>Country: {country}</p>
      </div>
      <div></div>
    </div>
  );
};

export default RegisteredUser;

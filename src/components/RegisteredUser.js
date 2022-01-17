import React, { useEffect } from "react";

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
      <h4>{business_name}</h4>
      <div>
        <img src={image_user} alt="here is the seller" />
        <h5>
          {first_name} {last_name}
        </h5>
      </div>
      <div>
        <h5>Short Bio</h5>
        <p className="bio">{about}</p>
      </div>
      <hr />
      <div>
        <h6>Contact</h6>
        <p>{phone_number}</p>
        <p>{email}</p>
      </div>
      <div>
        <p>
          {city}
          {", "}
          {state}
        </p>
        <p>{country}</p>
      </div>
      <div></div>
    </div>
  );
};

export default RegisteredUser;

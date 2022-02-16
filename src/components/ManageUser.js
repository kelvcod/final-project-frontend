import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const ManageUser = ({ profile }) => {
  const { id } = profile;
  const [inputs, setInputs] = useState({ profile });
  const { REACT_APP_BACKEND_URL } = process.env;

  const [file, setFile] = useState({
    selectedFile: null,
  });

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    reset(profile);
  });
  const { register, reset, handleSubmit } = useForm({
    defaultValues: profile,
  });

  const onChangeHandler = (event) => {
    console.log(event.target.files[0]);
    setFile({
      selectedFile: event.target.files[0],
    });
    // console.log(file);
  };

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  //   const onSubmit = (data) => {
  //     alert(JSON.stringify(data));
  //   };

  const onSubmit = async (e) => {
    console.log("anything dey hia?");

    // e.preventDefault();
    try {
      const body = {
        inputs,
        // ...profile,
      };

      console.log("wetin we get for hia?" + JSON.stringify(body));

      const response = await fetch(`${REACT_APP_BACKEND_URL}/users/${id}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const parseRes = await response.json();
      console.log(parseRes);
      if (parseRes.token) {
        localStorage.setItem("token", parseRes.token);
        // setAuth(true);
        toast.success("Profile update was Successful");
      } else {
        // setAuth(false);
        toast.error(parseRes);
      }
    } catch (err) {
      console.error(err.message);
    }
    // setInputs({
    //   profile: "",
    // });
  };

  return (
    <>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="First name"
          onChange={(e) => onChange(e)}
          {...register("first_name", { required: true, maxLength: 100 })}
        />
        <input
          type="text"
          placeholder="Last name"
          onChange={(e) => onChange(e)}
          {...register("last_name", { required: true, maxLength: 100 })}
        />

        {/* <input
          type="file"
          id="file"
          placeholder="Upload a profile image"
          {...register("image_user", { required: false, maxLength: 4 })}
          onChange={onChangeHandler}
        /> */}

        <input
          type="text"
          placeholder="Type of User. Seller or Customer"
          onChange={(e) => onChange(e)}
          {...register("type", { required: true, maxLength: 100 })}
        />
        <input
          type="text"
          placeholder="Business name"
          onChange={(e) => onChange(e)}
          {...register("business_name", { required: true, maxLength: 100 })}
        />

        <input
          type="Email"
          placeholder="Email"
          onChange={(e) => onChange(e)}
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => onChange(e)}
          {...register("password", { required: true, maxLength: 100 })}
        />

        <input
          type="tel"
          placeholder="Mobile number"
          onChange={(e) => onChange(e)}
          {...register("phone_number", {
            required: true,
            minLength: 6,
            maxLength: 25,
          })}
        />

        <input
          type="text"
          placeholder="Address"
          onChange={(e) => onChange(e)}
          {...register("address", { required: true, maxLength: 100 })}
        />
        <input
          type="text"
          placeholder="City"
          onChange={(e) => onChange(e)}
          {...register("city", { required: true, maxLength: 100 })}
        />

        <input
          type="text"
          placeholder="State"
          onChange={(e) => onChange(e)}
          {...register("state", { required: true, maxLength: 100 })}
        />
        <input
          type="text"
          placeholder="Country"
          onChange={(e) => onChange(e)}
          {...register("country", { required: true, maxLength: 100 })}
        />

        <textarea
          placeholder="Tell us a some interesting things about you"
          onChange={(e) => onChange(e)}
          {...register("about", { required: true, maxLength: 5000 })}
        />

        {/* <button
          type="submit"
          className="login_btn"
          placeholder="Update Profile"
        ></button> */}
        <div className="rower">
          <button type="submit" className="login_btn">
            Update Profile
          </button>
        </div>
      </form>
    </>
  );
};

export default ManageUser;

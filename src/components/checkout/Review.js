import React from "react";
import { Link, useLocation } from "react-router-dom";

const Review = () => {
  const { REACT_APP_BACKEND_URL } = process.env;
  let location = useLocation();
  console.log(location);
  const {
    first_name,
    last_name,
    image_user,
    category,
    business_name,
    image,
    price,
    title,
  } = location.state.serviceId;
  console.log(title);

  return (
    <div className="row" id="single_service">
      <div className="col s12 m10 l8 xl8">
        <div className="card">
          <div className="serviceId_title">
            <br />
            <h6>
              Welcome to the checkout review page. Please make sure you have
              already contacted the service provider before proceeding with
              checkout.
            </h6>
            <br />

            <div className="card-image card_swipe service-image__wrap">
              <img
                id="user_image_review"
                src={`${REACT_APP_BACKEND_URL}${image_user}`}
                alt="Photo of the seller"
              />
              <h6>
                {first_name} {last_name}
              </h6>
              <p>
                <b>{business_name}</b>
              </p>
            </div>

            <div
              className="card-image card_swipe service-image__wrap"
              id="image_review"
            >
              <img
                src={`${REACT_APP_BACKEND_URL}${image}`}
                alt="image of service"
              />
            </div>
            <p>
              <b>{title}</b>
            </p>
            <p>
              Category: <i>{category}</i>
            </p>
            <b>${price}</b>
            <hr />

            <div>
              <form>
                <input
                  type="checkbox"
                  id="contact_seller"
                  name="contact_seller"
                />
                <label for="contact_seller">
                  I have contacted the seller of this product and I wish to
                  proceed to checkout.
                </label>
                <br />
              </form>
              <div className="btn_links">
                <Link
                  to={`/`}
                  className="waves-effect waves-light btn"
                  id="back_home_checkout"
                >
                  Back to Home
                </Link>

                <Link
                  to={{
                    pathname: "/checkout",
                    state: { location },
                  }}
                  className="waves-effect waves-light btn"
                  id="checkout"
                >
                  Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;

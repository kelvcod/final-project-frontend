import { Link } from "react-router-dom";

const SellerInfo = ({ serviceId }) => {
  const { REACT_APP_BACKEND_URL } = process.env;
  const {
    // id,
    first_name,
    last_name,
    image_user,
    category,
    business_name,
    // image,
    // price,
    // title,
    about,
    country,
  } = serviceId;
  return (
    <div className="seller-info">
      <div className="seller_info_row">
        <div className="col s12">
          <h5 className="related_text_seller">About and contact the seller</h5>
          <div className="card card-seller">
            <div className="card-image responsive-img">
              <img
                src={`${REACT_APP_BACKEND_URL}${image_user}`}
                id="seller_picture"
                alt="here is the seller"
              />
              <span className="card-title">
                {first_name} {last_name}
              </span>
              {/* <Link
                to="/contact/seller"
                className="btn-floating halfway-fab waves-effect waves-light red"
              >
                <i className="material-icons">person</i>
              </Link> */}

              <Link
                to={{
                  pathname: "/contact/seller",
                  // search: "?sort=name",
                  // hash: "#the-hash",
                  state: { serviceId },
                }}
                className="btn-floating halfway-fab waves-effect waves-light red"
              >
                <i className="material-icons">person</i>
              </Link>
            </div>
            <div className="card-content">
              <p className="seller_businessname">
                <b>{business_name}</b>
              </p>
              <hr />
              <p className="seller_about">{about}</p>

              <hr />

              <p className="seller_country">
                <em>Country: {country}</em>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerInfo;

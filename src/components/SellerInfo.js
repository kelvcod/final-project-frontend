const SellerInfo = ({ serviceId }) => {
  const { REACT_APP_BACKEND_URL } = process.env;
  return (
    <div className="seller-info">
      <div className="row">
        <div className="col s12 m3">
          <div className="card card-seller">
            <div className="card-image responsive-img">
              <img
                src={`${REACT_APP_BACKEND_URL}${serviceId.image_user}`}
                id="seller_picture"
              />
              <span className="card-title">
                {serviceId.first_name} {serviceId.last_name}
              </span>
              <a className="btn-floating halfway-fab waves-effect waves-light red">
                <i className="material-icons">person</i>
              </a>
            </div>
            <div className="card-content">
              <p className="seller_businessname">
                <b>{serviceId.business_name}</b>
              </p>
              <hr />
              <p className="seller_about">{serviceId.about}</p>
              <p>
                I am a very simple card. I am good at containing small bits of
                information. I am convenient because I require little markup to
                use effectively.
              </p>
              <hr />

              <p className="seller_country">
                <em>Country: {serviceId.country}</em>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerInfo;

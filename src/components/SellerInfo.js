const SellerInfo = ({ serviceId }) => {
  const { REACT_APP_BACKEND_URL } = process.env;
  return (
    <div className="seller-info">
      <div class="row">
        <div class="col s12 m6">
          <div class="card card-seller">
            <div class="card-image responsive-img">
              <img
                src={`${REACT_APP_BACKEND_URL}${serviceId.image_user}`}
                id="seller_picture"
              />
              <span class="card-title">
                {serviceId.first_name} {serviceId.last_name}
              </span>
              <a class="btn-floating halfway-fab waves-effect waves-light red">
                <i class="material-icons">person</i>
              </a>
            </div>
            <div class="card-content">
              <p>
                I am a very simple card. I am good at containing small bits of
                information. I am convenient because I require little markup to
                use effectively.
              </p>
              <p className="seller_businessname">{serviceId.businees_name}</p>
              <p className="seller_country">Country: {serviceId.country}</p>
              <p className="seller_about">{serviceId.about}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerInfo;

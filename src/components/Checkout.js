import React from "react";
import { Link } from "react-router-dom";

const Checkout = ({ services }) => {
  console.log(services);
  // const { id, category, image, price, title } = services;
  const { REACT_APP_BACKEND_URL } = process.env;

  return <div></div>;
  // (
  //   <div>
  //     <div>
  //       <image
  //         src={`${REACT_APP_BACKEND_URL}${image}`}
  //         alt="image of service"
  //       />
  //     </div>

  //     <div>
  //       <p>Checkout...</p>

  //       <form>
  //         <input
  //           type="checkbox"
  //           id="contact_seller"
  //           name="vehicle1"
  //           value="Bike"
  //         />
  //         <label for="vehicle1">
  //           {" "}
  //           I have contacted the seller of this product and I wish to proceed to
  //           checkout.
  //         </label>
  //         <br />
  //         {/* <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
  //     <label for="vehicle2"> I </label>
  //     <br /> */}
  //         <input type="button" id="submit" name="submit" value="Submit" />
  //         {/* <label for="vehicle3"> I have a boat</label> */}
  //       </form>
  //       <div className="btn_links">
  //         <Link
  //           to={`/`}
  //           className="waves-effect waves-light btn"
  //           id="back_home"
  //         >
  //           Back to Home
  //         </Link>
  //         {/* <Link
  //       to={`/checkout`}
  //       className="waves-effect waves-light btn"
  //       id="proceed_checkout"
  //     >
  //       Proceed to checkout
  //     </Link> */}
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default Checkout;

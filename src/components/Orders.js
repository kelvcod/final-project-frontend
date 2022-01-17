import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Orders = ({ profile }) => {
  const { REACT_APP_BACKEND_URL } = process.env;
  const [myOrders, setMyOrders] = useState();
  const { id } = profile;

  useEffect(async () => {
    await fetch(`${REACT_APP_BACKEND_URL}/users/list/${id}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setMyOrders(data);
      });
  }, [id]);

  // console.log(serviceList);

  return (
    <div>
      <h6>Orders</h6>
    </div>
  );
};

export default Orders;

import React from "react";
import gif from "../gif-loading-4.gif";

const NoMatch = () => {
  //   let seconds = 0;
  //   const displayseconds = () => {
  //     seconds += 1;
  //     document.getElementById("secondsdisplay").innerText =
  //       "This Page will be redirected in '+seconds+' seconds... ";
  //   };
  //   setInterval(displayseconds, 1000);

  //   const redirectPage = () => {
  //     window.location = "/";
  //   };
  //   setTimeout(redirectPage(), 3000);

  return (
    <div className="container">
      <div className="no-match">
        <h4 className="no-match-warn">WARNING!!!There is no matching page.</h4>
        <h5>You will be automaticaly redirected to the Home page.</h5>
        {/* <div id="secondsdisplay">
          <img src={gif} alt="loading" />
        </div> */}
        <h6>
          Automatic redirect not working,{" "}
          <a href="/">click to go back to Home page</a>
        </h6>
      </div>
    </div>
  );
};

export default NoMatch;

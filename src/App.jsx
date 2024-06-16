import React from "react";
import Navbar from "./components/Navbar";
import arrow from "./assets/images/arrow.png";
import teen from "./assets/images/teen.jpg";
import teen2 from "./assets/images/teen2.jpg";
import teen3 from "./assets/images/teen3.jpg";
import "./App.css";
const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <div className="landing">
        <div className="landing-header">
          <div className="header-title">
            {" "}
            <h1>Supporting the Leaders of Tomorrow.</h1>
          </div>
          <div className="header-para">
            {" "}
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="header-donate">
            {" "}
            <button>
              Donate Now <img src={arrow} alt="arrow" />
            </button>
          </div>
        </div>
      </div>
      <div className="landing-gallary">
        <div className="gallary-img">
          <div className="img-phrase">
            {" "}
            <p>One</p>
          </div>
          <img src={teen} alt="" />
        </div>
        <div className="gallary-img">
          <div className="img-phrase">
            <p> Student at a</p>
          </div>
          <img src={teen2} alt="" />
        </div>
        <div className="gallary-img">
          <div className="img-phrase">
            <p>Time.</p>
          </div>
          <img src={teen3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default App;

import React from "react";
import Navbar from "./components/Navbar";
import arrow from "./assets/images/arrow.png";
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
    </div>
  );
};

export default App;

import React from "react";
import Navbar from "./components/Navbar";
import arrow from "./assets/images/arrow.png";
import teen from "./assets/images/teen.jpg";
import teen2 from "./assets/images/teen2.jpg";
import teen3 from "./assets/images/teen3.jpg";
import idea from "./assets/images/idea.png";
import mental from "./assets/images/mental.png";
import rate from "./assets/images/rate.png";
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
      <div className="landing-causes">
        <div className="causes-header">
          <h1>Our Work to Mitigate.</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel
            libero sem. Donec id diam vitae eros ultricies porta.{" "}
          </p>
        </div>
        <div className="causes-stats">
          <div className="stats-content">
            <img src={idea} alt="" />
            <div className="stats-para">
              <h3>Education and Literacy:</h3>
              <p>
                Preventing dropout rates through mentorship and academic support
                programs.
              </p>
            </div>
          </div>
          <div className="stats-content">
            <img src={mental} alt="" />
            <div className="stats-para">
              <h3>Mental Health and Counseling</h3>
              <p>
                Early intervention and awareness programs to prevent mental
                health crises.
              </p>
            </div>
          </div>
          <div className="stats-content">
            <img src={rate} alt="" />
            <div className="stats-para">
              <h3>Life Skills and Personal Development</h3>
              <p>
                Offering life skills education and leadership development to
                prevent future challenges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

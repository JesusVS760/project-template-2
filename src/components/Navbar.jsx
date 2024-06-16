import React from "react";
import "./Navbar.css";
import Donation from "./Donation";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="nav-logo">
        <h2>Youth Empowerment</h2>
      </div>
      <nav>
        <div className="">
          <a href="">About Us</a>
        </div>
        <div className="">
          {" "}
          <a href="">Causes</a>
        </div>
        <div className="">
          {" "}
          <a href="">Contact Us</a>
        </div>
      </nav>
      <div className="nav-donation-button">
        <Donation />
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import "./Footer.css";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="newsletter">
          <h3>Newsletter Sign Up</h3>
          <p>Subscribe to our newsletter to get the latest updates.</p>
          <form>
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>

        <div className="quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="contact-info">
          <h3>Contact Info</h3>
          <p>Email: info@example.com</p>
          <p>Phone: (123) 456-7890</p>
          <p>Address: 123 Main St, Anytown, USA</p>
        </div>

        <div className="privacy-policy">
          <h3>Privacy Policy</h3>
          <p>
            Read our <a href="#privacy-policy">Privacy Policy</a>.
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

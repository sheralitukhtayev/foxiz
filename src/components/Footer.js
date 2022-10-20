import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-text">
          <span className="two-slash">//</span>
          <p>
            <span className="big-w">W</span>e influence 20 million users and is
            the number one business and technology news network on the planet
          </p>
        </div>
        <div className="footer-top-row footer-top-links">
          <p className="footer-columns-heading">Quick Link</p>
          <li>
            <a href="#">my bookmark</a>
          </li>
          <li>
            <a href="#">interests</a>
            <span className="li-mark mark-orange">New</span>
          </li>
          <li>
            <a href="#">contact us</a>
          </li>
          <li>
            <a href="#">blog index</a>
          </li>
        </div>
        <div className="footer-top-row footer-top-categories">
          <p className="footer-columns-heading">Top Categories</p>
          <li>
            <a href="#">Business</a>
          </li>
          <li>
            <a href="#">Politics</a>
          </li>
          <li>
            <a href="#">tech</a> <span className="li-mark mark-green">Hot</span>
          </li>
          <li>
            <a href="#">health</a>
          </li>
        </div>
        <div className="footer-top-sign-up">
          <span className="footer-columns-heading">
            Sign Up for Our Newsletter
          </span>
          <p>
            Subscribe to our newsletter to get our newest articles instantly!
          </p>
          <div className="footer-sign-inp-btn">
            <input
              type="text"
              name=""
              className="sign-input"
              placeholder="Your email address"
            />
            <button className="sign-in">Sign Up Now</button>
          </div>
          <div className="footer-checker">
            <input type="checkbox" name="" className="check-box" />
            <p>I have read and agree to the terms & conditions</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom"></div>
    </div>
  );
}

export default Footer;

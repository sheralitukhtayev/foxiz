import React from "react";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

function Header() {
  return (
    <div className="header-container">
      <a href="/">
        <img
          className="top-image"
          src="https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/09/ad-top.jpg"
          alt=""
        />
      </a>
      <div className="header-navbar">
        <div className="navbar-left">
          <a href="/">
            <img
              className="main-icon"
              src="https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/12/logo.svg"
              alt=""
            />
          </a>
          <div className="navbar-items">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Politics</a>
            </li>
            <li>
              <a href="#">Technology</a>
            </li>
            <li>
              <a href="#">Posts</a>
            </li>
            <li>
              <i className="fa fa-bookmark"></i>
              <a href="#">Bookmarks</a>
            </li>
            <li>
              <a href="#">Pages</a>
            </li>
            <a href="#">
              <li className="dots-icon">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </li>
            </a>
          </div>
        </div>
        <div className="header-right">
          <button className="sign-in">Sign In</button>
          <div className="header-right-icons">
            <i className="fa fa-bell"></i>
            <i className="fa fa-search"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

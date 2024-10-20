import React from "react";
import "../css/Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img
            src="https://d14zm0hu08yytt.cloudfront.net/wp-content/uploads/2023/03/darklogo.png"
            alt="Ventura Logo"
          />
        </div>
        <nav className="navbar-links">
          <ul>
            <li>
              <a href="#invest">Invest</a>
            </li>
            <li>
              <a href="#trade">Trade</a>
            </li>
            <li>
              <a href="#spotlight">Spotlight</a>
            </li>
            <li>
              <a href="#pricing">Pricing</a>
            </li>
            <li>
              <a href="#platform">Platform</a>
            </li>
            <li>
              <a href="#learn">Learn</a>
            </li>
          </ul>
        </nav>
        <div className="navbar-buttons">
          <button className="btn login-btn">Login</button>
          <button className="btn create-account-btn">Create Account</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

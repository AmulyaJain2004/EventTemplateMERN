import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#home" className="navbar-logo">Hackathon 4.0</a>
        <ul className="navbar-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#challenge">Challenge</a></li>
          <li><a href="#perks">Perks</a></li>
          <li><a href="#timeline">Timeline</a></li>
          <li><a href="#sponsors">Sponsors</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li><button className="register-button">Register Now</button></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

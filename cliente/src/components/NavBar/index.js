// Navbar.js
import React from "react";
import "./NavBar.css"; // Assuming you will create a Navbar.css for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-title">Lave Pet</div>
      <ul className="nav-links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/services">Services</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

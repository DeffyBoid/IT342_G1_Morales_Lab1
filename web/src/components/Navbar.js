import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ onLogoutClick }) {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <h3>MyApp</h3>
      </div>
      <div className="nav-right">
        <Link to="/dashboard" className="nav-link">Home</Link>
        <Link to="/profile" className="nav-link">Profile</Link>
        <button onClick={onLogoutClick} className="nav-btn logout-btn">
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
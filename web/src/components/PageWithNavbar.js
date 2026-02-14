// src/components/PageWithNavbar.jsx
import React, { useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import "./PageWithNavbar.css"; // optional shared styles for modal overlay

function PageWithNavbar({ children }) {
  const navigate = useNavigate();
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleLogoutClick = () => setShowLogoutModal(true);

  const confirmLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  const cancelLogout = () => setShowLogoutModal(false);

  return (
    <div className="PageWithNavbar">
      <Navbar onLogoutClick={handleLogoutClick} />
      <div className="page-content">{children}</div>

      {showLogoutModal && (
        <div className="logout-modal-overlay">
          <div className="logout-modal">
            <h3>Are you sure you want to logout?</h3>
            <div className="modal-buttons">
              <button onClick={confirmLogout} className="confirm-btn">Yes</button>
              <button onClick={cancelLogout} className="cancel-btn">No</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PageWithNavbar;
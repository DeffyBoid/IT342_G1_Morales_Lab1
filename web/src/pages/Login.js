import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

function Loginpage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
  e.preventDefault();

  if (username.trim() !== "") {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("username", username);

    navigate("/dashboard");
  }
  };
  return (
    <div className="Loginpage">
      <h2>Welcome to the Login Page!</h2>
      <div className='loginbox'>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input 
              type="text" 
              id="username" 
              name="username" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" />
          </div>

          <button type="submit" className="auth-btn">Login</button>
        </form>
        <p>Don't have an account? <Link to="/register">Register here</Link></p>
      </div>
    </div>
  );
}

export default Loginpage;
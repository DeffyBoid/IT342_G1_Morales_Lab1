import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

function Loginpage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/dashboard', { state: { username } });
  }
  return (
    <div className="Loginpage">
      <h2>Welcome to the Login Page!</h2>
      <div className='loginbox'>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
          <br />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
          <br />
          <button type="submit">Login</button>
        </form>
        <p>Don't have an account? <Link to="/register">Register here</Link></p>
      </div>
    </div>
  );
}

export default Loginpage;
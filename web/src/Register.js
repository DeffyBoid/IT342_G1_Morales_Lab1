import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

function Registerpage() {
  return (
    <div className="Registerpage">
      <h2>Welcome to the Register Page!</h2>
      <div className='registerbox'>
        <form>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />
          <br />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
          <br />
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input type="password" id="confirmPassword" name="confirmPassword" />
          <br />
          <button type="submit">Register</button>
          <br />
        </form>
        <br />
        <p>Already have an account? <Link to="/">Login here</Link></p>
      </div>
    </div>
  );
}

export default Registerpage;
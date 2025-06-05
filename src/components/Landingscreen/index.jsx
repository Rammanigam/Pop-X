import React from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

const Landingscreen = () => {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate('/sign-up');
  };

  const handleLogin = () => {
    navigate('/sign-in');
  };

  return (
    <div className="welcome-container">
      <div className="welcome-card">
        <h1>Welcome to PopX</h1>
        <p>Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit,</p>

        <div className="button-group">
          <button className="primary-btn" onClick={handleSignUp}>Create Account</button>
          <button className="secondary-btn" onClick={handleLogin}>Already Registered? Login</button>
        </div>
      </div>
    </div>
  );
};

export default Landingscreen;
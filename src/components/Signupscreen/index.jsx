import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

const Signupscreen = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    password: '',
    companyName: '',
    isAgency: '', 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    localStorage.setItem('userData', JSON.stringify(formData));

    alert('Account created successfully!');
    navigate('/profile'); 
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h1>Create your <br/> PopX Account</h1>
        <form onSubmit={handleSubmit} className="signup-form">

          <label htmlFor="fullName">Full Name</label>
          <input className='input-container'
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />

          <label htmlFor="phoneNumber">Phone Number</label>
          <input className='input-container'
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email Address</label>
          <input className='input-container'
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="password">Password</label>
          <input className='input-container'
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <label htmlFor="companyName">Company Name</label>
          <input className='input-container'
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
          />

          <div className="radio-group">
            <label className='ag-lable'>Are you an agency?</label>
            <div className="radio-options">
              <label>
                <input  className="input-container"
                  type="radio"
                  name="isAgency"
                  value="yes"
                  checked={formData.isAgency === 'yes'}
                  onChange={handleChange}
                />
                Yes
              </label>
              <label>
                <input className="input-container"
                  type="radio"
                  name="isAgency"
                  value="no"
                  checked={formData.isAgency === 'no'}
                  onChange={handleChange}
                />
                No
              </label>
            </div>  
          </div>

          <button type="submit" className="signup-button">Create Account</button>
        </form>
      </div>
    </div>
  );
};

export default Signupscreen;
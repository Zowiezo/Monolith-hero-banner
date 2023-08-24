import React from 'react';
import './NavigationBar.css';

const NavigationBar = () => {
  return (
    <div className="nav-bar">
      <div className="nav-logo">
        <img src="/logo/MainLogo.png" alt="Logo" />
      </div>
      <ul className="nav-tabs">
        <li className="nav-tab">
          Monolith Platform
          <div className="nav-dropdown">
            {/* Dropdown content here */}
          </div>
        </li>
        <li className="nav-tab">
          AI Solutions
          <div className="nav-dropdown">
            {/* Dropdown content here */}
          </div>
        </li>
        <li className="nav-tab">
          Resources
          <div className="nav-dropdown">
            {/* Dropdown content here */}
          </div>
        </li>
        <li className="nav-tab">
          About
          <div className="nav-dropdown">
            {/* Dropdown content here */}
          </div>
        </li>
        <li className="nav-tab">
          Contact Us
        </li>
      </ul>
      <button className="request-demo-button">Request a Demo</button>
    </div>
  );
};

export default NavigationBar;

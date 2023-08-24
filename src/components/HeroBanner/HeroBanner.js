import React from 'react';
import LogoSlider from '../LogoSlider/LogoSlider';
import './HeroBanner.css';

const HeroBanner = () => {
  return (
    <div className="hero-banner">
      <div className="container-img">
        <div className="container-text">
          <p className="header">Monolith</p>
          <h1>Use AI software to test <br /> less and learn more.</h1>
          <p className="main-text">
            Spend less time running expensive, repetitive tests and more time learning <br /> from your engineering data to predict the exact tests to run.
          </p>
        </div>
        <div className="button-container">
          <button className="button-style">Request Demo</button>
          <button className="button-style inactive">Speak to our team</button>
        </div>
        <div className="carousel-container">
          <LogoSlider />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;

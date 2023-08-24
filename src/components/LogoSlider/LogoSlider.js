import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './LogoSlider.css';

const logos = [
  'https://www.monolithai.com/hs-fs/hubfs/JOTA_logo.png?width=280&amp;height=48&amp;name=JOTA_logo.png',
  'https://www.monolithai.com/hs-fs/hubfs/BMW_logo_(gray)_4_w_66.png?width=66&amp;height=66&amp;name=BMW_logo_(gray)_4_w_66.png',
  'https://www.monolithai.com/hubfs/bae-systems_logo.svg',
  'https://www.monolithai.com/hs-fs/hubfs/mercedes-benz_logo.png?width=344&amp;height=86&amp;name=mercedes-benz_logo.png',
  'https://www.monolithai.com/hubfs/honda_logo.svg',
  'https://www.monolithai.com/hubfs/Siemens_logo.svg',
  'https://www.monolithai.com/hs-fs/hubfs/honeywell-1-logo-black-and-white.png?width=193&amp;height=36&amp;name=honeywell-1-logo-black-and-white.png',
  'https://www.monolithai.com/hs-fs/hubfs/Kautex_Textron_Logo_Bw-1.png?width=193&amp;height=58&amp;name=Kautex_Textron_Logo_Bw-1.png',
  'https://www.monolithai.com/hs-fs/hubfs/michelin-tire-logo.png?width=193&amp;height=57&amp;name=michelin-tire-logo.png',
  'https://www.monolithai.com/hubfs/Aptar%20Logo.svg',
];

const LogoSlider = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const sliderRef = useRef(null);

  const settings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: !(isPaused || (isHovered && !isPaused)),
    autoplaySpeed: 0,
    speed: 1000,
    arrows: false,
    dots: false,
    pauseOnHover: false,
  };

  return (
    <div
      className="carousel-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsPaused(false); // Start autoplay immediately when mouse moves away
      }}
    >
      <Slider ref={sliderRef} {...settings}>
        {logos.map((logo, index) => (
          <div key={index} className="carousel-slide">
            <img className="carousel-image img-fluid" alt={`Logo ${index}`} src={logo} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default LogoSlider;
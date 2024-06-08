import React from "react";
import './About.css'
import { assets } from '../../assets/assets';

const About = () => {
  return (
    <div className="about">
      <h1>ABOUT US</h1>
      <div className="about-content">
        <div className="about-img">
          <img src={assets.about_img} alt="About Us" />
        </div>
        <div className="about-data">
          <h2>Welcome to our chips haven!</h2>
          <p>
            We have partnered with numerous local shops to bring you the
            freshest and most exciting chip flavors right at your fingertips.
            Each shop has meticulously listed their available flavors and
            brands, ensuring you have access to the best and most diverse
            selection of chips around.
          </p>
          <p>Happy crunching!</p>
          <button className="about-btn">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default About;

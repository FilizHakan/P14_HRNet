import React from "react";

import Logo from "../assets/HRNetBlueLogo.png";
import Sphere from "../assets/grey-sphere.png"
/**
 * @description Home is the creation of the main home page
 * @returns {JSX.Element} Home page
 */
export default function Hero () 
{
    return (
      <div>
        <div className="heroTitleContainer">
          <h1 className="heroTitle">Welcome to</h1>
        </div>
        <div className="hrnetlogo">
          <img 
              src={Logo} 
              className="hrIcon" 
              alt="HRNet Logo"
            >
          </img>
          <img 
              src={Sphere} 
              className="sphereIcon" 
              alt="A sphere Logo"
            >
          </img>
        </div>
        <p className="heroSubtitle">The company's internal application to create and view employees records</p>
      </div>
  );
};
import React from "react";

import Logo from "../assets/black-logo.png";

/**
 * @description Home is the creation of the main home page
 * @returns {JSX.Element} Home page
 */
export default function Home () 
{
    return (
      <div>
        <div className="homeTitleContainer">
          <h1 className="homeTitle">Welcome to</h1>
        </div>
        <img 
            src={Logo} 
            className="homeIcon" 
            alt="SportSee Icon"
          >
        </img>
        <p className="homeSubtitle">The company's internal application to create and view employees records</p>
        <div className="iconSportSee">
        </div>
      </div>
  );
};
import React from "react";
import { NavLink } from "react-router-dom";

import Logo from "../assets/HRNetWholeLogo.png";

/**
 * @name Error404
 * @dscription create the 404 error message component
 * @returns {JSX.Element}
 */
export default function Error404() 
{
  return (
      <div>
        <p className="errorTitle">404</p>

        <p 
          className="errorContent"
        >
          Oops! The page you have requested does not exist.
        </p>

        <div className="logo404">
          <img
            src={Logo}
            className="homeIcon"
            alt="HRNet Logo"
          />
        </div>

        <NavLink 
          to={"/"} 
          className="errorLink">
            Return to the home page
        </NavLink>
      </div>  
          )
};

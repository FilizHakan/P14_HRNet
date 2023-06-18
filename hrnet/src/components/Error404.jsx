import React from "react";
import { NavLink } from "react-router-dom";

import Logo from "../assets/black-shadow-logo.png";

/**
 * @name Error404
 * @dscription create the 404 error message component
 * @returns {JSX.Element}
 */
export default function Error404() 
{
  return (
    <div>
        <div className="error404">
          <p className="title404">404</p>
          <img
            src={Logo}
            className="logo404"
            alt="HRNet Logo"
          />
          <p 
            className="text404"
          >
            Oops! The page you have requested does not exist.
          </p>
          <NavLink 
            to={"/"} 
            className="navigation404">
              Return to the home page
          </NavLink>
        </div>
      </div>
  )
};

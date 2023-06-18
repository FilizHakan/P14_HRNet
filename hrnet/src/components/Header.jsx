import React from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/white-logo.png";
/**
 * @name Header
 * @description create the header component with the logo and link of navigation
 * @returns {JSX.Element}
 *
 */

export default function Header () 
{

  return (
    <div>
        <nav className="main-nav">
            <div>
                <img
                    src={Logo}
                    className="nav-logo"
                    alt="HRNet Logo"
                />
            </div>
            <div>
            <Link className="main-nav-item-sign" to="/employee-create-form">
                <i className="fa fa-user-circle"></i>
                Sign In
            </Link>
            </div>
        </nav>
    </div>
  );
};

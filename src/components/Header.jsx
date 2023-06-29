import React from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/HRNET.png";
/**
 * @name Header
 * @description create the header component with the logo and link of navigation
 * @returns {JSX.Element}
 *
 */

export default function Header () 
{

    return (
    <div className="home">
        <div className="home-logo">
            <img
                src={Logo}
                className="nav-logo"
                alt="HRNet Logo"
            />

            <div className="linkNav">
                <nav className="homeEmployeeLinkNav">
                    <Link 
                        title="Home" 
                        className="navBtn" 
                        to="/"
                    >
                        Home
                    </Link>
                    <Link 
                        title="Create Employee Form" 
                        className="navBtn" 
                        to="/employee-create-form"
                    >
                        Create
                    </Link>
                    <Link 
                        title="Create Employee Form" 
                        className="navBtn" 
                        to="/employee-list-table"
                    >
                        View
                    </Link>
                </nav>
            </div>
        </div>
    </div>
  );
};
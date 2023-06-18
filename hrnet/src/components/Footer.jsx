import React from "react";

/**
 * @name Footer
 * @description create the footer component with the copyright claim
 * @returns {JSX.Element}
 *
 */

export default function Footer () 
{
  return (
    <div className="footerContainer">
      <p className="copyright">
        <span className="footerTitle">
            HRNet
        </span>
        2023@Copyright
      </p>
    </div>
  );
};

import React from "react";
import Desktop_View_Logo from "../../Assets/desktop-view-logo";
import Mobile_View_Logo from "../../Assets/mobile-view-logo";

function BrandLogo() {
  return (
    <>
      <div className="navbar-brandlogo">
        <Desktop_View_Logo />
        <Mobile_View_Logo />
      </div>
    </>
  );
}

export default BrandLogo;

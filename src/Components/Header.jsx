import React from "react";

function Header() {
  return (
    <>
      <header className="header-nav">
        <div className="brand-logo">
          <a href="#">Logo</a>
        </div>
        <ul>
          <li>Product</li>
          <li>Download</li>
          <li>Pricing</li>
        </ul>
      </header>
    </>
  );
}

export default Header;

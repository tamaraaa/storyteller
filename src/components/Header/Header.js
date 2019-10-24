import React from "react";

import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header__nav">
        <span className="header__nav__item">About</span>
        <span className="header__nav__item">Product</span>
        <span className="header__nav__item">Contact</span>
      </div>
    </div>
  );
};
export default Header;

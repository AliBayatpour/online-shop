import React from "react";
import "./header.styles.scss";

import { Link } from "react-router-dom";
import logo from "../../assets/logo.webp";
import { ReactComponent as Basket } from "../../assets/bag.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="header__leftPart">
        <Link className="header__link" to="/shop">
          SHOP
        </Link>
        <Link className="header__link" to="/shop">
          CONTACT
        </Link>
      </div>
      <img className="header__logo" src={logo} alt="LOGO" />
      <div className="header__rightPart">
        <Link className="header__link" to="/shop">
          SIGN IN
        </Link>
        <Basket className="header__basket"/>
      </div>
    </div>
  );
};

export default Header;

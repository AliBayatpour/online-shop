import React from "react";
import "./header.styles.scss";

import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import { Link } from "react-router-dom";
import logo from "../../assets/logo.webp";
import CartIcon from "../cart-icon/cart-icon.component";

const Header = ({ currentUser }) => {
  return (
    <div className="header">
      <div className="header__linkWrapper">
        <Link className="header__link" to="/shop">
          SHOP
        </Link>
        <Link className="header__link" to="/shop">
          CONTACT
        </Link>
      </div>
      <img className="header__logo" src={logo} alt="LOGO" />
      <div className="header__linkWrapper">
        {currentUser ? (
          <div className="header__link" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="header__link" to="/signin">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(Header);
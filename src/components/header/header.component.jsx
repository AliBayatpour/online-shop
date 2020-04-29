import React from "react";
import "./header.styles.scss";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import { Link } from "react-router-dom";
import logo from "../../assets/logo.webp";
import CartIcon from "../cart-icon/cart-icon.component";
import { signOutStart } from "../../redux/user/user.actions";

const Header = ({ currentUser, signOutStart }) => {
  return (
    <div className="header">
      <div className="header__linkWrapper">
        <Link className="header__link" to="/">
          HOME
        </Link>
        <Link className="header__link" to="/shop">
          SHOP
        </Link>
      </div>
      <img className="header__logo" src={logo} alt="LOGO" />
      <div className="header__linkWrapper">
        {currentUser ? (
          <div className="header__link" onClick={signOutStart}>
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

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

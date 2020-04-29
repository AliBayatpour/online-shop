import React from "react";
import "./mobileMenuDropdown.styles.scss";

import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { signOutStart } from "../../redux/user/user.actions";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { connect } from "react-redux";
import { toggleMobileMenuDropdown } from "../../redux/mobile-menu-dropdown/mobile-menu-dropdown.actions";

const MobileMenuDropdown = ({
  currentUser,
  signOutStart,
  toggleMobileMenuDropdown,
}) => {
  return (
    <div className="mobileMenuDropdown">
      <div className="mobileMenuDropdown__linksContainer">
        <div className="mobileMenuDropdown__linkContainer">
          <Link
            className="mobileMenuDropdown__link"
            to="/"
            onClick={() => toggleMobileMenuDropdown()}
          >
            HOME
          </Link>
        </div>
        <div className="mobileMenuDropdown__linkContainer">
          <Link
            className="mobileMenuDropdown__link"
            to="/shop"
            onClick={() => toggleMobileMenuDropdown()}
          >
            SHOP
          </Link>
        </div>
        <div className="mobileMenuDropdown__linkContainer">
          {currentUser ? (
            <div
              className="mobileMenuDropdown__link"
              onClick={() => {
                signOutStart();
                toggleMobileMenuDropdown();
              }}
            >
              SIGN OUT
            </div>
          ) : (
            <Link
              className="mobileMenuDropdown__link"
              to="/signin"
              onClick={() => toggleMobileMenuDropdown()}
            >
              SIGN IN
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
  toggleMobileMenuDropdown: () => dispatch(toggleMobileMenuDropdown()),
});
export default connect(mapStateToProps, mapDispatchToProps)(MobileMenuDropdown);

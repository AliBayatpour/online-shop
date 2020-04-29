import React, { useRef, useEffect } from "react";
import "./mobile-menu.styles.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectToggleMobileDropdownMenu } from "../../redux/mobile-menu-dropdown/mobile-menu-dropdown.selectors";
import { toggleMobileMenuDropdown } from "../../redux/mobile-menu-dropdown/mobile-menu-dropdown.actions";
import CartIcon from '../cart-icon/cart-icon.component';

const MobileMenu = ({ showMobileDropdownMenu, dispatch }) => {
  const top = useRef(null);
  const middle = useRef(null);
  const bottom = useRef(null);
  const refArray = [top, middle, bottom];
  useEffect(() => {
    if (showMobileDropdownMenu) {
      refArray.forEach((elem) => {
        elem.current.style.position = "absolute";
      });
      top.current.style.transform = "rotate(45deg)";
      middle.current.style.opacity = "0";
      bottom.current.style.transform = "rotate(-45deg)";
    } else {
      refArray.forEach((elem) => {
        elem.current.style.position = null;
      });
      top.current.style.transform = null;
      middle.current.style.opacity = null;
      bottom.current.style.transform = null;
    }
  },[showMobileDropdownMenu]);
  const mobileMenuController = () => {
    dispatch(toggleMobileMenuDropdown());
  };
  return (
    <div className="mobileMenu">
    <CartIcon />
      <div className="mobileMenu__icon" onClick={mobileMenuController}>
        <span
          className="mobileMenu__iconLine mobileMenu__iconLine--top"
          ref={top}
        ></span>
        <span
          className="mobileMenu__iconLine mobileMenu__iconLine--middle"
          ref={middle}
        ></span>
        <span
          className="mobileMenu__iconLine mobileMenu__iconLine--bottom"
          ref={bottom}
        ></span>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  showMobileDropdownMenu: selectToggleMobileDropdownMenu,
});
export default connect(mapStateToProps)(MobileMenu);

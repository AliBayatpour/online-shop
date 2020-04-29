import React, { useEffect, useRef } from "react";
import { ReactComponent as Basket } from "../../assets/bag.svg";
import "./cart-icon.styles.scss";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectToggleCartHidden } from "../../redux/cart/cart.selectors";
import { selectCountItems } from "../../redux/cart/cart.selectors";
import { toggleDropdown } from "../../redux/cart/cart.actions";

const CartIcon = ({ hidden, itemCount, dispatch }) => {
  const basketRef = useRef(null);
  useEffect(() => {
    basketRef.current.style.fill = "green";
    setTimeout(() => {
      basketRef.current.style.fill = "#ffffff";
    }, 1000);
  }, [itemCount]);
  return (
    <div className="cartIcon">
      <Basket
        className="cartIcon__basket"
        ref={basketRef}
        onClick={() => dispatch(toggleDropdown())}
      />
      <span className="cartIcon__number">{itemCount}</span>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  hidden: selectToggleCartHidden,
  itemCount: selectCountItems,
});
export default connect(mapStateToProps)(CartIcon);

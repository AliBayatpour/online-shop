import React from "react";
import { ReactComponent as Basket } from "../../assets/bag.svg";
import "./cart-icon.styles.scss";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectToggleCartHidden } from "../../redux/cart/cart.selectors";
import { selectCountItems } from "../../redux/cart/cart.selectors";
import { toggleDropdown } from "../../redux/cart/cart.actions";

const CartIcon = ({ hidden, itemCount, dispatch }) => {
  return (
    <div className="cartIcon">
      <Basket
        className="cartIcon__basket"
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

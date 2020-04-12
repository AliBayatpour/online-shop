import React from "react";
import { ReactComponent as Basket } from "../../assets/bag.svg";
import "./cart-icon.styles.scss";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectToggleCartHidden } from "../../redux/cart/cart.selectors";
import { toggleDropdown } from "../../redux/cart/cart.actions";

const CartIcon = ({ hidden, toggleDropdown }) => {
  return (
    <div className="cartIcon">
      <Basket className="cartIcon__basket" onClick={toggleDropdown} />
      <span className="cartIcon__number">0</span>
      {hidden ? <CartDropdown /> : null}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleDropdown: () => dispatch(toggleDropdown()),
});
const mapStateToProps = createStructuredSelector({
  hidden: selectToggleCartHidden,
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);

import React from "react";
import "./cart-dropdown.styles.scss";
import CustomButon from "../custom-button/custom-button.component";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import CartItem from "../cart-item/cart-item.componet";

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cartDropDown">
      {cartItems.map(({id, ...otherProps}) => (
        <CartItem key={id} {...otherProps}/>
      ))}
      <CustomButon style={{ marginTop: "auto" }}>GO TO CHECKOUT</CustomButon>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});
export default connect(mapStateToProps)(CartDropdown);

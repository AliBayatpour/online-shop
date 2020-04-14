import React from "react";
import classes from "./cart-dropdown.module.scss";
import CustomButon from "../custom-button/custom-button.component";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleDropdown } from "../../redux/cart/cart.actions";
import { withRouter } from "react-router-dom";

import CartItem from "../cart-item/cart-item.componet";

const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <div className={classes.cartDropdown}>
      {cartItems.length ? (
        cartItems.map(({ id, ...otherProps }) => (
          <CartItem key={id} {...otherProps} />
        ))
      ) : (
        <span>Your cart is empty</span>
      )}

      {cartItems.length ? (
        <CustomButon
          onClick={() => {
            history.push("/checkout");
            dispatch(toggleDropdown());
          }}
          style={{ marginTop: "auto" }}
        >
          GO TO CHECKOUT
        </CustomButon>
      ) : null}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});
export default withRouter(connect(mapStateToProps)(CartDropdown));

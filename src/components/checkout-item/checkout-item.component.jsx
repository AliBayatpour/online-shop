import React from "react";
import "./checkout-item.styles.scss";

import { connect } from "react-redux";
import { clearItem, reduceItem, addItem } from "../../redux/cart/cart.actions";

const CheckoutItem = ({ cartItem, clearItem, addItem, reduceItem }) => {
  const { imageUrl, name, quantity, price } = cartItem;
  return (
    <div className="checkoutItem">
      <div
        className="checkoutItem__block checkoutItem__block--image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="checkoutItem__block checkoutItem__block--name">{name}</div>
      <div className="checkoutItem__block checkoutItem__block--quantity">
        <span
          className="checkoutItem__arrow"
          onClick={() => reduceItem(cartItem)}
        >
          &#10094;
        </span>
        {quantity}
        <span className="checkoutItem__arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </span>
      </div>
      <div className="checkoutItem__block">${price}</div>
      <div className="checkoutItem__block checkoutItem__block--remove">
        <span onClick={() => clearItem(cartItem)}>&#10006;</span>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItem(item)),
  reduceItem: (item) => dispatch(reduceItem(item)),
  addItem: (item) => dispatch(addItem(item)),
});
export default connect(null, mapDispatchToProps)(CheckoutItem);

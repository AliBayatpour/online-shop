import React from "react";
import "./checkout-item.styles.scss";

const CheckoutItem = ({ imageUrl, name, quantity, price }) => {
  return (
    <div className="checkoutItem">
      <div
        className="checkoutItem__block checkoutItem__block--image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="checkoutItem__block">{name}</div>
      <div className="checkoutItem__block">{quantity}</div>
      <div className="checkoutItem__block">{price}</div>
      <div className="checkoutItem__block checkoutItem__block--remove">
        <span>&#10006;</span>
      </div>
    </div>
  );
};
export default CheckoutItem;

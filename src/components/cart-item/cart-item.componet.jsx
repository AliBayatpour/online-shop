import React from "react";
import "./cart-item.syles.scss";

const CartItem = ({ imageUrl, name, quantity, price }) => {
  return (
    <div className="cartItem">
      <div
        className="cartItem__image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="cartItem__detail">
        <div className="cartItem__name">{name}</div>
        <div className="cartItem__quantityAndPrice">{`${quantity} x ${price}`}</div>
      </div>
    </div>
  );
};
export default CartItem;

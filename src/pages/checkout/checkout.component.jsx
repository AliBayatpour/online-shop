import React from "react";
import "./checkout.styles.scss";
import {
  selectCartItems,
  selectTotalPrice,
} from "../../redux/cart/cart.selectors";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const Checkout = ({ cartItems, totalPrice }) => {
  return (
    <div className="checkout">
      <div className="checkout__header">
        <div className="checkout__block checkout__block--product">
          <span>Product</span>
        </div>
        <div className="checkout__block checkout__block--description">
          <span>Description</span>
        </div>
        <div className="checkout__block checkout__block--quantity">
          <span>Quantity</span>
        </div>
        <div className="checkout__block checkout__block--price">
          <span>Price</span>
        </div>
        <div className="checkout__block checkout__block--remove">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="checkout__totalPrice">
        <span>Total: ${totalPrice}</span>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectTotalPrice,
});
export default connect(mapStateToProps)(Checkout);

import React from "react";
import "./cart-dropdown.styles.scss";
import CustomButon from "../custom-button/custom-button.component";

const CartDropdown = () => {
  return (
    <div className="cartDropDown">
      <CustomButon style={{ marginTop: 'auto' }}>GO TO CHECKOUT</CustomButon>
    </div>
  );
};

export default CartDropdown;

import React from "react";
import "./collectionItem.styles.scss";
import CustomButon from "../custom-button/custom-button.component";

import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
import { cartVisible } from "../../redux/cart/cart.actions";

const CollectionItem = ({ item, addItem, cartVisible }) => {
  const { name, imageUrl, price } = item;
  return (
    <div className="collectionItem">
      <div
        className="collectionItem__image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <CustomButon
          onClick={() => {
            addItem(item);
            cartVisible();
          }}
        >
          ADD TO CART
        </CustomButon>
      </div>
      <div className="collectionItem__info">
        <span className="collectionItem__title">{name}</span>
        <span className="collectionItem__price">${price.toFixed(2)}</span>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  cartVisible: () => dispatch(cartVisible()),
});
export default connect(null, mapDispatchToProps)(CollectionItem);

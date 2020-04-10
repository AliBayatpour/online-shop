import React from "react";
import "./collectionItem.styles.scss";

const CollectionItem = ({ name, imageUrl, price }) => {
  return (
    <div className="collectionItem">
      <div
        className="collectionItem__image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="collectionItem__info">
        <span className="collectionItem__title">{name}</span>
        <span className="collectionItem__price">{price}</span>
      </div>
    </div>
  );
};

export default CollectionItem;

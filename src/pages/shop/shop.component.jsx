import React from "react";
import "./shop.styles.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectShopCollection } from "../../redux/shop/shop.selectors";
import PreviewCollection from "../../components/preview-collection/preview-collection.component";

const ShopPage = ({ items }) => {
  return (
    <div className="shop">
      {items.map(({ id, ...otherProps }) => (
        <PreviewCollection key={id} {...otherProps} />
      ))}
    </div>
  );
};
const mapDispatchToProps = createStructuredSelector({
  items: selectShopCollection,
});
export default connect(mapDispatchToProps)(ShopPage);

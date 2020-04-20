import React from "react";
import "./collection.styles.scss";

import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";
import CollectionItem from "../../components/collection-item/collectionItem.component";

const CollectionPage = ({ collection }) => {
  const { items, title } = collection;

  return (
    <div className="collection">
      <h2 className="collection__header">{title}</h2>
      {items.map((item) => (
        <CollectionItem key={item.id} item={item} />
      ))}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});
export default connect(mapStateToProps)(CollectionPage);

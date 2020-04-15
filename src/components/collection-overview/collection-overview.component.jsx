import React from "react";
import "./collection-overview.styles.scss";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";
import PreviewCollection from "../../components/preview-collection/preview-collection.component";

const CollectionOverview = ({items}) => {
  console.log(items);
  return (
    <div className="collectionOverview">
      {items.map(({ id, ...otherProps }) => (
        <PreviewCollection key={id} {...otherProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  items: selectCollectionsForPreview,
});
export default connect(mapStateToProps)(CollectionOverview);

import React from "react";
import "./collections-overview.styles.scss";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";
import PreviewCollection from "../preview-collection/preview-collection.component";

const CollectionsOverview = ({ items }) => {
  return (
    <div className="collectionsOverview">
      {items.map(({ id, ...otherProps }) => (
        <PreviewCollection key={id} {...otherProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  items: selectCollectionsForPreview,
});
export default connect(mapStateToProps)(CollectionsOverview);

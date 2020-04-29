import React from "react";
import "./preview-collection.styles.scss";
import CollectionItem from "../collection-item/collectionItem.component";
import { withRouter } from "react-router-dom";

const PreviewCollection = ({ title, items, routeName, history, match }) => {
  return (
    <div className="preview">
      <h2
        className="preview__header"
        onClick={() => history.push(`${match.path}/${routeName}`)}
      >
        {title}
      </h2>
      {items
        .filter((_, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  );
};

export default withRouter(PreviewCollection);

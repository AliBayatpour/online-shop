import React from "react";
import "./preview-collection.styles.scss";
import CollectionItem from "../collection-item/collectionItem.component";

const PreviewCollection = ({ title, items }) => {
  return (
    <div className="preview">
      <h2 className="preview__header">{title}</h2>
      {items
        .filter((_, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  );
};

export default PreviewCollection;

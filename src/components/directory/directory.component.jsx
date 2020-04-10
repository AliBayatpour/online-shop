import React from "react";
import "./directory.styles.scss";

import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectDirectoryItem } from "../../redux/directory/directory.selectors";
import MenuItem from "../menu-item/menu-item.component";

const Directory = ({ selector }) => {
  return (
    <div className="directory">
      {selector.map(({ id, ...otherProps }) => (
        <MenuItem key={id} {...otherProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  selector: selectDirectoryItem,
});
export default connect(mapStateToProps)(Directory);

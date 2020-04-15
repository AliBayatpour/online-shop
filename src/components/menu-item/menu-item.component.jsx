import React from "react";
import "./menu-item.styles.scss";
import CustomButon from "../custom-button/custom-button.component";

import { withRouter } from "react-router-dom";

const MenuItem = ({ imageUrl, title, size, linkUrl, history }) => {
  return (
    <div
      className={`menuItem menuItem--${size}`}
      style={{ backgroundImage: `url(${imageUrl})` }}
      onClick={() => history.push(`${linkUrl}`)}
    >
      <div className="menuItem__infoWrapper">
        <div className="menuItem__title">{title.toUpperCase()}</div>
        <CustomButon>SHOP NOW</CustomButon>
      </div>
    </div>
  );
};
export default withRouter(MenuItem);

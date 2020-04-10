import React from "react";
import "./menu-item.styles.scss";
import CustomButon from "../custom-button/custom-button.component";

const MenuItem = ({ imageUrl, title, size }) => {
  return (
    <div
      className={`menuItem menuItem--${size}`}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="menuItem__infoWrapper">
        <div className="menuItem__title">{title.toUpperCase()}</div>
        <CustomButon>SHOP NOW</CustomButon>
      </div>
    </div>
  );
};
export default MenuItem;

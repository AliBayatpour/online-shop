import React from "react";
import "./menu-item.styles.scss";

const MenuItem = ({ imageUrl, title, size }) => {
  return (
    <div
      className={`menuItem menuItem--${size}`}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="menuItem__infoWrapper">
        <div className="menuItem__title">{title.toUpperCase()}</div>
        <div className="menuItem__shopNow">SHOP NOW</div>
      </div>
    </div>
  );
};
export default MenuItem;

import React from "react";
import "./custom-button.styles.scss";

const CustomButon = ({ children, isGoogleSignIn, ...otherProps }) => {
  return (
    <button className="customButton" {...otherProps}>
      {children}
    </button>
  );
};
export default CustomButon;

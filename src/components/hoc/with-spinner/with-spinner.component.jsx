import React from "react";
import "./with-spinner.styles.scss";

const WithSpinner = (WrappedComponent) => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <div className="loadingio-spinner-eclipse-fiiul18oto9">
        <div className="ldio-b919nezkndb">
          <div></div>
        </div>
      </div>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };
  return Spinner;
};
export default WithSpinner;

import React from "react";
import "./homePage.styles.scss";
import Banner from "../../components/banner/banner.component";
import Directory from "../../components/directory/directory.component";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <Directory />
    </div>
  );
};

export default HomePage;

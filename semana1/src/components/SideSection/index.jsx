import React from "react";
import SideBar from "./SideBar";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

const SideSection = () => {
  return (
    <SideBar>
      <Header />
      <Main />
      <Footer />
    </SideBar>
  );
};

export default SideSection;

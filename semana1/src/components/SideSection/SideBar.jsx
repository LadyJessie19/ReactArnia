import React from "react";

const SideBar = ({ children }) => {
  return (
    <section>
      <hr />
      {children}
      <hr />
    </section>
  );
};

export default SideBar;

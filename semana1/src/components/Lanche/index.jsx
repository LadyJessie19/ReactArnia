import React from "react";

const Lanche = (props) => {
  const { children } = props;
  return (
    <>
      <p>Pão de cima</p>
      {children}
      <p>Pão de baixo</p>
    </>
  );
};

export default Lanche;

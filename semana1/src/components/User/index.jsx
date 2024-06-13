import React, { useState } from "react";

const User = () => {
  const [name, setName] = useState("Jéssica");
  return (
    <>
      <h3>Usuário</h3>
      <p>Nome: {name}</p>
      <button onClick={() => setName("Jessie")}>Alterar nome</button>
    </>
  );
};

export default User;

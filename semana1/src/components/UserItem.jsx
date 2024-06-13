import React from "react";

const UserItem = ({ name, age, occupation, sum, hello }) => {
  return (
    <li>
      <strong>Nome: </strong> {name}
      <strong> Idade: </strong> {age}
      <strong> Profissão: </strong> {occupation}
      <button onClick={hello}>Hello</button>
      <button onClick={() => sum(23, 4)}>Imprimir</button>
    </li>
  );
};

export default UserItem;

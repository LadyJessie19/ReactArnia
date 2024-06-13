import React from "react";
import UserItem from "./UserItem";
import { users } from "../data/users";

const UsersDisplay = () => {
  const sum = (number1, number2) => {
    return console.log(number1 + number2);
  };
  const hello = () => {
    return console.log("hello");
  };
  return (
    <>
      <h2>Usuários</h2>
      <ul id="users">
        {users.map((user) => (
          <UserItem
            name={user.name}
            age={user.age}
            occupation={user.occupation}
            sum={sum}
            hello={hello}
          />
        ))}
      </ul>
    </>
  );
};

export default UsersDisplay;

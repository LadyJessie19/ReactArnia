import { useEffect, useState } from "react";

interface IState {
  name: string;
  email: string;
}

const UserName = () => {
  const [dados, setDados] = useState<IState>({} as IState);
  const [count, setCount] = useState(1);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${count}`
      );
      const data = await response.json();
      console.log(data);
      setDados(data);
    };

    fetchUser();
  }, [count]);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const params = {};
    for (let [key, value] of searchParams.entries()) {
      params[key] = value;
    }
    console.log(params);
  }, []);

  return (
    <div>
      <h2>{dados?.email}</h2>
      <h3>{dados?.name}</h3>
      <button onClick={() => setCount(count + 1)}>Trocar</button>
    </div>
  );
};

export default UserName;

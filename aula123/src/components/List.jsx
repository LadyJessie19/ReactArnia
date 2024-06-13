import react from "react";

const List = () => {
  const addItem = () => {
    const newItem = prompt("Qual item deseja adicionar?");
    if (newItem) {
      const ul = document.getElementById("list");
      const li = document.createElement("li");
      li.textContent = newItem;
      ul.appendChild(li);
    }
  };
  return (
    <>
      <h2>Minha lista de compras</h2>
      <ul id="list">
        <li>Arroz</li>
        <li>Feijão</li>
        <li>Batata</li>
      </ul>
      <button onClick={addItem}>Adicione um item</button>
    </>
  );
};

export default List;

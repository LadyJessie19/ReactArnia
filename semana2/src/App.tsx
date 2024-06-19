import "./App.css";
import Header from "./components/Header";
import PageTitle from "./components/PageTitle";

function App() {
  return (
    <>
      <h1>Aula 8 de React</h1>
      <Header />
      <PageTitle title="Produtos" show={true} />
      <PageTitle title="Carrinho" show={true} />
      <PageTitle title="Checkout" show={false} />
    </>
  );
}

export default App;

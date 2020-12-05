import React from 'react';
import './App.css';

const App = () => {
  const [carrinho, setCarrinho] = React.useState(0);
  const [notificacao, setNotificacao] = React.useState(null);

  function handleClick() {
    setCarrinho(carrinho + 1);

    setNotificacao('Item adicionado ao carrinho');
    setTimeout(() => {
      setNotificacao(null);
    }, 1500);
  }

  return (
    <section>
      <p>{notificacao}</p>
      <button onClick={handleClick}>Adicionar Carrinho</button>
      <p>Total de itens: {carrinho}</p>
    </section>
  );
};

export default App;

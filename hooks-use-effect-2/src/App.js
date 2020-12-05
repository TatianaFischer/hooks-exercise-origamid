import React from 'react';
import './App.css';

const App = () => {
  const [carrinho, setCarrinho] = React.useState(0);
  const [notificacao, setNotificacao] = React.useState(null);

  //para que a notificação seja apagada depois que adiciona um novo item no carrinho, usaremos useRef. Ou seja, antes de colocar uma mensagem nova dizendo que o item foi adicionado, a notificação anterior será apagada.
  //achei bem difícil de entender.

  const timeoutRef = React.useRef();

  function handleClick() {
    setCarrinho(carrinho + 1);
    setNotificacao('Item adicionado ao carrinho');

    clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
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

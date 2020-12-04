import React from 'react';
import './App.css';
import Produto from './components/Produto';

const App = () => {
  const [produto, setProduto] = React.useState(null);

  React.useEffect(() => {
    if (produto !== null) window.localStorage.setItem('produto', produto);
  }, [produto]);

  React.useEffect(() => {
    const produtoArmazenado = window.localStorage.getItem('produto');
    if (produtoArmazenado !== null) setProduto(produtoArmazenado);
  }, []);

  function handleClick({ target }) {
    setProduto(target.innerText);
  }

  return (
    <section>
      <h1>Preferência: {produto}</h1>
      <button onClick={handleClick}>notebook</button>
      <button onClick={handleClick}>smartphone</button>
      <Produto produto={produto} />
    </section>
  );
};

export default App;

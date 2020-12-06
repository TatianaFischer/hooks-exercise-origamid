import React from 'react';
import './App.css';
import useLocalStorage from './hooks/useLocalStorage';

const App = () => {
  const [product, setProduct] = useLocalStorage('produto', '');

  function handleClick({ target }) {
    setProduct(target.innerText);
  }

  return (
    <section>
      <p>Qual você prefere?</p>
      <button onClick={handleClick}>Notebook</button>
      <button onClick={handleClick}>Smartphone</button>

      <p>Você escolheu: {product}</p>
    </section>
  );
};

export default App;

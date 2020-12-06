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
      <p>Produto preferido:</p>
      <button onClick={handleClick}>Notebook</button>
      <button onClick={handleClick}>Smartphone</button>
    </section>
  );
};

export default App;

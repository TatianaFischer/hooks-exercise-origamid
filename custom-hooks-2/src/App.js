import React from 'react';
import './App.css';
import useLocalStorage from './hooks/useLocalStorage';
import useFetch from './hooks/useFetch';

const App = () => {
  const [product, setProduct] = useLocalStorage('produto', '');

  const { request, data } = useFetch();

  function handleClick({ target }) {
    setProduct(target.innerText);
  }

  //Fazer o request assim que o componente carregar:
  React.useEffect(() => {
    request('https://ranekapi.origamid.dev/json/api/produto/notebook');
  }, []);

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

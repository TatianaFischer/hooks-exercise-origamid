import React from 'react';
import './App.css';
import useLocalStorage from './hooks/useLocalStorage';
import useFetch from './hooks/useFetch';

const App = () => {
  const [product, setProduct] = useLocalStorage('produto', '');

  const { request, data, loading, error } = useFetch();

  //Fazer o request assim que o componente carregar:
  React.useEffect(() => {
    request('https://ranekapi.origamid.dev/json/api/produto/');
    //para visualizar o "carregando..." e o erro colocar um url inexistente aqui!
  }, []);

  console.log(data);

  function handleClick({ target }) {
    setProduct(target.innerText);
  }

  //fazer a verificação do erro:
  if (error) return <p>{error}</p>;

  //fazer verificação do loading:
  if (loading) return <p>Carregando...</p>;

  //fazer a verificação se data for null, retornar null:

  if (data)
    return (
      <section>
        <p>Qual você prefere?</p>
        <button onClick={handleClick}>Notebook</button>
        <button onClick={handleClick}>Smartphone</button>

        <p>Você escolheu: {product}</p>

        {data.map((produto) => (
          <section key={produto.id}>
            <h1>{produto.nome}</h1>
          </section>
        ))}
      </section>
    );
  else return null;
};

export default App;

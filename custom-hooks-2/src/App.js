import React from 'react';
import './App.css';
import useLocalStorage from './hooks/useLocalStorage';
import useFetch from './hooks/useFetch';

const App = () => {
  const [product, setProduct] = useLocalStorage('produto', '');

  const { request, data, loading, error } = useFetch();

  //Fazer o request assim que o componente carregar:
  React.useEffect(() => {
    async function fetchData() {
      const { response, json } = await request(
        'https://ranekapi.origamid.dev/json/api/produto/',
      );
      console.log(response);
      //dessa forma, colocando o response o json sendo retornado lá no useFetch, traz possibilidade de usar o reponso e o json em muito lugares, como por exemplo nesse console.
    }
    //para visualizar o "carregando..." e o erro colocar um url inexistente aqui em cima!
    fetchData();
  }, [request]);
  //em cima: para não aparecer o erro embaixo dos colchetes o request tem que ser passado como dependência [request], porém assim vai entrar em um loop infinito pois vai ficar atualiazndo sempre que o request for atualizado. pata não acontecer isso a gente pode usar o useCallback lá no useFetch, para o request ser criado uma única vez.
  // const request = React.useCallback(async (url, options)...

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

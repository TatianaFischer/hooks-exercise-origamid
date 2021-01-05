import React from 'react';

const useFetch = () => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(null);

  async function request(url, options) {
    //para pode acessar o que tem no response e no json:
    let response;
    let json;
    //para lidar com o erro se usa o try catch:

    try {
      //sempre que carregar a página desaparecer a mensagem de erro:
      setError(null);
      //momento em que vai aparece o carregando:
      setLoading(true);

      //tratamento dos dados:
      response = await fetch(url, options); //pega a resposta da requisição
      json = await response.json(); //transforma em json os dados do request
      setData(json); //altera o estado data com os dados em json

      //momento em que vai desaparecer o carregando:
      setLoading(false);
    } catch (error) {
      setError('Falha ao carregar a página!');
    } finally {
      //o código dentro do finally sempre vai ocorrer, independete se ocorrer erro ou não
      setLoading(false);

      //colocar o response e o json aqui para poder se acessado no App, se nao colocar aqui, eles poderão ser acessado somente pelo data.
      return { response, json };
    }
  }

  return { data, error, loading, request };
  //não foi retornado como array pq se não sempre tem que desestruturar  na ordem correta
  //retornando como objeto eu não precisa, da pra puxar somente o que quiser usar.
};

export default useFetch;

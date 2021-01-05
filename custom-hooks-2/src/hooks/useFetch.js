import React from 'react';

const useFetch = () => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(null);

  async function request(url, options) {
    //momento em que vai aparece o carregando:
    setLoading(true);

    //tratamento dos dados:
    const response = await fetch(url, options); //pega a resposta da requisição
    const json = await response.json(); //transforma em json os dados do request
    setData(json); //altera o estado data com os dados em json

    //momento em que vai desaparecer o carregando:
    setLoading(false);
  }

  return { data, error, loading, request };
  //não foi retornado como array pq se não sempre tem que desestruturar  na ordem correta
  //retornando como objeto eu não precisa, da pra puxar somente o que quiser usar.
};

export default useFetch;

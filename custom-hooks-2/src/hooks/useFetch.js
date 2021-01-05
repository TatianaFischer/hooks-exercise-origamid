import React from 'react';

const useFetch = () => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(null);

  const request = React.useCallback(async (url, options) => {}, []);

  return { data, loading, error, request };
  //não foi retornado como array pq se não sempre tem que desestruturar  na ordem correta
  //retornando como objeto eu não precisa, da pra puxar somente o que quiser usar.
};

export default useFetch;

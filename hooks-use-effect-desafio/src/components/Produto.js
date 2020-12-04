import React from 'react';

const Produto = ({ produto }) => {
  const [dados, setDados] = React.useState(null);

  //para o fetch ja for feito desde o inicio, vai ser feito com useEffect:

  React.useEffect(() => {
    if (produto !== null)
      fetch(`https://ranekapi.origamid.dev/json/api/produto/${produto}`)
        .then((response) => response.json())
        .then((json) => setDados(json));
  });

  if (dados === null) return null;
  return (
    <section>
      <h1>{dados.nome}</h1>
      <p>{dados.preco}</p>
    </section>
  );
};

export default Produto;

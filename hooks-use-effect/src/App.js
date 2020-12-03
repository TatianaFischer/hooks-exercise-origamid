import React from 'react';
import './App.css';

const App = () => {
  const [contar, setContar] = React.useState(0);
  const [dados, setDados] = React.useState(null);

  //useEffect com array de dependências vazio:
  React.useEffect(() => {
    console.log('executou');
  }, []);

  //useEffect com array de dependência preenchido:
  React.useEffect(() => {
    document.title = ' Total ' + contar;
  }, [contar]);

  //useEffect que recebe dados de uma API usando fetch
  //e transformando em JSON com o .then:
  // e mandado esses dados JSON para o estado com setDados:

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto/notebook')
      .then((response) => response.json())
      .then((json) => setDados(json));
  }, []);

  return (
    <section>
      <button onClick={() => setContar(contar + 1)}>{contar}</button>
    </section>
  );
};

export default App;

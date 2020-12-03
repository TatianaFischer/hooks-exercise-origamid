import React from 'react';
import './App.css';

const App = () => {
  const [contar, setContar] = React.useState(0);

  //useEffect com array de dependências vazio:
  React.useEffect(() => {
    console.log('executou');
  }, []);

  //useEffect com array de dependência preenchido:
  React.useEffect(() => {
    document.title = ' Total ' + contar;
  }, [contar]);

  return (
    <section>
      <button onClick={() => setContar(contar + 1)}>{contar}</button>
    </section>
  );
};

export default App;

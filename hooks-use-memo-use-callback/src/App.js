import React from 'react';
import './App.css';

const App = () => {
  const [contar, setContar] = React.useState(0);
  const valor = React.useMemo(() => {
    const localItem = window.localStorage.getItem('produto');
    console.log('Aconteceu o memo');
    return localItem;
  }, []);
  console.log(valor);

  return <button onClick={() => setContar(contar + 1)}>{contar}</button>;
};

export default App;

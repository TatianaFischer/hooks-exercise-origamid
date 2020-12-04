import React from 'react';
import './App.css';

const App = () => {
  const [produto, setProduto] = React.useState(null);

  React.useEffect(() => {
    if (produto !== null) window.localStorage.setItem('produto', produto);
  }, [produto]);

  function handleClick({ target }) {
    setProduto(target.innerText);
  }

  return (
    <section>
      <h1>Preferência: {produto}</h1>
      <button onClick={handleClick}>notebook</button>
      <button onClick={handleClick}>smartphone</button>
    </section>
  );
};

export default App;

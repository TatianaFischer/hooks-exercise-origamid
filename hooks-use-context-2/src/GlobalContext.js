import React from 'react';

export const GlobalContext = React.createContext();
//chamar na parte mais global do aplicativo;

export const GlobalStorage = ({ children }) => {
  const [dados, setDados] = React.useState(null);

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto/')
      .then((response) => response.json())
      .then((json) => setDados(json));
  }, []);

  function limparDados() {
    setDados(null);
  }

  return (
    <GlobalContext.Provider value={{ dados, limparDados }}>
      {children}
    </GlobalContext.Provider>
  );
};
//children é tudo que está dentro da div GlobalStorage no App.js

import React from 'react';

export const GlobalContext = React.createContext();
//chamar na parte mais global do aplicativo;

export const GlobalStorage = ({ children }) => {
  const [contar, setContar] = React.useState(0);

  function adicionarDois() {
    setContar((contar) => contar + 2);
  }
  return (
    <GlobalContext.Provider
      value={{ contar: contar, setContar: setContar, adicionarDois }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
//children é tudo que está dentro da div GlobalStorage no App.js

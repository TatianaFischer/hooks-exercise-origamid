import React from 'react';

export const GlobalContext = React.createContext();
//chamar na parte mais global do aplicativo;

export const GlobalStorage = ({ children }) => {
  const [contar, setContar] = React.useState(0);
  return (
    <GlobalContext.Provider value={{ contar: contar, setContar: setContar }}>
      {children}
    </GlobalContext.Provider>
  );
};
//children é tudo que está dentro da div GlobalStorage no App.js

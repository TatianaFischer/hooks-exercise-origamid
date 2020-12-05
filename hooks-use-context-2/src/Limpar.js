import React from 'react';
import { GlobalContext } from './GlobalContext';

const Limpar = () => {
  //forma não desestruturada:
  // const dados = React.useContext(GlobalContext);
  // console.log(dados.limparDados);

  //forma desestruturada:

  const { limparDados } = React.useContext(GlobalContext);
  console.log(limparDados);
  return (
    <div>
      <button onClick={limparDados}>Limpar</button>
    </div>
  );
};

export default Limpar;

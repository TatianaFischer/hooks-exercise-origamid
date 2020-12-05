//EXEMPLO 1:

// import React from 'react';
// import './App.css';

// const App = () => {
//   const [contar, setContar] = React.useState(0);
//   const valor = React.useMemo(() => {
//     const localItem = window.localStorage.getItem('produto');
//     console.log('Aconteceu o memo');
//     return localItem;
//   }, []);
//   console.log(valor);

//   return <button onClick={() => setContar(contar + 1)}>{contar}</button>;
// };

// export default App;

//EXEMPLO 2:

import React from 'react';
import './App.css';

function operacaoLenta() {
  let c;

  for (let i = 0; i < 10000000; i++) {
    c = i + i / 10;
  }

  return c;
}

const App = () => {
  const [contar, setContar] = React.useState(0);

  const t1 = performance.now();
  const valor = React.useMemo(() => operacaoLenta(), []);
  // console.log(valor);
  console.log(performance.now() - t1);

  return <button onClick={() => setContar(contar + 1)}>{contar}</button>;
};

export default App;

//No exemplo 2 temos uma operação lenta que precisa ser executada apenas 1 vez, por isso o ideal é colocá-la em uma função useMemo para que ela nao seja executada todas a vez que a página é atualizada, ficando na memória.

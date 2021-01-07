# React Completo Origamid - Módulo React Hooks - <i>custom hooks 2 - useFetch e regras gerais</i>
## Descrição:
<p>o useFetch é usado mais ou menos da mesma forma sempre.</p> 
<p>Ele será composto por: </p>
 <p>um estado para todas as informações (ex. data), um estado para os erros (ex. error), um estado para o que for carregar (ex.: loading) e uma função para pode fazer o request </p>


```
const useLocalStorage = (key, inicial) => {
  const [state, setState] = React.useState(() => {
    const local = window.localStorage.getItem(key);
    return local ? local : inicial;
  });

  React.useEffect(() => {
    window.localStorage.setItem(key, state);
  }, [key, state]);

  return [state, setState];
};
```
## Ferramentas e Aprendizados:
<li>React.JS </li>
<li>Custom hooks - useFetch </li>


## Regras  HOOKS:
<ol>
<li>Não utilize os hooks dentro de funções, loops ou condicionais. </li>
<p>Não utilizar dentro de condicionais, dentro de funções e de um for</p>

```
const App = () => {
  // Correto
  React.useEffect(() => {
    document.title = 'Título novo';
  }, []);

  let condicao = true;
  if (condicao) {
    // Errado
    React.useEffect(() => {
      document.title = 'Título novo';
    }, []);
  }

  function mudarTitulo() {
    // Errado
    React.useEffect(() => {
      document.title = 'Título novo';
    }, []);
  }

  for (let i = 0; i < 10; i++) {
    // Errado
    React.useEffect(() => {
      document.title = 'Título novo';
    }, []);
  }

  return <div></div>;
};
```

<li>Utilize hooks apenas em componentes e em custom hooks.. </li>


```
import React from 'react';

// Errado, mas pode se transformar em um custom hook se começar com useNumeroAleatorio
function numeroAleatorio() {
  const numero = Math.random();
  React.useEffect(() => {
    document.title = numero;
  }, []);
  return numero;
}

const App = () => {
  return <div></div>;
};

export default App;
```
</ol>







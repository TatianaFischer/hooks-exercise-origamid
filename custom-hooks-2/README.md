# React Completo Origamid - Módulo React Hooks - <i>custom hooks 2 - useFetch</i>
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




## Imagem do app:

<img src="./img.png"/>






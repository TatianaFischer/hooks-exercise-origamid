# React Completo Origamid - Módulo React Hooks - <i>useEffect</i>
## Descrição:



## Ferramentas e Aprendizados:
<li>React.JS </li>
<li>useEffect</li>
<li></li>
<li></li>

## Explicações importantes:
````
 React.useEffect(() => {
    console.log('executou');
  }, []);

````
<p> O array vazio (array de dependência ) colocado como segundo argumento 
dentro do useEffect() significa que o que está dentro dessa função 
só vai ser executado quando alterado esse segundo argumento. 
Contudo, nesse caso, o argumento está vazio, ou seja, ele nunca será modificado, 
por isso o único momento que vai carregar e executar a função do useEffect 
é na primeira renderização da aplicação </p>
<p> Se dentro do array tivesse alguma função/estado de dependência, sempre que
esse estado fosse alterado, a função do useEffect() iria ser executada mais uma vez
</p>

<p> Todo componente possui um ciclo de vida. Os principais momentos acontecem quando o componente é renderizado, atualizado ou destruído. Com o React.useEffect() podemos definir um callback que irá ser executado durante certos momentos do ciclo de vida do componente
</p>


## Dicas Professor

<li> Dica 1: </li>
<p>O useEffect será especialmente utilizado quando precisamos definir um efeito que deve ocorrer uma vez apenas, como o fetch de dados no servidor por exemplo. <p>



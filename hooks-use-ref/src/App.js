import React from 'react';
import './App.css';

const App = () => {
  const [comentarios, setComentarios] = React.useState([]);
  const [input, setInput] = React.useState('');
  const inputElement = React.useRef();

  const handleClick = () => {
    setComentarios([...comentarios, input]);
    setInput('');
    //para dar foco ao input e não ao botão mesmo depois de clicar em enviar:
    inputElement.current.focus();
  };
  return (
    <section>
      <ul>
        {comentarios.map((comentario) => (
          <li key={comentario}>{comentario}</li>
        ))}
      </ul>
      <input
        type="text"
        ref={inputElement}
        value={input}
        onChange={({ target }) => setInput(target.value)}
      />
      <button onClick={handleClick}>Enviar</button>
    </section>
  );
};

export default App;

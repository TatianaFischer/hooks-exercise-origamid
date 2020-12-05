import React from 'react';
import './App.css';

const App = () => {
  const [comentarios, setComentarios] = React.useState([]);

  const [input, setInput] = React.useState('');

  const handleClick = () => {
    setComentarios([...comentarios, input]);
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
        value={input}
        onChange={({ target }) => setInput(target.value)}
      />
      <button onClick={handleClick}>Enviar</button>
    </section>
  );
};

export default App;

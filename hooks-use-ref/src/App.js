import React from 'react';
import './App.css';

const App = () => {
  const [comentarios, setComentarios] = React.useState(['teste1', 'teste2']);

  const [input, setIput] = React.useState('');

  return (
    <section>
      <ul>
        {comentarios.map((comentario) => (
          <li key={comentario}>{comentario}</li>
        ))}

        <input
          type="text"
          value={input}
          onChange={({ target }) => setIput(target.value)}
        />
      </ul>
    </section>
  );
};

export default App;

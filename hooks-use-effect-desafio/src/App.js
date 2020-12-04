import React from 'react';
import './App.css';

const App = () => {
  const [produto, setProduto] = React.useState(null);
  return (
    <section>
      <button>notebook</button>
      <button>smartphone</button>
    </section>
  );
};

export default App;

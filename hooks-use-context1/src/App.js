import React from 'react';
import './App.css';
import UserContext from './UserContext';

const App = () => {
  return (
    <UserContext.Provider>
      <section>teste</section>;
    </UserContext.Provider>
  );
};

export default App;

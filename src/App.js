import React from 'react';
import './App.css';
import FormEmployee from './Example/FormEmployee.jsx';
import FormFilms from './Exercise/FormFilms.js';
import LifeCycle from './React8/LifeCycle';

function App() {
  return (
    <div className="App">
      {/* <FormEmployee/> */}
      <FormFilms/>
      <hr />
      <LifeCycle/>
    </div>
  );
}

export default App;

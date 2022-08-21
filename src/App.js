import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  return (
    <>
    <header className="top">Trabalhando com Conceitos do Redux</header>
      <div className="View-content">
       <h3>O que você vai aprender?</h3>
        <ul className="text">
          <li>O que é Redux e por que você pode querer usá-lo?</li>
          <li>Principais termos e conceitos do Redux</li>
          <li>Como os dados fluem por meio de um aplicativo Redux</li>
        </ul>
        <Counter />          
          
      </div>
    </>
  );
}
export default App;

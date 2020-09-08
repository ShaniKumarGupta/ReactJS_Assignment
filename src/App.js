import React from 'react';
import './App.css';
import Toggle from './components/Toggle';
import TodoList from './todocomponent/TodoList';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Toggle></Toggle>
        <TodoList></TodoList>
      </header>
    </div>
  );
}

export default App;

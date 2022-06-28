import React from 'react';
import TodoInput from './features/todoInput/TodoInput';
import Filters from './features/filters/filters';
import TodoItem from './features/todoItem/TodoItem';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

    
function App() {
  return (
    <div className="App">
      <h1 className="header">todos</h1>
      <TodoInput/>
      <TodoItem/>
      <Filters/>
    </div>
  );
}


export default App;

import { useEffect, useState } from 'react';
import './App.css';

import TrafficLight from './components/TrafficLight';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className='App'>
      <TrafficLight />
      <TodoList />
    </div>
  );
}

export default App;

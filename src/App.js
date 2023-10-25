import { useEffect, useState } from 'react';
import './App.css';

import TrafficLight from './components/TrafficLight';
import TodoList from './components/TodoList';
import Login from './components/Login';
import axios from 'axios';

function App() {
  const [user, setUser] = useState();

  const handleLogin = async (formData) => {
    try {
      const res = await axios.post('http://localhost:4000/api/v1/auth/login', formData)
      console.log(res);
      alert(res.data.message);
      setUser(res.data.body);
    } catch (error) {
      console.log(error);
      alert(error.response.data.message)
    }
  };

  return (
    <div className='App'>
      {user && (
        <div>
          <TrafficLight />
          <TodoList />
        </div>
      )}
      {!user && (<Login handleLogin={handleLogin}/>)}
    </div>
  );
}

export default App;

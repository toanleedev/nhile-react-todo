import { useEffect, useState } from 'react';
import './App.css';

import TrafficLight from './components/TrafficLight';
import TodoList from './components/TodoList';
import Login from './components/Login';
import axios from 'axios';

function App() {
  const [user, setUser] = useState();
  const [resError, setResError] = useState('');

  const handleLogin = async (formData) => {
    try {
      const res = await axios.post(
        'http://localhost:4000/api/v1/auth/login',
        formData
      );
      console.log(res);
      alert(res.data.message);
      setUser(res.data.body);
      setResError('');
    } catch (error) {
      console.log(error);
      if (error.response) {
        setResError(error.response.data.message);
      } else {
        setResError(error.message);
      }
    }
  };

  return (
    <div className='App'>
      {user && (
        <div>
          <p className='text-gray-700 mb-3'>
            Hello, {user.email}{' '}
            <span
              className='text-blue-400 hover:underline hover:cursor-pointer'
              onClick={() => setUser()}
            >
              Logout
            </span>
          </p>
          <TrafficLight />
          <TodoList />
        </div>
      )}
      {!user && <Login handleLogin={handleLogin} resError={resError} />}
    </div>
  );
}

export default App;

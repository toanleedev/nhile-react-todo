import React, { useEffect, useState } from 'react';
import Button from './Button';
import TextInput from './TextInput';
import Todo from './Todo';
import useLocalStorage from '../hooks/useLocalStorage';

function TodoList() {
  const [todos, setTodos] = useLocalStorage('todos', []);
  const [todoInput, setTodoInput] = useState('');

  const handleInputChange = (e) => {
    setTodoInput(e.target.value);
  };

  const handleAddTodo = () => {
    if (todoInput.trim().length <= 0) {
      return;
    }
    const newTodos = [{ id: Date.now(), title: todoInput }, ...todos];
    setTodos(newTodos);
    setTodoInput('');
    document.querySelector('.text-input').focus();
  };

  return (
    <div>
      <h3>Todo list</h3>
      <div className='header'>
        <TextInput onChange={handleInputChange} value={todoInput} />
        <Button name={'Add'} onClick={handleAddTodo} />
      </div>
      <div className='content'>
        {todos.map((todo) => (
          <Todo title={todo.title} key={todo.id} />
        ))}
      </div>
    </div>
  );
}

export default TodoList;

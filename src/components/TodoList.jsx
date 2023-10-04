import React, { useEffect, useState } from 'react';
import Button from './Button';
import TextInput from './TextInput';
import Todo from './Todo';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState('');

  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem('todos')) || []);
  }, []);

  const handleOnChange = (e) => {
    setTodoInput(e.target.value);
  };

  const handleAddTodo = () => {
    const newTodos = [{ id: Date.now(), title: todoInput }, ...todos];
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
    setTodoInput('');
    document.querySelector('.text-input').focus();
  };
  return (
    <div>
      <h3>Todo list</h3>
      <div className='header'>
        <TextInput onChange={handleOnChange} value={todoInput} />
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

import './App.css';
import Button from './components/Button';
import TextInput from './components/TextInput';
import Todo from './components/Todo';

function App() {
  const todos = [
    {
      id: 1,
      title: 'Todo list app',
    },
    {
      id: 2,
      title: 'Cooking',
    },
    {
      id: 3,
      title: 'Learn something',
    },
    {
      id: 4,
      title: 'Read a book',
    },

  ];
  return (
    <div className='App'>
      <div className='header'>
        <TextInput />
        <Button name={'Add'} />
      </div>
      <div className='content'>
        {todos.map(todo => (
          <Todo title={todo.title} key={todo.id}/>
        ))}
      </div>
    </div>
  );
}

export default App;

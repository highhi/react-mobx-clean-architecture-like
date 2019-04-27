import React from 'react';
import TodoList from '../../container/TodoList';
import TodoForm from '../../container/TodoForm';

const App: React.FC = () => {
  return (
    <div className="App">
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;

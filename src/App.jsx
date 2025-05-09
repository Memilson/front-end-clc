import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [refreshFlag, setRefreshFlag] = useState(false);
  return (
    <div>
      <h1>Minha Lista de Tarefas</h1>
      <TodoForm onAdded={() => setRefreshFlag(f => !f)} />
      <TodoList key={refreshFlag} />
    </div>
  );
}

export default App;

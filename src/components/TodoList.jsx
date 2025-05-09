import { useEffect, useState } from 'react';
import { supabase } from '../services/supabaseClient';

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetchTodos();
  }, []);
  async function fetchTodos() {
    let { data, error } = await supabase.from('todos').select('*');
    if (error) console.error(error);
    else setTodos(data);
  }
  async function deleteTodo(id) {
    const { error } = await supabase.from('todos').delete().eq('id', id);
    if (error) console.error(error);
    else setTodos(todos.filter(t => t.id !== id));
  }
  return (
    <ul>
      {todos.map(t => (
        <li key={t.id}>
          {t.task}
          <button onClick={() => deleteTodo(t.id)}>Excluir</button>
        </li>
      ))}
    </ul>
  );
}
import { useState } from 'react';
import { supabase } from '../services/supabaseClient';

export default function TodoForm({ onAdded }) {
  const [text, setText] = useState('');
  async function handleSubmit(e) {
    e.preventDefault();
    const { data, error } = await supabase
      .from('todos')
      .insert([{ task: text }]) // 🔧 alterado de 'text' para 'task'
      .single();
    if (error) console.error(error);
    else onAdded(data);
    setText('');
  }
  return (
    <form onSubmit={handleSubmit}>
      <input value={text} onChange={e => setText(e.target.value)} required />
      <button type="submit">Adicionar</button>
    </form>
  );
}

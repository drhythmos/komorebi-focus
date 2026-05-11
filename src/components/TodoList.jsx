import React, { useState } from 'react';
import { Plus, Trash2, CheckCircle, Circle } from 'lucide-react';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTask = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: inputValue, completed: false }]);
    setInputValue('');
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="workspace-panel">
      <h3>Study Tasks</h3>
      <form onSubmit={addTask} className="todo-input-group">
        <input 
          type="text" 
          className="todo-input" 
          placeholder="What needs to be done?"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit" className="btn btn-icon" style={{ width: '35px', height: '35px' }}>
          <Plus size={16} />
        </button>
      </form>
      
      <div className="todo-list">
        {tasks.map(task => (
          <div key={task.id} className={`todo-item ${task.completed ? 'completed' : ''}`}>
            <button 
              onClick={() => toggleTask(task.id)} 
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: task.completed ? 'var(--accent-matcha)' : 'var(--text-muted)' }}
            >
              {task.completed ? <CheckCircle size={18} /> : <Circle size={18} />}
            </button>
            <span>{task.text}</span>
            <button 
              onClick={() => deleteTask(task.id)} 
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}
            >
              <Trash2 size={16} />
            </button>
          </div>
        ))}
        {tasks.length === 0 && (
          <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', textAlign: 'center', marginTop: '2rem' }}>
            No tasks yet. Stay productive! ✨
          </p>
        )}
      </div>
    </div>
  );
};

export default TodoList;

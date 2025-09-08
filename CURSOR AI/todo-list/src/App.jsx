import { useState, useEffect, useRef } from 'react';
import './App.css';

const FILTERS = {
  all: t => true,
  active: t => !t.completed,
  completed: t => t.completed,
};

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');
  const [filter, setFilter] = useState('all');
  const [editing, setEditing] = useState(null);
  const [editValue, setEditValue] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    const saved = localStorage.getItem('tasks');
    if (saved) setTasks(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = () => {
    if (input.trim()) {
      setTasks([
        ...tasks,
        { text: input.trim(), completed: false, id: Date.now() },
      ]);
      setInput('');
      inputRef.current?.focus();
    }
  };

  const handleRemoveTask = id => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const handleToggleComplete = id => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const handleEditTask = (id, text) => {
    setEditing(id);
    setEditValue(text);
  };

  const handleEditSave = id => {
    setTasks(tasks.map(t => t.id === id ? { ...t, text: editValue } : t));
    setEditing(null);
    setEditValue('');
  };

  const handleEditCancel = () => {
    setEditing(null);
    setEditValue('');
  };

  const handleKeyDown = e => {
    if (e.key === 'Enter') handleAddTask();
  };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center ultra-bg">
      <div className="card shadow-lg ultra-glass p-4 w-100" style={{maxWidth: 500}}>
        <h1 className="text-center mb-4 display-5 fw-bold ultra-gradient-text">Ultra Pro To-Do List</h1>
        <div className="input-group mb-4">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Add a new task..."
            className="form-control form-control-lg ultra-input"
          />
          <button
            onClick={handleAddTask}
            className="btn btn-lg ultra-btn-glow btn-primary"
            type="button"
          >
            Add
          </button>
        </div>
        <div className="d-flex justify-content-between mb-3">
          {Object.keys(FILTERS).map((f, i) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`btn btn-sm fw-bold px-4 ultra-btn-filter ${filter === f ? 'ultra-btn-active' : ''}`}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>
        <ul className="list-group ultra-list mb-3">
          {tasks.filter(FILTERS[filter]).length === 0 && (
            <li className="list-group-item text-center text-secondary bg-transparent border-0">No tasks found.</li>
          )}
          {tasks.filter(FILTERS[filter]).map(task => (
            <li key={task.id} className={`list-group-item d-flex align-items-center ultra-list-item ${task.completed ? 'ultra-completed' : ''}`}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleToggleComplete(task.id)}
                className="form-check-input me-3 ultra-checkbox"
              />
              {editing === task.id ? (
                <>
                  <input
                    value={editValue}
                    onChange={e => setEditValue(e.target.value)}
                    className="form-control me-2 ultra-input-edit"
                    onKeyDown={e => {
                      if (e.key === 'Enter') handleEditSave(task.id);
                      if (e.key === 'Escape') handleEditCancel();
                    }}
                  />
                  <button
                    onClick={() => handleEditSave(task.id)}
                    className="btn btn-success btn-sm me-2"
                  >Save</button>
                  <button
                    onClick={handleEditCancel}
                    className="btn btn-secondary btn-sm"
                  >Cancel</button>
                </>
              ) : (
                <>
                  <span className={`flex-grow-1 fs-5 ${task.completed ? 'text-decoration-line-through text-secondary' : ''}`}>{task.text}</span>
                  <button
                    onClick={() => handleEditTask(task.id, task.text)}
                    className="btn btn-warning btn-sm me-2 ultra-btn-glow"
                  >Edit</button>
                  <button
                    onClick={() => handleRemoveTask(task.id)}
                    className="btn btn-danger btn-sm ultra-btn-glow"
                  >Delete</button>
                </>
              )}
            </li>
          ))}
        </ul>
        <div className="d-flex justify-content-between text-secondary small fw-bold">
          <span>{tasks.filter(FILTERS['active']).length} active</span>
          <span>{tasks.filter(FILTERS['completed']).length} completed</span>
        </div>
      </div>
    </div>
  );
}

export default App;

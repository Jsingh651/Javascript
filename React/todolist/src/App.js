import './App.css';
import React, { useState } from 'react';

function App() {
  const [newTodo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.length === 0) {
      return;
    }
    setTodos([...todos, { text: newTodo, checked: false }]);
    setTodo("");
  }
  const handleDelete = (idx) => {
    const newFilteredList = todos.filter((todo, i) => {
      return i !== idx;
    })
    setTodos(newFilteredList);
  }
  const handleCheck = (idx) => {
    const newTodos = [...todos];
    newTodos[idx] = { ...newTodos[idx], checked: !newTodos[idx].checked };
    setTodos(newTodos);
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setTodo(e.target.value)} value={newTodo} />
        <button>Submit</button>
      </form>
      {
        todos.map((todo, idx) => {
          return (
            <div key={idx}>
              <input type="checkbox" checked={todo.checked} onChange={() => handleCheck(idx)} />
              <span className={todo.checked ? "checked" : ""}>{todo.text}</span>
              <button onClick={() => handleDelete(idx)}>Delete</button>
            </div>
          )
        })
      }
    </div>
  );
}
export default App;

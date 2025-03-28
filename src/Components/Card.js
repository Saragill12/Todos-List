import { useState } from "react";

export default function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    if (!title) return;
    setTodos([...todos, title]);
    setTitle("");
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const moveUp = (index) => {
    if (index === 0) return;
    const newTodos = [...todos];
    [newTodos[index], newTodos[index - 1]] = [newTodos[index - 1], newTodos[index]];
    setTodos(newTodos);
  };

  const moveDown = (index) => {
    if (index === todos.length - 1) return;
    const newTodos = [...todos];
    [newTodos[index], newTodos[index + 1]] = [newTodos[index + 1], newTodos[index]];
    setTodos(newTodos);
  };

  return (
    <div
      style={{
        padding: 20,
        maxWidth: 320,
        margin: "40px auto",
        backgroundColor: "#f8f9fa",
        borderRadius: 8,
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#333" }}>Todos List</h1>
      <form onSubmit={addTodo} style={{ display: "flex", gap: "10px" }}>
        <input
          value={title}
          placeholder="Enter"
          onChange={(e) => setTitle(e.target.value)}
          style={{
            flex: 1,
            padding: 8,
            borderRadius: 4,
            border: "1px solid #ccc",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "8px 12px",
            backgroundColor: "green",
            color: "white",
            border: "none",
            borderRadius: 4,
            cursor: "pointer",
          }}
        >
          Add
        </button>
      </form>
      <ul style={{ listStyleType: "none", padding: 0, marginTop: 20 }}>
        {todos.map((todo, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "10px 15px",
              backgroundColor: "#fff",
              borderRadius: 4,
              boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
              marginBottom: 8,
            }}
          >
            <span>{todo}</span>
            <div style={{ display: "flex", gap: "5px" }}>
              <button onClick={() => moveUp(index)} style={{ backgroundColor: "blue", color: "white", border: "none", padding: "6px 10px", borderRadius: 4, cursor: "pointer" }}>
                 Up
              </button>
              <button onClick={() => moveDown(index)} style={{ backgroundColor: "blue", color: "white", border: "none", padding: "6px 10px", borderRadius: 4, cursor: "pointer" }}>
                 Down
              </button>
              <button onClick={() => deleteTodo(index)} style={{ backgroundColor: "red", color: "white", border: "none", padding: "6px 10px", borderRadius: 4, cursor: "pointer" }}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

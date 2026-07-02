import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      title: "Title",
      description: "Description",
      completed: false,
    },
    {
      title: "Title-2",
      description: "Description-2",
      completed: false,
    },
  ]);

  function AddTodo() {
    setTodos([
      ...todos,
      {
        title: "New Title",
        description: "New Description",
        completed: false,
      },
    ]);
  }

  return (
    <>
      <button onClick={AddTodo}>Add Todo</button>
      {todos.map((todo, index) => (
        <Todo key={index} title={todo.title} description={todo.description} />
      ))}
    </>
  );
}

const Todo = ({ title, description }) => {
  return (
    <>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </>
  );
};

export default App;

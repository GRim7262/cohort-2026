import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      title: "Test",
      description: "TesT",
      completed: false,
    },
  ]);

  return (
    <>
      {JSON.stringify(todos)}
    </>
  );
}

function CustomButton(props) {
  function onClickHandler() {
    props.setCount(props.count + 1);
  }

  return (
    <>
      <button onClick={onClickHandler}>Counter {props.count}</button>
    </>
  );
}

export default App;

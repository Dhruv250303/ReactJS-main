import { useState } from "react";
import Input_container from "../components/Input_container";
import Todo from "../components/Todo";
import "./App.css";
import Todo_container from "../components/Todo_container";

function App() {
  const [inputVal, setinputVal] = useState("");
  const [todos, settodos] = useState([]);

  function writetodo(e) {
    setinputVal(e.target.value);
  }

  function addtodo() {
    if (inputVal != "") {
      settodos((prevtodos) => [...prevtodos, inputVal]);
      setinputVal("");
    }
  }

  function deltodo(todoindx) {
    settodos((prevtodos) =>
      prevtodos.filter((prevtodos, prevtodoindx) => {
        return prevtodoindx != todoindx;
      })
    );
  }

  console.log(todos);

  return (
    <>
      <main>
        <h1>ToDO App </h1>
        <Input_container
          inputVal={inputVal}
          writetodo={writetodo}
          addtodo={addtodo}
        />
        <Todo_container todos={todos} deltodo={deltodo}/>
      </main>
    </>
  );
}

export default App;

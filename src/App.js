import React, { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [toDos, setToDos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filterToDos, setFilterToDos] = useState([]);

  useEffect(() => {
    getLocalToDos();
  }, [getLocalToDos]);

  useEffect(() => {
    filterHandler();
    saveLocalToDos();
  }, [toDos, status]);

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilterToDos(toDos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilterToDos(toDos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilterToDos(toDos);
        break;
    }
  };

  const saveLocalToDos = () => {
    localStorage.setItem("todos", JSON.stringify(toDos));
  };

  const getLocalToDos = () => {
    if (localStorage.getItem("todos" === null)) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setToDos(todoLocal);
    }
  };
  return (
    <div className="App">
      <header>
        <h1>My To Do List</h1>
      </header>
      <Form
        setInputText={setInputText}
        toDos={toDos}
        setToDos={setToDos}
        inputText={inputText}
        setStatus={setStatus}
      />
      <ToDoList toDos={toDos} setToDos={setToDos} filterToDos={filterToDos} />
    </div>
  );
}

export default App;

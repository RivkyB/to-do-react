import React, { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [toDos, setToDos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filterToDos, setFilterToDos] = useState([]);

  const getLocalToDos = () => {
    if (localStorage.getItem("todos" === null)) {
      const json = localStorage.getItem("todos");
      const todos = JSON.parse(json) || [];
      setToDos({ todos });
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setToDos(todoLocal);
    }
  };

  useEffect(() => {
    getLocalToDos();
  }, []);

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

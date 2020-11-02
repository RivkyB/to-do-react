import React from "react";
import ToDo from "./ToDo";

const ToDoList = ({ toDos, setToDos, filterToDos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filterToDos.map((todo) => (
          <ToDo
            text={todo.text}
            key={todo.id}
            toDos={toDos}
            setToDos={setToDos}
            todo={todo}
          />
        ))}
      </ul>
    </div>
  );
};
export default ToDoList;

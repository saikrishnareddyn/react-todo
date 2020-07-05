import React, { useState } from "react";
import "./Todo.css";

export const TodoInput = ({ handleAddTodo }) => {
  const [todo, setTodo] = useState("");

  const addTodo = () => {
    setTodo("");
    handleAddTodo(todo);
  };

  return (
    <div>
      <input
        type="text"
        name="todo"
        placeholder="Enter Todo....."
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
      />
      <button type="submit" onClick={addTodo}>
        Add
      </button>
    </div>
  );
};

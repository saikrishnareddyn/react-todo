import React, { useState } from "react";
import { TodoInput } from "./TodoInput";
import { v4 as uuidv4 } from "uuid";
import { TodoItem } from "./TodoItem";
import "./Todo.css";

export const Todo = () => {
  const todosData = [
    {
      id: uuidv4(),
      title: "Walking",
      completed: true,
    },
    {
      id: uuidv4(),
      title: "sleeping",
      completed: true,
    },
    {
      id: uuidv4(),
      title: "running",
      completed: false,
    },
  ];
  const [todos, setTodos] = useState(todosData);
  const addTodo = (title) => {
    const newTodo = {
      title,
      id: uuidv4(),
    };
    setTodos(todos.concat([newTodo]));
  };

  const handleComplete = (id) => {
    const newTodo = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(newTodo);
  };

  return (
    <div className="todocontainer">
      <TodoInput handleAddTodo={addTodo} />
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} handleComplete={handleComplete} />
      ))}
    </div>
  );
};

import React from "react";

export const TodoItem = ({
  todo: { title, completed, id },
  handleComplete,
}) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => handleComplete(id)}
      />
      <span style={completed ? { textDecoration: "line-through" } : null}>
        {title}
      </span>
    </div>
  );
};

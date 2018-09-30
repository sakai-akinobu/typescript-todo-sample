import * as React from "react";

import {ITodo} from "../types";
import TodoItem from "./TodoItem";

interface IProps {
  todos: ITodo[];
  toggleComplete: (todo: ITodo) => void;
}

export default function({todos, toggleComplete}: IProps) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          toggleComplete={toggleComplete}
        />
      ))}
    </ul>
  );
}

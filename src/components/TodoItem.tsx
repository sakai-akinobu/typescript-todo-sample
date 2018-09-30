import * as React from "react";

import {ITodo} from "../types";

interface IProps {
  todo: ITodo;
  toggleComplete: (todo: ITodo) => void;
}

export default function({todo, toggleComplete}: IProps) {
  return (
    <li>
      <label>
        <input type="checkbox" checked={todo.completed} onChange={() => toggleComplete(todo)} />
        <span>{todo.title}</span>
      </label>
    </li>
  );
}

import React from 'react';

import {Todo} from '../types';

interface Props {
  todo: Todo;
  toggleComplete: (todo: Todo) => void,
};

export default function({todo, toggleComplete}: Props) {
  return (
    <li>
      <label>
        <input type="checkbox" checked={todo.completed} onChange={() => toggleComplete(todo)} />
        <span>{todo.title}</span>
      </label>
    </li>
  );
}

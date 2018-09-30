import React from 'react';

import {Todo} from '../types';

interface Props {
  todo: Todo;
};

export default function({todo}: Props) {
  return (
    <li>
      <input type="checkbox" defaultChecked={todo.completed} />
      <span>{todo.title}</span>
    </li>
  );
}

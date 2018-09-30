import React from 'react';

import {Todo} from '../types';
import TodoItem from './TodoItem';

interface Props {
  todos: Todo[];
};

export default function({todos}: Props) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} />
      ))}
    </ul>
  );
}

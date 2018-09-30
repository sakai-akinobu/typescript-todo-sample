import * as React from 'react';

import {Todo} from '../types';
import TodoItem from './TodoItem';

interface Props {
  todos: Todo[];
  toggleComplete: (todo: Todo) => void,
};

export default function({todos, toggleComplete}: Props) {
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

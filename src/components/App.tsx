import React from 'react';

import {Todo} from '../types';
import TodoList from './TodoList';

// TODO
const todos: Todo[] = [
  {title: 'foo', completed: false},
  {title: 'bar', completed: true},
];

export default function() {
  return (
    <div>
      <TodoList todos={todos} />
    </div>
  );
}

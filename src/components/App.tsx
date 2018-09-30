import React from 'react';
import immer from 'immer';

import {Todo} from '../types';
import TodoList from './TodoList';

// TODO This is a sample data.
const todos: Todo[] = [
  {title: 'foo', completed: false},
  {title: 'bar', completed: true},
];

interface State {
  todos: Todo[],
}

export default class App extends React.Component<void, State> {
  constructor(props) {
    super(props);

    this.state = {
      todos,
    };
  }

  toggleComplete(todo: Todo) {
    this.setState(state => {
      return immer(state, draft => {
        const index = state.todos.findIndex(t => t === todo);
        draft.todos[index].completed = !draft.todos[index].completed;
        return draft;
      });
    });
  }

  render() {
    return (
      <div>
        <TodoList
          todos={this.state.todos}
          toggleComplete={this.toggleComplete.bind(this)}
        />
      </div>
    );
  }
}

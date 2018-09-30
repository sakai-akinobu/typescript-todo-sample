import * as React from 'react';
import immer from 'immer';

import {Todo} from '../types';
import Input from './Input';
import TodoList from './TodoList';
import ClearCompletedButton from './ClearCompletedButton';

interface State {
  title: string;
  todos: Todo[];
}

export default class App extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = {
      title: '',
      todos: [],
    };
  }

  handleChangeTitle(value: string) {
    this.setState(state => {
      return immer(state, draft => {
        draft.title = value;
        return draft;
      });
    });
  }

  addTodo(title: string) {
    this.setState(state => {
      return immer(state, draft => {
        draft.todos.unshift({title, completed: false});
        draft.title = '';
        return draft;
      });
    });
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

  clearCompleted() {
    this.setState(state => {
      return immer(state, draft => {
        draft.todos = draft.todos.filter(todo => !todo.completed);
        return draft;
      });
    });
  }

  render() {
    const {
      title,
      todos,
    } = this.state;

    return (
      <div>
        <ClearCompletedButton onClick={this.clearCompleted.bind(this)} />
        <Input
          value={title}
          onChange={this.handleChangeTitle.bind(this)}
          onEnter={this.addTodo.bind(this)}
        />
        <TodoList
          todos={todos}
          toggleComplete={this.toggleComplete.bind(this)}
        />
      </div>
    );
  }
}

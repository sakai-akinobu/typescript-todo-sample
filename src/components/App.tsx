import immer from "immer";
import * as React from "react";

import {ITodo} from "../types";
import ClearCompletedButton from "./ClearCompletedButton";
import Input from "./Input";
import TodoList from "./TodoList";

interface IState {
  title: string;
  todos: ITodo[];
}

export default class App extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      title: "",
      todos: [],
    };
  }

  public render() {
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

  private handleChangeTitle(value: string) {
    this.setState((state) => {
      return immer(state, (draft) => {
        draft.title = value;
        return draft;
      });
    });
  }

  private addTodo(title: string) {
    this.setState((state) => {
      return immer(state, (draft) => {
        draft.todos.unshift({title, completed: false});
        draft.title = "";
        return draft;
      });
    });
  }

  private toggleComplete(todo: ITodo) {
    this.setState((state) => {
      return immer(state, (draft) => {
        const index = state.todos.findIndex((t) => t === todo);
        draft.todos[index].completed = !draft.todos[index].completed;
        return draft;
      });
    });
  }

  private clearCompleted() {
    this.setState((state) => {
      return immer(state, (draft) => {
        draft.todos = draft.todos.filter((todo) => !todo.completed);
        return draft;
      });
    });
  }
}

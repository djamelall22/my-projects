import React, { Component } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [{ task: 'Walk the fish' }, { task: 'Groom chickens' }],
    };
  }

  render() {
    const todos = this.state.todos.map((todo) => <Todo task={todo.task} />);
    return (
      <div>
        <TodoForm />
        <h1>Todo List:</h1>
        <ul>{todos}</ul>
      </div>
    );
  }
}

export default TodoList;

import React, { Component } from 'react';
import TodoList from './Todolist';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <p>a todo</p>
        <button>X</button>
        <button>Edit</button>
      </div>
    );
  }
}

export default Todo;

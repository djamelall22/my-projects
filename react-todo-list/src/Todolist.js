import React, { Component } from 'react';
import Todo from './Todo';

class Todolist extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="Todolist">
        <h1>Todo List!</h1>
        <p>A Simple React Todo List App</p>
        <Todo />
      </div>
    );
  }
}

export default Todolist;

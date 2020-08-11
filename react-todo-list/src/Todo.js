import React, { Component } from 'react';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleDelete() {
    this.props.removeTodo(this.props.id);
  }
  render() {
    return (
      <div>
        <li>{this.props.task}</li>
        <button>Edit</button>
        <button onClick={this.handleDelete}>X</button>
      </div>
    );
  }
}

export default Todo;

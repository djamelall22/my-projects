import React, { Component } from 'react';

class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <form>
        <input />
        <button>Add Task</button>
      </form>
    );
  }
}

export default NewTodoForm;

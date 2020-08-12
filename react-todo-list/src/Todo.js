import React, { Component } from 'react';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = { isEditing: false, task: this.props.task };
    this.handleDelete = this.handleDelete.bind(this);
    this.toggelForm = this.toggelForm.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleDelete() {
    this.props.removeTodo(this.props.id);
  }

  toggelForm() {
    this.setState({ isEditing: !this.state.isEditing });
  }

  handleUpdate(evt) {
    evt.preventDefault();
    //take new task data and pass up to the parent
    this.props.updateTodo(this.props.id, this.state.task);
    // this.setState({ isEditing: false });
    this.toggelForm();
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  render() {
    let result;
    if (this.state.isEditing) {
      result = (
        <div>
          <form onSubmit={this.handleUpdate}>
            <input
              type="text"
              value={this.state.task}
              onChange={this.handleChange}
              name="task"
            />
            <button>Save</button>
          </form>
        </div>
      );
    } else {
      result = (
        <div>
          <li>{this.props.task}</li>
          <button onClick={this.toggelForm}>Edit</button>
          <button onClick={this.handleDelete}>X</button>
        </div>
      );
    }

    return result;
  }
}

export default Todo;

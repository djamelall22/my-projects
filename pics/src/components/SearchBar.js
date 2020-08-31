import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
    this.handelChange = this.handelChange.bind(this);
    this.handelSubmit = this.handelSubmit.bind(this);
  }

  handelChange(evt) {
    this.setState({ term: evt.target.value });
  }

  handelSubmit(evt) {
    evt.preventDefault();
    this.props.onSubmit(this.state.term);
    this.setState({ term: '' });
  }
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.handelSubmit}>
          <div className="filed">
            <label htmlFor="term">Image Search</label>
            <input
              type="text"
              id="term"
              value={this.state.term}
              name="term"
              onChange={this.handelChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;

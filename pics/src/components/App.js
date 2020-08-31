import React, { Component } from 'react';

import SearchBar from './SearchBar';
import ImagesList from './ImagesList';
import unsplash from '../api/unsplash';
// Access Key   GjsDNUYM2uj6DQGE7nkbTnDS8h8kk5VLkeL6r1MktkE
// Secret key   pvG4YM46dWTh21eHVpPYFg_6VlGkzHVDHbCs0HMsLvs

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { images: [] };
    this.handelFormSubmit = this.handelFormSubmit.bind(this);
  }

  async handelFormSubmit(term) {
    const response = await unsplash.get('/search/photos', {
      params: { query: term },
    });
    console.log(response.data.results);
    this.setState({ images: response.data.results });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.handelFormSubmit} />
        <ImagesList images={this.state.images} />
      </div>
    );
  }
}

export default App;

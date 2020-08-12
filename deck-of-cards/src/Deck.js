import React, { Component } from 'react';
import axios from 'axios';

const API_URL = 'https://deckofcardsapi.com/api/deck/new/shuffle';

class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = { deck: null };
    console.log('inside construction');
  }

  async componentDidMount() {
    let deck = await axios.get(API_URL);
    this.setState({ deck: deck.data });
    console.log(deck.data);
    console.log('inside did mount');
  }
  render() {
    console.log('insid reder');

    return <h1>Card Dealer</h1>;
  }
}

export default Deck;

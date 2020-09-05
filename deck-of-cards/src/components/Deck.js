import React, { Component } from 'react';
import axios from 'axios';
import Card from './Card';
import './Deck.css';
const BASE_URL = 'https://deckofcardsapi.com/api/deck/';

class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = { deck: null, drawn: [] };
    this.getCard = this.getCard.bind(this);
  }

  async componentDidMount() {
    let deckOfCard = `${BASE_URL}new/shuffle/`;
    let deckResponse = await axios.get(deckOfCard);
    this.setState({ deck: deckResponse.data });
  }

  async getCard() {
    try {
      let cardId = this.state.deck.deck_id;
      let cardUrl = `${BASE_URL}/${cardId}/draw/`;
      let cardResponse = await axios.get(cardUrl);
      if (!cardResponse.data.success) {
        throw new Error('No card remaining!');
      }
      let card = cardResponse.data.cards[0];
      console.log(this.state.drawn);

      this.setState((st) => ({
        drawn: [
          ...st.drawn,
          {
            id: card.code,
            image: card.image,
            name: `${card.value} of ${card.suit}`,
          },
        ],
      }));
    } catch (err) {
      alert(err);
    }
  }

  render() {
    const cards = this.state.drawn.map((card) => (
      <Card key={card.id} image={card.image} name={card.name} />
    ));
    return (
      <div className="Deck">
        <h1 className="Deck-title">✯ Card Delear ✯</h1>
        <h2 className="Deck-title subtitle">
          ✯ A little demo made with React ✯
        </h2>
        <button className="Deck-btn" onClick={this.getCard}>
          Get Card!
        </button>
        <div className="Deck_cardarea">{cards}</div>
      </div>
    );
  }
}

export default Deck;

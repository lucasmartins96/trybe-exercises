import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  render() {
    const { pokemonsList } = this.props;
    return (
      <section>
        { pokemonsList.map((pokemon, index) => <Pokemon key={ index } pokemon={ pokemon } />)}
      </section>
    );
  }
}

export default Pokedex;

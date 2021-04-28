import React from 'react';

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight: { value, measurementUnit }, image } = this.props.pokemon;
    return (
      <div>
        <p>{ name }</p>
        <p>{ type }</p>
        <p>{ `${value} ${measurementUnit}` }</p>
        <img src={ image } alt={ name }/>
      </div>
    );
  }
}

export default Pokemon;

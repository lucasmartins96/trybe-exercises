import React, { Component } from 'react'

class EstadoFavorito extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label>
        Diga qual o seu Estado favorito! De React ou do Brasil, você decide! =&#41;
        <textarea name="estadoFavorito" value={ value } onChange={ handleChange } />
      </label>
    )
  }
}

export default EstadoFavorito;

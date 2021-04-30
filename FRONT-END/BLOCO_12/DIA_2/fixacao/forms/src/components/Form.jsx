import React, { Component } from 'react'
import EstadoFavorito from './EstadoFavorito';
import Idade from './Idade';
import VaiComparecer from './VaiComparecer';

class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      estadoFavorito: '',
      idade: 0,
      vaiComparecer: false,
    };
  }


  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { estadoFavorito, idade, vaiComparecer} = this.state;
    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form className="form">
          <EstadoFavorito value={ estadoFavorito } handleChange={ this.handleChange }/>
          <br/>
          <Idade value={ idade } handleChange={ this.handleChange }/>
          <br/>
          <VaiComparecer value={ vaiComparecer } handleChange={ this.handleChange }/>
          <br/>
          <button>Inscrever</button>
        </form>
      </div>
    );
  }
}

export default Form;
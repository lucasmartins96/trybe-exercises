import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super()
    this.handleClick =this.handleClick.bind(this);
    this.state = {
      numeroDeCliques: 0
    }
  }

  handleClick({ target }) {
    const { numeroDeCliques } = this.state;
    this.setState((prevState, _props) => ({
      numeroDeCliques: prevState.numeroDeCliques + 1
    }))
    if (numeroDeCliques % 2 === 0) {
      console.log(numeroDeCliques, target.innerText);
    }
  }

  render() {
    const { numeroDeCliques } = this.state
    return (
      <div className="App">
        <button onClick={ (event) => this.handleClick(event) }>Meu botão</button>
        <div>{ numeroDeCliques }</div>
      </div>
    )
  }
}

export default App;
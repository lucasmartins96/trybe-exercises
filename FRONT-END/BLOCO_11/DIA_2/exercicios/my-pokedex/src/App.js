import './App.css';
import Pokedex from './components/Pokedex';
import pokemons from './data';

function App() {
  return (
    <div className="App">
      <Pokedex pokemonsList={ pokemons } />
    </div>
  );
}

export default App;

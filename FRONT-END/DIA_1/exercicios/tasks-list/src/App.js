import './App.css';

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  const dates = ['jantar', 'escovar os dentes', 'almoçar'];
  return (
    <div className="App">
      <header className="App-header">
        <ul>
          { dates.map((date) => task(date)) }
        </ul>
      </header>
    </div>
  );
}

export default App;

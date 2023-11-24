// import logo from './logo.svg';
import './App.css';
import possibleLogo from './temp-pic.png'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={possibleLogo} className="App-logo" alt="logo" />
        <p>
          My idol
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

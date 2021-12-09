import logo from './logo.svg';
import './App.css';

function App() {
  const styles ={
    color: 'blue',
    backgroundColor: 'white '

  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          style = {styles}
        >
          Learn React wiht Tomas Lopez 😎😂
        </a>
      </header>
    </div>
  );
}

export default App;







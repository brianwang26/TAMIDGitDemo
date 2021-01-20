import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          TAMID <code>Tech</code> Team roster.
        </p>
        <ul> 
          <li> Kshitij Jain </li>
          <li> Brian Wang </li> 
          <li> Harsh Jhaveri</li>
        </ul>
      </header>
    </div>
  );
}

export default App;

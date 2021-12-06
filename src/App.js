//import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
 return (
    <div className="App">
      {/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
 </header>*/}
 <NavBar/>
 <ItemListContainer greeting="HOLA CODER"/>
 <ItemDetailContainer/>
    </div>
  );
}

export default App;

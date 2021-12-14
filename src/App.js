//import logo from './logo.svg';
import NavBar from './components/navBar/navbar';
import ItemListContainer from './components/itemListContainer/ItemListContainer'
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import {BrowserRouter,Switch,Route} from 'react-router-dom'

function App() {
 return (
    <div className="App">
    <BrowserRouter>
        <NavBar/>
      <Switch>
        <Route exact path='/'>
        <ItemListContainer  greeting="-K-RACER TIENDA VIRTUAL-"/>
        </Route>
        <Route path='/category/:categoryId'>
        <ItemListContainer/>
        </Route>
        <Route path='/detail/:paramId'>
        <ItemDetailContainer/>
        </Route>
        </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;

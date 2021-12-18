//import logo from './logo.svg';
import Router from "./components/Router/Router";
import {CartProvider} from './context/useContext'

function App() {
 return (
    <>
    <CartProvider>
     <Router/>
     </CartProvider>
    </>
  );
}

export default App;

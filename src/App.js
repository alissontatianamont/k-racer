//import logo from './logo.svg';
import Router from './components/Router/Router';
import { CartContext } from './context/CartContext';

function App() {
    return (
        <>
            <CartContext>
                <Router />
            </CartContext>
        </>
    );
}

export default App;
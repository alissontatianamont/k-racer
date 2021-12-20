import { useContext } from 'react';
import CartContext from '../../context/CartContext';
import { Link } from 'react-router-dom';
import './nav.css';




function CartWidget() {
    const { values } = useContext(CartContext);

    return (
        <>
            <Link className="Carrito" to="/cart">
                <p style={{ color: 'white' }}>{values.quantity}</p>
                <button className="carrito">
                    <img width="40px" src="../imagenes/carrito.png" alt="carrito" />
                </button>
            </Link>
        </>
    );
}

export default CartWidget;
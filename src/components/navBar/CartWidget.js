import { useContext } from 'react';
import CartContext from '../../context/CartContext';

import './nav.css';
function CartWidget() {
    const { values } = useContext(CartContext);

    return (
        <>
            <p style={{color: "white"}}>{values.quantity}</p>
            <button className="carrito">
                <img width="40px" src="../imagenes/carrito.png" alt="carrito" />
            </button>
        </>
    );
}

export default CartWidget;
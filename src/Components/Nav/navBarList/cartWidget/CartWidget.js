import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import Context from '../../../../context/CartContext';
import '../../NavBar.css';
import carrito from '../../../imagenes/carrito.svg'
const CartWidget = () => {
    const { getCount } = useContext(Context);

    return (
        <div className='carrito'>
           <Link to={'/cart'}><button><img src={carrito} to="/cart" alt="logo"/>{getCount()}</button>
            
            </Link>
        </div>
    );
};

export default CartWidget;

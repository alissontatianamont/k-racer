import React, { useContext } from 'react';
import '../../Nav/NavBar.css';

import FormContainer from './FormContainer';
import CartContext from '../../../context/CartContext';
import { Link } from 'react-router-dom';

const CheckoutContainer = () => {
    const { values } = useContext(CartContext);

    return (
        <div className="checkoutContainer">
            {values.itemCart.length > 0 ? (
                <FormContainer />
            ) : (
                <div>
                    <h1>No hay productos en el carrito</h1>
                    <Link to="/">
                        <button className="buttonCart">Volver a la tienda</button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default CheckoutContainer;

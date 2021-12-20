import React, { useContext } from 'react';
import CartContext from '../context/CartContext';
import Cart from './Cart';

const CartViewContainer = () => {
    const {values } = useContext(CartContext);

    return (
        <div>
            <h1 style={{color: 'white'}}>Hola</h1>
            <Cart items={values.items} />
        </div>
    );
};

export default CartViewContainer;
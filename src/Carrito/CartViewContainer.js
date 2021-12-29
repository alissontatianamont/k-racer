import React, { useContext } from 'react';
import CartContext from '../context/CartContext';
import Cart from './Cart';

const CartViewContainer = () => {
    const clear=()=>{
        clearItems([])
    }
    const {values,clearItems}=useContext(CartContext)
           

    return (
        <div>
            <Cart items={values.items} />
            <p style={{ color: 'white' }}>{values.quantity}</p>
            <button onClick={clear}>CLEAR ALL</button>
        </div>
    );
};

export default CartViewContainer;
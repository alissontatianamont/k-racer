import React, { useContext } from 'react'
import  CartContext  from '../context/CartContext'
import Cart from './Cart'

const CartView = () => {
    const {items}=useContext(CartContext)
    return (
        <div>
            <Cart items={ItemCart}/>
        </div>
    )
}

export default CartView

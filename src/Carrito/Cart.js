import React, { useContext } from 'react'
//import  CartContext  from '../context/CartContext'
import ItemCart from './ItemCart'


const Cart = ({items}) => {
    return (
        <div>
            {
                
                    <div >
                        {items.map(item=><ItemCart key={item.product.id} item={item.product} quantity={item.quantity}/>)}
                    </div>
                
                }
        </div>
    )
}

export default Cart

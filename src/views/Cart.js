import React,{useContext} from 'react'
import { CartContext } from '../context/useContext'
const Cart = () => {
    const {items,removeItem,clearItems}=useContext(CartContext)
  
    return (
        <div>
            {
                items.map((products)=>(
                    <div key={products.id}>
                         <h1>{products.title}</h1>
                         <h3 onClick={()=>removeItem(products.id)}>borrar producto</h3>

                    </div>
                ))
               }
                 <h3 onClick={()=>clearItems()}>vaciar canasta</h3>

        </div>
    )
}

export default Cart

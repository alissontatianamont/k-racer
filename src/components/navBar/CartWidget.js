import { useContext } from 'react'
import { CartContext } from '../../context/useContext'
import './nav.css'
function CartWidget ()  { 
    const {items}=useContext(CartContext)
    let itemsInCart=0;

    items.map((products)=>{
        itemsInCart=itemsInCart+products.qty
    })
    return( 
    <>
        <div>{itemsInCart}</div>
       <button className="carrito"><img width="40px"  src="../imagenes/carrito.png" alt="carrito" /></button>
       </>)
   }

   export default CartWidget
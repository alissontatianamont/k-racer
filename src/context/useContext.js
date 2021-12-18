import React, { createContext,useState } from 'react'
import products from '../components/products'

export const CartContext=createContext([])
export const CartProvider = ({children}) => {
   const [items, setItems] = useState([
])
   const isInCart=(id)=>{
    const found=items.find(item=>item.id==id)
    return found
   }
   const addItem = (products,qty)=>{
       isInCart(products.id)?
       setItems(items.map((prod)=>{
           if(prod.id==products.id){
               prod.qty+=products.qty
           }
           return prod
       }))
       :
        setItems([...items,{id:products.id,name:products.name,price:products.price, qty:qty}])
   }
   const removeItem=(id)=>{
       setItems(items.filter(product=>products.id !=id))
   }
   const clearItems = () =>{
       setItems([])
   }
   return(
       <CartContext.Provider value={{items,addItem,removeItem,clearItems}}>
           {children}
       </CartContext.Provider>
   )
}

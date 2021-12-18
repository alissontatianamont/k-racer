import {useState} from 'react'


const ItemCount = ({products,stock, initial,addItem}) => {

    const [qty, setNumero]=useState(initial)
   
    const mas = () =>{
        if(qty<stock){
        setNumero(qty +1)
        }
    }
    const menos= ()=>{
        if(qty>1){
        setNumero(qty - 1)
        }else{
            setNumero(1)
        }
}

    return (
        <div>
            <h1 className='count'>{qty}</h1>
           <button className='ButtonDetail' onClick={menos}>-</button>
           <button className='ButtonDetail' onClick={mas}>+</button>
           <button className='ButtonDetail'  onClick={()=>addItem(products,qty)}>agregar al carrito</button>
           
        </div>
    )
    
}


export default ItemCount

import React,{useState} from 'react'


const ItemCount = ({stock, initial}) => {

    const [count, setNumero]=useState(initial)
   
    const mas = () =>{
        if(count<stock){
        setNumero(count +1)
        }
    }
    const menos= ()=>{
        if(count>1){
        setNumero(count - 1)
        }else{
            setNumero(1)
        }
}
const alerta=()=>{
    alert("gracias por su compra")
}
    return (
        <div>
            <h1>{count}</h1>
           <button onClick={menos}>-</button>
           <button  onClick={mas}>+</button>
           <button onClick={alerta}>agregar al carrito</button>
           
        </div>
    )
    
}


export default ItemCount

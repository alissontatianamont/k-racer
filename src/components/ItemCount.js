import React,{useState} from 'react'


const ItemCount = ({stock, initial, onAdd}) => {

    const [count, setNumero]=useState(initial)
    const[aviso]=useState(onAdd)
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
    alert(aviso)
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

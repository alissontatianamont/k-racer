import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail';
import products from './products';
function Items2(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products[1])
        },2000)
    })
}
function ItemDetailContainer() {
    const[product, setProduct]=useState([]);
    useEffect(()=>{
        Items2().then((product)=>{
            setProduct(product);
        })
    },[])
    return (
        <div>
            <h1>ItemDetailContainer</h1>
        <ItemDetail key={product.id} product={product}/>

        </div>
    )
}

export default ItemDetailContainer

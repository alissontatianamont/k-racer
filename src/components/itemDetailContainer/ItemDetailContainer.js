import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail';
import { getProductById } from '../products';
import {useParams} from 'react-router-dom'

function ItemDetailContainer() {
    const[product, setProduct]=useState([]);
    

    const { paramId } = useParams()

    useEffect(() => {
        getProductById(paramId).then(item => {
            setProduct(item)
        })
        return (()=>{
            setProduct()
        })
    },[paramId])


    return (
         <div>
            <h1 className="title">-DETALLES-</h1>
            <ItemDetail  product={product}/>

        </div>
    )
}

export default ItemDetailContainer

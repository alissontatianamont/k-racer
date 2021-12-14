import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import  {getProducts}  from "../products";
import {useParams} from 'react-router-dom'

function ItemListContainer  ({greeting}) {

    const [products, setProducts] = useState([]);
    const {categoryId}=useParams()

    useEffect(() => {
    getProducts(categoryId).then((item) => {
    setProducts(item); 
});
    return(()=>{
        setProducts([])
    })
},[categoryId]);
    return (
    <>
    <h1 className="title">{greeting}</h1>
    <ItemList product={products} />
    </>
);
};

export default ItemListContainer;
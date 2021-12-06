import { useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import  {getProducts}  from "./products";

function ItemListContainer  ({greeting}) {

    const [products, setProducts] = useState([]);

    useEffect(() => {
    const list = getProducts();
    list.then((list) => {
    setProducts(list);});
});
    return (
    <>
    <h1>{greeting}</h1>
    <ItemList product={products} />
    <ItemCount stock={20} initial={1}/>
    </>
);
};

export default ItemListContainer;
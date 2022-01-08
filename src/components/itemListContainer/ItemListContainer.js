import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import {useParams} from 'react-router-dom'
import {collection,getDocs, query,where} from 'firebase/firestore'
import{db} from '../../servces/firebase/firebase'


function ItemListContainer  ({greeting}) {

    const [products, setProducts] = useState([]);
    const {categoryId}=useParams()

    useEffect(() => {
        if(!categoryId){
    getDocs(collection(db,'items')).then((querySnapshot)=>{
        console.log(querySnapshot);
        const products=querySnapshot.docs.map(doc=>{
            console.log(doc);
            return{
                id:doc.id,...doc.data()
            }
        })
        setProducts(products)
    }).catch((error)=>{
        console.log('error base de datos',error );
    })
}else{
    getDocs(query(collection(db,'items'),where('category','==',categoryId))).then((querySnapshot)=>{
        console.log(querySnapshot);
        const products=querySnapshot.docs.map(doc=>{
            console.log(doc);
            return{
id:doc.id,...doc.data()}
        })
        setProducts(products)
    }).catch((error)=>{
        console.log('error base de datos',error );
    })
}
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
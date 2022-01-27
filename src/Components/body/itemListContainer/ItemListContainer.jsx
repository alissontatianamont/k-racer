import ItemList from './itemList/ItemList';
import {collection,getDocs, query,where} from 'firebase/firestore'
import { db } from '../../../service/firebase/firebase';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../../Nav/NavBar.css';

const ItemListContainer = () => {

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
        <div>
           
                <div>
                    <div className='product1'><p>TIENDA VIRTUAL</p></div>
                    <h1 className="product1">{categoryId}</h1>
                    <ItemList products={products} />
                </div>
         
        </div>
    );
};

export default ItemListContainer;

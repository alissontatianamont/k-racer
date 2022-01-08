import React, { useEffect, useState, useContext } from 'react';
import ItemDetail from './ItemDetail';
import ItemCount from './ItemCount';
import { useParams, Link } from 'react-router-dom';
import CartContext from '../../context/CartContext';
import {getDoc,doc} from 'firebase/firestore'
import{db} from '../../servces/firebase/firebase'

function ItemDetailContainer() {
    const [product, setProduct] = useState([]);
    const { addItem, addQuantity, isInCart } = useContext(CartContext);
    const [add, setAdd] = useState(false);
    const [ purchase, setPurchase] = useState(false);
    const { paramId } = useParams();

    const onAdd = (quantity) => {
        //Falta preguntar si supera el stock cuando existe el producto
        if (quantity > 0) {
            let productoRecibido = isInCart(product.id);
            if (!productoRecibido) {
                setAdd(true);
                addItem({ product, quantity });
                addQuantity(quantity);
                window.alert(`¡Agregada la cantidad de ${quantity} de ${product.name} a tu carrito!`);
                addQuantity(quantity);
                setPurchase(true);
            }else{
               alert('no entró');
            }
    
        } else {
            alert('No ingresaste una cantidad valida');
        }
    };
    

    useEffect(() => {
        getDoc(doc(db,'items',paramId)).then((querySnapshot)=>{
            console.log(querySnapshot);
            const product={  id:querySnapshot.id,...querySnapshot.data()}
            setProduct(product)
        }).catch((error)=>{
            console.log('error base de datos',error );
        })
        return () => {
            setProduct();
        };
    }, [paramId]);

    return (
        <div>
            
                <div>
                    <h1 className="title">-DETALLES-</h1>
                    <ItemDetail product={product} />
                    {!add ? (
                        <ItemCount item={product} stock={20} initial={0} onAdd={onAdd} />
                    ) : (
                        <Link className="ButtonDetail" to={'/cart'}>
                            FINALIZAR COMPRA
                        </Link>
                    )}
                </div>
           
        </div>
    );
}

export default ItemDetailContainer;
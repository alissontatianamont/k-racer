import React, { useEffect, useState, useContext } from 'react';

import ItemDetail from './ItemDetail';
import ItemCount from './ItemCount';
import { getProductById } from '../products';
import { useParams, Link } from 'react-router-dom';
import CartContext from '../../context/CartContext';

function ItemDetailContainer() {
    const [product, setProduct] = useState([]);
    const { addItem, addQuantity, isInCart } = useContext(CartContext);
    const [add, setAdd] = useState(false);
    const [purchase, setPurchase] = useState(false);
    const { paramId } = useParams();

    const onAdd = (quantity) => {
        //Falta preguntar si supera el stock cuando existe el producto
        if (quantity > 0) {
            if (!isInCart(product.id)) {
                setAdd(true);
                addItem({ product, quantity });
                addQuantity(quantity);
            } else {
               // product.stock + quantity <=
                console.log('no entró');
            }
        } else {
            alert('No ingresaste una cantidad valida');
        }
    };

    useEffect(() => {
        getProductById(paramId).then((item) => {
            setProduct(item);
            setPurchase(true);
        });
        return () => {
            setProduct();
        };
    }, [paramId]);

    return (
        <div>
            {purchase ? (
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
            ) : (
                <div className="title">cargando...</div>
            )}
        </div>
    );
}

export default ItemDetailContainer;
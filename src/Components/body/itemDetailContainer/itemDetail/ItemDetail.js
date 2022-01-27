import React, { useState, useContext } from 'react';

import { Link } from 'react-router-dom';
import '../../../Nav/NavBar.css'
import ItemCount from '../itemCount/ItemCount';
import CartContext from '../../../../context/CartContext';
import NotificationContext from '../../../../context/NotificationContext';

const ItemDetail = ({ item }) => {
    const { addItemCart } = useContext(CartContext);
    const { setNotification } = useContext(NotificationContext);

    const [purchase, setPurchase] = useState(false);

    const onAdd = (count) => {
        let itemCart = addItemCart({ item, count });

        if (itemCart) {
            setNotification('succes', `¡Has añadido ${count}  ${item.name} a tu carrito!`);
            setPurchase(true);
        } else {
            setNotification('error', `Stock insuficiente`);
            setPurchase(false);
        }
    };

    return (
        <div className='tarjetasD'>
            <h1 className="product">Producto Seleccionado</h1>
            <h2> {item.name} </h2>
            <div className="">
                <img src={item.img} alt="Imagen" />
                <div>
                    <p>
                        <span>Descripcion:</span> {item.info}
                    </p>
                    <p>
                        <span>Precio:</span> ${item.price}
                    </p>
                    <div>
                        <p>
                            <span>Stock Disponible:</span> {item.stock}
                        </p>
                        {!purchase ? (
                            <ItemCount getStock={item.stock} onAdd={onAdd} getInitial={1} />
                        ) : (
                            <div className="link">
                                <div>
                                    <Link className="ButtonDetail" to={'/'}>
                                        Seleccionar otro Artículo
                                    </Link>
                                </div>
                                <br/>
                                <div>
                                    <Link className="ButtonDetail" to={'/cart'}>
                                        Ir al Carrito
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;
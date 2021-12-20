import React, { useContext } from 'react';
import CartContext from '../context/CartContext';

const ItemCart = ({ item, quantity }) => {
    const { removeItem,values } = useContext(CartContext);

    const removeItems = () =>{
        removeItem(item.id, quantity);
    }

    return (
        <div>
            <div className="ItemCar">
                <img src={item.img} alt="Imagen" />
                <h1> {item.name} </h1>
                <p style={{ color: 'white' }}>{values.quantity}</p>
                <button onClick={removeItems}>X</button>
            </div>
        </div>
    );
};

export default ItemCart;
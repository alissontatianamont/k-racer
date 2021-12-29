import React, { useContext } from 'react';
import CartContext from '../context/CartContext';

const ItemCart = ({ item, quantity }) => {
    const { removeItem} = useContext(CartContext);

    const removeItems = () =>{
        removeItem(item.id, quantity);
    }
  

    return (
        <div>
            <div className="ItemCar">
                <img src={item.img} alt="Imagen" />
                <h1> {item.name} </h1>
                <p style={{ color: 'white' }}>{quantity}</p>
                <button onClick={removeItems}>X</button>
                
            </div>
        </div>
    );
};

export default ItemCart;
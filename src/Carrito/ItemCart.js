import React, { useContext } from 'react';
//import CartContext from '../../../../context/CartContext';

const ItemCart = ({ item }) => {
   // const { removeItemCart } = useContext(CartContext);

    

    return (
        <div>
            <div className="ItemCar">
                <img src={item.product.img} alt="Imagen" />
                <h1> {item.product.name} </h1>
            </div>
        </div>
    );
};

export default ItemCart;
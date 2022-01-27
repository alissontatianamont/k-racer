import React, { useContext } from 'react';
import CartContext from '../../../../context/CartContext';

const ItemCart = ({ item, count }) => {
    const { removeItemCart } = useContext(CartContext);

    const removeItem = () => {
        removeItemCart(item.id);
    };

    return (
        <tbody >
            <tr className="cart">
                <td>
                    <img src={item.img} alt="Imagen" />
                </td>
                <td>
                    <h1> {item.name} </h1>
                </td>
                <td>
                    <h2 className="Count">{count}</h2>
                </td>
                <td>
                    <h2 className="Price">${item.price * count}</h2>
                </td>
                <td>
                    <i onClick={removeItem} className="far fa-times-circle"></i>
                </td>
            </tr>
        </tbody>
    );
};

export default ItemCart;

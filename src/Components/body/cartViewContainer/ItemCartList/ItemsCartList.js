import React from 'react';
import ItemCart from './ItemCart';

export const ItemsCartList = ({ items, total }) => {
    return (
        <table className="cart">
            <thead className="header">
                <tr>
                    <th>Productos</th>
                    <th>Nombre</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                    <th></th>
                </tr>
            </thead>
            {items.map((item) => (
                <ItemCart  key={item.item.id} item={item.item} count={item.count} />
            ))}
            <tfoot>
                <tr className="cart">
                    <td></td>
                    <td></td>
                    <td>
                        <h2>Total:</h2>
                    </td>
                    <td>
                        <h2>${total}</h2>
                    </td>
                    <td></td>
                </tr>
            </tfoot>
        </table>
    );
};

export default ItemsCartList;

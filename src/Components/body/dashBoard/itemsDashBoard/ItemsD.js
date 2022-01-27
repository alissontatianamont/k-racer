import React from 'react';
import '../../../Nav/NavBar.css'

const ItemsD = ({ product }) => {
    return (
        <div className="ItemsD">
            <h1>REFERENCIA: {product.id}</h1>
            <h2>{product.buyer.email}</h2>
            <p>Productos:</p>
            {product.items.length > 0 &&
                product.items.map((item) => {
                    return (
                        <ul className="ulItemsD" key={item.item.id}>
                            <li>{item.item.name}</li>
                            <li>${item.item.price}</li>
                            <li>x{item.count}</li>
                        </ul>
                    );
                })}
            <h3>Total: ${product.total}</h3>
        </div>
    );
};

export default ItemsD;

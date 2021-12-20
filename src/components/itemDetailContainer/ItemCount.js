import { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {
    const [qty, setNumero] = useState(initial);

    const mas = () => {
        if (qty < stock) {
            setNumero(qty + 1);
        }
    };
    const menos = () => {
        if (qty > 1) {
            setNumero(qty - 1);
        } else {
            setNumero(1);
        }
    };
    const add = () => {
        onAdd(qty);
    };
    return (
        <div>
            <h1 className="count">{qty}</h1>
            <button className="ButtonDetail" onClick={menos}>
                -
            </button>
            <button className="ButtonDetail" onClick={mas}>
                +
            </button>
            <button className="ButtonDetail" onClick={add}>
                agregar al carrito
            </button>
        </div>
    );
};

export default ItemCount;
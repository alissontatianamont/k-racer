import { useState } from 'react';

const ItemCount = ({ getStock, getInitial, onAdd }) => {
    const [stock] = useState(getStock);
    const [count, setCount] = useState(getInitial);

    const handleAdd = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    const handleRemove = () => {
        if (count > getInitial) {
            setCount(count - 1);
        }
    };
    const add = () => {onAdd(count)};
    return (
        <div className="itemCount">
                <div>
                    <div className="contador">
                        <button className="ButtonDetail" onClick={handleRemove}>-</button>
                        <span className='number'>{count}</span>
                        <button className="ButtonDetail" onClick={handleAdd}>+</button>
                    </div>
                    <button className="ButtonDetail" onClick={add}>Agregar al Carrito</button>
                </div>
        </div>
    );
};

export default ItemCount;

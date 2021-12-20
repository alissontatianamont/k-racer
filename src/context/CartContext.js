import React, { useState } from 'react';

const Context = React.createContext();

export const CartContext = ({ children }) => {
    const [items, setItems] = useState([]);
    const [quantity, setQuantity] = useState(0);

    const addItem = (product) => {
        console.log(product);
        setItems([...items, product]);
        console.log(items);
        // setTotal(total + (item.product.price * item.count));
    };
    const isInCart = (itemId) => {
        return items.find((item) => item.product.id === itemId);
    };

    const removeItem = (id,itemQuantity) => {
        setItems(items.filter((item) => item.product.id !== id));
        setQuantity(quantity - itemQuantity);
    };
    const clearItems = () => {
        setItems([]);
    };
    const addQuantity = (itemQuantity) => {
        setQuantity(quantity + itemQuantity);
    }
       const addQuantityById = (id, itemQuantity) => {
        const item = items.find((item) => item.product.id === id);
        item.count = item.qty + itemQuantity;
        addQuantity(itemQuantity);
    };

    return (
        <Context.Provider value={{ values: { items, quantity }, addItem, addQuantity, removeItem, clearItems,addQuantityById, isInCart }}>
            {children}
        </Context.Provider>
    );
};

export default Context;
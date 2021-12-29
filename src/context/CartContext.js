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
        setQuantity(0)
    };
    const addQuantity = (itemQuantity) => {
        setQuantity(quantity + itemQuantity);
    }
     

    return (
        <Context.Provider value={{ values: { items, quantity }, addItem, addQuantity, removeItem, clearItems, isInCart }}>
            {children}
        </Context.Provider>
    );
};

export default Context;
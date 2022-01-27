import React, { useState } from 'react';

const Context = React.createContext();

export const CartContext = ({ children }) => {
    const [itemCart, setItemCart] = useState([]);

    const addItemCart = (item) => {
        const flag = isInCart(item);

        if (!flag) {
            setItemCart([...itemCart, item]);
            return true;
        } else {
            let productRepeat = itemCart.find((product) => product.item.id === item.item.id);

            if (productRepeat.count + item.count <= productRepeat.item.stock) {
                productRepeat.count += item.count;
                let productNoRepeat = itemCart.filter((product) => product.item.id !== item.item.id);
                setItemCart([...productNoRepeat, productRepeat]);
                return true;
            } else {
                return false;
            }
        }
    };

    const getCount = () => {
        let subTotal = 0;
        itemCart.forEach((item) => {
            subTotal += item.count;
        });
        return subTotal;
    };

    const getTotal = () => {
        let subTotal = 0;

        itemCart.forEach((item) => {
            subTotal += item.count * item.item.price;
        });
        return subTotal;
    };

    const clearItems = () => {
        setItemCart([]);
    };

    const isInCart = (item) => {
        return itemCart.some((itemCart) => itemCart.item.id === item.item.id);
    };

    const removeItemCart = (itemId) => {
        setItemCart(itemCart.filter((item) => item.item.id !== itemId));
    };

    return (
        <Context.Provider
            value={{
                values: {
                    itemCart,
                },
                addItemCart,
                getCount,
                getTotal,
                clearItems,
                removeItemCart,
            }}
        >
            {children}
        </Context.Provider>
    );
};

export default Context;

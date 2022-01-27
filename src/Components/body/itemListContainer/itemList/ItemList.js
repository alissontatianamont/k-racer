import React from 'react';
import Item from './Item';

const ItemList = ({ products }) => {
    return (
        <div className="listProduct">
            {products.map((item) => {
                return <Item key={item.id} product={item} />;
            })}
        </div>
    );
};

export default ItemList;

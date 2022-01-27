import React from 'react'
import ItemD from './ItemsD'

const ItemsDashBoard = ({products}) => {
    return (
        <div className="itemsDash">
            {products.map(product => {
                return <ItemD key={product.id} product={product}></ItemD>
            })}
        </div>
    )
}

export default ItemsDashBoard

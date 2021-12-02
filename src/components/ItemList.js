import Item from "./Item"
const ItemList = ({product}) => {
    return(
        <div>
            <ul>
                {product.map(product =><Item key={product.id} product={product}/>)}
            </ul>
        </div>
    )
}

export default ItemList
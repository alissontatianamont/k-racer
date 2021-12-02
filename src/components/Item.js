import "./nav.css"
const Item = ({product}) => {
    return(
    <div className="tarjetas">
        <div>
            <h2>
                {product.name}
            </h2>
        </div>
        <img className="imagen"src={product.img} alt={product.name}/>
        <p>
        Precio: {product.price}
        </p>
        <button>Ver detalles</button>
    </div>)
}

export default Item
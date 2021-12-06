import "./nav.css"
const ItemDetail = ({product}) => {
    return(
    <div className="tarjetas">
       <div>
        <h2>{product.name}</h2>
        <img className="imagen"src={product.img} alt={product.name}/>
        <p>Precio: {product.price} </p>
        <button>Ver detalles</button>
       </div>
    </div>)
};

export default ItemDetail
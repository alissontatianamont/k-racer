import '../navBar/nav.css';

function ItemDetail({ product }) {
    return (
        <div>
            <div className="tarjetasD">
                <h2>{product.name}</h2>
                <img className="imagen" src={product.img} alt={product.name} />
                <p className="price">Precio: {product.price} </p>
                <p className="detalles">ACERCA DE: {product.info}</p>
            </div>
        </div>
    );
}

export default ItemDetail;
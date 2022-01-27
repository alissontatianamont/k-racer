import { Link } from 'react-router-dom';

const Item = ({ product }) => {
    return (
        
        <div className="tarjetas">
        <div className='contenedor'>
            <figure>
            <img src={product.img} alt="Imagen" />
            <div className='capa'>
            <h1 className='price'> {product.name} </h1>
            <p className="price">${product.price}</p>
            {product.stock > 0 ? (
                <Link to={`/item/${product.id}`} className="ButtonDetail">
                    ver detalle del producto
                </Link>
            ) : (
                <h2 className="spanBlock">Stock No Disponible</h2>
            )}
            </div>
            </figure>
            </div>
        </div>
    );
};
export default Item;

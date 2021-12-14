import "../navBar/nav.css"
import { Link } from 'react-router-dom'
const Item = ({product}) => {
    return(
    <div className="tarjetas">
    <div className="contenedor">
       <figure>
        <img src={product.img} alt={product.name}/>
        <div className="capa">
            <h2>{product.name}</h2>
            <br/>
            <div className="efecto">
            <p className="price">Precio: {product.price}</p>
            <br/>
            <br/>
            <Link className='ButtonDetail' to={`/detail/${product.id}`}>Ver detalle</Link>
            </div>
        </div>
        </figure>
    </div>
    </div>)}

export default Item
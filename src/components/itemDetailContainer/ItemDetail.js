import { useContext, useState } from "react";
import "../navBar/nav.css"
import ItemCount from "./ItemCount";
import {Link} from 'react-router-dom';
import { CartContext } from "../../context/useContext";
function ItemDetail({ product }) {
  const [add, setAdd] = useState(false);
  const {addItem}=useContext(CartContext)
  return (
    <div>
      {product?.length !== 0 ? (
        <div className="tarjetasD">
          <h2>{product.name}</h2>
          <img className="imagen" src={product.img} alt={product.name} />
          <p className="price">Precio: {product.price} </p>
          <p className="detalles">ACERCA DE: {product.info}</p>
          {
             add ? <div className="price">¡Añadido!</div> :
            <ItemCount item={product} stock={20} initial={1} addItem={addItem} />
            }
          <Link className="ButtonDetail" to={'/cart'}>FINALIZAR COMPRA</Link>
        </div>

      ) : (<div className="title">cargando...</div>)}
    </div>);
}

export default ItemDetail
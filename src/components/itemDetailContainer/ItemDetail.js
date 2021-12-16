import { useState } from "react";
import "../navBar/nav.css"
import ItemCount from "./ItemCount";
import {Link} from 'react-router-dom';
function ItemDetail({ product }) {
  const [add, setAdd] = useState(false);
  const onAdd = () => {
    setAdd(!add);
  };
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
            <ItemCount stock={20} initial={1} onAdd={onAdd} />
            }
          <Link className="ButtonDetail" to={'/cart'}>FINALIZAR COMPRA</Link>
        </div>

      ) : (<div className="title">cargando...</div>)}
    </div>);
}

export default ItemDetail
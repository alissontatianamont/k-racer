import "../navBar/nav.css"
import ItemCount from "./ItemCount";
const ItemDetail = ({product}) => {
    return(
    <div >
     {product?.length !==0?(
           <div className="tarjetasD">
           <h2>{product.name}</h2>
           <img className="imagen"src={product.img} alt={product.name}/>
           <p className="price">Precio: {product.price} </p>
            <p className="detalles">ACERCA DE: {product.info}</p>
            <ItemCount stock={20} initial={1}/>
          </div>
     ):(<div className="title">cargando...</div>)}
    </div>)
};

export default ItemDetail
import "./nav.css"
const ItemDetail = ({product}) => {
    return(
    <div >
     {product?.length !==0?(
           <div className="tarjetas">
           <h2>{product.name}</h2>
           <img className="imagen"src={product.img} alt={product.name}/>
           <p>Precio: {product.price} </p>
            <p>ACERCA DE: {product.info}</p>
          </div>
     ):(<div>cargando...</div>)}
    </div>)
};

export default ItemDetail
import React, { useContext } from "react";
import CartContext from "../context/CartContext";
import Cart from "./Cart";
import { Link } from 'react-router-dom';
const CartViewContainer = () => {
  const clear = () => {
    clearItems([]);
  };
  const { values, clearItems } = useContext(CartContext);
  return (
    <div>
      {values.items.length === 0 ? (
        <>
        <h1 style={{color:'white',textAlign:'center'}}>TU CARRITO ESTA VACIO, ¡REGRESA POR TUS PRODUCTOS FAVORITOS!</h1>
        <button className="ButtonDetail2"><Link  className="title" to={'/'}>
                VOLVER A MENU DE INICIO
            </Link></button>
            </>
      ) : (
        <>
          <Cart items={values.items} />
          <p style={{ color: "white" }}>{values.quantity}</p>
          <button onClick={clear}>CLEAR ALL</button>
        </>
      )}
    </div>
  );
};
export default CartViewContainer;
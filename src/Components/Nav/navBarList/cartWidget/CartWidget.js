import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import Context from '../../../../context/CartContext';

const CartWidget = () => {
    const { getCount } = useContext(Context);

    return (
        <div>
        <Link to={'/cart'} className="CartWidget" >
           <div className='carrito'>  <i className="fas fa-shopping-cart "></i></div>
            <p className='count'>{getCount()}</p>
        </Link>
        </div>
    );
};

export default CartWidget;

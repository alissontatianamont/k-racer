import React from 'react'
import './nav.css'
import './CartWidget'
import CartWidget from './CartWidget'

const NavBar = () => {
    return (
        <div className="menu">
            <h3>K-RACER</h3>
       <ul className="padreList">
           <li className="list"><a href="/#">HOME</a></li>
           <li className="list"><a href="/#">PAQUETES</a></li>
           <li className="list"><a href="/#">PORTAFOLIO</a></li>
           <li className="list"><a href="/#">CONTÁCTO</a></li>
           <CartWidget/>
       </ul>
       
     </div>
    )
}

export default NavBar

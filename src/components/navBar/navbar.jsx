import React from 'react';
import './nav.css';
import './CartWidget';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import { getCategories } from '../products';
import { useEffect, useState } from 'react';

const NavBar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories().then((categories) => {
            setCategories(categories);
        });
    }, []);
    // console.log(categories);
    return (
        <div className="menu">
            <h3>
                <Link className="logo" to={'/'}>
                    K-RACER
                </Link>
            </h3>
            <Link className="title" to={'/'}>
                inicio
            </Link>
            <ul className="padreList">
                <div>
                    {categories.map((cat) => (
                        <Link className="title" key={cat.id} to={`/category/${cat.id}`}>
                            {cat.description}
                        </Link>
                    ))}
                </div>
                <CartWidget />
            </ul>
        </div>
    );
};

export default NavBar;
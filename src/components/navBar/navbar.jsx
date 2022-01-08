import React from 'react';
import './nav.css';
import './CartWidget';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { db } from '../../servces/firebase/firebase';
import {collection,getDocs} from 'firebase/firestore'

const NavBar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getDocs(collection(db,'categories')).then((querySnapshot)=>{
            const categories=querySnapshot.docs.map(doc=>{
                return{id:doc.id, ...doc.data()}
            })
            setCategories(categories)
        })
        
    }, []);
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
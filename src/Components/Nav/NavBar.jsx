import './NavBar.css';

import NavBarList from './navBarList/NavBarList';

import { useEffect, useState } from 'react';

import { getFirebase } from '../../service/firebase/productService';

const NavBar = () => {
    const [category, setCategory] = useState([]);

    useEffect(() => {
        getFirebase('categories')
            .then((res) => {
                setCategory(res);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <NavBarList categories={category} />
        </div>
    );
};

export default NavBar;

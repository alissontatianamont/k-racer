import React from 'react';

import '../Nav/NavBar.css';

const Loader = () => {
    return (
        <div>
            <h2>Cargando...</h2>
            <div className="lds-facebook">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Loader;

import React, { useState } from 'react';

const Context = React.createContext();

export const UserContext = ({ children }) => {
    const [email, setEmail] = useState('');

    const updateEmail = (email) => {
        setEmail(email);
    };

    return (
        <Context.Provider
            value={{
                values: {
                    email,
                },
                updateEmail,
            }}
        >
            {children}
        </Context.Provider>
    );
};

export default Context;

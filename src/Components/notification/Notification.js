import React, { useContext } from 'react';
import Context from '../../context/NotificationContext';

import '../Nav/NavBar.css';

const Notification = () => {
    const { notification, setNotification } = useContext(Context);
    if (notification.message === '') {
        return null;
    }
    return (
        <div className="notification" style={{color: notification.severity === 'error' ? 'red' : 'black' }} onClick={() => setNotification('succes', '')}>
            <h1>{notification.message}</h1>
        </div>
    );
};

export default Notification;

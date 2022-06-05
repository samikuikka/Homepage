import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeNotification } from '../reducers/notificationReducer';

import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const Notification = () => {

    const dispatch = useDispatch();
    const notification = useSelector(state => state.notification);

    const handleClose = (event, reason) => {
        //Do nothing if user not in tab or snackbar already closed
        if(reason === 'clickaway' || !notification.open) {
            return;
        }

        dispatch(closeNotification());
    }

    return (
        <Snackbar open={notification.open} autoHideDuration={3000} onClose={handleClose}>
            <Alert severity={notification.severity} onClose={handleClose}>
                {notification.message}
            </Alert>
        </Snackbar>
    );
}

export default Notification;

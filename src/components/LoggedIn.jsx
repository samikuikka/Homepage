import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../reducers/userReducer';
import { setNotification } from '../reducers/notificationReducer';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const LoggedIn = () => {
    const auth = useSelector(state => state.user);
    let dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
        window.localStorage.removeItem('user');
        dispatch(setNotification({ severity: 'success', message: 'User logout'}))
    }

    if(auth.user) {
        return(
            <Button color="inherit" onClick={handleLogout}>
                Logout
            </Button>
        )
    }

    return(
        <Button color="inherit" component={Link} to="/login">
            Login
        </Button>
    )
}

export default LoggedIn;
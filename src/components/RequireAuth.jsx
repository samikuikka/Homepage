import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation, Navigate } from 'react-router';


const RequireAuth = ( { children } ) => {
    let auth = useSelector(state => state.user);
    let location = useLocation();
    if(!auth.user) {
        console.log('got here');
        return <Navigate to="/login" state={{ from: location}} replace />
    }

    return children;
}

export default RequireAuth;
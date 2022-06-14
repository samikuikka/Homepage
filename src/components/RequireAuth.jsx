import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, Navigate } from 'react-router';
import { login } from '../reducers/userReducer';


const RequireAuth = ( { children } ) => {
    let user = useSelector(state => state.user);
    let location = useLocation();
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)

  // Automatically log in if user still in local storage
  useEffect(() => {
    const loggedUser = window.localStorage.getItem('user');
    if (!user.user) {
      const user = JSON.parse(loggedUser);
      dispatch(login(user));
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if(loading && !user.user) {
      return (
          'loading...'
      );
  }

    if(!user.user) {
        return <Navigate to="/login" state={{ from: location}}  replace/>
    }

    return children;
}

export default RequireAuth;
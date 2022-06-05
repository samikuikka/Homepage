import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Routes, Route, Navigate
} from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux';
import { login } from './reducers/userReducer';

import About from './routes/About';
import Home from './routes/Home';
import Tasks from './routes/Tasks';
import Login from './routes/Login';
import Header from './components/Header';
import Register from './routes/Register';
import Notification from './components/Notification';
import RequireAuth from './components/RequireAuth';


import { Container } from '@mui/material'
import theme from './theme'
import { ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';


function App() {

  const user = useSelector(state => state.user);
  const dispatch = useDispatch()

  // Automatically log in if user still in local storage
  useEffect(() => {
    const loggedUser = window.localStorage.getItem('user');
    if (user) {
      const user = JSON.parse(loggedUser);
      dispatch(login(user));
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container disableGutters maxWidth='false' sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '1'
      }}>
        <Header />

        <Box sx={{ flexGrow: '1', width: '100%' }}>
          <Routes>
            <Route path="/about" element={
              <RequireAuth>
                <About />
              </RequireAuth>
            }
            />
            <Route path="/tasks" element={
              <RequireAuth>
                <Tasks />
              </RequireAuth>
            }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Box>

        <Notification />

      </Container>
    </ThemeProvider>
  );
}

export default App;

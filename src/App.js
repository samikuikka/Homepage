import React, { useEffect } from 'react'
import {
  Routes, Route
} from "react-router-dom"
import projectServices from './services/projects';
import { setNotes } from './reducers/projectReducer';
import { useDispatch } from 'react-redux';

import About from './routes/About';
import Home from './routes/Home';
import Tasks from './routes/Tasks';
import Login from './routes/Login';
import Projects from './routes/Projects';
import Header from './components/Header';
import Register from './routes/Register';
import Notification from './components/Notification';
import RequireAuth from './components/RequireAuth';


import { Container } from '@mui/material'
import theme from './theme'
import { ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';


function App() {
  const dispatch = useDispatch();

  //Initialize projects
  useEffect( () => {
    projectServices.initializeNotes().then( notes => {
      dispatch(setNotes(notes));
    }
    )
  })

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
            <Route path="/projects" element={
              <RequireAuth>
                <Projects />
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

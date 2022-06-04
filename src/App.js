import React from 'react'
import {
  BrowserRouter as Router,
  Routes, Route, Link
} from "react-router-dom"
import About from './routes/About';
import Home from './routes/Home';
import Tasks from './routes/Tasks';
import Login from './routes/Login';
import { Container } from '@mui/material'
import Header from './components/Header';
import theme from './theme'
import { ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';


function App() {

  return (
    <ThemeProvider theme={theme}>
      <Container  disableGutters maxWidth='false' sx={{
         display: 'flex',
         flexDirection: 'column',
         height: '1'
         }}>
        <Header />

        <Box sx={{ flexGrow: '1', width: '100%'}}>
          <Routes>
            <Route path="/about" element={<About/>} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Box>
   
    </Container>
    </ThemeProvider>
  );
}

export default App;

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


function App() {

  return (
    <ThemeProvider theme={theme}>
      <Container  disableGutters maxWidth='false' >
        <Header />
   
        <Routes>
          <Route path="/about" element={<About/>} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
        </Routes>
   
    </Container>
    </ThemeProvider>
  );
}

export default App;

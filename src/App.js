import React from 'react'
import {
  BrowserRouter as Router,
  Routes, Route, Link
} from "react-router-dom"
import About from './routes/About';
import Home from './routes/Home';
import Tasks from './routes/Tasks';
import style from './styles/header.js';

function App() {

  const padding = {
    padding: 5
  }

  return (
    <div>
      <div style={style.container}>
        <div style={style.links}>
          <Link style={padding} to="/">Home</Link>
          <Link style={padding} to="/tasks">Tasks</Link>
          <Link style={padding} to="/about">About</Link> 
        </div>  
      </div>

      <Routes>
        <Route path="/about" element={<About/>} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/" element={<Home />} />
      </Routes>

      <div className="footer">
        "Footer text"
      </div>
    </div>
  );
}

export default App;

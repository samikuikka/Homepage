import React from 'react'
import {
  BrowserRouter as Router,
  Routes, Route, Link
} from "react-router-dom"
import About from './routes/About';
import Home from './routes/Home';
import Tasks from './routes/Tasks';
import './styles/header.css'

function App() {

  const padding = {
    padding: 5
  }

  return (
    <div>
      <div className="navigation">
        <div id="nav-left">
            <li><Link  to="/">Home</Link></li>
            <li><Link  to="/tasks">Tasks</Link></li>
            <li><Link  to="/about">About</Link></li>
        </div>
        <div id="nav-right">
            <li><Link  to="/login">Login</Link></li>
            <li><Link  to="/register">Register</Link></li>
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

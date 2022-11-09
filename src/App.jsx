import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import NavbarProva from './components/navbarProva';

const App = () => {
  return (
    <Router>
    <NavbarProva/>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
    </Router>
  )
}



export default App
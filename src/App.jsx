// App.js
import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Admin from './components/Admin.jsx'; 
import Layout from './components/Layout.jsx';

function App() {
  return (
<BrowserRouter>
        <Routes>
        <Route element={<Layout/>}>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/" element={<Home />} />
        </Route>
        </Routes> 
  </BrowserRouter>
  );
}

export default App;

/*Notes:
-Look into github student pack for domain name
-Copilot 
*/

import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import UXUIProjects from './components/UXUIProjects';
import WebDevProjects from './components/WebDevProjects';
import ProductProjects from './components/ProductProjects';
import Contact from './components/Contact';
import NativePlants from './components/NativePlants.js';
import GnomeStyler from './components/GnomeStyler.js';

function App() {
  return (
   <Router>
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" exact element = {<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/uxuiprojects" element={<UXUIProjects/>}/>
        <Route path="/webdevprojects" element={<WebDevProjects/>}/>
        <Route path="/productprojects" element={<ProductProjects/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/nativePlants" element={<NativePlants/>}/>
        <Route path="/gnomeStyler" element={<GnomeStyler/>}/>
      </Routes>
    </div>
   </Router>
  );
}

export default App;

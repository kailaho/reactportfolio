import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/NavBar.css';
import Logo from '../img/logo.png'

const NavBar = () => {
    return(
        <div id="NavWrapper">
                <img id="logo" alt="logo" src={Logo}/>
                <div id="nav">
                <ul>
                    <li><Link class="no_line" to="/">Home</Link></li>
                    <li><Link class="no_line" to="/about">About</Link></li>
                    <li><Link class="no_line" to="/projects">Projects</Link></li>
                    <li><Link class="no_line" to="/contact">Contact</Link></li>
                </ul>
                </div>
        </div>
    );
};

export default NavBar;
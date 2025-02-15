import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.OGhw8U24_DYJHv (1).svg'
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><img src={logo}/></li>
        <li><Link to="/home"><strong>Home</strong></Link></li>
        {/* <li><Link to="/app"><strong>App</strong></Link></li> */}
        {/* <li><Link to="/type"><strong>Type Practice</strong></Link></li> */}
        <li><Link to="/aboutus"><strong>About Us</strong></Link></li>

      </ul>
    </nav>
  );
};

export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/compare">Compare</Link></li>
        <li><Link to="/news">News</Link></li>
        {/* Add more links as needed */}
      </ul>
    </nav>
  );
}

export default Navbar; 
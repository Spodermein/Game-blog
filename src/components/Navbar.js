import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css';

const Navbar = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link> {/* Or any extra links */}
  </nav>
);

export default Navbar;
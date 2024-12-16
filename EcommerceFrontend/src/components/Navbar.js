import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">E-Commerce</Link>
        <ul className="navbar-menu">

          <li className="navbar-item">
            <Link to="/" className="navbar-links">Home</Link>
          </li>

          <li className="navbar-item">
            <Link to="/products" className="navbar-links">Products</Link>
          </li>

          <li className="navbar-item">
            <Link to="/about" className="navbar-links">About</Link>
          </li>

          <li className="navbar-item">
            <Link to="/contact" className="navbar-links">Contact</Link>
          </li>

          <li className="navbar-item">
            <Link to="/merchants" className="navbar-links">Merchants</Link>
          </li>

          <li className="navbar-item">
            <Link to="/add-merchant" className="navbar-links">Add Merchant</Link>
          </li>

          <li className="navbar-item">
            <Link to="/users" className="navbar-links">Users</Link>
          </li>

          <li className="navbar-item">
            <Link to="/add-user" className="navbar-links">Add User</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

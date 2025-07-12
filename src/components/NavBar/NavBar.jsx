import React, { useState } from 'react';
import './NavBar.css';
import { FaShoppingCart, FaUser, FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

function NavBar({ openLoginModal, toggleCartModal, username, cart }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/"><img src={logo} alt="Logo" className="logo-img" /></Link>
        <Link to="/" className='brand'>MyStore</Link>
      </div>

      <div className="burger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/products" onClick={() => setMenuOpen(false)}>Products</Link></li>
        <li><Link to="/AboutUs" onClick={() => setMenuOpen(false)}>About Us</Link></li>
      </ul>

      <div className="navbar-icons">
        <div className="search-container">
          <FaSearch className="icon" />
          <input type="text" placeholder="Search..." className="search-input" />
        </div>

        <div onClick={toggleCartModal} style={{ cursor: 'pointer', position: 'relative' }}>
          <FaShoppingCart className="icon" />
          {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
        </div>

        {username ? (
          <span className="greeting">Hello {username}</span>
        ) : (
          <div onClick={openLoginModal} style={{ cursor: 'pointer' }}>
            <FaUser className="icon" />
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;

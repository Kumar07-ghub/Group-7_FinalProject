import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Users } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/dixit', label: 'Dixit Gami' },
    { path: '/rajvir', label: 'Rajvir Singh' },
    { path: '/pooja', label: 'Pooja Sharma' },
    { path: '/tarun', label: 'TarunKumar Abburi' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <Users className="nav-logo-icon" />
          <span>Portfolio Group</span>
        </Link>

        <div className={`nav-menu ${isMenuOpen ? 'nav-menu-active' : ''}`}>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link ${location.pathname === item.path ? 'nav-link-active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="nav-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <X /> : <Menu />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
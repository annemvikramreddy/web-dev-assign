import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const { pathname } = useLocation();
  const active = (path) => pathname === path ? 'active' : '';

  return (
    <nav>
      <ul className='navbar'>
        <li><Link to='/' className={active('/')}>Home</Link></li>
        <li><Link to='/about' className={active('/about')}>About</Link></li>
        <li><Link to='/dashboard' className={active('/dashboard')}>Dashboard</Link></li>
        <li><Link to='/login' className={active('/login')}>Login</Link></li>
      </ul>
    </nav>
  );
}

import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import './Dashboard.css';

export default function Dashboard() {
  const { pathname } = useLocation();
  const active = (path) => pathname.endsWith(path) ? 'active' : '';

  return (
    <div className="dashboard-page">
      <h1>Dashboard</h1>
      <nav className="dashboard-nav">
        <ul>
          <li><Link to="profile" className={active('profile')}>Profile</Link></li>
          <li><Link to="settings" className={active('settings')}>Settings</Link></li>
        </ul>
      </nav>
      <div className="dashboard-content">
        <Outlet />
      </div>
    </div>
  );
}
import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { UserContext } from '../contexts/UserContext';

export default function Footer() {
  const { theme } = useContext(ThemeContext);
  const { user, logout } = useContext(UserContext);
  return (
    <footer className="app-footer">
      <span>Theme: {theme}</span>
      {user.isLoggedIn ? (
        <>
          <span>User: {user.email}</span>
          <button onClick={logout} className="logout-btn">Logout</button>
        </>
      ) : null}
    </footer>
  );
}
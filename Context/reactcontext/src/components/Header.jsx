import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <header className="app-header">
      <h1>User Dashboard App</h1>
      <button onClick={toggleTheme} className="theme-toggle">
        {theme === 'light' ? 'Light' : 'Dark'}
      </button>
    </header>
  );
}
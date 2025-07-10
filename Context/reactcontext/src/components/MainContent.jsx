import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

export default function MainContent({ children }) {
  const { user } = useContext(UserContext);
  return (
    <main className="main-content">
      {user.isLoggedIn ? (
        <p className="welcome">Hello, {user.name}!</p>
      ) : null}
      {children}
    </main>
  );
}
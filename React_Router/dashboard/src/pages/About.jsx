import React from 'react';
import { useMatch } from 'react-router-dom';

export default function About() {
  const match = useMatch('/about');
  return (
    <div>
      <h1>About This App</h1>
      <p>This app demonstrates React Router in a Vite-powered SPA.</p>
      {match && <p>You are exactly on the About page!</p>}
    </div>
  );
}
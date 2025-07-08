import React from 'react';
export default function Card({ children }) {
  return (
    <div style={{
      background: '#fff',
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
      padding: '1rem',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      width: '80vw',
      marginBottom: '1rem'
    }}>
      {children}
    </div>
  );
}
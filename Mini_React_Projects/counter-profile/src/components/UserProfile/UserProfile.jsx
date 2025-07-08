import React, { useState } from 'react';

export default function UserProfile({ name, email, age }) {
  // state to toggle email visibility
  const [showEmail, setShowEmail] = useState(true);

  return (
    <div>
      <p>Name: {name}</p>
      {showEmail && <p>Email: {email}</p>}
      <p>Age: {age}</p>
      <button onClick={() => setShowEmail(prev => !prev)}>
        {showEmail ? 'Hide Email' : 'Show Email'}
      </button>
    </div>
  );
}
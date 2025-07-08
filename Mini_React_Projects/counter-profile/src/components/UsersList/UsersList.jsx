import React, { useState, useEffect } from 'react';
function UserItem({ user }) {
  const [showEmail, setShowEmail] = useState(true);
  return (
    <div style={{ marginBottom: '1rem' }}>
      <p>👤 {user.name}</p>
      {showEmail && <p>📧 {user.email}</p>}
      <button onClick={() => setShowEmail(prev => !prev)}>{showEmail ? 'Hide Email' : 'Show Email'}</button>
    </div>
  );
}
export default function UsersList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => { setUsers(data); setLoading(false); });
  }, []);
  if (loading) return <p>Loading...</p>;
  return <div>{users.map(user => <UserItem key={user.id} user={user} />)}</div>;
}
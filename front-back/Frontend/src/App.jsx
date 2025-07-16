import React, { useState, useEffect } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName]   = useState('');
  const BaseUrl = "http://localhost:5000";

  // Load users on mount
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const res = await fetch(`${BaseUrl}/api/users`);
    const data = await res.json();
    setUsers(data);
  };

  const handleAdd = async e => {
    e.preventDefault();
    if (!name.trim()) return;
    await fetch(`${BaseUrl}/api/users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: name.trim() })
    });
    setName('');
    fetchUsers();
  };

  const handleEdit = async user => {
    const newName = prompt(`New name for ${user.name}:`, user.name);
    if (!newName || !newName.trim()) return;
    await fetch(`${BaseUrl}/api/users/${user.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: newName.trim() })
    });
    fetchUsers();
  };

  const handleDelete = async id => {
    if (!window.confirm(`Delete user #${id}?`)) return;
    await fetch(`${BaseUrl}/api/users/${id}`, { method: 'DELETE' });
    fetchUsers();
  };

  return (
    <div style={{ maxWidth: 600, margin: '2rem auto', fontFamily: 'sans-serif' }}>
      <h1>User Management</h1>

      {/* Add User Form */}
      <form onSubmit={handleAdd} style={{ marginBottom: '1rem' }}>
        <input
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Enter name"
          required
        />
        <button type="submit" style={{ marginLeft: '0.5rem' }}>
          Add
        </button>
      </form>

      {/* User List */}
      <ul style={{ padding: 0, listStyle: 'none' }}>
        {users.map(u => (
          <li key={u.id} style={{ margin: '0.5rem 0' }}>
            <strong>{u.id}:</strong> {u.name}
            <button onClick={() => handleEdit(u)} style={{ marginLeft: '0.5rem' }}>
              Edit
            </button>
            <button onClick={() => handleDelete(u.id)} style={{ marginLeft: '0.5rem' }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

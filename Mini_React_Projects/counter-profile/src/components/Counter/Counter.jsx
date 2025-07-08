import React, { useState } from 'react';

export default function Counter() {
  // useState holds the current count value (initially 0)
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>➕ Increase</button>
      <button onClick={() => setCount(count - 1)} disabled={count === 0} style={{ margin: '0 1rem' }}>
        ➖ Decrease
      </button>
      <button onClick={() => setCount(0)}>🔁 Reset</button>
    </div>
  );
}

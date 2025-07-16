const express = require('express');
const cors = require('cors');

const app = express();

const corsOptions = {
  origin: 'http://localhost:5173',
  methods: ['GET','POST','PUT','DELETE'],
  credentials: true,            // if you need cookies, auth headers
  optionsSuccessStatus: 200     // some legacy browsers choke on 204
};

app.use(cors(corsOptions));
app.use(express.json());

// In‑memory user store
let users = [
  { id: 1, name: 'Rajesh' },
  { id: 2, name: 'Shekhar' }
];
let nextId = 3;

// Test route
app.get('/', (req, res) => {
  res.send('API is running');
});

// GET all users
app.get('/api/users', (req, res) => {
  res.json(users);
});

// POST a new user
app.post('/api/users', (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: 'Name is required' });
  const user = { id: nextId++, name };
  users.push(user);
  res.status(201).json(user);
});

// PUT update user
app.put('/api/users/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const { name } = req.body;
  const user = users.find(u => u.id === id);
  if (!user) return res.status(404).json({ message: 'User not found' });
  if (!name) return res.status(400).json({ message: 'Name is required' });
  user.name = name;
  res.json(user);
});

// DELETE a user
app.delete('/api/users/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const index = users.findIndex(u => u.id === id);
  if (index === -1) return res.status(404).json({ message: 'User not found' });
  const [deleted] = users.splice(index, 1);
  res.json(deleted);
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});

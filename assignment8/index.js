// index.js
const express = require('express');
const app = express();
const PORT = 3000;

// In-memory data store
let items = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' }
];

// Middleware to parse JSON bodies
app.use(express.json());

// GET all items
app.get('/items', (req, res) => {
  res.json(items);
});

// POST new item
app.post('/items', (req, res) => {
  const newItem = req.body;
  items.push(newItem);
  res.status(201).json(newItem);
});

// GET item by ID
app.get('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const item = items.find(item => item.id === id);
  if (!item) {
    res.status(404).json({ error: 'Item not found' });
  } else {
    res.json(item);
  }
});

// PUT update item by ID
app.put('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const updatedItem = req.body;
  const index = items.findIndex(item => item.id === id);
  if (index === -1) {
    res.status(404).json({ error: 'Item not found' });
  } else {
    items[index] = { ...items[index], ...updatedItem };
    res.json(items[index]);
  }
});

// DELETE item by ID
app.delete('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = items.findIndex(item => item.id === id);
  if (index === -1) {
    res.status(404).json({ error: 'Item not found' });
  } else {
    items.splice(index, 1);
    res.sendStatus(204);
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
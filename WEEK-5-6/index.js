const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// for store data
const inMemoryDatabase = [];

// Create
app.post('/todos', (req, res) => {
  const newTodo = req.body;
  inMemoryDatabase.push(newTodo);
  res.json(newTodo);
});

// Read (All)
app.get('/todos', (req, res) => {
  res.json(inMemoryDatabase);
});

// Read (Single)
app.get('/todos/:id', (req, res) => {
  const id = req.params.id;
  const todo = inMemoryDatabase.find(item => item.id === id);
  if (!todo) return res.status(404).json({ error: 'Todo not found' });
  res.json(todo);
});

// Update
app.put('/todos/:id', (req, res) => {
  const id = req.params.id;
  const updatedTodo = req.body;
  const index = inMemoryDatabase.findIndex(item => item.id === id);
  if (index === -1) return res.status(404).json({ error: 'Todo not found' });
  inMemoryDatabase[index] = updatedTodo;
  res.json(updatedTodo);
});

// Delete
app.delete('/todos/:id', (req, res) => {
  const id = req.params.id;
  const index = inMemoryDatabase.findIndex(item => item.id === id);
  if (index === -1) return res.status(404).json({ error: 'Todo not found' });
  inMemoryDatabase.splice(index, 1);
  res.end("iteam deleted sucessfully");
  res.sendStatus(204);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });




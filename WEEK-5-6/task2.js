const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

const Joi = require('joi');

const validateTodo = (req, res, next) => {
  const schema = Joi.object({
    title: Joi.string().min(3).max(30).required(),
    description: Joi.string().max(20),
    // Add more validation rules for your data
  });

  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  next();
};

// POST /todos - Create a new Todo with validation
app.post('/todos', validateTodo, (req, res) => {
    // If the data is valid, you can proceed to create the Todo
    const newTodo = req.body;
    // Your logic to create the Todo goes here
    res.json(newTodo);
  });  

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

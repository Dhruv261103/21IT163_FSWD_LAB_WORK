const express = require('express');
const os = require('os');

const app = express();
const port = process.env.PORT || 3000;

// Define a route to display environment variables
app.get('/environment-variables', (req, res) => {
  // Get all environment variables from the system
  const environmentVariables = process.env;

  // Send the environment variables as JSON response
  res.json(environmentVariables);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

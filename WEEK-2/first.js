const http = require('http');
const url = require('url');

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Check if the request method is POST
  if (req.method === 'POST') {
    let requestBody = '';
    
    // Read the data from the request
    req.on('data', chunk => {
      requestBody += chunk.toString();
    });
    
    // Process the request when all data has been read
    req.on('end', () => {
      // Parse the request body
      const data = JSON.parse(requestBody);
      
      // Extract the two numbers from the request body
      
      const number1=Number(data.number1);
      const number2=Number(data.number2);

      // Perform the desired operation (e.g., addition)
      const result = number1+number2;
      
      // Set the response headers
      res.writeHead(200, { 'Content-Type': 'application/json' });
      
      // Send the result as the response
      res.end(JSON.stringify({ result }));
    });
  }
  else
  {
    const result="Method is get";
    // Set the response headers
    res.writeHead(200, { 'Content-Type': 'application/json' });
      
    // Send the result as the response
    res.end(JSON.stringify({ result }));
  }
});

// Start the server and listen on a specific port
server.listen(3000, () => {
  console.log('Server running on port 3000');
});

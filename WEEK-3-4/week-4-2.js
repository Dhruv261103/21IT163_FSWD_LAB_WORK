const url = require('url');
const querystring = require('querystring');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a URL with a query string: ', (userURL) => {
  const parsedURL = url.parse(userURL);
  const queryParameters = querystring.parse(parsedURL.query);

  console.log('Query Parameters:');
  for (let key in queryParameters) {
    console.log(`${key}: ${queryParameters[key]}`);
  }

  rl.close();
});

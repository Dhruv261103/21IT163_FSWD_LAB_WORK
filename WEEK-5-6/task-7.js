
// Load the appropriate .env file based on the environment
require('dotenv').config({path:'.env'});

// Access environment variables
const dbConfig = {
host: process.env.DB_HOST,
user: process.env.DB_USER,
password: process.env.DB_PASSWORD
};
console.log('Database Configuration:', dbConfig);
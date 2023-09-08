const fs = require('fs');
const readline = require('readline');


const t7 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
function checkFileExists(filePath) {
    fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
    console.error(`Error: The file "${filePath}" does not exist.`);
    } else {
    console.log(`Success: The file "${filePath}" exists.`);
    }
        t7.close();
    });
    }
    // Example usage
t7.question('Enter the file path: ', (filePath) => {
        checkFileExists(filePath);
    });

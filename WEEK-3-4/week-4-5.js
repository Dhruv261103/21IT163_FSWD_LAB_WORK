const path = require('path');
function extractFileExtension(filePath) {
const extension = path.extname(filePath);
return extension;
}
// Example usage
const filePath = 'practice/abc.cpp';
const fileExtension = extractFileExtension(filePath);
console.log(`The file extension is: ${fileExtension}`);
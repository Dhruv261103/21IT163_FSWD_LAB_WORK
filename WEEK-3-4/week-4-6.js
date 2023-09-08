const path = require('path');
function extractDirectoryAndBaseName(filePath) {
const directoryName = path.dirname(filePath);
const baseName = path.basename(filePath);
return { directoryName, baseName };
}
// Example usage
const filePath = '/Users/mac/Desktop/JavaSrcript/practice/abc.cpp';
const { directoryName, baseName } = extractDirectoryAndBaseName(filePath);
console.log(`Directory Name: ${directoryName}`);
console.log(`Base Name: ${baseName}`);
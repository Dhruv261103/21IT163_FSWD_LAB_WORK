const path = require("path");

function areSameFile(filePath1, filePath2) {
  file1 = path.resolve(filePath1);
  file2 = path.resolve(filePath2);
  return file1 === file2;
}

if (require.main === module) {
  filePath1 = "./file1";
  filePath2 = "./file1";
  isSameFile = areSameFile(filePath1, filePath2);
  console.log(isSameFile);
  if(isSameFile){
    console.log("Same File")
  }else{
    console.log("Not a Same File")

  }
}
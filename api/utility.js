const fs = require('fs');

// Common function for reading files
function readFile(filePath, callback) {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.error(err);
      callback(err, null);
      return;
    }
    const fileData = JSON.parse(data);
    callback(null, fileData);
  });
}

// Common function for writing files
function writeFile(filePath, fileData, callback) {
  fs.writeFile(filePath, JSON.stringify(fileData), (err) => {
    if (err) {
      console.error(err);
      callback(err);
      return;
    }
    callback(null);
  });
}

module.exports = {
  readFile,
  writeFile,
};

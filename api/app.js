const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

app.use(cors());

app.get('/users', (req, res) => {
  setTimeout(() => {
    res.sendFile(path.join(__dirname, 'users.json'));
  }, 2000);
});

app.listen(8001, () => {
  console.log('Server listening on port 8001'); // Fix console log message
});

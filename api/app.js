const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const users = require('./users.json');

app.use(cors());

app.get('/users', (req, res) => {
  res.sendFile(path.join(__dirname, 'users.json'));
});

app.get('/users/:id', (req, res) => {
  const { id } = req.params;
  const user = users.find((user) => user.id === +id);
  if (!user) {
    res.status(404).send('User not found');
  } else {
    res.send(user);
  }
});

app.listen(8001, () => {
  console.log('Server listening on port 8001'); // Fix console log message
});

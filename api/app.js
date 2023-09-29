const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const cors = require('cors');
const users = require('./users.json');

app.use(cors());
app.use(express.json());

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

app.post('/users', (req, res) => {
  const { name, experience, skills } = req.body;
  const newId = Math.floor(Math.random() * 100) + 1;
  let errors = {};
  if (!name) {
    errors.name = 'Name is blank!';
  }
  if (!experience) {
    errors.experience = 'Experience is blank!';
  }
  if (!skills) {
    errors.skills = 'Skills are blank!';
  }

  if (Object.keys(errors).length > 0) {
    res.status(422).send({ error: errors });
    return;
  }
  const dummyAddress = {
    street: Math.floor(Math.random() * 100) + 1 + ' Oak St',
    city: 'Anytown',
    state: 'CA',
    zip: Math.floor(Math.random() * 100000) + 1,
  };
  const newUser = {
    id: newId,
    name,
    experience,
    skills: skills.split(','),
    avatar: `https://randomuser.me/api/portraits/men/${newId}.jpg`,
    address: dummyAddress,
  };
  users.unshift(newUser);

  fs.writeFile('./users.json', JSON.stringify(users), (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error writing to file');
    } else {
      res.status(201).send(newUser);
    }
  });
});

app.post('/users/:id/edit', (req, res) => {
  const { id } = req.params;
  const { name, experience, skills } = req.body;
  const userIndex = users.findIndex((user) => user.id === +id);
  if (userIndex === -1) {
    res.status(404).send('User not found');
  } else {
    const updatedUser = {
      ...users[userIndex],
      name,
      experience,
      skills: skills.split(','),
    };
    users[userIndex] = updatedUser;

    fs.writeFile('./users.json', JSON.stringify(users), (err) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error writing to file');
      } else {
        res.send(updatedUser);
      }
    });
  }
});

app.post('/users/:id/delete', (req, res) => {
  const { id } = req.params;
  const userIndex = users.findIndex((user) => user.id === +id);
  if (userIndex === -1) {
    res.status(404).send('User not found');
  } else {
    users.splice(userIndex, 1);

    fs.writeFile('./users.json', JSON.stringify(users), (err) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error writing to file');
      } else {
        res.send(`User with id ${id} deleted`);
      }
    });
  }
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

const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const auth = require('./auth.json');
const users = require('./users.json');
const SECRET_KEY = 'random-string';

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

app.post('/users', verifyToken, (req, res) => {
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

app.post('/users/:id/edit', verifyToken, (req, res) => {
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

app.post('/users/:id/delete', verifyToken, (req, res) => {
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

// Login endpoint
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  let error = {};

  // Check if email and password are provided
  if (!email || !password) {
    error.email = 'Email is required';
    error.password = 'Password is required';

    return res.status(400).json({ error });
  }

  // Check if email is valid
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    error.email = 'Invalid email format';
    return res.status(400).json({ error });
  }

  // Check if password is at least 6 characters long
  if (password.length < 6) {
    error.password = 'Password must be at least 6 characters long';
    return res.status(400).json({ error });
  }

  // Check if email and password match
  const user = auth.find((user) => user.email === email && user.password === password);
  if (!user) {
    error.invalidCreds = 'Invalid email or password';
    return res.status(401).json({ error });
  }

  // Generate JWT token
  const token = jwt.sign({ email }, SECRET_KEY);

  // Return token
  res.json({ token });
});

// Signup endpoint
app.post('/signup', (req, res) => {
  const { email, password } = req.body;
  let error = {};
  // Check if email and password are provided
  if (!email || !password) {
    error.email = 'Email is required';
    error.password = 'Password is required';

    return res.status(400).json({ error });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    error.email = 'Invalid email format';
    return res.status(400).json({ error });
  }

  // Check if password is at least 6 characters long
  if (password.length < 6) {
    error.password = 'Password must be at least 6 characters long';
    return res.status(400).json({ error });
  }

  // Check if email already exists
  const userExists = auth.some((user) => user.email === email);
  if (userExists) {
    error.userExists = 'Email already exists';
    return res.status(409).json({ error: 'Email already exists' });
  }

  // Add new user to auth.json
  auth.push({ email, password });
  fs.writeFile('./auth.json', JSON.stringify(auth), (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error writing to file');
    } else {
      // Generate JWT token
      const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: '1h' });

      // Return token
      res.json({ token });
    }
  });
});

function verifyToken(req, res, next) {
  if (req.method === 'OPTIONS') {
    return next();
  }

  if (!req.headers.authorization) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Forbidden' });
    }
    req.user = user;
    next();
  });
}

app.listen(8001, () => {
  console.log('Server listening on port 8001'); // Fix console log message
});

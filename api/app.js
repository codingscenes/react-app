const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const cors = require('cors');
const { readFile, writeFile } = require('./utility');

app.use(cors());
app.use(express.json());
// alternate way
// const notes = require('./notes.json');
// const notes = path.join(__dirname, 'notes.json';

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, 'notes.json'));
});

app.get('/search', (req, res) => {
  const { query } = req.query;
  if (!query) {
    res.status(400).send('Query parameter is missing');
    return;
  }
  readFile(path.join(__dirname, 'notes.json'), (err, data) => {
    if (err) {
      res.status(500).send('Error reading file');
      return;
    }
    const notes = data;
    const filteredNotes = notes.filter(
      (note) =>
        note.title.toLowerCase().includes(query.toLowerCase()) ||
        note.description.toLowerCase().includes(query.toLowerCase())
    );
    res.send(filteredNotes);
  });
});

app.get('/notes/:id', (req, res) => {
  const { id } = req.params;
  readFile(path.join(__dirname, 'notes.json'), (err, data) => {
    if (err) {
      res.status(500).send('Error reading file');
      return;
    }
    const notes = data;
    const note = notes.find((n) => n.id === +id);
    if (!note) {
      res.status(404).send('Note not found');
    } else {
      res.send(note);
    }
  });
});

app.post('/notes', (req, res) => {
  const { title, description } = req.body;
  const newId = Math.floor(Math.random() * 100) + 1;
  let errors = {};
  if (!title) {
    errors.title = 'Title is blank!';
  }
  if (!description) {
    errors.description = 'Description is blank!';
  }

  if (Object.keys(errors).length > 0) {
    res.status(422).send({ error: errors });
    return;
  }

  const note = {
    id: newId,
    title,
    description,
    date: new Date(),
  };
  readFile(path.join(__dirname, 'notes.json'), (err, data) => {
    if (err) {
      res.status(500).send('Error reading file');
      return;
    }
    const notes = data;
    notes.unshift(note);

    writeFile(path.join(__dirname, 'notes.json'), notes, (err) => {
      if (err) {
        res.status(500).send('Error writing to file');
      } else {
        res.status(201).send(note);
      }
    });
  });
});

app.put('/notes/:id/edit', (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  readFile(path.join(__dirname, 'notes.json'), (err, data) => {
    if (err) {
      res.status(500).send('Error reading file');
      return;
    }
    const notes = data;
    const noteIndex = notes.findIndex((user) => user.id === +id);
    if (noteIndex === -1) {
      res.status(404).send('Note is not available!');
    } else {
      const updatedNote = {
        ...notes[noteIndex],
        title,
        description,
      };
      notes[noteIndex] = updatedNote;

      writeFile(path.join(__dirname, 'notes.json'), notes, (err) => {
        if (err) {
          res.status(500).send('Error writing to file');
        } else {
          res.send(updatedNote);
        }
      });
    }
  });
});

app.delete('/notes/:id/delete', (req, res) => {
  const { id } = req.params;
  readFile(path.join(__dirname, 'notes.json'), (err, data) => {
    if (err) {
      res.status(500).send('Error reading file');
      return;
    }
    const notes = data;
    const noteIndex = notes.findIndex((user) => user.id === +id);
    if (noteIndex === -1) {
      res.status(404).send('Note not found');
    } else {
      notes.splice(noteIndex, 1);

      writeFile(path.join(__dirname, 'notes.json'), notes, (err) => {
        if (err) {
          res.status(500).send('Error writing to file');
        } else {
          res.send(`Note with id ${id} deleted`);
        }
      });
    }
  });
});

app.listen(8001, () => {
  console.log('Server listening on port 8001'); // Fix console log message
});

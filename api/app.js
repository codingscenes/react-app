const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get('/notes', async (req, res) => {
  const { query, max } = req.query;
  try {
    const data = await fs.promises.readFile(path.join(__dirname, 'notes.json'));
    let notes = JSON.parse(data);
    if (query) {
      const filteredNotes = notes.filter(
        (note) =>
          note.title.toLowerCase().includes(query.toLowerCase()) ||
          note.description.toLowerCase().includes(query.toLowerCase())
      );
      res.send(filteredNotes);
      return;
    }

    if (max) {
      notes = notes.slice(notes.length - max, notes.length);
    }
    res.send(notes);
  } catch (err) {
    res.status(500).send({ error: 'Error reading file' });
  }
});

app.get('/search', async (req, res) => {
  const { query } = req.query;
  if (!query) {
    res.status(400).send({ error: 'Query parameter is missing' });
    return;
  }
  try {
    const data = await fs.promises.readFile(path.join(__dirname, 'notes.json'));
    const notes = JSON.parse(data);
    const filteredNotes = notes.filter(
      (note) =>
        note.title.toLowerCase().includes(query.toLowerCase()) ||
        note.description.toLowerCase().includes(query.toLowerCase())
    );
    res.send(filteredNotes);
  } catch (err) {
    res.status(500).send({ error: 'Error reading file' });
  }
});

app.get('/notes/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const data = await fs.promises.readFile(path.join(__dirname, 'notes.json'));
    const notes = JSON.parse(data);
    const note = notes.find((n) => n.id === +id);
    if (!note) {
      res.status(404).send({ error: 'Note not found' });
    } else {
      res.send(note);
    }
  } catch (err) {
    res.status(500).send({ error: 'Error reading file' });
  }
});

app.post('/notes', async (req, res) => {
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
  try {
    const data = await fs.promises.readFile(path.join(__dirname, 'notes.json'));
    const notes = JSON.parse(data);
    notes.unshift(note);

    await fs.promises.writeFile(path.join(__dirname, 'notes.json'), JSON.stringify(notes));
    res.status(201).send(note);
  } catch (err) {
    res.status(500).send({ error: 'Error reading file' });
  }
});

app.put('/notes/:id/edit', async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
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
  try {
    const data = await fs.promises.readFile(path.join(__dirname, 'notes.json'));
    const notes = JSON.parse(data);
    const noteIndex = notes.findIndex((user) => user.id === +id);
    if (noteIndex === -1) {
      res.status(404).send({ error: 'Note is not available!' });
    } else {
      const updatedNote = {
        ...notes[noteIndex],
        title,
        description,
      };
      notes[noteIndex] = updatedNote;

      await fs.promises.writeFile(path.join(__dirname, 'notes.json'), JSON.stringify(notes));
      res.send(updatedNote);
    }
  } catch (err) {
    res.status(500).send({ error: 'Error reading file' });
  }
});

app.delete('/notes/:id/delete', async (req, res) => {
  const { id } = req.params;
  try {
    const data = await fs.promises.readFile(path.join(__dirname, 'notes.json'));
    const notes = JSON.parse(data);
    const noteIndex = notes.findIndex((user) => user.id === +id);
    if (noteIndex === -1) {
      res.status(404).send({ error: 'Note not found' });
    } else {
      notes.splice(noteIndex, 1);

      await fs.promises.writeFile(path.join(__dirname, 'notes.json'), JSON.stringify(notes));
      res.send(`Note with id ${id} deleted`);
    }
  } catch (err) {
    res.status(500).send({ error: 'Error reading file' });
  }
});

app.listen(8001, () => {
  console.log('Server listening on port 8001');
});

export async function fetchNotes({ signal }) {
  const response = await fetch('http://localhost:8001/notes', { signal });
  return await handleResponse(response);
}

export async function searchNotes(searchTerm) {
  const response = await fetch(`http://localhost:8001/search?query=${searchTerm}`);

  return await handleResponse(response);
}

export async function fetchNoteById({ signal, id }) {
  const response = await fetch(`http://localhost:8001/notes/${id}`, { signal });
  return await handleResponse(response);
}

export async function addNewNote(note) {
  const response = await fetch('http://localhost:8001/notes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: note.title,
      description: note.description,
    }),
  });

  return await handleResponse(response);
}

export async function updateNote({ id, payload }) {
  const response = await fetch(`http://localhost:8001/notes/${id}/edit`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: payload.title,
      description: payload.description,
    }),
  });

  return await handleResponse(response);
}

async function handleResponse(response) {
  if (!response.ok) {
    const error = new Error('Error occured while fetching notes!');
    error.code = response.status;
    error.message = error.code === 404 ? 'Something went wrong!' : await response.json();
    throw error;
  }
  return await response.json();
}

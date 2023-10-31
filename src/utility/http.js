export async function fetchNotes() {
  const response = await fetch('http://localhost:8001/notes');
  return await handleResponse(response);
}

export async function searchNotes(searchTerm) {
  console.log(searchTerm);
  const response = await fetch(`http://localhost:8001/search?query=${searchTerm}`);

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

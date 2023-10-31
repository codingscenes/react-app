export async function fetchNotes() {
  const response = await fetch('http://localhost:8001/notes');
  if (!response.ok) {
    const error = new Error('Error occured while fetching notes!');
    error.code = response.status;
    error.message = error.code === 404 ? 'Something went wrong!' : await response.json();
    throw error;
  }
  return await response.json();
}

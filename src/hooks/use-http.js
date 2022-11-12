import { useState } from 'react';

const useHttp = () => {
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState(null);

const sendRequest = async () => {
  setIsLoading(true);
  setError(null);
  try {
    const response = await fetch(
      'https://react-learning-project-6b928-default-rtdb.firebaseio.com/notes.json'
    );

    if (!response.ok) {
      throw new Error('Request failed!');
    }

    const data = await response.json();
    const loadedNotes = [];
    for (const noteKey in data) {
      loadedNotes.push({ id: noteKey, text: data[noteKey].text });
    }

  } catch (err) {
    setError(err.message || 'Something went wrong!');
  }
  setIsLoading(false);
};


}


export default useHttp;
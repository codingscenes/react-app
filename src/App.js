import React, { useState } from 'react';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
const DATA_URL =
  'https://raw.githubusercontent.com/codingscenes/react-app/http-get-request/data.json';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchContactHandler = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(DATA_URL);
      if (!response.ok) throw new Error('Something went wrong!');
      const result = await response.json();
      const data = result.data.map((contactData) => {
        return {
          id: contactData.id,
          contactName: contactData.name,
          contactNum: contactData.number,
          avatar: contactData.photo,
        };
      });
      setContacts(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const addContactHandler = (contact) => {
    console.log(contact);
  };

  let content = <p>No contact available!</p>;

  if (contacts.length > 0) {
    content = <ContactList contacts={contacts} />;
  }

  if (error) {
    content = <p className='error'>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading please wait...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <button>Add Contact</button>
        <button onClick={fetchContactHandler}>Fetch Contact</button>
      </section>
      <section>
        <AddContact onAddContact={addContactHandler} />
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
};

export default App;

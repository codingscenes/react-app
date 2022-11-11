import React, { useState } from 'react';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
const DB_URL =
  'https://fun-with-react-e16d9-default-rtdb.firebaseio.com/contact.json';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchContactHandler = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(DB_URL);
      if (!response.ok) throw new Error('Something went wrong!');
      const result = await response.json();
      console.log(result);
      const tempData = [];
      for (const key in result) {
        tempData.push({
          id: key,
          contactName: result[key].contactName,
          contactNum: result[key].contactNum,
          avatar: result[key].avatar,
        });
      }
      
      setContacts(tempData);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const addContactHandler = async (contact) => {
    const data = {
      contactName: contact.contactName,
      contactNum: contact.contactNum,
      avatar: contact.contactName.trim().replaceAll(' ', '') + '.svg',
    };
    const response = await fetch(DB_URL, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const result = await response.json();

    console.log(result);
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

import React from 'react';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';

const App = () => {
  const contactList = [
    {
      id: 1,
      contactName: 'Rohit Sharma',
      contactNum: '9833445566',
      avatar: 'RohitSharma.svg',
    },
    {
      id: 2,
      contactName: 'Mohit Sharma',
      contactNum: '8833445566',
      avatar: 'MohitSharma.svg',
    },
    {
      id: 3,
      contactName: 'Raj Kumar',
      contactNum: '7833444566',
      avatar: 'RajKumar.svg',
    },
  ];
  return (
    <React.Fragment>
      <section>
        <button>Add Contact</button>
        <button>Fetch Contact</button>
      </section>
      <section>
        <AddContact />
      </section>
      <section>
        <ContactList contacts={contactList} />
      </section>
    </React.Fragment>
  );
};

export default App;

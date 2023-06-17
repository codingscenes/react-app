import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch('https://jsonplaceholder.typicode.com/comments', { signal })
      .then((res) => res.json())
      .then((posts) => posts.map((post) => post.email))
      .then((emails) => {
        console.log(emails);
        setEmails(emails);
      })
      .catch((error) => {
        if (error.name === 'AbortError') {
          console.log('Request aborted!');
        } else {
          console.log('An error occured', error);
        }
      });
    return () => {
      controller.abort();
    };
  }, []);

  console.log('component rendered!');
  return (
    <div>
      <h1>About Page!!!</h1>

      <Link to={'/'}>Go to Home</Link>
      <hr />
      {emails.map((email) => (
        <h5 key={email}>{email}</h5>
      ))}
    </div>
  );
};

export default About;

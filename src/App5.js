import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    const cancelToken = axios.CancelToken.source();
    axios('https://jsonplaceholder.typicode.com/comments', {
      cancelToken: cancelToken.token,
    })
      .then((posts) => posts.data.map((post) => post.email))
      .then((emails) => {
        console.log(emails);
        setEmails(emails);
      })
      .catch((error) => {
        if (axios.isCancel(error)) {
          console.log('Request cancelled!');
        } else {
          console.log('An error occured', error);
        }
      });
    return () => {
      cancelToken.cancel();
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

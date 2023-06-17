import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    console.log('useEffect');
    const timer = setInterval(() => {
      setNumber((prev) => prev + 1);
    }, 1000);

    return () => {
      console.log('Cleaning up useEffect!');
      clearInterval(timer);
    };
  }, []);

  console.log('component rendered!');
  return (
    <div>
      <h1>About Page!!!</h1>
      <h1>{number}</h1>
      <hr />
      <Link to={'/'}>Go to Home</Link>
    </div>
  );
};

export default About;

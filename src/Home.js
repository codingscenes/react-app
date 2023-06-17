import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to Home!</h1>
      <Link to={'/About'}>Go to About</Link>
    </div>
  );
};

export default Home;

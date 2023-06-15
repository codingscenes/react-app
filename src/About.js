import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const [inputData, setInputData] = useState('');
  const [unsavedChanges, setUnsavedChanges] = useState(false);

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = 'Wanna leave?';
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setInputData(event.target.value);
    setUnsavedChanges(true);
  };

  const handleNavigation = () => {
    if (
      unsavedChanges &&
      window.confirm('Do you wann leave? Changes not saved yet!')
    ) {
      return;
    }
    navigate('/');
  };
  return (
    <div>
      <h2>Welcome to About Page!</h2>
      <input type='text' value={inputData} onChange={handleInputChange} />
      <button onClick={handleNavigation}>Go back to Home</button>
    </div>
  );
};

export default About;

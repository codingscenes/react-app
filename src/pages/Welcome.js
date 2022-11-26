import { Route } from 'react-router-dom';

const Welcome = () => {
  return (
    <section>
      <h1>Welcome here!</h1>
      <Route path='/welcome/:user'>
        <p>Welcome new user! This is waste of your time.</p>
      </Route>
    </section>
  );
};

export default Welcome;

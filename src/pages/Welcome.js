import { Route, useRouteMatch } from 'react-router-dom';

const Welcome = () => {
  const match = useRouteMatch();
  return (
    <section>
      <h1>Welcome here!</h1>
      <Route path={`${match.path}/:user`}>
        <p>Welcome new user! This is waste of your time.</p>
      </Route>
    </section>
  );
};

export default Welcome;

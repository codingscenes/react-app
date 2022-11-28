import { Link, Outlet } from 'react-router-dom';

const Welcome = () => {
  return (
    <section>
      <h1>Welcome here!</h1>
      <Link to='new-user'>New USer</Link>
      <Outlet />
    </section>
  );
};

export default Welcome;

import { Link, useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const loginHandler = () => {
    navigate('/users', { replace: true });
  };

  return (
    <div>
      <h1>HomePage</h1>
      <Link to='users'>Users</Link>
      <hr />
      <button onClick={loginHandler}>Login</button>
    </div>
  );
};
export default HomePage;

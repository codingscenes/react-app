import { useRouteError } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';

const ErrorPage = () => {
  const error = useRouteError();

  let title = 'An error occured!';
  let msg = 'Something went wrong! Please re-try';

  if (error.status === 500) {
    const data = error.data;
    msg = data.msg;
  }

  if (error.status === 404) {
    title = 'Path not found!';
    msg = 'Could not find the path!';
  }

  return (
    <>
      <MainNavigation />
      <main>
        <div className='container'>
          <div className='row'>
            <div className='col mx-auto mt-5'>
              <h1>{title}</h1>
              <p>{msg}</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
export default ErrorPage;

import { json, redirect, useRouteLoaderData } from 'react-router-dom';
import ShowDetails from '../components/ShowDetails';
import { getAuthToken } from '../utils/util';

const UserDetailsPage = () => {
  const user = useRouteLoaderData('user-details');

  return <ShowDetails user={user} />;
};
export default UserDetailsPage;

export async function loader({ request, params }) {
  const id = params.userId;
  const response = await fetch('http://localhost:8001/users/' + id);

  if (!response.ok) {
    throw json(
      { msg: 'Can not find user data' },
      {
        status: 500,
      }
    );
  }
  return response;
}

export async function action({ params, request }) {
  const id = params.userId;

  const token = getAuthToken();

  const response = await fetch(`http://localhost:8001/users/${id}/delete`, {
    method: request.method,
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
  if (!response.ok) {
    throw json(
      { msg: 'Can not find user data' },
      {
        status: 500,
      }
    );
  }

  return redirect('/users');
}

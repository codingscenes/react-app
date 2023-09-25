import { json, useLoaderData } from 'react-router-dom';
import UsersList from '../components/UsersList';

export const USER_API = 'http://localhost:8001/users';

const UsersPage = () => {
  const data = useLoaderData();

  if (data.isError) {
    return <p>{data.errorMsg}</p>;
  }
  return (
    <div className='container mt-5'>
      <div className='row'>
        <UsersList users={data} />
      </div>
    </div>
  );
};
export default UsersPage;

export async function loader() {
  const response = await fetch(USER_API);
  if (!response.ok) {
    // return { isError: true, errorMsg: 'Can not fetch the user list!' };
    // throw { msg: 'Can not fetch the user list!' };
    // throw new Response(JSON.stringify({ msg: 'Can not fetch the user list!' }), { status: 500 });
    throw json({ msg: 'Can not fetch the user list!' }, { status: 500 });
  }
  return response;
}

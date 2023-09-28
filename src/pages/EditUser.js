import { useRouteLoaderData } from 'react-router-dom';

import UserForm from '../components/UserForm';

const EditUser = () => {
  const data = useRouteLoaderData('user-details');

  console.log('data', data);

  return <UserForm user={data} />;
};
export default EditUser;

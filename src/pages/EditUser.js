import { useRouteLoaderData } from 'react-router-dom';

import UserForm from '../components/UserForm';

const EditUser = () => {
  const data = useRouteLoaderData('user-details');

  return <UserForm user={data} />;
};
export default EditUser;

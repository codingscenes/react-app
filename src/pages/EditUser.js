import { useRouteLoaderData } from 'react-router-dom';

import UserForm from '../components/UserForm';

const EditUserPage = () => {
  const data = useRouteLoaderData('user-details');

  return <UserForm user={data} />;
};
export default EditUserPage;

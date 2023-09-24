import { useParams } from 'react-router-dom';

const UserDetailPage = () => {
  const params = useParams();

  const userId = params.userId;

  return <div>UserDetail: {userId}</div>;
};
export default UserDetailPage;

import { Link, useParams } from 'react-router-dom';

const UserDetailPage = () => {
  const params = useParams();

  const userId = params.userId;

  return (
    <div>
      UserDetail: {userId}
      <hr />
      <Link to='..' relative='path'>
        Back
      </Link>
    </div>
  );
};
export default UserDetailPage;

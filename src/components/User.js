import { Link } from 'react-router-dom';

const User = ({ data }) => {
  return (
    <div className='card m-1' style={{ width: 200 }}>
      <Link to={`${data.id}`}>
        <img src={data.avatar} className='card-img-top' alt='...' />
        <div className='card-body mx-auto'>
          <h5 className='card-title'>{data.name}</h5>
        </div>
      </Link>
    </div>
  );
};
export default User;

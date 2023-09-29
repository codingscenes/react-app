import { Form, Link, useSubmit } from 'react-router-dom';

const ShowDetails = ({ user }) => {
  const submit = useSubmit();

  const deleteHandler = (event) => {
    event.preventDefault();
    const canDelete = window.confirm('Do you want to delete?');

    if (canDelete) {
      // proceed for delete action
      submit(null, { method: 'POST' });
    }
  };
  return (
    <div className='card flex-row mx-auto' style={{ width: '35rem' }}>
      <img style={{ width: '50%' }} src={user.avatar} alt='User avatar' />
      <div className='card-body'>
        <div className='d-flex justify-content-between'>
          <h5 className='card-title p-2'>
            {user.name}{' '}
            <span role='img' aria-label='star'>
              ⭐
            </span>
          </h5>
        </div>
        <div className='card-text'>
          <ul className='list-group' style={{ textAlign: 'left' }}>
            <li className='list-group-item'>
              Skills: {user.skills.join(', ')}{' '}
              <span role='img' aria-label='muscle'>
                💪
              </span>
            </li>
            <li className='list-group-item'>
              Experience: {user.experience}{' '}
              <span role='img' aria-label='rocket'>
                🚀
              </span>
            </li>
            <li className='list-group-item'>
              Address: {user.address.street}, {user.address.city}, {user.address.state} {user.address.zip}{' '}
              <span role='img' aria-label='house'>
                🏠
              </span>
            </li>
          </ul>
        </div>
        <div className='user-actions mt-2'>
          <Link to='edit' className='btn btn-sm  btn-primary m-1'>
            Edit
          </Link>

          <button className='btn btn-sm btn-danger m-1' onClick={deleteHandler}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
export default ShowDetails;

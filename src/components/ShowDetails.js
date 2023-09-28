const ShowDetails = ({ user }) => {
  return (
    <div className='card mx-auto' style={{ width: '18rem' }}>
      <img className='card-img-top' src={user.avatar} alt='User avatar' />
      <div className='card-body'>
        <h5 className='card-title'>
          {user.name}{' '}
          <span role='img' aria-label='star'>
            ⭐
          </span>
        </h5>
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
      </div>
    </div>
  );
};
export default ShowDetails;

const UserItem = (props) => {
  return (
    <li className='list-group-item' onClick={props.onUserSelected}>
          {props.username}
          <span className='badge'>
              {props.status}
          </span>
    </li>
  );
};

export default UserItem;

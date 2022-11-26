import { useState } from 'react';
import UserItem from './UserItem';
import UserStatus from './UserStatus';

const DUMMY_LIST = [
  { id: 'u1', name: 'Rohit', status: 'Offline' },
  { id: 'u2', name: 'Mohit', status: 'Online' },
  { id: 'u3', name: 'Rolly', status: 'Online' },
];

const Users = () => {
  const [userList, setUserList] = useState(DUMMY_LIST);
  const [selectedUser, setSelectedUser] = useState(userList[0]);

  const onStatusUpdateHandler = (updatedStatus, id) => {
    console.log(updatedStatus, id);
    const clonedUserList = userList.slice();
    const user = clonedUserList.find((user) => user.id === id);
    const userIndex = clonedUserList.findIndex((user) => user.id === id);
    const userCopy = { ...user, status: updatedStatus };
    clonedUserList[userIndex] = userCopy;

    setUserList(clonedUserList);
  };

  const onUserSelectedHandler = (id) => {
    const user = userList.find((user) => user.id === id);
    setSelectedUser(user);
  };

  return (
    <div className='row'>
      <div className='col-xs-6 col-sm-6 col-md-6 col-lg-6'>
        <ul className='list-group'>
          {userList.map((user) => (
            <UserItem
              key={user.id}
              username={user.name}
              status={user.status}
              onUserSelected={() => onUserSelectedHandler(user.id)}
            />
          ))}
        </ul>
      </div>
      <div className='col-xs-6 col-sm-6 col-md-6 col-lg-6'>
        <UserStatus
          id={selectedUser.id}
          username={selectedUser.name}
          status={selectedUser.status}
          onStatusUpdate={onStatusUpdateHandler}
        />
      </div>
    </div>
  );
};

export default Users;

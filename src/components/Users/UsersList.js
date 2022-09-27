import React from 'react';

import Card from '../UIElements/Card';
import classes from './UsersList.module.css';

const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      {props.users.length > 0 && (
        <ul>
          {props.users.map((user) => (
            <li key={user.id}>
              🧑{user.name} 📞(+91) {user.mobNo}
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
};

export default UsersList;

import * as React from 'react';
import {IUser} from '../types/user';

interface IUserListProps {
  selectedUsers: object[];
}

export const UserList = (props: IUserListProps) => {

  const list = props.selectedUsers.length > 0 ? (<ul>
    {
      props.selectedUsers.map((user: IUser) => (
        <li key={user.id}>
          {user.id} | {user.firstname} | {user.lastname} | {user.email}
        </li>
      ))
    }
  </ul>) : undefined;

  return (
    <section>
      User List
      { list }
    </section>
  )

};

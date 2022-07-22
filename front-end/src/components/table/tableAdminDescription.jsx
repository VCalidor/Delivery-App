import React, { useEffect, useState } from 'react';
import { userRequest } from '../../services/usersRequest';
import UserForAdmin from './tableAdmin';

const AdminTable = () => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await userRequest();
      setUserList([...users.customers, ...users.sellers]);
    };
    fetchUsers();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userList]);

  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Nome</th>
          <th>Email</th>
          <th>Tipo</th>
          <th>Excluir</th>
        </tr>
      </thead>
      <tbody>
        { userList.length > 0 && userList.map((user, index) => (
          <UserForAdmin
            key={ index }
            i={ index }
            user={ user }
          />
        ))}
      </tbody>
    </table>

  );
};

export default AdminTable;

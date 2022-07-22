import React from 'react';
import PropTypes from 'prop-types';
import { userDeleteRequest } from '../../services/usersRequest';

function UserForAdmin({ i, user }) {
  const deleteUser = async () => {
    const userIsDead = await userDeleteRequest(user.id);
    return userIsDead;
  };

  return (
    <tr>
      <td
        data-testid={ `admin_manage__element-user-table-item-number-${i}` }
      >
        { i + 1 }
      </td>
      <td
        data-testid={ `admin_manage__element-user-table-name-${i}` }
      >
        { user.name }
      </td>
      <td
        data-testid={ `admin_manage__element-user-table-email-${i}` }
      >
        { user.email }
      </td>
      <td
        data-testid={ `admin_manage__element-user-table-role-${i}` }
      >
        { user.role }
      </td>
      <td>
        <button
          type="button"
          data-testid={ `admin_manage__element-user-table-remove-${i}` }
          onClick={ () => deleteUser() }
        >
          Excluir
        </button>
      </td>
    </tr>
  );
}

UserForAdmin.propTypes = {
  i: PropTypes.number.isRequired,
  user: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default UserForAdmin;

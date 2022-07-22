import React from 'react';
import RegisterCard from '../components/cards/registerCard';
import AdminTable from '../components/table/tableAdminDescription';

function manage() {
  return (
    <main>
      <RegisterCard
        nameTestid="admin_manage__input-name"
        emailTestid="admin_manage__input-email"
        passwordTestid="admin_manage__input-password"
        errorTestId="admin_manage__element-invalid-register"
        signUpTestid="admin_manage__button-register"
        admin
      />
      <AdminTable />
    </main>
  );
}

export default manage;

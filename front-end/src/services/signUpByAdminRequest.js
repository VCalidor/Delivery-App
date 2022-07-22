import api from './api';

const signUpByAdminRequest = async ({ email, password, name, role }, token) => {
  await api.post('/users', { email, password, name, role }, {
    headers: {
      authorization: token,
    },
  });
};

export default signUpByAdminRequest;

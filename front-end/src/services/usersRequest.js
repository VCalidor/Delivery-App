import api from './api';

export const userRequest = async () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const { token } = user;
  const { data } = await api.get('/users', {
    headers: {
      authorization: token,
    } });
  return data;
};

export const userDeleteRequest = async (id) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const { token } = user;
  const { data } = await api.delete(`/users/${id}`, {
    headers: {
      authorization: token,
    } });
  return data;
};

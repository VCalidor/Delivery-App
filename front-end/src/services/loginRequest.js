import api from './api';

const loginRequest = async (email, password) => {
  const { data } = await api.post('/login', { email, password });
  return data;
};

export default loginRequest;

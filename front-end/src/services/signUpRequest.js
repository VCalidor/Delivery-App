import api from './api';

const signUpRequest = async (email, password, name) => {
  await api.post('/register', { email, password, name });
};

export default signUpRequest;

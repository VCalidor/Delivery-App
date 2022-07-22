import api from './api';

const salesRequest = async (token) => {
  const { data } = await api.get('/sales', {
    headers: {
      authorization: token,
    },
  });
  return data;
};

export default salesRequest;

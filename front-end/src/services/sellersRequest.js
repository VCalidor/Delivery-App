import api from './api';

const sellersRequest = async () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const { data } = await api.get('/users/sellers',
    { headers: {
      authorization: user.token },
    });
  return data;
};

export default sellersRequest;

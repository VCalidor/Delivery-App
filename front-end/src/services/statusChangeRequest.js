import api from './api';

const statusChangeRequest = async (id, status, token) => {
  const { data } = await api.patch(`/sales/${id}`,
    {
      status,
    },
    {
      headers: {
        authorization: token,
      },
    });

  return data;
};

export default statusChangeRequest;

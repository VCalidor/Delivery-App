import api from './api';

const orderByIdRequest = async (id) => {
  const { data } = await api.get(`/sales/${id}`);
  return data;
};

export default orderByIdRequest;

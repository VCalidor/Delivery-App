import api from './api';

const productsRequest = async () => {
  const { data } = await api.get('/products');
  return data;
};

export default productsRequest;

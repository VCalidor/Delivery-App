import api from './api';

const saleRequest = async (item) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const cart = JSON.parse(localStorage.getItem('carrinho'));

  const reqBody = { ...cart };

  Object.values(reqBody).forEach((value) => {
    value.productId = value.id;
    value.quantity = value.itemQty;
    delete value.itemQty;
    delete value.id;
    delete value.name;
    delete value.price;
  });

  const { data } = await api.post('/sales',
    {
      ...item,
      userId: user.id,
      productsArray: Object.values(reqBody),
    },
    { headers: { authorization: user.token } });
  return data;
};

export default saleRequest;

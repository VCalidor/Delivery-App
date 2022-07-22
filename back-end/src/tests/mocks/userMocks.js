const foundCustomerMock = {
  id: 3,
  name: 'Cliente Zé Birita',
  email: 'zebirita@email.com',
  password: '1c37466c159755ce1fa181bd247cb925',
  role: 'customer',
  createdAt: '2011-08-01T19:58:00.000Z',
  updatedAt: '2011-08-01T19:58:00.000Z'
};

const foundSellerMock = {
  id: 2,
  name: 'Fulana Pereira',
  email: 'fulana@deliveryapp.com',
  password: '3c28d2b0881bf46457a853e0b07531c6',
  role: 'seller',
  createdAt: '2011-08-01T19:58:00.000Z',
  updatedAt: '2011-08-01T19:58:00.000Z'
};

const foundAdminMock = {
  id: 1,
  name: 'Delivery App Admin',
  email: 'adm@deliveryapp.com',
  password: 'a4c86edecc5aee06eff8fdeda69e0d04',
  role: 'administrator',
  createdAt: '2011-08-01T19:58:00.000Z',
  updatedAt: '2011-08-01T19:58:00.000Z'
};

const allUsers = [foundAdminMock, foundSellerMock, foundCustomerMock];

const createdUserMock = {
  id: 4,
  name: "Xablauson da Silva Xablau",
  email: "xablau@email.com",
  password: "fb2e5e20920896af4921a54643e615a9",
  role: "customer",
  updatedAt: "2022-07-15T20:38:06.872Z",
  createdAt: "2022-07-15T20:38:06.872Z"
};

const jwtVerifyReturnMock = {
  id: 2,
  role: 'seller',
  name: 'Fulana Pereira',
  email: 'fulana@deliveryapp.com'
}

module.exports = {
  foundCustomerMock,
  foundSellerMock,
  foundAdminMock,
  allUsers,
  createdUserMock,
  jwtVerifyReturnMock
}
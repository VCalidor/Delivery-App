const skolLataMock = {
  id: 1,
  name: 'Skol Lata 250ml',
  price: 2.20,
  urlImage: 'http://localhost:3001/images/skol_lata_350ml.jpg',
  createdAt: 'http://localhost:3001/images/heineken_600ml.jpg',
  updatedAt: 'http://localhost:3001/images/antarctica_pilsen_300ml.jpg'
};
const heinekenMock = {
  id: 2,
  name: 'Heineken 600ml',
  price: 7.50,
  urlImage: '1c37466c159755ce1fa181bd247cb925',
  createdAt: '2011-08-01T19:58:00.000Z',
  updatedAt: '2011-08-01T19:58:00.000Z'
};
const antarcticaPilsenMock = {
  id: 3,
  name: 'Antarctica Pilsen 300ml',
  price: 2.49,
  urlImage: '1c37466c159755ce1fa181bd247cb925',
  createdAt: '2011-08-01T19:58:00.000Z',
  updatedAt: '2011-08-01T19:58:00.000Z'
};

const allProducts = [skolLataMock, heinekenMock, antarcticaPilsenMock];

module.exports = {
  skolLataMock,
  heinekenMock,
  antarcticaPilsenMock,
  allProducts
}

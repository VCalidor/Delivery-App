const sinon = require('sinon');
const chai = require('chai');
const jwt = require('jsonwebtoken');

const chaiHttp = require('chai-http');

const app = require('../../api/app');
const { product, user } = require('../../database/models');
const { skolLataMock, allProductsMock } = require('../mocks/productMocks');
const { jwtVerifyReturnMock, foundSellerMock } = require('../mocks/userMocks');
const { expect } = chai;

chai.use(chaiHttp);

describe('Faz a Requisição na rota', () => {


  describe('get /products/:id', () => {
    let chaiHttpResponse;

    afterEach(() => {
      product.findByPk.restore();
    });

    it('Ao passar os dados corretos retorna o status 200', async () => {
      sinon.stub(product, 'findByPk').resolves(skolLataMock);

      chaiHttpResponse = await chai
        .request(app)
        .get('/products/1')

      expect(chaiHttpResponse).to.have.status(200);
    });

    it('Ao passar os parametro invalido retorna o status 404', async () => {
      sinon.stub(product, 'findByPk').resolves(null);

      chaiHttpResponse = await chai
        .request(app)
        .get('/products/9999')

      expect(chaiHttpResponse).to.have.status(404);
    });
  });

  describe('get /products', () => {
    let chaiHttpResponse;

    afterEach(() => {
      product.findAll.restore();
    });

    it('Retorna o status 200', async () => {
      sinon.stub(product, 'findAll').resolves(allProductsMock);

      chaiHttpResponse = await chai
        .request(app)
        .get('/products')

      expect(chaiHttpResponse).to.have.status(200);
    });
  });

  describe('Post /products', () => {
    let chaiHttpResponse;

    afterEach(() => {
      product.findOrCreate.restore();
    });
    
    it('Ao passar os dados corretos retorna o status 201', async () => {
      sinon.stub(jwt, 'verify').returns(jwtVerifyReturnMock);
      sinon.stub(user, 'findOne').resolves(foundSellerMock);
      sinon.stub(product, 'findOrCreate').resolves([skolLataMock, true]);
      
      chaiHttpResponse = await chai
      .request(app)
      .post('/products')
      .set('authorization', 'token')
      .send({
        name: 'Skol Lata 250ml',
        price: 2.20,
        urlImage: 'http://localhost:3001/images/skol_lata_350ml.jpg'
      });
      
      expect(chaiHttpResponse).to.have.status(201);

      jwt.verify.restore();
      user.findOne.restore();
    });
    
    it('Fazer a requisição sem o headers authorization retorna o status 401', async () => {
      sinon.stub(product, 'findOrCreate').resolves([skolLataMock, true]);

      chaiHttpResponse = await chai
        .request(app)
        .post('/products')
        .send({
          name: 'Skol Lata 250ml',
          price: 2.20,
          urlImage: 'http://localhost:3001/images/skol_lata_350ml.jpg'
        });

      expect(chaiHttpResponse).to.have.status(401);
    });
  });
});
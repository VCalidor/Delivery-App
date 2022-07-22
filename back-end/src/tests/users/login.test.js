const sinon = require('sinon');
const chai = require('chai');

const chaiHttp = require('chai-http');

const app = require('../../api/app');
const { user } = require('../../database/models');
const { foundCustomerMock } = require('../mocks/userMocks');
const { expect } = chai;

chai.use(chaiHttp);

describe('Faz a Requisição na rota', () => {
  describe('/login', () => {
    let chaiHttpResponse;

    afterEach(() => {
      user.findOne.restore();
    });

    it('Ao passar os dados corretos, retorna o status 200', async () => {
      sinon.stub(user, 'findOne').resolves(foundCustomerMock);

      chaiHttpResponse = await chai
        .request(app)
        .post('/login')
        .send({
          email: 'zebirita@email.com',
          password: '$#zebirita#$'
        });

      expect(chaiHttpResponse).to.have.status(200);
    });

    it('Ao passar os dados incorretos, retorna o status 401', async () => {
      sinon.stub(user, 'findOne').resolves(foundCustomerMock);

      chaiHttpResponse = await chai
        .request(app)
        .post('/login')
        .send({
          email: 'zebirita@email.com',
          password: 'xablau'
        });

      expect(chaiHttpResponse).to.have.status(401);
    });
  });
});
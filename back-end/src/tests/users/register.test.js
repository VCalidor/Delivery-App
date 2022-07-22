const sinon = require('sinon');
const chai = require('chai');

const chaiHttp = require('chai-http');

const app = require('../../api/app');
const { user } = require('../../database/models');
const { foundCustomerMock, createdUserMock } = require('../mocks/userMocks');
const { expect } = chai;

chai.use(chaiHttp);

describe('Faz a Requisição na rota', () => {
  describe('/register', () => {
    let chaiHttpResponse;

    afterEach(() => {
      user.findOne.restore();
    });

    it('Ao passar os dados corretos, retorna o status 201', async () => {
      sinon.stub(user, 'findOne').resolves(null);
      sinon.stub(user, 'create').resolves(createdUserMock);

      chaiHttpResponse = await chai
        .request(app)
        .post('/register')
        .send({
          email: 'xablau@email.com',
          name: 'Xablauson da Silva Xablau',
          password: 'xablau123456'
        });

      expect(chaiHttpResponse).to.have.status(201);

      user.create.restore();
    });

    it('Ao passar um email existente, retorna o status 409', async () => {
      sinon.stub(user, 'findOne').resolves(foundCustomerMock);

      chaiHttpResponse = await chai
        .request(app)
        .post('/register')
        .send({
          email: 'zebirita@email.com',
          name: 'Cliente Zé Birita',
          password: 'zebirita12354'
        });

      expect(chaiHttpResponse).to.have.status(409);
    });
  });
});
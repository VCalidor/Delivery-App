const sinon = require('sinon');
const chai = require('chai');

const chaiHttp = require('chai-http');

const app = require('../../api/app');
const { user } = require('../../database/models');
const { allUsers, jwtVerifyReturnMock, foundSellerMock, foundAdminMock } = require('../mocks/userMocks');
const jwt = require('jsonwebtoken');
const { expect } = chai;

chai.use(chaiHttp);

describe('Faz a Requisição na rota', () => {
  describe('get /users/sellers', () => {
    let chaiHttpResponse;

    it('Ao passar os dados corretos, retorna o status 200', async () => {
      sinon.stub(jwt, 'verify').returns(jwtVerifyReturnMock);
      sinon.stub(user, 'findOne').resolves(foundSellerMock);
      sinon.stub(user, 'findAll').resolves(allUsers);

      chaiHttpResponse = await chai
        .request(app)
        .get('/users/sellers')
        .set('authorization', 'token')

      expect(chaiHttpResponse).to.have.status(200);

      user.findOne.restore();
      jwt.verify.restore();
      user.findAll.restore();
    });

    it('Ao fazer a requisição sem o authorization retorna o status 401', async () => {
      chaiHttpResponse = await chai
        .request(app)
        .get('/users/sellers')

      expect(chaiHttpResponse).to.have.status(401);
    });
  });

  describe('delete /users/:id', () => {
    let chaiHttpResponse;

    it('Ao passar os dados corretos, retorna o status 200', async () => {
      sinon.stub(jwt, 'verify').returns(jwtVerifyReturnMock);
      sinon.stub(user, 'findOne').resolves(foundAdminMock);
      sinon.stub(user, 'destroy').resolves(1);

      chaiHttpResponse = await chai
        .request(app)
        .delete('/users/1')
        .set('authorization', 'token')

      expect(chaiHttpResponse).to.have.status(200);

      user.findOne.restore();
      jwt.verify.restore();
      user.destroy.restore();
    });

    it('Ao passar um usuario que não existe, retorna o status 404', async () => {
      sinon.stub(jwt, 'verify').returns(jwtVerifyReturnMock);
      sinon.stub(user, 'findOne').resolves(foundAdminMock);
      sinon.stub(user, 'destroy').resolves(0);

      chaiHttpResponse = await chai
        .request(app)
        .delete('/users/999')
        .set('authorization', 'token')

      expect(chaiHttpResponse).to.have.status(404);

      user.findOne.restore();
      jwt.verify.restore();
      user.destroy.restore();
    });

    it('Ao fazer a requisição sem o authorization retorna o status 401', async () => {
      chaiHttpResponse = await chai
        .request(app)
        .delete('/users/1')

      expect(chaiHttpResponse).to.have.status(401);
    });

  });
});
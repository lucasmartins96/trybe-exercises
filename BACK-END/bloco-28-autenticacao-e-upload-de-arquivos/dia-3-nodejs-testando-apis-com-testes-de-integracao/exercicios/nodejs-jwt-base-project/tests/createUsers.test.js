const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');

const server = require('../src/api/app');

const { MongoClient } = require('mongodb');
const { MongoMemoryServer } = require('mongodb-memory-server');
const usersModel = require('../src/models/user');

chai.use(chaiHttp);

const { expect } = chai;

describe.only('POST /api/users', () => {
  describe('quando é criado com sucesso', () => {
    let response = {};
    const DBServer = new MongoMemoryServer();

    before(async () => {
      const URLMock = await DBServer.getUri();
      const connectionMock = await MongoClient.connect(URLMock, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

      sinon.stub(MongoClient, 'connect').resolves(connectionMock);
      sinon.stub(usersModel, 'registerUser').resolves({
        _id: '54759eb3c090d83494e2d804',
        username: 'jane',
        password: 'senha123',
      });

      response = await chai.request(server).post('/api/users').send({
        username: 'jane',
        password: 'senha123',
      });
    });

    after(async () => {
      MongoClient.connect.restore();
      usersModel.registerUser.restore();
      await DBServer.stop();
    });

    it('retorna o código de status 201', () => {
      expect(response).to.have.status(201);
    });

    it('retorna um objeto', () => {
      expect(response.body).to.be.a('object');
    });

    it('o objeto possui a propriedade "message"', () => {
      expect(response.body).to.have.property('message');
    });

    it('a propriedade "message" possui o texto "Novo usuário criado com sucesso"', () => {
      expect(response.body.message).to.be.equal('Novo usuário criado com sucesso');
    });

    it('o objeto possui a propriedade "user"', () => {
      expect(response.body).to.have.property('user');
    });

    it('o objeto "user" possui a propriedade "_id"', () => {
      expect(response.body.user).to.have.property('_id');
    });

    it('o objeto "user" possui a propriedade "username"', () => {
      expect(response.body.user).to.have.property('username');
    });

    it('o objeto "user" possui a propriedade "password"', () => {
      expect(response.body.user).to.have.property('password');
    });

    it('o objeto possui a propriedade "token"', () => {
      expect(response.body).to.have.property('token');
    });

  });
});

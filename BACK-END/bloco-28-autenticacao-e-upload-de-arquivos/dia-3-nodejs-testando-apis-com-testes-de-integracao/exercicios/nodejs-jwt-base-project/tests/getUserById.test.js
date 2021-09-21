const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');

const server = require('../src/api/app');

const { MongoClient } = require('mongodb');
const { MongoMemoryServer } = require('mongodb-memory-server');

chai.use(chaiHttp);
const { expect } = chai;

describe('GET /api/users/:userId', () => {
  describe('quando o token não for passado', () => {
    let response = {};
    const DBServer = new MongoMemoryServer();

    before(async () => {
      const URLMock = await DBServer.getUri();
      const connectionMock = await MongoClient.connect(URLMock, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

      sinon.stub(MongoClient, 'connect').resolves(connectionMock);

      response = await chai.request(server).get('/api/users/:userId').send({
        userId: '54759eb3c090d83494e2d804',
      });
    });

    after(async () => {
      MongoClient.connect.restore();
      await DBServer.stop();
    });

    it('retorna o código de status 400', () => {
      expect(response).to.have.status(400);
    });

    it('retorna um objeto', () => {
      expect(response.body).to.be.a('object');
    });

    it('o objeto possui a propriedade "message"', () => {
      expect(response.body.error).to.have.property('message');
    });

    it('a propriedade "message" possui o texto "Token não encontrado ou informado"', () => {
      expect(response.body.error.message).to.be.equal(
        'Token não encontrado ou informado'
      );
    });
  });

  describe('quando o parâmetro ID da requisição não é igual ao ID que está no token', () => {
    let response = {};

    const TOKEN =
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI2MTQ5MWVmNjliMWY2ZjJkZDUwZTRhMzgiLCJ1c2VybmFtZSI6Imx1Y2FzIG1hcnRpbnMiLCJhZG1pbiI6ZmFsc2V9.O3SzlkrK1iLptXNn66y4mROd1fL1eRLjGncNXYNGu9A';
    const DBServer = new MongoMemoryServer();

    before(async () => {
      const URLMock = await DBServer.getUri();
      const connectionMock = await MongoClient.connect(URLMock, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

      sinon.stub(MongoClient, 'connect').resolves(connectionMock);

      response = await chai
        .request(server)
        .get('/api/users/:userId')
        .set('authorization', TOKEN)
        .send({
          userId: '54759eb3c090d83494e2d804',
        });
    });

    after(async () => {
      MongoClient.connect.restore();
      await DBServer.stop();
    });

    it('retorna o código de status 401', () => {
      expect(response).to.have.status(401);
    });

    it('retorna um objeto', () => {
      expect(response.body).to.be.a('object');
    });

    it('o objeto possui a propriedade "error"', () => {
      expect(response.body).to.have.property('error');
    });

    it('o objeto possui a propriedade "message" dentro do objeto "error"', () => {
      expect(response.body.error).to.have.property('message');
    });

    it('a propriedade "message" possui o texto "Acesso negado"', () => {
      expect(response.body.error.message).to.be.equal('Acesso negado');
    });
  });

  describe('quando o parâmetro ID da requisição é igual ao ID que está no token', () => {
    let response = {};

    const TOKEN =
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI2MTQ5MWVmNjliMWY2ZjJkZDUwZTRhMzgiLCJ1c2VybmFtZSI6Imx1Y2FzIG1hcnRpbnMiLCJhZG1pbiI6ZmFsc2V9.O3SzlkrK1iLptXNn66y4mROd1fL1eRLjGncNXYNGu9A';
    const DBServer = new MongoMemoryServer();

    before(async () => {
      const URLMock = await DBServer.getUri();
      const connectionMock = await MongoClient.connect(URLMock, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

      sinon.stub(MongoClient, 'connect').resolves(connectionMock);

      response = await chai
        .request(server)
        .get('/api/users/61491ef69b1f6f2dd50e4a38')
        .set('authorization', TOKEN);
    });

    after(async () => {
      MongoClient.connect.restore();
      await DBServer.stop();
    });

    it('retorna o código de status 200', () => {
      expect(response).to.have.status(200);
    });

    it('retorna um objeto', () => {
      expect(response.body).to.be.a('object');
    });

    it('o objeto possui a propriedade "username"', () => {
      expect(response.body).to.have.property('username');
    });

    it('o objeto possui a propriedade "admin"', () => {
      expect(response.body).to.have.property('admin');
    });
  });
});

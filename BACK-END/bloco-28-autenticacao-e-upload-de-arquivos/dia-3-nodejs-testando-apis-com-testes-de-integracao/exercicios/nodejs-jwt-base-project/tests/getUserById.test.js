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
      expect(response.body.error.message).to.be.equal('Token não encontrado ou informado');
    });
  });
});

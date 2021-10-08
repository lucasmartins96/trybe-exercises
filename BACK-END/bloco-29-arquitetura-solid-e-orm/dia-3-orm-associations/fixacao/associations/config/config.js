module.exports = {
  development: {
    username: 'root',
    password: '12345678',
    database: 'associations',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  test: {
    username: 'root',
    password: '12345678', // preencha com a senha do seu banco de dados, caso tenha
    database: 'associations_test',
    host: '127.0.0.1',
    dialect: 'mysql',
    // adicione essa linha a sua configuração para omitir mensagens de log no orm
    logging: false,
  },
  production: {
    username: 'root',
    password: null,
    database: 'database_production',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
};

const connection = require('./connection');

const create = async (firstName, lastName, email, password) => {
  const db = await connection();
  const result = await db
    .collection('users')
    .insertOne({ firstName, lastName, email, password });
  return {
    id: result.insertedId,
    firstName,
    lastName,
    email,
    password,
  };
};

const getAll = async () => {
  const db = await connection();
  const users = await db.collection('users').find().toArray();
  const usersWithId = users.map(({ _id, firstName, lastName, email, password }) => ({
    id: _id,
    firstName,
    lastName,
    email,
    password,
  }));
  return usersWithId;
};

module.exports = {
  create,
  getAll,
};

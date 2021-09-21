const connect = require('./connection');
const { ObjectID } = require('mongodb');

const registerUser = async (username, password) => {
  const db = await connect();

  const result = await db.collection('users').insertOne({ username, password });
  const { _id } = result.ops[0];
  return { _id, password, username };
};

const findUser = async (username) =>
  connect().then((db) => db.collection('users').findOne({ username }));

const findUserById = async (id) => {
  const db = await connect();
  const result = await db.collection('users').findOne(ObjectID(id));
  return result;
};

module.exports = { registerUser, findUser, findUserById };

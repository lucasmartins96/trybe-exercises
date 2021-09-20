const connect = require('./connection');
const { ObjectId } = require('mongodb')

const registerUser = async (username, password) =>
  connect().then((db) =>
    db.collection('users').insertOne({ username, password })
  ).then(result => result.ops[0].username );

const findUser = async (username) =>
  connect().then((db) => db.collection('users').findOne({ username }));

const findUserById = async (id) => {
  const db = await connect();
  const { result } = db.collection('users').findOne({ _id: ObjectId(id)});
  return result;
}

module.exports = { registerUser, findUser, findUserById };

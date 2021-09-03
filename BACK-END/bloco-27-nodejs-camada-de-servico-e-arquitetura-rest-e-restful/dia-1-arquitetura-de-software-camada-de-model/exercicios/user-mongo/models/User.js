const { ObjectId } = require('mongodb');
const connection = require('./connection');

const collectionUsers = 'users';

const create = async (firstName, lastName, email, password) => {
  const db = await connection();
  const result = await db
    .collection(collectionUsers)
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
  const users = await db.collection(collectionUsers).find().toArray();
  const usersWithId = users.map(({ _id, firstName, lastName, email, password }) => ({
    id: _id,
    firstName,
    lastName,
    email,
    password,
  }));
  return usersWithId;
};

const findById = async (id) => {
  const db = await connection();
  const userData = await db.collection(collectionUsers).findOne(new ObjectId(id));

  if (!userData) return null;

  return userData;
};

module.exports = {
  create,
  getAll,
  findById,
};

const connection = require('./connection');
const { ObjectId } = require('mongodb');

const getAll = async () => {
  return connection()
    .then((db) => db.collection('books').find().toArray())
    .then((authors) =>
      authors.map(({ _id, title, author_id }) => ({
        id: _id,
        title,
        author_id,
      }))
    );
};

const findById = async (id) => {
  if (!ObjectId.isValid(id)) {
    return null;
  }

  const bookData = await connection().then((db) =>
    db.collection('books').findOne(new ObjectId(id))
  );

  if (!bookData) return null;

  return bookData;
};

const isValid = (title, authorId) => {
  if (!authorId || typeof authorId !== 'number') return false;
  if (!title || typeof title !== 'string') return false;

  return true;
};

const create = async (title, author_id) =>
  connection()
    .then((db) => db.collection('books').insertOne({ title, author_id }))
    .then((result) => ({ id: result.insertedId, title, author_id }));

module.exports = {
  getAll,
  findById,
  isValid,
  create,
};

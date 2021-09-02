const connection = require('./connection');
const Author = require('./Author');

const serialize = ({ id, title }) => ({
  id,
  title,
});

const getAll = async () => {
  const [books] = await connection.execute('SELECT id, title FROM model_example.books;');
  return books.map(serialize);
};

const findById = async (id) => {
  const query = 'SELECT id, title FROM model_example.books WHERE id = ?;';
  const [bookData] = await connection.execute(query, [id]);

  if (bookData.length === 0) return null;

  return serialize(bookData[0]);
};

const isValid = async (title, authorId) => {
  /*
    Título não pode ser vazio;
    Título precisa ter pelo menos três caracteres;
    O campo author_id não pode ser vazio;
    O campo author_id só é válido se existir um autor com esse id;
  */
  const isValidAuthorId = (await Author.findById(authorId)) ? true : false;
  if (!title || title.length < 3) return false;
  if (!isValidAuthorId) return false;
  return true;
};

const create = async (title, authorId) =>
  connection.execute('INSERT INTO model_example.books (title, author_id) VALUES (?,?)', [
    title,
    authorId,
  ]);

module.exports = {
  getAll,
  findById,
  isValid,
  create,
};

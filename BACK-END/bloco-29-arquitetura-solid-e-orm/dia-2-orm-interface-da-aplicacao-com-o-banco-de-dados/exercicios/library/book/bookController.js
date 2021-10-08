const express = require('express');
const router = express.Router();
const { Book } = require('../models');

router.get('/books', async (_req, res) => {
  try {
    const books = await Book.findAll();
    return res.status(200).json(books);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

router.get('/book/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByPk(id);
    return res.status(200).json(book);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

router.post('/book', async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;
    const newBook = await Book.create({ title, author, pageQuantity });
    return res.status(200).json(newBook);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

router.post('/book/:id', async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;
    const { id } = req.params;

    const [updateBook] = await Book.update(
      { title, author, pageQuantity },
      { where: { id } }
    );

    console.log(updateBook); //retorna: 1 para encontrado e 0 para não encontrado

    if (!updateBook) return res.status(404).json({ message: 'Livro não encontrado' });

    return res.status(200).json({ message: 'Livro atualizado com sucesso!' });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

router.delete('/book/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleteBook = await Book.destroy({ where: { id } });

    console.log(deleteBook); //retorna: 1 para encontrado e 0 para não encontrado

    if (!updateBook) return res.status(404).json({ message: 'Livro não encontrado' });

    return res.status(200).json({ message: 'Livro excluído com sucesso!' });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

module.exports = router;

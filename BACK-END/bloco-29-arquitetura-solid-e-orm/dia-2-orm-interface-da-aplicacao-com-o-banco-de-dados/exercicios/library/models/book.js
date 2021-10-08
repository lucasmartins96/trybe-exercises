const Book = (sequelize, DataTypes) => {
  return sequelize.define(
    'Book',
    {
      title: DataTypes.STRING,
      author: DataTypes.STRING,
      pageQuantity: DataTypes.INTEGER,
    },
    {
      underscored: true,
      tableName: 'Books',
    }
  );
};

module.exports = Book;

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('Books', 'update_at', 'updated_at');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('Books', 'updated_at', 'update_at');
  },
};

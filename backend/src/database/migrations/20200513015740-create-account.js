'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('accounts', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      account_types_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'account_types', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT',
      },
      opening_balance: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('accounts');
  }
};
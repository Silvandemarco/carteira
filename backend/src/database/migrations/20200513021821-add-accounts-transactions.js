'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'transactions', 
      'account_id',
      {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {model: 'accounts', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'transactions', 
      'account_id',
    );
  }
};

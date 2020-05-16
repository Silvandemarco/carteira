'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'transactions', 
      'category_id',
      {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {model: 'categories', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT',
      },
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'transactions', 
      'category_id',
    );
  }
};
